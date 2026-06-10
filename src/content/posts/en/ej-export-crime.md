---
title: EJ — Crime Rises After China's Export Slowdown
date: 2025-04-16T18:00:00+08:00
category: { name: Research Notes, slug: research }
tags: [HIBL]
summary: For every $1,000 drop in a city's per-capita exports, roughly 143 additional criminal cases per million people that year.
---

> This paper studies how China's recent export slowdown affects crime. Using text analysis of millions of Chinese court judgment documents, the authors construct year-by-city crime measures and identify the causal effect of export decline through a **shift-share instrumental variable**. The results show that slowing export growth significantly **pushes up** local crime rates: for every $1,000 decline in a city's per-capita exports, roughly 143 additional criminal cases per million people occur that year. The effect is large — about 13.1% of the interquartile gap in crime rates across cities over the sample period. The export decline hits hardest in cities that are **manufacturing-heavy**, have high shares of **young people** and **migrants**, and high **dropout rates**; it most clearly drives violence, robbery, theft, and prostitution-related offenses. Mechanism analysis shows the negative export shock reduces **employment opportunities** (total employment falls about 12%), lowers **migrant workers' wages** (average wages down about 8.8%), and worsens residents' **mental health**, thereby lowering both the legal-employment payoff and the psychological threshold for potential offenders. By contrast, the fiscal tightening and public-security spending channels matter relatively little. The paper concludes that, facing deglobalization, policy should attend to the social problems trade shocks bring — strengthening social insurance, safety nets, and psychological support to blunt the criminogenic effect of export slowdowns.

**Title:** The Criminogenic Consequence of Export Slowdown: Evidence from Millions of Court Judgment Documents in China

**Journal:** *The Economic Journal*

- *Hong Ma* (马弘): Professor of economics at Tsinghua University's School of Economics and Management, doctoral supervisor, recipient of the National Science Fund for Distinguished Young Scholars ("international trade"), chief expert of a national social-science major project, and a 2017 Young Changjiang Scholar. His research centers on the Chinese economy, mainly international trade and economic development.
- *Yu Pan*: Affiliated with Xiamen University; PhD (candidate) at Tsinghua SEM.
- *Mingzhi (Jimmy) Xu* (徐铭梽): Boya Young Scholar at Peking University, assistant professor and doctoral supervisor at PKU's Institute of New Structural Economics, recipient of an NSFC Excellent Young Scientists grant. Research interests include international economics, industrial organization, and economic development.

**Published online:** 11 February 2025

  

## Background and Significance

Global trade growth has remained sluggish since the 2008 financial crisis. World Bank data show average annual global trade growth of only 3.0% since 2012, far below the 7.1% of the two pre-crisis decades. Rising **protectionism**, recurrent trade wars, and supply-chain reshuffling (the US–China conflict, the aftershocks of COVID-19) have deepened this **deglobalization** trend. Slowing world trade raises concerns about underemployment, particularly in manufacturing. China — the world's factory, with nearly 150 million manufacturing workers — has long relied on exports for growth and jobs. Yet over the past decade China's **export growth collapsed**: from an average of 25% per year in 2001–2008 to under 6% per year in 2011–2018. So sharp a slowdown could have far-reaching socioeconomic consequences, among which **rising crime** is a striking but previously under-studied possibility.

In the existing literature, Dell et al. (2019) and Dix-Carneiro et al. (2018) pioneered the study of trade shocks (rising import competition) on crime, but mainly for **import shocks** in Mexico and Brazil. The **export-decline** scenario remained an academic blank. The **Chinese setting** is special: a huge labor force and an export-led model make China unusually sensitive to external demand; meanwhile research on crime determinants in Asian countries is scarce, mostly for lack of data. This study fills the gap, using Chinese experience to reveal the social consequences of export slowdown and extending the scope of trade-shock research.

