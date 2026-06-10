---
title: "Handbook of Event Study"
date: 2023-11-11T10:00:00+08:00
category: { name: "研究笔记", slug: research }
tags: ["事件研究", "因果推断", "DID"]
summary: "事件研究法的基本原理、代码实验与注意事项。"
---

前文（[Handbook of DID family](https://yuzhangnju.github.io/2023/10/25/Handbook%20of%20DID%20family_20231026/)）提到，事件研究法现已成为DID策略的标准动作，用于**检验平行趋势**和发现**外生冲击效应在时间上的变化**，在此类应用中，事件研究法处于辅助地位。但DID设计本身存在两大缺陷，一是DID策略得到的是平均处理效应（ATE），而现实情况下我们更需要知道外生冲击在不同时段的不同影响，二是DID要求处理效应在冲击后立马显现，但事实上事件的效果往往需要过一段时间才能看出来（比如政策颁布的时点到执行层面落实有很长的间隔、疫苗接种后也不是立即生效）。（事实上DID策略还有很多其他问题，详见前文，在这些情况下，应用事件研究法可能是更好的选择。）

事件研究法为冲击的时间动态提供了丰富的细节（以图形直观展示），很好地弥补了DID的两大缺陷，在未来，事件研究法可能会与DID交换地位，成为处理效应研究的基准结果。

本篇博文摘录了事件研究法近期的进展，并在结尾附上代码，以**在实践中学习**为理念，我想通过实际操作，增进自己对事件研究法的掌握。

主要参考资料如下：

- 张子尧 & 黄炜.(2023).事件研究法的实现、问题和拓展. *数量经济技术经济研究*(09),71-92. 
- Miller, D. L. (2023). An Introductory Guide to Event Study Models. *Journal of Economic Perspectives*, *37*(2), 203-230.

- [【香樟推文2919】ES，启动！——事件研究法入门指南](https://mp.weixin.qq.com/s/5kC3RyyhZkOILtFrlbQOag)

- [【香樟推文2604】经久不衰的最低工资与就业问题——DID与事件研究法](https://mp.weixin.qq.com/s/U-eJElBBzErXM5HaYl2mgA)

## 1 事件研究法概述

### 1.1 对事件研究法的直观理解

在[前文](https://yuzhangnju.github.io/2023/10/25/Handbook%20of%20DID%20family_20231026/)模拟数据进行平行趋势检验的代码中，可以发现，事件研究法与DID策略相比，两者回归方程的结构是一样的，但是主要变量由DID的“处理组*处理时点”换成了处理组虚拟变量与时间虚拟变量的所有可能性交互。直观理解就是，事件研究是将DID处理效应的箱子打开，将平均处理效应拆解为一系列“两组-两期”DID组合加权平均，有时事件研究法也被称为动态DID。（仔细想想是不是这样？事件研究法处理效应图中，每一个点都可以理解为一组 2x2 DID）

**一图胜千言：**

![image-20231106154603637](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106154603637.png)

⬆️上图展示了前文处理效应随时间变化的模拟数据结果，x轴为处理时点的相对时间，负数表示处理前，正数表示处理后，y轴是回归系数，及处理效应的大小和置信区间。

如果用DID的回归结果，我们能得到处理效应的大小，但是观测不到处理效应随时间的变化。使用事件研究法，我们可以发现在事前不存在处理效应，事后处理效应凸显，且效应的大小随时间增大。更丰富的处理效应，正是我们所关心的。

### 1.2 结合方程与模拟数据的理解

来看看[估计方程](https://www.lianxh.cn/details/826.html)（更换了渲染器，现在复杂公式也可以正常渲染了！）：
$$
y_{st} = \alpha + \sum_{j=2}^J\beta_j(\text{Lag}\ j)_{st} + \sum_{k=1}^K(\text{Lead}\ k)_{st} + \mu_s + \lambda_t + X'_{st}\Gamma + \epsilon_{st} \quad(1)
$$
式（1），$y_{st}$ 是第 $s$ 个个体在第 $t$ 期的因变量，$J$ 和 $K$ 分别表示事前和事后的期数（也称为滞后项和前置项），$\mu_s$ 和 $\lambda_t$ 分别为个体固定效应与时间固定效应，我们要看的是前置项的系数。举个例子🌰：研究期为2008年到2017年，事件时点是2013年，那么 $J$ 就为4，$J$ 就为5。回归方程代码里，就要把这些年份都考虑进去。（写法很严谨，但见前文代码，操作很简单。）

用[JEP论文](https://www.aeaweb.org/articles?id=10.1257/jep.37.2.203)里的估计方程理解起来会更方便些（这个公式敲起来老费劲了）：
$$
y_{it} =\underbrace{ (\sum_{j\in\{-m,_\cdots,0,_\cdots,n\} }\gamma_j\cdot D_{i,t-j} ) }_{\mathrm{Event\ Study\ Terms} }\  + \underbrace{\alpha_i+\delta_t}_{\mathrm{Panel\ Fixed\ Effects} } + \underbrace{\beta\cdot X_{it} }_{\mathrm{ (Optional)\ Control Variables} } + \epsilon_{it}\quad(2)
$$
式（2）中的重要系数含义如下：

- $\gamma_j$ : 事件系数，事后的系数能显示了事件处理的动态效果，事前的系数能提供安慰剂检验；
- $D_{i,t-j}$ : 事件时间的指示变量。

 再来看一个模拟数据的例子：

> 模拟样本中共有 400 个个体，每个个体有 20 期观测值。样本中共包含 4 个组群(Group)，分别为 3 组在不同时点接受处理的处理组和 1 组未受处理的控制组，每组均包含 100 个个体。3 组处理组分别在第 5、10、15 期接受处理。处理组个体的处理效应随时间增长，受处理期限每增加 1 期处理效应随之增加 1 单位。（张子尧等，2023）

![ES_ATT](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/ES_ATT.png)

> 试试看此时用DID，算出来的平均处理效应是多少？（实验见代码部分）
>

最早的相对处理期是-14期，最晚的相对处理组是15期，每个相对时期的平均处理效应如下（这应该算日历期的结果了？）：

![image-20231106221142311](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106221142311.png)

### 1.3 事件研究法的基本假设

指试用TWFE时，事件研究的对象应该满足的假设（即下图a、b的情况）：

- 平行趋势假设
- 无预期效应假设
- 同质性处理效应路径假设

![image-20231107203952473](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107203952473.png)



## 2 事件研究法实践中的若干问题

### 2.1 基期选择

基期是选择一个参照组，作为其他期可比对象，这样才能判断处理效应是不是显著、大小如何。理论上，基期选在处理时点之前的任一期都可，如果在不手动选的话，Stata会默认drop掉最早的一期。

但在实践中，将-1期，即事件发生的前一期作为基期的情况比较普遍，考虑到可能存在预期效应，也可以选择-3期。选择-1期，是现在的标准动作。（选择其他期难免被人怀疑操纵数据或挑选结果）

### 2.2 对事前平行趋势假设的检验

再强调一遍，平行趋势检验是非常重要的，它是使得潜在结果因果框架里处理组的反事实成立的最重要的条件。

当前的论文中，对平行趋势的检验，就是选择基准期后，观察事前每一期的系数是否为0，如果每一期的系数都不显著，就认为满足事前平行趋势。但这样做有两个问题：

- 基期的影响很重要，选择不同的基期，系数的结果可能正好相反，基准期会整体上影响每一期系数的显著性；因此，有挑选结果的可能性；
- 事前平行趋势要求处理前每一期的平均处理效应为 0，其对应的原假设是 $\mu_{-2}=\mu_{-3}=\cdots=\mu_{-K}=0$ ，而目前的选择基期看系数的检验，检验的其实并不是这个原假设。因此，需要进行系数联合检验而不是关注单一系数的显著性。

联合检验：如F检验，可以用来检查多个系数是否同时等于0。

![image-20231106204518638](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106204518638.png)

从（a）看，选择不同的基期，对事前系数的影响较大。

张子尧等（2022）对事前平行趋势检验有如下建议：

> 第一，必须更加关注事前估计系数是否呈现出明显的时间趋势。个别事前估计系数显著可能仅仅是一种数据噪声导致的偶然现象，然而如果存在明显的事前趋势，可能预示着平行趋势假设不成立，这会直接威胁到事件研究法的识别假设可靠性，可能会导致估计结果产生严重偏误。因此，事前时间趋势(即使不显著)是比个别事前系数显著严重得多的大问题。若估计结果提示可能存在这一类问题，必须对该问题的来源进行详细的分析和讨论，并尽可能地做针对性处理以减轻对估计结果的干扰。
>
> 第二，由于事前时间趋势是关注重点，除了某些特殊情况外，必须对估计结果进行图形化以直观判别是否存在事前时间趋势。
>
> 第三，检验事前平行趋势应该对事前估计系数做联合检验而不是关注单一系数的显著性。

### 2.3 归并和截断数据

**数据归并**(Binning)是指设定一个事件窗口 $[-K,L]$，将早于事件窗口的观测值 $(l\le-K)$ 的相对时期重新设定为 $-K$ 期，将晚于事件窗口的观测值 $l\ge L$ 的相对时期重新设定为 $L$ 期。

**数据截断**(Trimming)同样是设定一个事件窗口，区别在于将事件窗口外的样本做删除而非归并。

归并数据的优势有二: 一是在样本中没有从未接受处理的控制组时可以避免共线性问题以识别平均处理效应，二是保留了全部样本从而提高了估计效率。在实践中应该避免对处理发生后时期进行归并;若事前平行趋势满足，可以对处理前时期做适当归并。

截断数据的优势在于产生的偏误较小，但有一定的样本选择问题，并降低估计效率。

实践中两种方式都见过。

![image-20231106211031460](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106211031460.png)

#### 2.4 正确控制组群异质性时间趋势

事件研究法的核心识别假设是平行趋势假设。然而，由于涉及处理发生后不可观测的潜在结果，平行趋势假设本身是不可能被直接检验所证实或证伪的。因此，实践中研究者们一方面会检验事前平行趋势是否成立从而间接地为平行趋势假设提供支持，另一方面也考虑尽可能**放松平行趋势假设**，即允许处理组和控制组存在某种确定形式的趋势差异。最常见的是假设组间存在异质性的线性时间趋势，如下图所示，3 个处理组分别存在斜率为 1、0.5、0.2 的线性时间趋势，控制组不存在时间趋势。该数据生成过程显然不满足平行趋势假设，直接使用事件研究法无法得到平均处理效应的一致估计结果。针对这种情况，可以在回归方程的基础上进一步控制组群特定时间趋势:
$$
y_{it} = \alpha_i + \gamma_gf(t) + \sum_{l=-K}^{-2}\mu_l D_{it}^l + \sum_{l=0}^L\beta_lD_{lt}^l + \epsilon_{it} \quad(3)
$$
式（3）中的 $f(t)$ 表示时间趋势项的函数形式，可以是线性的，也可以是二次形式的；$\gamma_g$ 表示时间趋势项的参数，$g$ 意味着不同组群的时间趋势项存在差异。下图中，控制组的时间趋势斜率 $\gamma_0 = 0$ ，组群1、2、3 的时间趋势斜率分别为1、0.5 和0.2。

![image-20231106211537255](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106211537255.png)

实践中研究者们通常直接回归式（3），认为 $y_gf(t)$ 可以良好地控制潜在的组间时间趋势差异，从而确保估计系数 $\mu_l$ 和 $\beta_l$ 能够一致估计各期平均处理效应。然而事实<mark>并非如此</mark>！看例子：

![image-20231106214116230](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106214116230.png)

上图中，首先，可以发现由于平行趋势假设不满足，事件研究法无法正确识别处理前和处理后的真实平均处理效应。其次，令人惊讶的是，当控制住组群时间趋势项 $\gamma_g\times t$ 后，事件研究法不仅无法一致估计各期的平均因果效应，甚至会导致更大的估计偏误！并且，基期的选择也会对估计结果有很大影响！

如何处理组群间异质性时间趋势，目前主要有两种方法（我感觉两种方法本质上是一样的）：

- **手动剔除事前趋势的两阶段估计法**：第一阶段使用未接受处理的子样本(控制组和尚未接受处理的处理组)估计组群异质性时间趋势并外推至处理后时期，从结果变量中剔除时间趋势(Detrend)。第二阶段使用剔除事前趋势后的结果变量进行事件研究法估计(Goodman-Bacon，2021; Dustmann 等，2022)。这种方法背后的逻辑很直观:如果组群时间趋势在处理前和处理后时期保持不变，使用未接受处理的子样本可以正确估计组群时间趋势，经过去趋势处理的结果变量重新满足平行趋势假设，事件研究法能够正确地估计出各期平均处理效应；
- **插补法**：既然问题出在使用全样本无法一致估计组群时间趋势项，那么一个自然的解决思路是使用未接受处理的子样本来正确地识别出组群时间趋势项 $\gamma_gf(t)$ 以及双向固定效应 $\alpha_i$ 和 $\lambda _t$ ，将其从结果变量 $y_{it}$ 中剔除后再进行回归估计。

![image-20231106220927856](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106220927856.png)

⬆️，这里用两阶段DID和去除事前趋势都比较靠谱。

在实验中，我发现，只要将基期选择为最早的一期和处理前一期，控制时间趋势的话，结果相差不大的，在置信区间内，比如这里，选择-14期和-1期：

![image-20231109112514196](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231109112514196.png)

> 可以将时间趋势异质性的组群看成分段函数，起点分别是第一期和处理前一期，基期选择起点即可！

### 2.5 异质性处理效应条件下的事件研究法

这部分也可以参考[Handbook of DID family](https://yuzhangnju.github.io/2023/10/25/Handbook%20of%20DID%20family_20231026/)里的相关内容！还是那些异质性DID的稳健估计量或诊断方法。

#### 2.5.1 异质性处理效应但无组间趋势差异

即满足平行趋势假设和无预期效应假设，但处理效应在组间存在差异，此时使用TWFE得出的处理效应是有偏的。原因是计算处理效应的权重出了问题，有负权重的现象，会把较早接受处理的组当成对照组，即“禁止比较”。（和之前的异质性DID一样，这也是3.2中使用TWFE算出来的处理效应只有2.69的原因）



![image-20231112160047110](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112160047110.png)

解决方案主要有（感觉本质是一样的hh）：

- “组群-时”期平均处理效应估计法：首先估计出组群—时期平均处理效应 $ATT_{g,l}$ ，然后根据某种权重(等权重或组群规模权重)手动加权求出各相对时期的加权平均处理效应 $ATT_l$ 。由于在手动加权的过程中人为避免了负权重问题，这类估计量可以修正双向固定效应模型的偏误，正确地估计各时期的平均处理效应；
- 插补法：使用未受处理的子样本(包括控制组和处理前时期的处理组)估计拟合出处理组个体的反事实结果，而后计算出个体处理效应，最后加总得到各个相对时期的平均处理效应；
- 堆叠法：通过为每个处理组组群匹配一个由从未接受处理的控制组或尚未接受处理的处理组样本构成的特定控制组，再将匹配好的样本堆叠起来进行回归。

![image-20231112163237401](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112163237401.png)

**异质性处理效应情形下的事前平行趋势检验**

- 使用全样本会出现参照期和参照对象错误导致的权重错误问题
- 使用未受处理的子样本即可（包括在剔除接受处理的样本后使用TWFE（如下图），还是异质性稳健估计器（见上图处理时间前部分），都可以）

![image-20231112163818038](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112163818038.png)

#### 2.5.2 异质性处理效应+异质性组间趋势

似乎没有什么好的处理办法，作者举了些例子，如**处理时点内生选择**：

- 阿森费尔特沉降(Ashenfelter’s Dip)：Ashenfelter(1978)在评估培训项目对工资的影响时发现职工平均收入在参加培训前有一个明显降低的趋势，后续研究发现这一现象的原因在于失业的工人为了更好地寻找到新工作而更有动机参加职业培训。由于参加职业培训的工人(处理组)与同时期未参加职业培训的工人(控制组)不具有良好的可比性，平行趋势假设很可能并不成立，导致事件研究法无法正确识别因果效应(Heckman 和 Smith，1999)。 另一个常见的例子是离职对员工收入的影响。员工离职有两种可能情形，一种是主动辞职去新的企业工作以获得更高的收入，另一种是被企业强制解雇导致被动失业。显然，不同情形的离职对员工收入的影响存在巨大差异:主动辞职者通常可以获得更高的收入，而被迫失业者收入会大幅度降低。更为严重的问题在于，主动辞职者和被迫失业者(处理组)与持续工作者(控制组)的反事实收入很可能有不同的时间趋势，此时平行趋势假设不再成立。（参加培训这样的事件内生性太强，会有自我选择的情况）
- 在举个例子，就是下图的数据生成过程：结果变量是个人收入，事件为更换工作，虚线为未更换工作的个人收入反事实潜在结果。从图中可以看到，当个人预期到企业未来经营困难、收入可能会下降时会考虑更换工作;能力越强的员工(事前收入越高)越容易找到新职位，因此会更早更换工作(处理时点靠前)，并且新职位的收入也会越高(处理效应更强); 反之，能力较低的员工更难找到新职位，所以更换工作较晚(处理时点靠后)并且新职位的收入更低(处理效应更弱)。由于处理组未受处理的反事实潜在结果与控制组不平行，不满足平行趋势假设。 在这种情形下，**无论是基于双向固定效应模型的传统事件研究法还是异质性处理效应稳健估计量都存在估计偏误，<mark>都无法</mark>正确估计各期平均处理效应**。

此时的数据情况类似下图：

![image-20231112164904412](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112164904412.png)

真实处理效应如下：

![image-20231112165018003](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112165018003.png)

而TWFE和各类稳健估计量都不能很好地准确估计：

![image-20231112164748356](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112164748356.png)

**怎么知道自己的数据是不是可以有效估计的呢？或者估计结果有没有什么问题？**

- 用TWFE试试看，再用异质性稳健估计量看看，如果两者的结果相差较大，就要注意问题出在哪里！

### 2.6 其他问题

- 个体在事件窗口内发生多次事件如何处理
- 存在影响强度不同的事件该如何处理
- 事件日期存在空间相关会怎样

等等，可以参考[【香樟推文2919】ES，启动！——事件研究法入门指南](https://mp.weixin.qq.com/s/5kC3RyyhZkOILtFrlbQOag)

## 3 数据与代码

### 3.1 数据生成过程

数据生成过程非常重要！！！

一定要理解，难以理解的地方咨询ChatGPT！！！

```stata
clear all

set seed 20230101

***********************
**       DGP1        **
***********************
*  - 交错处理时点
*  - 同质性处理效应路径
*  -满足平行趋势

* N=400, T=20, G=4
clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* 生成个体固定效应
gen  unit_c     = runiform(0,10) if time==1
egen unit_spec  = mean(unit_c), by(id)

gen x = runiform(0,1)
gen     indicator_c = unit_c + 1*x //在stata里，空值的观测不会被加法填补
qui sum indicator_c,d
scalar  threshold1   = r(p25) //创建四分位的标量
scalar  threshold2   = r(p50)
scalar  threshold3   = r(p75)
egen    indicator   = mean(indicator_c), by(id)
gen     treat = 1
replace treat = 2 if indicator>threshold1
replace treat = 3 if indicator>threshold2
replace treat = 4 if indicator>threshold3
tab treat, gen(group)

gen timing = . //生成接受处理的年份
replace timing = 5 if treat==2
replace timing = 10 if treat==3
replace timing = 15 if treat==4

* 定义潜在结果y0和y1
gen rel_date = time-timing //生成接受处理的相对年份
replace rel_date = 0 if mi(rel_date) //如果该个体没有接受处理，改为0
gen post = rel_date>=0 //生成post虚拟变量，处理之前为0，之后为1
gen group_level = 10*group2 + 3*group3 -3*group4 //用于模拟不同分组的基础水平效应
gen group_trend = 0 //平行趋势
gen tauit =  (1*group2 + 1*group3 + 1*group4)*post*(rel_date+1) //生成潜在的处理效应变量tauit。这里它被设定为对于接受处理的个体（由post指示），随时间（rel_date+1）线性增加。该效应对于所有处理组都是相同的。每一组的系数都是1，表明处理效应不存在组间差异
gen y0 = group_level + group_trend + unit_spec + runiform(0,10)
gen y1 = group_level + group_trend + unit_spec + tauit + runiform(0,10)
* 生成观测样本y 
cap drop y
gen D = 0
replace D = 1 if rel_date>=0&inlist(treat,2,3,4)
gen y = (1-D)*y0 + D*y1 //处理前，y=y0，处理组处理后，y=y1


forvalues k = 14(-1)2 {
   gen relb_`k' = rel_date == -`k'  // 事前相对时点
   label var relb_`k' "-`k'"        // label用于画图
}

gen rel_base = rel_date==-1 //基期
label var rel_base "-1"

forvalues k = 0/15 {
    gen relf_`k' = rel_date == `k'  // 事后相对时点
    label var relf_`k' "`k'"            // label用于画图
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // 控制组的相对时点全部定义为0
save simu_data_DGP01, replace




***********************
**       DGP2        **
***********************
*  -交错处理时点
*  -同质性处理效应路径
*  -存在组间趋势差异，不满足平行趋势

* 设定随机数种子
set seed 20230101

clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* 生成个体固定效应
gen  unit_c     = runiform(0,10) if time==1
egen unit_spec  = mean(unit_c), by(id)
gen x = runiform(0,1)

gen     indicator_c = unit_c + 1*x
qui sum indicator_c,d
scalar  threshold1   = r(p25)
scalar  threshold2   = r(p50)
scalar  threshold3   = r(p75)
egen    indicator   = mean(indicator_c), by(id)
gen     treat = 1
replace treat = 2 if indicator>threshold1
replace treat = 3 if indicator>threshold2
replace treat = 4 if indicator>threshold3
tab treat, gen(group)

gen timing = .
replace timing = 5 if treat==2
replace timing = 10 if treat==3
replace timing = 15 if treat==4

* 定义潜在结果y0和y1
gen rel_date = time-timing
replace rel_date = 0 if mi(rel_date)
gen post = rel_date>=0
gen group_level = 10*group2 + 3*group3 -3*group4
gen group_trend = (0*group1 + 1*group2 + 0.5*group3 + 0.2*group4)*time //之前这里是0，现在这里给2 3 4组分别设置了斜率为 1 0.5 0.2 的时间趋势，这个时间趋势在所有观测到最早一期就有的，不是等到处理时点才有，因此破坏了平行趋势
gen tauit =  (1*group2 + 1*group3 + 1*group4)*post*(1 + rel_date) //short-run and dynamic effects
gen y0 = group_level + group_trend + unit_spec + runiform(0,10)
gen y1 = group_level + group_trend + unit_spec + tauit + runiform(0,10)
* 生成观测样本y 
cap drop y
gen D = 0
replace D = 1 if rel_date>=0&inlist(treat,2,3,4)
gen y = (1-D)*y0 + D*y1 

forvalues k = 14(-1)2 {
   gen relb_`k' = rel_date == -`k'  // 事前相对时点
   label var relb_`k' "-`k'"        // label用于画图
}

gen rel_base = rel_date==-1 //基期
label var rel_base "-1"

forvalues k = 0/15 {
    gen relf_`k' = rel_date == `k'  // 事后相对时点
    label var relf_`k' "`k'"            // label用于画图
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // 控制组的相对时点全部定义为0

save simu_data_DGP02, replace



***********************
**       DGP3        **
***********************
*  -交错处理时点
*  -异质性处理效应
*  -满足平行趋势

* 设定随机数种子
set seed 20230101

clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* 生成个体固定效应
gen  unit_c     = runiform(0,10) if time==1
egen unit_spec  = mean(unit_c), by(id)

gen x = runiform(0,1)
gen     indicator_c = unit_c + 1*x
qui sum indicator_c,d
scalar  threshold1   = r(p25)
scalar  threshold2   = r(p50)
scalar  threshold3   = r(p75)
egen    indicator   = mean(indicator_c), by(id)
gen     treat = 1
replace treat = 2 if indicator>threshold1
replace treat = 3 if indicator>threshold2
replace treat = 4 if indicator>threshold3
tab treat, gen(group)

gen timing = .
replace timing = 5 if treat==2
replace timing = 10 if treat==3
replace timing = 15 if treat==4

* 定义潜在结果y0和y1
gen rel_date = time-timing
replace rel_date = 0 if mi(rel_date)
gen post = rel_date>=0
gen group_level = 10*group2 + 3*group3 -3*group4
gen group_trend = 0 //满足平行趋势
gen tauit =  (0.5*group2 + 1*group3 + 2*group4)*post*(rel_date+1) //这里给每组设置了不同的系数，之前的都是1，即处理效应异质性
gen y0 = group_level + group_trend + unit_spec + runiform(0,10)
gen y1 = group_level + group_trend + unit_spec + tauit + runiform(0,10)

* 生成观测样本y 
cap drop y
gen D = 0
replace D = 1 if rel_date>=0&inlist(treat,2,3,4)
gen y = (1-D)*y0 + D*y1 

gen rel_date_cut = rel_date
local pre_cut  = 14
local post_cut = 15
replace rel_date_cut = -`pre_cut'  if rel_date<-`pre_cut'
replace rel_date_cut = `post_cut' if rel_date>`post_cut'
tab rel_date_cut

forvalues k = `pre_cut'(-1)2 {
   gen relb_`k' = rel_date_cut == -`k'
   label var relb_`k' "-`k'"
}
gen rel_base = rel_date_cut==-1
label var rel_base "-1"
forvalues k = 0/`post_cut' {
    gen relf_`k' = rel_date_cut == `k'
    label var relf_`k' "`k'"
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // 控制组的相对数量全是0

save simu_data_DGP03, replace


***********************
**       DGP4        **
***********************
*  -交错处理时点
*  -异质性处理效应
*  -存在组间趋势差异，不满足平行趋势

* 设定随机数种子
set seed 20230101

clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* 生成个体固定效应
gen  unit_c     = runiform(0,10) if time==1
egen unit_fe  = mean(unit_c), by(id)

gen     indicator_c = unit_c 
qui sum indicator_c,d
scalar  threshold1   = r(p25)
scalar  threshold2   = r(p50)
scalar  threshold3   = r(p75)
egen    indicator   = mean(indicator_c), by(id)
gen     treat = 1
replace treat = 2 if indicator>threshold1
replace treat = 3 if indicator>threshold2
replace treat = 4 if indicator>threshold3
tab treat, gen(group)

gen timing = .
replace timing = 5 if treat==2
replace timing = 10 if treat==3
replace timing = 15 if treat==4

* 定义潜在结果y0和y1
gen rel_date = time-timing
replace rel_date = 0 if mi(rel_date)
gen post = rel_date>=0
gen group_level = 40*group2 + 25*group3 +10*group4
gen group_trend = 0
egen X_cf = mean(unit_c), by(treat) //下面会纳入计算，因此有了组建趋势差异，不满足平行趋势

gen tauit =  (2*group2 + 1*group3 + 0.5*group4)*post*(rel_date+1) //异质性处理效应
gen y0 = group_level + group_trend  - 0.1*X_cf*rel_date*post + runiform(0,10)
gen y1 = group_level + group_trend  - 0.1*X_cf*rel_date*post + tauit + runiform(0,10)
* 生成观测样本y 
cap drop y
gen D = 0
replace D = 1 if rel_date>=0&inlist(treat,2,3,4)
gen y = (1-D)*y0 + D*y1 

gen rel_date_cut = rel_date
local pre_cut  = 14
local post_cut = 15
replace rel_date_cut = -`pre_cut'  if rel_date<-`pre_cut'
replace rel_date_cut = `post_cut' if rel_date>`post_cut'
tab rel_date_cut

forvalues k = `pre_cut'(-1)2 {
   gen relb_`k' = rel_date_cut == -`k'
   label var relb_`k' "-`k'"
}
gen rel_base = rel_date_cut==-1
label var rel_base "-1"
forvalues k = 0/`post_cut' {
    gen relf_`k' = rel_date_cut == `k'
    label var relf_`k' "`k'"
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // 控制组的相对数量全是0
save simu_data_DGP04, replace
```

### 3.2 同质性处理效应路径的情况

即不同组群的冲击时点不同，但效果一致，都随时间线性增加。

```stata
*注意在当前目录下需要有一个名为figure的文件夹，用来存放输出的图片

clear all

**********************
**       图2        **
**********************

* 运行DGP文件生成数据
use simu_data_DGP01, clear

preserve 
collapse (mean) y, by(treat time) //将数据集压缩为y变量的均值，并且这些均值是按照time（时间）和treat（处理组）变量分组的。在这个压缩后的数据集中，每个treat和time组合只有一个观察值，它代表该组合的y的均值。下面的是绘制处理组treat==2的散点图，使用线连接(c(l))和圆形标记(m(o))。o\s\t\d分别表示圆形、方形、三角形和菱形
tw  (sc y time if treat==2, c(l) m(o)) ///
    (sc y time if treat==3, c(l) m(s)) ///
    (sc y time if treat==4, c(l) m(t)) ///
    (sc y time if treat==1, c(l) m(d)), ylabel(0(10)40) ///
    subtit("（a）模拟数据", pos(6)) ///
    legend(order(1 "组群1 (T*=5)" 2 "组群2 (T*=10)" 3 "组群3 (T*=15)" 4 "控制组" ) $tllgd col(1)) xtitle("时期") ytitle("结果变量Y") scale(1) name(Homo1)
restore

* 图2b
preserve 
collapse (mean) att=tauit, by(treat rel_date) //画出处理效应ATT
replace att = att+0.5 if treat==3
replace att = att+1 if treat==2
tw  (sc att rel_date if treat==2, c(l) m(o)) ///
    (sc att rel_date if treat==3, c(l) m(s)) ///
    (sc att rel_date if treat==4, c(l) m(t)), xlabel(-15(5)15) ///
    xline(-0.5, lc(gs8) lp(dash)) ///
    xtitle("相对处理时期") ytitle("平均处理效应 (ATT)") ///
    subtit("（b）真实平均处理效应", pos(6)) ///
    legend(order(1 "组群1 (T*=5)" 2 "组群2 (T*=10)" 3 "组群3 (T*=15)") $tllgd col(1)) scale(1) name(Homo2)
restore
gr combine Homo1 Homo2, xsize(10) scale(1.5)
gr export "figure/ES_ATT.png", width(3000) replace
gr export "figure/ES_ATT.svg", replace
gr save figure/ES_ATT.gph, replace

**********************
**       图3        **
**********************
use simu_data_DGP01, clear

* TWFE
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time) cluster(id)
eststo ES_TWFE //注意，o.rel_base 就是选择基准期，o 表示 omitted

/*

********************************************************************************
reghdfe y c.D, a(id time) cluster(id) //再用DID看看，发现平均处理效应是2.69,似乎不对？**
********************************************************************************
//2.69肯定是不对，固定控制组，单独看123组的处理效应分别是8.66 5.93 3.27；真实的处理效应应该是6.76
//sum taui, 发现均值是2.79，和TWFE的结果一致，表明TWFE确实存在负权重问题

//时间异质性也算是异质性DID，需要用异质性稳健估计器，下面试试csdid
gen gvar = timing
replace gvar = 0 if timing == .
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(simple) //能算出来一个平均处理效应6.67，并且和6.76最接近！
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(group) //每个组群的处理效应跟我上面手动算的差不多哈哈
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(calendar) //按日历时间的结果，可能不是我们想要的
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(event) //这个结果和上面的reghdfe的结果很接近，基本一样，是我们想要的

*/

gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15"
testparm $leadall //联合检验系数。此处用到了上面reghdfe回归的结果，如果在中间插入csdid，会覆盖掉

//bture指真实系数矩阵
matrix btrue = J(1,30,.)
matrix colnames btrue = $leadall $lagall
qui forvalues l = 1/14 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/15 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+15]=r(mean)
}
matrix list btrue
//创建一个矩阵，它的列对应于某些滞后和领先的变量，并且填充了这些变量的某些特定值（比如0或者某个分组的均值）

coefplot (matrix(btrue[1]), m(Oh)) (ES_TWFE, recast(connect)), drop(_cons) order(relb* rel_base relf*) omitted baselevel vertical ///
    ciopts(recast(rcap)) yline(0, lc(gs0) lp(solid)) ///
    xline(14.5, lc(gs8) lp(dash)) xtitle("相对处理发生时间") ytitle("估计系数") ///
    text(4 6 "事前系数联合检验", place(c)) ///
    text(2 6 "F=0.83 P=0.6256", place(c)) ///
    legend(order(2 "真实系数" 4 "估计系数" ) $brlgd col(1)) ///
    xsize(8) scale(1.3)
gr export "figure/ES_TWFE.png", width(3000) replace
gr export "figure/ES_TWFE.svg",  replace
gr save figure/ES_TWFE.gph, replace

**********************
**       图5        **
**********************
* 单一系数检验和联合检验

* TWFE估计
gr drop _all //删除当前图形窗口中的所有图形元素
use simu_data_DGP01, clear
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_*, a(id time) cluster(id) //这里把-1期当作基期
eststo ES_TWFE1

reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 o.relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base relf_*, a(id time) cluster(id) //这里把-8期当作基期
eststo ES_TWFE2

gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
coefplot ES_TWFE1 (ES_TWFE2, lp(solid)), keep($leadall) omitted baselevel vertical ///
    recast(con) lw(thick) ciopts(recast(rspike) color(%40)) ///
    yline(0, lc(gs0) lp(solid) lw(medthick)) ylab(-2(1)2) ///
    xtitle("相对处理发生时间") ytitle("估计系数")  tit("（a）单一系数显著性", pos(6))  ///
    legend(order(2 "基期 = -1" 4 "基期 = -8") $brlgd) scale(1.2)  name(PTT1)


*- 事前系数联合检验结果的不变性
*--- 分别以-14到-1期为基期进行回归，计算每一个回归的联合检验P值
*--- 结果：无论以哪一期为基期，联合检验的P值均保持不变
local leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
tempvar t P 
gen `t' = _n-15 if _n<=14
gen `P' = .
forvalues i = 14(-1)2 {
    local base_period "relb_`i'"
    local xvar: list leadall - base_period
    reghdfe y `xvar' o.`base_period' relf_*, a(id time) cluster(id)
    testparm `leadall'
    replace `P' = r(p) if `t'==-`i'
}
reghdfe y `xvar' o.`base_period' relf_*, a(id time) cluster(id)
testparm `leadall'
replace `P' = r(p) if `t'==-1
sum `P',d
scatter `P' `t', c(l) ylab(0(0.2)1, format(%6.1f)) xlab(-14/-1) ///
    xtit("基期") ytitle("P值") tit("（b）联合检验显著性", pos(6)) scale(1.2) name(PTT2)

gr combine PTT1 PTT2, xsize(10) scale(1.5)

gr export "figure/ES_preTest.png", width(3000) replace
gr export "figure/ES_preTest.svg",  replace
gr save figure/ES_preTest.gph, replace

**********************
**       图6        **
**********************
* 归并与截断

*** 在[-5,10]期内归并、截断
use simu_data_DGP01, clear
cap drop relb_* rel_base relf_*

gen rel_date_cut = rel_date
local pre_cut  = 5
local post_cut = 10
replace rel_date_cut = -`pre_cut'  if rel_date<-`pre_cut'
replace rel_date_cut = `post_cut' if rel_date>`post_cut'
tab rel_date_cut
//把-5期之后的都改成-5，把10期之后的都改为10

forvalues k = `pre_cut'(-1)2 {
   gen relb_`k' = rel_date_cut == -`k'
   label var relb_`k' "-`k'"
}
gen rel_base = rel_date_cut==-1
label var rel_base "-1"
forvalues k = 0/`post_cut' {
    gen relf_`k' = rel_date_cut == `k'
    label var relf_`k' "`k'"
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // 控制组的相对数量全是0
//这里用了上面的局部宏，这些命令必须与上面的local等一起运行，单独运行会报错

reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id) //归并的结果
eststo ES_bin

reghdfe y relb_* o.rel_base relf_* if inrange(rel_date,-5,10), a(id time) cluster(id) //截断的话操作比较简单，直接写range就好
eststo ES_trim

* 设置真实系数矩阵btrue
gl leadall "relb_5 relb_4 relb_3 relb_2 rel_base"
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 "

matrix btrue = J(1,16,.)
matrix colnames btrue = $leadall $lagall
qui forvalues l = 1/5 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/10 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+6]=r(mean)
}
matrix list btrue

coefplot (matrix(btrue[1]), m(Oh)) ES_bin ES_trim, drop(_cons) order(relb* rel_base relf*) omitted baselevel vertical  ///
    ciopts(recast(rcap)) yline(0, lc(gs0) lp(solid)) ///
    xline(5.5, lc(gs8) lp(dash)) xtitle("相对处理时期") ytitle("估计系数") ///
    legend(order(2 "真实系数" 4 "归并样本 (binned)" 6 "截断样本 (trimmed)") $blgd) ///
    title("（a）事件窗口期[-5,10]", pos(6)) name(BT1)


***在[-10,5]期内归并、截断
use simu_data_DGP01, clear
cap drop relb_* rel_base relf_*

gen rel_date_cut = rel_date
local pre_cut  = 10
local post_cut = 5
replace rel_date_cut = -`pre_cut'  if rel_date<-`pre_cut'
replace rel_date_cut = `post_cut' if rel_date>`post_cut'
tab rel_date_cut

forvalues k = `pre_cut'(-1)2 {
   gen relb_`k' = rel_date_cut == -`k'
   label var relb_`k' "-`k'"
}
gen rel_base = rel_date_cut==-1
label var rel_base "-1"
forvalues k = 0/`post_cut' {
    gen relf_`k' = rel_date_cut == `k'
    label var relf_`k' "`k'"
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // 控制组的相对数量全是0
reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id)
eststo ES_bin

