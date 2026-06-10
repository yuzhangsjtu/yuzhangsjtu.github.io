---
title: "Ecologically unequal exchanges driven by EU consumption"
date: 2023-11-17T10:00:00+08:00
category: { name: "研究笔记", slug: research }
tags: ["MRIO", "MATLAB", "投入产出分析"]
summary: "解析一篇Nature Sustainability论文，关于欧盟消费驱动下的生态不平等，是MRIO的应用之一。"
---

Nat Sustain这篇文章和我的硕士论文有较大关联，其中的方法和表述，对我的文章有较大的借鉴意义。我想认真读一下这篇文章，顺便利用此文，熟悉一下我没有用过的[EXIOBASE](https://www.exiobase.eu/)。

近年来，利用MRIO水论文的风头已经过去了，传统的水法已经不能被接收，需要开辟新的水道，如基于MRIO计算不平等，或构造回归变量。

### 摘要

在全球化经济中，商品和服务的消费在推动经济增长的同时，也给全世界带来了环境压力和影响。目前欧盟（EU）是世界上最富有的经济体之一，其27个成员国均有较高的消费水平。本研究评估了1995-2019年间EU消费所产生的环境压力和影响的地理分布和变化情况。

本文主要采用了环境扩展的多区域投入-产出（environmentally extended multiregional input–output, EEMRIO）方法，并选定了10个消费足迹指标，包括：<mark>土地利用带来的生物多样性损失</mark>、温室气体排放、蓝水消耗、土地使用、材料消耗、光化学氧化、淡水水生生态毒性、陆地生态毒性、海洋生态毒性和颗粒物形成。数据方面，本研究使用了EXIOBASE v.3.8.1数据库，包括49个国家和地区的200个产品部门的年度投入产出表。

研究结果表明，本文所分析的环境压力和影响很大一部分都转移给了欧盟以外的国家和地区，而85%以上的经济利益留在了成员国内部，即使在欧盟内部，成本和收益的分配也是不平衡的。在分析期内，由欧盟消费引起的环境压力和影响在欧盟内部基本减少，但在其边界之外却增加了，如欧盟的东欧邻国承受了与欧盟消费相关的每单位GDP最高的环境压力和影响。

（转自 “3E论文速递”公众号推文：[【不平等性】欧盟消费者向其他国家“输出”了环境负担](https://mp.weixin.qq.com/s/nX3eEeVKUA4D4V_QArqKHg) ）

### 引言

商品和服务的消费推动了全球经济增长，也导致了各种环境压力，更重要的是，商品和服务的消费及其相关的环境压力，在全球范围内**不是平均分布**的！消费在富裕的地方，比如欧洲的大部分地区，但是环境负担给了其他地方，明确这些富裕地方给其他地方产生的环境压力至关重要！

环境相关的指标选择：

- 四个欧盟委员会建议的指标：温室气体排放、材料消耗、土地利用、地表水或地下水（或蓝水）消耗
- EXIOBASE数据库中的重要指标（依据相关文献）：颗粒物形成、淡水水生生态毒性、海洋生态毒性、陆地生态毒性、光化学氧化、土地占用对生态系统质量的破坏

消费创造GDP（或者增加值 value added），**根据供应链中的位置不同，有些国家获得了很多的GDP，但是几乎没有受到消费的环境压力和影响**，而另一些国家则正好相反！可以比较一下哪些地区受益，而哪些地区损失大！

### 结果

#### 环境压力和影响的地理分布

1995年到2019年，不同指标的分布不一样，有一定的趋势和波动。比如蓝水消耗，欧盟外的地区一直更多，而材料消耗，欧盟内的一直更多。

**图1：2019年欧盟27国内外与欧盟27国消费相关的压力和影响的相对分布**

![Fig. 1](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-01055-8/MediaObjects/41893_2022_1055_Fig1_HTML.png)

（EXIOBASE数据集的生态毒性结果必须被视为下限）

再来看看2019年的情况：

**图2：2019年欧盟27国消费压力和影响的相对分布**

![Fig. 2](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-01055-8/MediaObjects/41893_2022_1055_Fig2_HTML.png)

没想到非洲在很多个指标上都很高，特别是土地利用。

此图也显示了欧盟内部的情况，在欧盟内部，西班牙的蓝水消耗量和土地利用造成的生物多样性丧失最高。法国和西班牙在欧盟消费中占土地使用份额也最高，仅次于瑞典、德国和波兰。除希腊外，德国、意大利、塞浦路斯和罗马尼亚的生态毒性排放量也很高。在整个分析期间，欧盟人口最多的国家（德国、法国、意大利、波兰和西班牙）的温室气体排放量、颗粒物形成、光化学氧化以及与欧盟消费相关的材料消耗量最大。希腊的颗粒物形成率也很高。

为了了解不同消费项目对环境压力的贡献以及欧盟27国消费引起的影响，我们将它们分为六个消费类别：食品、服装、出行、服务、制成品和住房。在欧盟27国之外，粮食消费是土地利用和土地利用造成的生物多样性丧失的最大贡献者，并导致了>50%的蓝水消耗。同时，出行和制成品的消费引发了最大的生态毒性、光化学氧化、温室气体排放和颗粒物形成。欧盟27国内部与欧盟27国消费相关的温室气体排放主要由与住房、服务和食品相关的消费引起。然而，虽然欧盟27国以外的服装消费对欧盟27国消费引起的温室气体排放和颗粒物形成等类别的贡献率为4-8%，但它从未对欧盟27国内部的任何分析压力和影响贡献>2%。（看看这部分怎么算的）

#### 环境压力的演变和欧盟消费的影响

在1995年至2019年期间，欧盟消费引起的环境压力和影响中有十分之五有所下降，如图3。海洋水生生态毒性和颗粒物形成的降幅最大，分别为-17.5%和-14.4%，其他指标，如温室气体排放量（-4.1%）、土地利用（-5.5%）和土地利用造成的生物多样性丧失（-8.8%），下降幅度较小。同时，其他五项指标在分析期间有所增加：材料足迹（+9.4%）、陆地生态毒性（+28.3%）、蓝水消耗量（+18.9%）、光化学氧化（+1.5%）和淡水水生生态毒性（+6.6%）。

**图3：1995年至2019年间，欧盟27国内部、欧盟27国外和欧盟27国消费相关的压力和影响的相对变化**

![Fig. 3](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-01055-8/MediaObjects/41893_2022_1055_Fig3_HTML.png)

欧盟内部的相关压力和影响显示出不同的趋势。几乎所有压力和影响都下降了，但蓝水消耗量除外（+9.4%）。……欧盟能够减少与其境内当地消费相关的环境压力和影响，同时增加其境外的压力和影响。

欧盟消费引起的压力和影响在其大多数成员国中有所下降，相比之下，在巴西、中国、印度和日本，以及欧洲和中东地区，所有与欧盟消费相关的分析影响和压力都有所增加。

#### 对欧盟邻国最不利的 “环境-增加值比率”

EV- ratios，也就是拿环境压力和增加值来做比，emissions-to-value-added-ratio 。

为了进一步了解欧盟消费对不同国家和地区的影响，我们**将经济效益量化为与欧盟内外欧盟消费相关的附加值或GDP，并将其与相关的环境压力和影响进行比较**。除2008年金融危机外，与欧盟消费生产相关的增加值从1995年的6.2万亿欧元增加到2019年的13.4万亿欧元。在分析期间，86-91%的附加值留在欧盟境内。在欧盟内部，与服务和住房相关的消费分别对欧盟消费增加值的贡献率超过43%和23%。相比之下，服务消费、制成品和流动性是欧盟以外欧盟消费增加值的主要贡献者。

在国家和地区层面，人口最多的欧盟成员国德国、法国、意大利和西班牙的附加值份额也最高。如下图所示，它们在1990年代后期共获得了欧盟消费增加值的60%以上，在2019年仍获得了56.3%。与此同时，在欧盟以外，美国（1.9-3.3%）、英国（1.1-1.7%）和中国（0.1-1.7%）是欧盟消费增加值份额最高的国家。

**图4：2019年与欧盟27国消费相关的增加值的相对分布**

![Fig. 4](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-01055-8/MediaObjects/41893_2022_1055_Fig4_HTML.png)

为了比较欧盟消费引起的附加值和环境压力和影响的份额，我们使用排放与附加值比率（EV-ratio）（这一指标参考了冯奎双老师的[另一篇论文](https://academic.oup.com/sf/article/93/1/405/2337929)）， 方法是**将全球压力或影响的份额除以一个地区或国家的全球增加值份额**。值 <1 表示经济利益的份额高于一国对全球价值链的贡献所承受的环境压力或影响的份额，而值 >1 表示一国获得的环境损害份额大于其经济利益份额。

在 1995 年至 2019 年期间，欧盟每年所有 10 个分析指标的EV比率总计为 <1。相反，将欧盟以外的所有国家和地区汇总到RoW，其EV比率始终为>1。

来看看2019年的情况：

**图5：2019年与欧盟27国消费相关的压力和影响的EV比率**

![Fig. 5](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-01055-8/MediaObjects/41893_2022_1055_Fig5_HTML.png)

（国家/地区按平均EV比率、核心值和GDPpc排名。 与欧盟27国消费相关的不同压力和冲击类别的EV比率显示在颜色键中。欧盟 27 国为红色，而世界其他地区的国家和地区为黑色。）

其实是全球研究，重点讨论欧盟。

在消费发生国（在本研究中为欧盟），由于价值链末端的附加值份额较高，因此增加值往往更高。因此，欧盟内部的EV比率往往低于欧盟外部。当根据各国的人均GDP（GDPpc）进行排名时（图5，右排名），有一个普遍的模式表明，较富裕的国家往往比较贫穷的国家具有更低的EV-ratio。由于过去的研究表明，位于**贸易网络核心**的国家（即，它们是高度集中、一体化程度高的贸易国家的一个有凝聚力的子集团的一部分）往往经历相对较少的环境压力，我们还考虑了各国的**核心度**得分（有关计算核心度的更多详细信息，请参阅补充信息）。图 5 中的中间排名显示，几个核心度得分相对较高的非欧盟国家（例如，中国、RoW 亚太地区、RoW 中东、RoW 美洲和墨西哥）的 EV 比率也很高，这表明核心度和 EV 比率之间可能存在正相关关系，尽管关系较弱。（附表4不是显示负相关？？）

为了进一步探索这些趋势，我们对 2019 年的数据进行了多元回归分析，然后在 1995 年的数据上复制了这些分析，以探索前者的模式在后者中也可以检测到的程度。我们的模型输入核心度、GDPpc 和欧盟成员资格 （EU_mem） 作为预测 EV 比率的解释变量。这些模型结果以及这四个变量之间的相关性可以在补充表3和表4中找到。

![image-20231115162902352](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231115162902352.png)

#### 欧盟新成员国 EV - ratios下降

在1995年（本分析的起始年份）之前加入欧盟的国家，多年来的EV比率往往低于2000年之后加入欧盟的国家，尤其是保加利亚、爱沙尼亚和塞浦路斯。唯一的例外是希腊，它于1995年加入欧盟，但近年来经历了所有成员国中最高的平均EV比率，因为除了土地使用和与欧盟消费相关的材料消耗外，所有指标的平均EV比率均为>1。

 2000 年后加入欧盟的国家在分析期间的EV比率显着下降，但马耳他（无明显趋势）和塞浦路斯（显着上升趋势）除外.

对于长期欧盟成员国来说，德国、爱尔兰和丹麦等一些国家的EV比率有所上升，而葡萄牙、芬兰、西班牙或瑞典等其他国家的EV比率略有下降。

**图6：1995年至2019年2000年后加入欧盟的国家与欧盟27国消费相关的压力和影响的EV比率**

![Fig. 6](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41893-022-01055-8/MediaObjects/41893_2022_1055_Fig6_HTML.png)

### 讨论

欧盟的消费与大规模环境压力和影响在其境外的转移有关。在分析的七项压力和影响（所有生态毒性指标、温室气体排放、颗粒物形成、光化学氧化和材料消耗）中，欧盟以外地区显著增加，而欧盟内部则有所下降。将环境压力和影响从富裕地区外包给较贫穷地区在当今全球范围内是显而易见的，因为贸易中体现的压力和影响正在增加。

同时，最近的研究证实了从较贫穷国家到较富裕国家的贸易所体现的大规模资源净流动，即所谓的生态不平等交换。对与欧盟消费相关的EV比率的分析增加了关于生态不平等交换的讨论，因为它凸显了许多**非欧盟国家的无益局面**。

结果表明，与欧盟消费相关的EV比率对大多数成员国比对非欧盟国家和地区更有利。与此同时，欧盟的消费给RoW欧洲地区带来了比世界其他任何地方都更高的环境压力和每附加值影响。该地区包括阿尔巴尼亚、黑山或塞尔维亚等现有欧盟候选成员国以及乌克兰和摩尔多瓦等欧盟的新候选国（current EU candidate members）。

为了避免对欧盟内外的人类健康和生态系统产生进一步的不利影响，减少与欧盟消费相关的环境压力和影响至关重要。这可以通过多种机制来实现。消费选择，如交通方式和频率或饮食选择，可以大大减少环境压力和影响。由于许多超级富裕的消费者目前对全球环境破坏和资源使用的贡献不成比例，生活在欧盟内部，因此缓解工作需要关注富裕和过度消费。此外，**欧盟的新贸易政策需要考虑产品和服务所体现的环境压力和影响，以防止欧盟以外的额外溢出效应**。减少溢出效应的政策，例如温室气体排放的政策，需要考虑过程中的不平等，以便为所有人提供公平的结果。（几乎都是正确的废话）

### 方法

#### EEMRIO

略。。这类论文这部分都一样。

##### 计算环境压力和影响

实际跑一下代码再写吧。

##### 计算value added

待补充。

##### 不平等影响的分析

我们使用上一步中计算出的环境压力和影响来分析与欧盟消费相关的压力和影响在各个国家和地区的分布。为了分析与不同产品和服务的消费相关的影响和压力，我们使用不同的最终需求向量 $\mathbf f^{s,\tau}$ 。对于欧盟所有 27 个成员国，它们对应于 EEMRIO 模型中的地区，我们使用一组七个不同的最终需求类别 τ 运行模型，汇总为总最终需求和选定产品和部门的最终需求，汇总为六个以前使用的 [38](https://www.nature.com/articles/s41893-022-01055-8#ref-CR38) 消费类别：食品、住房、服装、服务、制成品和流动性。补充表2显示了各部门对消费类别的分配情况。

![image-20231115173228390](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231115173228390.png)

此外，我们还将与欧盟消费相关的环境压力和影响的分布与全球相关附加值的分布进行了比较。首先，我们确定欧盟消费引起的每个压力或影响的国家或地区份额。随后，我们计算供应链中附加值的模拟份额。最后，我们使用参考文献引入 [23](https://www.nature.com/articles/s41893-022-01055-8#ref-CR23) 的 EV 比率，并在其他研究中 [22](https://www.nature.com/articles/s41893-022-01055-8#ref-CR22),[24](https://www.nature.com/articles/s41893-022-01055-8#ref-CR24) 以不同的名称使用。该指标可用于确定欧盟消费对一个国家或地区是否产生有利或不利的影响，方法是将该国所经历的环境压力或影响的份额除以附加值的份额。值 >1 表示一个国家或地区承受的压力或影响份额高于与欧盟消费相关的附加值份额（不利），而值 <1 表示该国家或地区承受的附加值份额高于环境影响或压力（有利）。反过来，值为 1 表示一个国家或地区正在经历与欧盟消费相关的相同份额的压力或影响和附加值。

#### 数据

EXIOBASE v.3.8.1数据库，1995-2019，包括49个国家和地区的200个产品部门的年度投入产出表，囊括了所有27个欧盟成员国。此外，数据库还包含了超过1000个独立的社会经济和环境压力指标以及126个影响类别。我们使用了EXIOBASE中所有**七个最终需求类别**（家庭最终消费支出、非营利组织服务于家庭的最终消费支出、政府最终消费支出、固定资本形成总额、库存变化、贵重物品变化、出口：total free on board value）来计算27个欧盟成员国的环境压力和影响。我们用于分析的特定压力和影响系数在补充表1中总结。为了解析原始的EXIOBASE v.3.8.1数据，我们遵循了参考文献51的方法论。我们选择EXIOBASE v.3.8.1而不是其他MRIOs（如GTAP），是因为它有大量的个别产品部门，可用的压力和影响系数数量，以及27个欧盟成员国的完整覆盖。将国家大规模聚合到RoW地区，尤其是在非洲、亚洲和南美，以及东欧，是使用EXIOBASE v.3.8.1数据库来展示欧盟消费在哪里导致环境压力和影响以及增值的产生的一个明显局限性。因此，我们可以展示哪些国家和地区从欧盟消费中获益，哪些地区经历了不成比例的大环境压力和影响。然而，我们**无法确定是否有特定的社会群体，比如高收入群体，从与欧盟消费相关的增值中获得高利润，而其他人只获得最小的利益**。此外，所考虑的九种环境压力中的一些可能会在EXIOBASE设定的国家或地区边界之外产生影响。因此，需要进行额外的建模步骤来跟踪环境压力的影响，例如大气排放在运输后的健康影响或者下游生态系统中水消耗的影响，这对于全面分析与欧盟消费相关的对人类健康和生态系统的影响是必需的。

（所以，是不是还可以结合<mark>国内</mark>情况还看不平等性，补足gaps）

用于量化供应链中温室气体排放的指标是从EXIOBASE数据库v.3.8.1汇总的指标，它涵盖了多种温室气体（CO2、CH4、N2O、SF6、HFC和PFC），并以kgCO2e（二氧化碳当量）为单位，基于其在100年时间尺度上的全球变暖潜能，如IPCC报告所建议的。值得注意的是，EXIOBASE数据集中的温室气体排放包括燃烧和非燃烧过程、农业和废物处理的排放，但不包括土地使用、土地使用变化和林业的排放。为了计算与欧盟消费相关的物质使用，多个类别的物质使用系数（包括农作物和农作物残余物的国内提取使用、放牧和饲料、林业和木材等）被汇总为总物质使用的指标（以千吨计）。土地使用最初针对20种不同的土地占用类别（耕地、森林地、基础设施用地和其他土地使用）进行计算，随后累加以确定与欧盟消费相关的总土地使用（以平方公里计）。由欧盟消费引起的水消耗是通过汇总不同经济部门的总蓝水消耗系数来计算的，如农业、制造业或电力。淡水水生、海洋水生和陆地生态毒性是通过EXIOBASE的汇总指标和问题导向方法来量化的，该方法权衡了每种有毒物质对空气、水和/或土壤的排放所产生的淡水水生生态毒性潜能、海洋水生生态毒性潜能和陆地生态毒性潜能的影响，并以1,4-二氯苯当量的公斤来衡量。无限影响的选择是基于国际生命周期数据系统的建议。为了考虑与欧盟消费相关的光化学氧化作用，这是由非甲烷挥发性有机化合物或一氧化碳等物质的排放引起的，我们使用了一个汇总和加权的指标来衡量形成的臭氧的公斤。如参考文献16所建议，我们选择了使用最大增量反应性方法的指标。最后，颗粒物排放是通过以PM2.5当量的公斤为单位的排放加权系数来确定的。与欧盟消费相关的供应链中的增值是通过从EXIOBASE v.3.8.1中获取的增值系数（以百万欧元计）来确定的。有关所选指标的更多细节见补充表1。

![image-20231115173106947](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231115173106947.png)

![image-20231115173137085](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231115173137085.png)

此外，我们使用了参考文献12中专为49个EXIOBASE地区开发的、具有**土地占用特定生物多样性损失系数**，通过测量**物种可能消失的比例（Potential Disappearing Fraction，PDF）**来计算生物多样性损失。这些系数是使用LC-IMPACT生命周期影响评估模型计算的，该模型为804个不同的生态区提供了具有土地占用特定的PDF系数，并且是基于先前的研究。我们在本研究中选择PDF来量化与欧盟消费相关的土地使用的全球影响，因为它能够确定可能的全球性灭绝，并考虑到物种特有的栖息地特征和威胁。然而，这个指标并没有考虑到本地相对物种丰度的变化，这可以通过使用额外的、补充的指标来量化。对于多元回归分析，使用世界发展指标数据银行计算了所有49个EXIOBASE地区的平均购买力平价2017年美元GDPpc值。如果某个国家没有数据，就从世界经济展望（2022年10月）中添加数据。计算聚合RoW地区平均值的人口数据取自联合国世界人口展望2022。用于创建地图的形状文件是从Natural Earth和eurostat R软件包中检索的。(PDF这个很重要)

#### Limitation

这项研究存在几个局限性。首先，自2011年以来，一些压力和影响（例如，水消耗）的结果是基于一种现投例程（now-casting routine），该例程将环境使用和经济活动之间的关系向前推演。为了验证这些现投的压力和影响，我们查看了EXIOBASE v.3.8.1中的系数，因为经济数据一直更新到2019年。在非现投数据的年份（2011年之前），本研究中使用的环境指标的国家-部门对系数并没有显著变化，反映了多年来效率的逐渐改进。类似的趋势在接下来的年份，直到2019年，在现投例程中被预测出来。此外，更新所有指标和国家的指标系统需要大量额外的工作，涉及数千个系数。更新这些全球数据库确实是一个普遍问题。考虑到经济数据实际上是最新的，以及环境系数随时间变化不大，我们认为使用EXIOBASE提供的现投值是合理的。（确实hh，EXIOBASE里很多数据在2011年之后是拟合值）

第二，这些指标的选择是基于参考文献16的分析，该分析仅针对2011年的基准年，而不是涵盖本研究的整个时间框架。我们不预期与分析中使用的基准年相比会有大的变化，因为参考文献16分析的是环境指标之间的变异性，这些变异性预期不会随时间显著变化。我们展示的动态主要是由于贸易结构、经济结构和消费模式的结构性变化，而不是随时间变化的环境系数。

第三，根据EXIOBASE，数据是通过问题导向的方法获取的。本文中使用的生态毒性指标反映了每单位向空气、水和/或土壤排放有毒物质的淡水水生生态毒性潜能（以每公斤排放的1,4-二氯苯当量计）、每单位向空气、水和/或土壤排放有毒物质的海洋水生生态毒性潜能（以每公斤排放的1,4-二氯苯当量计）和每单位向空气、水和/或土壤排放有毒物质的陆地生态毒性潜能（以每公斤排放的1,4-二氯苯当量计）。尽管在比较中，**EXIOBASE的生态毒性结果可能远小于生命周期评估结果**，但为了一致性，我们在整个研究中使用EXIOBASE的指标。

---

原文如下：

<iframe src="/pdfjs/web/viewer.html?file=/pdf/NS-Ecologically unequal exchanges driven by EU consumption.pdf" style='width:100%;height:800px'></iframe>

### 代码解释

先放第一部分吧，最重要的是知道提取的数据是什么，也就是EXIOBASE的构成是什么。

```python
#------------------------------------- import needed libraries --------------------------------------------------
import numpy as np
import scipy.io
import scipy
import pandas as pd
#set directory path for downloaded raw EXIOBASE 3.8.1 files
Dir = "/Users/yu/Temp/Global land ESSV exchange/NS/Unequal_Exchanges_SI_Code/Data//"
v1 = ['ixi','pxp']

"""
关于EXIOBASE的一些说明(这里其实需要一些关于投入产出表的基础知识和EXIOBASE的结构，及其卫星账户的知识)：
参考：https://onlinelibrary.wiley.com/doi/10.1111/jiec.12715
发现WIOD和EORA都更新了，WIOD更新了2000年之前的一些东西，EORA也到2022，但2016年之后的年份就是在抢钱。ICIO有1995-2018
1.数据时效：The original EXIOBASE 3 data series ends 2011. In addition, we also have estimates based on a range of auxiliary data, but mainly trade and macro-economic data which go up to 2022 when including IMF expectations. A lot of care must be taken in use of this data. It is only partially suitable for analysing trends over time! As of v3.8 (doi: 10.5281/zenodo.4277368), the end years of real data points used are: 2015 energy, 2019 all GHG (non fuel, non-CO2 are nowcasted from 2018), 2013 material, 2011 most others, land, water. More details are available in the readme file.
2.文件命名：
IOT_YYYY_ixi.zip - MRIO archive for Year YYYY in industry by industry format 即部门表
IOT_YYYY_pxp.zip - MRIO archive for Year YYYY in product by product format 即产品表 (原始页面这里写错了，应该是pxp，不是ixi)
3.文件结构：
The MRIO archive contains the following files:
    Z.txt - flow/transactions matrix 其实是个7987*7987的矩阵，不过加上了表头，可以把数据粘贴到Excel里看看
    A.txt - matrix/inter-industry coefficients, (direct requirements matrix) 大小同上，A=Z/x
    Y.txt - final demand 有时候也叫F矩阵，最终需求矩阵，每个地区有7类最终需求，所以该部分的大小是 （7*49）*7987
    x.txt - gross/total output 49*163，一共7987条，如果是pxp，就是49*200，上同
    unit.txt - Units of the flow data 单位是百万欧元
两个扩展资料：
    satellite - uncharacterized stressors data - e.g. CO2 emissions, land use per category, etc.
    impacts - characterized stressors (=> impacts) - e.g. total GWP100, total land use, etc
The total list of stressors and impacts are in the index of all files, most conveniently in the 'unit.txt'.
Both extension subfolder contain: 
    F.txt - Factors of productions/stressors/impacts
    F_Y.txt - Stressors/impacts of the final demand 列数为49*7，行数是1113，参见 unit 的第一列
    S.txt - Direct stressor/impact coefficients
    S_Y.txt - Stressor/impact coefficients of the final demand
    M.txt - MRIO extension multipliers (total requirement factors of consumption)
    D_cba.txt - Consumption based accounts per sector
    D_pba.txt - Production based accounts per sector
    D_cba_reg.txt - Consumption based accounts per region
    D_pba_reg.txt - Production based accounts per region
    D_imp_reg.txt - Import accounts per region
    D_exp_reg.txt - Export accounts per region
    unit.txt - Absolute units of the stressor and impacts
The unit of the coefficient data M and S are given be the unit of the satellite
account per unit of the economic core (e.g. kg CO2eq/Million Euro)
"""

#set loop through all years
for i in range(1995,2023): 
    #取不到2023，只到2022
    print(i)
    #set loop for products (pxp) and sectors (ixi)
    for i1 in range(0,2):
        j = v1[i1]
        #set directory for specific items in raw EXIOBASE 3.8.1 files
        Directory = Dir+"IOT_"+str(i)+"_"+str(j)+"//"
        #---------------------extracting final demand matrix Y-------------------------
        Path_Y = Directory + 'Y.txt'
        MRIO_Y = pd.read_csv(Path_Y, sep = '\t', header=0, encoding='iso-8859-1', low_memory=False)
        # standard UTF-8 encoding raises error
        MRIO_Y
        #print(list(MRIO_Y))
        
        '''
        首先，代码设置了一个循环，遍历1995年到2022年的所有年份。在每个年份的循环中，又设置了一个内部循环，遍历产品（pxp）和部门（ixi）。在内部循环中，构造了一个特定的目录路径，这个路径包含了年份和元素。
        然后，代码从特定目录下的Y.txt文件中提取了最终需求矩阵Y。这个文件是以制表符（'\t'）分隔的，第0行是列名，文件编码为'iso-8859-1'，并设置了low_memory=False以减少内存使用。提取的数据被存储在MRIO_Y变量中。
        '''

        #get country list
        MRIO_Country = [list(MRIO_Y)[i] for i in np.arange(2,339,7)]
        # 生成一个从2开始，到338结束，步长为7的整数序列。这意味着我们从list(MRIO_Y)中选取了索引为2, 9, 16, ..., 338的元素。就是取到地区名称啦，其实地区名称也可以直接从exiobase论文附件找到
        #print(MRIO_Country)
        
        #make matrix Y
        MRIO_Y = MRIO_Y.values[2::,2::]
        MRIO_Y = MRIO_Y.astype('float')
        MRIO_Y.shape
        
        '''
        首先，MRIO_Y = MRIO_Y.values[2::,2::]这行代码使用NumPy风格的切片来选择MRIO_Y数据的一个子集。2::切片意味着"从索引2开始到结束"，所以这行代码实际上是丢弃了数据的前两行和两列。
        接下来的一行，MRIO_Y = MRIO_Y.astype('float')，将MRIO_Y矩阵中的元素数据类型转换为浮点数。这是因为原始数据可能是其他类型（如字符串或整数），而我们需要将其转换为浮点数以进行后续的数值计算。
        最后，MRIO_Y.shape这行代码会返回MRIO_Y矩阵的形状（即，行数和列数）。这可以用于检查数据的维度，确保数据的形状符合我们的预期。然而，由于这个结果没有被赋值给任何变量或打印出来，所以在这个上下文中没有任何效果。如果你想查看这个形状信息，你可以使用print(MRIO_Y.shape)来打印它。
        '''


        #---------------------extracting product recipe matrix A-------------------------
        Path_A = Directory + 'A.txt'
        
        MRIO_A = pd.read_csv(Path_A, sep = '\t', header=0, encoding='iso-8859-1', low_memory=False)
        # standard UTF-8 encoding raises error
        MRIO_A = MRIO_A.values[2::,2::]
        MRIO_A = MRIO_A.astype('float')
        MRIO_A.shape
        #print(MRIO_A)
        
        '''
        首先，Path_A = Directory + 'A.txt'这行代码构造了一个文件路径Path_A，这个路径指向了特定目录下的A.txt文件。
        接下来，MRIO_A = pd.read_csv(Path_A, sep = '\t', header=0, encoding='iso-8859-1', low_memory=False)这行代码使用pandas的pd.read_csv函数读取了这个A.txt文件，并将其内容存储在MRIO_A变量中。这个函数使用了制表符（'\t'）作为字段分隔符，指定了第0行为列名，指定了文件编码为'iso-8859-1'，并设置了low_memory=False以减少内存使用。
        然后，MRIO_A = MRIO_A.values[2::,2::]这行代码使用NumPy风格的切片来选择MRIO_A数据的一个子集。2::切片意味着"从索引2开始到结束"，所以这行代码实际上是丢弃了数据的前两行和两列。
        接下来的一行，MRIO_A = MRIO_A.astype('float')，将MRIO_A矩阵中的元素数据类型转换为浮点数。这是因为原始数据可能是其他类型（如字符串或整数），而我们需要将其转换为浮点数以进行后续的数值计算。
        最后，MRIO_A.shape这行代码会返回MRIO_A矩阵的形状（即，行数和列数）。这可以用于检查数据的维度，确保数据的形状符合我们的预期。然而，由于这个结果没有被赋值给任何变量或打印出来，所以在这个上下文中没有任何效果。如果你想查看这个形状信息，你可以使用print(MRIO_A.shape)来打印它。
        '''
        
        #---------------------extracting emission/ressource matrix F for stressors-------------------------
        Path_F = Directory + 'satellite//F.txt'
        
        MRIO_F = pd.read_csv(Path_F, sep = '\t', header=1, encoding='iso-8859-1', low_memory=False)
        # standard UTF-8 encoding raises error
        MRIO_F = MRIO_F.values[1::,1::]
        MRIO_F = MRIO_F.astype('float')
        
        MRIO_F.shape
        #print(MRIO_F)
        
        '''
        首先，Path_F = Directory + 'satellite//F.txt'这行代码构造了一个文件路径Path_F，这个路径指向了特定目录下的F.txt文件。
        接下来，MRIO_F = pd.read_csv(Path_F, sep = '\t', header=1, encoding='iso-8859-1', low_memory=False)这行代码使用pandas的pd.read_csv函数读取了这个F.txt文件，并将其内容存储在MRIO_F变量中。这个函数使用了制表符（'\t'）作为字段分隔符，指定了第1行为列名，指定了文件编码为'iso-8859-1'，并设置了low_memory=False以减少内存使用。
        然后，MRIO_F = MRIO_F.values[1::,1::]这行代码使用NumPy风格的切片来选择MRIO_F数据的一个子集。1::切片意味着"从索引1开始到结束"，所以这行代码实际上是丢弃了数据的第一行和第一列。
        接下来的一行，MRIO_F = MRIO_F.astype('float')，将MRIO_F矩阵中的元素数据类型转换为浮点数。这是因为原始数据可能是其他类型（如字符串或整数），而我们需要将其转换为浮点数以进行后续的数值计算。
        最后，MRIO_F.shape这行代码会返回MRIO_F矩阵的形状（即，行数和列数）。这可以用于检查数据的维度，确保数据的形状符合我们的预期。然而，由于这个结果没有被赋值给任何变量或打印出来，所以在这个上下文中没有任何效果。如果你想查看这个形状信息，你可以使用print(MRIO_F.shape)来打印它。
        '''

        #---------------------extracting direct emission matrix Fhh for stressors-------------------------
        Path_Fhh = Directory + 'satellite//F_hh.txt'
        MRIO_Fhh = pd.read_csv(Path_Fhh, sep = '\t', header=1, encoding='iso-8859-1', low_memory=False)
        # standard UTF-8 encoding raises error
        MRIO_FCat= list(MRIO_Fhh)[1:8] # 将MRIO_Fhh转换为列表，并取出索引为1到7的元素（第2-8个），然后将这些元素赋值给MRIO_FCat。这些元素可能是排放/资源的类别。
        MRIO_Fhh = MRIO_Fhh.values[1::,1::]
        MRIO_Fhh = MRIO_Fhh.astype('float')
        MRIO_Fhh.shape
        # 同样是把第一行和第一列去掉了

        #---------------------extracting emission/ressource names for stressors-------------------------
        Path_Fdata = Directory + 'satellite//unit.txt'
        MRIO_Fdata = pd.read_csv(Path_Fdata, sep = '\t', header=0, encoding = 'iso-8859-1') # standard UTF-8 encoding raises error
        MRIO_Fdata = MRIO_Fdata.astype('str')
        MRIO_Fdata
        
        MRIO_Ftype = list(MRIO_Fdata.iloc[:,0])
        MRIO_Funit = list(MRIO_Fdata.iloc[:,1])
        # 两行代码分别提取了MRIO_Fdata的第一列和第二列，并将它们转换为列表。这两列分别代表排放/资源的类型和单位。iloc是pandas DataFrame的一个属性，它提供了基于整数位置的索引功能。
        #print(MRIO_Ftype)
        #print(MRIO_Funit)
        
        #---------------------extracting industry/region names-------------------------
        Path_F = Directory + 'products.txt'
        MRIO_Industries = pd.read_csv(Path_F, sep = '\t', header=0, encoding = 'iso-8859-1' ) # standard UTF-8 encoding raises error
        MRIO_Industries = MRIO_Industries.astype('str')
        MRIO_Industries = MRIO_Industries.reset_index() # reset_index()函数将索引重置为从0开始的整数索引。这是因为在读取数据时，pandas会自动为每行数据分配一个索引，但这个索引可能并不符合我们的需求，所以我们需要重置它。
        MRIO_Industries = list(MRIO_Industries['Name']) # 一共200个产品
        #print(MRIO_Industries)
        
        #---------------------inversing A matrix to get L matrix-------------------------
        if i1 == 0:
            I = np.identity(7987)
        else:
            I = np.identity(9800)
        MRIO_L = np.linalg.inv(I-MRIO_A)
        MRIO_L.shape
        
        #---------------------building the emission intensity matrix S-------------------------
        MRIO_X = MRIO_L.dot(MRIO_Y.sum(axis = 1))
        MRIO_X
        MRIO_X.shape
        MRIO_S = np.zeros(MRIO_F.shape)
        for m in range(0,MRIO_A.shape[0]):
            if MRIO_X[m] > 1: # Threshold for sector output: 1 MEUR
                MRIO_S[:,m] = MRIO_F[:,m] / MRIO_X[m]
        MRIO_S.shape

        '''
        首先，MRIO_X = MRIO_L.dot(MRIO_Y.sum(axis = 1))这行代码计算了MRIO_L矩阵和MRIO_Y矩阵列和的点积，并将结果存储在MRIO_X中。这里的MRIO_L可能是一个Leontief逆矩阵，MRIO_Y可能是一个最终需求矩阵。MRIO_Y.sum(axis = 1)计算了MRIO_Y的列和，即每个行业的总需求。然后，这个总需求和MRIO_L的点积就得到了每个行业的总产出MRIO_X。
        接下来，MRIO_X.shape这行代码会返回MRIO_X的形状（即，行数和列数）。这可以用于检查数据的维度，确保数据的形状符合我们的预期。然而，由于这个结果没有被赋值给任何变量或打印出来，所以在这个上下文中没有任何效果。
        然后，MRIO_S = np.zeros(MRIO_F.shape)这行代码创建了一个形状和MRIO_F相同，但所有元素都为0的新矩阵MRIO_S。这个MRIO_S就是我们要构建的排放强度矩阵。
        接下来，for m in range(0,MRIO_A.shape[0]):这行代码设置了一个循环，m的值从0开始，到MRIO_A.shape[0]结束。这个循环主要用于遍历MRIO_A的所有行，MRIO_A可能是一个产品配方矩阵。
        在循环中，if MRIO_X[m] > 1:这行代码检查了MRIO_X的第m个元素是否大于1。这个1可能是一个阈值，代表了行业产出的最小值。只有当行业产出大于这个阈值时，我们才会计算其排放强度。
        最后，MRIO_S[:,m] = MRIO_F[:,m] / MRIO_X[m]这行代码计算了第m个行业的排放强度，并将其存储在MRIO_S的第m列中。这个排放强度是通过将MRIO_F的第m列（即第m个行业的排放）除以MRIO_X的第m个元素（即第m个行业的产出）得到的。
        在循环结束后，我们就得到了完整的排放强度矩阵MRIO_S。MRIO_S.shape这行代码会返回MRIO_S的形状，这可以用于检查数据的维度，确保数据的形状符合我们的预期。
        '''
    


        #---------------------saving the newly built EXIOBASE dataset for matlab-------------------------
        Filestring_Matlab_out = Dir + 'EXIOBASE3_8_1_'+str(i)+'_'+str(j)+'.mat'
        scipy.io.savemat(Filestring_Matlab_out, mdict={'EB3_'+str(i)+'_'+str(j)+'_FinalDemand_Emissions':MRIO_Fhh,
                                                       'EB3_'+str(i)+'_'+str(j)+'_S_Stressors_ITC':MRIO_S,
                                                       'EB3_'+str(i)+'_'+str(j)+'_L_ITC':MRIO_L,
                                                       'EB3_'+str(i)+'_'+str(j)+'_Y':MRIO_Y,
                                                       'EB3_'+str(i)+'_'+str(j)+'_TableUnits':'MEUR',
                                                       'EB3_'+str(i)+'_'+str(j)+'_Stressors_Labels':MRIO_Ftype,
                                                       'EB3_'+str(i)+'_'+str(j)+'_Stressors_Units':MRIO_Funit,
                                                       'EB3_'+str(i)+'_'+str(j)+'_FDCats':MRIO_FCat,
                                                       'EB3_'+str(i)+'_'+str(j)+'_ProductNames200':MRIO_Industries,
                                                       'EB3_'+str(i)+'_'+str(j)+'_RegionList':MRIO_Country})

        # 会同时输出 ixi.mat 和 pxp.mat

        #---------------------extracting stressor coeffcient matrix S_stress-------------------------
        Path_S_stress = Directory + 'satellite//S.txt'
        MRIO_S_stress = pd.read_csv(Path_S_stress, sep = '\t', header=1, encoding='iso-8859-1', low_memory=False)
        # standard UTF-8 encoding raises error
        MRIO_S_stress = MRIO_S_stress.values[1::,1::]
        MRIO_S_stress = MRIO_S_stress.astype('float')
        MRIO_S_stress.shape
        
        #---------------------extracting stressor coeffcient matrix S_impact-------------------------
        Path_S_impact = Directory + 'impacts//S.txt'
        MRIO_S_impact = pd.read_csv(Path_S_impact, sep = '\t', header=1, encoding='iso-8859-1', low_memory=False)
        # standard UTF-8 encoding raises error
        MRIO_S_impact = MRIO_S_impact.values[1::,1::]
        MRIO_S_impact = MRIO_S_impact.astype('float')
        MRIO_S_impact.shape
        
        #---------------------extracting emission/ressource names for impacts-------------------------
        Path_IMPdata = Directory + 'impacts//unit.txt'
        MRIO_IMPdata = pd.read_csv(Path_IMPdata, sep = '\t', header=0, encoding = 'iso-8859-1') # standard UTF-8 encoding raises error
        MRIO_IMPdata = MRIO_IMPdata.astype('str')
        MRIO_IMPdata
        
        MRIO_IMPtype = list(MRIO_IMPdata.iloc[:,0])
        MRIO_IMPunit = list(MRIO_IMPdata.iloc[:,1])
        
        #---------------------extracting direct emission matrix Fhh for impacts-------------------------
        Path_Fhh_impact = Directory + 'impacts//F_hh.txt'
        MRIO_Fhh_impact = pd.read_csv(Path_Fhh_impact, sep = '\t', header=1, encoding='iso-8859-1', low_memory=False)
        # standard UTF-8 encoding raises error
        MRIO_FCat_impact= list(MRIO_Fhh_impact)[1:8]
        MRIO_Fhh_impact = MRIO_Fhh_impact.values[1::,1::]
        MRIO_Fhh_impact = MRIO_Fhh_impact.astype('float')
        MRIO_Fhh_impact.shape

        #---------------------saving the S matrices and impact data-------------------------
        Filestring_Matlab_out = Dir + 'EXIOBASE3_8_1_'+str(i)+'_'+str(j)+'_S_matrices.mat'
        scipy.io.savemat(Filestring_Matlab_out, mdict={'EB3_'+str(i)+'_'+str(j)+'_S_Stressors':MRIO_S_stress,
                                                       'EB3_'+str(i)+'_'+str(j)+'_FinalDemand_Impacts':MRIO_Fhh_impact,
                                                       'EB3_'+str(i)+'_'+str(j)+'_S_Impacts':MRIO_S_impact,
                                                       'EB3_'+str(i)+'_'+str(j)+'_Impacts_Labels':MRIO_IMPtype,
                                                       'EB3_'+str(i)+'_'+str(j)+'_Impacts_Units':MRIO_IMPunit})
        # 会同时输出 ixi_S_matrices.mat 和 pxp_S_matrices.mat
```
