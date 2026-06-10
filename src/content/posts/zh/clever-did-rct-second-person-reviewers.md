---
title: "NC-巧妙的DID+RCT：回复审稿人时使用第二人称更有可能得到“善意”"
date: 2024-02-07T10:00:00+08:00
category: { name: "研究笔记", slug: research }
tags: ["HIBL", "DID"]
summary: "巧妙的DID设计+1。"
---

> 利用给审稿人的回信中人称代词的**差异**和审稿人反馈意见的**差异**，构造DID，发现使用第二人称代词(you)称呼审稿人的作者收到的评审意见问题更少、回复更短、反馈更积极。机制是使用“you”的对话更偏个人，投入程度也更高。

**标题:** Behavioral consequences of second-person pronouns in written communications between authors and reviewers of scientific papers

**期刊:** Nature Communications

**上线时间：**2 January 2024

<br/>

**Gaps:** 关于人称代词“you”的使用已有诸多研究，如使用“you”可以引起对方的注意，提高话题参与度，“you”还具有规范行为影响说服力的功能，但这些研究常常集中在单向的、一次性的交流上，或背景局限在亲密关系中，在多方、动态、非亲密关系的情景中，关于“you”的使用的研究仍然有限。

**Aims:** 利用学术期刊同行评议的互动材料，探究“you”的使用对于评审意见的影响。

**Data:** 

- 同行评议材料：从Nature Communications获取的2016年4月至2021年4月所有论文的同行评议数据，pdf格式，包含审稿人意见和作者回复（共13359篇论文，29144轮评审意见）。利用计算文本分析的相关技术，从这些评审材料中构造变量：
  - 审稿人情绪：积极性+消极性，一共四个指标，三个使用python或者r包分析，一个使用词典法构造词频
  - 第一人称单数代词的使用：I、me、my、mine的次数
  - 单词复杂度：评审意见中每个单词的平均音节数
  - 审稿人参与度：由LDA方法计算主题得出
- 其他变量：
  - 参考文献数量
  - 标题长度
  - 作者人数
  - 第一作者H指数
  - 第一作者性别
  - 第一作者的姓氏首字母
  - 一轮评审的作者积极性、作者友好程度
  - 一轮评审中审稿人的积极性
  - 论文发表的月份、年份
  - 文章所属学科
- 行为实验RCT：一个1601个样本的**随机双盲对照试验**，参与者被要求扮演审稿人，查看作者的回复意见。由是否使用第二人称区分实验组和控制组。最后，请参与者评估与作者“对话”的投入程度和个人性水平。

**Identification strategy:** 

![Fig. 1](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/41467_2023_44515_Fig1_HTML.png)

这篇文章的DID策略蛮巧妙的，看本文的peer review file，审稿人们对这一策略也赞赏有加！

DID的事前趋势：审稿人根据manuscript给出评审意见，“保证”了事前两组没有系统性差异（没法检验平行趋势，作者使用PSM、Heckman模型、排列测试和RCT来辅助排除事前的可能问题）；

DID的第一重差异：作者回复审稿人时是否使用第二人称”you“，使用了第二人称的作为处理组，否则为对照组；计算两组审稿意见中问题的数量及相关指标；

DID的第二重差异：审稿人对response letter的反馈，计算两组意见中问题的数量及相关指标。

**Results:**

- 在回复审稿人意见时，使用第二人称“you”，得到的反馈中，问题数量更少（平均处理效应为-3.33个问题）、意见也更短（平均处理效应为-135.59个词）

- 使用第二人称得到的回复更积极

- 在作者使用第二人称后，审稿人使用第一人称的情形会减少

- RCT的结果：使用“you”时，参与者的评价更积极，对话更偏个人、投入程度也更高⬇️

  ![figure 4](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/41467_2023_44515_Fig4_HTML.png)

**号外：**写作中人称的使用是一件有趣的事情，在国内学者发表的文献中，我常常看到他们使用客观描述，如“本文xxx”、“本研究xxx”，避免第一人称和第二人称。研究生导师也常常会在指导学生时强调这一点。但在经济学和国外的诸多文献中，时常见到第一人称的表述，如“Here, we introduce a xxx”、“I investigate xxx”，从AER到Nature、Science都可见到。这是否是某种学科或地区文化差异？

**原文信息：**

Sun, Z., Cao, C.C., Liu, S. *et al.* Behavioral consequences of second-person pronouns in written communications between authors and reviewers of scientific papers. *Nat Commun* **15**, 152 (2024). https://doi.org/10.1038/s41467-023-44515-1

**PS:** 这篇文章共有5个审稿人，作者也真是艰难哈哈。

![image-20240207092619506](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240207092619506.png)