reghdfe y relb_* o.rel_base relf_* if inrange(rel_date,-10,5), a(id time) cluster(id)
eststo ES_trim

gl leadall "relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5"
matrix btrue = J(1,16,.)
matrix colnames btrue = $leadall $lagall
qui forvalues l = 1/10 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/5 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+11]=r(mean)
}
matrix list btrue

coefplot (matrix(btrue[1]), m(Oh)) ES_bin ES_trim, drop(_cons) order(relb* rel_base relf*) omitted baselevel vertical ///
    ciopts(recast(rcap)) yline(0, lc(gs0) lp(solid)) ///
    xline(10.5, lc(gs8) lp(dash)) ylabel(0(3)9) xtitle("相对处理时期") ytitle("估计系数") ///
    legend(order(2 "真实系数" 4 "归并样本 (binned)" 6 "截断样本 (trimmed)") $blgd) ///
    title("（b）事件窗口期[-10,5]", pos(6)) name(BT2)

grc1leg2 BT1 BT2, xsize(10) scale(1.5) labsize(small)

gr export "figure/ES_BinTrim.png", width(3000) replace
gr export "figure/ES_BinTrim.svg", replace
gr save figure/ES_BinTrim.gph, replace
```

### 3.3 存在组群时间趋势的情况

```stata
clear all

