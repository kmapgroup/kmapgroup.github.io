---
title: "Events"
layout: gridlay
permalink: /events/
---

<style>
/* 이벤트 카드: 왼쪽 설명 / 오른쪽 포스터 2단 (좁은 화면은 세로 스택).
   데이터: _data/events.yml — 행사 추가는 그 파일에. 카드 마크업: _includes/event_card.html.
   Upcoming/Past는 빌드 시점(site.time) 기준으로 자동 분류 — push 후 재빌드돼야 갱신됨. */
.event-poster img { width: 100%; border: 1px solid #dddddd; border-radius: 8px; }
.event-poster .poster-link { display: inline-block; margin-top: 6px; font-size: 0.9em; }
.event-poster .program-image { margin-top: 10px; }
.event-meta { color: #6a6a6a; font-size: 0.95em; }
.event-affil { color: #6a6a6a; }
.jumbotron h4 { margin-top: 0; }
.event-panel { margin-top: 1em; }
.event-panel h5 { margin-bottom: 0.3em; font-size: 1.05em; }
.event-panel ul { padding-left: 1.2em; margin-bottom: 0.4em; }
.event-panel li { margin-bottom: 0.3em; }
#eventTabs { margin-bottom: 1.2em; }
#eventTabs .nav-link { font-size: 1.05em; }
</style>

## Events

{% assign all_events = site.data.events | sort: "sort" | reverse %}
{% assign now_ts = site.time | date: "%s" | plus: 0 %}
{% assign upcoming = "" | split: "" %}
{% assign past = "" | split: "" %}
{% for e in all_events %}{% assign ts = e.sort | date: "%s" | plus: 0 %}{% if ts > now_ts %}{% assign upcoming = upcoming | push: e %}{% else %}{% assign past = past | push: e %}{% endif %}{% endfor %}

### Upcoming Events

{% if upcoming.size > 0 %}
{% assign upcoming_asc = upcoming | reverse %}
{% for e in upcoming_asc %}{% include event_card.html e=e %}
{% endfor %}
{% else %}
<div class="jumbotron">
<p>No upcoming events at this time. Please check back soon.</p>
</div>
{% endif %}

### Past Events

<ul class="nav nav-tabs" id="eventTabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#seminars" type="button" role="tab" aria-controls="seminars" aria-selected="true">Seminars</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#conferences" type="button" role="tab" aria-controls="conferences" aria-selected="false">Conferences</button>
  </li>
</ul>

<div class="tab-content">
{% assign categories = "seminar,conference" | split: "," %}
{% for cat in categories %}
{% assign items = past | where: "category", cat %}
{% assign years = items | map: "year" | uniq %}
<div class="tab-pane fade{% if forloop.first %} show active{% endif %}" id="{{ cat }}s" role="tabpanel">
{% for y in years %}
<h3>{{ y }}</h3>
{% assign year_items = items | where: "year", y %}
{% for e in year_items %}{% include event_card.html e=e %}
{% endfor %}
{% endfor %}
</div>
{% endfor %}
</div>

### Regular Seminars

<div class="jumbotron">
<p>KMAP Working Group holds regular colloquia on migration politics.</p>
<p>For information about our seminars, or to present your research, please contact <a href="mailto:woochang_kang@korea.ac.kr">woochang_kang@korea.ac.kr</a>.</p>
</div>

<script src="{{ "/assets/javascript/events-tabs.js" | relative_url }}"></script>
