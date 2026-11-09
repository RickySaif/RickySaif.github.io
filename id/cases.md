---
layout: page
title: "Studi Kasus"
subtitle: "Masalah bisnis nyata, dan cara AI menanganinya. Setiap kasus dilengkapi alat gratis."
permalink: /cases/
lang: id
---

<section class="rs-section">
  <p>Setiap kasus berawal dari masalah yang benar-benar dihadapi CEO, bukan dari teknologinya. Isinya: apa yang dikerjakan AI, apa yang Anda dapatkan, dan keputusan mana yang tetap di tangan manusia.</p>
  <p>Kasus bertanda Untung membantu Anda menghasilkan lebih banyak. Kasus bertanda Biaya membantu Anda berhemat.</p>

  {% assign cases = site.cases | sort: "order" %}
  <div class="rs-case-grid">
    {% for c in cases %}{% include case-card.html case=c %}{% endfor %}
  </div>
</section>

<section class="rs-section">
  <div class="rs-close-band">
    <h2>Masalah Anda tidak ada di daftar ini?</h2>
    <p>Bawa saja ke sesi. Kita cari tahu bersama apakah AI bisa membantu. Kalau tidak bisa, saya akan bilang terus terang. {{ site.data.translations.id.price_line }}.</p>
    <div class="rs-cta-row">
      <a class="rs-btn rs-btn--primary" href="{{ site.whatsapp_channel_url }}" target="_blank" rel="noopener">Gabung Channel WA</a>
    </div>
  </div>
</section>