**********************
**       图7        **
**********************
use simu_data_DGP02, clear

cap gr drop GT* //这行代码尝试删除所有以 "GT" 开头的图形对象，并且即使没有找到这样命名的图形对象也不会显示错误信息，整个程序会继续执行下去。这通常用于编写脚本时，确保即使某些图形对象不存在时脚本也可以继续无误地运行。
preserve 
collapse (mean) y, by(treat time)
tw  (sc y time if treat==2, c(l) m(o) lp(solid)) ///
    (sc y time if treat==3, c(l) m(s) lp(solid)) ///
    (sc y time if treat==4, c(l) m(t) lp(solid)) ///
    (sc y time if treat==1, c(l) m(d) lp(solid)) ///
    (lfit y time if treat==2&time<5, range(1 20) lc(plb1) lp(shortdash)) ///
    (lfit y time if treat==3&time<10, range(1 20) lc(plr1) lp(shortdash)) ///
    (lfit y time if treat==4&time<15, range(1 20) lc(plg1) lp(shortdash)) , ylabel(0(10)50) ///
    xtitle("时期") ytitle("结果变量Y") ///
    legend(order(1 "组群1（趋势=1t）" 2 "组群2（趋势=0.5t）" 3 "组群3（趋势=0.2t）" 4 "控制组") $blgd col(2)) ///
    tit("（a）模拟数据", pos(6)) scale(1.2) name(GT_data1)
