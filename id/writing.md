---
layout: page
title: "Tulisan"
subtitle: "Esai, postingan, dan dua buku yang saya tulis."
permalink: /writing/
lang: id
---

Dua buku, dua esai, dan postingan. Bukunya lahir dari tiga belas tahun menasihati organisasi. Esainya soal uang.

<section class="rs-section">
  <p class="rs-eyebrow">Buku</p>
  <h2>Dua buku yang saya tulis</h2>
  <p class="rs-section-intro">Saya sudah menasihati perusahaan selama tiga belas tahun. Ini dua buku yang saya tulis di rentang waktu itu.</p>

  <div class="rs-entries">
    <div class="rs-entry">
      <p class="rs-entry-meta">Buku &middot; 2019</p>
      <h3><a href="https://3pillarsofagile.github.io/" target="_blank" rel="noopener">Tiga Pilar Agile</a></h3>
      <p>Satu dari dua buku yang saya tulis. Punya situsnya sendiri.</p>
    </div>

    <div class="rs-entry">
      <p class="rs-entry-meta">Buku &middot; 2015</p>
      <h3><a href="/id/buku-agile-scrum">Filosofi Agile dan Panduan Scrum</a></h3>
      <p>Yang satunya lagi. Detailnya ada di halaman bukunya di situs ini.</p>
    </div>
  </div>

  <p><a href="/id/books/">Kedua buku, lengkap dengan sampulnya, di halaman buku</a></p>
</section>

<section class="rs-section">
  <p class="rs-eyebrow">Esai</p>
  <h2>Argumen yang lebih panjang</h2>

  <div class="rs-entries">
    <div class="rs-entry">
      <p class="rs-entry-meta">Esai &middot; Bahasa Indonesia</p>
      <h3><a href="/id/ed">Apa Itu Bitcoin? Dan Kenapa Bisa Menyelamatkan Kita dari Krismon Di Masa Depan?</a></h3>
      <p>Krisis moneter 1997&ndash;98, bagaimana gelembung di baliknya terbentuk, dan kenapa Bitcoin ditawarkan sebagai perlindungan dari krisis berikutnya.</p>
    </div>

    <div class="rs-entry">
      <p class="rs-entry-meta">Esai &middot; Bahasa Inggris</p>
      <h3><a {% static_href %}href="/money"{% endstatic_href %}>Why Money Requires Energy?</a></h3>
      <p>Ditulis dalam Bahasa Inggris. Uang yang nyaris tanpa biaya untuk diciptakan memberi terlalu banyak kuasa kepada siapa pun yang bisa menciptakannya, dan itu merusak mereka. Esai ini menelusurinya dari rancangan Bretton Woods 1944 sampai puluhan tahun ekspansi pasokan uang, lalu berargumen untuk uang yang harus ditebus dengan energi.</p>
    </div>
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="rs-section">
  <p class="rs-eyebrow">Postingan</p>
  <h2>Postingan</h2>

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

<p>Postingan juga terdaftar di <a href="/id/posts/">/id/posts/</a>.</p>

{% include email-capture.html
     id="writing-id"
     heading="Dapatkan tulisan berikutnya lewat email"
     blurb="Tulisan baru, dan apa yang saya pelajari dari menasihati perusahaan soal kebijakan kas bitcoin."
     button="Berlangganan"
     note="Satu daftar untuk seluruh situs." %}
