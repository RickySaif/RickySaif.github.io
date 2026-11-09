---
layout: page
title: "Tulisan"
subtitle: "Artikel terbaru, dan dua buku yang saya tulis."
permalink: /writing/
lang: id
---

Dua buku dan kabar terbaru. Bukunya lahir dari tiga belas tahun mendampingi organisasi.

<nav class="rs-cta-row rs-subnav" aria-label="Bagian tulisan">
  {% if site.posts.size > 0 %}<a class="rs-btn rs-btn--secondary" href="#news">Artikel</a>{% endif %}
  <a class="rs-btn rs-btn--secondary" href="#books">Buku</a>
</nav>

{% if site.posts.size > 0 %}
<section class="rs-section" id="news">
  <p class="rs-eyebrow">Artikel</p>
  <h2>Artikel terbaru</h2>

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

<section class="rs-section" id="books">
  <p class="rs-eyebrow">Buku</p>
  <h2>Dua buku yang saya tulis</h2>
  <p class="rs-section-intro">Selama tiga belas tahun saya mendampingi perusahaan. Dalam rentang itu, saya menulis dua buku ini.</p>

  <div class="rs-entries">
    <div class="rs-entry">
      <p class="rs-entry-meta">Buku &middot; 2019</p>
      <h3><a href="https://3pillarsofagile.github.io/" target="_blank" rel="noopener">Tiga Pilar Agile</a></h3>
      <p>Buku ini punya situsnya sendiri.</p>
    </div>

    <div class="rs-entry">
      <p class="rs-entry-meta">Buku &middot; 2015</p>
      <h3><a href="/buku-agile-scrum">Filosofi Agile dan Panduan Scrum</a></h3>
      <p>Detailnya ada di halaman buku di situs ini.</p>
    </div>
  </div>

  <p><a href="/books/">Lihat kedua buku beserta sampulnya</a></p>
</section>

{% include whatsapp-cta.html
     heading="Dapatkan tulisan berikutnya di WhatsApp"
     blurb="Tulisan baru, dan setiap alat AI gratis begitu dirilis."
     button="Gabung di WhatsApp"
     note="Satu channel WhatsApp untuk semua kabar." %}