restore

preserve 
    reghdfe y if D==0, a(id time groupFE=i.treat#c.time) cluster(id) //仅回归全部处理前的情况，还固定了组群与时间的交互项
    ereplace groupFESlope1 = mean(groupFESlope1), by(id) //将每个 id 分组内的 groupFESlope1 替换为该分组内 groupFESlope1 的均值。这实际上是在执行一个分组内的均值归一化。就是把那些D=1的观测值也填上上面计算的结果。groupFESlope1其实就是斜率？
    gen grouptrend = time*groupFESlope1 //得到时间趋势
    gen y_hat = y - grouptrend //去除时间趋势
    collapse (mean) y_hat, by(treat time)
    tw  (sc y_hat time if treat==2, c(l) m(oh) lp(dash)) ///
        (sc y_hat time if treat==3, c(l) m(sh) lp(dash)) ///
        (sc y_hat time if treat==4, c(l) m(th) lp(dash)) ///
        (sc y_hat time if treat==1, c(l) m(dh) lp(dash)), ylabel(0(10)35) ///
        xtitle("时期") ytitle("结果变量Y") legend(order(1 "组群1" 2 "组群2 (T*=10, 趋势=0.5t)" 3 "组群3 (T*=15, 趋势=0.2t)" 4 "控制组") $blgd row(2)) ///
        tit("（b）剔除时间趋势", pos(6)) scale(1.2) name(GT_data2)
restore

grc1leg2 GT_data1 GT_data2, xsize(10) scale(1.3)  lr(1) labsize(small)
gr export "figure/ES_GTdata.png", width(3000) replace
gr export "figure/ES_GTdata.svg", replace
gr save figure/ES_GTdata.gph, replace

**********************
**       图8        **
**********************
use simu_data_DGP02, clear

reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id) //直接回归，不控制组群时间趋势，结果很奇怪，处理前后都显著，尽管处理前系数绝对值不大
eststo TWFE

