---
title: "JUE — Using Nighttime Light to Identify GDP Fabrication in Official Promotions"
date: 2024-07-18T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Leveraging the age discontinuity in official promotions, the study finds that mayors' promotion incentives produce about a 3-percentage-point fabrication in the GDP growth rate, an effect that is not observed in other non-manipulable indicators of economic growth such as nighttime light."
---

> This paper examines how the promotion incentives of Chinese mayors affect the manipulation of local GDP data. The study employs a regression discontinuity design (RDD), exploiting the sharp drop in promotion probability at age 57 to compare official GDP figures with economic indicators that are hard to manipulate (such as nighttime light).
>
> The results show that before 2013, mayors' promotion incentives raised the statistical GDP growth rate by 3.4 percentage points, yet had no significant effect on indicators that are hard to manipulate. This gap (about 3 percentage points) is attributed to GDP data manipulation. After 2013, when the importance of GDP in promotion evaluations declined, this pattern disappeared.

**Title:** Mayors’ promotion incentives and subnational-level GDP manipulation

**Journal:** *Journal of Urban Economics*

- <u>Jiangnan Zeng</u>: Assistant Professor, the Department of Economics and Finance, University of Guelph.
- <u>Qiyao Zhou</u>: Assistant Professor, the Department of Economics, Spears School of Business at Oklahoma State University. At the time of submission, both authors were **doctoral students**, expected to take up the above positions in 2024.

**Publication Date:** 25 June 2024

<br/>

## Introduction

- In understanding the spatial-distribution drivers of regional economic growth, the role of local officials is especially important. Under different political systems, the incentive mechanisms for local officials differ. In democracies, officials are held accountable through elections, whereas under authoritarian regimes they are incentivized through performance evaluations by their superiors (**elections vs. promotion**). This paper explores the unintended effects of Chinese local officials' promotion incentives on regional development.
- China's 1978 economic reforms markedly raised the country's economic growth rate, from about 4% per year to an average annual growth rate of over 9%. Many studies attribute this growth to the performance-based cadre evaluation system, which made regional **GDP growth** central to promotion decisions for local officials. The promotion incentives of local officials directly led to more effective management of local economies. Existing empirical analyses are based primarily on official reports of local GDP performance.
- **Research Question**: In the promotion examination that targets GDP growth, did officials cheat? If so, how much was GDP padded?

## Institutional Background of Chinese Official Promotions

#### **Performance-Based Cadre Evaluation System**

In China, the political reassignment of local officials is usually decided by upper-level governments. For example, mayor-level officials are managed by provincial organization departments. Since the reform and opening up, provinces and cities have played an important role in economic management, holding more power over resource allocation than before. Provincial and prefectural leaders are, to some extent, similar to mid-level managers in a multidivisional firm, each responsible for the performance of their own division.

By devolving more power to local leaders, the central and provincial governments aimed to incentivize local officials to promote local economic development through rewards and punishments. Government reports and provincial yearbooks set out in detail the relative rankings of provincial performance, ranging from GDP growth and steel production to the number of kilometers of road built.

- In 1993, the Organization Department of the CCP Central Committee established a nationwide civil-service evaluation policy, specifying the work-performance ratings of cadres at all levels. The evaluation criteria included political integrity, competence, diligence, and actual work achievements. Among these criteria, work achievements accounted for more than 60%, usually measured by the local **GDP growth rate**.
- These principles were reaffirmed in the formal cadre-selection guidelines issued by the CCP Central Committee in 2002.
- In the 2014 version of the guidelines, the importance of GDP was reduced, while **environmental protection**, **political loyalty**, and **government debt** were given greater weight.

In the main analysis of this paper, data from 2003 to 2013 are used, a period when GDP statistics were the primary indicator for promotion.

> The original text here says that a nationwide civil-service evaluation policy was established in **1993**; this should be the *Provisional Regulations on State Civil Servants* (国家公务员暂行条例).
>
> It is generally held that the landmark policy in the modernization of cadre selection and appointment is the *Provisional Regulations on the Work of Selecting and Appointing Party and Government Leading Cadres* (党政领导干部选拔任用工作暂行条例), promulgated in 1995. In July 2002, these regulations were updated into the *Regulations on the Work of Selecting and Appointing Party and Government Leading Cadres* (党政领导干部选拔任用工作条例), and they were updated again in January 2014. Unfortunately, in the "**conditions for selection and appointment**" of the four different versions of the *Regulations* mentioned above, I found **no** explicit requirement regarding local economic-growth performance.
>
> The debate over the official promotion tournament continues.

