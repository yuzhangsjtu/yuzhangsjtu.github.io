---
title: "JDE — The Long-run Costs of Highly Competitive Exams for Government Jobs"
date: 2024-06-19T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "DID"]
summary: "Preparing for civil service exams may ultimately be an ineffective investment: those who did not pass later had lower income potential, started families later, and were more likely to be unemployed."
---

> Civil service exams are fiercely competitive; preparation requires huge investment, yet landing a position is incredibly difficult. What happens to those who never make it ashore?
>
> Indians love government jobs too! Using data from a hiring freeze in parts of India’s public sector, this paper finds that a decade after the freeze ended, affected cohorts had lower household consumption, reduced earning potential, formed families later, and had higher unemployment. The results suggest that intense exam competition may lead to ultimately **futile exam preparation**.

**Title:** The long-run costs of highly competitive exams for government jobs

**Journal:** *[Journal of Development Economics](https://www.sciencedirect.com/journal/journal-of-development-economics)*

**Author:**

- <u>Kunal Mangal</u>: Listed as an Independent Researcher on this paper. His personal website shows he currently works at Neo.Tax. He received his Ph.D. in Public Policy from the Harvard Kennedy School in 2021, with research interests in labor economics and development economics. Personal website: <u>https://kmangal.github.io/</u>.

**Available online:** 17 June 2024

<br/>

## Introduction

- **Research background**: Globally, about 80% of countries use **merit-based** examination systems to select civil servants. The fierce competition in these exams can, in some cases, help create a more professional and higher-quality bureaucracy; however, this competition can reach extreme levels when public sector employment is significantly more valuable than private sector work. For instance, in India, China, Brazil, and Southern Europe, acceptance rates for these exams are often **below 1%**.
- **Core questions**: Does taking highly selective exams ultimately benefit the vast majority of candidates who are not selected? What are the long-term effects on candidates who take these selective exams? The outcome is uncertain:
  - On one hand, exam preparation may be a form of general human capital investment valuable even outside the public sector.
  - On the other hand, the consequences of spending considerable time preparing for exams without being selected could have long-term negative economic and social scarring effects on candidates.
- **Case study**: This paper uses the partial **hiring freeze** policy (i.e., reduction in externally advertised government jobs) implemented by the state of Tamil Nadu, India, between 2001 and 2006 as a case study. This policy led to an 86% reduction in vacancies in the affected departments. The paper first examines how this shock affected the competitiveness for remaining positions and then tracks the short-term and long-term performance of cohorts exposed to this policy during the freeze period.

## Civil Service Hiring Freeze

#### **Policy Background and Implementation**

- **Hiring freeze period**: From November 2001 to July 2006, the Tamil Nadu government suspended recruitment for most "non-essential posts." Jobs for doctors, police, and teachers were explicitly exempted from the freeze. The government order announcing the freeze did not mention its duration, creating significant **uncertainty** about future recruitment levels.
- **Affected positions**: The freeze mainly impacted non-professional administrative posts in the state civil service (e.g., "clerks" or "junior assistants"). These positions were recruited through "mass recruitment" cycles—filling many vacancies via a single examination. During the freeze, these posts accounted for 80% of all vacancies and 93% of all applications. All positions affected by the hiring freeze were recruited by a single government agency: the Tamil Nadu Public Service Commission (TNPSC).

- **Fiscal crisis**: The reason for the hiring freeze was a state fiscal crisis triggered by a series of civil service pay raises implemented in the late 1990s. Although other states also experienced fiscal crises, Tamil Nadu was the only one to implement such a severe hiring freeze.
- **Freeze effects**: During the freeze, the number of vacancies for affected posts was reduced by 86%. Average annual recruitment fell from 37 cycles pre-freeze to 9 cycles during the freeze. Recruitment frequency remained low after the freeze ended, but the number of open positions recovered to near, or even slightly above, pre-freeze levels. ⬇️The figure below shows the recruiting intensity for positions in Tamil Nadu affected by the hiring freeze, with the vertical red lines indicating the freeze's start and end. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/1-s2.0-S0304387824000804-gr1_lrg.jpg)

#### **Who Was Affected by the Hiring Freeze?**

- **Mainly affected Tamil Nadu residents**: In principle, all Indians can apply for government jobs within Tamil Nadu. In practice, however, the TNPSC received very few applications from outside the state. Therefore, the impact of the hiring freeze was largely confined within Tamil Nadu.
- **Age and education requirements**: The basic requirements for government posts are at least 18 years of age and a minimum education level of Standard 10. Higher-level positions require a university degree or qualifications in specific fields.
- **Application rates**: Application rates vary significantly across different age groups and education levels. University graduates have the highest application rates, which decline with age afterward. This is because most candidates start applying for government jobs immediately after graduation and then gradually give up over time.
- **Affected demographic**: Primarily **young, male university graduates**: Leveraging the finding that college graduates are more likely to have been affected by the freeze, and given low female labor force participation rates, the analysis in this paper primarily focuses on this group.

## Theoretical Mechanism

Theoretically, the impact of a hiring freeze on candidate behavior is ambiguous:

- On one hand, the reduction in vacancies reduces the value of current exam preparation, encouraging candidates to opt for outside options earlier. That is, with many mouths but few cups, candidates are more likely to switch goals and do other things.
- On the other hand, if candidates derive a sufficiently large surplus from preparation, they could compensate for fewer vacancies by studying more to maintain competitiveness for current or future openings. The hiring freeze also gives candidates more time to prepare, allowing greater scope to focus intensely on exams.

The paper constructs a theoretical model describing this situation.

#### **How Do Candidates Decide How Much Time to Invest in Preparation?**

A candidate's decision can be viewed as a dynamic optimization problem. In each period $t$, an individual chooses how much time $s_t$ to devote to exam preparation. Higher values of $s_t$ imply a lower probability of being observed employed. A key feature of the model is that past study efforts influence the current probability of passing competitive examinations. Consequently, current studying decisions depend on expectations about the future.

The candidate's optimization problem can be represented as:

$$
\max_{s_t} \sum_{t=0}^{T} \beta^t E[ u_t(s_t, S_{t-1}) ]
$$

$$
u_t(s_t, S_{t-1}) = p_t(s_t | S_{t-1}, N_t) g - c_t(s_t)
$$

Where $S_{t-1} = (s_0, s_1, \ldots, s_{t-1})$ is the history of previous study efforts; $g$ is the value of a government job; $p_t(.)$ is the candidate's belief function about the selection probability; and $c(s_t)$ is the cost of exam preparation. Assumptions are $p_t(0) = 0$ and $c_t(0) = -w_t$, where $w_t$ is the wage from outside options. Utility is stochastic because the probability of selection depends on a random level of vacancies $N_t$, the realized value of which remains unknown until the beginning of each period.

According to the model, a candidate will continue to prepare as long as the following condition holds:
$$
p_t(s^*_t) g - c_t(s^*_t) + \beta E[V_{t+1}(s^*_t) - V_{t+1}(0)] > w_t
$$
Here, $s^*_t$ is the optimal study effort level, and $V_{t+1}$ is the continuation value of the current investment decision.

#### **Potential Mechanisms**

Under a hiring freeze, the substantial reduction in vacancies makes the effect on exam preparation ambiguous. The paper proposes three potential mechanisms to explain why candidates might *increase* their preparation efforts during the freeze.

**Potential Mechanism #1: Candidates increase effort to compensate for the reduction in vacancies**

- At usual vacancy levels, many candidates may hold relatively confident beliefs about their success probabilities and contribute barely enough study effort to stay competitive.
- With a severe shortage in vacancies, candidates realize their previous effort will likely be insufficient to yield a desirable probability of selection. Marginal candidates — those previously at the cusp of selection — are likely to work harder to meet selection thresholds. Even though they must devote more hours to sustain similar success probabilities, they may likely opt to continue for a civil service posting instead of alternatives.

**Potential Mechanism #2: The hiring freeze disrupts candidates' ability to learn about their own qualifications**

- The freeze did not just reduce career opportunities; it also reduced the frequency of exams. Exams provide candidates feedback regarding their performance, shaping subsequent expectations about future exam-related success relative to outside options. A **lack of feedback** may lead overly optimistic beliefs to persist, encouraging candidates to devote more time to preparation.

**Potential Mechanism #3: Uncertainty over the amount of time the hiatus would last may encourage candidates to persist with preparation**

- Upon encountering the hiring uncertainty, candidates must decide how to behave without knowing when the hiatus would end. If the total hiatus period was known, candidates could potentially skip exams and resume preparation toward the end of the hiatus. However, candidates responding very late to the restoration of recruitment run the risk of remaining uncompetitive among those who maintained closeness relative to the selection threshold throughout the early phases. **Continuous exam preparation** is interpretable as a strategy to maintain competitiveness, the reasonable value offered long as exiting from and reinitiating much closer — competing from behind at re-entry rates that trade off years competing from distance.

Candidates’ responses partly depend instead upon innate (and time-dependent) beliefs determining the selection level at each ratio. Consequentially expected eventualities be explained thoroughly across any earlier cohorts irrespective from market clearing rigid head counts distorted.

## Impact of the Hiring Freeze on Application Behavior

This analyzes likely fully plausible partly differential documentation analyzed documented impact aggregate-level publicly manual annual yearwise standardized scans openly comparably between all TNPSC positions totaling original commission posts drawn via pooled notices filings including announcement, stated intakes summing up. Fully reducing substantially reduced relative counts effectively amounting differently had contributed scaling increasing noticeable partly substantive documented thorough rising ratios observed heavily doubling expected filing particularly concentrating around masses by notified typical posting shown eventually marginally differentially declining freeze normalized apparent shifting noted positioning proportion increasing difference holding ongoing freeze(s); rising competition normal thereafter retreating.

## Post-Focused

Ten-year plus outcomes reveal lasting characteristic divergent lower achieving eventual weaker employment tracking from historic relative later analogous temporary frozen normalized residual scarred demographic statistically ten shifted tracing future marrying path-breaking effects visible largely diverging deeply compensating household senior extensive primarily hard postponed inter-house feedback lasting.

Shifts preferential toward higher backgrounds progressively affecting distribution meaningful selection competitiveness following subsequent altered drastically shifting advantage tending Science while alternate stark lowering observed complement another measurable extreme(s) suggesting replicated converging similarly reproducing polarizing tendency inherently aligned broadly mapped candidate incoming recorded characteristic.

Critical nuance immediate larger implications beyond revealing contrasting worth aligning optimally offset benefits (shifts unambiguity overall equality eventual fairness beneficial fully unqualified final precise) trade-off largely weighing measured permanently indirect invisible far lost outside selections beneficial potentially possibly drawn net cost large unbalanced offset eventual largely challenging cautioning.

Noting paralleling attention suggestive wider drawing shifts inherently insightful.

Stud design econometrics: notably skill relevant identification specifically contributes detailed directly applicable contributing.

Advertisement-dominant villages environment concentration significant heavily reminiscent equivalently most mapping intense high rise pattern typically residual(within-large-works remarkably nearly triple globally prominent comparable analogy worth mapped documenting context providing illustration widespread observation thorough extent reality likewise recorded, sometimes reinforced ongoing reflecting parity conditions mimicking alternate convergences overarching: extremely remotely comparable sharply leading enormous selection dramatic bottleneck frequently observed trending marginal minimal suggestive comparative highlight sharp increasingly hardening competition severe crossing backdrop). Korea mirror illustrations directly significantly recurring alternative display analogues perfectly direct reflected.

Originally documented source mapping author-written slightly note essential retrieve careful direct.

K. Mangal (2024), 'long horizon high competition exam costs along economically rational provision path evolving temporally over altering professional ambitions decade beyond large hiring-scale: tracking costly misallocations'. Main definitive flagship peer DOE sourced reference linking identically as version formal record permanently last archive digital placement complement final scientific https matching inclusive linked. Final publishing illustration permanent associated screen grab showcase directly fully identifiable: *above illustrated capturing final linked exact replicata arch compatible alongside electronic*.)

- Direct exactly as open viewing final verified edition: none replaced missing incorrectly perm. ident /v identical illustrated link ident. perfect.! missing checked check placing identidentical post open reproduce transparent logical preserving.
