---
title: "RES - Successful Democracies Breed Their Own Support"
date: 2024-05-22T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Acemoglu"]
summary: "Democracy generates a virtuous cycle for itself: good institutional performance leads citizens to develop greater support for democratic institutions."
---

> Using large-scale survey data covering more than 110 countries, this study analyzes how individual support for democracy is influenced by the successful performance of democratic institutions (such as economic growth, corruption control, peace and political stability, and the provision of public goods). The research shows that the successful performance of democratic institutions is the primary driver of individual support for democracy. Moreover, once democratic institutions secure citizen support, they perform better in the face of negative shocks.

**Title:** (Successful) Democracies Breed Their Own Support

**Journal:** *The Review of Economic Studies*

**Authors:**

- <u>Daron Acemoglu</u>: Institute Professor at MIT and an elected fellow of the National Academy of Sciences, American Philosophical Society, the British Academy of Sciences, the Turkish Academy of Sciences, the American Academy of Arts and Sciences, the Econometric Society, the European Economic Association, and the Society of Labor Economists. Big Dragon (大龙) alone is a college, a research institute, and an army!
- <u>Nicolás Ajzenman</u>: Assistant Professor, Economics Department, McGill University.
- <u>Cevat Giray Aksoy</u>: Associate Professor of Economics at King’s College London, Department of Political Economy.
- <u>Martin Fiszbein</u>: Assistant Professor,  Department of Economics, Boston University.
- <u>Carlos Molina</u>: Job market candidate, Ph.D. candidate in the MIT Department of Economics. Extremely strong! Already a referee for RES. His dissertation committee members are Daron Acemoglu, Benjamin Olken, and Frank Schilbach.

**Publication date:** 16 May 2024

<br/>

## Preface

**The current predicament of democracy**

- Many voters express dissatisfaction with democratic institutions, and misinformation and extremism spread rapidly;
- Populist parties are rising in many Western countries;
- Globally, democracy has been in retreat for 15 consecutive years (according to the report by Repucci and Slipowitz);
- Concerns about the future sustainability of democratic institutions are increasing.

**The importance of support for democracy**

- The view that democracy needs citizen support to survive can be traced back to ancient Athens;
- President Franklin Roosevelt's New Deal and President Biden's infrastructure and fiscal plans both emphasized that democratic institutions need to prove their effectiveness in order to win public support;
- At present, whether the successful performance of democratic institutions can increase public support for democracy has not yet been systematically studied.

**The research questions of this paper**

- This paper aims to explore whether individuals living under democratic institutions are more supportive of democracy, and to further analyze whether this support derives primarily from successful democratic institutions (for example, performing well in economic growth, corruption control, peace and political stability, and the provision of public goods).

## Dialogue with the Literature

- **Democratic consolidation and anti-democratic coups**: Early theoretical research emphasized the importance of citizens' collective action in defending democracy, while some empirical research has provided supporting evidence. Some recent studies focus on how democratic failure leads to the emergence of electoral authoritarianism and hybrid regimes. The authors argue that this paper helps highlight the importance of successful democratic experiences for citizens' support of democratic institutions;
- **The debate over whether high-income, highly educated countries can be immune to coups and democratic collapse**: Modernization theory emphasizes the connection between economic modernization and democracy, while subsequent research emphasizes that coups do not occur in high-income countries. But these views have failed to withstand the test of time and evidence. The recent literature emphasizes that despite very high per capita incomes, democracy in developed countries is also fragile. The authors point out that this paper provides new evidence for this debate, namely that support for democracy stems not from income or education, but from experience accumulated under successful democratic institutions;
- **The determinants of civic culture**: One view holds that features of civic culture, such as civic values, beliefs, and levels of participation, are crucial for democracy, and that these features are to a large extent exogenously and historically determined. The findings of this paper suggest that pro-democracy attitudes change in response to democratic performance, which poses a challenge to this view;
- **The theory of democratic capital**: This theory emphasizes that long-term democratic rule increases the stock of democratic capital, thereby consolidating democratic institutions. The authors' research shows that democratic capital does indeed matter, but the experience of successful democracy is the key.

## Data

### **Data Sources**

- Integrated Values Surveys (IVS), unified from the European Values Study and the World Values Survey;

- Asian Barometer;
- Latin American Public Opinion Project (LAPOP);
- Latinobarómetro.

### **Variable Construction**

#### **Level of Democracy**

