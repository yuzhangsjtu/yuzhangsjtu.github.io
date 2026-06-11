---
title: "JDE — What Happened to Those Who Failed the Civil Service Exam?"
date: 2024-06-19T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "DID"]
summary: "Preparing for the civil service exam may ultimately be a futile investment: those who did not pass later had lower income potential, started families later, and were more likely to be unemployed."
---

> Civil service exams are fiercely competitive, preparation requires a huge investment, and landing a position is difficult. What happened to those who never made it ashore?
>
> Indians love taking government exams too! Using data from a partial hiring freeze in India's public sector, this paper finds that a decade after the freeze ended, the affected cohort had lower household consumption, reduced income potential, formed families later, and had higher unemployment. The results suggest that intense exam competition may lead to ultimately **futile preparation investment**.

**Title:** The long-run costs of highly competitive exams for government jobs

**Journal:** *[Journal of Development Economics](https://www.sciencedirect.com/journal/journal-of-development-economics)*

**Author:**

- <u>Kunal Mangal</u>: Listed as an Independent Researcher in the byline of this paper. His personal website shows he currently works at Neo.Tax. He received his Ph.D. in Public Policy from the Harvard Kennedy School in 2021, with research interests in labor economics and development economics. Personal website: <u>https://kmangal.github.io/</u>.

**Available online:** 17 June 2024

<br/>

## Introduction

- **Research background**: Globally, about 80% of countries use **merit-based** examination systems to select civil servants. The fierce competition in these exams can, in some cases, help create a more professional and higher-quality bureaucracy; however, this competition can reach extreme levels when public sector employment is significantly more valuable than private sector work. For instance, in India, China, Brazil, and Southern Europe, acceptance rates for these exams are often **below 1%**.
- **Core questions**: Does taking highly selective exams ultimately benefit the vast majority of candidates who cannot be selected? What are the long-term effects on candidates of taking selective exams? The outcome is uncertain:
  - On one hand, exam preparation may be a form of general human capital investment that is also valuable outside the public sector.
  - On the other hand, the consequences of spending a great deal of time preparing for an exam without being selected could produce long-term economic and social scarring effects on candidates.
- **Case study**: This paper uses the partial **hiring freeze** policy (i.e., a reduction in externally advertised government positions) implemented by the state of Tamil Nadu, India, between 2001 and 2006 as a case study. This policy led to an 86% reduction in vacancies in the affected departments. The paper first examines how this shock affected the competitiveness of the remaining positions, and then tracks the short-term and long-term performance of the cohort exposed to this policy during the hiring freeze.

## The Civil Service Hiring Freeze

#### **Policy Background and Implementation**

- **Hiring freeze period**: From November 2001 to July 2006, the Tamil Nadu government suspended recruitment for most "non-essential posts." Positions such as doctors, police, and teachers were explicitly exempted from the freeze. The government order announcing the hiring freeze did not mention how long it would last, which created significant **uncertainty** about future recruitment levels.
- **Affected positions**: The freeze mainly affected non-professional administrative posts in the state civil service system (such as "clerks" or "junior assistants"). These positions were filled through "mass recruitment"—that is, filling a large number of vacancies through a single examination. During the freeze, these posts accounted for 80% of all vacancies and 93% of all applications. All positions affected by the hiring freeze were recruited by a single government agency called the Tamil Nadu Public Service Commission (TNPSC).

- **Fiscal crisis**: The reason for the hiring freeze was a state fiscal crisis, triggered by a series of civil service pay raises implemented in the late 1990s. Although other states also experienced fiscal crises, Tamil Nadu was the only state to implement such a severe hiring freeze policy.
- **Freeze effects**: During the freeze, the number of vacancies for affected positions was reduced by 86%. The average number of recruitments per year fell from 37 before the freeze to 9 during the freeze. After the freeze ended, the number of recruitments remained low, but the number of vacancies recovered to pre-freeze levels, or even slightly above them. ⬇️The figure below shows the recruiting intensity for positions in Tamil Nadu affected by the hiring freeze, with the vertical red lines indicating the start and end of the freeze: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/1-s2.0-S0304387824000804-gr1_lrg.jpg)

