---
title: "Typora Basics Notes"
date: 2020-04-11T21:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["Typora", "Notes"]
summary: "An introduction to Typora, a Markdown editor that emphasizes aesthetics and focus, covering its advantages and basic syntax for headings and text formatting."
---

## I. Introduction

[Typora](https://www.typora.io/) is a Markdown text editor celebrated for the philosophy that “writing itself is aesthetics” — text is typeset the moment you type it[^1]. Among its many strengths:

- Frees you from the mouse so you can focus on writing (strictly speaking, this is more a virtue of Markdown itself?)  
- True WYSIWYG: what you see while writing is what you get; the layout rarely breaks when uploading to the web  
- Minimalist design, reminiscent of that “OnePlus burdenless speed” feeling  
- No split source/preview pane — a more concentrated writing experience  
- Compared with other editors, Typora supports a generous set of keyboard shortcuts  
- Rich themes, a Help system, and extensive user-customizable settings  
- Easy export and sharing  



## II. Basic Syntax

### (I) Multi‑level headings

In native Markdown, multi‑level headings are achieved with `#` plus a space, for example:

```
# Heading level 1
## Heading level 2
### Heading level 3
```

The number of `#` signs determines the heading level. Typora supports up to six levels. You can also apply them with `Ctrl` + `1`–`6` — the digit represents the heading level:

```
Ctrl+1  Heading 1  
Ctrl+2  Heading 2  
Ctrl+3  Heading 3, etc.  Result ↓
```

###### ![image-20200411193702341](/img/image-20200411193702341.png)

> Typora lets you adjust heading levels with `Ctrl` + `=` and `Ctrl` + `-`.



### (II) Special / emphasis display

- *Italic* : `*text to italicize*` — wrap the text in single asterisks. Shortcut `Ctrl+I`
- **Bold** : `**text to bold**` — wrap the text in double asterisks. Shortcut `Ctrl+B`
- ***Bold italic*** : `***text to make bold‑italic***` — wrap the text in triple asterisks `***`
- ==Highlight== : `==highlight==` — wrap the text in double equals signs
- ~~Strikethrough~~ : `~~strikethrough~~` — wrap the text in double tildes. Shortcut `Alt+Shift+5`
- <u>Underline</u> : `<u>underline</u>` — note the forward slash `/`; the opening tag is `<u>` and the closing tag is `</u>`. Shortcut `Ctrl+U`
- `Code` : Place the content you want to show as inline code between two backticks `` ` `` (the key below Esc in English input mode). Shortcut `` Ctrl+Shift+` ``
- Superscript, e.g. $$e^x$$ : Place superscript content inside two carets `^`, for example `e^x^`
- Subscript, e.g. $$y_{t-1}$$ : Place subscript content inside two tildes `~`, for example `y~t-1~`

> Highlight may not render correctly on this blog; HTML‑based highlight text requires a different approach.

> Some features (e.g., highlight) must first be enabled in Preferences (under Markdown’s Extend Syntax).

> Shortcut keys are usually the initials of the corresponding English names — for example **B**old (`Ctrl+B`), **I**talic (`Ctrl+I`).

> No spaces may appear between the text and the surrounding symbols, or the syntax will be invalid. For instance, `== highlight ==` will not highlight correctly.

> To display markdown symbols literally, type them inside a code segment, or insert a backslash `\` before the symbol to escape it.



### (III) Lists

#### 1. Unordered lists

Section II’s presentation used unordered lists – lists without numerical order. They can be created with a plus sign `+`, a minus sign `‑`, or an asterisk `*`, each followed by a space:

+ Unordered list item 1
+ Unordered list item 2
  - Unordered sub‑item 2.1
    - Unordered sub‑item 2.1.1

> They’re called “unordered”, but you can still express hierarchy by indentation.

> The shortcut is `Ctrl+Shift+[`, which, if we’re being honest, is not that quick.

#### 2. Ordered lists

Lists that follow a sequential order are made with a number, a period, and a space:

1. First‑level item

2. Second‑level item

   2.1 Subordinate division

   2.2 Another subordinate division

   ​	2.2.1 Further subordinate division

> The not‑quick shortcut is `Ctrl+Shift+]`.

> As with unordered lists, deeper nesting is achieved through indentation.

#### 3. Task lists

These are check‑list items; the markdown syntax is `- [ ] ` (hyphen + space, square brackets with a space inside, and a trailing space). Insert an `x` inside the brackets to mark as checked.

- [ ] Do exercise today


- [x] Update blog this evening

> Checking/unchecking the box can also be done with a mouse click.

> Task lists similarly support indentation for deeper levels, and auto‑filling works too.

> Task lists misbehave when displayed on this blog. Typora’s preview mode gives the following result:

![image-20200411204423067](/img/image-20200411204423067.png)

### (IV) Inserting Content

#### 1. Tables

​	The source notation looks like this. The shortcut is `Ctrl+T`. Alignment is controlled by the colons on the second separator line:

```
| Name | Age | Occupation |
| :--- | :--: | ---: |
| Yui  |  18  | Student    |
```

​	It renders as:

| Name | Age | Occupation |
| :--- | :--: | ---: |
| Yui  |  18  | Student |

​	You can fill content directly into the table. The renderer this blog uses displays tables slightly differently from Typora’s preview.

​	Actions like changing alignment, adding, or removing rows / columns tend to be faster with mouse clicks.

#### 2. Images

Typora generally supports three ways to insert an image: absolute path, relative path, and an image‑hosting link (which may also be considered a relative link). The markdown syntax is `![ ]( )`, with the image description in the square brackets and the path or URL in the parentheses. If you append a `"title"`, hovering over the image will show the caption. The shortcut is `Ctrl+Shift+I`.

The three image referencing methods:

- **Absolute path**: the exact local path to the image; images can be inserted by dragging or pasting.
- **Relative path**: the relative relationship between the Markdown file and the image folder stays fixed; the reference isn’t broken when the entire project is moved.
- **Image‑hosting link**: Upload the image to an image‑hosting service and use the URL. Alternatively you can point to an image URL elsewhere on the web.

Using a relative path or an image‑hosting service is recommended. Here I’ll demonstrate the relative approach using Hexo as an example:

1. In Typora, go to Format → Image → Global Image Settings, and use the following setup — specifying that copied images go to the blog’s root image folder, along with ticked relevant options.

![image-20200411165759287](/img/image-20200411165759287.png "Image Settings")

2. To reference an image from the web, simply fill in the file name/description and URL as required by the syntax.

#### 3. Hyperlinks  

- For example, the address of this blog [yuzhang.pages.dev](https://yuzhang.pages.dev/) — clicking it jumps to the linked URL. Syntax: square brackets immediately followed by parentheses `[ ]( )`. The square brackets contain the text you want to display, the parentheses contain the link target.

- To display a URL that opens when clicked, you can write: `<https://yuzhang.pages.dev>`, which renders as <https://yuzhang.pages.dev>.

- To attach a hyperlink to an image, combine the image and hyperlink syntax. For instance, clicking the picture below should go to this blog’s About page (there is an error here whose cause I haven’t yet figured out):

  Example syntax: `[ ![touxiang](/img/touxiang.jpg) ](https://yuzhang.pages.dev/about/)`

[![touxiang](/img/touxiang.jpg)](https://www.yuzhangnju.me/about/)

> All kinds of links can use reference‑style notation, placing the definition at the end of the post, which keeps the plain‑text body much tidier.

​	For instance: `[bilibili][B站]` renders as [bilibili][B站]

​				Reference definition: `[B站]: https://www.bilibili.com`

[B站]: https://www.bilibili.com

#### 4. Code blocks

Type three backticks or press `Ctrl+Shift+K` to insert a code block. Choose the language name to enable syntax highlighting:

```python
hexo clean
hexo g
hexo d
print("hello world")
```

#### 5. Formula blocks

Place content between two pairs of dollar signs, or press the shortcut `Ctrl+Shift+M`:

```
$$
y=\alpha+\beta_1 x_1+\beta_2 x_2+...+\beta_{n-1} x_{n-1}+\beta_n x_n+u_i
$$
```

$$
y=\alpha+\beta_1 x_1+\beta_2 x_2+...+\beta_{n-1} x_{n-1}+\beta_n x_n+u_i
$$

You can select a formula engine here; this article uses LaTeX syntax with the MathJax engine. Further formula syntax can be found in footnote [^2].

#### 6. Horizontal rules

Typing `*`, `+`, or `‑` three or more times creates a horizontal rule (under this blog’s theme `+++` does not produce a rule). 

***

#### 7. Emoji

You can directly paste externally‑sourced emoji, or enter them using `:keyword:` syntax, for example:

`:love_letter:` renders as the love‑letter emoji:  :love_letter:

This function doesn’t work when displayed on this blog’s web page; you cannot see the love letter.

#### 8. Indentation

​	Indent one Chinese‑character width:

​		`&emsp;` Chinese‑width character

​	Indent half a Chinese‑character width:

​		`&ensp;` Chinese‑width character

​	Indent one‑quarter of a Chinese‑character width:

​		`&nbsp;` Chinese‑width character

Result as follows:

&emsp; Chinese‑width character

&ensp; Chinese‑width character

&nbsp; Chinese‑width character



## III. Miscellany

As a feature‑rich editor, Typora also supports a subset of HTML, along with writing aids such as Typewriter mode and Focus mode[^3] — I look forward to further exploration and practice.

It does have some drawbacks, for instance footnote support seems less intuitive and less convenient than that of the Jian Shu editor, and certain formatting may distort or become unavailable when rendered as a webpage.

Appendix: some Markdown resources

- <https://mdnice.com/> — makes WeChat typesetting a lot easier
- <https://web.marp.app/> — use Markdown syntax to instantly write drafts for PPT/ slides



References:

1. <https://www.bilibili.com/video/BV1ox411y7Mc?from=search&seid=4186236951465042906>
2. <https://blog.csdn.net/mingzhuo_126/article/details/82722455>
3. <https://sspai.com/post/54912>

[^1]: https://www.bilibili.com/video/BV1ox411y7Mc?from=search&seid=4186236951465042906

[^2]: https://blog.csdn.net/mingzhuo_126/article/details/82722455

[^3]: https://sspai.com/post/54912
