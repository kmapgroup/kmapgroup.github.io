---
title: "Publications"
layout: gridlay
permalink: /publications/
---

<style>
.jumbotron{
    padding:3%;
    padding-bottom:10px;
    padding-top:10px;
    margin-top:10px;
    margin-bottom:30px;
}
</style>

{% comment %}
Data: _data/publications.yml — add a publication there, not here.
One citation line; Korean titles without quotes, English titles in quotes.
{% endcomment %}

## Publications

{% assign articles = site.data.publications | where: "type", "article" %}
{% assign years = articles | group_by: "year" | sort: "name" | reverse %}
{% assign remaining = articles.size %}
<div class="jumbotron">
<h4>Journal Articles</h4>
{% for y in years %}
<p><b>{{ y.name }}</b></p>

<ol reversed start="{{ remaining }}">
{% for p in y.items %}<li>{% include citation.html p=p %}</li>
{% endfor %}</ol>
{% assign remaining = remaining | minus: y.items.size %}
{% endfor %}
</div>

{% assign books = site.data.publications | where: "type", "book" %}
<div class="jumbotron">
<h4>Books</h4>

<ul>
{% for p in books %}<li>{% include citation.html p=p %}</li>
{% endfor %}</ul>

</div>

{% assign working = site.data.publications | where: "type", "working" %}
<div class="jumbotron">
<h4>Working Papers</h4>
{% if working.size > 0 %}
<ul>
{% for p in working %}<li>{% include citation.html p=p %}</li>
{% endfor %}</ul>
{% else %}
<p>Working papers will be listed here.</p>
{% endif %}
</div>

{% assign conf = site.data.publications | where: "type", "conference" %}
<div class="jumbotron">
<h4>Conference Papers</h4>
{% if conf.size > 0 %}
<ul>
{% for p in conf %}<li>{% include citation.html p=p %}</li>
{% endfor %}</ul>
{% else %}
<p>Conference papers will be listed here.</p>
{% endif %}
</div>