Attached here is Chapter 2 of the 2002 version of the *Regulations*:

> **Chapter 2 Conditions for Selection and Appointment**
>
> **Article 6** Party and government leading cadres shall meet the following basic conditions:
>
> (1) Possess the level of Marxism-Leninism, Mao Zedong Thought, and Deng Xiaoping Theory required to perform their duties; conscientiously put into practice the important thought of the "Three Represents"; strive to use the standpoint, viewpoint, and methods of Marxism to analyze and solve practical problems; insist on stressing study, stressing politics, and stressing healthy tendencies; and withstand tests of all kinds of storms and stresses.
>
> (2) Possess the lofty communist ideal and a firm conviction in socialism with Chinese characteristics; resolutely implement the Party's basic line and various principles and policies; be determined to pursue reform and opening up; devote themselves to the cause of modernization; work hard and start undertakings in socialist construction; and achieve real results.
>
> (3) Persist in emancipating the mind, seeking truth from facts, keeping pace with the times, and pioneering innovation; conscientiously carry out investigation and research; be able to combine the Party's principles and policies with the actual conditions of their region or department; carry out work effectively; speak truthful words, do practical things, and seek practical results; and oppose formalism.
>
> (4) Have a strong sense of revolutionary dedication and political responsibility; have practical experience; and have the organizational ability, cultural level, and professional knowledge to be competent in leadership work.
> (5) Correctly exercise the power conferred by the people; act in accordance with the law; be honest and upright; be diligent in government and work for the people; lead by example; be hardworking and plain-living; maintain close ties with the masses; persist in the Party's mass line; consciously accept criticism and supervision from the Party and the masses; achieve self-respect, self-examination, self-admonition, and self-encouragement; oppose bureaucratism; and oppose any unhealthy tendency of abusing power and seeking personal gain.
>
> (6) Uphold and safeguard the Party's democratic centralism; have a democratic work style; have an overall perspective; be good at concentrating correct opinions; and be good at uniting comrades, including uniting and working together with comrades who hold different views from their own.
>
> Party and government leading cadres at the provincial and ministerial levels shall also strive to meet the various requirements set by the Central Committee for senior cadres.
>
> **Article 7** Those to be promoted to party and government leading positions shall meet the following qualifications:
>
> (1) For promotion to a county (division) level leading position, one shall have at least five years of work experience and at least two years of grassroots work experience.
>
> (2) For promotion to a leading position above the county (division) level, one shall generally have experience serving in two or more positions at the next lower level.
>
> (3) For promotion to a leading position above the county (division) level, when promoted from a deputy position to a principal position, one shall have worked in the deputy position for at least two years; when promoted from a principal position at a lower level to a deputy position at the upper level, one shall have worked in the principal position at the lower level for at least three years.
>
> (4) One shall generally have an education level of junior college or above; among them, leading cadres at or above the prefecture (department) and division (bureau) levels shall generally have an education level of undergraduate or above.
>
> (5) One shall have undergone training at a Party school, an administrative college, or another training institution recognized by the organization (personnel) department, with a cumulative total of at least three months within five years; if, due to special circumstances, the training requirement is not met before promotion, the training shall be completed within one year after promotion.
>
> (6) Be in good health.
>
> (7) Those to be promoted to Party leading positions shall meet the Party-membership-seniority requirements stipulated in the *Constitution of the Communist Party of China*.
>
>    Particularly outstanding young cadres, or those needed for special work requirements, may be promoted out of the normal order. The procedures for promotion out of the normal order shall be stipulated separately.
>
> **Article 8** Party and government leading cadres shall be promoted level by level. For promotion across levels, approval shall be reported to and obtained from the organization (personnel) department at the upper level.
>
> **Article 9** Party and government leading cadres may be selected and appointed from within Party and government organs, or from outside Party and government organs. Members of party and government leading bodies shall generally be selected from among reserve cadres.

#### **Official Promotion**

China has five administrative levels. From top to bottom they are the central government, provincial-level administrative regions, prefecture-level cities, counties and districts, and townships. Each prefecture-level city has two top leaders, namely the **mayor** and the **party committee secretary**. By law, the mayor is the executive official of the local government (the prefecture-level city). In practice, the party committee secretary is mainly responsible for organizational and other political duties, while the mayor is responsible for the day-to-day operation of government, in which economic growth is the top priority. This paper focuses mainly on the promotion of mayors.

