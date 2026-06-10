---
title: "AAAR-使用AI加速学术研究的方法论与经验"
date: 2025-02-20T18:00:00+08:00
category: { name: "研究笔记", slug: research }
tags: ["HIBL", "AI", "AAAR"]
summary: "一个社会科学博士生的AI使用经验。"
---

> 在这篇文章里，我从一个**社会科学**博士生的视角出发，详细介绍了自己在日常科研中对于**AI**的使用经验与体会。
>
> 我将AI在社科中的应用（与影响）分为了**5个层次**，分别是：**RA level**、**Supervisor level**、**Domain expert level**、**Agent level**和**Governance level**。我会结合案例与文献，有重点地展示这5个层次的使用，希望达到一个“良好实践”的效果（尽管可能不是最佳实践）。
>
> 如果本文对您有所帮助，还请您不吝在页面尾部对我的工作进行“**赞赏**”，以帮助我减轻一些大模型使用的昂贵费用，非常感谢！

本文知识的截止日期为2025年2月20日。

## 引言

这篇推文的标题是**AAAR**，取自*AI Accelerating Academic Research*的首字母，是仿照人工智能顶会之一的AAAI构造的，可以读作“Triple AR”。

我一直对前沿科技很感兴趣，日常摸鱼的很多时间也花在这上面。以ChatGPT为代表的大语言模型，很大程度上改变了我的工作流。这篇推文基于我在两个**reading group**所做的同名pre改写，即将pre的内容整理成文字稿，并更新了一些内容，感谢群里小伙伴们的讨论。

本文中所涉及的案例，在pre时主要依赖现场演示，在推文中，我很难仅靠文字和截图进行完全展示，因此在效果上会有一些折扣。另外，这篇推文的案例主要涉及日常工作流和部分科研方向，并非最前沿的AI研究进展or应用，它是接地气的、**可操作性强**的。

本文结构如下：首先讨论了为什么要使用AI，接下来讲解了生成式AI的一些特点和使用技巧，提供一些简明的挑选大模型的参考资料，第三部分是本文的重点，讲述了我对AI在社科领域应用的层次划分，第四部分是案例展示和一些便捷的AI科研工具介绍。

## 为什么要使用AI

#### **AI的iPhone时刻**

为什么要使用AI，这听起来像个无厘头的问题。这个问题其实主要是面向一些**保守人士**和**中老年科研工作者**说的。在ChatGPT刚出来的时候，有些上了年纪的老师评论“**不过如此**”，不会让他丢饭碗。结果今年春节deepseek r1爆火，同一批老师惊叹r1的写作能力、科研设计的能力比自己更强，并表示要将deepseek r1纳入自己的工作流。

一个合理的推论是，这些老师没有跟踪大语言模型在这两年的飞速进展，他可能直接从ChatGPT 3.5跳到了deepseek r1。

我越来越认同人是有**局限性**的，这种局限性是很难摆脱的。10年前我高考毕业在OPPO专卖店卖手机时，一位中年顾客问我为什么刚拿出来的新手机需要更新系统，我说这是为了完善功能，而他反问我这不是拿功能不完善的产品出来销售吗？确实，以前的功能机大多不需要更新系统，出厂即终身。

在2024年英伟达GTC大会上，老黄穿插讲了许多次“*We are at the iPhone moment of AI*”，这是一个最前沿从业者的判断。iPhone开启了移动互联网时代，其变革性无需多言。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219200913932.png)

与保守相对应的是一种**短视**，即“人们总是会高估技术的短期影响，又会低估技术的长期影响”。

过年两年里AI有诸多进展，每一次的产品迭代都让我非常振奋，就像回到了2010年的搞机时代，惊艳于新品的功能与设计。硅谷的互联网巨头们仿佛一下子年轻了起来，干劲十足。从纯文本的聊天机器人，到多模态大模型，再到实时音视频模型、最近半年的推理模型，以及最新的deep research，AI已经从跃升到了agent层次。AI带来的长期影响，早已在创新的前沿埋下了种子。

尽管有人认为生成式 AI 可能是泡沫，但它对我们学术圈、尤其是年轻研究者而言，的确正在带来翻天覆地的变化。它不仅仅能当一个“**锤子**”去加速已有流程，更重要的是，它开始展现出一定程度的“**推理**”能力。即便有人评价这只是一种基于海量语料“预测下一个词”的随机鹦鹉，但你我又如何能确定，我们自身不是一个复杂的函数拟合器呢？所以，不妨试试吧，将AI纳入自己的工作流。

#### **AI是优质的RA**

在经济学领域，使用AI有个非常现实的好处就是**省钱**。

econ的市场已经充满毒性，现在**predoc**非常普遍，RA们拿着微薄的酬劳，干着扒古籍数据、抄地方志等脏活、苦活、累活。在小红书上，能搜到很多老师招predoc的帖子。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219204502718.png)

假设以前一个老师的工作需要招10个RA，每人每月给200美元，现在，最前沿的AI（GPT Pro）订阅费用也是200美元，老师完全可以只招3个RA，然后给每个人都开GPT Pro或给等额的API费用，这样，3个真人RA在AI的加持下，工作产出应该可以远超10个传统RA，而且RA跑路的风险进一步降低。