The data and methods are also novel. The authors exploit the Supreme People's Court requirement (from 2013) that courts at all levels publish judgment documents, obtaining massive micro-level judicial data. Text analysis of millions of criminal judgments from 2012–2018 yields crime measures broken down by **city** and **category**, overcoming the under-reporting and coarse granularity of earlier Chinese crime data. This permits more precise tests of how macro shocks (export fluctuations) relate to crime, and of heterogeneity. The scholarly contribution: the first rigorous causal identification of trade-driven economic fluctuation on crime combining **judicial big data** with **econometric identification**. The conclusions give trade policy a social dimension: trade slowdown is traditionally treated as an economic problem, but this study exposes its **hidden crime cost**, reminding policymakers of the threat trade shocks pose to social stability.

## Data and Methods

#### **Crime data**

The authors obtained nearly all criminal judgments for 2012–2018 from **China Judgements Online**. In 2013 the Supreme People's Court required courts at all levels to publish judgments; the database covers most criminal, civil, and administrative judgments and enforcement rulings (excluding special categories such as state security and juveniles). Each document records the year, the court's location, and case details. The authors focus on **criminal cases** under the Criminal Law, excluding civil disputes on grounds of social harm. Using NLP, they extract keywords from titles and main text and classify each case into 14 offense types (endangering public security, property crime, obstructing social administration, etc.). Appendix Table A.1 lists each category's keywords. After tagging, cases are aggregated by city and year and divided by 2010 registered (hukou) population to obtain the **criminal-case rate per thousand people**. Normalizing by base-year fixed population avoids contamination by city-size differences (results are robust to using current population or working-age population 15–64).

Notably, since China Judgements Online launched in late 2013, early uploads may be **incomplete** — 2012–2013 records are sparse, rising sharply after 2014. Re-estimating on a **truncated sample** (2014 onward) confirms this representativeness issue does not affect the conclusions. The authors further compare national totals against official filing counts and prosecuted-suspect counts in the *Law Yearbook of China*, finding closely matching trends — the judgment-document data reliably track actual crime. In sum, the judicial-document crime measure is broad in coverage, fine in granularity, and credible, providing a solid foundation.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416152259309.png)

Figure 1 ⬆️: Spatial distribution of crime rates across Chinese prefecture-level cities, 2012–2018 (criminal cases per thousand people)

#### **Export data**

City-level exports come from China's **Customs database**, covering all import-export transactions in 2010–2017 with details on firm location, city, eight-digit HS codes, and partner countries. To focus on manufacturing, HS codes are mapped to four-digit SIC, keeping products with SIC starting in 2 or 3 (about 96.8% of China's 2010 exports, and consistently above 96% during 2010–2019). For each city, annual total exports are computed, and the **"export shock"** is defined as the year-over-year change in exports divided by the city's 2010 working-age population:

$$
ExpShock_{c,t} = \frac{Export_{c,t} - Export_{c,t-1}}{L_{c,2010}}
$$

where $Export_{c,t}$ is city $c$'s total exports in year $t$ (in thousands of USD) and $L_{c,2010}$ is the city's working-age population in 2010. The measure captures each city's exposure to the global trade slump — positive for export growth, negative for decline.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416152823062.png)

Figure 3 ⬆️: Dynamics of China's manufacturing export growth, 2012–2019

#### **Baseline regression**

The core model:

$$
\Delta (Crime/L)_{ct} = \beta_1 ExpShock_{c,t-1} + \beta_2 \mathbf{X}_{c,t-1} + \gamma_t + \gamma_c + \epsilon_{ct}.
$$

- $\Delta (Crime/L)_{ct}$ is the change in city $c$'s **per-capita crime rate** between years $t$ and $t-1$;
- ${ExpShock}_{c,t-1}$ is the lagged city-level **export change** — lagged because economic activity affects crime with some delay;
- $\mathbf{X}_{c,t-1}$ are controls (GDP per capita, population, FDI, education, etc.), entered as first differences combined with levels;
- $\gamma_t$ and $\gamma_c$ are year and city fixed effects, absorbing macro factors and all time-invariant or linearly trending city differences;
- $\epsilon_{ct}$ is the error term.

