---
title: "AER - Big or Small Government? Polity Size and Local Government Performance"
date: 2024-08-26T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Smaller local governments deliver more efficient and equitable public services."
---

> Which is better, a big government or a small government? This is a classic question.
>
> This study employs a regression discontinuity design, exploiting a special rule in the Indian state of Uttar Pradesh: according to the most recent decennial census, villages whose population exceeds 1,000 are constituted as independent village-level government units. By comparing villages with populations close to 1,000, the authors estimate the impact of polity size on public service provision and find that reducing polity size significantly improves the quality of public service delivery, with especially strong results in education, infrastructure construction, and the implementation of welfare programs. Smaller polities not only increase citizen participation and the quality of leaders, but also effectively reduce corruption and resource waste.

**Title:** Polity size and local government performance: evidence from India

**Journal:** *American Economic Review*

**Authors:**

- <u>Veda Narasimhan</u>: She is an Assistant Professor at NYU-Abu Dhabi, working on applied microeconomic topics with a focus on political economy, economic development, and growth.
- <u>Jeffrey Weaver</u>: He is an assistant professor in the economics department at the University of Southern California (USC) and works on a range of topics in development economics, political economy, and labor economics.

**Publication Date:** August 2024

<br/>

## Introduction

#### **The Debate on Government Size**

Developing countries exhibit a political trend toward decentralization to local governments. In this process of decentralization, polity size (i.e., the size of local government units) is a core factor and may be an important determinant of local government performance.

✅**Advantages of Small Government**

- **Meeting Heterogeneous Needs**: Small local governments can better satisfy the heterogeneous needs of residents (Oates, 1972);
- **Incentivizing Public Goods Provision through Competition and Benchmarking**: Competition among small polities can incentivize the provision of public services (Tiebout, 1956; Besley and Case, 1995);
- **Reducing Conflict and Enhancing Accountability**: Small polities may be more homogeneous, thereby reducing internal conflict; at the same time, because leaders are easier to monitor, it is also easier to hold them accountable (Mansuri and Rao, 2012; Seabright, 1996).

❌**Disadvantages of Small Government**: prone to elite capture, unable to achieve economies of scale, and unable to internalize externalities.

In addition, a large government also implies a larger pool of potential political talent and greater competition among participants, thereby placing greater performance pressure and **incentives** on leaders.

Based on the theory and background above, the researchers pose a core research question: **How does polity size affect the performance of local governments?** Specifically, the paper focuses on how the size of local government units affects the provision of public services in the context of Uttar Pradesh, India.

The paper uses the rules for delimiting village governments in Uttar Pradesh, which stipulate how village government units are formed based on population size, providing an opportunity for a natural experiment. The results show that individuals assigned to local governments with smaller populations enjoy better access to public goods.

#### **Contributions of This Research**

- **Provides new estimates of the causal effect of polity size on government performance**: Because it is difficult to find a plausibly exogenous source of variation in the size of political units, most work on optimal government size has been theoretical. The most relevant empirical studies use DID methods to examine the consequences of municipality or district splits or mergers. This paper extends that literature by measuring the effect of specific polity sizes, rather than just the **average effect** of mergers or splits. This provides more actionable guidance for the establishment of local governments.
- **Complements the theoretical literature on political decentralization**: It finds suggestive evidence that small local governments can increase political participation and better align political incentives;
- **Enriches the literature on the relationship between local government design and public goods provision in developing countries**: A growing body of literature explores various aspects of local government design, such as democratization, the identity of representatives, and technical solutions to governance problems. By studying polity size, this paper complements that literature. One feature of polity size reform is that **it requires very little state capacity to implement**; even in a low-capacity country like India, it is easy to carry out.

## Background on Village Governments in India

**Origins and Development**

- **Village governments** (Gram Panchayat, GP for short) have existed in rural areas of India for several centuries, with origins traceable to the pre-modern period;
- In the early years after independence, India's states gradually enacted laws on the administration of village governments. In the decades following independence, village governments in most states had limited powers, and decisions were usually made at higher levels of government (e.g., block-level or district-level governments);
- In the 1990s, India passed the 73rd Constitutional Amendment, driving a comprehensive decentralization reform. It explicitly established a three-tier governance system (village, sub-district, and district levels), granted village governments more powers and responsibilities, and standardized the rules for village elections. The amendment assigned village governments functions in many areas, such as **education**, **health**, and **drinking water**, but the specific degree of devolution was left to each state to decide.

