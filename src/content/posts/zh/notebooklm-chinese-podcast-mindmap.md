---
title: "NotebookLM支持中文播客和思维导图，一起来试试"
date: 2025-05-01T18:00:00+08:00
category: { name: "技术", slug: tech }
tags: ["HIBL", "起源问题", "AAAR"]
summary: "地道的AI中文播客来了！"
---

> 在去年12月的推文“[介绍两个AI文献综述平台](https://mp.weixin.qq.com/s/Y6N1lEITz02elLy1Tk2Hsw)”里，我讲解了Google NotebookLM在文献综述中的应用，并提到其支持生成双人的英文播客，这是一项极具潜力的功能。近日，NotebookLM支持了**中文播客**，还加入了**播客互动**和生成**思维导图**，一起来看看吧！

## NotebookLM播客

#### **中文支持**

播客或者说音频，对我而言是一种重要的**陪伴形式**。在吃饭、睡前、洗漱以及citywalk（街溜子）或者骑车的时候，我都会听音频，有时候是小宇宙或者Spotify的播客，有时是B站或YouTube的节目。下面是我在**小宇宙**的收听数据⬇️：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/1746086467458.jpg)

NotebookLM的播客功能提供了个性化的资料来源，并且对话自然、内容有深度，得到**Andrej Karpathy**的高度赞赏⬇️：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501144517724.png)

去年我曾展示过其生成的英文播客，而现在，其支持语言超过50种，并包含**中文**。

在这里，我以上期推的论文作为材料（[AER-国家从何而来？河流改道与早期国家的诞生](https://mp.weixin.qq.com/s/YInjbcPjBDRwpiu1CmRM9Q)），导入论文PDF让其生成播客，内容如下：

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=3076638712&auto=0&height=66"></iframe>

或者访问B站的音频：[https://www.bilibili.com/audio/au4803525](https://www.bilibili.com/audio/au4803525)

我建议你点开上面的音频听完。

使用**通义听悟**将音频转为对话文本，部分如下⬇️：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501145517983.png)

总结而言，NotebookLM的音频具有以下特点：

- **用语口语化而非学术化**：相比直接让LLM总结论文，NotebookLM两位主持人的对话语言更偏口语，符合日常对话的习惯；
- **问答互动深入**：两位主持人以相互问答的形式推进对话，并且对话内容不局限于原材料，有适度发散。比如这次对话的结尾，两位主持人（🤖）提到：“几千年前的环境挑战塑造了我们已知的最早的国家形态。那我们今天面对的这种全球性的环境挑战，比如气候变化什么的。这种挑战又会怎么样去改变或者说重塑我们未来的**治理结构**，还有我们彼此之间的合作方式呢？”
- **发音地道但仍有改进空间**：听一会儿音频就会发现，NotebookLM不是简单地将文本转语音，而是对日常对话做了优化，总而言之就是有真人对话那味儿。但对话转折和个别字词发音还有优化空间。

对于AER这篇论文，我还让其生成了英文音频，也来听听看下：

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=3076684731&auto=0&height=66"></iframe>

或者访问B站的音频：[https://www.bilibili.com/audio/au4803526](https://www.bilibili.com/audio/au4803526)

我个人认为英文播客的文本质量、对话流畅度、发音水平要优于中文，并且真的很美式，特别喜欢用“**Exactly**”。

#### **互动模式**

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501151541079.png)

在最近的更新中，播客功能还支持了互动模式（**Interactive mode**），点击即可加入二人的对话，询问你想知道的其他信息，或者提出你的见解。我试了一下，响应速度很快，谈话质量也不错。

值得注意的是，生成播客的时候用户可以加入**自定义要求**，比如让其对方法部分进行更细致的讲述。

## NotebookLM思维导图

在更早的更新中，NotebookLM支持生成思维导图。我以前尝试过用特定的**GPTs**或者专门的工具来生成论文的思维导图，效果也还行。不过NotebookLM具备更好的效果，和支持高达300份PDF的文献来源。

还是以上面的论文为例，简单展示一下其效果，纵览如下⬇️：

![NotebookLM Mind Map (1)](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/NotebookLM%20Mind%20Map%20(1).png)

详细展开后，文件体积达7.3MB，图片大小为8795 × 15637，因此在微信端展示效果可能受限，但原网页效果良好。内容如下⬇️：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/NotebookLM%20Mind%20Map.png)

大家有兴趣也可以放大图片或者去网站上自己试试，效果还是很不错的。不过目前的思维导图不支持编辑，期待后续可以加入编辑功能。

## 号外

- 我不知道该怎么称呼NotebookLM播客里的两位主持人，特别是当我以第二人称（you）加入他们的对话的时候，他们是人？机器人？还是机器🤖。
- 祝大家节日快乐，玩得开心！
