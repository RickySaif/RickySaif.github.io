---
layout: page
title: "Writing"
subtitle: "Essays, posts, and the two books I wrote."
permalink: /writing/
lang: en
---

Two books, two essays, and the posts. The books came out of thirteen years advising organizations. The essays are about money.

<section class="rs-section">
  <p class="rs-eyebrow">Books</p>
  <h2>The two books I wrote</h2>
  <p class="rs-section-intro">I have advised companies for thirteen years. These are the two books I wrote in that time.</p>

  <div class="rs-entries">
    <div class="rs-entry">
      <p class="rs-entry-meta">Book &middot; 2019</p>
      <h3><a href="https://3pillarsofagile.github.io/" target="_blank" rel="noopener">Tiga Pilar Agile</a></h3>
      <p>One of the two books I wrote. It has its own site.</p>
    </div>

    <div class="rs-entry">
      <p class="rs-entry-meta">Book &middot; 2015</p>
      <h3><a href="/buku-agile-scrum">Agile Philosophy and Scrum Guide</a></h3>
      <p>The other one. The book page on this site carries the details.</p>
    </div>
  </div>

  <p><a href="/books/">Both books, with covers, on the books page</a></p>
</section>

<section class="rs-section">
  <p class="rs-eyebrow">Essays</p>
  <h2>Longer arguments</h2>

  <div class="rs-entries">
    <div class="rs-entry">
      <p class="rs-entry-meta">Essay</p>
      <h3><a href="/money">Why Money Requires Energy?</a></h3>
      <p>Money that costs almost nothing to create hands too much power to whoever can create it, and that corrupts them. The essay traces this from the 1944 Bretton Woods design through decades of money supply expansion, and argues for money that has to be earned with energy.</p>
    </div>
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="rs-section">
  <p class="rs-eyebrow">Posts</p>
  <h2>Posts</h2>

  <div class="rs-entries">
    {% for post in site.posts %}
    <div class="rs-entry">
      <p class="rs-entry-meta">{{ post.date | date: "%-d %B %Y" }}</p>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    </div>
    {% endfor %}
  </div>
</section>
{% endif %}

<p>Posts are also listed at <a href="/posts/">/posts/</a>.</p>

{% include whatsapp-cta.html
     heading="Get the next one on WhatsApp"
     blurb="New writing, and what I learn advising companies on Bitcoin treasury policy."
     button="Join the channel"
     note="One channel for the whole site." %}