## 生成式AI的特点与使用基础

#### **Gen AI与传统技术的区别**

我不知道大家有没有想过这一轮生成式AI与传统机器学习技术的最大不同点是什么，这里传统机器学习技术指基于SVM、决策树、回归等算法的**分类器**或其他应用场景。

一个形象的比喻是，传统的机器学习方法像是一把需要手动锻造的“**锤子**或“**筛子**”，以监督学习为例，它的使用场景通常如下：

- 首先，选择合适的经典算法；
- 其次，在数据集中划分20%作为**训练集**和**验证集**，找一批本科生或比较乖的硕士生来给数据**打标签**，比如微博评论or人民网留言板；
- 最后，构造出锤子或筛子，用来**批量**处理剩下的数据，筛子上有不同形状的孔洞，数据放进去，就会归到对应的孔里，完成分类工作。这样，你就有了想要的x或者y。

这样的锤子或筛子，有着一定的**局限**：

- 需要人工打标签，这需要一定的时间和金钱；
- 模型的性能可能不会很好；
- 最重要的，这样的锤子或筛子，换到新的数据集或场景，就需要重新打造。

而像ChatGPT这样的大语言模型，恰好可以规避上述局限。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219205515693.png)

上面这张图的右侧是**布鲁姆的教育目标分类模型**，将认知学习过程分为六个层级，从基础的知识**记忆**到高级的**创造**性思维，强调学习的层次递进关系。按这个模型来比较，生成式AI已经刷通了六个层次。如果你是一位老师来做图灵测试，能判断出答案背后是自己的学生还是AI吗？

总而言之，我认为生成式AI借助语言文字，具备了人的特征，并且其知识广度吊打地球上任何一个人，Hinton老爷子认为这是反向传播算法相对于人脑神经元的优势。

#### **Gen AI使用的简明教程**

生成式AI的能力取决于两方面，即**模型能力**和是否使用合适的**提示词**，随着模型能力的强化，提示词的重要性越来越低。

**选择模型**

选择合适的模型至关重要，在这里，我推荐大家使用**大模型竞技场**作为参考，网址是：https://lmarena.ai/?leaderboard 

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219214613773.png)

⬆️以上是大模型竞技场在2025年2月19日的部分排名情况

目前排名最高的是刚刚发布的grok 3，但还没有公开可用。谷歌的Gemini系列模型表现亮眼，如果你没有开通ChatGPT plus或者pro，那么在**Google AI studio**里使用免费的Gemini系列模型是个不错的选择。这个表格里**缺失**了OpenAI的前沿模型，比如o1pro。

下面是我**主观**上对各个模型能力的排名和特点介绍：

- **ChatGPT o1pro**：目前为止最强的推理模型，拥有很长的上下文窗口，能输出很长的文本。在科学论文写作方面，逻辑性强，AI味很低，是我使用最多，最深度依赖的模型。当然成本也很高，需要订阅Pro会员，费用是200美元/月；
- **ChatGPT deep research**：OpenAI刚发布不久的研究型智能体，Pro会员每月可以使用100次，是目前为止最强大的科研agent，它在撰写研究报告、论文综述方面能力出色，甚至可以一次性生成6万字的报告，是最近让我思考做科研的意义的模型。但由于它被设计为一个科研agent，所以它不擅长日常任务，不管你的prompt如何写，它还是会主观根据它的能力去网络上查找数据资料，试图生成一个报告或综述。我非常期待其底座模型o3早日上线，据信其会作为GPT5的高性能模式推出；
- **Gemini 2.0 Flash Thinking Experimental 01-21**：我在处理长文本任务和需要即时反馈任务时常常会使用的模型，其支持1M的上下文窗口，意味着你可以一次性丢几十篇论文进去。o1pro是个**重推理**模型，一个简单的问题可能也需要思考几分钟，而Gemini 2.0 Flash Thinking Experimental通常可以在十几秒内开始应答，比如翻译句子、润色文本这类任务，就可以交给它；
- **ChatGPT o3mini high** 和 **Claude 3.5 sonnet**：适合用来写代码，又快又好；
- **DeepSeek R1**：适合用来搞玄学、写**文科黑话**、角色扮演谈恋爱、写散文，总之不太适合逻辑性强、真实性要求高的科研任务。它的模型**幻觉**太严重，调低模型的温度参数会有改善。去年六月，我就使用过deepseek v2的低参数本地版本。这次R1的发布，非常震撼。可能是由于模型对齐工作做得比较少，它的AI味非常低、人味很浓，我很喜欢跟它聊天扯淡。由于它太擅长写作文科黑化，可能比较适合现代文学、哲学、新闻学、社会学（注意不是社会科学）方向的人，be like 张一兵bot。我最近的使用场景如下：![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220081833134.png)

**提示词框架**

网络上流传着各种提示词框架，大体结构是一致的，目的都是向AI表明你的需求。以下简单介绍一下**CO-STAR**提示词框架：