#### **Shift-share instrument**

To overcome the endogeneity of estimating with $ExpShock_{ct}$ by OLS (two-way feedback between demand shocks and city conditions, or reverse causality), the authors employ a classic Bartik shift-share IV. The idea: decompose the **city-level export decline** into a weighted average of "global demand changes" over "the city's initial industrial structure," extracting the exogenous component.

The Bartik IV is constructed as:

$$
ExpShock^{IV}_{ct} = \sum_{k} \frac{X_{ck,2010}}{\sum_{c}X_{ck,2010}} \, \frac{\Delta X_{kt}}{L_{c,2010}},
$$

where:

- $\Delta X_{kt} = X_{kt} - X_{k,t-1}$ is the change in OECD (Europe/America) imports of product $k$ from "other countries with export structures similar to China's" — intuitively, a worldwide demand slump for similar products outside China "maps onto" China;
- $\frac{X_{ck,2010}}{\sum_{c} X_{ck,2010}}$ is product $k$'s "initial export share" in city $c$, the city's dependence on exporting that product;
- $L_{c,2010}$ again is the city's 2010 working-age population, for scale normalization.

Intuitively, the instrument holds each city's 2010 export-product mix fixed and overlays that year's global demand changes for those products, computing the export change each city "would have" experienced absent China-specific factors. Because demand movements of the 28 OECD destination countries and nine comparison countries are unrelated to Chinese domestic conditions, the shock satisfies relevance and exogeneity.

Empirically, the authors first estimate the baseline by 2SLS, testing the average effect of export slowdown on overall crime. They then exploit the rich data to study heterogeneity across cities and offense types. Next come extensive robustness and IV-validity checks: pre-trend tests, controlling for other local shocks, removing outliers. Finally they dig into mechanisms, combining labor-market and survey data to ask whether rising crime stems from deteriorating employment, income, and psychological strain, and assess alternatives such as reduced policing inputs.

## Results

#### **Export slowdown raises crime**

Table 2 reports baseline effects. OLS (column 1) shows a positive but insignificant association between export decline and crime. The weak correlation likely reflects omitted variables and reverse causality: **technological progress** or **automation** can raise export competitiveness while increasing unemployment and crime, masking the true effect; cities with better **public order** may attract investment and expand exports, generating reverse causation. OLS therefore cannot identify the causal effect. The 2SLS estimate with the exogenous instrument (column 2) is significant: **export decline markedly increases crime**. Concretely, when a city's per-capita exports fall by $1,000 from the previous year, the next year's criminal-case rate rises by about 0.143 per thousand people — i.e., 143 more cases per million. The estimate is significant at 1% and economically large: against a mean of 447 cases per million, +143 is a 32% increase. Of the cross-city variation in crime, export decline alone explains about 13%. Put differently, had China maintained its pre-crisis 20% annual export growth, urban crime would be roughly 12.1% lower than it is.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416155756068.png)

Note that the 2SLS coefficient (−0.143) exceeds OLS in absolute value, implying OLS underestimated the true impact — as expected, since omitted positive factors (e.g., technology upgrading) raise both exports and crime, partially offsetting the crime increase from export decline in OLS. The corrected 2SLS impact is larger, meaning the social cost of export slowdown had been understated. The baseline thus establishes a **causal relationship** from export decline to rising crime with strong statistical and economic significance.

#### **Which cities are hit hardest**

Using the granular data, the authors examine heterogeneity by **city characteristics** and **offense type**, all via 2SLS on subsamples or alternative dependent variables.