A mayor's promotion decision is usually made by provincial officials. The most common promotion is to become the party committee secretary of a city at the same level. In addition, some mayors are promoted directly to sub-provincial positions. In this paper, **promotion is defined as a mayor being elevated to a higher position, or remaining in the same position but moving to a more important one**. A higher position refers to a sub-provincial position.

#### **Age Limits in Chinese Official Promotions**

Since the 1980s, the CCP has emphasized promoting and elevating young cadres while restricting the promotion of older officials. According to the *Regulations* and some studies and reports, mayors aged 58 and above are not eligible for promotion (the so-called "**up at seven, down at eight**" rule, 七上八下). Empirical data show that the promotion probability of mayors drops markedly at age 58 (figure below ⬇️), indicating that their promotion incentives decline substantially.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240717225733566.png)

#### **Anecdotal Evidence on the Measurement and Manipulation of Local Chinese GDP Statistics**

China's national GDP and local GDP are calculated independently. The National Bureau of Statistics is responsible for calculating national GDP, while local statistical bureaus are responsible for the GDP statistics of their respective regions. As a result, the sum of local GDP does not necessarily equal national GDP.

The director of a local statistical bureau is usually a "**city-managed cadre**" (市管干部), whose promotion is decided by city-level officials, including the mayor, the party committee secretary, and the head of the city organization department. This hierarchical structure gives the mayor the ability to manipulate local GDP statistics. GDP manipulation is costly and requires the coordinated cooperation of multiple departments, such as the statistical bureau, the deputy mayor in charge, and county-level officials. Some local officials have been punished for data manipulation.

- In 2017, the governor of Liaoning Province admitted to inflating at least 20% of fiscal revenue and GDP figures between 2011 and 2014.
- An article from the well-known official media outlet "Xinhua Net" quoted a local official as saying that "local officials revealed an unwritten rule: they can achieve whatever target their superiors set, and any target that is set will surely be met."
- The official statistics of Tianjin, Weihai, Baotou, Ordos, Tongliao, Tieling, Yinchuan, and other places have been found to involve manipulation.

The accuracy of Chinese official data has also been widely questioned in **academic work**:

- Rawski (2001) pointed out that, contrary to the 7.1% growth rate reported in official statistics from 1997 to 2001, the Chinese economy may have grown only about 2% per year.
- Nakamura et al. (2016) used Engel curves to derive alternative estimates of inflation and economic growth, indicating that China's official statistics provide a smoother depiction of the real situation.

Manipulation is not limited to GDP statistics:

- Kung and Chen (2011) and Meng et al. (2015) emphasized that officials driven by career-promotion incentives exaggerated grain-output figures, which is believed to have caused a large number of deaths during the Great Leap Forward period (1958–1961).
- Karplus et al. (2018), by comparing satellite data with officially reported data, pointed out that China's sulfur dioxide figures were falsified, especially in regions with strict emission standards.
- Serrato et al. (2019) found that in the 1990s, false reporting related to the performance of the "one-child policy" was widespread, which was linked to the promotion prospects of Chinese mayors.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240717230731083.png)

⬆️ The figure above shows that during the 2008 economic crisis, nighttime light declined substantially, whereas the GDP statistics of cities and districts/counties declined only slightly or even rose.

## Identification Strategy

#### **Regression Discontinuity Design (RDD)**

Suppose official GDP statistics ( $GDP_s$ ) consist of two parts: real economic growth ( $GDP_r$ ) and GDP manipulation ($GDP_m$). Under this setup, the effect of mayors' promotion incentives on GDP manipulation (i.e., $\frac{\partial GDP_m}{\partial PI}$ ) can be estimated through the following steps:

- Step 1: Estimate the effect of mayors' promotion incentives on the statistical GDP growth rate (i.e., $\frac{\partial GDP_s}{\partial PI}$ ).

- Step 2: Estimate the effect of mayors' promotion incentives on the statistical nighttime-light growth rate (i.e., $\frac{\partial light_g}{\partial PI}$ ). In this step, nighttime light serves as a proxy for real economic growth.

- Step 3: Estimate a normalization constant $\gamma$ that makes nighttime light and GDP statistics comparable.

- Finally, combine $\frac{\partial GDP_s}{\partial PI}$, $\frac{\partial light_g}{\partial PI}$, and $\gamma$ to calculate the effect of mayors' promotion incentives on GDP manipulation.

