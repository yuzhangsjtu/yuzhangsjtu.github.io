---
title: "REStat — The Negative Effect of Competitive Roommates? How Competition Shapes Peer Effects"
date: 2024-06-26T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Using the case of a university that randomly assigns roommates, the study finds that competition produces negative effects when two high-achieving students become roommates."
---

> Peer effect, also called the **companion effect**, refers to how an individual's behavior, attitudes, or performance are influenced by the peers or group members around them. Peer pressure easily develops among companions.
>
> By analyzing data on the random dormitory assignment of students at a Chinese university, this paper reveals the negative impact of competition intensity on peer effects, finding that high-ability roommates can adversely affect students' academic performance in highly competitive environments.

**Title:** How Competition Shapes Peer Effects: Evidence from a University in China

**Journal:** *Review of Economics and Statistics*

**Authors:**

- <u>Siyu Chen</u>: Associate Professor and Assistant Dean at the Institute for Economic and Social Research (IESR), Jinan University. She earned her Ph.D. in Economics from the National University of Singapore in 2019. Her research fields include labor economics, environmental economics, finance, and applied microeconomics.
- <u>Zihan Hu</u>: Assistant Professor at Singapore Management University. He earned his Ph.D. in Economics from Cornell University in May 2023.

**Published online:** 3 June 2024

<br/>

## Introduction

As a powerful incentive mechanism, competition is commonly used to improve individuals' achievement and performance. However, in many domains, such as **education**, competition can be counterproductive, because performance depends not only on individual effort but also on cooperation among peers.

Theoretical research shows that competition reduces the tendency of individuals to help one another, and may even lead to sabotage among rivals. For example, Drago and Garvey (1998) propose that competition weakens colleagues' willingness to cooperate; Lazear (1989) points out that competition may trigger sabotage among rivals.

These changes in peer interaction induced by competition are especially harmful in environments that require cooperation. **Higher education** is exactly such a typical environment, where students, while pursuing **high GPAs**, scholarships, and **leadership positions**, usually also need to cooperate with one another. Yet, although competition is pervasive in higher education, research on how competition shapes peer effects and student interaction remains very limited.

This study aims to explore how competition affects students' academic performance by estimating and comparing peer effects under different levels of competition intensity. Owing to the randomness of roommate assignment, this study is able to provide a **causal interpretation** of peer effects across different levels of competition intensity.

## Measuring Competition Intensity

Measuring the intensity of competition among students is challenging. Therefore, this study uses four different dimensions of competition intensity to paint a comprehensive picture of how competition affects peer effects. Along each dimension, the study examines how peer effects change in a more competitive environment, as detailed below:

- **High-ability competitors**: The effect of competition should be more pronounced for high-ability students, because their chances of winning scholarships are greater. Therefore, this study investigates how high-ability roommates affect students of different ability levels. The results show that high-ability roommates produce a negative effect only on high-ability students;
- **Same major-grade**: At this university, students compete for GPA rankings and scholarships within the same major-grade. Consistent with this, the analysis in this study shows that high-ability roommates have a significant negative effect on each other only when two high-ability students belong to the same major-grade. When high-ability roommates belong to different major-grades, the negative effect is not significant;
- **Major-grade size**: At this university, scholarships are competed for within a major-grade, while the peer effects estimated in this paper are confined to the dormitory. The larger the major-grade size, the smaller the incentive to compete within the dormitory, and the weaker the negative peer effect. This heterogeneous effect is observed only among high-ability students;
- **Similarity of academic ability**: When students' academic abilities are close, they are more likely to view each other as competitors. Therefore, this study computes the gap in college entrance exam scores between the best and second-best students within each dormitory. The results find that the smaller the gap, the higher the competition intensity, and the worse the academic performance of the best student.

## Institutional Background and Data

#### **Institutional Background**

The data studied in this paper come from a mid-ranked comprehensive university in China. Located in southern China, the university is characterized by fostering an atmosphere of competition among students. Students at this university are admitted mainly through the national **College Entrance Exam** (CEE), which makes the entrance exam score an important indicator of students' pre-enrollment academic ability. The university has the following features:

- **A scholarship system with an intense competitive atmosphere**: Scholarships are evaluated within each major-grade group and are typically awarded to students ranked in the top 10%-15% by GPA. These scholarships not only provide financial support but also serve an important signaling function in internship referrals and on the job market. Scholarship winners enjoy priority in internship referrals to locally connected companies, and on the job market, a record of winning scholarships is regarded as an important signal that distinguishes students' abilities. As one university president emphasized at a freshman orientation ceremony: "Winning a scholarship is an important signal for setting yourself apart from your peers, especially at a non-elite university like ours."
- **Dormitories are students' main venue for activities**: Most students at this university live in dormitories, and the dormitory environment plays an important role in students' daily life and academic performance. Survey data show that 96% of students live in the dormitory at least five days a week, study an average of 2.4 hours per day in the dormitory, accounting for 69% of total out-of-class study time. Dormitories usually accommodate many people in a small, **shared** space, and this close living environment makes interaction among roommates inevitable.
- **Random roommate assignment**: The university uses computer software to assign roommates randomly. Specifically, freshmen are divided within each major into one to five administrative units (hereafter referred to as "groups"), with each group containing 20 to 50 students. Students within each group are randomly assigned to single-gender dormitories. Due to the limited number of students within a major, about 12.8% of dormitories contain students from different majors.

