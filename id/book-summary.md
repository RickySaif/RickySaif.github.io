---
layout: page
title: "Ringkasan Buku"
subtitle: "Buku yang layak untuk waktu seorang CEO, masing-masing diringkas jadi hal yang bisa langsung dipakai."
permalink: /book-summary/
lang: id
---

<section class="rs-section">
  {% if site.data.book_summaries.size > 0 %}
  <div class="rs-book-list">
    {% for book in site.data.book_summaries %}{% include book-summary-card.html book=book %}{% endfor %}
  </div>
  {% else %}
  <p class="rs-section-intro">Ringkasan pertama segera hadir.</p>
  {% endif %}
</section>