#### **Who Was Affected by the Hiring Freeze?**

- **Mainly affected Tamil Nadu**: In principle, all Indians can apply for government positions in Tamil Nadu, but in practice, the TNPSC rarely received applications from outside Tamil Nadu. Therefore, the impact of the hiring freeze was mainly confined to within the state of Tamil Nadu.
- **Age and education requirements**: The basic requirements for government positions are being at least 18 years of age and holding at least a Standard 10 education qualification. Higher-level positions require a university degree or a degree in a specific field.
- **Application rates**: Application rates vary significantly across different age groups and education levels. University graduates have the highest application rate, which gradually declines with age. This is because most candidates begin applying for government positions after graduating from university and then gradually give up over time.
- **Affected demographic**: Primarily **young male university graduates**: Because university graduates are more likely to have been affected by the hiring freeze, and because female labor force participation is low, the analysis in this paper focuses primarily on the group of male university graduates.

## Theoretical Mechanism

Theoretically, the effect of the hiring freeze on candidate behavior is ambiguous:

- On one hand, the reduction in vacancies lowers the value of current exam preparation, encouraging candidates to choose outside options earlier. That is, with many monks but little porridge, candidates are more likely to switch goals and do something else.
- On the other hand, if candidates derive a sufficiently large surplus from exam preparation, they can compensate for the reduction in vacancies by studying more, in order to maintain competitiveness for current or future vacancies. That is, the hiring freeze also gives candidates more time to prepare, allowing them more time to grind away at the exam.

This paper constructs a theoretical model to describe this situation.

#### **How Do Candidates Decide How Much Time to Invest in Preparation?**

A candidate's decision can be viewed as a dynamic optimization problem. In each period $t$, an individual decides how much time $s_t$ to invest in exam preparation. A higher value of $s_t$ means the individual is less likely to be observed as employed. A key feature of the model is that past study effort affects the current probability of passing. Consequently, the current study decision depends on expectations about the future.

The candidate's optimization problem can be represented as:

$$
\max_{s_t} \sum_{t=0}^{T} \beta^t E[ u_t(s_t, S_{t-1}) ]
$$

$$
u_t(s_t, S_{t-1}) = p_t(s_t | S_{t-1}, N_t) g - c_t(s_t)
$$

Where $S_{t-1} = (s_0, s_1, \ldots, s_{t-1})$ is the history of previous study effort; $g$ is the value of a government job; $p_t(.)$ is the function representing the candidate's belief about the selection probability; and $c(s_t)$ is the cost of exam preparation. It is assumed that $p_t(0) = 0$ and $c_t(0) = -w_t$, where $w_t$ is the wage from the outside option. Utility is stochastic because the probability of passing depends on a random level of vacancies $N_t$, whose value is uncertain and is realized only at the beginning of each period.

According to the model, a candidate will continue to prepare for the exam as long as the following condition holds:
$$
p_t(s^*_t) g - c_t(s^*_t) + \beta E[V_{t+1}(s^*_t) - V_{t+1}(0)] > w_t
$$
Where $s^t$ is the optimal study effort level, and $V_{t+1}$ is the future value of the current investment decision.

#### **Potential Mechanisms**

Under a hiring freeze, the effect of the large reduction in vacancies on exam preparation is ambiguous. This paper proposes three potential mechanisms to explain why candidates might increase their exam preparation investment during the freeze.

**Potential Mechanism #1: Candidates compensate for the reduction in vacancies by increasing effort**

- When vacancies are at normal levels, many candidates may feel relatively confident about their chances of success and invest just enough study time to remain competitive.
- When vacancies are reduced, candidates realize that their previous level of effort is no longer sufficient to maintain the expected probability of selection. At this point, candidates who consider themselves to be on the margin of passing may work even harder to reach the selection threshold. Even though they must invest more effort to maintain the same probability of success, they may still prefer to continue exam preparation rather than choose another career.