- **Context**：背景/场景。为模型提供必要的背景信息，让它理解你的请求的语境；
- **Objective**：目标。明确你希望模型达成的目标，你想让模型做什么？你的最终目的是什么？
- **Style**：风格。指定你希望模型以何种风格进行回复，例如正式、非正式、幽默、专业、像专家一样、像朋友一样、像诗人一样等等；
- **Tone**：语气。设定你想要的语气，例如积极、消极、客观、主观、幽默的等等；
- **Audience**：受众/人群。明确你的目标受众是谁，模型需要根据受众的特点调整回复，例如儿童、专家、普通用户等等；
- **Response Format**：回复格式/形式。指定你希望模型以何种格式回复，例如列表、段落、代码、表格、总结等等。

总之，有意识地告诉AI一个清晰、可执行的目标和输出要求即可。

对于特别想要优化的提示词，在开始阶段，可以使用一些在线的提示词优化工具，比如：

- Kimi提示词专家：https://kimi.moonshot.cn/kimiplus/conpg00t7lagbbsfqkq0
- AI提示生成器：https://www.aipromptgenerator.net/zh

如果你经常有翻译或润色任务，可以将相关指令设置为模型的个性化提示词。我整理了一些常用的翻译、润色提示词，参见我博客的置顶内容（https://yuzhang.net/）。

另外有uu提到同样的问题，使用英文prompt得到的回复质量更高，大家也可以试试。

## AI for Social Sciences 的5个层次

我将AI在社会科学中的应用（或影响）分成了下面5个层次，分别对应了不同级别的任务或视野：
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220082825623.png)

⬆️以上Level1-5的标题，看起来像文科黑话，是我把自己的分类想法告诉GPT，再由它提炼出来的。

#### **level 1 - 方法论与技术工具的扩展（RA level）**

这是最直接的层面，AI作为新的**工具箱**，集成了很多好用的锤子、筛子、刷子，扩充了社会科学的方法论手段。研究者可以使用零样本学习的文本分类、从非结构化数据提取信息、自动化写作辅助等。这一层面，AI相当于一位超级“**研究助理**”，帮助完成繁琐或困难的任务。例如，在日常工作中，我常把AI用于初步数据清洗、格式转换、文献搜集，以及简单的写作润色等。这些都属于工具层面的增强，大幅提升效率。但核心研究思路仍由人主导，理论框架也基本不变。

#### **level 2 - 认知与知识生产的扩容（Supervisor level）**

在这一层，AI不仅是工具，更影响了知识生产的**认知过程**，是一位不眠不休没有脾气不会PUA你的**导师**。比如，AI可以参与**idea讨论**、优化研究设计，以及引入多学科知识互动。当ChatGPT能够和研究者讨论问题时，知识的产生变成了一种**对话式**过程。研究者可能会向AI征询灵感、验证想法，从而突破个人知识的局限。这种交互为学术创造力提供了新源泉。我在自己的体验中就多次因为与AI的对话而闪现新思路。此外，多学科知识整合方面，AI庞大的训练语料涵盖各种学科，如果善加利用，相当于随时请教各领域入门知识。这种知识生产方式的扩容，潜移默化地改变了研究的**认知链条**：过去可能是**人->文献->人自行综合**，现在是**人-> AI提示下获取综合知识-> 再生产想法**。

#### **level 3 - 计算理性与推理深度的提升（Domain expert level）**

这里，我用了Domain expert的词汇，表明这部分任务在传统上可能需要专家来做，比如经济学领域擅长写模型的研究人员，或者算法工程师。现在，借助前沿推理模型，我们可以很好地让AI来解释、优化经济学模型。

以我自己为例，我没有什么代码基础，只精通python的下载、安装、配置，顶多再用一下GitHub里现成的轮子。但是借助vscode copilot或者cursor，以及询问Claude 3.5 sonnet，我能用python完成一些以前需要请人帮忙才能完成的任务。

#### **level 4 - AI作为本体论实体的考量（Agent level）**

这一层次的核心是：AI模拟人类。

当AI变得越来越智能，我们不得不在社会科学的**本体论**中考虑AI角色。也就是说，过去我们的研究对象几乎清一色是“人”或人造的组织机构，现在出现了一个新的行动者：AI。社会科学理论开始探讨**AI智能体在社会系统中的地位**。例如，在经济市场上，高频交易算法已经在发挥作用，它们可以看作经济行动者的一种；在政治舆论领域，社交媒体上的bots（自动账户）影响舆情，也是一类“参与者”。这要求理论上对“行动者”概念进行扩展，纳入非人智能体。伦理学和社会学也开始问：AI能否被视为有行为责任的主体？AI若参与决策，如何衡量其决策？我将AI模拟社会实验的案例也归入这一层次，因为当我们用AI来模拟社会时，我们实际上把AI当成了社会中的代理人去考虑。这种**本体论重构**迫使社会科学反思很多基本概念，比如互动不一定发生在人和人之间，也可能在人和AI之间，甚至AI和AI之间（例如自动驾驶汽车在道路上“互动”）。

#### **level 5 - 制度变迁与价值体系重构的宏观审视（Governance level）**

这一层次不关注AI的应用，而注重宏观影响，涉及**社会结构**和**价值体系**本身如何因AI而改变