- **By age structure:** splitting cities by the 2010 share of youth (18–30), the export shock significantly raises crime in **young** cities, with no significant effect in "older" ones — consistent with the well-documented crime–youth link: young workforces are likelier to take risks under economic stress.
- **By migrant share:** splitting at the median 2010 migrant share. Migrant workers fall into unemployment and hardship more easily in downturns, raising offending propensity. As expected, the crime-raising effect is significant in **high-migrant** cities and insignificant elsewhere — consistent with migrant-heavy cities also being younger with unstable employment, echoing international findings that unemployed low-skill migrants offend at higher rates.
- **By industrial structure:** grouping by 2010 manufacturing employment share. Since exports are mostly manufactures, manufacturing-heavy cities should suffer more. Indeed, coefficients are larger and more significant in **high-manufacturing** cities; service-oriented cities show smaller effects. The shock transmits mainly through manufacturing.
- **By education:** splitting by dropout rate (share of 7–18-year-olds not in school). **High-dropout** cities see clearly larger crime increases during export slumps — consistent with Dix-Carneiro and Kovak (2017) for Brazil: less-educated groups turn to illegal livelihoods more readily under trade shocks, since low education means fewer legal job options in downturns.
- **By region:** classifying cities into East, Central, and West. **Eastern coastal** cities (Beijing, Shanghai, Jiangsu, Guangdong, etc.) show significant crime increases under export slowdown; Central and West are generally insignificant — matching common sense, as the East concentrates manufacturing and exports, while the interior is more domestic-demand or resource driven.
- **By initial public order:** splitting by 2014 initial crime rates, the increase from export decline is slightly larger in initially high-crime cities, suggesting bigger social backlash where order was already weaker. However, bootstrap tests of cross-group coefficient differences find most insignificant — only the migrant-share split is statistically significant. The heterogeneity results are thus mainly directional, flagging high-risk city profiles.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416160314347.png)

#### **Which crimes**

Classifying offenses into 14 statutory types (Table 4), export decline raises many categories, led by **economically motivated** and **impulsive** crimes:

- **Violent crime**: assault, affray — impulsive offenses that rise with economic distress and psychological strain. Export slowdown brings unemployment and income loss, intensifying stress and frustration, triggering more violence.
- **Robbery, theft, and other property crime**: classic economically motivated offenses. With legal income shrinking and unemployment rising, the hard-pressed may turn to illegal acquisition. Robbery and burglary rise clearly during export slumps, supporting Becker's (1968) opportunity-cost theory: fewer legal income opportunities raise the relative return to crime.
- **Prostitution and gambling offenses**: cases of *"prostitution and gambling"* also rise significantly — in hard times some risk illegal sex work or gambling scams, or pressure drives more participation in these activities.
- **Serious traffic offenses**: **traffic-crime** rates (e.g., drunk driving causing major casualties) also climb after export shocks. These are impulsive or negligent acts plausibly tied to stress-induced drinking and risk-taking; in downturns, people in poor spirits take more risks (drunk driving), producing severe accidents.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416160756338.png)

These categories span **"subsistence"** crimes (theft, robbery) and **"affective"** crimes (violence, dangerous driving), matching the proposed mechanisms: economic hardship lowers the opportunity cost of crime, directly inducing property offenses; economic stress degrades mental health, indirectly producing loss of control and impulsive offenses. By contrast, crimes weakly linked to the economy (high-tech, environmental) show no clear change. Overall, the public-order impact of export slowdown is multidimensional — more crime both from **making ends meet** and from **losing control** — showing that a worsening economy raises crime through several channels.

#### **Robustness and validity**

Extensive checks confirm the reliability of the baseline and the validity of the instrument.

