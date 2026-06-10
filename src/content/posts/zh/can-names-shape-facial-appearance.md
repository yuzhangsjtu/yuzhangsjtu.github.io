---
title: "PNAS-姓名会影响长相吗？姓名作为社会标签的自我实现"
date: 2024-07-22T18:00:00+08:00
category: { name: "研究笔记", slug: research }
tags: ["HIBL", "起源问题"]
summary: "一个人的面部特征会随着时间的发展，逐渐与其名字的社会刻板印象相符。"
---

> 这篇论文探讨了一个有趣的现象，即人的面部外貌是否会随着时间的发展而与其名字相关的社会刻板印象相符。具体来说，研究者假设一个人的面部外貌在成年后会变得与其名字的社会刻板印象相似，但在童年时期则不会。这种现象被称为“**自我实现预言效应**”。
>
> 研究通过多个实验方法验证了这种效应，结果表明姓名作为一种**社会标签**，确实能够影响我们的面部外貌。研究还发现**同名的成年人具有更高的面部相似度**。

**标题:** Can names shape facial appearance?

**期刊:** *PNAS*

- <u>Yonat Zwebner</u>：Assistant Professor of Marketing at the Arison School of Business, at the Reichman University. Prior to joining the University, she was a Post-Doctoral Research Fellow at the Wharton School, University of Pennsylvania. She holds a PhD in Marketing from the Hebrew University of Jerusalem.
- <u>Moses Miller</u>：Assistant Professor at the Data Science department at the Arison School of Business, Reichman University.
- <u>Noa Grobgeld</u>：M.A. student in Educational and Clinical Child Psychology, advisors: Dr. Ruth Mayo and Dr. Yonat Zwebner, Arison School of Business, IDC Herzliya.
- <u>Jacob Goldenberg</u>：Professor of Marketing at the Arison School of Business Administration at Reichman University and a visiting professor at the Columbia Business School.
- <u>Ruth Mayo</u>：Social cognitive researcher in the Department of Psychology at the Hebrew University of Jerusalem.

**上线时间：** 15 July 2024

<br/>

## 姓名作为社会标签

**乔治·奥威尔**有一句名言：“在50岁时，每个人都有他应得的面孔”（At 50, everyone has the face he deserves）。

- 姓名是一种在早期生活中赋予我们的社会标签，伴随我们的一生。事实上，名字不仅仅是一个简单的识别符号，还带有社会刻板印象和期望，这些刻板印象和期望可能会对个体的行为、个性和外貌产生影响。如，一个叫“John”的人可能会被期望具有某些特质，而这些期望可能会通过个体的行为和选择（如发型、化妆、表情）在面部外貌中体现出来。

- 已有研究表明，人们可以高于随机概率地根据面部特征匹配正确的名字，这被称为**长相-姓名匹配效应**。这种效应的解释是名字作为一种社会刻板印象，随着时间的推移，人们会内化这些刻板印象并在其外貌中表现出来。

有两种可能的机制来解释长相-姓名匹配效应：

- **先天匹配机制**：个体天生就有某种面部特征，使得名字与面部特征匹配。根据这种机制，名字是根据婴儿的面部特征赋予的。即给婴儿取名的人（通常是父母）根据婴儿的面部特征赋予他特定的名字。这种机制强调**生物因素**在名字与面部匹配中的作用。
- **自我实现预言机制**：即个体的面部外貌随着时间的推移逐渐与名字的社会刻板印象相符。这种机制强调**社会因素**在个体面部外貌发展中的作用。

这项研究假设成人的长相会与其姓名的社会刻板印象相符，但儿童则不会。研究设计了实验来让参与者匹配成人和儿童的面部与名字，并使用机器学习算法分析面部图像数据。

结果显示，成人和儿童均能够准确地匹配成人的面部和名字，而无法准确匹配儿童的面部和名字。此外，利用机器学习方法处理面部图像数据，发现同名成年人的面部特征比不同名的成年人更为相似，而儿童中没有这种相似性。这一模式也出现在通过人工智能老化的儿童面部图像中，支持了社会发展在这种效应中的作用。研究结果表明，名字作为一种社会因素，确实能够影响我们的面部外貌，确认了社会期望的强大影响。

## 实验

**实验1和2: 人们能否根据面部特征猜对成人和儿童的名字**

