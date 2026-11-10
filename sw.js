/* Ricky Saif service worker.
 * Network-first, so visitors always get the live site. The cache is only an
 * offline fallback. A new sw.js activates immediately (skipWaiting + claim)
 * and old caches are deleted. Bump VERSION only to force-purge caches.
 * Never cache or intercept cross-origin requests (Supabase auth/API, analytics)
 * or non-GET requests. Keep this file at /sw.js: never delete or rename it,
 * or browsers keep running the last version they saw. */
const VERSION = "v1";
const CACHE = "rs-" + VERSION;
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.add(new Request(OFFLINE_URL, { cache: "reload" })))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js") return;

  event.respondWith(
    fetch(req, { cache: "no-cache" })
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() =>
        caches.match(req).then((hit) =>
          hit || (req.mode === "navigate" ? caches.match(OFFLINE_URL) : Response.error())
        )
      )
  );
});
