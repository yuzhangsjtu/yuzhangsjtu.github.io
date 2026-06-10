---
title: "What Happens When the Government Runs Out of Money?"
date: 2024-07-09T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Austerity"]
summary: "Using a quasi-natural experiment from the abolition of agricultural taxes, this study finds that county governments largely offset revenue losses by strengthening tax enforcement, particularly on VAT."
---

A major difference between local government and central government is this: when the central government runs short of money it can print more, whereas when local governments are strapped they have to come up with other means. So what exactly do local governments do when they are “**tightening their belts**”?

This study exploits the quasi‑natural experiment of China abolishing the **agricultural tax** in 2005 to examine how local governments adjust tax enforcement practice in the face of fiscal pressure. The main finding indicates that county‑level governments offset most of the revenue loss from the agricultural tax reform mainly by stepping up tax enforcement—**particularly of the value‑added tax (VAT)**.

**Title:** The effect of a fiscal squeeze on tax enforcement: Evidence from a natural experiment in China

**Journal:** *[Journal of Public Economics](https://www.sciencedirect.com/journal/journal-of-public-economics)*

**Author:**

- <u>Shawn Xiaoguang Chen</u>: Senior Lecturer (Associate Professor in North America) at the Business School of the University of Western Australia. His research focuses on interplay between taxation, development, and state building. https://sites.google.com/site/xgchenist/home

**Publication time:** 18 January 2017

<br/>

## The VAT administration system and the agricultural tax

#### **The VAT administration system**

**Separation between central government and local tax administrators**: In China, VAT is administered by the State Administration of Taxation (SAT), an agency under the direct leadership of the central government, which ensures nationwide consistency in VAT administration and enforcement. Local governments, however, shoulder many other tasks such as driving GDP growth and increasing employment, which breeds fierce competition among localities on those fronts.

**Separation between central government and local governments**: VAT revenue is shared between the central and local governments at a fixed ratio: the central government takes 75 % and local governments take 25 %. Since local governments retain only a small portion of VAT receipts, their incentive to enforce VAT strictly is dampened. Local governments cannot set tax rates or tax bases on their own but must rely on the pre‑existing tax administration system, so they may be inclined to relax actual VAT enforcement in order to ease the burden on local enterprises.

**Why can local governments influence actual VAT collection?**

Although the SAT is controlled by the centre, local governments still exercise considerable sway over VAT enforcement.

- The heads of local tax offices are directly supervised by the local Party secretary, who has a major say in their promotion and career development.
- Moreover, assistance from local public security agencies is vital for tax enforcement, and those agencies are themselves controlled by local governments.
- Local governments can also provide the SAT with office space, support for children’s education and health care, and they frequently grant subsidies to tax offices to improve working conditions.
- When tax officials fail to cooperate, local governments can resort to anti‑corruption measures to exert pressure.

Local governments can affect the effective tax rate paid by enterprises in several ways: instructing tax offices to turn a blind eye to firms’ use of fraudulent invoices, directly ordering tax offices to enforce a lower rate for particular enterprises, allowing firms to defer tax payments, and flexibly adjusting enforcement intensity through practices such as “tax‑target contracting”.

#### **The agricultural tax reform**

Before the 2005 reform, China levied an agricultural tax on a wide range of agricultural products; taxpayers were individuals or organisations earning income from those products. The agricultural tax was a local tax, with revenues shared mainly between county‑ and prefecture‑level governments.

The central government abolished the agricultural tax in order to lighten the burden on peasants and ease social unrest in rural areas. To ensure local governments could still afford spending on education and day‑to‑day operations, the centre compensated them through intergovernmental transfers. The subsidies were based on a pre‑determined formula to forestall bargaining between local governments and the centre.

Transfer payments began in 2001. Although local governments stopped collecting most agricultural tax revenue well before 2005, the law formally abolishing the tax did not pass until 2006. For local governments, therefore, the loss of agricultural tax receipts was somewhat abrupt in timing, even though they had known since the early 2000s that the tax would eventually be repealed.

The agricultural tax was collected by Local Tax Bureaus (LAT), whereas VAT is administered by the State Administration of Taxation (SAT). The two are separate tax authorities, and staff of the agricultural tax offices are not reassigned to the SAT upon abolition of the tax.

## Data and methodology

#### **Main datasets**

**Annual Survey of Industrial Production in China (2000‑2007)**:

- Covers all state‑owned enterprises and non‑state enterprises with annual sales exceeding RMB 5 million (roughly USD 800,000).
- The number of surveyed firms rises from about 66,000 to 168,000 over the sample period.
- Information available for each firm includes 4‑digit industry code, ownership, county‑level region code, value added, sales revenue and tax payments (recorded for VAT, corporate income tax, business tax, etc.).

**National Prefectural‑ and County‑Level Fiscal Statistics (2000‑2007)**:

- Contains county‑ and prefecture‑level governments’ revenue and expenditure data.
- Variables of interest include tax revenue, total revenue (including extra‑budgetary revenue), total expenditure (including extra‑budgetary expenditure), agricultural tax revenue, agricultural tax reform subsidy, land sales revenue, aggregate GDP and secondary‑sector GDP.

#### **Key variables**

**Effective VAT rate**

The effective VAT rate for firm $f$ in year $t$ is constructed as:

$$
\text{Effective VAT Rate}_{f,t} = \frac{\text{VAT Payment}_{f,t}}{\text{Value Added}_{f,t}}
$$
For brevity I omit the subscripts $f$ and $t$. In accounting terms, VAT payment comprises VAT payable plus adjustment items. Because China uses an invoice‑based VAT deduction method, **the VAT payable of a firm equals the output VAT it charges its customers minus the input VAT it has paid to its suppliers**. Adjustment items consist of VAT that accrued but remained unpaid in previous years, tax‑evasion fines, and penalties for overdue payment.

**Revenue loss from abolition of the agricultural tax**

During 2000‑2004, agricultural tax revenue accounted on average for roughly 12 % of all county‑level government tax receipts. Although the central government compensated through agricultural tax reform subsidies, the revenue loss of the reform was still substantial for county governments.

In the main regressions of this paper, the revenue loss measure is constructed as:

$$
\Delta \text{Agr}_c = \frac{\text{Agr Tax Revenue}_{c,2000-2004} + \text{Subsidy}_{c,2000-2004}}{\text{Total Tax Revenue}_{c,2000-2004}} - \frac{\text{Subsidy}_{c,2005-2007}}{\text{Total Tax Revenue}_{c,2005-2007}}
$$

where $X_{c,2000-2004}$ (or $X_{c,2005-2007}$) denotes the county average of variable $X$ over 2000‑2004 (2005‑2007). $\mathit{Agr Tax Revenue}$ is revenue from the agricultural tax, and $\mathit{Subsidy}$ represents central government transfers linked to the agricultural‑tax reform. To prevent bargaining between local and central governments, the amount of the subsidy was based on a predetermined formula, and depended primarily on a county’s historical expenditures.

#### **Empirical strategy**

The paper follows a standard difference‑in‑differences (diff‑in‑diff) approach to identify the effect of abolishing the agricultural tax on tax enforcement. The regression model is:

$$
\tau_{c,p,t} = \beta_c + \eta_{p,t} + \lambda \times \Delta Agr_c \times Post_t + \rho \times \pmb{X}_{c,t} + \epsilon_{c,p,t}
$$

where the dependent variable $\tau_{c,p,t}$ is the effective VAT rate. The subscripts $c$, $p$ and $t$ refer to county, prefecture and year, respectively.

Explanation of variables

- $\tau_{c,p,t}$ : Dependent variable; the effective VAT rate in county $c$ and year $t$.
- $\beta_c$ : County fixed effects, absorbing county‑specific attributes.
- $\eta_{p,t}$ : Prefecture‑year fixed effects, controlling for prefecture‑ and year‑specific variation, to ensure counties remain comparable to one another.
- $\Delta Agr_c$ : Measures the fiscal revenue loss of county $c$.
- $Post_t$ : A dummy that equals 1 for all post‑reform years, from 2005 onward.
- $\Delta Agr_c \times Post_t$ : The interaction term of primary interest, picking up how the revenue loss affects the effective VAT rate after the reform. The parameter $\lambda$ is the focus of the study, indicating how responsive the effective VAT rate is to the intensity of the tax‑loss shock.
- $\pmb{X}_{c,t}$ : A vector containing enterprise‑level characteristics at the county $c$‑and‑year $t$ level, including median firm size, capital intensity, profitability, input‑output ratio, and the means of ownership dummies, of a liquidity variable, and of the ratio of exports to sales. These control variables are included to avoid bias from omitted factors that might be associated with the compound variable $\Delta Agr_c \times Post_t$ and that also impact $\tau_{c,p,t}$.
- $\epsilon_{c,p,t}$ : The error term, capturing unmodelled variation.

## Results

- Table 2 reports the baseline regression. The coefficient on the interaction of revenue loss $\Delta Agr \times Post$ is 2.29, demonstrating that in counties that suffered greater agricultural‑tax‑revenue losses the effective VAT rate rose significantly, suggesting heightened VAT enforcement.
  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240708212207116.png)
  