- Binary variable: combining multiple datasets, an unbalanced panel dataset was created, covering 203 political regimes from 1800 to 2019;
- Continuous variable: from the V-DEM project, providing a continuous measure of the level of democracy for 178 countries between 1789 and 2019. V-DEM collects a wide range of indicator data and constructs indices for five dimensions of democracy (Electoral Democracy, Liberal Democracy, Participatory Democracy, Deliberative Democracy, and Egalitarian Democracy), with each index ranging from 0 to 1.

#### **Pro-democracy Indicators (Main Explained Variables)**

These include:

- Support for Democracy Index
- Democracy is Better
- Democratic System
- Opposes Strong Leader
- Opposes Army Rule
- Government above Experts

Six indicators, based primarily on survey data from the Integrated Values Surveys, Asian Barometer, Latin American Public Opinion Project, and Latinobarómetro. To ensure the comparability of the indicators, all responses were standardized, that is, responses from different surveys were converted into unified standard scores.

#### **Data on Successful Performance**

- **GDP growth**: Data sources include the Maddison Project, Penn World Tables, and World Bank national accounts data;
- **Corruption control**: Data come from V-DEM's "pervasiveness of political corruption" indicator;
- **Peace and political stability**: The UCDP/PRIO Armed Conflict Dataset is used, with an internal conflict resulting in at least 25 battle-related deaths within a year serving as a proxy variable;
- **Public expenditure**: Combines data from the IMF Fiscal Affairs Department and the UNESCO Institute for Statistics;
- **Inequality**: Data from the World Inequality Database are used, with the specific indicator being the income share of the richest 1% and 10% of the population.

#### **Exposure to Democracy**

Variable definition: For an individual $i$ of age $a$, born in country $c$ and interviewed in year $s$, exposure to democracy is defined as:
$$
\text{Exposure to Democracy}_{c,s,a} = \sum_{t=s-a+k}^{s} D_{c,t}
$$
where $D_{c,t}$ represents the level of democracy in country $c$ in year $t$, and $k$ is a constant (set to age 6), representing the number of years of exposure to democracy counted from when the individual begins schooling.

## Identification Strategy

#### **Successful Democracy Exposure Model**

The regression model for the overall effect of exposure to democracy:
$$
\text{Outcome}_{i,w,c,s,a} = \beta \cdot \text{Exposure to Democracy}_{c,s,a} + \gamma' \cdot X_{i,w,c,s,a} + \epsilon_{i,w,c,s,a}
$$


The model broken down by successful democracy, unsuccessful democracy, and unsuccessful autocracy:
$$
\text{Outcome}_{i,w,c,s,a} = \overline\beta_1 \cdot \text{Exposure to Successful Democracy}_{c,s,a} + \overline\beta_2 \cdot \text{Exposure to Unsuccessful Democracy}_{c,s,a} + \overline\beta_3 \cdot \text{Exposure to Unsuccessful Autocracy}_{c,s,a} + \overline\gamma' \cdot X_{i,w,c,s,a} + \overline\epsilon_{i,w,c,s,a}
$$
where exposure to successful democracy, unsuccessful democracy, and unsuccessful autocracy are respectively defined as:
$$
\text{Exposure to Successful Democracy}_{i,c,s,a} = \sum_{t=s-a+k}^{s} D_{c,t} \times M_{i,c,t}
$$

$$
\text{Exposure to Unsuccessful Democracy}_{i,c,s,a} = \sum_{t=s-a+k}^{s} D_{c,t} \times (1-M_{i,c,t})
$$

$$
\text{Exposure to Unsuccessful Autocracy}_{i,c,s,a} = \sum_{t=s-a+k}^{s} (1-D_{c,t}) \times (1-M_{i,c,t})
$$

where $M_{i,c,t}$ is a success indicator variable, taking the value 1 when country $c$ performs successfully in year $t$ (such as above-average economic growth, better corruption control, etc.).

#### **Robustness Checks**

