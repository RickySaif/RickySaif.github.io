---
layout: page
title: "Articles"
subtitle: "Recent articles on AI, business, and technology."
permalink: /writing/
lang: en
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
  <p class="rs-section-intro">New articles coming soon.</p>
</section>
{% endif %}

{% include whatsapp-cta.html
     heading="Discuss & request writing in our WhatsApp group"
     blurb="Discuss articles or request topics you want covered in future writing."
     button="Join WhatsApp Group"
     note="A WhatsApp group to discuss and request writing." %}
