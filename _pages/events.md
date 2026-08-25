---
title: "Events"
layout: gridlay
sitemap: false
permalink: /events/
---

<style>
/* 이벤트 항목: 왼쪽 설명 / 오른쪽 포스터 2단.
   좁은 화면(col-sm 미만)에서는 Bootstrap이 자동으로 세로로 쌓는다.
   데이터는 _data/events.yml — 행사 추가는 그 파일에 항목을 추가하면 된다. */
.event-poster img {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.event-poster .poster-link {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.9em;
}
.event-poster .program-image { margin-top: 10px; }
/* muted text on the dark card (#303030): use the theme's --light (#adb5bd), not #555 */
.event-meta {
  color: #adb5bd;
  font-size: 0.95em;
}
.event-affil {
  color: #adb5bd;
}
.jumbotron h4 {
  margin-top: 0;
}
.event-panel { margin-top: 1em; }
.event-panel h5 { margin-bottom: 0.3em; font-size: 1.05em; }
.event-panel ul { padding-left: 1.2em; margin-bottom: 0.4em; }
.event-panel li { margin-bottom: 0.3em; }
#eventTabs { margin-bottom: 1.2em; }
#eventTabs .nav-link { font-size: 1.1em; }
</style>

## Events

### Upcoming Events

<div class="jumbotron">
<p>No upcoming events at this time. Check back soon!</p>
</div>

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
{% assign items = site.data.events | where: "category", cat | sort: "sort" | reverse %}
{% assign years = items | map: "year" | uniq %}
<div class="tab-pane fade{% if forloop.first %} show active{% endif %}" id="{{ cat }}s" role="tabpanel">
{% for y in years %}
<h3>{{ y }}</h3>
{% assign year_items = items | where: "year", y %}
{% for e in year_items %}
<div class="jumbotron">
<h4>{{ e.title }}</h4>
<div class="row">
<div class="{% if e.poster %}col-sm-8{% else %}col-sm-12{% endif %}">
<p class="event-meta"><i>{{ e.type }}</i> &middot; {{ e.date }}<br>{{ e.venue }}</p>
{% if e.speaker %}
<p><b>{{ e.speaker }}</b><br><span class="event-affil">{{ e.affiliation }}</span><br>
&ldquo;{{ e.talk }}&rdquo;</p>
{% endif %}
{% if e.summary %}<p>{{ e.summary }}</p>{% endif %}
{% for p in e.panels %}
<div class="event-panel">
<h5>{{ p.title }}</h5>
<p class="event-meta">{% if p.slot %}{{ p.slot }}{% endif %}{% if p.chair %}{% if p.slot %} &middot; {% endif %}Chair: {{ p.chair }}{% endif %}</p>
<ul>
{% for paper in p.papers %}<li>{{ paper.authors }}, &ldquo;{{ paper.title }}&rdquo;</li>
{% endfor %}</ul>
{% if p.note %}<p>{{ p.note }}</p>{% endif %}
{% if p.discussants %}<p class="event-meta">Discussants: {{ p.discussants }}</p>{% endif %}
</div>
{% endfor %}
</div>
{% if e.poster %}
<div class="col-sm-4 event-poster">
{% if e.poster_pdf %}{% assign poster_href = "/files/" | append: e.poster_pdf | relative_url %}{% else %}{% assign poster_href = "/images/" | append: e.poster | relative_url %}{% endif %}
<a href="{{ poster_href }}" target="_blank">
<img src="{{ "/images/" | append: e.poster | relative_url }}" alt="Poster for {{ e.title | strip_html }}">
</a>
{% if e.poster_pdf %}<a href="{{ poster_href }}" target="_blank" class="poster-link"><i class="fa fa-file-pdf-o"></i> Poster (PDF)</a>{% endif %}
{% for p in e.panels %}{% if p.image %}
<a href="{{ "/images/" | append: p.image | relative_url }}" target="_blank" class="program-image d-block">
<img src="{{ "/images/" | append: p.image | relative_url }}" alt="Program for {{ p.title | strip_html }}">
</a>
{% endif %}{% endfor %}
</div>
{% endif %}
</div>
</div>
{% endfor %}
{% endfor %}
</div>
{% endfor %}
</div>

### Regular Seminars

<div class="jumbotron">
<p>KMAP Working Group holds regular seminars on migration politics.</p>
<p>For more information about our seminars or to present your research, please contact us at <a href="mailto:woochang_kang@korea.ac.kr">woochang_kang@korea.ac.kr</a></p>
</div>

<script src="{{ "/assets/javascript/events-tabs.js" | relative_url }}"></script>