- **Pre-trends:** The key step is verifying no systematic differences in crime trends across cities before the shock. Two approaches: first, adding multiple lags and leads of the export shock to the baseline. As Figure 4 shows, the shock significantly affects crime one year later (the estimate at −1 lies clearly below zero, meaning last year's export decline raises this year's crime), while leads (+1, +2, …) hover around zero and stay insignificant — no pre-existing upward trend, supporting causality. Second, using official provincial crime data for 2001–2009: regressing 2002–2009 provincial crime changes on the 2011–2018 shocks (nine years ahead) yields insignificant coefficients — again, no systematic differences between high- and low-exposure cities before the big slowdown. ![image-20250416161750837](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416161750837.png)

  Figure 4 ⬆️: Lagged and lead effects of export shocks on crime. The x-axis is time (shock year = 0; negative values are pre-shock years), the y-axis the estimated effect on crime changes, with 95% CIs. Coefficients in the shock year (0) and earlier years are near zero and insignificant, while the coefficient one year after the shock (−1, i.e., last year's shock) is negative and significant: only after exports decline does city crime rise significantly — no systematic pre-shock differences, supporting parallel trends and the causal reading.

- **Controlling other city-level shocks:** other concurrent local shifts (domestic demand, technology, import competition) could also move crime. The authors build alternative shift-share shocks — "total absorption" (output minus net exports) for domestic demand, industrial output for domestic supply, and import competition — weighted by initial industrial structure. Adding these leaves the export-shock coefficient robustly significant. In particular, controlling import competition barely changes the effect, showing the paper captures an independent export-demand effect rather than an import-shock redux. They also control spillovers from neighboring cities' export shocks via a weighted average: only the local shock significantly affects local crime — the relationship is not driven by regional co-movement.

- **Labor-conflict events:** Campante et al. (2023) find export declines spark more strikes in Chinese cities. Since labor disputes could spill into illegality, the authors collect strike data and add strike-count changes to the regression. Strikes have a marginal positive effect on crime, but the export-shock coefficient remains significant at 1% — labor unrest is not the main driver, and the export–crime effect does not run solely through strikes.

- **Outliers and structural dependence:** checking sources of IV bias à la Goldsmith-Pinkham et al. (2020), the top-5 HS products by Rotemberg weight account for only 8.2% of total weight — far from the single-industry dominance plaguing some studies. Dropping each HS section in turn (e.g., all textiles) keeps the largest and smallest coefficients significantly negative — results are not driven by a few product categories. Dropping provinces one by one similarly leaves coefficients in a narrow, significant range — no single large province drives the results. Finally, a randomization test reassigns export shocks across cities 500 times; the placebo coefficient distribution centers on zero while the true estimate lies deep in the tail (beyond the 95th percentile), rejecting chance correlation. All told, robustness checks support the conclusions; the instrument meets relevance, with no evidence against exogeneity.

## Mechanisms

#### **The labor-market channel**

Starting from Becker's (1968) model of criminal choice: when legal jobs shrink and wages fall, potential offenders' legal returns drop, the opportunity cost of crime falls, and offenses become likelier. Using the *China City Statistical Yearbook* and the National Tax Survey, the authors link city-level employment and wages to export shocks. Key findings:

- **Employment falls**: cities facing worse export declines see significant drops in total employment, with manufacturing hit hardest. Estimates imply that a $1,000 fall in per-capita exports lowers total employment about 12% on average, with manufacturing declines especially sharp. Services employment also falls, slightly less than manufacturing — consistent with manufacturing's dominance of Chinese exports.
- **Migrants and rural migrant workers suffer more**: export slowdown costs some migrant workers their urban jobs, reducing inflows and increasing outflows. Over time, since migrant workers are mostly low-skill with thin social protection, job loss leaves them returning home or moving on — generating public-order pressure locally. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416162916313.png)
- **Wages fall, migrant earnings hit hardest**: using the National Tax Survey and the China Migrants Dynamic Survey to measure average city wages and migrant wages, negative export shocks significantly correlate with declines in both. Estimates: a $1,000 fall in per-capita exports cuts migrant workers' average wages about 8.8%. Low-education, young, manufacturing-employed migrants suffer most — consistent with their weak social and economic protections. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416162941218.png)

#### **The mental-health channel**

Beyond the Beckerian motive, downturns can raise stress, anxiety, and depression, inducing impulsive or violent offenses. Testing with the Kessler psychological distress scale (K6) in the China Family Panel Studies (CFPS):

