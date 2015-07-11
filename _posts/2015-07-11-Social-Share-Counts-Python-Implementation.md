---
layout: post
author: Abhishek Nagekar
title: Social Share Counts Python Implementation
tags:
- python
---

I wrote this little script that grabs the count of shares on popular social networks, using their APIs. I have listed the documentation on the project page on <a href="https://github.com/abhn/Social-Share-Counts" target="_blank">Github</a>. I will copy the relevant pieces of readme here.

## Social Network APIs

### Facebook

Request:
`https://graph.facebook.com/?id=https://www.github.com`

Response:
```json
{
   "id": "http://www.github.com",
   "shares": 31684
}
```

### Twitter

Request:
`http://cdn.api.twitter.com/1/urls/count.json?url=https://github.com`

Response:
```json
{"count":14,"url":"http:\/\/github.com\/"}
```

### Google Plus

Request:
`https://plusone.google.com/_/+1/fastbutton?url=https://github.com`

This returns the +1 button. I extracted the counts using regex `window.__SSR = {c: ([\d]+)`

### LinkedIn

Request:
`http://www.linkedin.com/countserv/count/share?url=https://github.com&format=json`

Response:
```json
{"count":0,"fCnt":"0","fCntPlusOne":"1","url":"https:\/\/github.com"}
```

### StumbleUpon

Request:
`http://www.stumbleupon.com/services/1.01/badge.getinfo?url=https://github.com`

Response too large.

### Pinterest

Request:
`http://api.pinterest.com/v1/urls/count.json?url=https://github.com`

Response:
```json
receiveCount({"url":"https://github.com","count":0}) 
```

### Reddit

Request:
`http://www.reddit.com/api/info.json?url=https://github.com`

This returns a lot of data, which can be easily used to extracted counts. 
**Note** that the Reddit guys don't really like automated requests and may cause the call to return HTTP 429.

### Vkontakte

Request:
`https://vk.com/share.php?act=count&index=1&url=https://github.com`

Response:
```json
VK.Share.count(1, 419);
```

This marks the end of the documentation. I hope that serves some purpose. The reason I wrote this was that I wanted social sharing buttons on this blog. I could not afford any of the mainstream buttons like Addthis and Sharethis. They kill the load time, and I'm already struggling with Disqus and Adsense overload. More on that soon. I hope to create a 'dynamic looking' static set of buttons for this blog, and I'll update you if I get time to complete it.
