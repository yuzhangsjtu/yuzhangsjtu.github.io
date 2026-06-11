---
title: "JPubE - When the Government Runs Short of Money, It Collects More Tax"
date: 2024-07-09T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Austerity"]
summary: "Exploiting the quasi-natural experiment of the abolition of the agricultural tax, this study finds that county governments largely offset the revenue loss from the agricultural tax's abolition by strengthening tax enforcement (particularly of the VAT)."
---

> A major difference between local governments and the central government is this: when the central government runs short of money it can print currency, whereas when local governments run out they can only look for other means. What do local governments do when they have to "**tighten their belts**"?
>
> This study exploits the quasi-natural experiment of China's abolition of the **agricultural tax** in 2005 to examine how local governments respond to fiscal pressure by adjusting their tax enforcement practices. The main finding indicates that county-level governments largely offset the revenue loss from the abolition of the agricultural tax by strengthening tax enforcement (particularly of the **VAT**).

**Title:** The effect of a fiscal squeeze on tax enforcement: Evidence from a natural experiment in China

**Journal:** *[Journal of Public Economics](https://www.sciencedirect.com/journal/journal-of-public-economics)*

**Authors:**

- <u>Shawn Xiaoguang Chen</u>: Senior Lecturer (Associate Professor in North America) at the Business School of the University of Western Australia. His research focuses on interplay between taxation, development, and state building. https://sites.google.com/site/xgchenist/home

**Publication date:** 18 January 2017

<br/>

## The VAT Administration System and the Agricultural Tax

#### **The VAT administration system**

**Separation between the government and tax administrators**: In China, VAT administration is the responsibility of the State Administration of Taxation (SAT), an agency under the direct leadership of the central government, which ensures nationwide consistency in VAT administration and enforcement. Local governments, however, also bear many other tasks, such as driving GDP growth and increasing employment, which makes competition among localities on these fronts extremely fierce.

**Separation between the central government and local governments**: VAT revenue is shared between the central and local governments at a fixed ratio: the central government takes 75%, and local governments take 25%. Since local governments can obtain only a small portion of the VAT, their incentive to enforce the VAT strictly is reduced. Local governments cannot set the tax rate or tax base on their own and can only rely on the existing tax administration system, so they may be inclined to lower the actual intensity of VAT enforcement in order to ease the burden on local enterprises.

**Why can local governments influence actual VAT collection?**

Although the SAT is controlled by the central government, local governments still wield considerable influence over VAT enforcement.

- The heads of local tax bureaus are directly supervised by the local Party secretary, who has significant influence over their promotion and career development.
- Moreover, support from local public security agencies is very important for tax enforcement, and these public security agencies are in turn controlled by local governments.
- Local governments can also provide the SAT with support in areas such as office land, children's education, and health care, and the tax offices frequently receive subsidies from local governments to improve working conditions.
- If tax officials fail to cooperate, local governments can also use anti-corruption measures to apply pressure.

Local governments can influence the effective tax rate that enterprises actually pay in several ways, such as requiring the tax authorities to turn a blind eye to firms' use of fake invoices, directly instructing the tax authorities to enforce a lower rate for certain enterprises, allowing firms to defer tax payments, and flexibly adjusting enforcement intensity through methods such as "tax-target contracting".

#### **The agricultural tax reform**

Before the 2005 reform, China levied an agricultural tax on various agricultural products, and the taxpayers were the individuals or organizations that earned income from those products. The agricultural tax was a local tax, with revenue shared mainly between county- and prefecture-level governments.

The central government decided to abolish the agricultural tax in order to lighten the burden on peasants and to ease social unrest in rural areas. To ensure that local governments could still afford spending on education and day-to-day operations, the central government subsidized them through intergovernmental transfer payments. These subsidies were based on a predetermined formula in order to avoid bargaining between local governments and the central government.

Subsidy payments began in 2001. Although local governments had already stopped collecting most of the agricultural tax before 2005, the law formally abolishing it was not passed until 2006. As a result, the loss of agricultural tax revenue was somewhat abrupt in timing for local governments, even though they had known since the early 2000s that the tax would eventually be abolished.

The agricultural tax was collected by the Local Tax Bureaus (LAT), while the VAT is administered by the State Administration of Taxation (SAT). The two are independent tax authorities, and after the abolition of the agricultural tax, the staff of the agricultural tax bureaus were not reassigned to the SAT.

## Data and Methodology

#### **Main datasets**

**China's Annual Survey of Industrial Production (2000-2007)**:

- Includes all state-owned and non-state-owned enterprises with annual sales exceeding RMB 5 million (about USD 800,000).
- The number of firms in the sample increased from about 66,000 to 168,000 over the sample period.
- The information for each firm includes the 4-digit industry code, ownership, county-level region code, value added, sales revenue, and tax payments (including VAT, corporate income tax, business tax, etc.).

**National Prefectural- and County-Level Fiscal Statistics (2000-2007)**:

- Includes revenue and expenditure data for county- and prefecture-level governments.

- The variables of interest include: tax revenue, total revenue (including extra-budgetary revenue), total expenditure (including extra-budgetary expenditure), agricultural tax revenue, agricultural tax reform subsidy, land sales revenue, aggregate GDP, and secondary-sector GDP.

#### **Key variables**

**Effective VAT rate**

The effective VAT rate for firm f in year t is constructed as:

$$
\text{Effective VAT Rate}{f,t} = \frac{\text{VAT Payment}{f,t}}{\text{Value Added}_{f,t}}
$$
For simplicity, the subscripts $f$ and $t$ are omitted. In accounting terms, the VAT payment comprises VAT payable and adjustment items. Because China uses an invoice-based VAT deduction method, **a firm's VAT payable equals the output VAT it charges its customers minus the input VAT it collects from its suppliers**. The adjustment items include VAT that accrued but was unpaid in previous years and penalties for tax evasion or overdue payment.

**Revenue loss from the abolition of the agricultural tax**

During 2000-2004, agricultural tax revenue accounted on average for about 12% of county governments' tax revenue. Although the central government provided agricultural tax reform subsidies, the revenue loss from the reform was still quite considerable for county-level governments.

The revenue loss measure used in this paper's main regressions is constructed as follows:

$$
\Delta\text{Agr}_c = \frac{\text{Agr Tax Revenue}_{c,2000-2004} + \text{Subsidy}_{c,2000-2004}}{\text{Total Tax Revenue}_{c,2000-2004}} - \frac{\text{Subsidy}_{c,2005-2007}}{\text{Total Tax Revenue}_{c,2005-2007}}
$$
where $X_{c,2000-2004}（X_{c,2005-2007}）$ is the average of variable $X$ for county $c$ over 2000-2004 (2005-2007). $Agr Tax Revenue$ is agricultural tax revenue, and $Subsidy$ is the central government transfer payment associated with the agricultural tax reform. To prevent bargaining between local governments and the central government, the subsidy amount was based on a predetermined formula that depended primarily on the county government's historical expenditures.

#### **Empirical strategy**


This paper adopts the standard difference-in-differences (Diff-in-Diff) method to identify the effect of the abolition of the agricultural tax on tax enforcement. The regression model is as follows:
$$
\tau_{c,p,t} = \beta_c + \eta_{p,t} + \lambda \times \Delta Agr_c \times Post_t + \rho \times \pmb{X}_{c,t} + \epsilon_{c,p,t}
$$
where the dependent variable $\tau_{c,p,t}$ is the effective VAT rate. The subscripts $c, p, t$ represent county, prefecture, and year, respectively.

Explanation of variables

- $\tau_{c,p,t}$ : The dependent variable; the effective VAT rate of county $c$ in year $t$.
-  $\beta_c$ : County fixed effects, absorbing county-specific characteristics.
-  $\eta_{p,t}$ : Prefecture-year fixed effects, controlling for prefecture- and year-specific variation to ensure comparability across counties.
-  $\Delta Agr_c$ : Measures the revenue loss of county $c$.
-  $Post_t$ : A dummy variable indicating the years before and after the tax reform, taking the value 1 in 2005 and thereafter.
-  $\Delta Agr_c \times Post_t$ : The key interaction term, capturing the effect of the revenue loss on the effective VAT rate after the reform. The parameter $\lambda$ is the focus of the study, indicating the response of the effective VAT rate to the intensity of the tax loss.
-  $\pmb{X}_{c,t}$ : A vector containing the enterprise characteristics of county $c$ in year $t$, including median firm size, capital intensity, profitability, the input-output ratio, and the averages of ownership, liquidity, and the export-to-sales ratio. They are included in the model to avoid bias that omitted variables might introduce, as such variables could be correlated with $\Delta Agr_c \times Post_t$ and affect $\tau_{c,p,t}$.
-  $\epsilon_{c,p,t}$ : The error term, capturing other variation not explained by the model.

## Results

- Table 2 reports the baseline regression results. The results show that the coefficient on the revenue loss $\Delta Agr × Post$ is 2.29, indicating that counties suffering greater agricultural tax revenue losses experienced a significant rise in the effective VAT rate, implying strengthened VAT enforcement; ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240708212207116.png)
- Panel B of Table 2 reports the placebo test results, with 2004 as the baseline year. The results show that the coefficients for 2003, 2002, 2001, and 2000 are all insignificant, indicating that the parallel-trends assumption holds.
- Figure 5.1 shows the dynamic effect of county governments' revenue loss on the effective VAT rate. The results show that the effective VAT rate before 2005 was not significantly different from that of the baseline year 2004, further confirming the validity of the parallel-trends assumption. In 2005, after the abolition of the agricultural tax, the effective VAT rate rose significantly in counties with larger revenue losses. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240708212710203.png)