reghdfe y  relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time) cluster(id) //控制了组群时间趋势，处理前系数为负，且绝对值很大，此后绝对值一路转小，到处理后期不显著了
eststo TWFE_wtrend

gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15"
gl lead10 "relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lag10 "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10"

matrix btrue = J(1,30,.)
matrix colnames btrue = $leadall $lagall
qui forvalues l = 1/14 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/15 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+15]=r(mean)
}
matrix list btrue

cap gr drop GT_est*
coefplot (matrix(btrue[1]), msym(Oh)) TWFE TWFE_wtrend, keep($lead10 $lag10) order($lead10 $lag10) omitted baselevel vertical nooffsets ///
    recast(connect) ciopts(recast(rcap)) yline(0, lc(gs8) lp(solid)) ///
    xline(10.5, lc(gs8) lp(dash)) xtitle("相对处理时期") ytitle("估计系数") ///
    legend(order(2 "真实系数" 4 "事件研究法" 6 "控制组别时间趋势") $blgd col(3)) ///
    tit("（a）控制组别时间趋势", pos(6)) scale(1.2) name(GT_est1)

est clear
reghdfe y  relb_14 relb_13 relb_12 relb_11 o.relb_10 relb_9 relb_8 relb_7 relb_6 o.relb_5 relb_4 relb_3 relb_2 rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time) cluster(id)
eststo TWFE_wtrend1
//基期是-10、-5，控制了组群时间趋势，此时的结果与真实系数相差不大。其实只要包含最早的基期和处理前一期，控制时间趋势的话，结果相差不大的，在置信区间内

/*

reghdfe y  o.relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time ) cluster(id) //比如这里，基期是-14和-1，此时的结果与真实系数很接近，且真实系数在估计结果的置信区间内，因此，控制时间趋势并且正确选择基期，是可以得到有效估计的。或者把事前全部omitted也行。不过这对正确把握现实中的冲击生效时间很重要。

*/
reghdfe y  relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 o.relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time) cluster(id) //基期是-1、5，也控制了组群时间趋势，此时的结果与真实系数差得离谱
eststo TWFE_wtrend2

coefplot (matrix(btrue[1]), msym(Oh)) TWFE_wtrend1 TWFE_wtrend2, keep($lead10 $lag10) order($lead10 $lag10) omitted baselevel vertical recast(con) ///
    ciopts(recast(rcap)) yline(0, lc(gs8) lp(solid)) ///
    xline(14.5, lc(gs8) lp(dash)) xtitle("相对处理时期") ytitle("估计系数") ///
    legend(order(2 "真实系数" 4 "基期=(-10, -5)" 6 "基期=(-1, 5)") $blgd col(3)) ///
    tit("（b）更换基期", pos(6)) scale(1.2) name(GT_est2)

gr combine GT_est1 GT_est2, xsize(10) scale(1.3)
gr export "figure/ES_GTest.png", width(3000) replace
gr export "figure/ES_GTest.svg", replace
gr save figure/ES_GTest.gph, replace


**********************
**       表1        **
**********************
* 组别时间趋势系数估计
use simu_data_DGP02, clear
forvalues i = 1/4{
    gen group`i'_time = (treat==`i') * time
}
* 由于组别时间趋势与时间固定效应共线，故以时间趋势为0的控制组（group1）为参照组
* 系数代表各组群的线性时间趋势系数与参照组的差异，由于参照组本身无时间趋势，故系数代表各组本身的线性时间趋势斜率
est clear
reghdfe y group2_time group3_time group4_time, a(id time) cluster(id) //使用全样本估计时间趋势，此时是不准确的
eststo model_aux1
reghdfe y group2_time group3_time group4_time if D==0, a(id time) cluster(id) //使用未处理样本，即D=0的样本，估计时间趋势，此时是准确的
eststo model_aux2
esttab model_aux2 model_aux1, keep(group*) r2 se b(4) star(* 0.10 ** 0.05 *** 0.01) 
/*------------------------------------------
                      (1)             (2)   
                        y               y   
--------------------------------------------
group2_time        1.0421***       1.9330***
                 (0.1556)        (0.0170)   

group3_time        0.5090***       1.1024***
                 (0.0471)        (0.0168)   

group4_time        0.2375***       0.4470***
                 (0.0276)        (0.0173)   
--------------------------------------------
N                    4700            8000   
R-sq                0.785           0.953   
--------------------------------------------*/
* esttab model_aux2 model_aux1 using "table\model_aux.rtf", keep(group*) r2 se b(4) star(* 0.10 ** 0.05 *** 0.01) nogap replace //导出结果


**********************
**       图9        **
**********************
* 正确控制组间时间趋势
*   - detrend
*   - imputation

use simu_data_DGP02, clear
gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15"

*- True ATT
matrix btrue = J(1,30,.)
matrix colnames btrue = $leadall $lagall
qui forvalues l = 1/14 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/15 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+15]=r(mean)
}
matrix list btrue
//真实的处理效果就是，-1期及之前都是0，之后每期+1

*- TWFE event study
reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id) //这里只选择了-1期做基期，是有偏的
eststo TWFE_trend