- Panel B of Table 2 displays a placebo test using 2004 as the baseline year. It shows that for 2003, 2002, 2001 and 2000 the coefficients are all insignificant, supporting the parallel‑trends assumption.
- Figure 5.1 plots the dynamic effect of county‑revenue‑loss on the effective VAT rate. The effective VAT rate prior to 2005 is never statistically different from that of the baseline year 2004, further validating the parallel‑trends assumption. In 2005, after the agricultural tax was abolished, a pronounced jump in the effective VAT rate appears in counties hurt more by the revenue loss.
  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240708212710203.png)

- The paper also examines a range of alternative interpretations and undertakes an array of robustness checks, none of which overturn its main findings.
- Heterogeneity analysis reveals that multiple factors influence local governments’ incentives to enforce VAT: the tax‑sharing ratio, the size of the tax base, and the availability of other revenue sources such as land sales proceeds all matter. When the local‑government VAT‑sharing ratio is low, when the tax base is larger, or when alternative revenue streams are more abundant, ex ante the VAT enforcement incentive appears weaker.

## Conclusion

Exploiting the abolition of the agricultural tax in 2005, a natural experiment in China, this study analyses local governments’ tax enforcement response under a fiscal squeeze as well as the factors that shape it. The results show that local governments offset the agricultural‑tax revenue shortfall mainly by tightening tax enforcement on the VAT and other taxes. This finding both enriches the tax‑enforcement literature and offers important theoretical grounding and practical insight for policy design. Future research could probe how the fiscal enforcement behaviour of local governments varies across institutional environments, thereby yielding more wide‑ranging and deeper understanding.

## Extras

- This post was generated mainly with GPT‑4o; I still read too few taxation papers.
- Last year there were also reports that some jurisdictions posted massive jumps in **confiscatory fine and penalty revenue**.
- When the authorities set about expanding income or cutting outlays, the consequences for citizens’ everyday lives are bound to be large.

## Original‑paper information

Chen, Shawn Xiaoguang. “The effect of a fiscal squeeze on tax enforcement: Evidence from a natural experiment in China.” *Journal of Public Economics* 147 (2017): 62‑76. https://doi.org/10.1016/j.jpubeco.2017.01.001

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240708194050866.png)
