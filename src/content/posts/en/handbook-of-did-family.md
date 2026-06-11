---
title: "Handbook of DID family"
date: 2023-10-25T21:30:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["DID", "Causal Inference"]
summary: "Articles related to DID, with a focus on practice."
---

This blog post is a record of my study of DID (difference in differences), with an emphasis on **practicality** (mainly because there is too much underlying econometric theory that I don't understand either). I hope to turn it into a practical little handbook, convenient for exchanging ideas with interested peers and for review when needed. As the most popular causal inference empirical design in recent years, the importance of DID needs no further elaboration. In this article, I will give an overview of DID's basic principles, applicable scenarios, and limitations, and introduce its various variants, including staggered DID, DDD, generalized DID, and so on, among which the most important is <mark>**staggered DID**</mark>. At the same time, I will also introduce the various practical software packages I have found. If you find any errors in the text or have other additions, please tell me directly (contact information is on the "[About](https://yuzhangnju.github.io/about/)" page of this blog).

This article mainly references and excerpts content from the "[Lianxianghui](https://www.lianxh.cn/)" website. Thanks to lianxh for their work!

## 1 Canonical DID

### 1.1 The Basic Idea of DID - Canonical DID

> - Framework: potential outcomes causal framework
> - Structure: 2 X 2, [treatment group & control group] X [pre-treatment & post-treatment], i.e., "two groups * two periods." This structure also means the shock is rolled out all at once.
> - Basic assumptions:
>   - Parallel trends assumption (it is held that being parallel before the event makes the counterfactual parallel as well);
>   - No spillover or interaction effects of the policy (SUTVA);
>   - No anticipation effects;
>   - Homogeneous treatment effects.
> - Mandatory tests:
>   - Parallel trends test;
>   - Placebo test.

For example:

> Two cities M and N that are far apart have long had the same trend in economic development, with little economic exchange between them. Starting in a certain year, city M becomes a pilot city for a tax reduction policy, while city N is unaffected. After this, city M's economic growth rate changes, while city N's stays the same. At this point, the difference in economic levels between the two cities after the policy is implemented, minus the difference in economic levels before the policy was implemented, is the policy effect (difference and then difference again, i.e., double difference).

⬇️As shown in the figure below.

- Treatment effect (policy effect) TE = (C-E) - (A-B) = CD
- AD is the counterfactual of AC. Since DE cannot be directly observed, AB is used as a substitute here.

![image-20231025135914225](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231025135914225.png)

Figure 1. Illustration of the difference-in-differences method

### 1.2 The Standard Specification of Canonical DID

From the basic principle of DID, we know that the experimental design of DID must include an event shock and a temporal sequence. Its basic specification is as follows:
$$
y_{it} = \beta_0 + \beta_1 Treat_i + \beta_2 Post_t + \beta_3 Treat_i Post_t + \epsilon_{it} \quad(1)
$$
As shown in equation (1), $yit$ is the outcome variable, $Treat_i$ is the event shock dummy variable, $Post_t$ is the time dummy variable, and $\beta_3$ is the variable we care about, which is the treatment effect. The diagram of this equation is shown in Figure 2.

![Counterfactual, betas](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/CF-1.png)

Figure 2. The meaning of DID coefficients

Table 1. Interpretation of the coefficients of 2X2 DID

|                  | Treatment = 0         | Treatment = 1                               | ***Difference***        |
| ---------------- | --------------------- | ------------------------------------------- | ----------------------- |
| **Post = 0**     | $$ \beta_0 $$         | $$ \beta_0 + \beta_1 $$                     | $$ \beta_1 $$           |
| **Post = 1**     | $$\beta_0 + \beta_2$$ | $$ \beta_0 + \beta_1 + \beta_2 + \beta_3 $$ | $$ \beta_1 + \beta_3 $$ |
| ***Difference*** | $$ \beta_2 $$         | $$ \beta_2 + \beta_3 $$                     | $$ \beta_3 $$           |

### 1.3 The Data Structure of DID

#### 1.3.1 Policy Effect Does Not Change over Time

For the first individual, y receives the intervention in the fifth period, rises, and the trend remains unchanged thereafter.

In fact, whether or not the policy effect changes over time, the treatment effect computed is the average treatment effect ATE.

| id   | year | y    | d    | t    | dt   |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 1    | 3    | 1    | 0    | 0    |
| 1    | 2    | 4    | 1    | 0    | 0    |
| 1    | 3    | 5    | 1    | 0    | 0    |
| 1    | 4    | 6    | 1    | 0    | 0    |
| 1    | 5    | 10   | 1    | 1    | 1    |
| 1    | 6    | 11   | 1    | 1    | 1    |
| 1    | 7    | 12   | 1    | 1    | 1    |
| 1    | 8    | 13   | 1    | 1    | 1    |
| 2    | 1    | 1    | 0    | 0    | 0    |
| 2    | 2    | 2    | 0    | 0    | 0    |
| 2    | 3    | 3    | 0    | 0    | 0    |
| 2    | 4    | 4    | 0    | 0    | 0    |
| 2    | 5    | 5    | 0    | 1    | 0    |
| 2    | 6    | 6    | 0    | 1    | 0    |
| 2    | 7    | 7    | 0    | 1    | 0    |
| 2    | 8    | 8    | 0    | 1    | 0    |

#### 1.3.2 Policy Effect Changes over Time

For the first individual, y receives the intervention in the fifth period, rises, and the trend gradually strengthens thereafter.

| id   | year | y    | d    | t    | dt   |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 1    | 1    | 3    | 1    | 0    | 0    |
| 1    | 2    | 4    | 1    | 0    | 0    |
| 1    | 3    | 5    | 1    | 0    | 0    |
| 1    | 4    | 6    | 1    | 0    | 0    |
| 1    | 5    | 8    | 1    | 1    | 1    |
| 1    | 6    | 11   | 1    | 1    | 1    |
| 1    | 7    | 15   | 1    | 1    | 1    |
| 1    | 8    | 20   | 1    | 1    | 1    |
| 2    | 1    | 1    | 0    | 0    | 0    |
| 2    | 2    | 2    | 0    | 0    | 0    |
| 2    | 3    | 3    | 0    | 0    | 0    |
| 2    | 4    | 4    | 0    | 0    | 0    |
| 2    | 5    | 5    | 0    | 1    | 0    |
| 2    | 6    | 6    | 0    | 1    | 0    |
| 2    | 7    | 7    | 0    | 1    | 0    |
| 2    | 8    | 8    | 0    | 1    | 0    |

### 1.4 Calculating the Treatment Effect

In Stata there are multiple commands that can calculate the treatment effect. Early ones include `diff`; `reg`, `areg`, and `xtreg` also work. The one most commonly used in empirical work is `reghdfe`, whose advantages are fast processing speed and concise output, and it is commonly seen in the major top journals.

Starting from Stata 17, official DID commands have been provided: `didregress` and `xtdidregress`, the latter being suitable for panel data. The advantage of the official commands is the convenience of plotting time trend graphs after the regression.

For the usage and introduction of the commands, see the code at the end of the article.

### 1.5 Parallel Trends Test

Pre-event parallel trends are crucial for causal inference methods based on quasi-experimental designs, because pre-event parallel trends are the most important condition that makes the unobservable counterfactual parallel to the control group.

The parallel trends test generally takes two forms: plotting a **time trend graph** and the **event study** approach (Event study).

#### 1.5.1 Time Trend Graph

Plotting a time trend graph is a relatively crude method, roughly examining the trend changes of the treatment and control groups before and after the shock. If it is a good experimental design, the means of the treatment and control groups should have parallel trends before the event shock, and the treatment group's trend should change after the shock.

The command for drawing the time trend graph can be implemented based on xtdidreg, or it can be computed manually.

#### 1.5.2 Event Study Approach

DID is a double difference, while the event study is a single difference. Using the event study within DID has two benefits:

- First, regression methods can be used to test the most important parallel trends assumption in the difference-in-differences method. Compared with plotting a time trend graph, the benefit is that it can control for the influence of covariates, and the equation form is also more flexible;
- Second, it can more clearly capture how the policy effect changes along the time dimension. Therefore, in papers this part of the test is often also called the Dynamic Effects of the policy or Flexible DID Estimates.

**Note:** This involves the choice of the reference period. Generally one drops the first period or the period just before the policy.

### 1.6 Placebo Test

Regarding the "placebo effect," Wikipedia explains as follows:

> The placebo effect (placebo effect), also known as the dummy-drug effect, the fake-drug effect, or the surrogate-agent effect, refers to the phenomenon in which a patient, although receiving an ineffective treatment, has their symptoms relieved because they "expect" or "believe" the treatment to be effective.

As the proportion of "causal inference methods" used in empirical research keeps rising, more and more articles also conduct placebo tests. The basic principle of the test is similar to the placebo in medicine, that is, using a "fake policy timing or treatment group" for the analysis to test whether a policy effect can still be obtained. If a policy effect is still obtained, this indicates that the policy effect in the baseline regression is not reliable. Furthermore, the economic outcome may be caused by other unobservable factors rather than by the policy of interest.

In empirical research, whether it is a robustness check, a placebo test, or a heterogeneity analysis, the true purpose behind it has only two aspects:

- First, to make the article's narrative stronger and the logic more rigorous;
- Second, to serve causal inference, to make readers believe in the causal effect between the objects of study.

Of course, different causal inference methods have different placebo test methods, which further illustrates that the placebo test serves causal inference. And no matter which causal inference method it is, the idea of its corresponding placebo test can be understood as "constructing a pseudo-policy." However, when applying the placebo test, it should be noted that one must not conduct a placebo test merely for the sake of conducting a placebo test; there must be theoretical logic behind it.

For example, after using the DID method, one randomly constructs treatment groups, simulates 10000 times, and then plots the coefficients or $t$ values in a single graph, in order to tell readers that the identification in the preceding text is reliable.

Based on the basic elements of 2x2 DID (treatment group, control group, pre-event, post-event), an intuitive idea is to let these elements randomly deviate in order to implement the placebo test. Accordingly, the common placebo test methods are:

-  **Changing the time the policy occurs**

  > Use the data from before the policy occurred. "Artificially" set every year prior to the policy implementation other than the first year as the policy implementation year of the treatment group, and then run regressions year by year according to the DID model. When the coefficients of the interaction term in all regressions are insignificant, it means the placebo test is passed, indicating that the average policy effect identified earlier is reliable; otherwise it is unreliable. If there are n years of data before the policy implementation, then you must run the above regression n-1 times. (In effect, this means randomly changing the event of the policy occurrence to a year before the policy occurred.)

-  **Randomly generating the treatment group**

  > By randomly drawing the treatment group, repeating many times, extracting the placebo result coefficients or $t$ values, and then plotting them in a graph, and observing the true policy effect against the placebo results. When the true policy effect is significantly different from the placebo test result, the interference of other random factors on the result can be ruled out.

-  **Replacing the sample**

  > Conducting a placebo test by replacing the sample is fairly similar to the method of randomly generating the treatment group. The difference is that the results of the placebo test method of randomly generating the treatment group are ultimately displayed in a graph, while the results of the replacing-the-sample placebo test are mostly displayed in the form of a table. In actual practice, the replacing-the-sample placebo test does not require repeated simulation, which makes it technically a bit easier, but it is more rigorous in terms of theoretical logic. For example, after a certain policy is promulgated, the ones affected by the policy are the polluting industries; after the causal identification, one can analyze the non-polluting industries to explore whether a policy effect exists (or analyze the polluting industries outside the scope of the policy). If a so-called policy effect still exists for the non-polluting industries, then the preceding analysis is not reliable.

-  **Replacing the variable**

  > Conducting a placebo test by replacing the variable is mainly divided into replacing the explained variable and replacing the explanatory variable. What differs from the robustness check is that the robustness check hopes that the result remains robust after replacing the variable, while the placebo test hopes that the result is no longer significant after replacing the variable. First, replacing the explained variable. After a certain policy is implemented, it will have an effect on specific economic activities, but it will not have an effect on all economic activities. Therefore, replacing the explained variable with a variable that is expected not to be affected by the policy and conducting a placebo test rules out other possible interfering factors.

For more materials on the parallel trends test and the placebo test, see:

- [A collection of cases on the parallel trends test and placebo test methods for difference-in-differences (DID)](https://mp.weixin.qq.com/s/wqkUfU0PMkFQhjbazGHYqA)

- [Placebo test! Placebo test!](https://www.lianxh.cn/details/498.html)
- [The parallel trends test in DID and the choice of the dropped base period](https://mp.weixin.qq.com/s/Ipsr5lau0Mps1YlYqtXOKA)
- [Stata: Parallel trends not satisfied? Principal-component DID comes to your aid! - pcdid](https://www.lianxh.cn/details/760.html)

### 1.7 Notes on Fixed Effects

What is basically controlled for are individual fixed effects and time fixed effects; sometimes higher-dimensional interaction terms are controlled for.

Forwarded from a group chat:

> A summary regarding the meaning of fixed effects of different dimensions:
>
> A. For panel data, we usually use fixed effects to mitigate the influence of unobservable factors on the results. Among them, one-dimensional fixed effects are a common method, including but not limited to:
>
> Individual fixed effects: by excluding unobservable factors at the individual level that are not affected by changes over time (for example, an individual's gender, a company's CEO characteristics), to reduce the influence they may have on the results.
>
> Date fixed effects: used to mitigate the influence on the estimation results of those unobservable factors that do not vary across individuals but change over time, such as holiday factors.
>
> B. Subsequently, we gradually raise the dimension of the fixed effects to two dimensions. For example:
>
> Individual-date fixed effects: used to control for the influence on the results of unobservable factors that vary over time at the individual level, that is, these unobservable factors vary with both individual and date.
>
> Industry-date fixed effects: used to control for the influence on the outcome variable of unobservable factors that vary over time at the industry level, such as the degree of industry competition that changes year by year at the industry level.
>
> Province-date fixed effects: used to control for the influence on the results of unobservable factors that vary over time at the province level, such as economic fluctuations that change year by year at the province level (which are surely different across different provinces and different years).
>
> For example, taking province-date fixed effects as an example, by controlling for this set of fixed effects, we are able to obtain the variation in the coefficient δ of the key explanatory variable from among different prefecture-level cities within the same province in the same year. The δ identified in this way is more accurate than when this set of fixed effects is not controlled for; one can refer to Wang (2013)'s article studying the economic effects of development zones in China.
>
> *Of course, province-year fixed effects use province and year together to group the data; regardless of whether the firm changes or not, it can be completely grouped, so province-year can represent province as well as year. Therefore, once province-year is controlled for, there is no need to additionally control for province and year. This means that once province-year fixed effects are controlled for, there is no longer any need to additionally control for province fixed effects and year fixed effects. If, after including the province-year dummy variables in the model, year dummy variables are added, this will cause redundancy and thus be automatically dropped. Likewise, if province dummy variables are added to the model, they will face the same situation.
>
> The same logic applies to the three-dimensional fixed effects below.
>
> C. Currently, we are gradually upgrading the dimension of the fixed effects, expanding step by step from two dimensions to three dimensions or even more. High-dimensional fixed effects are introduced into the model:
>
> City-year-week fixed effects: used to control for unobservable factors that vary over time at the city level, thereby mitigating the influence on the results of unobservable factors that vary with the city while also varying over time (including year, month, and week). It is especially worth noting that, compared with city-year-month fixed effects, city-year-week fixed effects control for higher-order city-time-varying unobservable factors, and therefore are usually our preferred fixed effects.
>
> City-industry-year fixed effects: used to control for the influence on the results of those unobservable factors that vary with city and industry while also varying over time.
>
> The introduction of these high-dimensional fixed effects enables us to more comprehensively understand and control for potential influencing factors, thereby improving the accuracy and reliability of the model.

[A summary on controlling for interactive fixed effects: code and examples served up](https://mp.weixin.qq.com/s/ZeAJMJNTIpDSWsLysaJg7g)

## 2 The DID Family

Canonical DID has many assumptions. In reality, these assumptions often cannot be satisfied, such as non-parallel pre-trends or a policy that is not rolled out all at once. When the basic assumptions of Canonical DID are relaxed and various strategies are adopted to achieve reasonable estimation, various DID variants are born.

See:

- [Do you know? — The members of the difference-in-differences (DID) "big family"](https://mp.weixin.qq.com/s/IQzm0eHBnXgZhTO9wdI49g)
- Huang Wei, Zhang Ziyao, Liu Anran. From difference-in-differences to event study [J]. Industrial Economic Review, 2022(02):17-36.

### 2.1 Triple Difference DDD

- Basic principle: find another control group for the standard DID; it does not require a single DID to satisfy within-group parallel trends, but requires that the within-group differences of the two DIDs satisfy between-group parallel trends;

- See: [The most complete guidance on triple-difference DDD estimation for econometrics TOP journals!!!](https://mp.weixin.qq.com/s/efm1qnT-HvRmn1AqgZjGzw) or [Stata: A brief introduction to the triple-difference DDD model](https://www.lianxh.cn/details/276.html)

- Why use DDD:

  - The policy shock may have spillover effects within the groups of the standard DID

  - One finds a control sample across groups, but the control sample does not satisfy parallel trends

  - For example: suppose the objects of study are two states in the United States; the treatment state (T) introduced a healthcare reform, while the control state (C) did not. In addition, the populations of these two states can be subdivided into two groups, group A and group B. The healthcare measure we intend to study was only introduced to group B, that is, group B is the population that can benefit from this measure. Finally, along the time span, suppose there are two periods, namely before and after the healthcare measure is implemented.

    It seems convenient to directly compare group A and group B in the treatment state. But if the healthcare reform has a spillover effect within the treatment state (group B spills over to group A), then the obtained result cannot be trusted. Another possible option is to compare group B of the treatment state with group B of the control state. But, if different states have different economic conditions, then regardless of the healthcare measure, the trends of group B of the treatment state and group B of the control state will always be different, so this approach does not hold either.

    However, one reasonable assumption is that the difference in general economic conditions will not affect the relative difference between groups A and B. In this case, we can use the relative difference to estimate the counterfactual outcome of (the difference between) groups A and B in the treatment state.

![image-20231025133323120](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231025133323120.png)

Figure 3. Illustration of the triple-difference method

- Treatment effect (policy effect) TE = (C-E) - (D-E) = (C-E) - (O-P) = CD
- At this point, DE is the counterfactual of the A-B difference after the intervention. Since DE cannot be directly observed, OP is used as a substitute here.

$$
y_{it} = \beta_0 + \beta_1 P_{i} + \beta_2 C_{j} + \beta_3 T_t + \beta_4 (P_i T_t) + \beta_5 (C_j T_t) + \beta_6 (P_i C_j) + \beta_7 (P_i C_j T_t) + \epsilon_{it}\quad(2)
$$

Compared with DID, DDD adds an additional Group, and the variable settings are also 0-1 variables. At this point, as shown in equation (2), $\beta_7$ is the treatment effect.

In the pure-control Group ($C=0$) ⬇️:

|          | T = 0 | T = 1 | ***Difference*** |
| -------- | ----- | ----- | -----   |
| **P = 0** | $$ \beta_0 $$  | $$ \beta_0 + \beta_3 $$   | $$ \beta_3 $$ |
| **P = 1** | $$ \beta_0 + \beta_1 $$ | $$ \beta_0 + \beta_1 + \beta_3 + \beta_4 $$  | $$ \beta_3 + \beta_4 $$  |
| ***Difference*** | $$ \beta_1 $$  | $$ \beta_1 + \beta_4 $$  | $$ \beta_4 $$  |

In the Group with treatment ($C=1$) ⬇️

|          | T = 0 | T = 1 | ***Difference*** |
| -------- | ----- | ----- | -----   |
| **P = 0** | $$ \beta_0 + \beta_2 $$  | $$ \beta_0 + \beta_2 + \beta_3 + \beta_5  $$  | $$ \beta_3 + \beta_5 $$  |
| **P = 1** | $$ \beta_0 + \beta_1 + \beta_2 + \beta_6  $$ | $$ \beta_0 + \beta_1 + \beta_2 + \beta_3 + \beta_4 + \beta_5 + \beta_6 + \beta_7 $$  | $$ \beta_3 + \beta_4 + \beta_5 + \beta_7  $$ |
| ***Difference*** | $$ \beta_1 + \beta_6  $$  | $$ \beta_1 + \beta_4 + \beta_6 + \beta_7 $$ | $$ \beta_4 + \beta_7 $$  |

Taking the difference between the two yields the treatment effect $\beta_7$ ⬇️


|          | T = 0 | T = 1 | ***Difference*** |
| -------- | ----- | ----- | -----   |
| **P = 0** | $$ \beta_2  $$ | $$ \beta_2 + \beta_5 $$   |  $$ \beta_5 $$ |
| **P = 1** | $$ \beta_2 + \beta_6 $$ | $$ \beta_2 + \beta_5 + \beta_6 + \beta_7 $$ | $$ \beta_5 + \beta_7 $$  |
| ***Difference*** |  $$ \beta_6 $$   | $$ \beta_6 + \beta_7 $$ | $$ \beta_7 $$   |

**Note:** Standard DDD can also use the two-way fixed effects TWFE. See: [The Twoway Fixed Effects (TWFE) model](https://asjadnaqvi.github.io/DiD/docs/code/06_twfe/)

Other materials:

- [How do you operate the parallel trends test in triple-difference DDD estimation?](https://mp.weixin.qq.com/s/Qw8CkRX6zum9bSI5bTujRg)
- <img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231025104507993.png" alt="image-20231025104507993" style="zoom:50%;" />

### 2.2 Staggered DID (Staggered DID)

Also called multi-period DID, multi-time-point DID, progressive DID, time-varying DID, or asynchronous DID, it is a currently very widely applied DID variant and is very important. Compared with the standard DID, staggered DID relaxes the condition that the policy shock affects the treatment group at the same time.

The standard difference-in-differences model and the two-way fixed effects difference-in-differences model involve a policy implementation time point or shock occurrence time point that is the same period. However, in real life many policies are not necessarily implemented at a single time point; rather, there is first a pilot and then gradual promotion, carried out in a progressive process, such as the VAT transformation, land tenure confirmation, the implementation of the new rural pension scheme, the opening of high-speed rail, and the promotion of officials. The staggered difference-in-differences method provides a method for handling this type of situation. (Huang Wei et al., 2022)
$$
Y_{it} = \beta_0 + \beta_1 * Treat_{it} + \beta * \Sigma Z_{it} + \mu_i + \tau_t + \epsilon_{it}\quad(3)
$$
The general model specification of staggered DID is shown in equation (3). $\beta_1$ is the magnitude of the policy effect. Compared with the standard DID, staggered DID uses a treatment variable that varies with both time and individual to replace the interaction term (this is essentially writing the interaction term in the standard DID as a single variable).

The data structure of staggered DID is as follows:

```stata
id    year treati postit treati*postit Dit
----------------------------------------------
1    2001    1      0          0        0
1    2002    1      0          0        0
1    2003    1      1          1        1
1    2004    1      1          1        1
1    2005    1      1          1        1
----------------------------------------------
2    2001    1      0          0        0
2    2002    1      0          0        0
2    2003    1      0          0        0
2    2004    1      1          1        1
2    2005    1      1          1        1
----------------------------------------------
3    2001    0      0          0        0
3    2002    0      0          0        0
3    2003    0      0          0        0
3    2004    0      0          0        0
3    2005    0      0          0        0
```

Illustration ⬇️ (Liu Chong et al., 2022)

![image-20231027143649692](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231027143649692.png)



Staggered DID can be visualized using the `panelview` command. See [Stata graphing: panel data visualization - panelview](https://www.lianxh.cn/details/1035.html) or [[Video account 29] Visualizing staggered DID with panelview](https://mp.weixin.qq.com/s/9RVw0n9dkeE2001FSb3diA).

For the Stata simulation and handling of staggered DID, see:

- [A detailed explanation of the difference-in-differences method DID (Part 2): multi-time-point DID (progressive DID)](https://www.lianxh.cn/details/72.html)
- [A detailed explanation of the difference-in-differences method DID (Part 3): further analysis of multi-time-point DID (progressive DID)](https://www.lianxh.cn/details/9.html)
- [Big Bad Banks: introduction to a classic multi-period DID paper](https://www.lianxh.cn/news/42611191cca93.html)
- [Stata: a detailed explanation of the multi-period difference-in-differences method (DID) and its illustration](https://www.lianxh.cn/news/439e934fd68c9.html)
- [Multi-period DID: illustration of the parallel trends test](https://www.lianxh.cn/details/112.html)
- [A nanny-level tutorial on multi-time-point DID (Part 1) - the parallel trends test](https://www.lianxh.cn/details/1201.html)
- [A nanny-level tutorial on multi-time-point DID (Part 2) - the placebo test](https://www.lianxh.cn/details/1163.html)
- [[Econometrics] A practical tutorial on staggered DID](https://pwya.github.io/post/%E8%AE%A1%E9%87%8F%E4%BA%A4%E5%8F%A0did%E5%AE%9E%E7%94%A8%E6%95%99%E7%A8%8B/) or [Sharing: a concise usage tutorial on staggered DID, lowering scholars' learning cost of DID!](https://mp.weixin.qq.com/s/yLaDp8Yy6xSjCfqjo80AIQ)
- [Stata: the DID of the Mundlak method - jwdid](https://www.lianxh.cn/details/1116.html)

**New developments - very important:**

> The latest research findings in the field of econometrics show that when pilot policies are launched at different time points, the multi-time-point DID regression estimates obtained under two-way fixed effects may be biased (Goodman-Bacon, 2021), which is a result caused by differences in treatment timing and heterogeneous treatment effects. This paper respectively applies the robust estimation method of Callaway and Sant'Anna (2022) and the stacked DID method (Stacked Regression Approach) to the baseline model of this paper, and re-estimates the average treatment effect of the pilot policy. This paper applies the estimation method proposed by Callaway and Sant'Anna (2022) to the baseline model of this paper, and re-estimates the average treatment effect of the pilot policy. [Zhang Li, Liu Zhaocong, Cheng Kewei et al. Reform of industrial land approval and resource allocation efficiency — a study based on micro-enterprise land-stock data [J]. China Industrial Economics, 2023(09):61-79. DOI:10.19581/j.cnki.ciejournal.2023.09.004.]
>
> - [How much should we trust staggered difference-in-differences estimates?](https://www.sciencedirect.com/science/article/pii/S0304405X22000204)
>
> - [Difference-in-Differences with multiple time periods](https://www.sciencedirect.com/science/article/pii/S0304407620303948)
>
> - [Difference-in-differences with variation in treatment timing](https://www.sciencedirect.com/science/article/pii/S0304407621001445)
>
>   The above three articles find that TWFE may have serious problems in staggered DID (diagnosed by the bacon decomposition), and therefore other methods need to be used, such as csdid, the stacked DID method (Stacked Regression Approach), the two-step regression method, and so on. [Wang Pengchao, Han Libin. The potential problems of the multi-time-point difference-in-differences method and the solution measures [J]. Journal of Dongbei University of Finance and Economics, 2023, No.146(02):27-39]
>
> For authoritative articles, see:
>
> - [A model! This AER paper used all the latest DID methods in a single table, and the reviewers were directly convinced!](https://mp.weixin.qq.com/s/dF4JM5Z3toQxjCa9eyo_hw)
>
> For other domestic analysis articles, see:
>
> - Liu Chong, Sha Xuekang, Zhang Yan. Staggered difference-in-differences: treatment effect heterogeneity and the choice of estimation method [J]. The Journal of Quantitative & Technical Economics, 2022, 39(09):177-204.
> - Xu Wenli. The latest theoretical progress of the difference-in-differences method and new trends in empirical research [J]. Guangdong Social Sciences, 2023(05):51-62.
>   - Xu Wenli mentions that, in empirical research, there are five methods for diagnosing estimation bias: 1️⃣ the regression method; 2️⃣ the Bacon decomposition, but it only applies to the case of strongly balanced panel data; 3️⃣ the CD decomposition method; 4️⃣ the SA decomposition method; 5️⃣ the static effects test.

Where do the problems lie when staggered DID uses TWFE (see: [[Econometrics] A practical tutorial on staggered DID](https://pwya.github.io/post/%E8%AE%A1%E9%87%8F%E4%BA%A4%E5%8F%A0did%E5%AE%9E%E7%94%A8%E6%95%99%E7%A8%8B/)):

![image-20231031142456912](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231031142456912.png)

#### 2.2.1 Bacon decomposition

Standard DID is usually used to estimate the difference in outcomes between the treatment group and the control group before and after treatment. However, in practice, since treatment often occurs at different time points, researchers usually use the following equation to estimate the treatment effect $\beta^{DD}$:
$$
y_{it} = \alpha_i + \alpha_t + \beta^{DD}D_{it} + e_{it}\quad(4)
$$
In equation (4), $\alpha_i$ is the cross-sectional individual effect, $\alpha_t$ is the time fixed effect, and $D_{it}$ is a dummy variable for whether individual $i$ receives treatment at time $t$. But in fact, our understanding of this kind of treatment effect at different time points is quite limited, and it usually relies on the general assumption that "conditional on group and time fixed effects, treatment should be approximately randomly assigned." Andrew Goodman-Bacon (2021) proposes that the two-way fixed effects estimator (TWFEDD) equals a weighted average of all possible two-group or two-period DD estimators in the data.

The causal interpretation of its estimate requires the parallel trends assumption and treatment effects that are constant over time. He shows how to decompose the difference between two specifications, and provides a new analysis of models that include time-varying controls. This article will briefly summarize this paper and introduce the Stata command `bacondecomp` based on this decomposition method.

The Bacon decomposition is a method for diagnosing the bias of the TWFE estimator, and it can reveal the performance of TWFE applied to staggered DID.

See:

- [Bacon decomposition](https://asjadnaqvi.github.io/DiD/docs/code/06_bacon/)
- [Stata: the Bacon decomposition for estimating effects with multiple treatment time points - bacondecomp](https://mp.weixin.qq.com/s/hS9mfZui2uu05ExxE8EHVw)
- [[Video account 24] The trap of staggered DID: starting from the Bacon decomposition (1)](https://mp.weixin.qq.com/s/cy6cnwL3fGUkhX4NTY0LwQ)
- [[Video account 25] The trap of staggered DID: starting from the Bacon decomposition (2)](https://mp.weixin.qq.com/s/cewB6XboKQmWrcjRCQSryg)
- [[Applied Econometrics Series 52] Revisiting the Bacon decomposition: new upgrades, new operations, new results](https://mp.weixin.qq.com/s/NKy9uBMzijNzn6tR6lTXpQ)
- [[Xiangzhang post 2505] The diagnosis, solution, and application of staggered DID bias — and a discussion of the bias of continuous DID](https://mp.weixin.qq.com/s/w-m5-ihcCFg9PiLcqFTu7A)
- [Interpreting the results of the Bacon decomposition](https://mp.weixin.qq.com/s/Ipsr5lau0Mps1YlYqtXOKA)

#### 2.2.2 csdid

The standard DID model divides the sample into two groups: a treatment group and a control group; and divides time into two stages: before the policy occurs and after the policy occurs. All treatment-group samples are hit by the policy shock at the same time point.

With the extension of the DID method, many empirical studies extend it to multi-period DID, that is, the treatment group is not hit by the policy shock at the same time point. However, since 2019, many scholars have successively pointed out that this kind of multi-period DID may produce biased estimates (Athey and Imbens, 2022; Baker et al., 2022; Goodman-Bacon, 2021).

The main reason is that the essence of multi-period DID estimation is a weighted average of multiple different treatment effects, and the weights may be negative. When the weights are negative, the average treatment effect obtained after weighting and averaging the different treatment effects may be in the opposite direction to the true average treatment effect. Through data simulation, Baker et al. (2021) find that the biased treatment effect estimated by multi-period DID may even have the opposite sign to the true treatment effect.

For this reason, Callaway and Sant'Anna (2021) proposed a new method for identifying heterogeneous multi-period DID, which is applicable to the following three situations:

- Time is divided into multiple periods;
- The treatment group is hit by the policy shock at different times;
- The treatment group and the control group satisfy the parallel trends assumption only after controlling for covariates.

`csdid` has now become a Stata package (there is also an R version), and can report the robust estimator of staggered DID. Comparing the result with TWFE, one can see whether the baseline regression is reasonable.

See:

- [csdid (Callaway and Sant'Anna 2021)](https://asjadnaqvi.github.io/DiD/docs/code/06_did_csdid/)

- [CSDID Version 1.6](https://friosavila.github.io/playingwithstata/main_csdid.html)

- [A new method for heterogeneous multi-period DID estimation - csdid](https://mp.weixin.qq.com/s/oR7XoFs3qXdw0kecUhavMw)
- [The DID bias problem: the doubly robust estimator for multi-period DID (Part 2) - csdid](https://www.lianxh.cn/details/1027.html)

#### 2.2.3 Stacked DID

stackedev implements the stacked event study estimation discussed in Cunningham (2021) and Baker (2021) and implemented in Cengiz et al. (2010).

This package appends or stacks the individual datasets together. Each stack includes all observations from a group of units treated within the same time period and all units that were never treated. The effect is identified within each stack by comparing the individual treated unit cohort with the never-treated units.

This approach avoids the erroneous comparison of late-implementing units with early-implementing units, which, if the effect varies by treatment cohort, may bias the two-way fixed effects (TWFE) estimate (Goodman-Bacon, 2021).

The stacked event study is estimated in three steps:

- First, the individual stacks are created;
- Second, they are appended together;
- Finally, the package estimates the event study via reghdfe, which includes stack-by-stack fixed effects, stack-by-stack time fixed effects, and clustering of standard errors at the stack-by-stack level.

`stackedev` is also a Stata package, which can be installed and tried in combination with the materials below.

See:

- [stackedev (Cengiz, Dube, Lindner, Zipperer 2019)](https://asjadnaqvi.github.io/DiD/docs/code/06_stackedev/)
- [A systematic review of the latest progress in DID: from the potential problems of multi-period DID to the current mainstream solutions and code!](https://mp.weixin.qq.com/s/LaaHH98vEscnqhBCWffP0Q)
- [[Xiangzhang post 2435] From the staggered difference-in-differences method to the stacked difference-in-differences method — examples and discussion](https://mp.weixin.qq.com/s/TWlq-RrYATUJyqkaYtCyPQ)
- [Stata -- the stacked DID among the heterogeneity-robust estimators of staggered DID](https://mp.weixin.qq.com/s/v_WJR_QuTEs04BF5RXXEHQ)

#### 2.2.4 did2s Two-step Regression Method

A recent series of literature all shows that when the time at which treatment-group individuals receive treatment is staggered, and the average treatment effect varies across groups and over time, the common difference-in-differences estimation cannot identify a typical treatment effect and produce a reasonable measure (Borusyak and Jaravel, 2017; Athey and Imbens, 2018; Goodman-Bacon, 2018; de Chaisemartin and D'Haultfoeuille, 2020; Imai and Kim, 2020; Sun and Abraham, 2020).

For this reason, this article will introduce a method that may alleviate the above problem — two-stage difference-in-differences. Specifically, this post is mainly divided into the following content:

- First, it provides some simple intuition to explain why difference-in-differences regression cannot identify the group × period average treatment effect;
- Second, it proposes an alternative two-stage GMM estimation framework (two-stage estimation framework). In this framework, in the first stage we identify the group effects and period effects; after removing the group effects and period effects, in the second stage we identify the average treatment effect by comparing the difference in outcomes between the treatment group and the control group. The two-stage method gives robust estimation results in cases where the treatment timing is staggered and the treatment effects are heterogeneous, and it can also be used to identify many different average treatment effects; the method is simple, direct, and easy to use;
- Finally, to make it easier for everyone to understand, we use an example combined with Stata operations to demonstrate the implementation of this method, focusing on the `did2s` command.

See:

- [did2s (Gardner 2021)](https://asjadnaqvi.github.io/DiD/docs/code/06_did2s/)
- [The new trend in the Stata difference-in-differences method: did2s - the two-stage difference-in-differences model](https://www.lianxh.cn/news/cb98eb5208c55.html)

#### 2.2.5 did_multiplegt Multi-period Multi-individual Model

The two-way fixed effects multi-period DID model assumes that treatment is constant for the sample; such an assumption often does not hold in reality. First, the treatment variable may not be a binary variable, for example, the policy intensity differs across different regions. Second, treatment is not one-time either; the sample cannot simply be divided into two halves, a treatment group and a control group; for example, the influence of rainfall on a region will involve multiple alternating processes of going from having to not having and from not having to having, in which case a dynamic treatment group is needed.

The setting of a dynamic treatment group relaxes the setting of constant treatment in the traditional DID model, and can effectively solve the above problems. Moreover, in the model the treatment variable $D$ can be a binary variable or a non-binary variable.

`did_multiplegt` is also a Stata command; at the same time, this command can also handle many other situations, such as **allowing individuals to exit the experiment**.

See:

- [did_multiplegt (Chaisemartin and D'Haultfœuille 2020, 2021)](https://asjadnaqvi.github.io/DiD/docs/code/06_did_multiplegt/)
- [DIDM: the multi-period multi-individual difference-in-differences method - did_multiplegt](https://mp.weixin.qq.com/s/GOWZlN9dq7sanOo5S16kyA)

#### 2.2.6 did_imputation

`did_imputation` is also a Stata command, which can produce a robust and efficient estimator for the event study approach; it seems it can also be applied to staggered DID?

See:

- [did_imputation (Borusyak, Jaravel, Spiess 2021)](https://asjadnaqvi.github.io/DiD/docs/code/06_did_imputation/)
- [Stata: the robust and efficient estimator for the event study approach - did_imputation](https://www.lianxh.cn/details/853.html)

#### 2.2.7 eventstudyinteract

The `eventstudyinteract` command is written by Liyang Sun based on the Sun and Abraham 2020 paper [Estimating Dynamic Treatment Effects in Event Studies with Heterogeneous Treatment Effects](https://www.sciencedirect.com/science/article/pii/S030440762030378X).

The command potentially has some issues.

See:

- [eventstudyinteract (Sun and Abraham 2020)](https://asjadnaqvi.github.io/DiD/docs/code/06_eventstudyinteract/)
- [Use the latest Sun and Abraham (2020) and TWFE to estimate multi-period or staggered DID and plot the results! A detailed interpretation of the code!](https://mp.weixin.qq.com/s/k2kxnRvzHFk3LLdwByZzyw)

#### 2.2.8 Comparison of Various Estimators

This is simply putting the estimation results of methods such as TWFE, did_multiplegt, csdid, did_imputation, eventstudyinteract, stackedev, did2s together for comparison. (Image from [All estimators](https://asjadnaqvi.github.io/DiD/docs/code/06_combined/))

![img](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/allestimators2.png)

Xu Wenli also made a comparison:

![image-20231027200000742](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231027200000742.png)

Liu Chong et al. (2022) also made a comparison; interested peers can also look at the paper themselves and reproduce it.

![image-20231028195711047](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231028195711047.png)

See:

- [Stata: a comparative analysis of various DID estimators](https://www.lianxh.cn/details/1097.html)
- [All estimators](https://asjadnaqvi.github.io/DiD/docs/code/06_combined/)

### 2.3 Cohort DID (Cohort DID)

Also called cross-sectional DID, it uses cross-sectional data to evaluate the long-term impact of a certain historical event on individuals. It is often used to evaluate the long-term impact of special historical events on individuals and families (usually using cross-sectional data). Similar to the standard DID, cohort DID also has variation in two dimensions; generally speaking, one dimension is region, and the other dimension is the birth (age) cohort. If it feels hard to understand, you really only need to understand the birth cohort dimension as time.

Recommended reading:

- [Chen, Y., Fan, Z., Gu, X., & Zhou, L. A. (2020). Arrival of young talent: The send-down movement and rural education in China. *American Economic Review*, *110*(11), 3393-3430.](https://www.aeaweb.org/articles?id=10.1257/aer.20191414)
- [Guo, S., Gao, N., & Liang, P. (2023). Winter Is Coming: Early-life Experiences and Politicians' Decisions. *The Economic Journal*, uead061.](https://doi.org/10.1093/ej/uead061) (I read this article closely and did a reproduction; it feels very impressive.)
- [Vaccination, human capital accumulation, and income growth](https://nsd.pku.edu.cn/docs/20221021150423034989.pdf) (Dr. Wang's masterpiece, forthcoming in the *China Economic Quarterly*)
- [Cohort DID: taking the educated youth "up to the mountains and down to the countryside" movement as an example - T401](https://www.lianxh.cn/details/639.html)
- [DID design for cross-sectional data: the Stata "instruction manual" for Cohort DID](https://mp.weixin.qq.com/s/5P8-jrGp1MlPthTHhiXD8A)

### 2.4 Generalized DID (Generalized DID)

Also called intensity DID or continuous DID. Not seen very often.

> When all objects of study are, to a greater or lesser extent, simultaneously subjected to the policy intervention, that is, when there is only a treatment group and no control group, it is still possible to consider applying the difference-in-differences method. For this, one can construct a treatment intensity indicator according to the specific shock situation experienced by the objects of study in order to conduct the analysis. At this point, the individual dimension is not a change from 0 to 1, but a continuous change. Therefore, the policy grouping dummy variable at the individual dimension can be replaced with a continuous variable representing the degree to which different individuals are affected by the policy; this method is called the generalized difference-in-differences method. Nunn and Qian (2011) studied a classic example: they studied the impact of the diffusion of potato cultivation on European population growth. Almost all regions in Europe planted potatoes, and there were no regions that did not plant potatoes, so there was no control group in the standard sense. Their choice was to take the inter-regional suitability for potato cultivation as the treatment intensity, take around 1700 as the treatment time point, and use the generalized difference-in-differences method to estimate the impact of the introduction of the potato on population growth. (Huang Wei et al., 2022)

Recommended reading:

- [Paper reproduction: the contribution of the potato to population and urbanization - an application of continuous DID](https://www.lianxh.cn/details/1190.html)

- [[Applied Econometrics Series 64] The latest progress and application of intensity DID](https://mp.weixin.qq.com/s/TbB2swZ77-Cd-_ZBtLWrHw)

-  [[Xiangzhang post 2475] Canals and rebellions: the latest masterpiece of quantitative history by Chinese scholars in AER](https://mp.weixin.qq.com/s/oPVre9GbbfgQsCMrecinuQ)

### 2.5 Fuzzy DID (Fuzzy DID)

> In the application scenarios of methods such as the standard difference-in-differences method, the treatment group and the control group are usually clearly demarcated, so a relatively "clean" treatment effect can be obtained through grouped differencing. But sometimes the shock does not bring about a sharp change; although the so-called "treatment group" has a higher shock rate than other groups, it is not completely intervened or hit by the policy, and the so-called "control group" is not completely free of the shock either, that is, there is no clear distinction between the treatment group and the control group, and there is no "clean" treatment group and control group. The fuzzy difference-in-differences method provides a possibility for handling this type of situation; de Chaisemartin and d'Haultfoeuille (2018) introduced this method in detail in their article, and used it to re-evaluate the returns to education in Indonesia. (Huang Wei et al., 2022)
>

For more content, see:

- [Fuzzy DID: the fuzzy difference-in-differences method](https://www.lianxh.cn/details/536.html)

- [Frontier, an introduction to and example of the fuzzy difference-in-differences FDID method, with code and data attached!](https://mp.weixin.qq.com/s/nV1hcRIh_qp312NYsOy0ew)

### 2.6 Pooled Cross-section DID

> Compared with panel data, the difference of pooled cross-section data is that the observed individuals at different time points are different, but it also has the two dimensions of time and individual, so as long as one designs it cleverly, one can still construct a DID model for policy evaluation. Comrade Wooldridge, in section 13.2 of *Introductory Econometrics*, gave a classic example, "the impact of the location of a garbage incinerator on housing prices" (Kiel and McClain, 1995), to explain the approach of pooled cross-section DID; interested readers can take a look. (Jianghe JH, 2022)

See:

- [A continued discussion of the great DID method | I heard that pooled cross-section data can also do DID](https://mp.weixin.qq.com/s/3Im5kuVV-MYmMw6SrdVpUg)

### 2.7 Other Situations

The DID family is a hundred flowers blooming, and it is constantly developing; there are also many types, strategies, or modes, such as the "entry-exit" DID, double machine learning, synthetic difference-in-differences DID, [spatial DID](https://www.lianxh.cn/details/840.html), [one-size-fits-all DID](https://www.lianxh.cn/details/649.html), [DID considering spillover effects](https://www.lianxh.cn/details/499.html), [nonlinear DID](https://www.lianxh.cn/details/438.html) (also called NL-DID or CIC), quantile DID, [DID with a dummy variable as the explained variable](https://mp.weixin.qq.com/s/F4F301Vj4y07UOCJ_OKoZw); DID can also be combined with other strategies, such as PSMDID and [RDD&DID](https://www.lianxh.cn/details/763.html)! The content is complex and varied, but the basic principle is inseparable from the standard DID; you can look into it yourself.

Scholars such as Huang Wei believe that "almost any difference of differences in two dimensions can be understood from the perspective of difference-in-differences. That is to say, almost all **interaction-term models** can be understood as a kind of difference-in-differences method." For more explanation you can read the original text.

For other materials, see:

- [Research notes: a major update —— "The latest progress in frontier econometrics: a concise and practical handbook"](https://mp.weixin.qq.com/s/YvwTCtQxZeRemQK_4Ix_Rg) or [[Econometrics] A practical handbook of frontier DID methods: Fuzzy DID, synthetic control DID, DML](https://pwya.github.io/post/%E8%AE%A1%E9%87%8F%E5%89%8D%E6%B2%BFdid%E6%96%B9%E6%B3%95%E5%AE%9E%E7%94%A8%E6%89%8B%E5%86%8C/)

- [[Xiangzhang post 2791] Dazzled by the new DiD theoretical literature? A systematic review of the frontier progress of DiD methods](https://mp.weixin.qq.com/s/sKaLgD21Qcdy3Kkobp3-oQ)

## 3 DID Checklist

Scholars such as Jonathan Roth recently published an [article](https://www.sciencedirect.com/science/article/pii/S0304407623001318) in the Journal of Econometrics, describing the new progress in DID; the article is also a Handbook, and lists a checklist for using DID. The post from "Econometrics Circle" has a translated version of the checklist, which is excerpted here:

> - **Is every individual hit by the policy shock at the same time?**
>   - If yes, and the panel is balanced, then use a two-way fixed effects TWFE estimation method such as equation (5) or (7). TWFE will produce easily interpretable estimates.
>   - If no, please consider using "heterogeneity-robust estimates" to estimate the treatment effect of policies implemented in a staggered fashion over time (as described in Section 3). As for which method's estimate to use, it depends on the emergence and termination of a policy, as well as the parallel trends assumption that the researcher intends to impose. Only use the two-way fixed effects TWFE estimate when you are quite confident that the policy treatment effect is homogeneous.
>
> - **Are you sure the parallel trends assumption holds?**
>   - If yes, please explain why it holds, including the verification of the functional form specified by the regression equation. If the justification is the (quasi-)randomness of the policy's timing, please consider using the more efficient estimate discussed in Section 6.
>   - If no, please proceed according to the following steps:
>     - If the parallel trends assumption conditional on covariates is more reasonable, please consider the estimate conditional on covariates described in Section 4.2.
>     - Assess the plausibility of the parallel trends assumption by constructing an event study plot. If there is a common policy shock date and an unconditional parallel trends assumption is used, please plot the coefficients according to a regression equation such as (16). If not, please refer to Section 4.3 for advice on event-plot construction.
>     - When reporting the event study plot, you can also use the method described in Section 4.4.1 to further verify the pre-trends.
>     - As described in Section 4.5, report a formal sensitivity analysis, describing the robustness of the conclusion to potential violations of parallel trends.
>
> - **Do you have a large number of treatment-group and control-group samples obtained from a super-population through cluster sampling?**
>   - If yes, then use cluster-robust methods at the corresponding cluster level. A rule of thumb is to cluster at the level at which the treatment effect is independently assigned (for example, cluster at the state level when the policy is implemented at the state level); see Section 5.2 for details.
>   - If there are a small number of clusters hit by the policy shock, you can consider using the alternative policy-effect inference methods in Section 5.1.
>   - If you cannot imagine or obtain a super-population, please consider the design-based policy-effect inference methods in Section 5.2.

Translation from:

- [Several checklists that need to be done when using the latest DID methods!](https://mp.weixin.qq.com/s/Ipsr5lau0Mps1YlYqtXOKA)

For other content on the JoE paper, see:

- [[Xiangzhang post 2791] Dazzled by the new DiD theoretical literature? A systematic review of the frontier progress of DiD methods](https://mp.weixin.qq.com/s/sKaLgD21Qcdy3Kkobp3-oQ)

## 4 Practical Software Packages

### 4.1 DID-related Software Packages

In the JoE paper, Jonathan Roth et al. also made a tabular summary of DID-related software packages, including parallel-trends diagnostics, and attached the sources; I excerpt it here as well. (The table displayed in Markdown is not pretty; I still suggest reading the original text...)

[Table 2. Statistical packages for recent DiD methods.](https://www.sciencedirect.com/science/article/pii/S0304407623001318)

| Heterogeneity Robust Estimators for Staggered Treatment Timing |                 |                                                              |
| :----------------------------------------------------------- | --------------- | ------------------------------------------------------------ |
| <u>Package</u>                                               | <u>Software</u> | <u>Description</u>                                           |
| did, csdid                                                   | R, Stata        | Implements [Callaway and Sant'Anna (2021)](https://doi.org/10.1016/j.jeconom.2020.12.001) |
| did2s                                                        | R, Stata        | Implements [Gardner (2021)]([ https://doi.org/10.48550/arXiv.2207.05943](https://doi.org/10.48550/arXiv.2207.05943)), [Borusyak et al. (2021)]([ https://doi.org/10.48550/arXiv.2108.12419](https://doi.org/10.48550/arXiv.2108.12419)), [Sun and Abraham (2021)](https://doi.org/10.1016/j.jeconom.2020.09.006), [Callaway and Sant'Anna (2021)](https://doi.org/10.1016/j.jeconom.2020.12.001), [Roth and Sant'Anna (2021)]([ https://doi.org/10.48550/arXiv.2102.01291](https://doi.org/10.48550/arXiv.2102.01291)) |
| didimputation, did_imputation                                | R, Stata        | Implements [Borusyak et al. (2021)]([ https://doi.org/10.48550/arXiv.2108.12419](https://doi.org/10.48550/arXiv.2108.12419)) |
| DIDmultiplegt, did_multiplegt                                | R, Stata        | Implements [de Chaisemartin and D'Haultfoeuille (2020)](https://www.aeaweb.org/articles?id=10.1257/aer.20181169) |
| eventstudyinteract                                           | Stata           | Implements [Sun and Abraham (2021)](https://doi.org/10.1016/j.jeconom.2020.09.006) |
| flexpaneldid                                                 | Stata           | Implements [Dettmann (2020)](http://dx.doi.org/10.2139/ssrn.3692458), based on [Heckman et al. (1998)](https://www.jstor.org/stable/2999630) |
| fixest                                                       | R               | Implements [Sun and Abraham (2021)](https://doi.org/10.1016/j.jeconom.2020.09.006) |
| stackedev                                                    | Stata           | Implements stacking approach in [Cengiz et al. (2019)](https://doi.org/10.1093/qje/qjz014) |
| staggered                                                    | R               | Implements [Roth and Sant'Anna (2021)](https://doi.org/10.48550/arXiv.2102.01291), [Callaway and Sant'Anna (2021)](https://doi.org/10.1016/j.jeconom.2020.12.001), and [Sun and Abraham (2021)](https://doi.org/10.1016/j.jeconom.2020.09.006) |
| xtevent                                                      | Stata           | Implements [Freyaldenhoven et al. (2019)](https://www.aeaweb.org/articles?id=10.1257/aer.20180609) |
| **DiD with Covariates**                                      |                 |                                                              |
| <u>Package</u>                                               | <u>Software</u> | <u>Description</u>                                           |
| DRDID, drdid                                                 | R, Stata        | Implements [Sant'Anna and Zhao (2020)](https://doi.org/10.1016/j.jeconom.2020.06.003) |
| **Diagnostics for TWFE with Staggered Timing**               |                 |                                                              |
| <u>Package</u>                                               | <u>Software</u> | <u>Description</u>                                           |
| bacondecomp, ddtiming                                        | R, Stata        | Diagnostics from [Goodman-Bacon (2021)](https://doi.org/10.1016/j.jeconom.2021.03.014) |
| TwoWayFEWeights                                              | R, Stata        | Diagnostics from [de Chaisemartin and D'Haultfoeuille (2020)](https://www.aeaweb.org/articles?id=10.1257/aer.20181169) |
| **Diagnostic/ Sensitivity for Violations of Parallel Trends** |                 |                                                              |
| <u>Package</u>                                               | <u>Software</u> | <u>Description</u>                                           |
| honestDiD                                                    | R, Stata        | Implements [Rambachan and Roth (2023)](https://doi.org/10.1093/restud/rdad018) |
| pretrends                                                    | R               | Diagnostics from [Roth (2022)](https://www.aeaweb.org/articles?id=10.1257/aeri.20210236) |

Note: This table lists R and Stata packages for recent DiD methods, and is based on Asjad Naqvi's repository at https://asjadnaqvi.github.io/DiD/. Several of the packages listed under "Heterogeneity Robust Estimators" also accommodate covariates.

Actually, looking at the [blog](https://asjadnaqvi.github.io/DiD/) in this Note also works.

### 4.2 Other Software Packages

- `didplacebo` is a Stata command that can [run a DID placebo test with one click]() and is suitable for the standard DID with a single-time-point shock, as well as staggered DID with multi-time-point shocks (staggered DID)
- `permute` is a Stata command that can also easily run a [placebo test](https://www.lianxh.cn/details/731.html);
- `eventdd` is a Stata command that can [draw a parallel trends graph in one line of code](https://lianxh.cn/news/e715545930fcf.html).


## 5 Other Reference Materials

(1) A very detailed blog

https://diff.healthpolicydatascience.org/

(2) A blog from three or four years ago? Data science for public service

https://ds4ps.org/PROG-EVAL-III/DiffInDiff.html

(3) A useful R markdown book about DID

https://bookdown.org/mike/data_analysis/difference-in-differences.html

(4) The effect

https://theeffectbook.net/ch-DifferenceinDifference.html

(5) The mixtape

https://mixtape.scunning.com/09-difference_in_differences

(6) A web page with various DID-related packages and progress -- this is very important

https://asjadnaqvi.github.io/DiD/

https://asjadnaqvi.github.io/DiD/docs/code

(7) Statistical tools for causal inference - a very powerful R book

https://chabefer.github.io/STCI/

(8) A series of questions related to DID

https://friosavila.github.io/playingwithstata/index.html

(9) A DID resource site, the blog of the **JoE article author** and DID expert; his little dog 🐶 seems quite cute

https://www.jonathandroth.com/did-resources/

(10) This person's blog is somewhat interesting

https://christinecai.github.io/items/PublicGoods.html

## 6 Appendix: DID Experiment Code

### 6.1 Standard DID Data Simulation, Analysis, and Testing Code

```stata
***DID family code***
***Materials are mainly sourced from the official Lianxh website https://www.lianxh.cn/ , with some adaptation

cd "/Users/yu/worklist/casual_inference/14-张宇 DID家族"
*Please replace this with your own working directory, or delete the line above, in which case the default working directory will be used



*************************************************************
************************** I. Standard DID ***********************
*************************************************************



**1.1 Generate simulated data

///Set 300 observations and set the random number seed

clear all
set obs 300 
set seed 10101
gen id =_n

/// Expand each value 11 times, then drop the first 300 observations, giving panel data of 300 individuals over 10 years, fairly close to the commonly used prefecture-level city panels

expand 11
drop in 1/300
count

///Generate the time indicator grouped by id

bys id: gen year = _n+1999
xtset id year

///Generate covariates x1, x2

gen x1 = rnormal(1,7)
gen x2 = rnormal(2,5)

///Generate individual fixed effects and time fixed effects

sort year id
by year: gen ind = _n
sort id year
by id: gen T = _n

//Generate the treat and post variables, with 2005 as the time of policy intervention; individuals with id 151-300 are the treatment group, and the rest are the control group
gen D = 0 
replace D = 1 if  id > 150
gen post = 0
replace post = 1 if year >= 2005
//(These are for use when constructing the data later; in the real world, individual fixed effects and time fixed effects are unobservable)
/*
The fixed effects model in econometrics is an important method for accounting for unobserved heterogeneity. This unobserved heterogeneity refers to variables that cannot be observed and are correlated with the dependent variable, which may bias the ordinary least squares (OLS) estimator. Fixed effects models can help us control for this unobserved, time-invariant heterogeneity.

What fixed effects are:
Fixed effects refer to effects that are constant across all observation units, or constant for a particular observation unit across all time periods. In other words, fixed effects capture time-invariant heterogeneity that affects the dependent variable but is not observed in the data.

Individual fixed effects:
When some heterogeneity we observe in cross-sectional data (such as across countries, firms, or individuals) is correlated with the dependent variable, it may be caused by certain traits we have not observed. For example, consider a study analyzing countries' economic growth: each country has its own unique political institutions, culture, and historical background. These factors may affect its economic growth, but they are hard to measure explicitly in the model. Individual fixed effects are used to capture this time-invariant heterogeneity correlated with the dependent variable.

Time fixed effects:
Time fixed effects account for influences shared by all observation units at a particular point in time. For example, a global economic crisis may affect the economic growth of all countries. By adding time fixed effects, we can control for the influences all countries are jointly exposed to in a particular year. This way, we can accurately estimate the effects of the other explanatory variables on the dependent variable, free from the interference of such common time-point effects.

In short, fixed effects models can help us control for unobserved, time-invariant heterogeneity and thus obtain more accurate estimates. In actual research, whether to apply a fixed effects model, and whether to use individual or time fixed effects, should be decided according to the specific research context and purpose.
*/

///Save the basic data structure as a dta file named DID_Basic_Simu.dta, saved by default under the current working directory path

save "DID_Basic_Simu.dta", replace





***1.2 Simulation of Standard DID where the policy effect does not change over time

///Load the basic data structure generated in 1.1
clear
use "DID_Basic_Simu.dta"

///Generate the two potential outcomes and combine them into the final outcome variable, setting the true policy effect to 10, unchanged over time until the last period

bysort id: gen y0 = 10  + 5 * x1 + 3 * x2 + T + ind + rnormal()
bysort id: gen y1 = 10  + 5 * x1 + 3 * x2 + T + ind + rnormal() if year < 2005
bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 + 10 + T + ind + rnormal() if year >= 2005
*Add +10 to the post-2005 part of y1 to form the policy effect
gen y = y0 + D * (y1 - y0)
*Here y equals y0 for the first 30 individuals and y1 for the last 30 individuals, i.e., the first 30 individuals are the control group, unaffected by the policy in all periods, while the last 30 individuals are the comparison group, affected by the policy after 2005

///Remove the influence of covariates and individual effects on y, and plot the remaining residuals

xtreg y x1 x2, fe r
predict e,ue //Generate the residual ue and name the variable e
binscatter e year, line(connect) by(D)

///Export the generated figure, with format 800*600
graph export "article1_1.png",as(png) replace width(800) height(600)

//Compute the treatment effect
*There are many commands for estimating the treatment effect; reghdfe is highly recommended — it runs fast and gives concise output, and most of the papers I have read use it. Here it is two-way fixed effects
reghdfe y c.D#c.post x1 x2, absorb(id year) vce(robust)
*Starting from Stata 17 there is the official command xtdidregress: xtdidregress (y1 x1 x2) (treat1), group(grpvar1) time(tvar). The advantage of xtdidreg is that it makes it easy to plot time trend graphs
gen did = D*post //Factor-variable notation is not allowed in the xtdidreg command
xtdidregress (y x1 x2) (did), group(id) time(year) vce(robust id)

//Plot the time trend graph
estat trendplots

save "DID_test.dta", replace





***1.3 Simulation of Standard DID where the policy effect changes over time

///Load the basic data structure generated in the second part of this article
clear
use "DID_Basic_Simu.dta"

///Generate the two potential outcomes and combine them into the final outcome variable, letting the true policy effect change over time, i.e., (5*T-T); since the intervention starts in 2005, the policy effect in each year should be 24, 28, 32, 36, 40.

bysort id: gen y0 = 10  + 5 * x1 + 3 * x2 + T + ind  + rnormal()
bysort id: gen y1 = 10  + 5 * x1 + 3 * x2 + T + ind  + rnormal() if year < 2005

bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 + T * 5 + ind   + rnormal() if year >= 2005

gen y = y0 + D * (y1 - y0)

///Remove the influence of covariates and individual effects on y, and plot the remaining residuals

xtreg y x1 x2 , fe r
predict e,ue
binscatter e year, line(connect) by(D)

//Compute the treatment effect (here it is the average treatment effect ATE over the treatment periods, i.e., the mean of 24, 28, 32, 36, 40)
reghdfe y c.D#c.post x1 x2, absorb(id year) vce(robust)

gen did = D*post 
xtdidregress (y x1 x2) (did), group(id) time(year) vce(robust id)

//Plot the time trend graph
estat trendplots





***1.4 Event study approach

///The case where the policy effect is constant
///Load the basic data structure generated in 1.1
clear
use "DID_test.dta"

xtset id year

//Method 1: set dummy variables via factor-variable notation
reghdfe y i.D#i.year x1 x2, vce(robust) absorb(id year) //By default the first period (the minimum value) is the reference period
*Note: for some reason the coefficients here are exactly the opposite of those from Method 2; judging from the output, what is shown here is the result for D=0. Judging from some top journals, Method 2 is used more often.


//Method 2: manually generate time dummies and construct the interaction terms; this way a particular group can be designated as the reference group. In this article the first period in the sample is used as the baseline group; another common choice in papers is to use the period before policy implementation and the current period as the baseline reference group.
///Generate year dummies in advance
tab year, gen(yeardummy)
reghdfe y c.D#(c.yeardummy2-yeardummy10) x1 x2, absorb(id year) vce(robust)

//Plot the coefficients for each period, to report as results
coefplot, ///
   keep(c.D#c.yeardummy2 c.D#c.yeardummy3 c.D#c.yeardummy4 c.D#c.yeardummy5 c.D#c.yeardummy6 c.D#c.yeardummy7 c.D#c.yeardummy8 c.D#c.yeardummy9 c.D#c.yeardummy10)  ///Keep the specified coefficients
   coeflabels(c.D#c.yeardummy2 = "-4"   ///Label the periods on the horizontal axis
   c.D#c.yeardummy3 = "-3"           ///
   c.D#c.yeardummy4 = "-2"           ///
   c.D#c.yeardummy5 = "-1"           ///
   c.D#c.yeardummy6  = "0"             ///
   c.D#c.yeardummy7  = "1"              ///
   c.D#c.yeardummy8  = "2"              ///
   c.D#c.yeardummy9  = "3"              ///
   c.D#c.yeardummy10 = "4")            ///
   vertical                             ///
   yline(0)                             ///
   ytitle("Coef")                 ///
   xtitle("Time passage relative to year of adoption of implied contract exception") ///
   addplot(line @b @at)                 ///Add connecting lines between the points
   ciopts(recast(rcap))                 ///Set the confidence interval style; commonly dashed lines for the upper and lower bounds and a thick solid line for the estimated coefficient
   scheme(s1mono)


//Plot the coefficients for each period, with a different way of presenting confidence intervals (a bit abstract to use in this case...)
coefplot, ///
   keep(c.D#c.yeardummy2 c.D#c.yeardummy3 c.D#c.yeardummy4 c.D#c.yeardummy5 c.D#c.yeardummy6 c.D#c.yeardummy7 c.D#c.yeardummy8 c.D#c.yeardummy9 c.D#c.yeardummy10)  ///Keep the specified coefficients
   coeflabels(c.D#c.yeardummy2 = "-4"   ///Label the periods on the horizontal axis
   c.D#c.yeardummy3 = "-3"           ///
   c.D#c.yeardummy4 = "-2"           ///
   c.D#c.yeardummy5 = "-1"           ///
   c.D#c.yeardummy6  = "0"             ///
   c.D#c.yeardummy7  = "1"              ///
   c.D#c.yeardummy8  = "2"              ///
   c.D#c.yeardummy9  = "3"              ///
   c.D#c.yeardummy10 = "4")            ///
   vertical                             ///
   yline(0)                             ///
   ytitle("Coef")                 ///
   xtitle("Time passage relative to year of adoption of implied contract exception") ///
   msymbol(O) msize(small) mcolor(gs1) ///plot style
   addplot(line @b @at)                 ///Add connecting lines between the points
   ciopts(recast(rline) lwidth(thin) lpattern(dash) lcolor(gs2))                  ///
   scheme(s1mono)

   
   

   
***1.5 Placebo test
*The DID family now has a convenient placebo test package, didplacebo; see Prof. Chen Qiang's WeChat post https://mp.weixin.qq.com/s/egERxrpCFQyliH4FimCalQ
*The essence of the placebo test: randomly change the timing of the shock and the treated sample

//Method 1: use didplacebo to run in-time, in-space, and mixed placebo tests in one step

clear
use "DID_test.dta"

reghdfe y did x1 x2, absorb(id year) vce(robust)

estimates store did_test

didplacebo did_test, treatvar(did) pbotime(1(1)4)
didplacebo did_test, treatvar(did) pbounit rep(500) seed(1)
didplacebo did_test, treatvar(did) pbomix(1) //pbomix(1) indicates the mixed placebo test suitable for standard DID

//The in-time, in-space, and mixed placebo tests can also be run at the same time
didplacebo did_test, treatvar(did) pbotime(1(1)4) pbounit pbomix(1)


//Method 2: randomly generate the treatment group (with Method 1 available, Method 2 feels rather useless now)
*See https://www.lianxh.cn/details/731.html
*Placebo test with one line of code: permute

clear
use "DID_test.dta"

permute did _b[did], reps(1000) rseed(123): reghdfe y did x1 x2, absorb(id year) vce(robust)
*did is the interaction term
*reps(1000) means resampling 1000 times

//Sample 1000 times, record the coefficients and save them into a new dataset
permute did beta = _b[did],  ///
        reps(1000) rseed(123) saving("simulations.dta", replace):  ///
        reghdfe y did x1 x2, absorb(id year) vce(robust)

//Plot the coefficients
use "simulations.dta", clear
#delimit ;
dpplot beta, xline(10.02, lc(black*0.5) lp(dash))
             xline(0, lc(black*0.5) lp(solid))
             xtitle("Estimator", size(*0.8)) 
             xlabel(-5(1)5, format(%4.1f) labsize(small))
             ytitle("Density", size(*0.8)) 
             ylabel(, nogrid format(%4.1f) labsize(small)) 
             note("") caption("") 
             graphregion(fcolor(white)) ;
#delimit cr
graph export "placebo_test.png", width(1000) replace

*If the coefficients are distributed around zero and follow a normal distribution, this matches the expectation of the placebo test; in practical applications, it is enough for the true estimate to lie in the tail of the kernel density plot, as in 「刘瑞明, 毛宇, 亢延锟. 制度松绑、市场活力激发与旅游经济发展——来自中国文化体制改革的证据[J]. 经济研究, 2020, 55(01):115-131.」

*If you want to use the old method and walk the old road again, that is also fine: https://mp.weixin.qq.com/s/snYGfrWF5Cd_R3eZzIK3NA
```

### 6.2 Staggered DID Data Simulation, Analysis, and Testing Code

```stata
*******************************************************************
************************** II. Staggered DID ***********************
*******************************************************************

*Among the various variants of standard DID, staggered DID is the most important, because in reality many policies are not rolled out all at once but piloted first and then extended. In the frontier research and applications of DID, staggered DID is the most important, so it is necessary to systematically learn the various operations of staggered DID and practice it in Stata

cd "/Users/yu/worklist/casual_inference/14-张宇 DID家族"
*Please replace this with your own working directory, or delete the line above, in which case the default working directory will be used

***2.1 The case where all individuals eventually enter the treatment group

***2.1.1 Data generation for staggered DID

///Set 60 observations and set the random number seed
clear all
set obs 60 
set seed 10101
gen id =_n

/// Expand each value 11 times, then drop the first sixty observations, i.e., 60*11-60 = 600, giving panel data of 60 individuals over 10 years
expand 11
drop in 1/60
count

///Generate the time indicator grouped by id
bys id: gen time = _n+1999
xtset id time

///Generate covariates as well as individual and time effects
gen x1 = rnormal(1,7)
gen x2 = rnormal(2,5)

sort time id
by time: gen ind = _n
sort id time

by id: gen T = _n
gen y = 0

///Generate the treatment variable; here D is Dit. Individuals 1-20 receive the shock in 2004, 21-40 in 2006, and 36-60 in 2008
gen D = 0
gen birth_date = 0

forvalues i = 1/20{
    replace D = 1 if id  == `i' & time >= 2004
    replace birth_date = 2004 if id == `i'
}

forvalues i = 21/40{
    replace D = 1 if id  == `i' & time >= 2006
    replace birth_date = 2006 if id == `i'
}

forvalues i = 41/60{
    replace D = 1 if id  == `i' & time >= 2008
    replace birth_date = 2008 if id == `i'
}

///Save the basic data structure as a dta file, Staggered_DID_Basic_Simu1.dta, saved by default under the current working directory path

save "Staggered_DID_Basic_Simu1.dta", replace





***2.1.2 Staggered DID where the policy effect does not change over time

///Load the generated basic data file
clear
use "Staggered_DID_Basic_Simu1.dta"

///Generate Y, such that the true policy effect for individuals receiving the shock is 10
bysort id: gen y0 = 10  + 5 * x1 + 3 * x2 + T + ind  + rnormal()
bysort id: gen y1 = 10  + 5 * x1 + 3 * x2 + T + ind  + 10 + rnormal() if time >= 2004 & id >= 1 & id <= 20
bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 + T + ind  + 10 + rnormal() if time >= 2006 & id >= 21 & id <= 40
bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 + T + ind  + 10 + rnormal() if time >= 2008 & id >= 41 & id <= 60
bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 + T + ind  + rnormal() if y1 == .

replace y = y0 + D * (y1 - y0)

///Remove the influence of individual effects and covariates on Y, obtain the residuals and plot them
xtreg y x1 x2 , fe r
predict e, ue
binscatter e time, line(connect) by(D)

///Export the generated figure, with format 800*600
graph export "article2_1.png",as(png) replace width(800) height(600)

//Compute the treatment effect
reghdfe y c.D x1 x2, absorb(id time) vce(robust)

//Take a look using the event study approach
///Subtract the year the individual receives treatment from the current year to get the relative time value event; merge periods before -4 into period -4, since some individuals do not have time beyond period -4
///Then generate dummy variables for the relative time values, eventt, and set the first period as the baseline comparison group
gen event = time - birth_date
replace event = -4 if event <= -4
tab event, gen(eventt)
drop eventt1 //This step makes the first period the baseline period; without it, the first period would be omitted, which seems to work too

xtreg y eventt* x1 x2 i.time, r fe

/*Actually the following also works

gen tt = event + 5
reghdfe y i.tt x1 x2, absorb(id time) vce(robust)

*/

coefplot, ///
   keep(eventt*)  ///
   coeflabels(eventt2 = "-3"   ///
   eventt3 = "-2"             ///
   eventt4 = "-1"             ///
   eventt5 = "0"              ///
   eventt6  = "1"             ///
   eventt7  = "2"             ///
   eventt8  = "3"             ///
   eventt9  = "4"             ///
   eventt10 = "5")           ///
   vertical                       ///
   yline(0)                       ///
   ytitle("Coef")               ///
   xtitle("Time passage relative to year of adoption of implied contract exception") ///
   addplot(line @b @at)                 ///
   ciopts(recast(rcap))                 ///
   scheme(s1mono)

///Export the generated figure, with format 800*600
graph export "article2_2.png",as(png) replace width(800) height(600)




***2.1.3 Staggered DID where the policy effect changes over time

///Load the generated basic data file
clear
use "Staggered_DID_Basic_Simu1.dta"

///Generate Y, setting the true policy effect to 3 in the current year and increasing by 3 each year
bysort id: gen y0 = 10  + 5 * x1 + 3 * x2 + T + ind + rnormal()
bysort id: gen y1 = 10  + 5 * x1 + 3 * x2 + T + ind  + (time - birth + 1 ) * 3 + rnormal() if time >= 2004 & id >= 1 & id <= 20
bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 +  T + ind  + (time - birth + 1 ) * 3  + rnormal() if time >= 2006 & id >= 21 & id <= 40
bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 +  T + ind  + (time - birth + 1 ) * 3  + rnormal() if time >= 2008 & id >= 41 & id <= 60
bysort id: replace y1 = 10  + 5 * x1 + 3 * x2 +  T + ind  + rnormal() if y1 == .

replace y = y0 + D * (y1 - y0)

///Remove the influence of individual effects and covariates on Y, obtain the residuals and plot them
xtreg y x1 x2 , fe r
predict e, ue
binscatter e time, line(connect) by(D)

///Export the generated figure, with format 800*600
graph export "article2_3.png",as(png) replace width(800) height(600)

//Compute the treatment effect
reghdfe y c.D x1 x2, absorb(id time) vce(robust)

//Take a look using the event study approach
///Subtract the year the individual receives treatment from the current year to get the relative time value event; merge periods before -4 into period -4, since some individuals do not have time beyond period -4
///Then generate dummy variables for the relative time values, eventt, and set the first period as the baseline comparison group

gen event = time - birth_date
replace event = -4 if event <= -4
tab event, gen(eventt)
drop eventt1

xtreg y eventt* x1 x2 i.time, r fe

coefplot, ///
   keep(eventt*)  ///
   coeflabels(eventt2 = "-3"   ///
   eventt3 = "-2"           ///
   eventt4 = "-1"           ///
   eventt5 = "0"           ///
   eventt6  = "1"             ///
   eventt7  = "2"              ///
   eventt8  = "3"              ///
   eventt9  = "4"              ///
   eventt10 = "5")            ///
   vertical                             ///
   yline(0)                             ///
   ytitle("Coef")                 ///
   xtitle("Time passage relative to year of adoption of implied contract exception") ///
   addplot(line @b @at)                 ///
   ciopts(recast(rcap))                 ///
   scheme(s1mono)

///Export the generated figure, with format 800*600
graph export "article2_4.png",as(png) replace width(800) height(600)





***2.2 The case where some sample units never enter the treatment group

***2.2.1 Data generation for staggered DID

///Set 60 observations and set the random number seed
clear all
set obs 60 
set seed 10101
gen id =_n

/// Expand each value 11 times, then drop the first sixty observations, i.e., 60*11-60 = 600, giving panel data of 60 individuals over 10 years
expand 11
drop in 1/60
count

///Generate the time indicator grouped by id
bys id: gen time = _n+1999
xtset id time

///Generate covariates as well as individual and time effects
gen x1 = rnormal(1,7)
gen x2 = rnormal(2,5)

sort time id
by time: gen ind = _n
sort id time
by id: gen T = _n
gen y = 0

///Generate the treatment variable; here D is Dit. Individuals 1-20 receive the shock in 2004, 21-40 in 2006, and individuals 41-60 never receive the intervention

gen D = 0
gen birth_date = 0
gen G = 0

forvalues i = 1/20{
	replace D = 1 if id  == `i' & time >= 2004
	replace birth_date = 2004 if id == `i'
    replace  G = 1 if id == `i'
}

forvalues i = 21/40{
	replace D = 1 if id  == `i' & time >= 2006
	replace birth_date = 2006 if id == `i'
    replace  G = 2 if id == `i'
}

///Save the basic data structure as a dta file, Staggered_DID_Basic_Simu2.dta, saved by default under the current working directory path

save "Staggered_DID_Basic_Simu2.dta", replace





***2.2.2 The policy effect changes over time

///Load the generated basic data file
use "Staggered_DID_Basic_Simu2.dta", clear 

///Generate Y, setting the true policy effect to 3 in the current year and increasing by 3 each year
bysort id: gen     y0 = 10 + 5*x1 + 3*x2 + T + ind + rnormal()
bysort id: gen     y1 = 10 + 5*x1 + 3*x2 + T + ind + (time - birth_date + 1) * 3 + rnormal() if time >= 2004 & id >= 1 & id <= 20
bysort id: replace y1 = 10 + 5*x1 + 3*x2 + T + ind + (time - birth_date + 1) * 3 + rnormal() if time >= 2006 & id >= 21 & id <= 40
bysort id: replace y1 = 10 + 5*x1 + 3*x2 + T + ind + rnormal() if y1 == .

replace y = y0 + D * (y1 - y0)

///Remove the influence of individual effects and covariates on Y, obtain the residuals and plot them
xtreg y x1 x2 , fe r
predict e, ue
binscatter e time, line(connect) by(G)

///Export the generated figure, with format 800*600
graph export "article_3.png", as(png) replace width(800) height(600)

//Compute the treatment effect
reghdfe y c.D x1 x2, absorb(id time) vce(robust)

/*
//Also take a look with the xthdidiregress command, a new command in Stata 18. I did not understand this part, so the results below are not reliable. For more information see Stata's official documentation for this command, or https://mp.weixin.qq.com/s/_wz283xgl56MMsYY1GVguQ or Prof. Chen Qiang's WeChat account https://mp.weixin.qq.com/s/mgXcnGESfm0PnrZetowj9w

xthdidregress aipw (y x1 x2) (D), group(id)

//The time distribution of the ATT for each cohort
estat atetplot, sci

//Compute the ATT for each cohort over time
estat aggregation, cohort graph
*/

//Take a look using the event study approach
///Subtract the year the individual receives treatment from the current year to get the relative time value event; merge periods before -4 into period -4, since some individuals do not have time beyond period -4
/*
When setting the relative time values, we find that if there are individuals who remain in the control group throughout, assigning relative time values to them becomes a difficult problem — since they never receive the intervention, there is naturally no such thing as N periods before or N periods after the policy for them. Assigning them any value would therefore cause problems, so could we set the relative time of such individuals to missing? The answer is no. Setting the relative time values of these individuals to missing would make their relative-time dummy variables missing as well. This would further leave only the treatment-group individuals in the sample usable for the ESA equation, which would naturally defeat our goal of estimating the policy effect for each year and thereby testing the parallel trends.

So how do we solve this problem? The simplest way is that after generating the relative-time dummy variables for each individual, we can manually assign 0 to the missing values in the dummy variables. This way these individuals can be used in the regression. In addition, assigning 0 to the missing values of these individuals also indicates that they are control group individuals.
*/
///Since there are individuals who remain in the control group throughout, the event variable is missing for these individuals
///Then generate the relative-time dummy variables eventt; for individuals who remain in the control group throughout, the eventt dummies all take the value 0, and the first period is set as the baseline comparison group

gen event = time - birth_date if id <= 40

replace event = -4 if event <= -4
tab event, gen(eventt)

forvalues i = 1/10{
	replace eventt`i' = 0 if eventt`i' == .
}

drop eventt1

reghdfe y eventt* x1 x2, absorb(id time) vce(robust)

///Graphical illustration
coefplot, ///
   keep(eventt*)  ///
   coeflabels(eventt2 = "-3"   ///
   eventt3 = "-2"           ///
   eventt4 = "-1"           ///
   eventt5 = "0"           ///
   eventt6  = "1"             ///
   eventt7  = "2"              ///
   eventt8  = "3"              ///
   eventt9  = "4"              ///
   eventt10 = "5")            ///
   vertical                             ///
   yline(0)                             ///
   ytitle("Coef")                 ///
   xtitle("Time passage relative to year of adoption of implied contract exception") ///
   addplot(line @b @at)                 ///
   ciopts(recast(rcap))                 ///
   ///rescale(100)                         ///
   scheme(s1mono)

///Export the generated figure, with format 800*600> 
graph export "article3_3.png",as(png) replace width(800) height(600)





***2.2.3 Also try the placebo test (for the case where the treatment effect changes over time, didplacebo is actually not applicable; here we just run the code to take a look)
//Method 1: use didplacebo to run in-time, in-space, and mixed placebo tests in one step

clear
use "Staggered_DID_Basic_Simu2.dta"

///Generate Y, setting the true policy effect to 3 in the current year and increasing by 3 each year
bysort id: gen     y0 = 10 + 5*x1 + 3*x2 + T + ind + rnormal()
bysort id: gen     y1 = 10 + 5*x1 + 3*x2 + T + ind + (time - birth_date + 1) * 3 + rnormal() if time >= 2004 & id >= 1 & id <= 20
bysort id: replace y1 = 10 + 5*x1 + 3*x2 + T + ind + (time - birth_date + 1) * 3 + rnormal() if time >= 2006 & id >= 21 & id <= 40
bysort id: replace y1 = 10 + 5*x1 + 3*x2 + T + ind + rnormal() if y1 == .

replace y = y0 + D * (y1 - y0)


reghdfe y D x1 x2, absorb(id time) vce(robust)

estimates store did_test

didplacebo did_test, treatvar(D) pbotime(1(1)4)
didplacebo did_test, treatvar(D) pbounit rep(500) seed(1)
didplacebo did_test, treatvar(D) pbomix(2) //The option "pbomix(2)" runs the mixed placebo test suitable for staggered DID in an unrestricted way (version 2); see Prof. Chen Qiang's WeChat post https://mp.weixin.qq.com/s/3dDjSqLfq04aXE0YiEHLFA for details
didplacebo did_test, treatvar(D) pbomix(3) //The option "pbomix(3)" runs the restricted mixed placebo test (version 3) for the staggered DID model, in order to preserve the cohort structure. See Prof. Chen Qiang's WeChat post https://mp.weixin.qq.com/s/3dDjSqLfq04aXE0YiEHLFA for details



//The in-time, in-space, and mixed placebo tests can also be run at the same time
didplacebo did_test, treatvar(D) pbotime(1(1)4) pbounit pbomix(3)


//Method 2: randomly generate the treatment group (with Method 1 available, Method 2 feels rather useless now)
*See https://www.lianxh.cn/details/731.html
*Placebo test with one line of code: permute

clear
use "Staggered_DID_Basic_Simu2.dta"

///Generate Y, setting the true policy effect to 3 in the current year and increasing by 3 each year
bysort id: gen     y0 = 10 + 5*x1 + 3*x2 + T + ind + rnormal()
bysort id: gen     y1 = 10 + 5*x1 + 3*x2 + T + ind + (time - birth_date + 1) * 3 + rnormal() if time >= 2004 & id >= 1 & id <= 20
bysort id: replace y1 = 10 + 5*x1 + 3*x2 + T + ind + (time - birth_date + 1) * 3 + rnormal() if time >= 2006 & id >= 21 & id <= 40
bysort id: replace y1 = 10 + 5*x1 + 3*x2 + T + ind + rnormal() if y1 == .

replace y = y0 + D * (y1 - y0)

permute D _b[D], reps(1000) rseed(123): reghdfe y D x1 x2, absorb(id time) vce(robust)
*did is the interaction term
*reps(1000) means resampling 1000 times

//Sample 1000 times, record the coefficients and save them into a new dataset
permute D beta = _b[D],  ///
        reps(1000) rseed(123) saving("simulations2.dta", replace):  ///
        reghdfe y D x1 x2, absorb(id time) vce(robust)

//Plot the coefficients
use "simulations2.dta", clear
#delimit ;
dpplot beta, xline(10.02, lc(black*0.5) lp(dash))
             xline(0, lc(black*0.5) lp(solid))
             xtitle("Estimator", size(*0.8)) 
             xlabel(-5(1)5, format(%4.1f) labsize(small))
             ytitle("Density", size(*0.8)) 
             ylabel(, nogrid format(%4.1f) labsize(small)) 
             note("") caption("") 
             graphregion(fcolor(white)) ;
#delimit cr
graph export "placebo_test2.png", width(1000) replace
```