**Governance Structure of Uttar Pradesh**

- Uttar Pradesh is India's most populous state, with a population of 241 million; if it were an independent country, it would be the world's fifth most populous nation. Economically, Uttar Pradesh is one of India's poorest states, with 38% of the population living below the poverty line.
- **Typical GP Size**: A typical GP comprises 1 to 4 villages, which themselves consist of smaller, geographically proximate residential clusters (called "hamlets"). Section 11-F of the 1994 Amendment to the Uttar Pradesh Panchayat Act stipulated that the government would declare "an area comprising a village or group of villages (with a total population of one thousand wherever possible)" to be a Panchayat area. The Act further specified that villages are villages as defined by the census and should not be subdivided, and it required the use of data from the most recent census.
- **Practical Impact of Boundary Delimitation**: Officials following this rule were more likely to assign a village with a population above 1,000 to a GP of its own, while villages with populations below 1,000 were grouped together with other villages to form a GP.

## Data and Methods

#### **Empirical Strategy - RDD**

The study uses a **regression discontinuity design** based on a population cutoff to analyze the effect on government performance of villages being assigned to smaller village government units (GPs). Specifically, GP delimitations between 1995 and 2014 were based on the 1,000-person population cutoff from the 1991 census, while GP delimitations after 2015 were based on the 2011 census.

The specific form of the model is as follows:

$$
Y_{v,g} = \gamma_0 + \gamma_1 \cdot {1}(p_{v,g} \geq c) + \gamma_2 \cdot f_1(p_{v,g}) + \gamma_3 \cdot f_2(p_{v,g}) \cdot {1}(p_{v,g} \geq c) + \epsilon_{v,g}
$$

The components of the model are explained as follows:

- $Y_{v,g}$: represents a performance indicator for village $v$ and its corresponding village government unit $g$, such as public services provided by the local government, infrastructure construction, and so on;
- ${1}(p_{v,g} \geq c)$: is an **indicator function** that equals 1 when the population $p_{v,g}$ of village $v$ is greater than or equal to a cutoff $c$ (1,000 people in this study), and 0 otherwise. This indicator function captures whether the population exceeds the cutoff, which triggers the change in GP delimitation;
- $\gamma_1$: This is the coefficient of greatest interest. It represents the causal effect on $Y_{v,g}$ when the village population $p_{v,g}$ exceeds the cutoff $c$. In other words, it is the effect on local government performance of reduced GP size (a smaller GP formed because the population exceeds the cutoff);
- $f_1(p_{v,g})$ and $f_2(p_{v,g})$: These are functions describing the relationship between population $p_{v,g}$ and the dependent variable. They capture the potentially nonlinear effects of population on performance $Y_{v,g}$ on either side of the cutoff $c$. Here, $f_1(p_{v,g})$ may be a linear or nonlinear function used to control for the underlying relationship between population and the dependent variable;
- $\gamma_3$: This term is multiplied with $f_2(p_{v,g}) \cdot {1}(p_{v,g} \geq c)$ and captures the nonlinear change at the cutoff $c$. In other words, it indicates how the effect of population on performance changes once the population exceeds the cutoff.

#### **Data**

This paper uses a huge amount of data, including:

- **Indian Census Data**: The study uses data from the 1991, 2001, and 2011 Indian censuses. These census data provide detailed information on village populations and the distribution of infrastructure;
- **Socioeconomic and Caste Census (SECC) Data**: A census conducted in 2012 that covered all households across India, recording the education levels and poverty status of each village;
- **Mission Antyodaya Data**: A program launched by India's central government to improve public services and infrastructure in rural areas. The 2019-2020 data are based primarily on administrative records from various government departments;
- **National Rural Employment Guarantee Scheme (NREGS) Data**: A nationwide employment guarantee program in India that provides work opportunities to the rural poor. The study uses NREGS data from 2016-2020. These data are used to analyze the effect of polity size on the implementation of workfare programs, specifically including the number of NREGS projects completed, work demand, days of work provided, and wage payments;
- **Local Government Financial Data**: The study uses local government financial data from the Panchayati Raj accounting system, covering the annual budgets and expenditures of all village governments in Uttar Pradesh from 2013 to the present;
- **Election and Political Participation Data**: The study collected data on the 2010, 2015, and 2020 village government elections in Uttar Pradesh. These data include each candidate's vote share, educational background, age, gender, and caste. They are used to analyze the effect of polity size on political participation and leader quality. In addition, the study collected attendance data from public village government meetings in 2022-2023 to measure the effect of polity size on citizen participation.

