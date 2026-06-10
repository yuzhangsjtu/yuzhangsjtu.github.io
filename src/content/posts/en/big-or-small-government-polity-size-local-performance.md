---
title: "AER — Big or small government? Polity size and local government performance"
date: 2024-08-26T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Smaller local governments deliver more efficient and equitable public services."
---

> Which is better, a big government or a small government? This is a classic question.
>
> This study employs a regression discontinuity design, exploiting a special rule in the Indian state of Uttar Pradesh: according to the most recent decennial census, villages whose population exceeds 1,000 are constituted as an independent village-level government unit. By comparing villages near the 1,000 population threshold, the authors estimate the impact of polity size on public service delivery and find that reducing polity size significantly improves the quality of public service provision, especially evident in education, infrastructure construction, and the implementation of welfare programs. Smaller polities not only increase citizen participation and the quality of leaders, but also effectively reduce corruption and resource waste.

**Title:** Polity size and local government performance: evidence from India

**Journal:** *American Economic Review*

**Authors:**

- <u>Veda Narasimhan</u>: She is an Assistant Professor at NYU-Abu Dhabi, working on applied microeconomic topics with a focus on political economy, economic development, and growth.
- <u>Jeffrey Weaver</u>: He is an assistant professor in the economics department at the University of Southern California (USC) and works on a range of topics in development economics, political economy, and labor economics.

**Publication Date:** August 2024

<br/>

## Introduction

#### **The Debate on Government Size**

Developing countries exhibit a political trend toward local government decentralization. In the process of decentralization, polity size (i.e., the size of local government units) is a core factor and may be an important determinant of local government performance.

✅**Advantages of Small Government**

- **Meet Heterogeneous Needs**: Small local governments can better meet the heterogeneous needs of residents (Oates, 1972);
- **Incentivize Public Goods Provision through Competition and Benchmarking**: Competition among small polities can incentivize the provision of public services (Tiebout, 1956; Besley and Case, 1995);
- **Reduce Conflict and Enhance Accountability**: Small polities may be more homogeneous, thereby reducing internal conflict; at the same time, it is easier to hold leaders accountable because monitoring them is simpler (Mansuri and Rao, 2012; Seabright, 1996).

❌**Disadvantages of Small Government**: Prone to elite capture, unable to achieve economies of scale, and unable to internalize externalities.

Furthermore, large governments also imply a greater potential pool of political talent and greater competition among participants, thus imposing greater performance pressure and **incentives** on leaders.

Based on the above theory and background, the researchers pose a core research question: **How does polity size affect the performance of local governments**? Specifically, the paper focuses on how the size of local government units affects the provision of public services in the context of Uttar Pradesh, India.

The paper uses the rules for delimiting village governments in Uttar Pradesh, which stipulate the division of village government units based on population size, providing an opportunity for a natural experiment. The results show that individuals assigned to local governments with smaller populations enjoy better access to public goods.

#### **Contributions of This Research**

- **Provides new estimates of the causal effect of polity size on government performance**: Because it is difficult to find a plausibly exogenous source of variation in the size of political units, most work on optimal government size is theoretical. The most relevant empirical studies use DID methods to examine the consequences of municipality or district splits or mergers. This paper extends this literature by measuring the specific impact of polity size, not just the **average effect** of mergers or splits. This provides more actionable guidance for the design of local governments.
- **Supplements Theoretical Literature on Political Decentralization**: Discovers suggestive evidence supporting the idea that smaller local governments can increase political participation and better align political incentives;
- **Enriches the literature on the relationship between local government design and public goods provision in developing countries**: A growing body of literature explores various aspects of local government design, such as democratization, identity of representatives, and technical solutions to governance problems. This study supplements this work by examining polity size. A key characteristic of polity size reform is that **it requires very little state capacity to implement**, making it readily implementable even in a low-capacity country like India.

## Background on Village Governments in India

**Origin and Development**

- **Village Governments** (Gram Panchayat, GP) have existed in rural areas of India for several centuries, with roots tracing back to the pre-modern period.
- In the early years after independence, various Indian states gradually enacted laws governing the administration of Gram Panchayats. For several decades post-independence, Gram Panchayats in most states had limited powers, with decisions typically made at higher levels of government (e.g., block or district level).
- In the 1990s, India passed the 73rd Constitutional Amendment, pushing for a comprehensive decentralization reform. It mandated a three-tiered governance system (village, intermediate block/tehsil, and district levels) and gave Gram Panchayats more power and responsibilities, while standardizing the procedure for Gram Panchayat elections. The amendment assigned Gram Panchayats functions in various areas, like **education**, **health**, **drinking water**, etc., but the specific degree of devolved power was left for individual states to decide.