当AI大规模应用于社会，各种制度（法律、市场机制、教育体系等）可能随之演进。社会科学需要在宏观上审视AI引发的结构性变化，并参与价值引导。这既包括研究**AI对就业、收入分配、权力结构**的影响，也包括反思**算法治理**、**数字民主**等新模式。一方面，也许我们将看到一些传统制度被AI优化：比如司法领域引入AI辅助判案，提高效率；但另一方面，这也可能改变权力格局，引发对算法公正的质疑。当决策越来越依赖AI时，人们是否会过度信任技术权威而削弱民主参与？价值观层面，AI的崛起让人们重新思考“智能”与“意识”的定义，我们如何看待人类自身的独特性？社会科学在这一层次需要和哲学、伦理学结合，去**规范**AI的发展方向。例如，构建对AI的治理框架、倡导以人为中心的AI设计，确保技术为社会服务而非异化社会。这个层面其实已超出传统学术研究范畴，更像一种**社会参与**。许多社会科学学者开始活跃于AI政策咨询、伦理指南制定等实践活动，为AI时代塑造合理的制度和价值贡献智慧。

在之前准备pre的过程中，我查找了一些论文⬇️，基本可以对应上面5个层次（以序号标出），这些论文的获取详见页尾链接。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220105846066.png)

## 案例展示

#### **Case 1: 技术工具的拓展（RA level）**

这部分是最基础的应用，也是最常见的应用场景。这里我首先介绍一些翻译、写作等任务工具，再举例介绍一个用AI做零样本文本分类的脏活儿。

**写作辅助**

可以尝试用ChatGPT Canvas或者Claude 3.5 Artifacts，就像在word里插入一下AI写作助手一样，你可以让它帮你优化表达、选中解释的内容、调整长度风格、改变面向人群等。交互界面如下：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220093839472.png)

⬆️比如这里，我先让它优化了一段文字的表达，并让它将表达和文本面向的深度改为研究生层次，效果如下⬇️：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220094008826.png)

Canvas是个蛮好用的工具，可以很方便地查看更改、撤回、复制等⬇️：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220094105909.png)

但它不擅长长文本的修改，改起来会很麻烦，每次都会全量刷新。

Canvas也可以修改和运行代码，您可以试试。

**信息提取等苦活累活**

以前提取结构化信息，总需要自己写很多代码，或者用云服务商的套件，现在可以尝试调用API或者本地模型，大力出奇迹。以下是两篇介绍，有需要的小伙伴请自行查看：

