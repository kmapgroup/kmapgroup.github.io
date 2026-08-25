---
title: "Research"
layout: gridlay
permalink: /research/
---

{% comment %} Themes: _data/research.yml. Members/publications attach via their `topics` field. {% endcomment %}

<style>
.theme-card h3 { margin-top: 0; }
.theme-card .ko { color: #6a6a6a; font-weight: 400; font-size: 1rem; margin-left: .4rem; }
.theme-card h5 { font-size: 1rem; margin-top: 1rem; margin-bottom: .3rem; color: #6a6a6a; font-weight: 600; }
.theme-card ul { padding-left: 1.2em; }
</style>

## Research

<p>KMAP studies the politics of migration in and around Korea under the theme <i>Migration Politics for Diversity, Coexistence, and Integration</i>. Our research is organized around four themes.</p>

{% for t in site.data.research %}
<div class="jumbotron theme-card" id="{{ t.id }}">
<h3>{{ t.title }}<span class="ko">{{ t.ko }}</span></h3>
<p>{{ t.description }}</p>
{% assign all_members = site.data.pi | concat: site.data.team_members %}
{% assign tm = all_members | where_exp: "m", "m.topics contains t.id" %}
{% if tm.size > 0 %}
<h5>Members</h5>
<p>{% for m in tm %}<a href="{{ '/members/' | relative_url }}">{{ m.name | split: " (" | first }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
{% endif %}
{% assign tp = site.data.publications | where_exp: "p", "p.topics contains t.id" %}
{% if tp.size > 0 %}
<h5>Selected publications</h5>
<ul>
{% for p in tp %}<li>{% include citation.html p=p %}</li>
{% endfor %}</ul>
{% endif %}
</div>
{% endfor %}
