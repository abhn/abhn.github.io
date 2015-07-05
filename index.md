---
layout: page
title: Sometimes, I write..
---
{% include JB/setup %}
    
### Essays

<ul class="posts">
  {% for post in site.posts %}
    <li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

