---
title: "Typora Basics Notes"
date: 2020-04-11T21:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["Typora", "Notes"]
summary: "An introduction to the advantages and basic syntax of Typora, a Markdown editor."
---

## I. Introduction

[Typora](https://www.typora.io/) is a text editor that supports Markdown syntax, celebrated for the idea that "writing is aesthetics" — your text is typeset the moment you type it[^1]. It has many advantages:

- Frees you from mouse operations so you can focus on writing (strictly speaking, isn't this an advantage of Markdown syntax?)
- What you write is what you see, and the layout generally does not change when uploaded to the web
- Minimalist design, giving a feeling akin to `the burdenless speed of OnePlus`
- No separate source-code and rendered-output comparison mode, so writing is more focused
- Compared with other editors, Typora supports a relatively large number of keyboard shortcuts
- Rich themes, help, and other custom settings
- Easy to export and share



## II. Basic Syntax

### (1) Multi-level headings

In native Markdown syntax, multi-level headings are achieved with `#` plus a space, for example:

```
# Heading 1
## Heading 2
### Heading 3
```

The number of `#` signs indicates the heading level. Typora supports up to six levels of headings. The above can also be done with `Ctrl+(1~6)`, where the digit indicates the heading level, for example:

```
Ctrl+1 Heading 1
Ctrl+2 Heading 2
Ctrl+3 Heading 3, and so on; the result ↓
```

###### ![image-20200411193702341](/img/image-20200411193702341.png)

> Typora supports adjusting the heading level via shortcut keys, done with `Ctrl+(=/-)`



### (2) Emphasis / special display

- *Italic*: `*text to italicize*` — enter one * before and after the text to be italicized; the shortcut is `Ctrl+I`
- **Bold**: `**text to bold** ` — enter two * before and after the text to be bolded; the shortcut is `Ctrl+B`
- ***Bold italic***: `***text to bold and italicize***` — enter three *** before and after the text to be made bold-italic
- ==Highlight==: `==text to highlight==` — enter two = before and after the text to be highlighted
- ~~Strikethrough~~: `~~text to strike through~~` — enter two ~ before and after the text to be struck through; the shortcut is `Alt+Shift+5`
- <u>Underline</u>: `<u>text to underline</u>` — note the slash /; the text is preceded by `<u>` and followed by `</u>`; the shortcut is `Ctrl+U`
- `Code`: insert the content you want to display between two \` backticks (the key below Esc in English input mode); the shortcut is `Ctrl+Shift+backtick`
- $$e^x$$: superscript, ^^ — enter the content to be superscripted inside the two little carets, for example `e^x^`
- $$y_{t-1}$$: subscript, \~\~ — enter the content to be subscripted between the two tildes, for example `y~t-1~`

> Highlight cannot display correctly on this blog; HTML highlight text requires additional steps

> Some features, such as highlight, must be enabled in Preferences (Markdown extended syntax)

> The content following a shortcut key is usually the initial letter of the corresponding English term, such as Bold for bold, Italic for italic

> There must be no spaces where the above text meets the symbols, otherwise the syntax is invalid — for example `==highlight ==` cannot highlight correctly

> If you want to display markup language or original text containing symbols, you can do so by writing inside a code segment or by inserting a backslash \  before the symbol to escape it



### (3) Lists

#### 1. Unordered lists

The presentation in Section II used unordered lists, that is, markers without sequence. They can be created with plus + space, or minus + space, or asterisk + space, for example:

+ Unordered list 1
+ Unordered list 2
  - Unordered list 2.1
    - Unordered list 2.1.1

> Although called unordered, it is not entirely without order — you can express content hierarchy through indentation

> The shortcut is `Ctrl+Shift+[`; for a so-called shortcut, it is not actually that quick

#### 2. Ordered lists

That is, lists with a sequence, created with number + dot + space, for example:

1. First-level list

2. Second-level list

   2.1 Second-level subdivision

   2.2 Second-level subdivision

   ​	2.2.1 Second-level further subdivision

> The not-quick shortcut is `Ctrl+Shift+]`

> Similar to unordered lists, you can display more subdivision levels through indentation

#### 3. Task lists

That is, lists that can be checked; the syntax is `- [ ] `, with one space after the minus, inside the brackets, and after the brackets. Enter an x inside the brackets to indicate a check.

- [ ] Exercise today


- [x] Update the blog tonight

> Checking can also be done by clicking with the mouse

> Similarly, task lists can also use indentation to show more subdivision levels and support auto-filling

> Task lists will go wrong on this blog's web pages; the effect in Typora's preview mode is as follows:

![image-20200411204423067](/img/image-20200411204423067.png)

### (4) Inserting content

#### 1. Tables

​	The source notation is as follows; the shortcut is `Ctrl+T`. Alignment can be achieved by adjusting the position and number of colons on the second line.

```
| Name | Age | Occupation |
| :--- | :--: | ---: |
| Yui  |  18  | Student |
```

​	The result is as follows:

| Name | Age | Occupation |
| :--- | :--: | ---: |
| Yui  |  18  | Student |

​	You can fill the corresponding content directly into the table. The table displayed by this blog's renderer differs somewhat from Typora's preview mode.

​	Operations such as adjusting alignment and changing the number of rows/columns seem faster done by clicking with the mouse.

#### 2. Images

Generally speaking, Typora has three main ways to insert images: absolute path, relative path, and image-hosting link (which can also count as a relative path). The syntax is `![]()`, with the image name in the square brackets and the image path or link in the parentheses; if you then append a "title", moving the cursor to the image will display the image's caption. The shortcut is `Ctrl+Shift+I`. The three paths are explained as follows:

- Absolute path, that is, the image's local path, which can be done directly by dragging or pasting

- Relative path, that is, only the relative position of the Markdown document and the image needs to stay unchanged; moving the file as a whole does not affect the reference
- Image-hosting link, that is, uploading the image to the corresponding image-hosting provider and obtaining a link; you can also fill in the link of a relevant online image

Using a relative path or image hosting is recommended. Here, using Hexo as an example, I demonstrate the relative-path operation:

1. In the Typora software, go to Format → Image → Global Image Settings, and configure as follows, that is, specify copying the path to the blog's image root directory and tick the relevant options

![image-20200411165759287](/img/image-20200411165759287.png "Image settings")

2. To reference relevant online images, simply fill in the name and path according to the syntax

#### 3. Hyperlinks

- For example, this blog's address [yuzhang.pages.dev](https://yuzhang.pages.dev/) — click it to jump there; its syntax is square brackets followed by parentheses, `[]()`, with the characters you want to display in the square brackets and the link address in the parentheses.

- To set a click to jump to the original URL, you can write: `<https://yuzhang.pages.dev>`, which renders as <https://yuzhang.pages.dev>

- To add a hyperlink to an image, combine the image-insertion and link-insertion syntax — for example, clicking the image below jumps to this blog's About page (there is an error here that I don't yet know how to handle):

  Syntax example: `[![touxiang](/img/touxiang.jpg)](https://yuzhang.pages.dev/about/)`

[![touxiang](/img/touxiang.jpg)](https://www.yuzhangnju.me/about/)

> Various links can be expressed using reference links placed at the end of the article, making the body content more concise in source-code mode

​	For example: `[bilibili][B站]` displays as  [bilibili][B站]

​			`[B站]: https://www.bilibili.com `

[B站]: https://www.bilibili.com

#### 4. Code blocks

Three backticks or the shortcut `Ctrl+Shift+K` insert a code block; choosing the corresponding language name enables code highlighting:

```python
hexo clean
hexo g
hexo d
print("hello world")
```

#### 5. Formula blocks

Insert between two pairs of dollar signs, or use the shortcut `Ctrl+Shift+M`:

```
$$
y=\alpha+\beta_1x_1+\beta_2x_2+...+\beta_{n-1}x_{n-1}+\beta_nx_n+u_i
$$
```

$$
y=\alpha+\beta_1x_1+\beta_2x_2+...+\beta_{n-1}x_{n-1}+\beta_nx_n+u_i
$$

You can select an engine here; this article uses LaTeX syntax and the MathJax engine. For more formula expressions, see footnote[^2]

#### 6. Horizontal rules

*+-, three of any of these symbols in a row can insert a horizontal rule (within this blog's theme, +++ will not produce a rule)

***

#### 7. Emoji

You can directly import external emoji, or input them using the form colon + keyword + colon, for example:

`:love_letter:` produces the love-letter emoji:   :love_letter:

This function cannot display on this blog's web page, so you cannot see the love letter (it can be seen locally)

#### 8. Indentation

​	Indent one Chinese character

​		`&emsp; sample text`

​	Indent half a Chinese character

​		`&ensp; sample text`

​	Indent one quarter of a Chinese character

​		`&nbsp; sample text`

The result is as follows:

&emsp; sample text

&ensp; sample text

&nbsp; sample text



## III. Miscellany

As a powerful editor, Typora also supports some HTML, and has writing aids such as typewriter mode and focus mode[^3]; I look forward to further study and application.

But it also has certain problems — for example, its support for footnotes does not seem as intuitive and convenient as the Jianshu editor, and some formatting will distort or become unavailable on the web.

Appendix:

Some Markdown resources

- <https://mdnice.com/>, makes WeChat typesetting easier
- <https://web.marp.app/>, use Markdown syntax to write slides on the fly



Reference:

1. <https://www.bilibili.com/video/BV1ox411y7Mc?from=search&seid=4186236951465042906>

2. <https://blog.csdn.net/mingzhuo_126/article/details/82722455>
3. <https://sspai.com/post/54912>

[^1]:https://www.bilibili.com/video/BV1ox411y7Mc?from=search&seid=4186236951465042906

[^2]:https://blog.csdn.net/mingzhuo_126/article/details/82722455
[^3]:https://sspai.com/post/54912