- This paper also conducts a series of tests ruling out alternative explanations as well as robustness checks, and the baseline regression results remain robust.
- The heterogeneity analysis shows that local governments' incentives to enforce the VAT are influenced by multiple factors, including the tax-sharing ratio, the size of the tax base, and other revenue sources (such as land sales revenue). When a local government's share of VAT revenue is lower, its tax base is larger, or it has more other revenue sources, its incentive to enforce the VAT is weaker.

## Conclusion

By studying the natural experiment of China's abolition of the agricultural tax in 2005, this paper provides an in-depth analysis of local governments' tax enforcement behavior under fiscal austerity and the factors that influence it. The results show that local governments make up for the revenue loss from the abolition of the agricultural tax by strengthening enforcement of the VAT and other taxes. This finding not only enriches the literature on tax enforcement but also provides important theoretical grounding and practical insight for policymaking. Future research could further explore local governments' tax enforcement behavior under different institutional contexts, so as to provide a broader and deeper understanding.

## Extra

- This post was mostly generated by GPT-4o; I have read too few papers on taxation.
- Last year there was also news of substantial increases in **confiscatory fine and penalty revenue** in some regions.
- When the government works to expand revenue and cut expenditure, the impact on citizens' lives is large.

## Original Paper Information

Chen, Shawn Xiaoguang. "The effect of a fiscal squeeze on tax enforcement: Evidence from a natural experiment in China." *Journal of Public Economics* 147 (2017): 62-76. https://doi.org/10.1016/j.jpubeco.2017.01.001

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240708194050866.png)
