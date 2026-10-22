---
layout: page
title: "Cases"
subtitle: "Real business problems, and how AI handles each one. Every case comes with a free tool."
permalink: /cases/
lang: en
---

<section class="rs-section">
  <p>Each case starts with a problem a CEO actually has, not with the technology. It shows what the AI does, what you get, and where a person still decides.</p>
  <p>Profit cases help you earn more. Cost cases help you spend less.</p>

  {% assign cases = site.cases | sort: "order" %}
  <div class="rs-case-grid">
    {% for c in cases %}{% include case-card.html case=c %}{% endfor %}
  </div>
</section>

<section class="rs-section">
  <div class="rs-close-band">
    <h2>Have a problem that is not on this list?</h2>
    <p>Bring it to a session. If AI can help, we find out together. If it cannot, I will tell you. {{ site.data.translations.en.price_line }}.</p>
    <div class="rs-cta-row">
      <a class="rs-btn rs-btn--primary" href="{{ site.booking_url }}" target="_blank" rel="noopener">Book a session</a>
    </div>
  </div>
</section>
