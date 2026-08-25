---
title: "Home"
layout: homelay
permalink: /
---

<style>
.kmap-slideshow { position: relative; width: 100%; height: 440px; background: #f2f2f2; border-radius: 14px; overflow: hidden; border: 1px solid #dddddd; }
.kmap-slideshow .slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1s ease-in-out; }
.kmap-slideshow .slide.active { opacity: 1; }
.kmap-slideshow img { width: 100%; height: 100%; object-fit: contain; }
.kmap-slideshow .caption { position: absolute; left: 0; right: 0; bottom: 0; padding: 8px 14px; background: rgba(34,34,34,.72); color: #fff; font-size: .95rem; }
.kmap-slideshow .caption b { font-weight: 600; }
@media (max-width: 575.98px) { .kmap-slideshow { height: 260px; } .kmap-slideshow img { object-fit: cover; } }
.kmap-lead { font-size: 1.2rem; color: #3f3f3f; }
</style>

<h1 class="mb-1">KMAP Working Group</h1>
<p class="kmap-kicker">Korean Migration And Politics &middot; 고려대학교 SSK 이민정치연구단</p>

<p class="kmap-lead">KMAP is an interdisciplinary research group that studies the politics of migration in and around Korea. Based at the Peace and Democracy Institute, Korea University, and supported by the National Research Foundation of Korea's Social Science Korea (SSK) program, the group brings together political scientists and graduate students working on immigration attitudes, immigrant participation, immigration policy, and comparative migration politics under the theme <i>Migration Politics for Diversity, Coexistence, and Integration</i> (다양성·공존·통합을 위한 이민정치).</p>

{::nomarkdown}
<div class="kmap-slideshow mt-4 mb-2">
{% assign event_photos = site.static_files | where_exp: "f", "f.path contains '/images/event_mainpage/'" | sort: "path" %}
{% for f in event_photos %}
{% assign ymd = f.basename | slice: 0, 8 %}
{% capture key %}{{ ymd | slice: 0, 4 }}-{{ ymd | slice: 4, 2 }}-{{ ymd | slice: 6, 2 }}{% endcapture %}
{% assign cap_title = "" %}{% assign cap_date = "" %}
{% for e in site.data.events %}{% assign ed = e.sort | date: "%Y-%m-%d" %}{% if ed == key %}{% assign cap_title = e.title %}{% assign cap_date = e.date %}{% endif %}{% endfor %}
<div class="slide">
<img src="{{ f.path | relative_url }}" alt="{{ cap_title | default: 'KMAP event photo' | strip_html }}">
{% if cap_title != "" %}<div class="caption"><b>{{ cap_title }}</b> &middot; {{ cap_date }}</div>{% endif %}
</div>
{% endfor %}
</div>
<p class="kmap-muted small">Photos from KMAP colloquia, workshops, and conference panels.</p>
{:/nomarkdown}

## Research themes

<p>Our work is organized around four themes. Each links to the members and publications associated with it.</p>

<ul>
{% for t in site.data.research %}
<li><a href="{{ '/research/#' | append: t.id | relative_url }}">{{ t.title }}</a> <span class="kmap-muted">({{ t.ko }})</span></li>
{% endfor %}
</ul>

## Contact

<p>For inquiries about our research or collaboration, please contact Woo Chang Kang at <a href="mailto:woochang_kang@korea.ac.kr">woochang_kang@korea.ac.kr</a>.</p>
