---
title: "Watch Out for Possible Traps in Causal Inference"
date: 2020-04-23T23:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["Notes", "Causal Inference", "Quasi-experimental Methods", "Property Tax"]
summary: "Quasi-experimental methods have strict assumptions and testing procedures; rigorous research design is needed to avoid potential traps."
---

#### 1. Introduction

If the ultimate destination of the social disciplines is to become social science, then their empirical research must undergo a "credibility revolution" <a href="#" title="Angrist J D, Pischke J S. The credibility revolution in empirical economics: How better research design is taking the con out of econometrics[J]. Journal of economic perspectives, 2010, 24(2): 3-30."><sup>[1]</sup></a> — that is, in terms of research paradigm, and especially in policy effect evaluation studies, they must move closer to the experimental methods of the natural sciences. However, due to ethical requirements and the limitations of research design, it is very difficult for us to rigorously select a treatment group and a control group for controlled experiments; in most cases, we can only use observational data rather than experimental data for causal inference. In order to approximate the gold standard of the "large-sample randomized double-blind controlled trial," researchers in the social disciplines (especially economics) have, based on the potential outcomes framework, developed a series of "quasi-experimental methods" for causal inference, mainly matching methods, difference-in-differences, synthetic control, and regression discontinuity design <a href="#" title="赵西亮. 基本有用的计量经济学: 北京大学出版社, 2017."><sup>[2]</sup></a>.

Following the basic trajectory of academic production — "foreign theory → foreign verification → domestic introduction → domestic verification" — quasi-experimental methods have become increasingly popular domestically. And as the acceptance of paid knowledge content has grown ever higher, we can often find, on the article pages of certain WeChat public accounts, eye-catching, anxiety-manufacturing-machine-style titles; scrolling down, one discovers they are promotions for training courses on method X, with the teaching of quasi-experimental methods being an important part of the content. However, these methods come with stringent assumptions and testing procedures, and using them requires identifying possible causal traps.

Now let me return to my old line of work and, based on a case of policy effect evaluation in the real estate field, point out the possible causal inference traps within it.

#### 2. Case Illustration

The discussion of levying a property tax and its potential policy effects is in a state of contending viewpoints in the Mainland; with Shanghai and Chongqing becoming the two pilot cities for property tax levying in 2011, the related discussion gained an experimental foothold. The case selected in this article focuses on the impact of property tax on industrial relocation <a href="#" title="刘友金,曾小明.房产税对产业转移的影响:来自重庆和上海的经验证据[J].中国工业经济,2018(11):98-116."><sup>[3]</sup></a>, with the authors primarily using the synthetic control method to analyze this complex effect.

(1) Gaps & Issues

Existing research has noted the impact of housing price increases on industrial relocation. Specifically:

One view holds that:

> Housing price increases drive inter-regional industrial relocation. Rabe and Taylor (2012), Murphy et al. (2006), and others argue that rising housing prices suppress labor inflows and increase the real cost burden borne by firms, producing a crowding-out effect on non-real-estate industries and thereby triggering industrial relocation. Gao Bo et al. (2012) found that, with other conditions such as inter-regional relative wages and transportation costs held constant, a rise in a city's relative housing prices will drive low-value-added industries in Eastern and Central cities to relocate outward, while high-end manufacturing and the tertiary sector develop correspondingly. Shao Ting and Fan Jianyong (2010) argued that excessively rapid housing price appreciation in large cities was an important reason for manufacturing industry relocation in the Yangtze River Delta region.

Another view holds that:

> There is an "inverted U-shaped" relationship between the impact of rising housing prices and industrial relocation. A moderate rise in housing prices promotes the development of the secondary and tertiary sectors through agglomeration effects, while excessively high housing prices produce a crowding-out effect on the secondary sector, suppressing its employment and output, but are positively correlated with the employment and output of the tertiary sector (Xi Yanling, 2013). Chen Xiao and Zhang Wenjie (2017) reached similar conclusions, holding that the impact of housing prices on industrial relocation has an "inverted U-shaped" relationship: only when relative housing prices exceed a certain critical value will they produce a crowding-out effect on secondary sector employment, while having a promoting effect on tertiary sector employment and output.