- [利用LLM从科学文本中抽取结构化信息](https://mp.weixin.qq.com/s/7EdEEwW2RlZSeMKYspIIKA)
- [使用本地大模型从文本中提取结构化信息](https://mp.weixin.qq.com/s/QSsDpfyJmGRR6IVdlvWdwg)

**零样本文本分类**

这里我重点演示一下传统机器学习方法可能不太好应对的任务，描述如下：**对新闻联播文本进行分类，划分为国内新闻和国外新闻**。这个任务具有以下特征：

- 新闻联播文本是长文本，相对于传统的微博评论等文本，处理难度更高；
- 如果用传统方法做监督分类，需要打一些标签，而且有些标签不太好打，比如国家领导人会见外宾，容易被判为国外新闻。

这个案例用大语言模型就比较容易做到，**大力出奇迹**，思路如下：

- 使用LLM，写好提示词，将新闻联播文本喂进去；
- 让其输出国际新闻的第一句；
- 使用python脚本，将大模型输出的国际新闻第一句匹配到原文本里做截断，在此之前的为国内新闻。

代码如下（话说公众号文章可以折叠代码吗）：

```python
import os
import pandas as pd
import logging
import time
from datetime import datetime
from openai import OpenAI

# 设置日志
logging.basicConfig(filename='news_processing.log', level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(message)s')

# 同时将日志输出到控制台
console = logging.StreamHandler()
console.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
console.setFormatter(formatter)
logging.getLogger('').addHandler(console)

# 初始化OpenAI客户端
client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

def qwen_chat(messages, model="qwen-plus-latest", temperature=0.7, timeout=60):
    try:
        completion = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=temperature,
            timeout=timeout
        )
        return completion.choices[0].message.content.strip()
    except Exception as e:
        logging.error(f"API请求失败：{str(e)}")
        return None

def find_split_point(text):
    prompt = f"""你是一名中国人，正在阅读一篇完整的新闻联播文本。你的任务是从中国人的视角，找到国际新闻部分的起始句子。

要求：
1. 从中国人的角度，区分国内新闻和国际新闻。
2. 国际新闻通常涉及外国的事件、人物、国家或国际组织等。
3. 在新闻文本中，找到国际新闻部分的第一个完整句子。

请直接返回国际新闻部分的起始句，不要添加任何解释或额外内容。

新闻文本：
{text}

请直接返回国际新闻部分的起始句。"""
    
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": prompt}
    ]
    
    content = qwen_chat(messages, temperature=0.1, timeout=300)
    
    if content is None:
        return None

    logging.debug(f"API 返回的内容：\n{content}")
    return content

def split_news_content(text, split_sentence):
    if not split_sentence:
        logging.error("未能识别出分界句")
        return None

    split_index = text.find(split_sentence)
    if split_index == -1:
        logging.warning(f"在文本中未找到分界句：{split_sentence}")
        return None

    domestic_content = text[:split_index].strip()
    foreign_content = text[split_index:].strip()

    logging.info(f"分割点：{split_sentence}")
    logging.info(f"分割后的内容：\n国内：{domestic_content[-100:]}...\n国外：{foreign_content[:100]}...")

    return {
        'domestic_content': domestic_content,
        'foreign_content': foreign_content
    }

def save_to_csv(data, filename):
    df = pd.DataFrame([data])
    try:
        df.to_csv(filename, index=False, encoding='utf-8-sig', mode='a', header=not os.path.exists(filename))
        logging.info(f"成功保存内容到 {filename}：{data['date']}")
    except Exception as e:
        logging.error(f"保存到 CSV 文件时出错: {str(e)}")

def process_news_files(input_folder, output_file):
    txt_files = [f for f in os.listdir(input_folder) if f.endswith('.txt')]
    total_files = len(txt_files)

    for idx, filename in enumerate(txt_files, 1):
        date = filename[:-4]
        file_path = os.path.join(input_folder, filename)
        
        try:
            with open(file_path, 'r', encoding='utf-8') as text_file:
                news_text = text_file.read()
                logging.debug(f"文件 {filename} 的内容：{news_text[:300]}")
        except Exception as e:
            logging.error(f"读取文件 {filename} 时出错: {str(e)}")
            continue
        
        logging.info(f"开始处理 {date} 的新闻 ({idx}/{total_files})")
        
        start_time = time.time()
        result = None
        max_attempts = 5

        for attempt in range(1, max_attempts + 1):
            split_sentence = find_split_point(news_text)
            if split_sentence:
                result = split_news_content(news_text, split_sentence)
                if result:
                    break
            logging.warning(f"第 {attempt} 次尝试未成功，等待10秒后重试...")
            time.sleep(10)
        
        if result is None:
            logging.error(f"在 {max_attempts} 次尝试后仍未能正确分割 {date} 的内容")
            continue

        save_to_csv({
            'date': date, 
            'domestic_content': result['domestic_content'], 
            'foreign_content': result['foreign_content']
        }, output_file)
        
        end_time = time.time()
        processing_time = end_time - start_time
        logging.info(f"处理完成并保存: {date}，用时 {processing_time:.2f} 秒")

def main():
    input_folder = '文本合集'  # 存放新闻文本文件的文件夹
    output_file = f'news_content_split_{datetime.now().strftime("%Y%m%d_%H%M%S")}.csv'
    
    if not os.path.exists(input_folder):
        logging.error(f"输入文件夹 {input_folder} 不存在")
        return

    start_time = time.time()
    process_news_files(input_folder, output_file)
    end_time = time.time()
    
    total_time = end_time - start_time
    logging.info(f"处理完成，总用时 {total_time:.2f} 秒")
    
    if os.path.exists(output_file):
        file_size = os.path.getsize(output_file)
        logging.info(f"新闻内容已保存到 {output_file}，文件大小：{file_size} 字节")
    else:
        logging.error(f"无法找到输出文件 {output_file}")

if __name__ == "__main__":
    main()
```

这里的代码是我用Claude3.5 sonnet生成的，效果不错！

**本地模型 vs 云端模型**

在实验中，一开始用的是本地基于**Ollama**部署的**Qwen 2.5 14b**，结果效果很不理想，主要有两个障碍：

- 14b模型本身还是太小了，在指令跟随、输出准确性方面，均有很大的不足；
- 其次是模型的速度太慢了，我的机器是2021款Macbook Pro，M1pro芯片，16G内存。14b的模型能本地跑起来，用来聊天还行，但是批量处理文本的话，速度太慢，一晚上也只处理了几百条。

发现本地模型的局限后，我选择了充钱，是的，充钱真的可以变强。调用了阿里云的**Qwen plus**，并做了并发，结果又快又好，整个任务在半小时内处理完，API费用在10元左右。

在此之前我还使用过别人论文里的数据，简单比对过AI分类与传统机器学习分类的效果，在简单任务上几乎无差异，在复杂任务上，我也很难看出别人训练集里人类专家打的标签比AI更准确。

**可解释性问题**

与传统的机器学习方法一样，基于大模型的分类器也面临可解释性问题，甚至黑箱的问题更严重。但这并不妨碍其又快又好。我看到的文献里，对于这一部分的解释/辩驳通常如下：

- 使用开源模型，如Llama 3.1系列模型，以方便复现；
- 对于闭源模型，详细阐述温度等参数、提示词、当前版本；
- 大方承认局限性。

对于LLM，我的整体感受是，以前需要自己干的或者招RA干的脏活苦活累活，都可以用LLM试试，构建一套好用的工作流。当然用AI也有其局限性，包括费用、响应时长等。

#### **Case 2: 不知疲倦的学术同行（Supervisor level）**

电视剧**《西部世界》**讲述了一个人与AI的故事：以为自己是人类的工程师阿诺德，通过“**话疗**”的方式不断启发仿生人德洛丽丝，阿诺德探寻着仿生人如何产生意识的问题，扮演者上帝的角色。在故事的后来我们才得知，原来德洛丽丝才是较早觉醒的仿生人，而阿诺德，其实是未觉醒的AI，在话疗里真正被启发的，是阿诺德。

前沿的大语言模型是个很好的“话疗”式启发工具，它永远在线、不会发脾气、**不会pua你**、不会说你的idea没有价值，它的知识比地球上任何人都多，它什么都可以聊，是不错的跨学科伙伴/导师。

当我脑中有一个**火花**时，我很喜欢和AI将这个火花聊下去，变成**小火苗**然后保存下来，这样，一个idea 就不再只是记事本里的一个条目。通常的流程如下：

- 将我的idea告诉AI，请它帮我完善，进行多轮对话，逐步深入；
- 将对话的内容导出PDF，保存在work in progress的文件夹里（或者放去GPT 的projects里）。

下面是一个实例演示，基本idea来源于我的研究领域和个人兴趣，我的方向是住房政治，我想了解的是**女权主义的兴起与女性房主比例**的关系，女权主义的兴起会使得女生们更有买房的动力吗？

与**o1pro**模型的对话：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132337597.png)
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132431381.png)
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132455880.png)
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132547166.png)

