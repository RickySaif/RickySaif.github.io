---
layout: page
title: "Artikel"
subtitle: "Artikel dan pemikiran seputar AI, bisnis, dan teknologi."
permalink: /writing/
lang: id
---

{% if site.posts.size > 0 %}
<section class="rs-section" id="news">
  <div class="rs-entries">
    {% for post in site.posts %}
    <div class="rs-entry">
      <p class="rs-entry-meta">{{ post.date | date: "%-d %B %Y" }}</p>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    </div>
    {% endfor %}
  </div>
</section>
{% else %}
<section class="rs-section">
  <p class="rs-section-intro">Artikel terbaru akan segera hadir.</p>
</section>
{% endif %}

{% include whatsapp-cta.html
     heading="Diskusikan & request tulisan di grup WhatsApp"
     blurb="Diskusikan tulisan atau request topik yang ingin dibahas di grup WhatsApp."
     button="Gabung Grup WhatsApp"
     note="Grup WhatsApp untuk diskusi dan request topik tulisan." %}
