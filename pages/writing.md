---
layout: page
title: "Writing"
subtitle: "News, and the two books I wrote."
permalink: /writing/
lang: en
---

Two books and the news. The books came out of thirteen years advising organizations.

<nav class="rs-cta-row rs-subnav" aria-label="Writing sections">
  {% if site.posts.size > 0 %}<a class="rs-btn rs-btn--secondary" href="#news">News</a>{% endif %}
  <a class="rs-btn rs-btn--secondary" href="#books">Books</a>
</nav>

{% if site.posts.size > 0 %}
<section class="rs-section" id="news">
  <p class="rs-eyebrow">News</p>
  <h2>News</h2>

  <div class="rs-entries">
    {% for post in site.posts %}
    <div class="rs-entry">
      <p class="rs-entry-meta">{{ post.date | date: "%-d %B %Y" }}</p>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    </div>
    {% endfor %}
  </div>
</section>

<p>News is also listed at <a href="/posts/">/posts/</a>.</p>
{% endif %}

<section class="rs-section" id="books">
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

{% include whatsapp-cta.html
     heading="Get the next one on WhatsApp"
     blurb="New writing, and each new free AI tool as it ships."
     button="Join on WhatsApp"
     note="One WhatsApp, for the whole site." %}