A regression discontinuity design (RDD) is used to identify the effect of mayors' promotion incentives on the statistical GDP growth rate, nighttime light, and other non-manipulable indicators of economic growth. **Age** is the key threshold for promotion infeasibility: mayors aged 57 or below still have a chance of promotion, while those aged 58 or above do not. This threshold provides a natural cutoff for this study.

The following local linear regression models are used for estimation:

$$
GDP_{s,it} = \alpha + \beta_{gdp} PI_{it} + \tau age_{it} + \rho (PI_{it} \times age_{it}) + \delta X_{it} + v_t + \mu_i + \epsilon_{it}
$$

$$
growth_{nm,it} = \alpha' + \beta_{nm} PI_{it} + \tau' age_{it} + \rho' (PI_{it} \times age_{it}) + \delta' X_{it} + v_t' + \mu_i' + \epsilon_{it}'
$$

where:

- $i$ denotes the prefecture-level city, and $t$ denotes the year.
- $PI_{it}$ is a dummy variable representing the mayor's promotion incentive, taking the value 1 if the mayor is aged 57 or below, and 0 otherwise.
- $age_{it}$ is the standardized age of the mayor.
- $X_{it}$ is a set of control variables, including the mayor's educational background, gender, and tenure.
- $GDP_{s,it}$ and $growth_{nm,it}$ denote the statistical GDP growth rate and the non-manipulable indicator of economic growth, respectively.
- $v_t$ and $\mu_i$ are the year fixed effect and the city fixed effect, respectively.

**If mayors' promotion incentives lead to GDP manipulation rather than real economic growth, then $\beta_{gdp}$ is expected to be positive and significant, while the coefficient $\beta_{nm}$ on the non-manipulable indicator of economic growth should be close to zero.**

The normalization constant $\gamma$ is estimated using the following formula:

$$
\ln gdp_{s,it} = \alpha{\prime}{\prime} + \gamma \ln light_{it} + \epsilon_{it}{\prime}{\prime}
$$
The degree of GDP manipulation is calculated using the following formula:

$$
manipulation = \hat{\beta}_{gdp} - \hat{\beta}_{light} \cdot \hat{\gamma}
$$

#### **Data Sources**

- **Mayor data**: The mayor data were collected manually and include information on 870 mayors in 255 cities between 2003 and 2013. The dataset contains mayors' demographic characteristics, such as age, gender, and education level. The unit of observation is data at the city-year-mayor level.
- **GDP data and official statistics**: GDP data and other official statistics (such as the shares of agriculture, manufacturing, and services) were obtained from statistical yearbooks. To ensure comparability, the GDP statistics were adjusted to 2000 price levels using provincial price deflators.
- **Nighttime-light data**: The nighttime-light data are processed and published by the National Geophysical Data Center (NGDC) of the U.S. National Oceanic and Atmospheric Administration (NOAA). Nighttime-light data are widely regarded as a reliable proxy for economic growth, because they are immune to human manipulation, are highly correlated with real economic growth, and are sensitive to economic shocks. The raw data have a resolution of about 1 kilometer and are aggregated to the city level. The nighttime-light data meet the two criteria of being "**non-manipulable**": the mayor has neither the means nor the motive to manipulate them.
- **Electricity-consumption data**: The electricity-consumption data come from city statistical yearbooks.
- **Manufacturing-firm employment and total factor productivity (TFP) data**: These data come from the China Industrial Enterprises Database, which includes all manufacturing firms with annual sales exceeding 5 million RMB (about 700,000 US dollars). Using these data, it is possible to estimate the employment and TFP of manufacturing firms and aggregate them at the city-year level.

## Results

#### **Mayors' Promotion Incentives, Official GDP Statistics, and Nighttime Light**

- **GDP statistics**: Panel A of Table 1 shows that mayors' promotion incentives raised cities' official GDP growth rate by about 3 percentage points. This result is robust across different regressions.
- **Nighttime-light growth rate**: Panel B of Table 1 shows that mayors' promotion incentives had no significant effect on the nighttime-light growth rate, and the effect was far smaller than that on the official GDP growth rate. This indicates the presence of manipulation in the GDP statistics. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240718090013207.png)

- **Estimating the degree of GDP manipulation**: Using the calculation method mentioned above, the study finds that mayors with high promotion incentives tend to manipulate the statistical GDP growth rate by about 3 percentage points, and this effect is statistically significant. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240718090756576.png)