#### **Data**

- **University transcript data**: Records the grade (on a 100-point scale) for each course taken by each student in each semester. To reduce the influence of course selection on the results, only grades from **required courses** are used to compute students' overall GPA, and GPA is standardized within each major-grade group;
- **College entrance exam scores and personal background**: Includes students' entrance exam scores, whether they took the humanities or science track, year of enrollment, major, gender, place of birth (urban or rural), and pre-enrollment Party membership status. The student's entrance exam score is used as a measure of pre-enrollment academic ability. Since entrance exam scores from different provinces and subject categories are hard to compare directly, students from outside the province where the university is located are excluded, and majors that simultaneously admit humanities and science students (economics and public administration 😂) are further excluded, to ensure the comparability of entrance exam scores;
- **Dormitory assignment data**: Records in detail each student's dormitory arrangement during their time at university. Students typically do not change dormitories throughout their university years, unless an irreconcilable conflict arises. When a conflict occurs, the students involved are randomly reassigned to other dormitories with available beds. In this study's sample, fewer than 3% of students changed dormitories, so the analysis is conducted mainly on the basis of the initial dormitory assignment.

## Main Identification Strategy

Ideally, to accurately measure the effect of competition on peer effects, one would need not only to randomly assign roommates but also to further randomly assign students to environments of different competition intensity, so as to clearly distinguish the effects of different competition intensities on peer effects. However, such a natural experiment, together with a consistent measure of competition intensity, is very difficult to achieve.

Given the impossibility of conducting an ideal natural experiment, the researchers chose to simulate and study the effect of competition on peer effects by analyzing multiple dimensions of competition intensity.

**A. High-ability competitors**

To explore the effect of high-ability roommates on students' academic performance, the authors use the following regression model:
$$
Y_{id} = \beta_1 \text{Top}_i \times Z_{-i}^d + \beta_2 \text{Middle}_i \times Z_{-i}^d + \beta_3 \text{Bottom}_i \times Z_{-i}^d + \gamma_1 \text{Top}_i + \gamma_2 \text{Middle}_i + \theta_1 A_i + \theta_2 X_i + \theta_3 \bar{X}_{-i}^d + \text{Group}_{i} \times \text{Gender}_i + \text{Size}_d + \epsilon_{id}
$$
where:

- $Y_{id}$ is the academic performance of student $i$ during university (e.g., standardized GPA);
- $\text{Top}_i$, $\text{Middle}_i$, $\text{Bottom}_i$ indicate student $i$'s entrance exam score within the major-grade group, classified by quantile into the high, middle, and low groups;
- $Z_{-i}^d$ is the proportion of high-ability roommates of student $i$ in dormitory $d$ (i.e., the proportion of roommates whose entrance exam scores fall in the top tercile of the major-grade group);
- $A_i$ is the percentile rank of student $i$'s entrance exam score, used to measure their pre-enrollment academic ability;
- $X_i$ is student $i$'s demographic characteristics, such as urban-rural background, whether they were a CCP member before enrollment, and dummy variables for place of birth;
- $\bar{X}_{-i}^d$ is the vector of average pre-treatment characteristics of the other roommates in dormitory $d$;
- $\text{Group}_{i} \times \text{Gender}_i$ is the group-gender fixed effect, used to control for the randomness of roommate assignment;
- $\text{Size}_d$ is the dormitory-size fixed effect;
- $\epsilon_{id}$ is the error term.

**B. Same major and same grade**: add an interaction term for major-grade to the regression model in A;

**C. Major-grade size**: add an interaction term for grade size to the regression model in A;

**D. Similarity of academic ability**

To analyze the effect of the similarity of academic ability among students on peer effects, the authors compute the gap in entrance exam scores between the best and second-best students within each dormitory. They use the following regression model:

$$
Y_{id} = \beta_1 \text{Gap}_d \times \text{Best}_i^{d} + \beta_2 \text{Gap}_d \times \text{2ndBest}_i^{d} + \beta_3 \text{Gap}_d \times \text{3rdBest}_i^{d} + \beta_4 \text{Gap}_d \times \text{Others}_i^{d} + \text{Best}_i^{d} + \text{2ndBest}_i^{d} + \text{3rdBest}i^{d} + \theta_1 A_i + \theta_2 X_i + \theta_3 \bar{X}_{-i}^d + \text{Size}_d + \text{Group}_i \times \text{Gender}i + \epsilon_{id}
$$
where:

- $\text{Gap}_d$ is the standardized entrance exam score gap between the best and second-best students in dormitory $d$; a smaller $\text{Gap}_d$ represents higher competition intensity;
- $\text{Best}_i^{d}$, $\text{2ndBest}_i^{d}$, $\text{3rdBest}_i^{d}$, $\text{Others}_i^{d}$ indicate student $i$'s rank in dormitory $d$ according to entrance exam score (first, second, third, or lower);
- The other variables are the same as in the previous model.

## Results

- Among the top 30% of students, the coefficient on the proportion of high-ability roommates is significantly negative. This indicates that for these students, the higher the proportion of high-ability roommates, the lower their academic performance (GPA);![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240628213926086.png)
- For students of different abilities, **peer effects exhibit heterogeneity**. High-ability roommates have a significant negative effect on high-ability students, whereas for middle- and low-ability students, the presence of high-ability roommates does not significantly affect their academic performance. Columns (1)-(3) are students' standardized GPA (required and elective courses), column (4) is GPA ranking, and column (5) is an indicator variable for being ranked in the top 33% by GPA within the major-grade group. As can be seen, the first row (the high-high pairing) is all significantly negative:![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240628214459486.png)
- **Does major matter**? Yes! For the same major-grade group, the proportion of high-ability roommates has a significant negative effect on high-ability students' standardized GPA (coefficient of -0.223, significant at the 1% significance level). When roommates come from different major-grade groups, there is no significant effect. Interestingly, when they are in the same major-grade group, the proportion of high-ability roommates has a significantly positive effect on low-ability students (coefficient of 0.326, significant at the 1% significance level):![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240628214943109.png)
- Major-grade group size plays an important role in moderating the effect of high-ability roommates on high-ability students;
- The larger the ability gap, the better the academic performance of the best student, indicating that they perform better in a less competitive environment (Table 4, column 1).![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240628220200216.png)

## Mechanism Analysis

Through a survey of students enrolled from 2016 to 2018, the researchers delved into the potential mechanisms by which competition produces negative peer effects. The survey collected information on students' interactions with the roommate with the strongest academic performance (called the "strongest roommate"), their attitudes toward competition, their time allocation across study and other activities, and their mental health status. The survey was conducted by university administrators during the spring semester of 2020, with a response rate of 49.1%. Combined with the main-sample criteria, a total of 2,534 students participated in the survey.

At the beginning of the survey, students were asked to identify their strongest roommate, but due to privacy restrictions, the researchers could not ask students to explicitly identify the strongest roommate's name. Therefore, students had to choose one of the following two options: "I know which roommate has the best academic performance" or "I have several roommates with excellent academic performance, and I will randomly choose one of them as the survey subject." As a result, 1,094 of the 2,534 students (43.2%) were uncertain about the identity of their strongest roommate. The data indicate that these uncertain students were more inclined to live in larger dormitories and exhibited less competitive attitudes, so their data may contain measurement error.

The theoretical literature suggests that competition may reduce the motivation to help one another and may even trigger sabotage. To test this hypothesis, the researchers used the same regression model as in Table 4(1), with $Gap_d$ as an inverse indicator of competition intensity, to analyze the frequency of interaction between the top two students in a dormitory. Columns (2)-(7) of Table 4 present the frequency of different types of interaction, including positive interactions (such as discussing studies and helping each other) and negative interactions (such as isolation and disturbance).

The study finds:

- In less competitive environments, the strongest student in the dormitory engages in more daily interaction with their best roommate, more frequently discusses studies with the best roommate, and receives more help from the best roommate;
- At the same time, when competition is lower, the best student is less likely to have conflict with or be disturbed by the best roommate.

## Conclusion

- This study is the first to show that competition affects peer effects through peer interaction. Using four dimensions of competition intensity, the study finds that competition intensifies negative peer effects in the dormitory environment. The follow-up questionnaire survey further shows that in more competitive environments, cooperative behavior among students decreases and unfriendly behavior increases.
- This study has important implications for policymaking in China and in other competitive education systems. Educational institutions can influence peer effects through strategic incentive measures and should consider the impact on peer effects when designing policies. The findings provide cost-effective strategies for improving student performance by reducing direct competition, such as dormitory arrangements that mix majors. Nevertheless, designing the optimal group-assignment policy still requires caution.

## Extra

- I can deeply relate to what it feels like to have a competitive roommate! But thanks to my roommate for grinding their way to an exchange at Harvard, leaving me alone to enjoy a luxurious single room!
- This dataset is quite rare.
- At some schools, choosing a dormitory involves a preference-form step, where students fill in their living habits and roommate preferences, and the system can match students with the same preferences and needs as roommates.

## Original Information

Siyu Chen, Zihan Hu; How Competition Shapes Peer Effects: Evidence from a University in China. *The Review of Economics and Statistics* 2024; doi: https://doi.org/10.1162/rest_a_01471

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240628193836309.png)