实验1和2的步骤是相同的，区别在于使用了不同的面部图像来源。实验1使用的儿童面部图像来自一个现有的**双胞胎数据集**，实验2的成人和儿童数据来自于同一个常规数据集。

研究人员让参与者（包括儿童和成人）看了一些成人和儿童的照片，然后从四个名字选项中选出哪个是照片中人的真实名字。如⬇️下图所示：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722143235276.png)

**实验3: 用电脑来验证人脸和名字的匹配**

为了消除人类感知偏见，科学家们使用了一种叫做“Triplet Loss Siamese Neural Network”的算法，来计算不同类别（即名字）间面部特征的相似度。图像被分为训练集和测试集，训练集用于训练神经网络，测试集用于评估模型性能。简而言之，实验3想要测试同名的人，是否面部特征更相似！

**实验4: 模拟儿童长大后的样子**

使用生成对抗网络（GANs）技术，将儿童的面部图像数字化老化，生成成年面部图像。参与者被要求匹配这些人工生成的成人面部图像与名字，并与真实成人面部图像的匹配结果进行比较。同时使用相同的Siamese Neural Network架构，评估人工生成的成人面部图像的相似度，并与真实成人面部图像的结果进行比较。

## 结果

- 实验1和2显示，成人和儿童，都能够显著高于随机概率地匹配成年人的长相与姓名，都无法显著高于随机概率地匹配儿童的长相与姓名；![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144136067.png)![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144207227.png)
- 实验1和2的结果意味着，成年人的面部特征随着时间的发展与名字的社会刻板印象相符，而儿童的面部特征尚未显示出与名字的社会刻板印象的匹配。同时，即使是儿童，也能识别成年人的长相与姓名的匹配。
- Figure 4 的可视化结果表明，Siamese神经网络在处理面部图像时，能够根据名字的不同有效地将面部特征向量进行分类和聚类。名字相同的面部图像在特征空间中具有更高的相似性和聚集性，而名字不同的面部图像则被有效地分离。这支持了研究中的假设，即名字与面部特征之间存在一定的匹配效应，特别是在成人面部特征中表现得尤为明显。![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144540451.png)
- 进一步，实验3比较了成人和儿童面部图像的相似度提升（Similarity Lift），在成人面部图像中，名字与面部特征之间存在显著匹配关系，而在儿童面部图像中，没有发现这种匹配关系。![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144903939.png)
- 实验4表明，参与者能够准确匹配自然成人的长相与名字，但无法准确匹配**人工老化**的成人长相与名字。这表明，名字与面部特征的匹配效应主要依赖于自然成长过程，而非单纯的生物老化。![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722145729256.png)![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722145745715.png)

## 结论

- 基本结果：人们根据照片匹配名字，发现只有成人的长相与名字相符，儿童没有。电脑算法的实验也支持这一结果。进一步，把儿童的脸模拟成他们长大后的样子，发现这些“**未来的脸**”不能与名字匹配，进一步证明名字对长相的影响是**社会性的**，而非单纯生物性的。
- 这些研究表明，名字作为一种社会标签，通过长期的社会期望和自我认同，逐渐影响了我们的面部外貌。
- 未来可以进一步探讨名字刻板印象的来源，以及这些刻板印象在多大程度上影响个体的面部外貌。研究还可以探讨哪些社会和个体因素可能影响面部-名字匹配效应的发展。

## 号外

- 作者团队2017年发表过一篇论文We Look Like Our Names: The Manifestation of Name Stereotypes in Facial Appearance，确认了**长相-姓名匹配效应**的存在；
- 本期PNAS文章深入探讨了“**长相-姓名匹配效应**”的起源，即姓名作为一种社会标签，可以自我实现；
- 常说相由心生，这篇文章表明，姓名的自我实现效应，可能影响了一个人的内心？
- 这篇论文从投稿到接收只用了三个月；
- 你的姓名有什么特别的寓意吗？你是否在有意识地成为名字所寓意的那个人？

## 原文信息

Zwebner, Yonat, Moses Miller, Noa Grobgeld, Jacob Goldenberg, and Ruth Mayo. "Can names shape facial appearance?." *Proceedings of the National Academy of Sciences* 121, no. 30 (2024): e2405334121. https://doi.org/10.1073/pnas.2405334121

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722102954056.png)
