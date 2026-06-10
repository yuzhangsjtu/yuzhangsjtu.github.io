---
title: "如何在hexo博客中嵌入PDF"
date: 2023-11-07T20:00:00+08:00
category: { name: "技术", slug: tech }
tags: ["PDF"]
summary: "利用pdf.js在hexo博客中嵌入pdf，桌面浏览器可以播放，移动端可以查看。"
---

之前pre过的一些内容只有ppt，没有写博文，想传到小站，整理成文字很麻烦也没有必要，但是直接传ppt似乎不太好，放个下载链接有点突兀，而hexo对ppt的支持并不友好。于是，换个思路，将ppt转成pdf，并试图嵌入页面。

说干就干，查了一些将pdf嵌入博客页面的方法，有`hexo-pdf`这个插件，但是已经很久没有维护了，不太敢用。有uu提到可以用`pdf.js`，简单方便，而且在桌面端和移动端都有不错的效果，那么开始实验！

首先，备份本地的blog文件夹，好怕一通操作把我的博客又干碎了哈哈。

接下来，进入正式流程：

- 第一步，下载[pdf.js](https://mozilla.github.io/pdf.js/getting_started/#download)，将文件夹解压放到指定的位置。我的博客应用的是[Fluid](https://github.com/fluid-dev/hexo-theme-fluid)主题，与其他hexo博客主题不同，fluid主题文件夹是有实际操作意义的，于是我在主题文件夹里新建了`myjs`文件夹，将解压后的文件夹放入其中，并命名为`pdfjs`，其他主题的博客似乎放在博客根目录的`source`即可；

  ![image-20231107192623637](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107192623637.png)

- 第二步，修改`pdfjs/web/viewer.mjs`，将里面的特定内容注销，可以使用关键词搜索找到这里⬇️；

  ![image-20231107193023321](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107193023321.png)

- 第三步，修改博客配置文件`_config.yml`（注意不是主题配置文件），将`pdfjs`文件夹加入到跳过渲染的选项里；

  ```yaml
  skip_render: [myjs/**]
  ```

- 第四步，在博客根目录的`source`文件夹里，新建一个pdf文件夹，用于存储需要嵌入的pdf文件。需要注意的是，存入的pdf文件名不能含有非法字符，比如`&`；

  ![image-20231107193558689](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107193558689.png)

- 第五步，在博文的markdown文件中，嵌入代码和pdf路径，如：

  ```javascript
  <iframe src="/myjs/pdfjs/web/viewer.html?file=/pdf/Factors determining household-level food insecurity during COVID-19 epidemic a case of Wuhan, China.pdf" style='width:100%;height:800px'></iframe>
  ```

  注意此处填写的是相对路径⬆️，嵌入文档的高度和宽度可以调整，对于论文pdf或者ppt转pdf而言，将高度设置为`800px`似乎是个不错的选择。另外，由于markdown编辑器（比如typora）并不是完整的浏览器，所以在查看`.md`文档时，本地并不会成功显示pdf控件，而是会看到类似下面的内容：
  
  ![image-20231107194724061](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107194724061.png)
  
  不过不用慌，部署完在网页端打开，浏览器是可以正常渲染的！

---

如果一切顺利的话，我们就可以看到嵌入了pdf文件的博文啦，效果如下：

<iframe src="/pdfjs/web/viewer.html?file=/pdf/Factors determining household-level food insecurity during COVID-19 epidemic a case of Wuhan, China.pdf" style='width:100%;height:800px'></iframe>

---

在桌面端，嵌入的pdf可以下载、打印和全屏播放，还可以旋转查看，非常厉害！不过移动端我试了几个浏览器，包括微信浏览器、Chrome、edge和Safari，都没有播放pdf的选项，可能是我没有正确配置，不过问题不大。另外在移动端，可能是考虑到pdf文件太大，第一次打开嵌入了pdf的博文时，pdf文件不会加载，需要手动刷新一次。

至此，就已经实现了在hexo博客中嵌入pdf啦！注意GitHub单个仓库的大小限制是1G，单个文件大小限制是100M，嵌入的pdf应该尽量小一些，以免一不小心把仓库干爆收到GitHub的警告。此外，如果是ppt转pdf，原ppt中有动画播放的部分会静态显示，此时在原ppt中尽量不要有上下层遮挡。