- **Changes after 2013**: As the importance of **environmental protection** and **political loyalty** in official promotions increased after 2013, the role of GDP statistics in mayors' promotion weakened. As a placebo test, the RD equation is re-estimated using data from 2014 to 2018. The results show that after 2013, mayors' promotion incentives no longer significantly affected the official GDP growth rate or the nighttime-light growth rate.

#### **Heterogeneity Analysis**

- **Heterogeneity in manipulation cost at the mayor level**: Khanna et al. (2015) found that the relationships between a CEO and other officials within a firm are associated with corporate fraud. This study uses a similar indicator, namely **the experience of an official having served in a deputy mayor position in the same city for more than two years**. Mayors with such experience may have a lower cost of GDP manipulation, because they have established connections with the local statistical bureau director, other deputy mayors, and county-level officials. These connections are crucial, because effective GDP manipulation requires the cooperation of these key officials. The results show that for mayors with lower manipulation costs (i.e., mayors with more than two years of local experience), the effect of mayors' promotion incentives on a city's statistical GDP growth rate nearly doubles.
- **Sectoral heterogeneity**: The benchmark regression is re-estimated using the statistical GDP growth rates of agriculture, manufacturing, and services as the dependent variable. The results show that mayors' promotion incentives have a negligible effect on the statistical GDP growth rate of the **agricultural** sector, but a significant effect on the statistical GDP growth rates of manufacturing and services. The differences in GDP manipulation across sectors may have two explanations:
  - First, the cost of manipulation in the agricultural sector is higher, because the Ministry of Agriculture relies on remote-sensing technology to estimate and monitor crop yields.
  - Second, the agricultural sector contributes about 15% of China's GDP; therefore, the gains from manipulating agricultural data may not be as high as those from manipulating manufacturing and service data.

#### **Robustness Checks**

- **Government-expenditure check**: One concern is that mayors with career ambitions might invest in infrastructure projects to quickly boost GDP statistics, and these activities might not be immediately reflected in nighttime-light growth. To rule out this possibility, the effect of promotion pressure on government expenditure is examined directly. The results show that at the age cutoff, promotion pressure has no significant effect on the growth of government expenditure.
- **Other non-manipulable indicators**: Using electricity consumption, manufacturing-firm employment, and manufacturing-firm total factor productivity (TFP) as alternatives, the study finds that mayors' promotion incentives have a limited effect on these indicators.
- **The lag in nighttime-light data**: Nighttime light may be a lagging indicator of real economic growth. To address this issue, within the same RD framework, the lead term of the nighttime light is used as the dependent variable. The results show that mayors' promotion incentives have only a small effect on the lead term of nighttime light.
- **The validity of nighttime light in reflecting economic conditions**: To mitigate the concern that nighttime-light growth is more irreversible than GDP growth, two economic shocks are used: the **Two Control Zones policy** (TCZ) and the **2008 global financial crisis**, to examine how city-level nighttime light and statistical GDP respond to economic shocks. The results show that nighttime light is sensitive to economic shocks. Specifically, a 1.5-percentage-point GDP shock can be readily reflected in nighttime light. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240718093438173.png)

## Conclusion

- Mayors' promotion incentives raised the statistical GDP growth rate by about 3.4 percentage points. These incentives had a negligible effect on non-manipulable indicators of economic growth such as the nighttime-light growth rate and electricity consumption, confirming the presence of manipulation in the statistical GDP.
- After 2013, as the role of GDP statistics in mayors' promotion weakened, mayors' promotion incentives no longer significantly affected the official GDP growth rate or the nighttime-light growth rate.
- For mayors with lower manipulation costs, promotion incentives have a larger effect on GDP manipulation. In the agricultural sector, the degree of GDP manipulation is lower because the cost of manipulation is higher; in manufacturing and services, the degree of manipulation is higher.

## Extra

- Many studies on officials' promotion incentives show that the one who matters in decision-making is the top leader, the **municipal party committee secretary**, rather than the mayor;
- Recommended reading: [Political Systems and False Reporting and Exaggeration](https://mp.weixin.qq.com/s/NDfu1fi1Ybd3uvJTpwb0SQ); the original is *How Much Should We Trust the Dictator's GDP Growth Estimates?*, published in JPE in 2022.

## Source Information

Zeng, Jiangnan, and Qiyao Zhou. "Mayors’ promotion incentives and subnational-level GDP manipulation." *Journal of Urban Economics* 143 (2024): 103679. https://doi.org/10.1016/j.jue.2024.103679

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240717203948498.png)