*- Detrend (Good-man Bacon, 2021)
reghdfe y if D==0, a(id time groupFE=i.treat#c.time) cluster(id)
ereplace groupFESlope1 = mean(groupFESlope1), by(id)
gen grouptrend = time*groupFESlope1
gen y_hat = y - grouptrend //减去了时间趋势
reghdfe y_hat relb_* o.rel_base relf_*, a(id time) cluster(id)
eststo TWFE_detrend

*- Generalized SCM (Liu et al., 2021)
forvalues i = 1/4{
    gen group`i'_time = (treat==`i') * time
}
fect y, treat(D) unit(id) time(time) cov(group1_time group2_time group3_time group4_time) method("fe") se nboots(100) //广义合成控制的结果，也是准确的，怎么感觉这个方法本质上跟去除时间趋势是一样的
matrix fect_results = e(ATTs)
matrix rownames fect_results = relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relb_1 relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11
matrix fect_b = fect_results[4..24,3]  //storing the estimates for later
matrix fect_v = fect_results[4..24,4]
matrix fect = [fect_b , fect_v]'

*- Two-stage DiD (Gardner, 2021)
did2s y, first_stage(i.id i.time i.treat#c.time) second_stage(relb* rel_base relf*) treatment(D) cluster(id)
eststo twostage //两阶段DID的结果最准确，但是居然不用drop掉一期？？

gl lead10 "relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lag10 "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10"
coefplot (matrix(btrue[1]), msym(Oh) recast(scatter))  ///
         (TWFE_trend, m(t)) ///
         (TWFE_detrend, m(s)) ///
         (twostage, m(d)) ///
         (matrix(fect[1]), se(2) m(X)), ///
         keep($lead10 $lag10) omitted baselevel vertical ///
         ciopts(recast(rspike)) yline(0, lc(gs8) lp(solid)) ///
         xline(10.5, lc(gs8) lp(dash)) xtitle("相对处理时期") ytitle("估计系数") ///
         legend(order(2 "真实系数" 4 "事件研究法（TWFE）" 6 "去事前趋势（Goodman-Bacon, 2021）" 8 "两阶段DiD （Gardner, 2022）" 10 "广义合成控制法 （Liu等, 2022）") $tllgd col(1)) ///
         xsize(8)  scale(1.3) 
gr export "figure/ES_GTest3.png", width(3000) replace
gr export "figure/ES_GTest3.svg", replace
gr save figure/ES_GTest3.gph, replace


/*** 错误控制组间趋势的影响
use simu_data_DGP01, clear //导入不存在组间趋势差异的数据
est clear
reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id)
eststo TWFE

reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 o.relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat##c.time) cluster(id)
eststo TWFE_wtrend1

reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 o.relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat##c.time) cluster(id)
eststo TWFE_wtrend2

matrix btrue = J(1,30,.)
matrix colnames btrue = $leadall $lagall
qui forvalues l = 1/14 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/15 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+15]=r(mean)
}
matrix list btrue

coefplot (matrix(btrue[1]), msym(Oh)) TWFE_wtrend1 TWFE_wtrend2, keep($leadall $lagall) order($leadall $lagall) omitted baselevel vertical ///
    ciopts(recast(rcap)) yline(0, lc(gs8) lp(solid)) ///
    xline(14.5, lc(gs8) lp(dash)) xtitle("相对处理时期") ytitle("估计系数") ///
    legend(order(2 "真实系数" 4 "基期=（-5, -1）" 6 "基期=（-1, 5）") $blgd col(3)) xsize(8) scale(1.2)
```

#### 3.4 存在异质性处理效应的情况

```stata
clear all

* 设定glolab
gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base" // 事前全部系数
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15" // 事后全部系数
gl lead10 "relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base" // 事前10期系数
gl lag10 "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10" // 事后10期系数

***********************
**   1.观察原始数据    **
***********************
use simu_data_DGP03, clear

preserve 
collapse (mean) y, by(treat time)
tw  (sc y time if treat==2, c(l) m(O)) ///
    (sc y time if treat==3, c(l) m(S)) ///
    (sc y time if treat==4, c(l) m(T)) ///
    (sc y time if treat==1, c(l) m(D)), ylabel(0(10)30) ///
    legend(order(1 "组群1 (T*=  5, ATT{sub:t}=0.5t)" 2 "组群2 (T*=10, ATT{sub:t}=1t)" 3 "组群3 (T*=15, ATT{sub:t}=2t)" 4 "控制组" ) $blgd col(2)) xtitle("时期") ytitle("结果变量Y") name(HTdata1)
restore

preserve 
collapse (mean) tauit, by(treat rel_date)
tw  (sc tauit rel_date if treat==2, c(l) m(s)) ///
    (sc tauit rel_date if treat==3, c(l) m(t)) ///
    (sc tauit rel_date if treat==4, c(l) m(d)), xlabel(-15(5)15) ///
    xtitle("相对处理时期") ytitle("平均处理效应 (ATT)") ///
    legend(order(1 "组群1 (T*=  5, ATT{sub:t}=0.5t)" 2 "组群2 (T*=10, ATT{sub:t}=1t)" 3 "组群3 (T*=15, ATT{sub:t}=2t)") $blgd col(2)) name(HTdata2)
restore

gr combine HTdata1 HTdata2, xsize(10) scale(1.5)


**********************
**       图10       **
**********************
* Sun & Abraham(2021)权重分解
*   - 手动进行S&A的权重分解
*   - 全部权重结果输出在weightfiles.xlsx文件中
*   - 基期为-1期
use simu_data_DGP03, clear
local b_idc "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15"
* prepare partial out
hdfe `b_idc', absorb(id time) generate(res_)
levelsof timing, local(cohort_list) // missing cohort includes the never treated units
levelsof rel_date, local(rel_time_list) 
* Loop over cohort and relative times
tempname bb bb_w
foreach yy of local cohort_list {
    foreach rr of local rel_time_list { 
    tempvar catt
        qui count if timing == `yy' & rel_date == `rr'
        if r(N) >0 {
            qui gen `catt'  = (timing == `yy') * (rel_date == `rr')
            qui regress `catt' res_*, nocons
            mat `bb_w' = e(b)
            mat `bb_w' = `yy', `rr', `bb_w'
            matrix `bb'  = nullmat(`bb') \ `bb_w'
        }
    }
}
matrix colnames `bb' = "timing" "rel_date" `b_idc'
matrix ES_weights = `bb'
mat list ES_weights
putexcel set "weightfiles", replace 
putexcel A1=matrix(ES_weights), colnames

*- 导入weightfiles.xlsx文件并画图
import excel "weightfiles.xlsx", clear firstrow
local period "relf_3"
keep timing rel_date `period'
reshape wide `period', i(rel_date) j(timing) 

gr bar `period'5 `period'10 `period'15, over(rel_date) ///
    bar(1, color(gs0)) bar(2, color(gs6))  bar(3, color(gs12))  ///
    yline(0, lw(medium)) ///
    ytit("权重") b1tit("相对处理时期") ///
    legend(order(1 "组群1（T*=5）" 2 "组群2（T*=10）" 3 "组群3（T*=15）") col(1) $tllgd)  ysize(3) scale(1.3)

gr export "figure/ES_SAweights.png", width(3000) replace
gr export "figure/ES_SAweights.svg", replace
gr save figure/ES_SAweights.gph, replace

/*- 检查权重分解结果
1.使用S&A提供的stata包进行权重分解和交叉检验
    use simu_data_DGP03.dta,clear
    local b_idc "relf_3" // 设定目标时期
    eventstudyweights relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf*, absorb(i.id i.time) cohort(timing) rel_time(rel_date) saveweights("weights") 
    import excel "weights.xlsx", clear firstrow
    keep `b_idc' timing rel_date
    reshape wide `b_idc', i(rel_date) j(timing)
    egen w_sum = rowtotal(`b_idc'*)
    egen w_sumt = total(w_sum)
    egen w_g = total(w_sum) if rel_date==-2
    egen w_incl = total(w_sum) if inrange(rel_date,-14,-3) | rel_date>=0
    egen w_excl = total(w_sum) if rel_date==-1
    egen w_pretrend = total(w_sum) if rel_date>=0
    sum w_pretrend
    scalar w_c = r(mean)
    local w_c = round(w_c,0.001)
    
    gr bar `b_idc'5 `b_idc'10 `b_idc'15, over(rel_date) ///
        bar(1, color(gs0)) bar(2, color(gs6))  bar(3, color(gs12))  ///
        yline(0, lc(plr1) lw(medium)) ylab(, format(%5.1f)) ///
        ytit("权重") b1tit("相对处理时期") ///
        legend(order(1 "组群1（T*=5）" 2 "组群2（T*=10）" 3 "组群3（T*=15）") col(1) $tllgd)  ysize(3) scale(1.3)

2.手动检查第4期权重
    use simu_data_DGP03, clear
    gen c1_relf_4 = (timing==5)*(rel_date==4)
    gen c2_relf_4 = (timing==10)*(rel_date==4)
    gen c3_relf_4 = (timing==15)*(rel_date==4)

    cap drop *_b
    reghdfe c1_relf_4 relb_* relf_*,a(id time) nocons
    gen c1_relf_4_b = _b[relf_3]
    reghdfe c2_relf_4 relb_* relf_*,a(id time) nocons
    gen c2_relf_4_b = _b[relf_3]
    reghdfe c3_relf_4 relb_* relf_*,a(id time) nocons
    gen c3_relf_4_b = _b[relf_3]

    gr bar (mean) c1_relf_4_b c2_relf_4_b c3_relf_4_b, bargap(100) blabel(bar, format(%6.4f)) ///
        legend(order(1 "组群1" 2 "组群2" 3 "组群3")) ylabel(-0.1(0.05)0.1) ///
        title("各组群第4期ATT对{&beta}{sub:3}的权重")
*/


**********************
**       图11       **
**********************
* 异质性处理效应稳健估计量
*   - 组群-时间ATT估计量
*       - De Chaisemartin & D’Haultfoeuille (2020)
*       - Sun & Abraham (2021)
*       - Callaway & Sant'Anna (2021)
*       - Dube et al.(2023)
*   - 插补法Imputation
*       - Borusyak et al.(2023)
*       - Gardner(2022)
*       - Liu et al.(2022)
*   - 堆叠法 Stacked DID
*       -Cengiz et al.(2019)
use simu_data_DGP03, clear

* true ATT_l
matrix btrue = J(1,21,.)
matrix colnames btrue = relb10 relb9 relb8 relb7 relb6 relb5 relb4 relb3 relb2 relb1 relf0 relf1 relf2 relf3 relf4 relf5 relf6 relf7 relf8 relf9 relf10
qui forvalues l = 1/10 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/10 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+11]=r(mean)
}
matrix list btrue