The above research conclusions are not consistent, and they do not directly involve the discussion of the role of property tax on industrial relocation, whereas property tax is closely related to firms' production costs and their investment decisions.

Theoretically, the impact of property tax policy on industrial relocation operates mainly through two channels:

Property tax affects firms' production costs:

> Property tax, by lowering firms' production costs, promotes the relocation of industry into the local area. A firm's production costs include three aspects: labor costs, land costs, and credit costs. In terms of labor use, housing prices affect labor mobility — for example, driving away low-end labor and turning mid-to-high-skill labor into "mortgage slaves" — thereby changing the firm's labor structure and affecting firm innovation. In terms of land use, evidently, excessively high housing prices will push up the city's overall land price level, and the firm's land costs will rise accordingly. In terms of capital costs, because the excessive prosperity of the real estate industry reduces the credit funds flowing to the real economy, the cost of capital for other industries rises somewhat. On this basis, local firms will seek lower-cost space, triggering industrial relocation outward. Property tax, however, can increase the holding costs and maintenance costs of homeowners, reduce the housing vacancy rate and increase supply, suppress housing prices and stabilize land prices, and thereby ease the relocation pressure on firms.

Property tax affects firms' investment orientation:

> Property tax, by affecting firms' investment orientation, induces capital to flow toward the productive sector. When housing prices rise irrationally, local firms will tend to shift their investment direction toward the real estate industry and reduce productive investment, which at the regional level manifests as a reduction in the relative output value or relative employment of the real economy represented by manufacturing. Property tax, by regulating housing prices, can reduce bubbles in the real estate market and lower resource misallocation. Unwilling to face the high cost of entering the real estate industry, firms will invest more capital in the real economy.

In summary, the impact of property tax on industrial change manifests at two levels: inter-regional industrial relocation and intra-regional industrial structure adjustment.

The research questions this article needs to analyze are:

- Whether property tax policy has an impact on industrial relocation
- How the impact on industrial relocation differs across different policy designs and their different implementation conditions

(2) Data & methodology

The research design of the original article is as follows:

![image-20200423191928778](/img/image-20200423191928778.png)

![image-20200423192012884](/img/image-20200423192012884.png)

![image-20200423192056896](/img/image-20200423192056896.png)

Specifically: the empirical goal of the article is to use a weighted average of other cities to simulate the industrial relocation situation that the property-tax-implementing cities would have had if they had not levied the property tax, and then compare this with the actual industrial relocation situation after the property tax was levied, in order to estimate the impact of property tax levying on industrial relocation. The authors selected the 35 large and medium-sized cities designated by the National Bureau of Statistics as the sample, with Shanghai and Chongqing as the treatment group and the remaining 33 cities as the control group.

Indicators: The article's explained variables are changes in industry and employment. Drawing on the practices of predecessors, relative output value and relative employment rate are used to measure changes in industrial relocation, obtained respectively by dividing the output value or number of employees in the city's industry and services (the tertiary sector) by the average of all sample cities. As many control variables as possible were selected, including relative wages, GDP per capita, the share of fiscal expenditure in GDP, population density, year-end deposit balances of financial institutions, the number of hospital and health center beds, and the number of international internet users. Among these, relative wages represent the firm's labor costs; GDP per capita is used to represent the city's labor productivity; the share of fiscal expenditure in GDP indicates the government's degree of intervention in the market; population density represents the agglomeration effect generated by the city; and year-end deposit balances of financial institutions, the number of hospital and health center beds, and the number of international internet users respectively represent the city's financial situation, medical and health situation, and information infrastructure situation.

