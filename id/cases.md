---
layout: page
title: "Studi Kasus"
subtitle: "Masalah bisnis nyata, dan cara AI menanganinya. Setiap kasus datang dengan alat gratis."
permalink: /cases/
lang: id
---

<section class="rs-section">
  <p>Setiap kasus dimulai dari masalah yang benar-benar dimiliki seorang CEO, bukan dari teknologinya. Isinya: apa yang dikerjakan AI, apa yang Anda dapatkan, dan di mana manusia tetap yang memutuskan.</p>
  <p>Kasus untung membantu Anda menghasilkan lebih banyak. Kasus biaya membantu Anda mengeluarkan lebih sedikit.</p>

  {% assign cases = site.cases | sort: "order" %}
  <div class="rs-case-grid">
    {% for c in cases %}{% include case-card.html case=c %}{% endfor %}
  </div>
</section>

<section class="rs-section">
  <div class="rs-close-band">
    <h2>Masalah Anda tidak ada di daftar ini?</h2>
    <p>Bawa ke sesi. Kalau AI bisa membantu, kita cari tahu bersama. Kalau tidak bisa, saya akan bilang. {{ site.data.translations.id.price_line }}.</p>
    <div class="rs-cta-row">
      <a class="rs-btn rs-btn--primary" href="{{ site.booking_url }}" target="_blank" rel="noopener">Pesan sesi</a>
    </div>
  </div>
</section>