**Potential Mechanism #2: The hiring freeze disrupts candidates' process of learning about their own ability**

- The hiring freeze not only reduced vacancies but also reduced the frequency of exams. Exams provide candidates with feedback on their performance, which helps them assess their likelihood of future success. A **lack of feedback** may cause overly optimistic beliefs to persist, encouraging candidates to invest more time in exam preparation.

**Potential Mechanism #3: Uncertainty about the duration of the hiring freeze may encourage candidates to persist with preparation**

- Without knowing how long the hiring freeze would last, candidates must decide how to respond. If the duration of the hiring freeze were announced in advance, candidates could temporarily stop studying and resume just before the freeze ended. However, because the hiring freeze could end at any time, candidates who suspended their studies could become uncompetitive once recruitment returned to normal. **Continuing to prepare** can be viewed as a strategy to maintain competitiveness, and the value of this strategy depends on how difficult it is to catch up with other candidates after suspending study.

A candidate's response to the hiring freeze depends on their beliefs about their own likelihood of success. Because most candidates hold **overly optimistic** beliefs about their chances of selection, many candidates may consider themselves marginally competitive in the selection process, causing their responses to the hiring freeze to extend beyond just the change in the number of vacancies.

## The Effect of the Hiring Freeze on Application Behavior

This paper uses TNPSC annual report data from fiscal years 1992/93 to 2009/10. The reports contain the **notification date**, **position type**, **number of vacancies**, and **number of applications** for each recruitment. The sample is restricted to positions affected by the freeze policy, ensuring that these positions had recruitment records both during the freeze and before it. The final sample includes 47 recruitments: 27 before the freeze, 8 exceptional recruitments during the freeze, and 12 after the freeze.

The main outcome variables in this paper are the **number of applications** and **its ratio to vacancies** (i.e., the intensity of competition). Using a simple before-and-after comparison design, a Poisson regression model is used to estimate the effect of the hiring freeze on the number of applications and the intensity of competition.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240619105226872.png)

**The results show**:

- Vacancies fell significantly during the freeze; even among positions that were still notified during the freeze, vacancies were reduced by about 72% (Table 1, Column 1). After the hiring freeze ended, the vacancy rate recovered to a level slightly above normal.
- Despite the reduction in vacancies, the number of applications actually **increased by about 10%** during the freeze (Table 1, Column 2). This result is generally not significant across all position types, but it is highly significant for fiscal year 2005 (the only year during the freeze in which mass recruitment took place), when the number of applications increased by about 100%.
- Because the number of applications increased and vacancies decreased, the **intensity of competition** rose significantly during the freeze. Specifically, the number of applications per vacancy increased by about 390% during the freeze (Table 1, Column 3). After the freeze ended, the intensity of competition declined somewhat but remained higher than pre-freeze levels.

## The Effect of the Hiring Freeze on Contemporaneous Labor Supply

This section analyzes the direct effect of the Tamil Nadu hiring freeze policy on the labor supply of young male university graduates, particularly its effect on employment rates, unemployment rates, and labor force participation rates.

This paper uses data from India's National Sample Survey (NSS), covering all rounds from 1993/94 to 2005/06 (i.e., the 50th to 62nd rounds). By stacking the data from these individual rounds, the paper obtains a repeated cross-sectional dataset.

**Main outcome variable**: employment status. Following the NSS definition, it is divided into three states: **employed**, **unemployed**, and **out of the labor market**. Those out of the labor market are further divided into those currently in education and those out of the labor market for other reasons.

**Empirical strategy**:

- The main analysis sample is male university graduates aged 20 to 24, because this group is the most likely to have been affected by the hiring freeze.
- A difference-in-differences (DID) strategy is used to estimate the causal effect of the hiring freeze on the labor market trajectories of young graduates.
- The synthetic DID estimator proposed by Arkhangelsky et al. (2021) is used to construct a counterfactual control group for Tamil Nadu. This estimator reweights the comparison states and the pre-treatment time periods to satisfy the parallel trends assumption as closely as possible.

**Main results**:

- During the freeze, the employment rate of young male university graduates fell by an average of 7.9 percentage points (Table 2, Column 1); relative to a baseline employment rate of 46%, this effect is equivalent to about -17%. This decline in the employment rate is partly due to increases in the unemployment rate and the rate of exit from the labor market. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240619110331476.png)
- Heterogeneity analysis shows that the effect of the hiring freeze is concentrated mainly among candidates who are fully eligible to take the exam (i.e., candidates **holding a university degree**), with a smaller effect on the ineligible population (the interaction term for the ineligible group is not significant): ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240619110411875.png)
- **Effect on wage rates**: The hiring freeze caused the average daily wage rate of university graduates to rise, with a smaller effect on less-educated workers. These results suggest that a reduction in labor supply drove wages up, rather than a reduction in demand driving wages down. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240619110446967.png)

## The Long-run Effects of the Hiring Freeze

The cohort that prepared for the exam responded to the hiring freeze through **unemployment** (full-time preparation), most likely in order to remain competitive throughout the examination process. This section assesses the long-run consequences of this investment strategy.

**Data source**: This paper uses data from the Consumer Pyramids Household Survey (CPHS), conducted by the Centre for Monitoring Indian Economy (CMIE), which contains all waves of data from January 2014 to December 2019. The CPHS is a panel survey covering about 160,000 households, with follow-ups conducted every four months. This paper focuses on men with a university degree.

**Main outcome variables**: 1) obtaining a government job; 2) occupational choice in the private sector; 3) income and expenditure; 4) household labor supply; 5) family formation.

#### **Empirical Strategy**

This paper uses a DID design to identify the long-run effects by examining the exposure of different age cohorts to the hiring freeze. Because younger cohorts had higher exposure during the hiring freeze, older cohorts are chosen as the control group.

The sample is divided into three groups:

- High-exposure group: aged 17-21 in 2001;
- Low-exposure group: aged 22-26 in 2001;
- Control group: aged 30-35 in 2001.

Because there is no clear age cutoff between the exposure groups and the control group, the sample aged 27-29 in 2001 is dropped to reduce contamination across columns.

The DID method is used to estimate the effect of the hiring freeze on the different exposure groups, with the model taking the form:

$$
y_{it} = \beta_1 \left[ \text{TN}_{s(it)} \times \text{HighExposure}_{c(it)} \right] + \beta_2 \left[ \text{TN}_{s(it)} \times \text{LowExposure}_{c(it)} \right] + \delta_1 \left[ \text{HighExposure}_{c(it)} \right] + \delta_2 \left[ \text{LowExposure}_{c(it)} \right] + \zeta_{s(it)} + \gamma_{c(it)} + \nu_{g(it)} + \epsilon_i
$$
Where $y_{it}$ is the outcome variable for individual $i$ at time $t$; $s(it)$ and $c(it)$ denote the individual's state and cohort, respectively; $\text{TN}_{s(it)}$ is an indicator variable for Tamil Nadu; $\text{HighExposure}_{c(it)}$ and $\text{LowExposure}_{c(it)}$ are indicator variables for the high-exposure group and low-exposure group, respectively; and $\zeta_{s(it)}$, $\gamma_{c(it)}$, and $\nu_{g(it)}$ are state, cohort, and (first and current round) fixed effects, respectively.

#### **Results**

- **Obtaining a government job**: The probability that men in the high-exposure group obtained any government job fell by about 5 percentage points (Table 5, Panel A), but there was no significant change in the probability of obtaining an exempted position. This effect is about 10 times the direct effect of the reduction in vacancies, possibly due to the non-representative sample of the data or a decline in the exam ability of the affected candidates.
- **Occupational choice in the private sector**: Having failed to obtain a government position, affected candidates turned to private sector work, mainly being employed rather than running businesses. However, even a decade after the hiring freeze, there is evidence that the share of men still unemployed increased by about 1.9 percentage points (Table 5, Panel B), indicating that some candidates still failed to successfully enter the labor market over the long run.
- **Income and expenditure**: While no significant effect on individual income was found, household per capita consumption expenditure fell by about 10% (Table 5, Panel C). This indicates that the income potential of the affected group declined, especially during their prime earning years, leading to a decline in the household's overall level of consumption.
- **Household labor supply**: Table 5, Panel D, the labor supply of affected households increased, with older household members in particular delaying retirement to compensate for the income shortfall of younger members. These adjustments mean that households coped with the financial shock by increasing their working hours, even though this was a burden for older members.
- **Family formation**: Table 5, Panel E, men in the high-exposure group formed families later, as shown by a lower probability of becoming a household head and of getting married. This suggests that these men may have delayed marriage and family formation due to employment and income problems. Given the low divorce rate, this evidence strongly implies that these men never married in the first place. (**Forever alone after failing the civil service exam?**)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240619160742047.png)