* TWFE event study
est clear
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_*, a(id time) cluster(id)
eststo TWFE

* Sun & Abraham (2021)
gen never = treat==1
eventstudyinteract y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf_* rel_base, vce(cluster id) absorb(id time) cohort(timing) control_cohort(never) //使用的是eventstudytnteract这个包
matrix sa_b = e(b_iw) // storing the estimates for later
matrix sa_v = e(V_iw)

* Callaway & Sant'Anna (2021)
gen csind = timing
replace csind = 0 if mi(csind)
csdid y, ivar(id) time(time) gvar(csind) notyet agg(event) //csdid
eststo csdid

* Dube et al.(2023) 局部投影DID
xtset id time
cap drop t *_lpdid*
gen t = _n-15 if _n<=30
gen b_lpdid_fe = .
gen se_lpdid_fe = .

forval j =14(-1)2 {
    qui: reghdfe y relb_`j' if (rel_date==-`j' | rel_base==1 & treat!=1) | treat==1, a(id time) cluster(id)    
    qui: replace b_lpdid_fe   =  _b[relb_`j']  if t==-`j'
    qui: replace se_lpdid_fe  = _se[relb_`j']  if t==-`j'
}

forval j =0(1)15 {
    qui: reghdfe y relf_`j' if (rel_date==`j' | rel_base==1 & treat!=1) | treat==1, a(id time) cluster(id) 
    qui: replace b_lpdid_fe   = _b[relf_`j']  if t==`j'
    qui: replace se_lpdid_fe  = _se[relf_`j']  if t==`j'
}
replace  b_lpdid_fe  = 0 if t==-1
replace se_lpdid_fe  = 0 if t==-1
tostring t, replace
replace t = "T" + t
mkmat b_lpdid_fe, mat(lpdid_b) rownames(t) nomissing
mkmat se_lpdid_fe, mat(lpdid_se) rownames(t) nomissing

* Borusyak et al.(2023) 插补法
did_imputation y id time timing, allhorizons  pretrend(10) 
eststo bjs

* Gardner(2022)
did2s y, first_stage(i.id i.time) second_stage(relb* rel_base relf*) treatment(D) cluster(id)
eststo twostage

* Liu et al.(2022)
fect y, treat(D) unit(id) time(time) method("fe") se nboots(30)
matrix fect_results = e(ATTs)
matrix rownames fect_results = relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relb_1 relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11
matrix fect_b = fect_results[4..24,3] // storing the estimates for later
matrix fect_v = fect_results[4..24,4]

* Cengiz et al.(2019) 堆叠法
stackedev y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf_* rel_base, cohort(timing) time(time) never_treat(never) unit_fe(id) clust_unit(id)
eststo stack

* 建议先用event_plot随便画一个图，否则可能报错(原因未知)
event_plot stack, stub_lag(relf_#) stub_lead(relb_#) plottype(scatter) ciplottype(rcap) 

* 画图
* eventplot只支持8个估计结果
* 真实系数+TWFE+6个稳健估计量
event_plot btrue# TWFE sa_b#sa_v csdid lpdid_b#lpdid_se bjs twostage stack, ///
    stub_lag(relf# relf_# relf_# Tp# T# tau# relf_# relf_#) ///
    stub_lead(relb# relb_# relb_# Tm# T-# pre# relb_# relb_#) ///
    plottype(scatter) ciplottype(rspike) ///
    together perturb(-0.35(0.1)0.35) trimlead(10) trimlag(10) noautolegend ///
    graph_opt(xtit("相对处理发生时间") ytitle("估计系数") xlabel(-10(1)10) ylabel(-3(3)9) ///
        legend(order(1 "真实系数" 2 "事件研究法TWFE" 4 "Sun & Abraham（2021）"  ///
                     6 "Callaway & Sant'Anna（2021）" 8 "Dube et al.（2023）" 10 "Borusyak et al.（2022）" ///
                     12 "Gardner（2022）" 14 "Cengiz et al.（2019）") col(2) $tllgd) ///
        xline(-0.5, lcolor(gs8) lp(dash)) yline(0, lcolor(gs0) lp(solid)) ///
        xsize(10) ysize(5) scale(1.3) ///
    ) ///
    lag_opt1(msymbol(Oh) color(plb1))         lag_ci_opt1(color(cranberry)) ///
    lag_opt2(msymbol(o)  color(plr1))         lag_ci_opt2(color(plr1)) ///
    lag_opt3(msymbol(d)  color(navy))         lag_ci_opt3(color(navy)) ///
    lag_opt4(msymbol(t)  color(forest_green)) lag_ci_opt4(color(forest_green)) ///
    lag_opt5(msymbol(s)  color(dkorange))     lag_ci_opt5(color(dkorange)) ///
    lag_opt6(msymbol(th) color(purple))       lag_ci_opt6(color(purple)) ///
    lag_opt7(msymbol(dh) color(plb2))         lag_ci_opt7(color(plb2)) ///
    lag_opt8(msymbol(sh) color(plr2))         lag_ci_opt8(color(plr2)) 

gr export "figure/ES_HTest1.png", width(3000) replace
gr export "figure/ES_HTest1.svg", replace
gr save figure/ES_HTest1.gph, replace

**********************
**       图12       **
**********************
*** 使用未处理样本检验平行趋势
use simu_data_DGP03, clear

* true ATT_l
matrix btrue = J(1,30,.)
matrix colnames btrue = $leadall $lagall
qui forvalues l = 1/14 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/15 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+15]=r(mean)
}
matrix list btrue

* TWFE
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_*, a(id time) cluster(id)
eststo TWFE
testparm $leadall

* TWFE，使用未处理子样本
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base if D==0, a(id time) cluster(id)
eststo TWFE_pre
testparm $leadall


coefplot (matrix(btrue[1]), recast(scatter) msym(Oh) ) (TWFE, m(s) ) (TWFE_pre, m(t)) , keep($leadall) omitted baselevel vertical ///
    recast(con) ciopts(recast(rcap)) yline(0, lc(gs0) lp(solid)) ///
    xline(14, lc(gs8) lp(dash)) ylabel(-6(2)4) xtit("相对处理时期") ytit("估计系数") ///
    legend(order(2 "真实系数" 4 "全样本" 6 "未处理子样本") $blgd) ///
    text(-5 1 "全样本：F=12.78  p=0.00***", size(medium) placement(e)) ///
    text(2.5 1 "子样本：F=0.78  p=0.69", size(medium) placement(e)) scale(1.2)

gr export "figure/ES_HTpretest.png", width(3000) replace
gr export "figure/ES_HTpretest.svg", replace
gr save figure/ES_HTpretest.gph, replace
```

### 3.5 同时存在异质性处理效应与组群时间趋势的情况（估计不准确）

```stata
clear all

**********************
**       图13       **
**********************
use simu_data_DGP04, clear

preserve 
collapse (mean) y y0 y1, by(treat time rel_date)
tw  (sc y time if treat==2, color(plb1) lp(solid) lw(medthick) c(l) m(O)) (line y0 time if treat==2&rel_date>=-1, lc(plb1) lp(dash) lw(thick)) ///
    (sc y time if treat==3, color(plr1) lp(solid) lw(medthick) c(l) m(T)) (line y0 time if treat==3&rel_date>=-1, lc(plr1) lp(dash) lw(thick)) ///
    (sc y time if treat==4, color(plg1) lp(solid) lw(medthick) c(l) m(S)) (line y0 time if treat==4&rel_date>=-1, lc(plg1) lp(dash) lw(thick)) ///
    (sc y time if treat==1, color(ply1) lp(solid) lw(medthick) c(l) m(D)), ///
    ylabel(0(20)80) ///
    legend(order(1 "组群1（T*= 5）" 3 "组群2（T*=10）" 5 "组群3（T*=15）" 7 "控制组" ) $blgd col(2)) xtitle("时期") ytitle("结果变量Y") scale(1.2)
restore
gr export "figure/ES_HTNPdata.png", width(3000) replace
gr export "figure/ES_HTNPdata.svg", replace
gr save figure/ES_HTNPdata.gph, replace

preserve 
collapse (mean) tauit, by(treat rel_date)
tw  (sc tauit rel_date if treat==2, c(l) m(s)) ///
    (sc tauit rel_date if treat==3, c(l) m(t)) ///
    (sc tauit rel_date if treat==4, c(l) m(d)), xlabel(-15(5)15) ///
    xtitle("相对处理时期") ytitle("平均处理效应 (ATT)") ///
    legend(order(1 "组群1 (T*=  5, ATT{sub:t}=0.5t)" 2 "组群2 (T*=10, ATT{sub:t}=1t)" 3 "组群3 (T*=15, ATT{sub:t}=2t)") $tllgd col(1)) 
restore

**********************
**       图14       **
**********************
use simu_data_DGP04, clear
est clear

* true ATT
matrix btrue = J(1,21,.)
matrix colnames btrue = relb10 relb9 relb8 relb7 relb6 relb5 relb4 relb3 relb2 relb1 relf0 relf1 relf2 relf3 relf4 relf5 relf6 relf7 relf8 relf9 relf10
qui forvalues l = 1/10 {
    matrix btrue[1,`l']=0
}
qui forvalues h = 0/10 {
    sum tauit if rel_date==`h'&D==1
    matrix btrue[1,`h'+11]=r(mean)
}
matrix list btrue

* TWFE event study
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_*, a(id time) cluster(id)
eststo TWFE

* Sun & Abraham (2021)
gen never = treat==1
eventstudyinteract y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf_* rel_base, vce(cluster id) absorb(id time) cohort(timing) control_cohort(never)
matrix sa_b = e(b_iw) // storing the estimates for later
matrix sa_v = e(V_iw)

* Callaway & Sant'Anna (2021)
gen csind = timing
replace csind = 0 if mi(csind)
csdid y, ivar(id) time(time) gvar(csind) notyet agg(event)
eststo csdid

* Dube et al.(2023)
xtset id time
cap drop t *_lpdid*
gen t = _n-15 if _n<=30
gen b_lpdid_fe = .
gen se_lpdid_fe = .

forval j =14(-1)2 {
    qui: reghdfe y relb_`j' if (rel_date==-`j' | rel_base==1 & treat!=1) | treat==1, a(id time) cluster(id)    
    replace b_lpdid_fe   =  _b[relb_`j']  if t==-`j'
    replace se_lpdid_fe  = _se[relb_`j']  if t==-`j'
}

forval j =0(1)15 {
    qui: reghdfe y relf_`j' if (rel_date==`j' | rel_base==1 & treat!=1) | treat==1, a(id time) cluster(id) 
    replace b_lpdid_fe   = _b[relf_`j']  if t==`j'
    replace se_lpdid_fe  = _se[relf_`j']  if t==`j'
}
replace  b_lpdid_fe  = 0 if t==-1
replace se_lpdid_fe  = 0 if t==-1
tostring t, replace
replace t = "T" + t
mkmat b_lpdid_fe, mat(lpdid_b) rownames(t) nomissing
mkmat se_lpdid_fe, mat(lpdid_se) rownames(t) nomissing

* Borusyak et al.(2023)
did_imputation y id time timing, allhorizons  pretrend(10) 
eststo bjs

* Gardner(2022)
did2s y, first_stage(i.id i.time) second_stage(relb* rel_base relf*) treatment(D) cluster(id)
eststo twostage

* Liu et al.(2022)
fect y, treat(D) unit(id) time(time) method("fe") se nboots(30)
matrix fect_results = e(ATTs)
matrix rownames fect_results = relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relb_1 relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11
matrix fect_b = fect_results[4..24,3] // storing the estimates for later
matrix fect_v = fect_results[4..24,4]

* Cengiz et al.(2019)
stackedev y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf_* rel_base, cohort(timing) time(time) never_treat(never) unit_fe(id) clust_unit(id)
eststo stack

event_plot stack, stub_lag(relf_#) stub_lead(relb_#) plottype(scatter) ciplottype(rcap) 

event_plot btrue# TWFE sa_b#sa_v csdid lpdid_b#lpdid_se bjs twostage stack, ///
    stub_lag(relf# relf_# relf_# Tp# T# tau# relf_# relf_#) ///
    stub_lead(relb# relb_# relb_# Tm# T-# pre# relb_# relb_#) ///
    plottype(scatter) ciplottype(rspike) ///
    together perturb(-0.35(0.1)0.35) trimlead(10) trimlag(10) noautolegend ///
    graph_opt(xtit("相对处理时期") ytitle("估计系数") xlabel(-10(1)10) ylabel(-5(5)15) ///
        legend(order(1 "真实系数" 2 "事件研究法TWFE" 4 "Sun & Abraham（2021）"  6 "Callaway & Sant'Anna（2021）" 8 "Dube et al.（2023）" 10 "Borusyak et al.（2022）" ///
         12 "Gardner（2022）" 14 "Cengiz et al.（2019）") col(2) $tllgd ) ///
        xline(-0.5, lcolor(gs8) lp(dash)) yline(0, lcolor(gs0) lp(solid)) ///
        xsize(10) ysize(5) scale(1.3) ///
    ) ///
    lag_opt1(msymbol(Oh) color(plb1)) lag_ci_opt1(color(cranberry)) ///
    lag_opt2(msymbol(o) color(plr1)) lag_ci_opt2(color(plr1)) ///
    lag_opt3(msymbol(d) color(navy)) lag_ci_opt3(color(navy)) ///
    lag_opt4(msymbol(t) color(forest_green)) lag_ci_opt4(color(forest_green)) ///
    lag_opt5(msymbol(s) color(dkorange)) lag_ci_opt5(color(dkorange)) ///
    lag_opt6(msymbol(th) color(purple)) lag_ci_opt6(color(purple)) ///
    lag_opt7(msymbol(dh)  color(plb2)) lag_ci_opt7(color(plb2)) ///
    lag_opt8(msymbol(sh)  color(plr2)) lag_ci_opt8(color(plr2)) 
gr export "figure/ES_HTNPest.png", width(3000) replace
gr export "figure/ES_HTNPest.svg", replace
gr save figure/ES_HTNPest.gph, replace
```

### 3.6 原文图1和图4

```stata
* 设定主路径
cd "$root"

clear all

**********************
**       图1        **
**********************
use Currie_2020, clear
tw (line DD year, lw(thick)) (line ES year, lw(thick)), ///
    xlab(2005(5)2020) ylab(0(0.05)0.25, format(%6.2f)) ///
    legend(order(1 "双重差分法" 2 "事件研究法")) ///
    xtitle("") ytitle("占比") subtitle("（a）英文经济学五大刊", pos(6)) scale(1.2) name(top5)

use cntop, clear
keep if year>=2004
gen DD_share = dd/total
gen ES_share = es/total
gen ESPT_share = espt/total
two (line DD_share year, lw(thick)) ///
    (line ES_share year, lw(thick)) ///
    (line ESPT_share year, lw(thick) lp(shortdash)), ///
    xlab(2005(5)2020) ylab(0(0.05)0.25, format(%6.2f)) ///
    legend(order(1 "双重差分法" 2 "事件研究法" 3 "事件研究法+平行趋势") size(medsmall)) ///
    xtitle("") ytitle("占比") subtitle("（b）中文权威期刊", pos(6)) scale(1.2) name(cntop)

grc1leg2 top5 cntop, ytol legendfrom(cntop) xsize(8) scale(1.5)
gr export "figure/topshare.png", width(3000) replace
gr export "figure/topshare.svg",  replace


**********************
**       图4        **
**********************

set seed 20230101
clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* 生成个体固定效应
gen  unit_c     = runiform(0,10) if time==1
egen unit_fe  = mean(unit_c), by(id)

gen     indicator_c = unit_c 
qui sum indicator_c,d
scalar  threshold1   = r(p25)
scalar  threshold2   = r(p50)
scalar  threshold3   = r(p75)
egen    indicator   = mean(indicator_c), by(id)
gen     treat = 1
replace treat = 2 if indicator>threshold1
replace treat = 3 if indicator>threshold2
replace treat = 4 if indicator>threshold3
tab treat, gen(group)

gen timing = .
replace timing = 5 if treat==2
replace timing = 10 if treat==3
replace timing = 15 if treat==4

* 定义潜在结果y0和y1
gen rel_date = time-timing
replace rel_date = 0 if mi(rel_date)
gen post = rel_date>=0
gen group_level = 15*group2 + 10*group3 +5*group4
gen group_trend = 0
egen X_cf = mean(unit_c), by(treat)

gen y0 = group_level + group_trend   + runiform(0,10)
gen y11 = group_level + group_trend   + (5*group2 + 5*group3 + 5*group4)*post + runiform(0,10) // static effect
gen y12 = group_level + group_trend   + (1*group2 + 1*group3 + 1*group4)*post*(rel_date+1) + runiform(0,10) // dynamic effect
gen y13 = group_level + group_trend   + (0.5*group2 + 1*group3 + 2*group4)*post*(rel_date+1) + runiform(0,10) // dynamic effect

* 生成观测样本y 
cap drop y
gen D = 0
replace D = 1 if rel_date>=0&inlist(treat,2,3,4)
gen y1 = (1-D)*y0 + D*y11
gen y2 = (1-D)*y0 + D*y12
gen y3 = (1-D)*y0 + D*y13

preserve 
collapse (mean)  y1 y2 y3 y0, by(treat time)
tw  (line y1 time if treat==2, lw(thick)) ///
    (line y1 time if treat==3, lw(thick)) ///
    (line y1 time if treat==4, lw(thick)) ///
    (line y1 time if treat==1, lw(thick)), ylabel(0(10)30) ///
    legend(order(1 "组群1（ATT{sub:t}=5）" 2 "组群2（ATT{sub:t}=5）" 3 "组群3（ATT{sub:t}=5）" 4 "控制组") $blgd col(2)) xtitle("") ytitle("结果变量Y")  ///
    tit("（a）同质性处理效应", pos(6)) name(TEA1)
restore

preserve 
collapse (mean)  y1 y2 y3 y0, by(treat time)
tw  (line y2 time if treat==2, lw(thick)) ///
    (line y2 time if treat==3, lw(thick)) ///
    (line y2 time if treat==4, lw(thick)) ///
    (line y2 time if treat==1, lw(thick)), ylabel(0(10)30) ///
    legend(order(1 "组群1（ATT{sub:t}=1t）" 2 "组群2（ATT{sub:t}=1t）" 3 "组群3（ATT{sub:t}=1t）" 4 "控制组") $blgd col(2)) xtitle("") ytitle("结果变量Y")   ///
    tit("（b）同质性处理效应路径", pos(6)) name(TEA2)
restore

preserve 
collapse (mean)  y1 y2 y3 y0, by(treat time)
tw  (line y3 time if treat==2, lw(thick)) ///
    (line y3 time if treat==3, lw(thick)) ///
    (line y3 time if treat==4, lw(thick)) ///
    (line y3 time if treat==1, lw(thick)), ylabel(0(10)30) ///
    legend(order(1 "组群1（ATT{sub:t}=0.5t）" 2 "组群2（ATT{sub:t}=1t）" 3 "组群3（ATT{sub:t}=2t）" 4 "控制组") $blgd col(2)) xtitle("") ytitle("结果变量Y") ///
    tit("（c）异质性处理效应", pos(6)) name(TEA3)
restore

gr combine TEA1 TEA2 TEA3, ysize(4) xsize(12) row(1) scale(1.5)
gr export "figure/ES_TEA.png", width(3000) replace
gr export "figure/ES_TEA.svg", replace
```
