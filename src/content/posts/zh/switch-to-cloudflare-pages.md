---
title: "换源记录：cloudflare pages"
date: 2021-03-07T14:20:00+08:00
category: { name: "技术", slug: tech }
tags: ["换源", "cloudflare pages"]
summary: "cloudflare pages + jsDelivr，原地起飞！"
---

Fluid群友深夜冒泡通知cloudflare pages可以正式使用，考虑到cloudflare的全球实力及稳定性，非常心动！

第二天登录cloudflare pages页面，发现无需申请，直接使用（可能是因为之前长时间使用cloudflare解析域名+SSL）。直接从github拉取repo，一路点下一步，虽然部署需要耗费三分钟，但是，完成后的响应速度真的很快！

由于[yuzhangnju.me](https://yuzhangnju.me)和[yuzhang.xyz](https://yuzhang.xyz)域名马上到期，就在cloudflare pages上抢注了[yuzhang.pages.dev](https://yuzhang.pages.dev)，虽然还是很奇怪，但比github.io还是好一些吧。

ps：目前cloudflare pages可以直接在移动端的微信打开（希望能多挺一阵子）。

和vercel一样，cloudflare pages也会依据repo的更新自动更新，部署时间在三分钟左右。

![image-20210307144035832](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/image-20210307144035832.png)

<br/>

再之后的一天，又有群友冒泡说netlify和jsDelivr组合更快，这能忍？？？

于是爬床再次行动，测试发现netlify和cloudflare pages速度差异不明显。并且校园网将netlify墙掉了，登录困难。

于是准备github + jsdelivr图床，操作也很简单。转移了所有的框架图片和一部分文章缩略图，现在打开页面，速度起飞！日后，所有的图片都放github并用jsdelivr加速吧，这两家应该不会挂！

虽然转移了一部分，但文章页的图片几乎都在sm.ms，本来速度就不稳定，还很担心哪天就挂了，祈祷祈祷。

起飞起飞，欢迎来玩呀！

![image-20210307144822868](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/image-20210307144822868.png)



<br/>

很奇怪，继cloudflare pages被微信墙了之后，又被校园网墙了...

2022.2.27