---

在这个案例中，它给出了一个准实验设计，具有一定的参考性，当然这个设计距离Top5有非常大的距离。后面，我又与它就如何更好地测量**女权主义扩散**展开了更多的讨论，限于篇幅，就不一一展示。

与AI对话的好处是，它不排斥话题，还能给出建设性意见，帮助我完善，是一位很好的**启发者**。

（对于这个案例，如果您有很好的测量方法，能展现女权主义在中国扩散的variation，也请不吝联系我，谢谢。）

类似的案例还有许多，我们可以养成习惯，**多问**真的很重要。

在ChatGPT网页版导出PDF的插件是“**ChatGPT to PDF**”，可以在应用商店安装。

#### **Case 3: 模型撰写与算法设计（Domain expert level）**

**模型撰写**

我不是经济学专业的学生，连三高都没有学过，因此这部分内容我有用AI尝试，但是我没有判断能力，一下展示一个案例，供大家判断。
中文提示词如下（感谢安然姐提供）：

> 建立了一个分析城乡人口迁移的数学模型。该模型应考虑城市和农村地区的经济机会、生活成本、就业率和生活质量等因素。它还应该考虑到影响个人迁移决定的推-拉因素。用微分方程来表示城市和农村地区随着时间的推移的人口流动。纳入关于迁移成本和返回迁移潜力的假设。利用现有的人口数据验证模型，并讨论其对城市化政策和区域发展战略的影响。

英文原版提示词如下：

> Develop a mathematical model to analyze urban - rural population migration. The model should consider factors such as economic opportunities, cost of living, employment rates, and quality of life in both urban and rural areas. It should also account for the push - pull factors that influence individuals' decisions to migrate. Use differential equations to represent the population flows between urban and rural regions over time. Incorporate assumptions about migration costs and the potential for return migration. Validate the model using available demographic data and discuss its implications for urbanization policies and regional development strategies.

模型回答如下，思考时间为2m4s：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141216918.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141255666.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141325579.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141344412.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141425176.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141445397.png)

⬆️以上回答的效果由大家判断。

普遍的意见是，模型第一次给出的回答算是toy model，离发表还有很大距离，需要使用者不断完善。

**算法设计**

这部分对我来说主要是写代码的工作，python、stata、R、typst等。我日常会在vscode里完成代码工作。下面是一个工作流示例：

- 在vscode里配置**stata**的使用插件，比stata本身的do file编辑器强一万倍，可以自动补全、高亮、实时保存，多版本编辑等等；
- 使用学生身份开通**GitHub copilot**，实现AI代码补全与生成。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220135811022.png)

⬆️上面是一个示例，在vscode里编辑写do file，在实际工作中，copilot可以帮助我干很多补全的工作，比如重命名变量、写循环、写回归代码，等等。

以上**配置教程**参见荔哥的文章：[让免费AI做你的RA -- STATA + VSCODE + Copilot](https://mp.weixin.qq.com/s/bZePPcsQL1Jw9C6mEF9Tdg)

另外一个非常推荐的AI开发工具是**cursor**，在寒假前，由于常用的番茄时钟变得越来越难用，我尝试在cursor里开发了一个番茄时钟原型，能实现对一个项目不同阶段耗时的记录，界面如下：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220140401689.png)

总之，在AI的加持下，代码小白和新人，完全可以完成一些以前很难做到的任务。

#### **Case 4: 模拟人类（Agent level）**

假设AI在默认参数下是一个“**平均人**”，那么调整它的参数和给定背景，海量agent的情况下是不是就可以模拟一个**社会**？**AI as agent**可能是目前最火的社科AI项目。我没有开展过相关研究，在这里附上一些信息，包括有趣的项目和我写过的推文，供大家参考。