Data sources: successive years of the China City Statistical Yearbook and the website of the National Bureau of Statistics.

(3) Results & Conclusions

![image-20200423193004542](/img/image-20200423193004542.png)

![image-20200423193025762](/img/image-20200423193025762.png)

- Levying a property tax of a certain intensity in Chongqing — where the housing price level is relatively low and which is in the mid-stage of industrialization — has a "growth-promoting effect" on both the relative output value and the relative employment rate of industry and services. This "growth-promoting effect" is statistically significant and persistent over time, overall manifesting as effectively promoting industrial inflow;
- Levying a property tax of relatively low intensity in Shanghai — where housing prices are already very high and which is in the late stage of industrialization — instead reduced the relative output value of industry and services, increased the relative employment rate of services, and did not change the already-formed pattern of industrial outflow, but also did not achieve the ideal expectation of "emptying the cage to change the birds."

(4) Robustness checks

The authors conducted robustness checks, placebo tests, and tests for interference from other exogenous shocks; the results were robust, exhibited no placebo effect, and ruled out interference from other exogenous shocks.

The specific article can be found at:

> 刘友金,曾小明.房产税对产业转移的影响:来自重庆和上海的经验证据[J].中国工业经济,2018(11):98-116.

#### 3. Analysis of Possible Traps — The Long-Term Placement of Policy

(1) Is the impact of property tax on housing prices certain?

The core theory of the article is: property tax affects housing prices, which in turn affects industrial change.

![image-20200423194819055](/img/image-20200423194819055.png)

From the perspective of the causal pathway, **the certain dampening effect of property tax on housing prices** is the premise of the entire article, yet there are many doubts in the outside world about this premise itself.

What if property tax cannot effectively regulate housing prices?

![image-20200423201805969](/img/image-20200423201805969.png)

Out of technical necessity, the authors cited in the article two pieces of literature in which property tax has a suppressing effect on housing prices, but chose to avoid research conclusions that contradict this — for example, that the suppressing effect of property tax on housing prices is limited and that expectations have a greater effect on housing prices than property tax does (Kuang Weida et al., 2012), and that levying a property tax can reduce housing prices in the short term but may push up housing prices in the long-term future (Wang Min et al., 2013).

The above research on the impact of property tax on housing prices (including the literature cited by the authors) was basically completed before 2013, within the short-term effect of the policy. Looking back at this research in 2020, one may discover some problems with the existing research.

For the Chongqing sample, this article proposes:

**The short-term suppressing effect of the Chongqing property tax pilot on local housing prices is a proxy for the effect of the leader's identity characteristics**

That is, what truly suppressed housing prices in the short term was not the property tax but the region's chief administrator. Let us look at a chart:

![image-20200423202910621](/img/image-20200423202910621.png)

- From 2010, Mr. Huang Qifan began to serve as the top official of Chongqing's administrative organ
- From 2011, Chongqing launched the property tax levying pilot
- From 2010 to 2016, Chongqing's average housing price rose by 13.8%
- From 2010 to 2016, the property tax was in effect and Mr. Huang Qifan was **in office**
- From 2017 to early 2020, Chongqing's average housing price rose by 52.8%
- From 2017 to early 2020, the property tax was in effect and Mr. Huang Qifan had **left office**

Theoretical interpretation:

- The identity characteristics of leaders have already been the subject of much research in the management field, such as the identities of listed-company executives and their political connections, their impact on fiscal and tax matters, and so on
- Mr. Huang Qifan once served as Deputy Director of the Financial and Economic Affairs Committee of the National People's Congress; he has a deep grounding in economic theory, and his identity characteristics are distinctive compared with the leaders of other cities
- During Mr. Huang Qifan's tenure, the land ticket (地票) system was further developed, and the government simultaneously adopted many measures to regulate land prices and housing prices, such as raising the threshold for real estate firms to enter Chongqing and limiting the number of real estate firms
- After Mr. Huang Qifan left office, the actual implementation of the relevant policies changed

