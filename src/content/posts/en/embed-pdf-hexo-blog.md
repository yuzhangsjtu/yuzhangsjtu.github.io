---
title: "How to Embed PDFs in a Hexo Blog"
date: 2023-11-07T20:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["PDF"]
summary: "Using pdf.js to embed PDF files in a Hexo blog, allowing desktop browsers to play and mobile devices to view."
---

Some of the content I’ve presented before only exists as PowerPoint slides, and I never wrote corresponding blog posts. I wanted to upload them to my small site, but wrestling scattered ideas into proper text is tedious and frankly unnecessary. Just dumping the slides felt awkward, and slipping in a download link seemed abrupt — plus Hexo’s support for PPT is unfriendly. So, taking a different angle: convert the slides into PDF and try embedding them into the page.

No sooner thought than started. I searched for ways to embed PDFs in blog pages and found a plugin called `hexo-pdf`. But it hasn’t been maintained for a long time, so I hesitated to use it. Some kind soul mentioned that `pdf.js` is simple, convenient and works well on both desktop and mobile — so, on with the experiment!

First, I backed up my local blog folder, terrified that a careless round of tinkering would once again blow my blog to pieces, haha.

Next, the actual procedure:

- Step one: Download [pdf.js](https://mozilla.github.io/pdf.js/getting_started/#download), extract it and place it in a designated location. My blog uses the [Fluid](https://github.com/fluid-dev/hexo-theme-fluid) theme. Unlike other Hexo themes, the Fluid theme folder actually carries real operational meaning, so I created a `myjs` folder inside the theme folder, placed the extracted folder there and named it `pdfjs`. For other themes, it seems you can just put it in the top-level `source` folder of your blog;

  ![image-20231107192623637](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107192623637.png)

- Step two: Modify `pdfjs/web/viewer.mjs` by commenting out a specific section. You can find the spot below using a keyword search;

  ![image-20231107193023321](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107193023321.png)

- Step three: Adjust your blog’s `_config.yml` (note: not the theme-config file), adding the `pdfjs` folder to the skip-render option;

  ```yaml
  skip_render: [myjs/**]
  ```

- Step four: Inside the top-level `source` folder of your blog, create a `pdf` directory to store the PDFs you want to embed. Keep in mind that file names should not contain illegal characters, like `&`;

  ![image-20231107193558689](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107193558689.png)

- Step five: In your blog post’s markdown file, insert the code along with the PDF path, for example:

  ```javascript
  <iframe src="/myjs/pdfjs/web/viewer.html?file=/pdf/Factors determining household-level food insecurity during COVID-19 epidemic a case of Wuhan, China.pdf" style='width:100%;height:800px'></iframe>
  ```

  Note that the path used here is relative. ⬆ You can adjust the height and width of the embedded document; for research papers PDFs or Powerpoint-turned-pdfs, setting the height to `800px` seems quite good. Also –– because Markdown editors (like Typora) aren't full browsers, viewing the `.md` file locally won’t reveal the PDF widget; instead you'll see something like:

  ![image-20231107194724061](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107194724061.png)

  No need to panic –– once deployed, web browsers will render it properly!

---

If everything goes smoothly, congratulations — there’s now a PDF-embedded blog post whose end-product looks like this:

<iframe src="/pdfjs/web/viewer.html?file=/pdf/Factors determining household-level food insecurity during COVID-19 epidemic a case of Wuhan, China.pdf" style='width:100%;height:800px'></iframe>

---

On desktop, the embedded PDF supports downloading, printing, full-screen viewing and even rotation — incredibly cool! Mobile, however, is another story: I tried several browsers, including WeChat’s in-app browser, Chrome, Edge and Safari, and no option to play the PDF appeared — my configuration likely tripped up, but it’s no huge deal. Also, on mobile (likely owing to the heavy PDF), the file won’t load when opening a PDF-embedded post for the first time unless you manually refresh the page once.

Implementation complete — Hexo now tells your PDFs to sit comfortably inside blog posts! Note that a single GitHub repository has a 1GB size limit, a single file size limit of 100 MB, so keep embedded PDFs as lean as you can –– you don’t want to burst your repository and get a reprimand from GitHub. What's more, PPT-to-PDF carries a warning: elements programmed for animation in the original slides become freezing-to-still-life views, so you really shouldn't be layering anything over anything in the original slide.
