---
title: "Handbook of Event Study"
date: 2023-11-11T10:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["Event Study", "Causal Inference", "DID"]
summary: "The basic principles, code experiments, and considerations of the event study method."
---

The previous article ([Handbook of DID family](https://yuzhangnju.github.io/2023/10/25/Handbook%20of%20DID%20family_20231026/)) mentioned that the event study method has now become a standard move within the DID strategy, used to **test parallel trends** and to uncover the **temporal variation in the effect of an exogenous shock**. In such applications, the event study method plays a supporting role. However, the DID design itself has two major flaws. First, the DID strategy yields the average treatment effect (ATE), whereas in reality we more often need to know the different effects of an exogenous shock across different periods. Second, DID requires the treatment effect to appear immediately after the shock, but in fact the effect of an event often takes some time before it can be seen (for example, there is a long gap between the moment a policy is promulgated and its implementation on the ground, and a vaccine does not take effect immediately after vaccination either). (In fact, the DID strategy has many other problems as well; see the previous article for details. In these situations, applying the event study method may be a better choice.)

The event study method provides rich detail about the temporal dynamics of a shock (intuitively displayed in graphical form), nicely making up for the two major flaws of DID. In the future, the event study method may swap places with DID and become the benchmark result for treatment-effect research.

This blog post excerpts the recent progress of the event study method, and attaches code at the end. Guided by the philosophy of **learning in practice**, I want, through hands-on operation, to improve my own mastery of the event study method.

The main references are as follows:

- Zhang, Ziyao & Huang, Wei. (2023). Implementation, Problems and Extensions of the Event Study Method. *The Journal of Quantitative & Technological Economics*(09),71-92. 
- Miller, D. L. (2023). An Introductory Guide to Event Study Models. *Journal of Economic Perspectives*, *37*(2), 203-230.

- [[Xiangzhang Tweet #2919] ES, Launch! — An Introductory Guide to the Event Study Method](https://mp.weixin.qq.com/s/5kC3RyyhZkOILtFrlbQOag)

- [[Xiangzhang Tweet #2604] The Enduring Minimum Wage and Employment Question — DID and the Event Study Method](https://mp.weixin.qq.com/s/U-eJElBBzErXM5HaYl2mgA)

## 1 Overview of the Event Study Method

### 1.1 An Intuitive Understanding of the Event Study Method

In the code for the parallel-trend test on simulated data in the [previous article](https://yuzhangnju.github.io/2023/10/25/Handbook%20of%20DID%20family_20231026/), one can find that, compared with the DID strategy, the event study method has exactly the same regression-equation structure, but the main variable is changed from DID's "treatment group * treatment timing" to all possible interactions of the treatment-group dummy with the time dummies. The intuitive understanding is that the event study opens up the box of the DID treatment effect, decomposing the average treatment effect into a weighted average of a series of "two-group, two-period" DID combinations; sometimes the event study method is also called dynamic DID. (Think about it carefully: is this the case? In the treatment-effect plot of an event study, each point can be understood as a 2x2 DID.)

**One picture is worth a thousand words:**

![image-20231106154603637](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106154603637.png)

⬆️ The figure above shows the simulated-data result for the treatment effect varying over time from the previous article. The x-axis is the relative time to the treatment timing: negative numbers indicate the pre-treatment period, positive numbers the post-treatment period; the y-axis is the regression coefficient, i.e. the magnitude of the treatment effect and its confidence interval.

If we use the DID regression result, we can obtain the magnitude of the treatment effect, but we cannot observe how the treatment effect varies over time. Using the event study method, we can find that there is no treatment effect before the event, that the treatment effect becomes prominent afterward, and that the magnitude of the effect grows over time. This richer treatment effect is exactly what we care about.

### 1.2 Understanding It Through the Equation and Simulated Data

Let's take a look at the [estimation equation](https://www.lianxh.cn/details/826.html) (the renderer has been changed, and now complex formulas can also render correctly!):
$$
y_{st} = \alpha + \sum_{j=2}^J\beta_j(\text{Lag}\ j)_{st} + \sum_{k=1}^K(\text{Lead}\ k)_{st} + \mu_s + \lambda_t + X'_{st}\Gamma + \epsilon_{st} \quad(1)
$$
In equation (1), $y_{st}$ is the dependent variable of individual $s$ in period $t$; $J$ and $K$ denote the number of pre-event and post-event periods respectively (also called lag terms and lead terms); $\mu_s$ and $\lambda_t$ are the individual fixed effect and the time fixed effect respectively, and what we want to look at are the coefficients on the lead terms. For example 🌰: if the study period runs from 2008 to 2017 and the event timing is 2013, then $J$ is 4 and $K$ is 5. In the code for the regression equation, all of these years have to be taken into account. (The notation is very rigorous, but as the code in the previous article shows, the operation is very simple.)

It is more convenient to understand it using the estimation equation in the [JEP paper](https://www.aeaweb.org/articles?id=10.1257/jep.37.2.203) (this formula was really laborious to type up):
$$
y_{it} =\underbrace{ (\sum_{j\in\{-m,_\cdots,0,_\cdots,n\} }\gamma_j\cdot D_{i,t-j} ) }_{\mathrm{Event\ Study\ Terms} }\  + \underbrace{\alpha_i+\delta_t}_{\mathrm{Panel\ Fixed\ Effects} } + \underbrace{\beta\cdot X_{it} }_{\mathrm{ (Optional)\ Control Variables} } + \epsilon_{it}\quad(2)
$$
The meanings of the important coefficients in equation (2) are as follows:

- $\gamma_j$: the event coefficient; the post-event coefficients can display the dynamic effect of the event treatment, while the pre-event coefficients can provide a placebo test;
- $D_{i,t-j}$: the indicator variable for event time.

 Let's look at one more example of simulated data:

> The simulated sample has 400 individuals in total, each with 20 periods of observations. The sample contains 4 groups (Group): 3 treatment groups that receive treatment at different timings, and 1 control group that is never treated, each group containing 100 individuals. The 3 treatment groups receive treatment in periods 5, 10, and 15 respectively. The treatment effect of the treated individuals grows over time: for each additional period of treatment, the treatment effect increases by 1 unit. (Zhang Ziyao et al., 2023)

![ES_ATT](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/ES_ATT.png)

> Try it out: with DID at this point, what average treatment effect would be computed? (See the code section for the experiment.)
>

The earliest relative treatment period is period -14, and the latest relative treatment period is period 15. The average treatment effect for each relative period is as follows (this should count as the calendar-period result, right?):

![image-20231106221142311](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106221142311.png)

### 1.3 The Basic Assumptions of the Event Study Method

These refer to the assumptions that the object of an event study should satisfy when TWFE is used (i.e. the situations in panels a and b of the figure below):

- Parallel-trends assumption
- No-anticipation-effect assumption
- Homogeneous-treatment-effect-path assumption

![image-20231107203952473](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231107203952473.png)



## 2 Several Issues in the Practice of the Event Study Method

### 2.1 Base-Period Selection

The base period means choosing a reference group to serve as a comparable benchmark for the other periods, so that one can judge whether the treatment effect is significant and how large it is. In theory, the base period can be set to any period before the treatment timing; if you do not choose manually, Stata will by default drop the earliest period.

But in practice, it is fairly common to use period -1, i.e. the period right before the event occurs, as the base period; given that there may be anticipation effects, one can also choose period -3. Choosing period -1 is now the standard move. (Choosing some other period inevitably invites suspicion of manipulating the data or cherry-picking results.)

### 2.2 Testing the Pre-Event Parallel-Trends Assumption

Let me stress once again that the parallel-trends test is extremely important; it is the single most important condition that makes the counterfactual of the treatment group hold within the potential-outcomes causal framework.

In current papers, the test for parallel trends amounts to: after choosing a base period, observing whether the coefficient for each pre-event period is 0; if the coefficient for every period is insignificant, the pre-event parallel trend is deemed satisfied. But there are two problems with doing this:

- The influence of the base period is very important; with different base periods, the coefficient results can turn out to be exactly the opposite, and the base period affects the significance of every period's coefficient overall. Hence there is the possibility of cherry-picking results;
- The pre-event parallel trend requires the average treatment effect of each pre-treatment period to be 0, whose corresponding null hypothesis is $\mu_{-2}=\mu_{-3}=\cdots=\mu_{-K}=0$, yet the current test of choosing a base period and looking at the coefficients is not actually testing this null hypothesis. Therefore, one needs to conduct a joint test of the coefficients rather than focus on the significance of a single coefficient.

Joint test: such as the F-test, which can be used to check whether multiple coefficients are simultaneously equal to 0.

![image-20231106204518638](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106204518638.png)

From panel (a), choosing different base periods has a large effect on the pre-event coefficients.

Zhang Ziyao et al. (2022) make the following recommendations regarding the pre-event parallel-trends test:

> First, one must pay more attention to whether the pre-event estimated coefficients exhibit an obvious time trend. The fact that an individual pre-event estimated coefficient is significant may be merely an accidental phenomenon caused by data noise; however, if there is an obvious pre-event trend, it may signal that the parallel-trends assumption does not hold, which directly threatens the reliability of the identification assumption of the event study method and may lead to serious bias in the estimation results. Therefore, a pre-event time trend (even if it is insignificant) is a far more serious problem than an individual pre-event coefficient being significant. If the estimation results suggest that this kind of problem may exist, one must conduct a detailed analysis and discussion of the source of the problem, and as far as possible carry out targeted treatment to mitigate its interference with the estimation results.
>
> Second, because the pre-event time trend is the focus of attention, except in certain special cases, one must graph the estimation results in order to intuitively discern whether a pre-event time trend exists.
>
> Third, testing the pre-event parallel trend should be done with a joint test of the pre-event estimated coefficients, rather than focusing on the significance of a single coefficient.

### 2.3 Binning and Trimming the Data

**Data binning** (Binning) means setting an event window $[-K,L]$, resetting the relative period of observations earlier than the event window $(l\le-K)$ to period $-K$, and resetting the relative period of observations later than the event window $l\ge L$ to period $L$.

**Data trimming** (Trimming) likewise sets an event window, the difference being that samples outside the event window are deleted rather than binned.

Binning the data has two advantages: first, when the sample contains no never-treated control group, it can avoid the collinearity problem so as to identify the average treatment effect; second, it retains the full sample and thereby improves estimation efficiency. In practice one should avoid binning the post-treatment periods; if the pre-event parallel trend holds, one can appropriately bin the pre-treatment periods.

The advantage of trimming the data is that it produces less bias, but it has a certain sample-selection problem and reduces estimation efficiency.

Both approaches are seen in practice.

![image-20231106211031460](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106211031460.png)

#### 2.4 Correctly Controlling for Group-Specific Heterogeneous Time Trends

The core identification assumption of the event study method is the parallel-trends assumption. However, because it involves unobservable potential outcomes after treatment occurs, the parallel-trends assumption itself cannot possibly be directly confirmed or refuted by a direct test. Therefore, in practice researchers, on the one hand, test whether the pre-event parallel trend holds so as to indirectly provide support for the parallel-trends assumption, and, on the other hand, consider **relaxing the parallel-trends assumption** as much as possible, i.e. allowing some specific form of trend difference between the treatment group and the control group. The most common is to assume that there is a heterogeneous linear time trend across groups, as shown in the figure below, where the 3 treatment groups have linear time trends with slopes of 1, 0.5, and 0.2 respectively, and the control group has no time trend. This data-generating process clearly does not satisfy the parallel-trends assumption, and directly using the event study method cannot yield a consistent estimate of the average treatment effect. For this situation, one can, on top of the regression equation, further control for group-specific time trends:
$$
y_{it} = \alpha_i + \gamma_gf(t) + \sum_{l=-K}^{-2}\mu_l D_{it}^l + \sum_{l=0}^L\beta_lD_{lt}^l + \epsilon_{it} \quad(3)
$$
In equation (3), $f(t)$ denotes the functional form of the time-trend term, which can be linear or quadratic; $\gamma_g$ denotes the parameter of the time-trend term, and $g$ means that the time-trend term differs across groups. In the figure below, the time-trend slope of the control group is $\gamma_0 = 0$, and the time-trend slopes of groups 1, 2, and 3 are 1, 0.5, and 0.2 respectively.

![image-20231106211537255](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106211537255.png)

In practice researchers usually directly run regression (3), believing that $y_gf(t)$ can well control for the potential cross-group time-trend difference, thereby ensuring that the estimated coefficients $\mu_l$ and $\beta_l$ can consistently estimate the average treatment effect for each period. However, that is <mark>not the case</mark>! Look at the example:

![image-20231106214116230](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106214116230.png)

In the figure above, first, one can find that because the parallel-trends assumption is not satisfied, the event study method cannot correctly identify the true average treatment effect before and after treatment. Second, and surprisingly, once the group time-trend term $\gamma_g\times t$ is controlled for, the event study method not only fails to consistently estimate the average causal effect of each period, but even leads to larger estimation bias! Moreover, the choice of base period also has a large effect on the estimation results!

As for how to handle heterogeneous time trends across groups, there are currently two main approaches (I feel that the two approaches are essentially the same):

- **The two-stage estimation method that manually removes the pre-event trend**: In the first stage, one uses the not-yet-treated subsample (the control group and the not-yet-treated treatment groups) to estimate the group-specific heterogeneous time trend and extrapolates it to the post-treatment periods, removing the time trend from the outcome variable (Detrend). In the second stage, one uses the outcome variable after removing the pre-event trend to carry out the event study estimation (Goodman-Bacon, 2021; Dustmann et al., 2022). The logic behind this method is very intuitive: if the group time trend remains unchanged in the pre-treatment and post-treatment periods, using the not-yet-treated subsample can correctly estimate the group time trend, the detrended outcome variable once again satisfies the parallel-trends assumption, and the event study method can correctly estimate the average treatment effect of each period;
- **The imputation method**: Since the problem lies in the fact that using the full sample cannot consistently estimate the group time-trend term, a natural solution is to use the not-yet-treated subsample to correctly identify the group time-trend term $\gamma_gf(t)$ as well as the two-way fixed effects $\alpha_i$ and $\lambda _t$, remove them from the outcome variable $y_{it}$, and then carry out the regression estimation.

![image-20231106220927856](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231106220927856.png)

⬆️ Here both two-stage DID and removing the pre-event trend are fairly reliable.

In the experiment, I found that as long as the base periods are chosen to be the earliest period and the period right before treatment, controlling for the time trend, the results do not differ much and fall within the confidence interval; for example, here, choosing period -14 and period -1:

![image-20231109112514196](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231109112514196.png)

> You can think of the groups with heterogeneous time trends as piecewise functions whose starting points are the first period and the period right before treatment respectively; just choose the starting point as the base period!

### 2.5 The Event Study Method Under Heterogeneous Treatment Effects

For this part you can also refer to the relevant content in [Handbook of DID family](https://yuzhangnju.github.io/2023/10/25/Handbook%20of%20DID%20family_20231026/)! It's still those robust estimators or diagnostic methods for heterogeneous DID.

#### 2.5.1 Heterogeneous Treatment Effects but No Cross-Group Trend Difference

That is, the parallel-trends assumption and the no-anticipation-effect assumption are satisfied, but the treatment effect differs across groups, in which case the treatment effect obtained with TWFE is biased. The reason is that the weights used to compute the treatment effect go wrong: there is the phenomenon of negative weights, which treats the earlier-treated groups as control groups, i.e. "forbidden comparisons". (As with the earlier heterogeneous DID, this is also the reason why the treatment effect computed with TWFE in section 3.2 is only 2.69.)



![image-20231112160047110](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112160047110.png)

The main solutions are (it feels like they are essentially the same hh):

- The "group-time" average treatment effect estimation method: first estimate the group-time average treatment effect $ATT_{g,l}$, then, according to some weighting (equal weights or group-size weights), manually weight them to obtain the weighted average treatment effect $ATT_l$ for each relative period. Because the negative-weight problem is artificially avoided during the manual weighting process, this kind of estimator can correct the bias of the two-way fixed-effects model and correctly estimate the average treatment effect of each period;
- The imputation method: use the not-yet-treated subsample (including the control group and the treatment groups in their pre-treatment periods) to estimate and fit the counterfactual outcomes of the treated individuals, then compute the individual treatment effects, and finally aggregate them to obtain the average treatment effect for each relative period;
- The stacking method: by matching each treatment-group cohort with a specific control group composed of never-treated control units or not-yet-treated treatment units, and then stacking the matched samples together to run the regression.

![image-20231112163237401](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112163237401.png)

**The Pre-Event Parallel-Trends Test Under Heterogeneous Treatment Effects**

- Using the full sample will give rise to the weighting problem caused by errors in the reference period and reference object
- Using the not-yet-treated subsample is sufficient (whether using TWFE after removing the treated samples (as in the figure below), or using a heterogeneity-robust estimator (see the pre-treatment-timing portion of the figure above), both work)

![image-20231112163818038](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112163818038.png)

#### 2.5.2 Heterogeneous Treatment Effects + Heterogeneous Cross-Group Trends

There seems to be no good way to handle this. The authors give some examples, such as **endogenous selection of treatment timing**:

- Ashenfelter's Dip: Ashenfelter (1978), when evaluating the effect of a training program on wages, found that workers' average income exhibited an obvious downward trend before participating in training; subsequent research found that the reason for this phenomenon is that unemployed workers are more motivated to participate in vocational training in order to better find a new job. Because workers who participate in vocational training (the treatment group) and workers who do not participate in vocational training in the same period (the control group) are not well comparable, the parallel-trends assumption very likely does not hold, causing the event study method to be unable to correctly identify the causal effect (Heckman and Smith, 1999). Another common example is the effect of leaving a job on an employee's income. There are two possible scenarios for an employee leaving a job: one is voluntarily resigning to work at a new firm in order to obtain higher income, the other is being forcibly dismissed by the firm, resulting in passive unemployment. Clearly, the effect of leaving a job on an employee's income differs enormously across the two scenarios: voluntary resigners can usually obtain higher income, whereas those who are forced into unemployment see their income drop substantially. The more serious problem is that the counterfactual incomes of voluntary resigners and forced unemployed (the treatment group) and of continuously employed workers (the control group) very likely have different time trends, in which case the parallel-trends assumption no longer holds. (Events like participating in training have overly strong endogeneity and will involve self-selection.)
- For another example, consider the data-generating process in the figure below: the outcome variable is personal income, the event is changing jobs, and the dashed line is the counterfactual potential outcome of personal income for those who do not change jobs. From the figure one can see that when an individual anticipates that the firm will face operating difficulties in the future and income may decline, they will consider changing jobs; the more capable an employee is (the higher their pre-event income), the more easily they can find a new position, so they change jobs earlier (the treatment timing is earlier) and the income of the new position is also higher (the treatment effect is stronger); conversely, less capable employees find it harder to find a new position, so they change jobs later (the treatment timing is later) and the income of the new position is lower (the treatment effect is weaker). Because the counterfactual potential outcomes of the untreated treatment group are not parallel to those of the control group, the parallel-trends assumption is not satisfied. In this situation, **neither the traditional event study method based on the two-way fixed-effects model nor the heterogeneity-robust estimators are free of estimation bias; <mark>none of them can</mark> correctly estimate the average treatment effect of each period**.

The data situation at this point resembles the figure below:

![image-20231112164904412](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112164904412.png)

The true treatment effect is as follows:

![image-20231112165018003](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112165018003.png)

And neither TWFE nor the various robust estimators can estimate it accurately:

![image-20231112164748356](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/image-20231112164748356.png)

**How do you know whether your own data can be effectively estimated? Or whether there are any problems with the estimation results?**

- Try it with TWFE, then look at a heterogeneity-robust estimator; if the two results differ greatly, you should pay attention to where the problem lies!

### 2.6 Other Issues

- How to handle an individual experiencing multiple events within the event window
- How to handle the existence of events with different intensities of influence
- What happens when there is spatial correlation among event dates

And so on; you can refer to [[Xiangzhang Tweet #2919] ES, Launch! — An Introductory Guide to the Event Study Method](https://mp.weixin.qq.com/s/5kC3RyyhZkOILtFrlbQOag)

## 3 Data and Code

### 3.1 Data-Generating Process

The data-generating process is extremely important!!!

You must understand it; for the parts that are hard to understand, consult ChatGPT!!!

```stata
clear all

set seed 20230101

***********************
**       DGP1        **
***********************
*  - Staggered treatment timing
*  - Homogeneous treatment-effect paths
*  -Parallel trends satisfied

* N=400, T=20, G=4
clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* Generate individual fixed effects
gen  unit_c     = runiform(0,10) if time==1
egen unit_spec  = mean(unit_c), by(id)

gen x = runiform(0,1)
gen     indicator_c = unit_c + 1*x //in Stata, observations with missing values are not filled in by addition
qui sum indicator_c,d
scalar  threshold1   = r(p25) //create quartile scalars
scalar  threshold2   = r(p50)
scalar  threshold3   = r(p75)
egen    indicator   = mean(indicator_c), by(id)
gen     treat = 1
replace treat = 2 if indicator>threshold1
replace treat = 3 if indicator>threshold2
replace treat = 4 if indicator>threshold3
tab treat, gen(group)

gen timing = . //generate the year of receiving treatment
replace timing = 5 if treat==2
replace timing = 10 if treat==3
replace timing = 15 if treat==4

* Define potential outcomes y0 and y1
gen rel_date = time-timing //generate the relative year of receiving treatment
replace rel_date = 0 if mi(rel_date) //if the individual never receives treatment, set it to 0
gen post = rel_date>=0 //generate the post dummy: 0 before treatment, 1 after
gen group_level = 10*group2 + 3*group3 -3*group4 //used to simulate the baseline level effects of the different groups
gen group_trend = 0 //parallel trends
gen tauit =  (1*group2 + 1*group3 + 1*group4)*post*(rel_date+1) //generate the potential treatment-effect variable tauit. Here it is set to increase linearly over time (rel_date+1) for treated individuals (indicated by post). The effect is the same for all treatment groups; each group's coefficient is 1, indicating no cross-group difference in treatment effects
gen y0 = group_level + group_trend + unit_spec + runiform(0,10)
gen y1 = group_level + group_trend + unit_spec + tauit + runiform(0,10)
* Generate the observed sample y 
cap drop y
gen D = 0
replace D = 1 if rel_date>=0&inlist(treat,2,3,4)
gen y = (1-D)*y0 + D*y1 //before treatment, y=y0; after treatment, the treated group has y=y1


forvalues k = 14(-1)2 {
   gen relb_`k' = rel_date == -`k'  // pre-event relative periods
   label var relb_`k' "-`k'"        // label used for plotting
}

gen rel_base = rel_date==-1 //base period
label var rel_base "-1"

forvalues k = 0/15 {
    gen relf_`k' = rel_date == `k'  // post-event relative periods
    label var relf_`k' "`k'"            // label used for plotting
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // all relative-period dummies of the control group are set to 0
save simu_data_DGP01, replace




***********************
**       DGP2        **
***********************
*  -Staggered treatment timing
*  -Homogeneous treatment-effect paths
*  -Cross-group trend differences exist; parallel trends not satisfied

* Set the random seed
set seed 20230101

clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* Generate individual fixed effects
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

* Define potential outcomes y0 and y1
gen rel_date = time-timing
replace rel_date = 0 if mi(rel_date)
gen post = rel_date>=0
gen group_level = 10*group2 + 3*group3 -3*group4
gen group_trend = (0*group1 + 1*group2 + 0.5*group3 + 0.2*group4)*time //previously this was 0; now groups 2, 3, and 4 are given time trends with slopes of 1, 0.5, and 0.2 respectively. This time trend is present from the earliest observed period, not only from the treatment timing, and therefore breaks parallel trends
gen tauit =  (1*group2 + 1*group3 + 1*group4)*post*(1 + rel_date) //short-run and dynamic effects
gen y0 = group_level + group_trend + unit_spec + runiform(0,10)
gen y1 = group_level + group_trend + unit_spec + tauit + runiform(0,10)
* Generate the observed sample y 
cap drop y
gen D = 0
replace D = 1 if rel_date>=0&inlist(treat,2,3,4)
gen y = (1-D)*y0 + D*y1 

forvalues k = 14(-1)2 {
   gen relb_`k' = rel_date == -`k'  // pre-event relative periods
   label var relb_`k' "-`k'"        // label used for plotting
}

gen rel_base = rel_date==-1 //base period
label var rel_base "-1"

forvalues k = 0/15 {
    gen relf_`k' = rel_date == `k'  // post-event relative periods
    label var relf_`k' "`k'"            // label used for plotting
}
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // all relative-period dummies of the control group are set to 0

save simu_data_DGP02, replace



***********************
**       DGP3        **
***********************
*  -Staggered treatment timing
*  -Heterogeneous treatment effects
*  -Parallel trends satisfied

* Set the random seed
set seed 20230101

clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* Generate individual fixed effects
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

* Define potential outcomes y0 and y1
gen rel_date = time-timing
replace rel_date = 0 if mi(rel_date)
gen post = rel_date>=0
gen group_level = 10*group2 + 3*group3 -3*group4
gen group_trend = 0 //parallel trends satisfied
gen tauit =  (0.5*group2 + 1*group3 + 2*group4)*post*(rel_date+1) //here each group is given a different coefficient (previously all were 1), i.e. treatment-effect heterogeneity
gen y0 = group_level + group_trend + unit_spec + runiform(0,10)
gen y1 = group_level + group_trend + unit_spec + tauit + runiform(0,10)

* Generate the observed sample y 
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
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // relative-period dummies of the control group are all 0

save simu_data_DGP03, replace


***********************
**       DGP4        **
***********************
*  -Staggered treatment timing
*  -Heterogeneous treatment effects
*  -Cross-group trend differences exist; parallel trends not satisfied

* Set the random seed
set seed 20230101

clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* Generate individual fixed effects
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

* Define potential outcomes y0 and y1
gen rel_date = time-timing
replace rel_date = 0 if mi(rel_date)
gen post = rel_date>=0
gen group_level = 40*group2 + 25*group3 +10*group4
gen group_trend = 0
egen X_cf = mean(unit_c), by(treat) //this enters the calculation below, hence cross-group trend differences arise and parallel trends are not satisfied

gen tauit =  (2*group2 + 1*group3 + 0.5*group4)*post*(rel_date+1) //heterogeneous treatment effects
gen y0 = group_level + group_trend  - 0.1*X_cf*rel_date*post + runiform(0,10)
gen y1 = group_level + group_trend  - 0.1*X_cf*rel_date*post + tauit + runiform(0,10)
* Generate the observed sample y 
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
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // relative-period dummies of the control group are all 0
save simu_data_DGP04, replace
```

### 3.2 The Case of a Homogeneous Treatment-Effect Path

That is, the different groups have different shock timings but the same effect, all increasing linearly over time.

```stata
*Note: the current directory must contain a folder named figure to store the output images

clear all

**********************
**     Figure 2     **
**********************

* Run the DGP file to generate the data
use simu_data_DGP01, clear

preserve 
collapse (mean) y, by(treat time) //collapse the dataset to the means of the y variable, with the means grouped by the time and treat (treatment group) variables. In the collapsed dataset, each treat-time combination has only one observation, representing the mean of y for that combination. Below, the scatter plot for treatment group treat==2 is drawn, connected with lines (c(l)) and using circle markers (m(o)). o\s\t\d denote circle, square, triangle, and diamond respectively
tw  (sc y time if treat==2, c(l) m(o)) ///
    (sc y time if treat==3, c(l) m(s)) ///
    (sc y time if treat==4, c(l) m(t)) ///
    (sc y time if treat==1, c(l) m(d)), ylabel(0(10)40) ///
    subtit("(a) Simulated data", pos(6)) ///
    legend(order(1 "Cohort 1 (T*=5)" 2 "Cohort 2 (T*=10)" 3 "Cohort 3 (T*=15)" 4 "Control group" ) $tllgd col(1)) xtitle("Period") ytitle("Outcome variable Y") scale(1) name(Homo1)
restore

* Figure 2b
preserve 
collapse (mean) att=tauit, by(treat rel_date) //plot the treatment effect ATT
replace att = att+0.5 if treat==3
replace att = att+1 if treat==2
tw  (sc att rel_date if treat==2, c(l) m(o)) ///
    (sc att rel_date if treat==3, c(l) m(s)) ///
    (sc att rel_date if treat==4, c(l) m(t)), xlabel(-15(5)15) ///
    xline(-0.5, lc(gs8) lp(dash)) ///
    xtitle("Relative treatment period") ytitle("Average treatment effect (ATT)") ///
    subtit("(b) True average treatment effects", pos(6)) ///
    legend(order(1 "Cohort 1 (T*=5)" 2 "Cohort 2 (T*=10)" 3 "Cohort 3 (T*=15)") $tllgd col(1)) scale(1) name(Homo2)
restore
gr combine Homo1 Homo2, xsize(10) scale(1.5)
gr export "figure/ES_ATT.png", width(3000) replace
gr export "figure/ES_ATT.svg", replace
gr save figure/ES_ATT.gph, replace

**********************
**     Figure 3     **
**********************
use simu_data_DGP01, clear

* TWFE
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time) cluster(id)
eststo ES_TWFE //note: o.rel_base selects the base period; o means omitted

/*

********************************************************************************
reghdfe y c.D, a(id time) cluster(id) //check with DID again: the average treatment effect comes out as 2.69, which seems wrong?**
********************************************************************************
//2.69 is definitely wrong; holding the control group fixed, the treatment effects of groups 1, 2, and 3 alone are 8.66 5.93 3.27 respectively; the true treatment effect should be 6.76
//sum taui, the mean is 2.79, consistent with the TWFE result, showing that TWFE indeed has the negative-weight problem

//heterogeneity over time also counts as heterogeneous DID and requires a heterogeneity-robust estimator; let's try csdid below
gen gvar = timing
replace gvar = 0 if timing == .
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(simple) //computes an average treatment effect of 6.67, which is the closest to 6.76!
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(group) //each cohort's treatment effect is about the same as what I computed manually above, haha
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(calendar) //results by calendar time, probably not what we want
csdid y, ivar(id) time(time) gvar(gvar) method(dripw) agg(event) //this result is very close to the reghdfe result above, basically the same, and is what we want

*/

gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15"
testparm $leadall //jointly test the coefficients. This uses the results of the reghdfe regression above; if csdid is inserted in between, they will be overwritten

//bture refers to the true coefficient matrix
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
//create a matrix whose columns correspond to certain lag and lead variables, filled with certain specific values of these variables (such as 0 or the mean of some group)

coefplot (matrix(btrue[1]), m(Oh)) (ES_TWFE, recast(connect)), drop(_cons) order(relb* rel_base relf*) omitted baselevel vertical ///
    ciopts(recast(rcap)) yline(0, lc(gs0) lp(solid)) ///
    xline(14.5, lc(gs8) lp(dash)) xtitle("Time relative to treatment onset") ytitle("Estimated coefficient") ///
    text(4 6 "Joint test of pre-event coefficients", place(c)) ///
    text(2 6 "F=0.83 P=0.6256", place(c)) ///
    legend(order(2 "True coefficients" 4 "Estimated coefficients" ) $brlgd col(1)) ///
    xsize(8) scale(1.3)
gr export "figure/ES_TWFE.png", width(3000) replace
gr export "figure/ES_TWFE.svg",  replace
gr save figure/ES_TWFE.gph, replace

**********************
**     Figure 5     **
**********************
* Single-coefficient tests and the joint test

* TWFE estimation
gr drop _all //drop all graph elements in the current graph window
use simu_data_DGP01, clear
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_*, a(id time) cluster(id) //here period -1 serves as the base period
eststo ES_TWFE1

reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 o.relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base relf_*, a(id time) cluster(id) //here period -8 serves as the base period
eststo ES_TWFE2

gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
coefplot ES_TWFE1 (ES_TWFE2, lp(solid)), keep($leadall) omitted baselevel vertical ///
    recast(con) lw(thick) ciopts(recast(rspike) color(%40)) ///
    yline(0, lc(gs0) lp(solid) lw(medthick)) ylab(-2(1)2) ///
    xtitle("Time relative to treatment onset") ytitle("Estimated coefficient")  tit("(a) Single-coefficient significance", pos(6))  ///
    legend(order(2 "Base period = -1" 4 "Base period = -8") $brlgd) scale(1.2)  name(PTT1)


*- Invariance of the joint-test results for pre-event coefficients
*--- Run a regression with each of periods -14 to -1 as the base period, computing the joint-test P-value of each regression
*--- Result: no matter which period is used as the base period, the joint-test P-value remains unchanged
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
    xtit("Base period") ytitle("P-value") tit("(b) Joint-test significance", pos(6)) scale(1.2) name(PTT2)

gr combine PTT1 PTT2, xsize(10) scale(1.5)

gr export "figure/ES_preTest.png", width(3000) replace
gr export "figure/ES_preTest.svg",  replace
gr save figure/ES_preTest.gph, replace

**********************
**     Figure 6     **
**********************
* Binning and trimming

*** Binning and trimming within the [-5,10] window
use simu_data_DGP01, clear
cap drop relb_* rel_base relf_*

gen rel_date_cut = rel_date
local pre_cut  = 5
local post_cut = 10
replace rel_date_cut = -`pre_cut'  if rel_date<-`pre_cut'
replace rel_date_cut = `post_cut' if rel_date>`post_cut'
tab rel_date_cut
//set everything beyond period -5 to -5, and everything beyond period 10 to 10

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
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // relative-period dummies of the control group are all 0
//this uses the local macros above; these commands must be run together with the local statements above, and will throw an error if run alone

reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id) //results with binning
eststo ES_bin

reghdfe y relb_* o.rel_base relf_* if inrange(rel_date,-5,10), a(id time) cluster(id) //trimming is simpler to do: just specify the range directly
eststo ES_trim

* Set up the true coefficient matrix btrue
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
    xline(5.5, lc(gs8) lp(dash)) xtitle("Relative treatment period") ytitle("Estimated coefficient") ///
    legend(order(2 "True coefficients" 4 "Binned sample" 6 "Trimmed sample") $blgd) ///
    title("(a) Event window [-5,10]", pos(6)) name(BT1)


***Binning and trimming within the [-10,5] window
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
for var relb_* relf_* rel_base: replace X = 0 if group1==1 // relative-period dummies of the control group are all 0
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
    xline(10.5, lc(gs8) lp(dash)) ylabel(0(3)9) xtitle("Relative treatment period") ytitle("Estimated coefficient") ///
    legend(order(2 "True coefficients" 4 "Binned sample" 6 "Trimmed sample") $blgd) ///
    title("(b) Event window [-10,5]", pos(6)) name(BT2)

grc1leg2 BT1 BT2, xsize(10) scale(1.5) labsize(small)

gr export "figure/ES_BinTrim.png", width(3000) replace
gr export "figure/ES_BinTrim.svg", replace
gr save figure/ES_BinTrim.gph, replace
```

### 3.3 The Case with Group Time Trends

```stata
clear all

**********************
**     Figure 7     **
**********************
use simu_data_DGP02, clear

cap gr drop GT* //this line attempts to drop all graph objects whose names begin with "GT"; even if no graph objects with such names are found, no error message is shown and the whole program continues to run. This is commonly used when writing scripts, to ensure the script keeps running without errors even when certain graph objects do not exist.
preserve 
collapse (mean) y, by(treat time)
tw  (sc y time if treat==2, c(l) m(o) lp(solid)) ///
    (sc y time if treat==3, c(l) m(s) lp(solid)) ///
    (sc y time if treat==4, c(l) m(t) lp(solid)) ///
    (sc y time if treat==1, c(l) m(d) lp(solid)) ///
    (lfit y time if treat==2&time<5, range(1 20) lc(plb1) lp(shortdash)) ///
    (lfit y time if treat==3&time<10, range(1 20) lc(plr1) lp(shortdash)) ///
    (lfit y time if treat==4&time<15, range(1 20) lc(plg1) lp(shortdash)) , ylabel(0(10)50) ///
    xtitle("Period") ytitle("Outcome variable Y") ///
    legend(order(1 "Cohort 1 (trend=1t)" 2 "Cohort 2 (trend=0.5t)" 3 "Cohort 3 (trend=0.2t)" 4 "Control group") $blgd col(2)) ///
    tit("(a) Simulated data", pos(6)) scale(1.2) name(GT_data1)
restore

preserve 
    reghdfe y if D==0, a(id time groupFE=i.treat#c.time) cluster(id) //regress only on all pre-treatment observations, also absorbing the cohort-time interaction
    ereplace groupFESlope1 = mean(groupFESlope1), by(id) //replace groupFESlope1 within each id group with the mean of groupFESlope1 in that group. This is effectively performing a within-group mean normalization, i.e. it fills the D=1 observations with the results computed above. groupFESlope1 is really just the slope?
    gen grouptrend = time*groupFESlope1 //obtain the time trend
    gen y_hat = y - grouptrend //remove the time trend
    collapse (mean) y_hat, by(treat time)
    tw  (sc y_hat time if treat==2, c(l) m(oh) lp(dash)) ///
        (sc y_hat time if treat==3, c(l) m(sh) lp(dash)) ///
        (sc y_hat time if treat==4, c(l) m(th) lp(dash)) ///
        (sc y_hat time if treat==1, c(l) m(dh) lp(dash)), ylabel(0(10)35) ///
        xtitle("Period") ytitle("Outcome variable Y") legend(order(1 "Cohort 1" 2 "Cohort 2 (T*=10, trend=0.5t)" 3 "Cohort 3 (T*=15, trend=0.2t)" 4 "Control group") $blgd row(2)) ///
        tit("(b) Time trends removed", pos(6)) scale(1.2) name(GT_data2)
restore

grc1leg2 GT_data1 GT_data2, xsize(10) scale(1.3)  lr(1) labsize(small)
gr export "figure/ES_GTdata.png", width(3000) replace
gr export "figure/ES_GTdata.svg", replace
gr save figure/ES_GTdata.gph, replace

**********************
**     Figure 8     **
**********************
use simu_data_DGP02, clear

reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id) //direct regression without controlling for cohort time trends; the results are quite strange: significant both before and after treatment, although the pre-treatment coefficients are not large in absolute value
eststo TWFE

reghdfe y  relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time) cluster(id) //with cohort time trends controlled, the pre-treatment coefficients are negative with large absolute values, after which the absolute values shrink steadily and become insignificant in the late post-treatment periods
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
    xline(10.5, lc(gs8) lp(dash)) xtitle("Relative treatment period") ytitle("Estimated coefficient") ///
    legend(order(2 "True coefficients" 4 "Event study" 6 "Group time trends controlled") $blgd col(3)) ///
    tit("(a) Controlling for group time trends", pos(6)) scale(1.2) name(GT_est1)

est clear
reghdfe y  relb_14 relb_13 relb_12 relb_11 o.relb_10 relb_9 relb_8 relb_7 relb_6 o.relb_5 relb_4 relb_3 relb_2 rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time) cluster(id)
eststo TWFE_wtrend1
//the base periods are -10 and -5, with cohort time trends controlled; the results now differ little from the true coefficients. In fact, as long as the earliest period and the period right before treatment are included as base periods, controlling for time trends gives results that differ little and lie within the confidence interval

/*

reghdfe y  o.relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time ) cluster(id) //for example here, the base periods are -14 and -1; the results are very close to the true coefficients, and the true coefficients lie within the confidence intervals of the estimates. Therefore, controlling for time trends and correctly choosing the base periods can yield valid estimates. Alternatively, omitting all pre-event periods also works. But this makes it important to correctly grasp when the shock takes effect in reality.

*/
reghdfe y  relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base relf_0 relf_1 relf_2 relf_3 relf_4 o.relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15, a(id time i.treat#c.time) cluster(id) //the base periods are -1 and 5, also with cohort time trends controlled; the results are now wildly off from the true coefficients
eststo TWFE_wtrend2

coefplot (matrix(btrue[1]), msym(Oh)) TWFE_wtrend1 TWFE_wtrend2, keep($lead10 $lag10) order($lead10 $lag10) omitted baselevel vertical recast(con) ///
    ciopts(recast(rcap)) yline(0, lc(gs8) lp(solid)) ///
    xline(14.5, lc(gs8) lp(dash)) xtitle("Relative treatment period") ytitle("Estimated coefficient") ///
    legend(order(2 "True coefficients" 4 "Base periods=(-10, -5)" 6 "Base periods=(-1, 5)") $blgd col(3)) ///
    tit("(b) Changing the base period", pos(6)) scale(1.2) name(GT_est2)

gr combine GT_est1 GT_est2, xsize(10) scale(1.3)
gr export "figure/ES_GTest.png", width(3000) replace
gr export "figure/ES_GTest.svg", replace
gr save figure/ES_GTest.gph, replace


**********************
**      Table 1     **
**********************
* Estimating group time-trend coefficients
use simu_data_DGP02, clear
forvalues i = 1/4{
    gen group`i'_time = (treat==`i') * time
}
* Since the group time trends are collinear with the time fixed effects, the control group (group1), whose time trend is 0, serves as the reference group
* The coefficients represent the difference between each cohort's linear time-trend coefficient and that of the reference group; since the reference group itself has no time trend, the coefficients represent each group's own linear time-trend slope
est clear
reghdfe y group2_time group3_time group4_time, a(id time) cluster(id) //estimate the time trends using the full sample, which is inaccurate here
eststo model_aux1
reghdfe y group2_time group3_time group4_time if D==0, a(id time) cluster(id) //estimate the time trends using the untreated sample, i.e. observations with D=0, which is accurate here
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
* esttab model_aux2 model_aux1 using "table\model_aux.rtf", keep(group*) r2 se b(4) star(* 0.10 ** 0.05 *** 0.01) nogap replace //export the results


**********************
**     Figure 9     **
**********************
* Correctly controlling for cross-group time trends
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
//the true treatment effect is: 0 in period -1 and earlier, then +1 in each subsequent period

*- TWFE event study
reghdfe y relb_* o.rel_base relf_*, a(id time) cluster(id) //here only period -1 is chosen as the base period, which is biased
eststo TWFE_trend

*- Detrend (Good-man Bacon, 2021)
reghdfe y if D==0, a(id time groupFE=i.treat#c.time) cluster(id)
ereplace groupFESlope1 = mean(groupFESlope1), by(id)
gen grouptrend = time*groupFESlope1
gen y_hat = y - grouptrend //subtracting the time trend
reghdfe y_hat relb_* o.rel_base relf_*, a(id time) cluster(id)
eststo TWFE_detrend

*- Generalized SCM (Liu et al., 2021)
forvalues i = 1/4{
    gen group`i'_time = (treat==`i') * time
}
fect y, treat(D) unit(id) time(time) cov(group1_time group2_time group3_time group4_time) method("fe") se nboots(100) //the generalized synthetic control results are also accurate; somehow this method feels essentially the same as removing the time trend
matrix fect_results = e(ATTs)
matrix rownames fect_results = relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relb_1 relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11
matrix fect_b = fect_results[4..24,3]  //storing the estimates for later
matrix fect_v = fect_results[4..24,4]
matrix fect = [fect_b , fect_v]'

*- Two-stage DiD (Gardner, 2021)
did2s y, first_stage(i.id i.time i.treat#c.time) second_stage(relb* rel_base relf*) treatment(D) cluster(id)
eststo twostage //the two-stage DID results are the most accurate, yet surprisingly there is no need to drop a period??

gl lead10 "relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base"
gl lag10 "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10"
coefplot (matrix(btrue[1]), msym(Oh) recast(scatter))  ///
         (TWFE_trend, m(t)) ///
         (TWFE_detrend, m(s)) ///
         (twostage, m(d)) ///
         (matrix(fect[1]), se(2) m(X)), ///
         keep($lead10 $lag10) omitted baselevel vertical ///
         ciopts(recast(rspike)) yline(0, lc(gs8) lp(solid)) ///
         xline(10.5, lc(gs8) lp(dash)) xtitle("Relative treatment period") ytitle("Estimated coefficient") ///
         legend(order(2 "True coefficients" 4 "Event study (TWFE)" 6 "Pre-event trend removed (Goodman-Bacon, 2021)" 8 "Two-stage DiD (Gardner, 2022)" 10 "Generalized synthetic control (Liu et al., 2022)") $tllgd col(1)) ///
         xsize(8)  scale(1.3) 
gr export "figure/ES_GTest3.png", width(3000) replace
gr export "figure/ES_GTest3.svg", replace
gr save figure/ES_GTest3.gph, replace


/*** The impact of incorrectly controlling for cross-group trends
use simu_data_DGP01, clear //load the data with no cross-group trend differences
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
    xline(14.5, lc(gs8) lp(dash)) xtitle("Relative treatment period") ytitle("Estimated coefficient") ///
    legend(order(2 "True coefficients" 4 "Base periods=(-5, -1)" 6 "Base periods=(-1, 5)") $blgd col(3)) xsize(8) scale(1.2)
```

#### 3.4 The Case with Heterogeneous Treatment Effects

```stata
clear all

* Set up glolab
gl leadall "relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base" // all pre-event coefficients
gl lagall "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10 relf_11 relf_12 relf_13 relf_14 relf_15" // all post-event coefficients
gl lead10 "relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 rel_base" // coefficients for 10 pre-event periods
gl lag10 "relf_0 relf_1 relf_2 relf_3 relf_4 relf_5 relf_6 relf_7 relf_8 relf_9 relf_10" // coefficients for 10 post-event periods

***********************
**  1.View raw data  **
***********************
use simu_data_DGP03, clear

preserve 
collapse (mean) y, by(treat time)
tw  (sc y time if treat==2, c(l) m(O)) ///
    (sc y time if treat==3, c(l) m(S)) ///
    (sc y time if treat==4, c(l) m(T)) ///
    (sc y time if treat==1, c(l) m(D)), ylabel(0(10)30) ///
    legend(order(1 "Cohort 1 (T*=  5, ATT{sub:t}=0.5t)" 2 "Cohort 2 (T*=10, ATT{sub:t}=1t)" 3 "Cohort 3 (T*=15, ATT{sub:t}=2t)" 4 "Control group" ) $blgd col(2)) xtitle("Period") ytitle("Outcome variable Y") name(HTdata1)
restore

preserve 
collapse (mean) tauit, by(treat rel_date)
tw  (sc tauit rel_date if treat==2, c(l) m(s)) ///
    (sc tauit rel_date if treat==3, c(l) m(t)) ///
    (sc tauit rel_date if treat==4, c(l) m(d)), xlabel(-15(5)15) ///
    xtitle("Relative treatment period") ytitle("Average treatment effect (ATT)") ///
    legend(order(1 "Cohort 1 (T*=  5, ATT{sub:t}=0.5t)" 2 "Cohort 2 (T*=10, ATT{sub:t}=1t)" 3 "Cohort 3 (T*=15, ATT{sub:t}=2t)") $blgd col(2)) name(HTdata2)
restore

gr combine HTdata1 HTdata2, xsize(10) scale(1.5)


**********************
**     Figure 10    **
**********************
* Sun & Abraham (2021) weight decomposition
*   - Perform the S&A weight decomposition manually
*   - All weight results are written to the weightfiles.xlsx file
*   - The base period is period -1
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

*- Import the weightfiles.xlsx file and plot
import excel "weightfiles.xlsx", clear firstrow
local period "relf_3"
keep timing rel_date `period'
reshape wide `period', i(rel_date) j(timing) 

gr bar `period'5 `period'10 `period'15, over(rel_date) ///
    bar(1, color(gs0)) bar(2, color(gs6))  bar(3, color(gs12))  ///
    yline(0, lw(medium)) ///
    ytit("Weight") b1tit("Relative treatment period") ///
    legend(order(1 "Cohort 1 (T*=5)" 2 "Cohort 2 (T*=10)" 3 "Cohort 3 (T*=15)") col(1) $tllgd)  ysize(3) scale(1.3)

gr export "figure/ES_SAweights.png", width(3000) replace
gr export "figure/ES_SAweights.svg", replace
gr save figure/ES_SAweights.gph, replace

/*- Check the weight-decomposition results
1.Use the Stata package provided by S&A to do the weight decomposition and cross-check
    use simu_data_DGP03.dta,clear
    local b_idc "relf_3" // set the target period
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
        ytit("Weight") b1tit("Relative treatment period") ///
        legend(order(1 "Cohort 1 (T*=5)" 2 "Cohort 2 (T*=10)" 3 "Cohort 3 (T*=15)") col(1) $tllgd)  ysize(3) scale(1.3)

2.Manually check the period-4 weights
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
        legend(order(1 "Cohort 1" 2 "Cohort 2" 3 "Cohort 3")) ylabel(-0.1(0.05)0.1) ///
        title("Weights of each cohort's period-4 ATT on {&beta}{sub:3}")
*/


**********************
**     Figure 11    **
**********************
* Heterogeneity-robust treatment-effect estimators
*   - Group-time ATT estimators
*       - De Chaisemartin & D’Haultfoeuille (2020)
*       - Sun & Abraham (2021)
*       - Callaway & Sant'Anna (2021)
*       - Dube et al.(2023)
*   - Imputation
*       - Borusyak et al.(2023)
*       - Gardner(2022)
*       - Liu et al.(2022)
*   - Stacked DID
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
eventstudyinteract y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf_* rel_base, vce(cluster id) absorb(id time) cohort(timing) control_cohort(never) //the eventstudytnteract package is used here
matrix sa_b = e(b_iw) // storing the estimates for later
matrix sa_v = e(V_iw)

* Callaway & Sant'Anna (2021)
gen csind = timing
replace csind = 0 if mi(csind)
csdid y, ivar(id) time(time) gvar(csind) notyet agg(event) //csdid
eststo csdid

* Dube et al.(2023) local projections DID
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

* Borusyak et al.(2023) imputation method
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

* Cengiz et al.(2019) stacking method
stackedev y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 relf_* rel_base, cohort(timing) time(time) never_treat(never) unit_fe(id) clust_unit(id)
eststo stack

* It is recommended to draw a quick plot with event_plot first, otherwise an error may occur (reason unknown)
event_plot stack, stub_lag(relf_#) stub_lead(relb_#) plottype(scatter) ciplottype(rcap) 

* Plot
* eventplot only supports 8 estimation results
* True coefficients + TWFE + 6 robust estimators
event_plot btrue# TWFE sa_b#sa_v csdid lpdid_b#lpdid_se bjs twostage stack, ///
    stub_lag(relf# relf_# relf_# Tp# T# tau# relf_# relf_#) ///
    stub_lead(relb# relb_# relb_# Tm# T-# pre# relb_# relb_#) ///
    plottype(scatter) ciplottype(rspike) ///
    together perturb(-0.35(0.1)0.35) trimlead(10) trimlag(10) noautolegend ///
    graph_opt(xtit("Time relative to treatment onset") ytitle("Estimated coefficient") xlabel(-10(1)10) ylabel(-3(3)9) ///
        legend(order(1 "True coefficients" 2 "Event study TWFE" 4 "Sun & Abraham (2021)"  ///
                     6 "Callaway & Sant'Anna (2021)" 8 "Dube et al. (2023)" 10 "Borusyak et al. (2022)" ///
                     12 "Gardner (2022)" 14 "Cengiz et al. (2019)") col(2) $tllgd) ///
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
**     Figure 12    **
**********************
*** Test parallel trends using the untreated sample
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

* TWFE, using the untreated subsample
reghdfe y relb_14 relb_13 relb_12 relb_11 relb_10 relb_9 relb_8 relb_7 relb_6 relb_5 relb_4 relb_3 relb_2 o.rel_base if D==0, a(id time) cluster(id)
eststo TWFE_pre
testparm $leadall


coefplot (matrix(btrue[1]), recast(scatter) msym(Oh) ) (TWFE, m(s) ) (TWFE_pre, m(t)) , keep($leadall) omitted baselevel vertical ///
    recast(con) ciopts(recast(rcap)) yline(0, lc(gs0) lp(solid)) ///
    xline(14, lc(gs8) lp(dash)) ylabel(-6(2)4) xtit("Relative treatment period") ytit("Estimated coefficient") ///
    legend(order(2 "True coefficients" 4 "Full sample" 6 "Untreated subsample") $blgd) ///
    text(-5 1 "Full sample: F=12.78  p=0.00***", size(medium) placement(e)) ///
    text(2.5 1 "Subsample: F=0.78  p=0.69", size(medium) placement(e)) scale(1.2)

gr export "figure/ES_HTpretest.png", width(3000) replace
gr export "figure/ES_HTpretest.svg", replace
gr save figure/ES_HTpretest.gph, replace
```

### 3.5 The Case with Both Heterogeneous Treatment Effects and Group Time Trends (Inaccurate Estimation)

```stata
clear all

**********************
**     Figure 13    **
**********************
use simu_data_DGP04, clear

preserve 
collapse (mean) y y0 y1, by(treat time rel_date)
tw  (sc y time if treat==2, color(plb1) lp(solid) lw(medthick) c(l) m(O)) (line y0 time if treat==2&rel_date>=-1, lc(plb1) lp(dash) lw(thick)) ///
    (sc y time if treat==3, color(plr1) lp(solid) lw(medthick) c(l) m(T)) (line y0 time if treat==3&rel_date>=-1, lc(plr1) lp(dash) lw(thick)) ///
    (sc y time if treat==4, color(plg1) lp(solid) lw(medthick) c(l) m(S)) (line y0 time if treat==4&rel_date>=-1, lc(plg1) lp(dash) lw(thick)) ///
    (sc y time if treat==1, color(ply1) lp(solid) lw(medthick) c(l) m(D)), ///
    ylabel(0(20)80) ///
    legend(order(1 "Cohort 1 (T*= 5)" 3 "Cohort 2 (T*=10)" 5 "Cohort 3 (T*=15)" 7 "Control group" ) $blgd col(2)) xtitle("Period") ytitle("Outcome variable Y") scale(1.2)
restore
gr export "figure/ES_HTNPdata.png", width(3000) replace
gr export "figure/ES_HTNPdata.svg", replace
gr save figure/ES_HTNPdata.gph, replace

preserve 
collapse (mean) tauit, by(treat rel_date)
tw  (sc tauit rel_date if treat==2, c(l) m(s)) ///
    (sc tauit rel_date if treat==3, c(l) m(t)) ///
    (sc tauit rel_date if treat==4, c(l) m(d)), xlabel(-15(5)15) ///
    xtitle("Relative treatment period") ytitle("Average treatment effect (ATT)") ///
    legend(order(1 "Cohort 1 (T*=  5, ATT{sub:t}=0.5t)" 2 "Cohort 2 (T*=10, ATT{sub:t}=1t)" 3 "Cohort 3 (T*=15, ATT{sub:t}=2t)") $tllgd col(1)) 
restore

**********************
**     Figure 14    **
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
    graph_opt(xtit("Relative treatment period") ytitle("Estimated coefficient") xlabel(-10(1)10) ylabel(-5(5)15) ///
        legend(order(1 "True coefficients" 2 "Event study TWFE" 4 "Sun & Abraham (2021)"  6 "Callaway & Sant'Anna (2021)" 8 "Dube et al. (2023)" 10 "Borusyak et al. (2022)" ///
         12 "Gardner (2022)" 14 "Cengiz et al. (2019)") col(2) $tllgd ) ///
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

### 3.6 Figures 1 and 4 from the Original Paper

```stata
* Set the main path
cd "$root"

clear all

**********************
**     Figure 1     **
**********************
use Currie_2020, clear
tw (line DD year, lw(thick)) (line ES year, lw(thick)), ///
    xlab(2005(5)2020) ylab(0(0.05)0.25, format(%6.2f)) ///
    legend(order(1 "Difference-in-differences" 2 "Event study")) ///
    xtitle("") ytitle("Share") subtitle("(a) Top five English-language economics journals", pos(6)) scale(1.2) name(top5)

use cntop, clear
keep if year>=2004
gen DD_share = dd/total
gen ES_share = es/total
gen ESPT_share = espt/total
two (line DD_share year, lw(thick)) ///
    (line ES_share year, lw(thick)) ///
    (line ESPT_share year, lw(thick) lp(shortdash)), ///
    xlab(2005(5)2020) ylab(0(0.05)0.25, format(%6.2f)) ///
    legend(order(1 "Difference-in-differences" 2 "Event study" 3 "Event study + parallel trends") size(medsmall)) ///
    xtitle("") ytitle("Share") subtitle("(b) Leading Chinese journals", pos(6)) scale(1.2) name(cntop)

grc1leg2 top5 cntop, ytol legendfrom(cntop) xsize(8) scale(1.5)
gr export "figure/topshare.png", width(3000) replace
gr export "figure/topshare.svg",  replace


**********************
**     Figure 4     **
**********************

set seed 20230101
clear all    
set obs 400
gen id = _n
expand 20
bysort id: gen time = _n  

* Generate individual fixed effects
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

* Define potential outcomes y0 and y1
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

* Generate the observed sample y 
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
    legend(order(1 "Cohort 1 (ATT{sub:t}=5)" 2 "Cohort 2 (ATT{sub:t}=5)" 3 "Cohort 3 (ATT{sub:t}=5)" 4 "Control group") $blgd col(2)) xtitle("") ytitle("Outcome variable Y")  ///
    tit("(a) Homogeneous treatment effects", pos(6)) name(TEA1)
restore

preserve 
collapse (mean)  y1 y2 y3 y0, by(treat time)
tw  (line y2 time if treat==2, lw(thick)) ///
    (line y2 time if treat==3, lw(thick)) ///
    (line y2 time if treat==4, lw(thick)) ///
    (line y2 time if treat==1, lw(thick)), ylabel(0(10)30) ///
    legend(order(1 "Cohort 1 (ATT{sub:t}=1t)" 2 "Cohort 2 (ATT{sub:t}=1t)" 3 "Cohort 3 (ATT{sub:t}=1t)" 4 "Control group") $blgd col(2)) xtitle("") ytitle("Outcome variable Y")   ///
    tit("(b) Homogeneous treatment-effect paths", pos(6)) name(TEA2)
restore

preserve 
collapse (mean)  y1 y2 y3 y0, by(treat time)
tw  (line y3 time if treat==2, lw(thick)) ///
    (line y3 time if treat==3, lw(thick)) ///
    (line y3 time if treat==4, lw(thick)) ///
    (line y3 time if treat==1, lw(thick)), ylabel(0(10)30) ///
    legend(order(1 "Cohort 1 (ATT{sub:t}=0.5t)" 2 "Cohort 2 (ATT{sub:t}=1t)" 3 "Cohort 3 (ATT{sub:t}=2t)" 4 "Control group") $blgd col(2)) xtitle("") ytitle("Outcome variable Y") ///
    tit("(c) Heterogeneous treatment effects", pos(6)) name(TEA3)
restore

gr combine TEA1 TEA2 TEA3, ysize(4) xsize(12) row(1) scale(1.5)
gr export "figure/ES_TEA.png", width(3000) replace
gr export "figure/ES_TEA.svg", replace
```