#### **Who Gets Into the Government, and Who Is Kept Out?**

When finances are tight, government hiring is frozen, and competition intensifies, who is most likely to be kept out?

Table 6 shows that intensified competition favors candidates with a **stronger educational background**. In the Indian context, students are typically sorted into degree programs based on their school performance, with better-performing, more resource-rich students preferring **science** or engineering degrees, while worse-performing, less resource-rich students pursue arts degrees. In the high-exposure cohort, we see an increase in the share of selected candidates from science backgrounds and a decrease in the share from **arts backgrounds**.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240619160840007.png)

The literature also shows that as the selection process becomes increasingly competitive, students with a science background come to dominate among the successful candidates in India's public sector recruitment exams (Dhingra, 2020).

## Conclusion

- The hiring freeze implemented in Tamil Nadu from 2001 to 2006 had a **profound negative effect** on male university graduates in both the short and long run:
  - Despite the reduction in vacancies, the number of applications did not fall but instead increased in some years, leading to a significant rise in the intensity of competition.
  - A decade after the hiring freeze ended, the most severely affected group showed signs of long-term **social and economic scarring**. These men formed families later, contributed less to household consumption, and appeared more likely to remain unemployed, indicating a decline in earning capacity. To make up for the economic shock, the elders in the household **delayed their retirement**.
- This paper shows that restricting public sector recruitment does not encourage more job searching in the private sector, and may even cause investment in exam preparation to double. In this regard, the practice of holding exams regularly and in a timely manner may reduce the marginal underemployment rate.
- The results of this paper raise questions about the value of highly competitive selective exams. The long-term cost to unselected candidates needs to be **weighed** against the potential benefit of improving candidate quality.
- The findings highlight the importance of better understanding candidates' application behavior. Why are candidates willing to tolerate such a low probability of being selected? How much of the decision to prepare full-time is driven by learning? A better model of candidate behavior could help us better predict the effects of future government recruitment policies.

## Extra

- The conclusions of this paper are painful, because we know that China is in a similar situation: the government is downsizing, the market is in decline, the civil service exam craze grows ever hotter, and those preparing for the exam have slim chances of making it ashore; in addition, in China the division between the sciences and the humanities is pronounced, and STEM majors hold an advantage in the job market.
- In my hometown, a small county town in the central region somewhere down the 128th tier, advertisements for civil service exam prep courses are everywhere along the roadsides, a startling sight.
- The research design of this paper is quite clever and worth learning from.
- Some domestic media have reported that India's "national exam" is the hardest in the world. India's civil service exams (such as the Indian Administrative Service exam, IAS) are famous for their fierce competition. Millions of candidates take them each year, and the final acceptance rate is usually below 0.1%.
- In the Noryangjin district of Seoul, South Korea, there is a place known as the "**exam village**," where large numbers of candidates preparing for the civil service exam gather. These candidates rent small apartments and spend months or even years revising, trying to stand out in the fiercely competitive exam. (China has quite a few of these too, surely; many houses near universities are rented out to groups preparing for the civil service or graduate school entrance exams.)

## Original Source

K. Mangal, The long-run costs of highly competitive exams for government jobs. *Journal of Development Economics* (2024), doi: https://doi.org/10.1016/j.jdeveco.2024.103331.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240618194949798.png)