In summary, during Mr. Huang Qifan's tenure, owing to the leader's identity effect, Chongqing implemented a package of land-price-control and housing-price-limiting policies (including the property tax levying pilot), and Chongqing's average housing price fluctuated relatively little; just three years after Mr. Huang Qifan left office, Chongqing's housing prices rebounded sharply, at which point the magnitude of the original property tax's suppressing effect on housing prices is in doubt.

**Equating the single policy of property tax with the package of policies overestimates the suppressing effect of property tax on housing prices.**

Note: In 2015 China's stock market went through a roller-coaster ride; when the trough arrived, liquidity temporarily exited the stock market and moved into real estate. From 2015 to 2016, most second-tier cities nationwide saw a round of soaring housing prices. External changes will increase the complexity of the impact of property tax and the leader's identity on housing prices.

(2) **Doubts about the synthetic control process**

1. **The quantity of synthetic materials**

The authors believe that the synthetic control method used in the article, which constructs the control object based on multiple samples with structures similar to the treatment group, can reduce subjective error. Here "multiple" means two or three; in this case, before the policy time point the synthetic series easily conforms to the data trend of the treatment object, but because the synthetic materials are few and have large variability, after the policy pilot it is easy for the synthetic object and the treatment object to diverge in trend. Synthesis with few samples is naturally favorable to the interpretation of a treatment effect.

![image-20200423205417521](/img/image-20200423205417521.png)

2. **Doubts about the synthesis process**

Taking Figure 1(a) of the article as an example, the authors selected the following variables to synthesize the relative gross industrial output value of the virtual Chongqing:

![image-20200423210259574](/img/image-20200423210259574.png)

The authors mention that the weights used to construct the treatment-object sample are selected by the program and are relatively objective. This is indeed true, but the selection of variables in the synthesis is in fact a subjective operation — for example, one may artificially delete some variables to change the synthesis result.

![image-20200423210846348](/img/image-20200423210846348.png)

After deleting the three variables "industrial relative employment rate (2006), industrial relative employment rate (2008), industrial relative employment rate (2010)," the synthesis result was found to worsen, indicating that one can adjust the synthesis result by changing the variables used for synthesis.

> In fact, adding the lagged term of variable X would substantially improve the synthesis result.

3. **Doubts about the effectiveness of the placebo test**

When the synthetic materials for the synthetic object are few and have large variability, and when the combination of variables used for synthesis can be subjectively changed during the synthesis process, the passing of the placebo test seems inevitable.

#### 4. Summary

Based solely on the text and the procedural process, this article raises possible doubts about this case; doubts do not equal negation.

For doubts of this kind, extending the policy period of the evaluation object may yield diametrically opposite conclusions.

DID and RDD among the quasi-experimental methods likewise have similar causal inference traps — for example, redistribution effects will overestimate policy effects, and spillover effects will cause policy effects to be underestimated <a href="#" title="范子英.如何科学评估经济政策的效应?[J].财经智库,2018,3(03):42-64+142-143."><sup>[4]</sup></a>. Relevant excerpts are as follows:

![image-20200423212047842](/img/image-20200423212047842.png)

![image-20200423212103842](/img/image-20200423212103842.png)

![image-20200423212117148](/img/image-20200423212117148.png)

![image-20200423212133308](/img/image-20200423212133308.png)



**References**

[1] Angrist J D, Pischke J S. The credibility revolution in empirical economics: How better research design is taking the con out of econometrics[J]. Journal of economic perspectives, 2010, 24(2): 3-30.

[2] 赵西亮. 基本有用的计量经济学: 北京大学出版社, 2017.

[3] 刘友金,曾小明.房产税对产业转移的影响:来自重庆和上海的经验证据[J].中国工业经济,2018(11):98-116.

[4] 范子英.如何科学评估经济政策的效应?[J].财经智库,2018,3(03):42-64+142-143.
