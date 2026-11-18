---
layout: page
title: "Acara"
subtitle: "Kopdar dan sesi belajar Claude Code Indonesia, yang akan datang dan yang sudah lewat. Pendaftaran lewat tombol di setiap acara."
permalink: /events/
lang: id
---
{% assign t = site.data.translations[site.active_lang] %}

<section class="rs-section">
  <h2>{{ t.events_upcoming }}</h2>
  {% include events-list.html which="upcoming" %}
</section>

<section class="rs-section">
  <h2>{{ t.events_past }}</h2>
  {% include events-list.html which="past" %}
</section>

<section class="rs-section">
  <div class="rs-close-band">
    <h2>Kabar acara berikutnya</h2>
    <p>Jadwal kopdar baru diumumkan di grup WhatsApp Claude Code Indonesia, bersama tutorial langkah demi langkah yang gratis.</p>
    <div class="rs-cta-row">
      <a class="rs-btn rs-btn--primary" href="{{ site.claude_code_wa_url }}" target="_blank" rel="noopener">Gabung grup WhatsApp</a>
      <a class="rs-btn rs-btn--secondary rs-btn--on-ink" href="/claude-code-indonesia/">Apa itu Claude Code Indonesia?</a>
    </div>
  </div>
</section>

{% include events-sync.html %}