**Integrating Multiple Datasets**

- **Matching Across Datasets**: Most of the datasets are based on village IDs from the 2011 census and can therefore be easily matched across datasets. Where no direct match exists, the study uses fuzzy name matching and population data for further matching, ensuring the consistency and accuracy of the integrated data;
- **Match Rates and Reliability**: Match rates across the datasets generally exceed 95%, and the probability of being matched in each dataset is unrelated to the threshold in the regression discontinuity design, which means that matching issues do not bias the study's results.

## Results and Mechanisms

#### **Regression Results**

- **Educational Infrastructure**: When villages are assigned to smaller polities, their educational infrastructure index increases significantly (by 0.089 standard deviations); educational access is higher in small polities in both the short run and the long run. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240826211939103.png)
- For other infrastructure, such as roads, water supply, household housing quality, toilet construction, and drainage systems, quality is also higher in small polities;
- Using Mission Antyodaya data, the authors analyze the implementation of eight public welfare programs, including food subsidy cards, health insurance, pensions, and housing subsidies. The results show that the public welfare index of small-polity villages increases by 0.088 standard deviations;
- The study further analyzes whether these benefits are better allocated to the people who need them most. The results show that benefit allocation is more precisely targeted in small-polity villages; in particular, for the allocation of food subsidy cards, the correlation between poverty rates and food subsidy card ownership strengthens significantly at the threshold;
- Using NREGS administrative data, the study constructs a workfare index covering work demand, days of work provided, number of projects completed, and wage expenditures. The results show that the workfare index of small-polity villages increases significantly, by 0.16 standard deviations.

#### **Mechanisms**

- **Increased Citizen Participation**: The study finds that smaller polity size significantly increases citizens' political participation. This result is derived from an analysis of the 2015 and 2020 village government elections and indicates that in small polities, citizens are more likely to take part in local elections and in discussions of public affairs;
- **Analysis of Leaders' Backgrounds**: The study also analyzes the personal backgrounds of village government leaders and finds that leaders elected in small polities have fewer criminal records and are more likely to have higher levels of education. This implies that small polities may attract more capable and less corrupt leaders, thereby improving the quality of local government administration;
- **Leaders' Electoral Behavior**: The study further examines leaders' electoral behavior and finds that leaders in small polities respond more actively to citizens' needs, possibly because higher citizen participation places stronger political pressure on them;
- **Reduced Elite Capture**: In theory, smaller polity size could increase the risk of capture by local elites, because small polities are more easily manipulated by a small number of influential individuals or groups. However, the study finds that this risk does not materialize in the context of Uttar Pradesh. The study tests the probability of high-caste and wealthy groups being elected in small polities, and the results show that the influence of high-caste and wealthy groups does not increase significantly in small polities, which means the risk of elite capture is not pronounced in this setting.

## Conclusion

- Since **Plato**, thinkers have debated the optimal size of political jurisdictions. In recent years, public opinion has gradually shifted in favor of smaller polities, but the relationship between polity size and governance outcomes remains theoretically ambiguous. This study finds that smaller polities do indeed deliver better public services;
- Citizen participation, leader selection, and political incentives may all have played a role in the improvement of services. While these findings apply most directly to the design of the local governments that serve millions of people in other North Indian states, these political mechanisms may also generalize to other democracies with similar local government structures.

## Extra

- The amount of data work in this paper is truly enormous! And these data are remarkably hard to come by; it is impressive that such fine-grained village-level data could be obtained.
- I have previously heard and read some opinions on reforming the levels of government in China. Some people argue that the **prefecture-level city tier of administration should now be abolished** in favor of a model in which provinces directly administer counties (省直管县). Since districts and counties are the de facto providers of public services, the existence of the prefecture-level city seems largely unnecessary. It would be better to streamline government staffing.

## Original Paper Information

Narasimhan, Veda, and Jeffrey Weaver. "Polity size and local government performance: evidence from India." *American Economic Review*, Forthcoming. https://www.aeaweb.org/articles?id=10.1257/aer.20221712

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240826162142489.png)