- **Controlling for interaction effects**: Adding country × interview year, age × subnational region, age × year × subnational region, or age × country fixed effects to the model in order to control for finer-grained variation.
- **Placebo tests**: Including a test of pre-birth exposure variables (testing the effect of an individual's pre-birth exposure to democracy on support for democracy) and a test on non-political attitude questions (checking whether exposure to democracy is correlated with other social attitude variables).
- **Instrumental variable approach**: Using regional waves of democratization as an instrumental variable to address the issue that exposure to democracy may be correlated with deeper social changes.

#### **Analysis of the Immigrant Sample**

- **Immigrant sample strategy**: Using an immigrant sample, constructing exposure-to-democracy variables based on immigrants' country of birth, and controlling for immigration-country fixed effects and language fixed effects, to further verify the robustness of the main results.

## Results

- Figure 1 shows the relationship between exposure to democracy and support for democracy. It can be seen that under multiple definitions and across multiple measures, the two are positively correlated: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240522154517629.png)
- Table 1 shows the regression results of exposure to democracy and support for democracy. It can be seen that across all 6 indicators of support for democracy, the main explanatory variables are significant (the table does not mark significance levels; you can refer to the post for a quick calculation: [A little trick for calculating statistical significance](https://mp.weixin.qq.com/s/Ssyn4iNi9lPrmJk_rJvEAw)). ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240522154739776.png)
- Table 3 shows the effects of successful democracy, unsuccessful democracy, and unsuccessful autocracy on support for democracy, divided into four dimensions: economic growth, corruption control, peace and political stability, and public expenditure. Whether using the binary democracy variable or the continuous democracy variable, the effect of exposure to democracy on support for democracy is significant and positive. Democratic institutions that perform well in economic growth, corruption control, peace and political stability, public expenditure, and so on have a more pronounced effect on citizens' support for democracy. Unsuccessful democracies and unsuccessful authoritarian regimes have no significant effect on support for democracy, which indicates that only successful democratic institutions can cultivate citizens' active support for democracy.
- ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240522161301642.png)
- Figure 2 shows the placebo test for pre-birth exposure. It can be seen that the regression coefficients for pre-birth exposure are mostly insignificant, which indicates that it is current exposure to democracy, rather than early historical experience, that is the main factor influencing support for democracy. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240522161641696.png)
- Shows the effect of exposure to democracy on non-political attitude questions, in order to verify the specificity of exposure to democracy. The regression coefficients for most non-political attitude questions are insignificant: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240522162009164.png)
- Table 5 shows the effect of citizens' support for democracy on democratic institutions when facing different types of negative shocks. These shocks include economic crises, conflicts, and coups. The results show that when support for democracy is stronger, negative shocks are less likely to lead to long-term economic recession, conflict, or coups. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240522162559499.png)

## Conclusion

- Individual support for democracy is significantly positively correlated with the length of time a person has lived under democratic institutions from childhood to adulthood. This positive relationship remains robust after controlling for a large number of fixed effects, indicating that it does not reflect various cross-sectional differences, but is rather the result of an individual's democratic experience influencing political attitudes.
- Further analysis shows that the above effect of "democracy breeding support" comes mainly from democratic institutions that operate successfully. If a democratic institution performs poorly, failing to satisfy people in terms of economic growth, integrity, and so on, then its effect in cultivating support for democracy is very limited. By contrast, non-democratic regimes, even if they achieve fairly good governance outcomes, cannot win more public support.
- The above effects are not confined to a particular stage of life, nor do they diminish at the margin as democratic experience continues to accumulate. This indicates that people's attitudes toward political institutions are not fixed, but are continually updated through firsthand experience.
- The level of support for democracy in turn affects democratic institutions' ability to respond to crises. When facing negative economic shocks, countries with a higher level of support for democracy face a lower risk of political instability and coups, and their economic growth is also more robust. This shows that public trust in democracy can provide democratic countries with "immunity," helping them get through hard times.
- Taking the above findings together, this paper sketches out a dynamic process of benign, self-reinforcing interaction between democratic institutions and their public support: successful democratic institutions cultivate citizens' belief in democracy, and this belief in turn helps democratic institutions achieve stability and prosperity. This has important implications for explaining the long-term resilience of democratic countries, as well as for understanding the crises and challenges that democratic institutions face today.

## Extra

- Two of Big Dragon's books are recommended:
  - *Why Nations Fail: Power, Prosperity, and Poverty*. This book has a Chinese edition, and in accessible, easy-to-understand language it explains that **institutions are the fundamental cause that determines economic development**, and that predatory political and economic institutions lead to the failure of nations;
  - *The Narrow Corridor: States, Societies, and the Fate of Liberty*. This book has no simplified Chinese edition, but Taiwan has a translated version. This book can be regarded as a companion volume to *Why Nations Fail*, and could be translated as "**Why Nations Succeed.**" In short, the authors argue that liberty and prosperity require a balance between the state and society, walking within the "narrow corridor";

- **Fukuyama** would surely be very happy to see this paper;
- The main content of this post was generated by **GPT-4o**, so any results in this post should be treated with caution.

## Original Article Information

Daron Acemoglu, Nicolás Ajzenman, Cevat Giray Aksoy, Martin Fiszbein, Carlos Molina, (Successful) Democracies Breed Their Own Support, *The Review of Economic Studies*, 2024;, rdae051, https://doi.org/10.1093/restud/rdae051 

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240522105924977.png)