- **Distress rises overall**: where export declines are worse, average K6 scores rise — deeper depression and anxiety — though the full-sample coefficient is not quite significant.
- **Manufacturing workers and the young deteriorate significantly**: splitting by manufacturing employment and by age (16–30 "young" vs. 30+), K6 increases are largest and statistically significant for manufacturing workers **and** the young. The young are most exposed to job and income losses, and their strain converts into higher violent/impulsive crime risk; manufacturing workers bear the brunt of shrinking employment and most readily develop mental-health problems.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416163315187.png)

The results support a rise in **"affective"/"impulsive"** crime: export decline stimulates property crime via the jobs-and-income path, and also violence, brawls, and drunk-driving casualties via deteriorating mental health.

#### **The local-fiscal and public-services channel**

From a public-economics angle, if shrinking exports cut local revenue and governments trim policing or social spending, society's crime-prevention capacity could weaken. Using fiscal data (*Finance Statistical Yearbook*, provincial/city yearbooks) to track public-security and social spending (public services, education, social security, health, urban affairs) under export shocks:

- **No significant fiscal squeeze**: cities with stronger negative shocks see mild declines in revenue and total spending, but **no significant cut** to "public security" line items — sometimes slight increases. "Social spending" significantly increases in some specifications, read as: once crime starts rising, local governments tend to add stability-maintenance and social-service inputs.
- **Stability spending rises overall**: summing public-security and social spending into "stability spending," cities increase such budgets after export declines. The fiscal channel does not aggravate crime; if anything, governments add "stability" resources.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416163647826.png)

In sum, cuts to public services or security are not the main mechanism behind rising crime. In the Chinese system, local governments are sensitive to public-order pressure and typically expand police and judicial inputs when crime spikes. Fiscal tightening exists only at the margin and cannot explain the surge in criminal cases.

## Conclusions

- **Export slowdown significantly raises crime**: via text analysis of millions of court judgments, the paper builds city-year crime measures and identifies causality with a Bartik shift-share IV. Core result: when a city's per-capita exports (relative to base-year population) fall by $1,000, subsequent criminal cases rise by about 143 per million people — statistically and economically significant.
- **The damage concentrates in manufacturing cities and in places dense with the young and migrants**: the effect is far from uniform. Cities with high manufacturing shares, many young people and migrants, higher initial crime, or higher dropout rates see larger crime increases — their economic and demographic structures are more sensitive to external demand, and their employment and income prospects more fragile.
- **Both "economic-motive" and "impulsive" crime rise**: by offense type, export decline significantly increases robbery, theft, prostitution and gambling offenses, violent affray, and traffic crimes — some clearly "subsistence" (property-motivated), others tied to stress and loss of control.
- **Labor markets and mental health are the key factors**: export decline brings unemployment and falling wages (especially for vulnerable groups like migrant workers), lowering the returns to staying legal and strengthening the economic lure of risk-taking. External shocks intensify psychological strain — above all for manufacturing workers and the young — raising impulsive and violent crime risk. Examining fiscal revenue and security spending, local governments typically *increase* "stability" and social-safety spending during export slowdowns, so fiscal tightening contributes little to the crime increase.

## Postscript

- Great paper!
- Relatedly, Autor et al. (2019) study how U.S. manufacturing decline (partly from Chinese import competition) affected the marriage market: in harder-hit areas, young men's employment and earnings fell, lowering their "marriage-market value," reducing marriage rates, and increasing non-marital births and single-parent households. (When Work Disappears: Manufacturing Decline and the Falling Marriage Market Value of Young Men)
- We (the post-90s generation) own a future where **deglobalization** and **automation** shocks overlap.

## Source

Hong Ma, Yu Pan, Mingzhi (Jimmy) Xu, The Criminogenic Consequence of Export Slowdown: Evidence from Millions of Court Judgment Documents in China, *The Economic Journal*, 2025;, ueaf024, https://doi.org/10.1093/ej/ueaf024

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250416142722460.png)
