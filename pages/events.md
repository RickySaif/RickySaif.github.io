---
layout: page
title: "Events"
subtitle: "Claude Code Indonesia meetups and learning sessions, upcoming and past. Register with the button on each event."
permalink: /events/
lang: en
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
    <h2>Hear about the next one</h2>
    <p>New meetups are announced in the Claude Code Indonesia WhatsApp group, along with the free step-by-step tutorial.</p>
    <div class="rs-cta-row">
      <a class="rs-btn rs-btn--primary" href="{{ site.claude_code_wa_url }}" target="_blank" rel="noopener">Join the WhatsApp group</a>
      <a class="rs-btn rs-btn--secondary rs-btn--on-ink" href="/claude-code-indonesia/">What is Claude Code Indonesia?</a>
    </div>
  </div>
</section>

{% include events-sync.html %}
