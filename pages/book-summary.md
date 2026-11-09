---
layout: page
title: "Book Summary"
subtitle: "The books worth a CEO's time, each one boiled down to what you can use."
permalink: /book-summary/
lang: en
---

<section class="rs-section">
  {% if site.data.book_summaries.size > 0 %}
  <div class="rs-book-list">
    {% for book in site.data.book_summaries %}{% include book-summary-card.html book=book %}{% endfor %}
  </div>
  {% else %}
  <p class="rs-section-intro">The first summaries are on their way.</p>
  {% endif %}
</section>
