---
layout: page
title: Sometimes, I write..
---
{% include JB/setup %}
    
### Essays

<ul class="posts">
  {% for post in site.posts %}
    <li>
        <small>{{ post.date | date_to_string }}</small>
        <small><a style="color:grey" href="{{ BASE_PATH }}{{ post.url }}#disqus_thread"></a></small>
        <br>
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES * * */
    var disqus_shortname = 'nagekar';
    
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
</script>
