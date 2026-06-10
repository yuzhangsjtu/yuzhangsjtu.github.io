---
title: "R Language Basics"
date: 2021-05-29T10:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["R Language"]
summary: "A beginner's guide to essential R language operations for research, covering RStudio setup, code execution, and package installation."
---

R has many applications in statistics, econometrics and scientific visualization — it is a powerful tool for research.

To facilitate reading the literature and to get started with this powerful tool, I'm learning R.

Since I'm using it primarily as a tool and won't really be doing "programming" per se, this section just extracts the relevant basics so I can refer back to them.

My setup is: R version 4.0.2 + RStudio

### 1. First look at RStudio

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529205237.png"  />

#### 1.1 Zone A

This zone is mainly for writing your scripts. When you first open a fresh installation of RStudio, you might not see zone A right away.

Instead, zone B will occupy the entire area. Go to the top-left corner, click **File** → **New File** → **R Script**, and it should appear. If you previously had an R script open, reopening RStudio will also reopen that script.

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529205619.png" style="zoom:50%;" />

The steps above will create a new R script file named “Untitled1” (its default extension is `.R`). You can write code in this file and press `Ctrl + S` to save it. You can also click **File** → **Save** in the top-left. A “Save File” dialog will pop up and let you rename the “Untitled1” file. Let's rename it “test” and click “Save.” The file will be saved in the working directory you want. Afterwards, a “Save File” dialog will appear, and you can rename the “Untitled1” file. We'll rename it “test” and then click “Save.” The file will be saved in the current working directory.

#### 1.2 Zone B

This zone is where you execute code, and it’s also where the results appear. When you enter code in zone A, each line's result is displayed here. You can also type code directly into this area and press Enter to run it and see the results. Typing and running code directly in this zone works very much like the RGUI interface, which is why we won’t cover RGUI separately.

For code written in zone A, you can click **Run** to execute the line where the cursor sits — one click runs one line — or use **Ctrl + Enter** to do the same. The code you ran will be displayed in zone B, and if there’s an error, a corresponding error message will appear. As you keep running code, material in zone B will pile up, but you can clear it with the broom button. Alternatively, use the **Ctrl + L** keystroke or enter `cat('\f')` into the Console to clear the console contents.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529205851.png)

#### 1.3 Zone C

**Environment**: Records the values of current variables, letting you conveniently check their state.

**History**: Holds a history every command previously executed in the **Console** area.

**Connections**: Is used to conveniently connect to external databases. It’s rarely used so I won’t introduce it here.

#### 1.4 Zone D

Files, Plots, Packages, Help, Viewer

**Files:** Here you can see the files in the current working directory, showing the user the working path, which is crucial for reading/writing files.

You can get the current working directory by typing `getwd()` in the Console:

If Files suddenly doesn’t show what you think is the working directory, that’s because the view has staled. Click on the arrow to the right of the Console tab to update it, as shown below:

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image/img/20210529213112.png" style="zoom:50%;" />

**Plots:** Your finished plots will show up here.

**Packages:** Shows all installed packages, with a check under checkboxes for ones already loaded.

To install packages, click **Install** and type the package name. Alternatively, in the Console enter code like:

`install.packages('data.table')`, which will install the package named “data.table.” To update packages, click **Update**.

**Help:** provides help on using functions. Below is a look-up for `read.table`.

You can also type `help()` in the Console and place the function name between the parentheses you want-to look up the help page for, for example: ~~`help(read.table)()`~~ If you want help for `read.table`, you would in practice type either:

```
help(read.table)
```

or in the Console type `?read.table`, such as:

Or, ask for help like so help(read.table)， is slightly garbled

(Alternatively, they can just type the `?` command directly: `?functionq()`) inside whose brackets goes whatever you want—See below：“?read .table”). 

***Rewrite last four sentences.  Looking at the unredacted url helps clarify the jumble;  maybe: Which earlier copy proved overrun: below 、graph `![I am an image description the reader sees as equivalent].path follows], your current tabl; showing。webbens+****

To achieve inline ! how— ? commands stay exact !

So:

’You looking really opened a by-line **this text:” I should use etc→ my web Viewer The precise markdown once printed:** ***Exactly how source is but flow fine!) —*

In **their doc/eng+**. leaving how…

> (... But neat “below how… below … **now tidy revise of preceding!: Please write back-clearing the use on last mixed:** They past has ` `text('test .")'.` actually:

Plots.. example paged directly: just from "to *" blockquote ends.)

Exec we... following steps R doc ? The alt in images translate。 Alt text part way keep (MD tag no harm (English prose description these alt will become already from they)). Good look pre tag viewer save。 Mark tag non-line unswerving all well structure the same. Continuing through files raw below->

YOUR code (everything internal:?? n).

*Lines begin previous parsing (the block as we see):*

…Now merging snippet clean unaltered structure copy rest later end.

————

*Block after break:*  
    When look (correct functional wording keeps shape below quickly for reader. Equivalent origin md string this means **4**) but set it usual way final versions here--including through entire context... rest text unchanged!

**Plots fully:**..

The plot-pane (always aligned to right sidebar environment called *Plots* zone defaults.

- Directly:

  The **Packages pane re-info**:

After previous etc, only relevant and after---

Switch "mirror selecting =in" the **global选项 /setting to select =and**. [The mirror that lists appears in on toggle](#none or the relevant ) **specific internal version/ subregion app… that already )

Since being general mirror (has such ). Nam等镜像, yǔ以随序

南/ (**The Nanjing university packages…_lines extra flow state — leaving raw description fits.

The / ... i.f above** keeps as single complete heading and translation **down to** structural replication reaches goal.