**Governance Structure of Uttar Pradesh**

- Uttar Pradesh is the most populous state in India, with a population of 241 million; if considered an independent country, it would be the world's fifth most populous nation. Economically, Uttar Pradesh is one of India's poorest states, with 38% of the population living below the poverty line.
- **Typical GP Size**: A standard GP comprises 1 to 4 villages, which themselves consist of smaller geographically proximate residential clusters ("hamlets"). Section 11-F of the Uttar Pradesh Panchayat Raj (Amendment) Act, 1994, established that the government would declare " an area comprising a village or group of villages [with a population of one thousand where ever possible] to be a Panchayat area." The Act further specifies that villages correspond to census villages, should not be subdivided, and mandates the use of the most recent census data.
- **Practical Impact of Boundary Delimitation Rules**: Officials following this rule were more likely to assign villages with populations just over 1,000 to their own GP, while villages just below that threshold were grouped with other villages to constitute a GP.

## Data and Methods

#### **Empirical Strategy - RDD**

The study uses a **regression discontinuity design** based on a population threshold to analyze the effect of villages being assigned to smaller Gram Panchayat (GP) units on government performance. Specifically, GP boundary demarcations between 1995 and 2014 were based on the population threshold of 1,000 residents from the 1991 census, while those made after 2015 applied the threshold using data from the 2011 census.

The specific form of the model is as follows:

$$
Y_{v,g} = \gamma_0 + \gamma_1 \cdot {1}(p_{v,g} \geq c) + \gamma_2 \cdot f_1(p_{v,g}) + \gamma_3 \cdot f_2(p_{v,g}) \cdot {1}(p_{v,g} \geq c) + \text{current}
                            national control (RU/FEE) – results 2'
$$

The components of the model are explained as follows:

- $Y_{v,g}$ : represents a performance indicator in village $v$ within its corresponding local government unit $g$, such as public services provided by the local government or infrastructure construction;
- ${1}(p_{v,g} \geq c)$ : is an **indicator function** that equals 1 if the population $p_{v,g}$ of village $v$ is greater than or equal to the cutoff $c$ (which is 1,000 people in this study) , and 0 otherwise. This indicator function captures whether the population exceeds the threshold, which triggers changes in GP delimitation;
- $\gamma_1$ : This is the coefficient of primary interest, representing the causal impact on $Y_{v,g}$ when the village's population $p_{v,g}$ exceeds the cutoff $c$. In other words, it's the impact of the reduction in GP size (resulting from the population exceeding the threshold and leading to a smaller, single-village GP) on local government performance;
- $f_1(p_{v,g})$ and $f_2(p_{v,g})$ : These are functions describing the relationship between population $p_{v,g}$ and the dependent variable. They capture potential non-linear effects of population on performance $Y_{v,g}$ on either side of the cutoff $c$. Here $f_1(p_{v,g})$ might be a linear function for basic residual confounding — and so for political clientelism theory model — and can relate to such relations, similar as sub-work complex relative intensity distributions enabling governments used common infrastructure water costs depending);
power configuration: settings where hegem?
$f_1$;
exp of it.)

- wises sometimes includes level variable


**_Mixing parts could produce broken exp relationships trying dynamic_models._(_population)- > model and interaction);
adding behavior correct implications > common them

```

``` But please let: separate effects matter very cost —. Later applying **standard**) power remains political — variables just using parameters model analysis), for clear computation relation better.
Let the analysis handle:
$f(<pop):
 - > but it captures;

‐ , regression understanding purely models>
 > regression
> F thresholds performance over government); continue text_frag for matching resulting actual →s designs under generating mechanism often to explain quality c value

γ changes− let being continue later function from interaction alone sometimes makes parameters interacting:

\(\begin easier:: estimating − beside time  non obvious natural one changes linearity then reading inference</ nonlinearity… method them changes now output added f runs>.

the analysis remains straightforward now..

 simple…→3 slope values needed = from varying parameter forms showing findings impact): just again description: \(\gamma break). How after threshold behavior deviates− equals: describes given smoothly normally ‘lines’ below link potential setting then introduces changing as model relates.

Therefore this acts for main result connection run direct show
