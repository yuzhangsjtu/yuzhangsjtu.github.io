---
title: "How to Embed PDFs in a Hexo Blog"
date: 2023-11-07T20:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["PDF"]
summary: "Using pdf.js to embed PDFs in a Hexo blog, playable in desktop browsers and viewable on mobile."
---

Some content I presented before existed only as slides, with no accompanying blog post. I wanted to upload it to my little site, but turning it into written text is a lot of trouble and not really necessary. Uploading the slides directly didn't seem great either, and dropping in a download link felt a bit abrupt, while Hexo's support for slides is not friendly. So I took a different approach: convert the slides to PDF and try to embed them in the page.

No sooner said than done. I looked into some methods for embedding PDFs in blog pages. There is a plugin called `hexo-pdf`, but it hasn't been maintained for a long time, so I didn't quite dare to use it. Some friend mentioned that you could use `pdf.js`, which is simple and convenient and works well on both desktop and mobile, so let the experiment begin!

First, back up your local blog folder. I was so afraid that one round of tinkering would smash my blog to pieces again, haha.

Next, on to the actual procedure:

- Step one: Download [pdf.js](https://mozilla.github.io/pdf.js/getting_started/#download), extract the folder and place it in a designated location. My blog uses the [Fluid](https://github.com/fluid-dev/hexo-theme-fluid) theme. Unlike other Hexo blog themes, the Fluid theme folder has actual operational significance, so I created a new `myjs` folder inside the theme folder, put the extracted folder into it and named it `pdfjs`. For blogs using other themes, it seems you can just place it in the `source` folder at the blog root;

  ![image-20231107192623637](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107192623637.png)

- Step two: Modify `pdfjs/web/viewer.mjs`, commenting out a specific piece of content inside it. You can find this spot using a keyword search ⬇️;

  ![image-20231107193023321](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107193023321.png)

- Step three: Modify the blog's configuration file `_config.yml` (note: not the theme configuration file), adding the `pdfjs` folder to the skip-render option;

  ```yaml
  skip_render: [myjs/**]
  ```

- Step four: Inside the `source` folder at the blog root, create a `pdf` folder to store the PDF files you want to embed. Note that the names of the stored PDF files must not contain illegal characters, such as `&`;

  ![image-20231107193558689](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107193558689.png)

- Step five: In the blog post's markdown file, embed the code and the PDF path, for example:

  ```javascript
  <iframe src="/myjs/pdfjs/web/viewer.html?file=/pdf/Factors determining household-level food insecurity during COVID-19 epidemic a case of Wuhan, China.pdf" style='width:100%;height:800px'></iframe>
  ```

  Note that what is filled in here is a relative path ⬆️. The height and width of the embedded document can be adjusted; for research-paper PDFs or slides converted to PDF, setting the height to `800px` seems like a good choice. In addition, because markdown editors (such as Typora) are not full browsers, when viewing the `.md` document locally the PDF control will not display successfully; instead you will see something like the following:

  ![image-20231107194724061](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107194724061.png)

  But don't panic — once deployed and opened in a web browser, it renders just fine!

---

If all goes well, we will be able to see the blog post with the embedded PDF, and the result looks like this:

<iframe src="/pdfjs/web/viewer.html?file=/pdf/Factors determining household-level food insecurity during COVID-19 epidemic a case of Wuhan, China.pdf" style='width:100%;height:800px'></iframe>

---

On desktop, the embedded PDF can be downloaded, printed and played full screen, and it can even be rotated for viewing — very impressive! On mobile, however, I tried several browsers, including the WeChat browser, Chrome, Edge and Safari, and none of them had an option to play the PDF. Perhaps I didn't configure it correctly, but it's not a big deal. Also, on mobile — probably because the PDF file is too large — the first time you open a post with an embedded PDF, the PDF file won't load, and you need to manually refresh once.

With that, embedding PDFs in a Hexo blog is achieved! Note that GitHub's size limit for a single repository is 1G, and the size limit for a single file is 100M, so the embedded PDFs should be kept as small as possible, lest you accidentally blow up the repository and get a warning from GitHub. Furthermore, if you convert slides to PDF, the parts of the original slides with animations will display statically, so in the original slides try not to have any overlapping layers.
