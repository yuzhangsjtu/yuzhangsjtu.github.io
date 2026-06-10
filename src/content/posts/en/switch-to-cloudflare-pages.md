---
title: "Switching Hosting to Cloudflare Pages"
date: 2021-03-07T14:20:00+08:00
category: { name: "Tech", slug: tech }
tags: ["hosting switch", "cloudflare pages"]
summary: "Cloudflare Pages combined with jsDelivr makes my site blazing fast!"
---

A Fluid group member surfaced late at night to announce that Cloudflare Pages was now ready for real use – considering Cloudflare’s global reach and stability, I was seriously tempted!

The next day I logged into the Cloudflare Pages dashboard and found there was no need even to apply – it was just available (probably because I’d long used Cloudflare for domain DNS + SSL). I pulled the repo straight from GitHub, clicked through a series of “Next” steps, and although deploying took about three minutes, the responsiveness once it finished was seriously fast!

Since the [yuzhangnju.me](https://yuzhangnju.me) and [yuzhang.xyz](https://yuzhang.xyz) domains were about to expire, I snapped up [yuzhang.pages.dev](https://yuzhang.pages.dev) on Cloudflare Pages. Still a bit odd-looking, but I guess it’s a step up from github.io.

p.s. At the moment, Cloudflare Pages can be opened directly in WeChat on mobile (fingers crossed it stays that way for a while).

Like Vercel, Cloudflare Pages updates automatically whenever the linked repo changes, with deployment taking about three minutes.

![image-20210307144035832](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/image-20210307144035832.png)

<br/>

The day after that, another group member popped up saying that combining Netlify with jsDelivr was even faster – how was I supposed to let that slide???

So I crawled out of bed again and ran some tests; the difference between Netlify and Cloudflare Pages was not significant. Also, the campus network blocks Netlify altogether, making login a struggle.

So I resolved to set up GitHub + jsDelivr as an image CDN, which turned out to be dead simple. I moved over all the site’s framework assets and some article thumbnails, and now the pages load at blistering speed! From now on, all images go into GitHub and are accelerated by jsDelivr – surely these two services will outlast most others!

Although I’ve moved some images, nearly all the pictures inside individual posts still live on sm.ms, where speed was never stable to begin with, and I live in quiet terror of it going down one day. Pray for me, pray for it.

Time to fly – come visit!

![image-20210307144822868](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/image-20210307144822868.png)

<br/>

Weird: just after WeChat blocked Cloudflare Pages, the campus network blocked them too…

2022.2.27