- [AgentSociety 1.0：LLM时代的社会模拟器来了！](https://mp.weixin.qq.com/s/S84X5njED1wqqBl11oZIqg) 其介绍是：“清华大学推出基于大模型的社会模拟器AgentSociety 1.0，可精确模拟社会舆论传播、认知观点极化、公众政策响应等社会现象，推动智能社会治理和科学研究范式变革。
- [PNAS-人工智能可以提供情绪价值，但人们知道真相后效果下降](https://mp.weixin.qq.com/s/3Ttdc8_sxPTyt3zYyzR0KA) 利用心理学实验，这项研究发现AI生成的信息比人类生成的信息更能让接收者感到被倾听，但是当人们意识到消息来自AI时，人们感觉到自己被倾听的程度下降了。
- [Science-赛博蜻蜓队长？AI在民主议事中的作用](https://mp.weixin.qq.com/s/7gsnci46P2PMXvctHXIrVw) 这篇论文探讨了人工智能（AI）在民主讨论中促进共识的潜力，通过开发一个名为“哈贝马斯机器”的AI调解系统，帮助人们在复杂的社会和政治问题上达成共同立场。通过一系列实验，包括涉及超过5000名参与者的虚拟公民议会，研究表明AI调解比人工调解更有效，生成的群体声明更加清晰、公正，并能减少组内分歧。尽管AI调解展现了出色的潜力，研究也提醒在确保讨论的公平性和代表性时应谨慎。总之，AI调解为促进大规模民主讨论提供了一个高效且可扩展的解决方案。
- [Science-与AI对话能持续减少阴谋论](https://mp.weixin.qq.com/s/FZic4im4meN7sAmII8RYRw) 这篇论文提出了一种新颖且有希望减少阴谋论信念的方法，显示通过与AI的个性化对话，即使是深信不疑的人也可能改变他们的信念。这一方法不同于以往悲观的观点，认为深陷阴谋论的人几乎无法改变。研究表明，**设计得当的AI系统可以在改善公共讨论和应对错误信息方面发挥重要作用**，前提是它们能够被负责任地使用。

再介绍一些AI agent协作平台或科研组织：

- **Expected Parrot**：其开发了一系列AI agent套件，可以方便地设定agent参数和部署，以方便开展基于agent 的模拟调查试验；
- **Sakana.ai**：这是一个AI科学家项目，创始人为Attention Is All You Need的作者之一，目的是建立基于大模型的全自动科学发现系统。最近的工作参见集智的报道：[《自动搜索人工生命》到底在搜索什么](https://mp.weixin.qq.com/s/mMwPrnNXCh-QqMEPWdJ0XQ)

这部分内容值得开一期专题！

#### **Case 5: 宏观影响（Governance level）**

这部分不算AI的应用，而算AI的影响，来看一篇有OpenAI发布的研究吧：

摘要翻译如下：

> 我们提出了一个框架，用于评估大型语言模型（LLMs）及相关技术对工作的潜在影响。这个框架通过考虑这些技术与员工在工作中执行的任务的相关性来实现评估。通过应用这个框架（既使用了人工评估，也使用了LLM评估），我们估计，约有1.8%的工作岗位中，超过一半的任务可能会受到具有简单界面和通用训练的LLM的影响。当考虑到当前和未来可能出现的、能够补充LLM能力的软件发展时，这个比例跃升至略高于46%的工作岗位。
>

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220143541239.png)

#### **Case 6: 可信文献综述生成与处理（RA level）**

这部分长期以来是广大科研人员的痛点、难点，早期**AI幻觉**很严重，非常容易编造文献。但随着AI的迅猛发展，这一难点正在被逐步攻克。我在去年的推文中介绍其中的一些方法，参见：[介绍两个AI文献综述平台](https://mp.weixin.qq.com/s/Y6N1lEITz02elLy1Tk2Hsw)。

最近两个月，我有了一些新的发现，跟大家分享。

首先整理了一些AI文献综述网站/平台：

- **Paper Digest**：https://www.paperdigest.org/review/
- **scite**：https://scite.ai/
- **Consensus**：https://consensus.app/search/
- **Ai2 Scholar QA**：https://scholarqa.allen.ai/
- **Elicit**：https://elicit.com/
- **ScienceDirect AI**：https://www.sciencedirect.com/ai

它们的好处是，都有**论点支持的文献搜索**能力，即让AI返回支持xx论点的文献，这些文献是真实存在的。在pw等好友的使用反馈里，Consensus是比较优秀的，我个人认为Ai2 Scholar QA和ScienceDirect AI也不错。

还有一种新的**大力出奇迹**方法，整理好几十篇同主题论文的标题、作者姓名、年份、摘要和主要内容，一股脑塞给支持**长上下文**的模型，比如o1pro或Gemini 2.0系列，能得到一个相当不错的结果，逻辑清晰、引用准确。比如下面，我整理了几十篇关于“**中国官员晋升模式**”文献的bibtex，删去无效字段后丢给o1pro让它写综述，不说的话你能分辨出是AI生成的吗？⬇️

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220150454669.png)

在**PA领域耀眼Star潘王**那里学到一个AI辅助文献的新工作流，适用于使用**latex**或者**typst**工作的同学，即要求模型以支持latex或者typst引文的方式输出，这样输出的内容就直接有了完善的引用，不需要后期手动调整。这避免在word里手动将AI生成的内容改成zotero等文献管理软件插入的麻烦，大致效果如下：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220151034216.png)

⬆️图中，左侧是typst文件，文字由AI生成，右侧是对应的pdf，右侧的蓝色部分表示成功的引用。

#### **Case 7: deep research（Super agent level）**

它可能是你我失业的原因，**伟大无需多言**。

在2023年，我想的是AI对我有什么价值，在2024年，我会想我对AI有什么价值，现在我会想，晚上吃什么比较好。AI在过去两年的进步速度太快了，按照OpenAI自己的路线图，L3级的AI，即agent已经在落地。Deep research的一个案例参考下面的推文：

- [Deep research将使文献分享类公众号失去意义](https://mp.weixin.qq.com/s/cSFyFFnp5WVxmjYcrD3vtw)

以下是OpenAI deep research的一些技术特征（由perplexity给出）：

> OpenAI的Deep Research是一个新型的AI深度研究工具，旨在为需要进行复杂和深入研究的用户提供支持。该工具能够在短时间内（通常为5到30分钟）完成原本需要人类专家数小时甚至数天才能完成的研究任务。其特点有：
>
> - **多步骤自主研究**：用户仅需提供一个提示，Deep Research便能自动搜索、分析和整合来自互联网上的大量信息，生成专业级的研究报告。
>- **基于o3模型**：Deep Research建立在OpenAI最新推出的o3模型之上，该模型经过优化，专门用于网页浏览和数据分析。它具备强大的推理能力，可以根据实时信息调整研究方向。
> 

这些天里，我尝试用deep research生成了一些报告和综述，整体**感受**如下：

- deep research生成的内容相当可用，其工作一次给出的结果，我可能需要干一个月；
- deep research擅长生成报告类内容，暂时不适合别的内容，因为其被设计为一个科研agent，干别的内容它不太会遵循指令；
- 使用过程中，单篇报告长度可达6万字，通常在2万左右。

可以想象deep research对于一些**产出为纯文字**的科研人员冲击很大，包括文史哲等文科专业，还有擅长写空话的管理学等专业，它会使得本就需要堆字数的**横向课题**更加没有意义。

目前deep research撰写综述的难点是期刊付费墙，一旦打通期刊库，传统文献综述的意义在哪里？

Google 和 perplexity也有自己的deep research功能，但目前的效果和OpenAI的相距甚远。

#### **其他工具**

- 门户：https://ai-bot.cn/

**国产研究平台**

- 秘塔搜索：https://metaso.cn/
- 天工AI：https://www.tiangong.cn/

**AI写作纠错工具**

- 科大讯飞-飞鹰智能校对系统：https://feiying.iflytek.com/
- 秘塔写作喵：https://xiezuocat.com/
- Worddvice.AI：https://wordvice.ai/cn
- Writefull：https://x.writefull.com/
- QuillBot：https://quillbot.com/
- 讯飞公文写作：https://gw.iflydocs.com/?from=aibot#/dashboard
- Microsoft 365 Copilot：https://www.microsoft.com/en-us/microsoft-365/copilot

## 号外

- 推文写到案例部分非常难受，因为这些案例需要**实时演示**，截图很难有好的效果，而且太多截图真的很不美观。
- 我还用deep research生成了几个版本的“**AI如何加速学术研究**”，放在链接里，感兴趣的老师同学欢迎下载查看，我认为其质量会让你感到惊喜。如果我是**学阀**，里面的一些内容完全可以通过“**微信投稿**”给C刊编辑。另外，与本文提到的5个层次对应的文献，和我pre时用的ppt，一同在链接里。（链接: https://pan.baidu.com/s/1BUmy5m6WUy6V66IKM7rLqQ?pwd=fqck 提取码: fqck ）
- **API is all you need**. 这个月deepseek r1爆火，官网和app挤不进去，大家或许已经在尝试使用云厂商的API服务。许多时候调用API，真的可以大力出奇迹，相当于找了一个RA，用很直接的、第一性的方式解决问题。这里顺势推荐一下**cherry studio**，我之前配置云端模型一般用OpenWeb UI，最近发现cherry studio更好用，配置教程参见波哥的推文：[如何白嫖各大巨头的DeepSeek额度](https://mp.weixin.qq.com/s/DYoC9wqeEMyoyP81s7GXuA)
- 如果您有好用的AI案例，也请给我留言，非常感谢。
- 或许在未来不久，大家都会经历自己的“**李世石时刻**”，在认为是自己专业的领域，被AI赶超。所以，在这之前，多了解了解AI吧。
- 如果您的课题组不是极度缺经费，我建议开通前沿模型使用一下，至少给课题组的一个成员开通。由于这个费用不好报销，以劳务费或者助研费资助是个不错的选择。
- 如果您的课题组对本文的内容感兴趣，想进一步交流，还请直接私信联系。
- 如果您觉得本文对您有所帮助，还请不吝在下方⬇️对我的工作进行“**赞赏**”，以帮助我减轻大模型的使用费压力，这部分我是在自费工作，非常感谢！（B站up主要“三连”即视感😂）
