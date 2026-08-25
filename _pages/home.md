---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

### Welcome to KMAP Working Group!

**KMAP** (Korean Migration And Politics) Working Group is an interdisciplinary research group dedicated to studying migration politics in and around Korea.

We bring together scholars, researchers, and students interested in understanding the political dimensions of migration in the Korean context.

<style>
.kmap-slideshow { position: relative; width: 100%; height: 420px; background: #111; border-radius: 8px; overflow: hidden; }
.kmap-slideshow img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; opacity: 0; transition: opacity 1s ease-in-out; }
.kmap-slideshow img.active { opacity: 1; }
</style>
<div class="container">
<div class="row">
<center>
<div class="kmap-slideshow">
{% assign event_photos = site.static_files | where_exp: "f", "f.path contains '/images/event/'" | sort: "path" %}
{% for f in event_photos %}<img src="{{ f.path | relative_url }}" alt="KMAP event photo"/>
{% endfor %}
</div>
KMAP Working Group - Korea University
</center>
</div>
</div>
<br/>

### Our Research

Our research covers a wide range of topics related to migration and politics:

- Immigration policy and governance in Korea
- Political participation of migrants
- Public attitudes toward immigration
- Comparative migration politics in East Asia
- Historical perspectives on Korean migration

### Contact

For inquiries about our research or collaboration opportunities, please contact us at **woochang_kang@korea.ac.kr**
