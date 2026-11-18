/* Motion for landing pages (_layouts/landing.html).
 *
 * Every effect starts from content that is already visible in the HTML. This
 * script only hides things it is about to animate, and only when they are
 * still off-screen, so a visitor without JavaScript, or one who prefers
 * reduced motion, sees the finished page.
 *
 *   a[data-cc-expires]   sign-up link; points to data-cc-fallback once ended
 *   [data-reveal]        fades up when it scrolls into view (--d staggers it;
 *                        add data-cc-keep when children animate after it)
 *   [data-cc-phones]     the three phones start stacked and fan out
 *   [data-cc-timeline]   the line draws, then each step appears
 *   [data-count-to]      counts up from 0
 *   .rs-timescale        working-day lines fill one by one
 *   [data-cc-adstage]    proof 2: scan, flag, rewrite, Figma; loops 3 times
 *   [data-cc-terminal]   plays each scene: types the prompt, ticks the steps,
 *                        shows the result card; [data-scene-tab] switches scenes
 */
(function () {
  "use strict";

  // 0. Links to a meetup's sign-up page fall back to the events list once
  //    that meetup has ended (the site only rebuilds on a push).
  Array.prototype.forEach.call(document.querySelectorAll("a[data-cc-expires]"), function (a) {
    var end = Date.parse(a.getAttribute("data-cc-expires"));
    if (isNaN(end) || end > Date.now()) return;
    a.setAttribute("href", a.getAttribute("data-cc-fallback") || "/events/");
    a.removeAttribute("target");
  });

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var animate = !reduce && "IntersectionObserver" in window;
  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  // 1. Terminal scenes. It plays each scene in turn: types the prompt, ticks
  //    each step, then shows the "done" line with the result card and the
  //    scene's tag (before or after, see below). After two rounds it rests on
  //    the last scene. The tabs switch scenes and stop the autoplay. With
  //    reduced motion the tabs still work; scenes just appear finished.
  each(document.querySelectorAll("[data-cc-terminal]"), function (term) {
    var visual = term.closest(".cc-hero-visual") || term;
    var scenes = term.querySelectorAll(".cc-term-scene");
    var nav = visual.querySelector("[data-cc-scene-nav]");
    var tabs = nav ? nav.querySelectorAll("[data-scene-tab]") : [];
    if (!scenes.length) return;
    var texts = Array.prototype.map.call(scenes, function (s) {
      var t = s.querySelector("[data-cc-type]");
      return t ? t.textContent : "";
    });
    var plays = 0, maxPlays = scenes.length * 2, auto = true, timers = [];

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function show(i) {
      each(visual.querySelectorAll("[data-scene]"), function (el) {
        el.classList.toggle("is-scene", el.getAttribute("data-scene") === String(i));
      });
      each(tabs, function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-scene-tab") === String(i) ? "true" : "false");
      });
    }
    function play(i) {
      plays++;
      timers.forEach(clearTimeout); timers = [];
      var scene = scenes[i];
      var typed = scene.querySelector("[data-cc-type]");
      var steps = scene.querySelectorAll(".cc-term-step");
      var preview = visual.querySelector('.cc-preview[data-scene="' + i + '"]');
      var tag = visual.querySelector('.cc-chip--b[data-scene="' + i + '"]');
      each(steps, function (s) { s.classList.remove("is-on"); });
      each(visual.querySelectorAll(".cc-preview, .cc-chip--b"), function (p) { p.classList.remove("is-on"); });
      typed.textContent = "";
      show(i);
      var full = texts[i], n = 0;
      (function type() {
        typed.textContent = full.slice(0, ++n);
        if (n < full.length) later(type, 16 + Math.random() * 28);
        else {
          // The working steps tick in; the "done" line (the last step) comes
          // in together with the result card. The tag comes 2.5s after the
          // result, or, with data-tag-first, 2s before it, while it works.
          var t = 450, last = steps.length - 1;
          var tagFirst = tag && tag.hasAttribute("data-tag-first");
          var on = function (el) { return function () { if (el) el.classList.add("is-on"); }; };
          each(steps, function (s, k) { if (k < last) { later(on(s), t); t += 650; } });
          if (tagFirst) { later(on(tag), t); t += 2000; }
          later(function () { on(steps[last])(); on(preview)(); }, t);
          if (tag && !tagFirst) later(on(tag), t + 2500);
          if (auto && plays < maxPlays) later(function () { play((i + 1) % scenes.length); }, t + 6000);
        }
      })();
    }

    if (nav) {
      nav.hidden = false;
      each(tabs, function (b) {
        b.addEventListener("click", function () {
          var i = parseInt(b.getAttribute("data-scene-tab"), 10);
          auto = false;
          if (animate) play(i); else show(i);
        });
      });
    }
    if (!animate) return;

    visual.classList.add("is-armed");
    scenes[0].querySelector("[data-cc-type]").textContent = "";
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      if (auto) later(function () { play(0); }, 500);
    }, { threshold: 0.3 });
    io.observe(term);
  });

  if (!animate) return;

  // 1b. Ad workflow stage (proof 2). Four steps, matching the numbered list
  //     beside it: scan the CSV, flag weak ads, sub-agents rewrite them (the
  //     counter runs), Figma prints the design variations. It loops three
  //     times, then rests on the finished state.
  each(document.querySelectorAll("[data-cc-adstage]"), function (stage) {
    var box = stage.closest(".cc-adcase") || stage;
    var items = box.querySelectorAll("[data-step-ref]");
    var count = stage.querySelector("[data-cc-adcount]");
    var timers = [], plays = 0, maxPlays = 3;
    var at = [400, 2300, 3700, 6300];          // ms from the start of a round
    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function set(n) {
      for (var k = 1; k <= 4; k++) stage.classList.toggle("is-s" + k, k <= n);
      each(items, function (li) { li.classList.toggle("is-on", +li.getAttribute("data-step-ref") === n); });
    }
    function countUp() {
      var start = null, dur = 2200, to = 100;
      (function tick(t) {
        if (start === null) start = t;
        var p = Math.min(1, (t - start) / dur);
        count.textContent = Math.round(to * (1 - Math.pow(1 - p, 2))) + (p === 1 ? "+" : "");
        if (p < 1) requestAnimationFrame(tick);
      })(performance.now());
    }
    function round() {
      plays++;
      set(0);
      if (count) count.textContent = "0";
      at.forEach(function (ms, k) {
        later(function () { set(k + 1); if (k === 2 && count) later(countUp, 600); }, ms);
      });
      later(function () {
        if (plays < maxPlays) round();
        else each(items, function (li) { li.classList.remove("is-on"); });
      }, at[3] + 5200);
    }
    stage.classList.add("is-armed");
    set(0);
    if (count) count.textContent = "0";
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      later(round, 500);
    }, { threshold: 0.45 });
    io.observe(stage);
  });

  var vh = window.innerHeight || document.documentElement.clientHeight;
  var onScreen = function (el) { return el.getBoundingClientRect().top < vh * 0.88; };

  function observe(els, opts, armClass, onEnter) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        entry.target.classList.add("is-in");
        if (onEnter) onEnter(entry.target);
      });
    }, opts);
    Array.prototype.forEach.call(els, function (el) {
      if (onScreen(el) && !onEnter) return; // already visible: leave it alone
      if (armClass) el.classList.add(armClass);
      io.observe(el);
    });
  }

  // 2. Reveal. Plain reveals drop their classes once done, so hover effects
  //    get their own transitions back.
  var reveals = document.querySelectorAll("[data-reveal]");
  observe(reveals, { rootMargin: "0px 0px -10% 0px" }, "cc-armed");
  Array.prototype.forEach.call(reveals, function (el) {
    if (el.hasAttribute("data-cc-phones") || el.hasAttribute("data-cc-timeline") || el.hasAttribute("data-cc-keep")) return;
    el.addEventListener("transitionend", function done(e) {
      if (e.target !== el || e.propertyName !== "opacity") return;
      el.classList.remove("cc-armed", "is-in");
      el.removeEventListener("transitionend", done);
    });
  });

  // 3. Working-day lines (styles in style.scss).
  observe(document.querySelectorAll(".rs-timescale"), { threshold: 0.5 }, "is-armed");

  // 4. Count-up.
  observe(document.querySelectorAll("[data-count-to]"), { threshold: 0.6 }, null, function (el) {
    var to = parseInt(el.getAttribute("data-count-to"), 10);
    if (isNaN(to)) return;
    var start = null, dur = 1600;
    el.textContent = "0";
    function tick(t) {
      if (start === null) start = t;
      var p = Math.min(1, (t - start) / dur);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });

})();
