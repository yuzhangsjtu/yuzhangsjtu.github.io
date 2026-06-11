---
title: "RES-Economic Integration and the Transmission of Democracy"
date: 2024-08-20T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Trade between democracies promotes the spread of democracy, but trade with non-democratic countries has a negligible effect on democracy."
---

> The wave of globalization has grown markedly since the 1960s, and at the same time the number of democracies around the world has also been increasing. This naturally raises a question: does economic integration with democratic countries change people's attitudes and promote the spread of democracy across countries?
>
> Using country-level panel data from 1960 to 2015, the paper measures the degree of economic integration with bilateral trade between two countries and exploits **improvements in air relative to sea transportation technology** to construct a time-varying instrumental variable for economic integration. The results show that economic integration with democratic countries significantly raises a country's democracy score, whereas economic integration with non-democratic countries has a weaker effect. This effect is driven mainly by **imports** rather than exports.

**Title:** Economic Integration and the Transmission of Democracy

**Journal:** *The Review of Economic Studies*

**Authors:**

- <u>Marco Tabellini</u>: Harvard Business School. He is an assistant professor in the Business, Government, and International Economy unit and is affiliated with the National Bureau of Economic Research (NBER), the Center for Economic Policy Research (CEPR), the Centre for Research and Analysis of Migration (CReAM), and at IZA.
- <u>Giacomo Magistretti</u>: He is an economist at the International Monetary Fund. His research interests are in macroeconomics and political economy, especially in the topics of fiscal sustainability, sovereign debt, and public perceptions of climate policies.

**Published online:** 09 August 2024

<br/>

## Economic Integration and Democracy

#### **Core Question**

- Many studies show that exposure to domestic democratic institutions can increase people's support for democracy. This phenomenon is especially pronounced in countries that are economically and socially successful (e.g., Acemoglu et al., 2023). See the earlier post: [RES-Successful Democracies Breed Internal Support](https://mp.weixin.qq.com/s/XrUyeppjyQbObxp9Y6SMuQ).
- However, there is little research on how democracy spreads across countries through economic integration.
- Individuals living under **autocratic regimes** cannot directly observe the characteristics of democratic institutions in their own country, but economic integration with democratic countries may to some extent make up for this deficiency.
- Since the 1960s, globalization has increased markedly, and democracy has also spread across the globe. The parallel development of these two trends raises a **key question**: has economic integration with democratic countries changed people's attitudes and thereby promoted the spread of democracy worldwide? This question is especially pressing as **globalization slows down** and as **trade between countries becomes more concentrated among partners with similar institutions and geopolitical stances** (e.g., Aiyar et al., 2023).

#### **Basic Results**

- **Economic integration with democracies promotes democratization in non-democracies**: the study finds that when a country's degree of economic integration with democratic countries increases, its democracy score (such as the Polity2 score) rises significantly. This effect is especially pronounced when trading with democracies that have long democratic histories, fast economic growth, high public spending, cultural proximity, and high-quality exports.
- **Imports promote democratization more than exports**: through further analysis, the authors find that imports, rather than exports, are the main channel driving the spread of democracy. In particular, the democracy-transmission effect is stronger when the goods imported from democratic countries are those involving more cultural exchange, consumer goods, and goods requiring higher bilateral trust.

#### **Contributions to the Literature**

- **The importance of experience with democratic institutions**: the existing literature shows that citizens' experience with democratic institutions is crucial to their stability and sound functioning (e.g., Acemoglu et al., 2023; Besley and Persson, 2019). The results of this paper show that even when citizens cannot directly observe democracy in their own country, they may still accumulate "**democratic capital**" through economic integration with other (democratic) countries. This finding extends the perspective of the existing literature by showing that economic integration can be an important channel for the spread of democracy.
- **Complementing the literature on how intergroup contact affects attitudes or beliefs**: in economics, many papers have documented how, under certain conditions, interactions between different groups (such as immigrants and natives) can worsen or improve intergroup relations. Most closely related to this study, Stegmann (2019) shows how, during the Cold War, visits from friends and relatives in West Germany increased East German residents' demand for regime change.
- **Revealing another channel through which trade leads to institutional change**: the literature on trade and democracy shows that countries with sounder institutions tend to specialize in the production of institutionally intensive goods, which requires stronger protection of property rights. Other work documents how trade triggers institutional change by altering the economic power of different groups in society, and how the direction of such institutional change depends on which groups benefit from trade. Liu and Ornelas (2014) find that free trade agreements increase the longevity of democratic institutions by lowering protectionist rents and raising elites' incentives to seek power. This paper complements these studies by revealing another channel through which trade leads to institutional change: the **transmission of democratic institutions from more democratic partners to less democratic ones**.
- **Methodological contribution**: this paper builds on Feyrer (2019), deriving the effects of trade through a time-varying instrumental variable. A similar approach is used by Pascali (2017), who exploits the variation induced by the introduction of steam technology to analyze the effects of trade in shipping. Feyrer (2019) and Pascali (2017) rely on time-varying instruments obtained from gravity equations to estimate the "gains from trade," in line with the work first done by Frankel and Romer (1999) in a cross-sectional, time-invariant setting. This paper complements these studies by focusing on institutional change rather than merely economic growth.

## Data and Methods

#### **Data**

- **Trade data**: bilateral trade data from the International Monetary Fund (IMF) "Direction of Trade Statistics" (DOTS) are used. These data include the exports and imports reported by each pair of exporting and importing countries in each year. To improve data reliability, the authors average the four trade measures for each country pair (i.e., the export and import data reported separately by the two countries). To further explore the effects of different types of goods on the transmission of democracy, the authors also use industry-level data from the United Nations Commodity Trade Statistics Database (UN Comtrade).
- **Democracy score**: the paper's measurement of democracy relies mainly on the Polity2 score, which comes from the Polity5 project and is a widely used measure of democracy in the literature. The Polity2 score ranges from -10 to 10, with higher scores indicating stronger democratic institutions. In addition, the authors define an indicator variable to distinguish democracies, whose Polity2 scores are positive, from non-democracies. As a robustness check, the authors also use the "Freedom House" democracy index, available from 1975 onward.

#### **Methods**

**Baseline Regression**

The analysis uses a panel regression model of the following form:

$$
y_{it} = \gamma_i + \lambda_t + \beta^D \log(T^{\text{demo}}_{it}) + \beta^A \log(T^{\text{auto}}_{it}) + W_{it} + \epsilon_{it}
$$
where:

- $y_{it}$ is the democracy score (e.g., Polity2) of country $i$ in year $t$;
- $T^{\text{demo}}_{it}$ denotes the country's trade with democratic countries as a share of GDP;
- $T^{\text{auto}}_{it}$ denotes the country's trade with non-democratic countries as a share of GDP;
- $\gamma_i$ and $\lambda_t$ denote country and year fixed effects, respectively, which control for inherent country characteristics and common year shocks;
- $W_{it}$ is a set of control variables, including lagged variables related to regional waves of democratization, to control for the influence of regional democratization trends;
- $\epsilon_{it}$ is the error term.

The core purpose of this model is to estimate the differential effects of economic integration with democratic and non-democratic countries on a country's level of democracy, captured by the parameters $\beta^D$ and $\beta^A$, respectively.

**Constructing the Instrument for Economic Integration**

When constructing the instrumental variable for economic integration, the authors use changes in the importance of air relative to sea transportation to predict trade between countries. The main idea behind this strategy is that bilateral trade volumes between different countries are affected to different degrees by air and sea distances. As air transportation technology has improved since the mid-1960s, air transport has become more important relative to sea transport, and the effect on trade volumes therefore differs across country pairs whose air and sea distances diverge substantially.

The authors adopt a time-varying gravity equation model to estimate bilateral trade flows. This model takes air and sea distances into account and allows for changes every five years over the period from 1960 to 2015. Similar to Feyrer (2019), the authors model the bilateral resistance term $\tau_{ijp}$ as follows (the formula may be rendered incorrectly; if you encounter rendering errors, please refer to the original article):

$$
\ln(\tau_{ijp}) = \beta_{p}^{{sea}} \ln({seadist}_{ij}) + \beta_{p}^{{air}} \ln({airdist}_{ij})
$$
where ${seadist}_{ij}$ and ${airdist}_{ij}$ denote the sea and air distances between countries $i$ and $j$, respectively. The coefficients $\beta_p^{\text{sea}}$ and $\beta_p^{\text{air}}$ in the expression vary across periods $p$, which makes it possible to capture the differential effects on bilateral trade of the distinct development of air transportation technology relative to sea transportation technology. In particular, because the effects of technological progress often take time to develop and diffuse, the authors allow this variation to occur at a time frequency lower than five years.

Building on this, the authors substitute the expression above into a standard gravity equation model, in which bilateral trade flows ${trade}_{ijt}$ can be expressed as:

$$
\ln({trade}_{ijt}) = \chi_{ij} + \phi_{it} + \psi_{jt} + \beta_{p}^{\text{sea}} \ln({seadist}_{ij}) + \beta_{p}^{{air}} \ln({airdist}_{ij}) + u_{ijt}
$$



- $\chi_{ij}$: country-pair fixed effects, which control for common characteristics between countries (such as common language, colonial ties, common borders, etc.);
- $\phi_{it}$ and $\psi_{jt}$: country-year fixed effects, which control for any country-time-specific factors that might affect bilateral trade and confound the effect of geographic distance, such as the construction of new ports or cargo airports.

After estimating the above equation, the authors take the exponential of the predicted log bilateral trade flows and sum them over all trading partners $j$ of country $i$ to compute country $i$'s total predicted trade flows. The formula is as follows:

$$
\widehat{{trade}}_{it} = \sum_{j \neq i} \omega_{ij} \exp(\ln{trade}_{ijt})
$$

This can be further expanded as:

$$
\widehat{{trade}}_{it} = \sum_{j \neq i} \omega_{ij} \left[ e^{\beta_{p}^{{sea}} \ln({seadist}_{ij}) + \beta{p}^{{air}} \ln({airdist}_{ij})} \right]
$$
Here, the authors weight the bilateral trade flows by the trade share between country $i$ and country $j$, $\omega_{ij}$, and obtain the predicted total trade volume through this weighted average. The authors further classify these trade flows according to whether the partner country is a democracy, in order to obtain instruments for economic integration with democratic and with non-democratic countries.

**Instrument Validity**

The variation in the instrument comes from changes in the importance of air relative to sea distance, a source of variation that is very likely exogenous, that is, beyond the control of any single country. Moreover, because the variation in the instrument is based entirely on geographic factors, the instrument is free from the risk of **reverse causality** (i.e., the process of democratization cannot affect the geographic distances between countries).

## Results

- The effects of trade with democratic and non-democratic countries on the level of democracy are estimated using both ordinary least squares (OLS) and two-stage least squares (2SLS). Under both estimation methods, **trade with democracies has a significantly positive effect on the democracy score**, but the 2SLS estimates are larger and more significant. For trade with non-democracies, the 2SLS estimates are small and insignificant.
- According to the 2SLS estimates, **an 80% increase in economic integration with democracies over five years (roughly the interquartile range of the sample) raises a country's Polity2 score by about 4 points**. This is equivalent to the democracy gap between Malaysia and Canada in 2010, or between Turkey and Senegal in 2015.
- When the sample is split into initially non-democratic and initially democratic countries, the results show that the effect of economic integration is especially pronounced for initially non-democratic countries, indicating that non-democracies are more likely to receive a boost to democratization through trade with democratic countries.
- **Explaining the asymmetry**: the authors find that economic integration with democratic countries has a significantly positive effect, while trade with non-democratic countries has almost no effect. They propose a possible explanation: citizens living in non-democratic countries may not fully understand the characteristics of democracy, so when they are exposed to the institutions of other non-democratic countries, they may not update their views about democracy. This updating process is more likely to occur when they first come into contact with democratic institutions (countries).
- **The timing of the effects**: an event-study design is used to analyze the impact of the first large increase in economic integration with democracies on democracy scores. The results show that after the first large increase in trade with democracies, the level of democracy improves gradually and persistently. Ten years after the first large increase in trade with democracies, the Polity2 score rises by about 1.7 points. This effect is not only significant but also long-lasting: 25 years after the first trade shock, the Polity2 score is more than 2 points higher than before the shock. Notably, these effects occur mainly in countries that are initially under autocratic regimes.

## Mechanisms

- **Democratic Partners as Role Models**: the spread of democracy is more pronounced when a country's trading partners are countries with deeper democratic histories. This is because both the citizens and the elites of non-democratic countries are more likely to regard these democracies as "role models" and to learn from them. To test this hypothesis, the authors split economic integration with democratic countries into groups according to different characteristics of the democratic partners:
  - **Democratic Capital**: the authors find that the democracy-transmission effect of economic integration is driven mainly by trading partners with higher levels of domestic democratic capital. This suggests that countries with long democratic experience are more likely to influence countries with weaker democratic institutions.
  - **Economic Performance**: the effect of economic integration is more pronounced when trading with democracies that grow faster (e.g., with higher per capita GDP growth rates) and have higher public spending. This is consistent with the findings of Acemoglu et al. (2023) that democracies transmit democracy to other countries more effectively when they perform well.
  - **Cultural Similarity**: the authors also find that democracies that are culturally closer to non-democratic countries are more successful in spreading democratic values. This suggests that cultural similarity may serve as a bridge in the process of democracy transmission, enhancing non-democratic countries' receptiveness to democratic institutions.

- **Imports vs Exports**: the analysis shows that democratization is driven mainly by imports rather than exports. This means that when citizens of non-democratic countries import goods from democratic countries, they may view these goods as symbols of the superiority of democratic institutions, thereby changing their views about democracy. The authors further analyze the role of different types of goods in the transmission of democracy and find that the high-quality goods exported by democracies, especially cultural products, consumer goods, technologically advanced products, and differentiated products, are more likely to promote the spread of democracy. These goods typically require more bilateral trust and face-to-face interaction, and are therefore more likely to embed democratic values and convey the advantages of democratic institutions.

The authors also rule out alternative mechanisms such as simple economic growth, human capital accumulation, and changes in resource allocation as explanations for the relationship between economic integration and the transmission of democracy.

## Dissecting Economic Integration

In the preceding analysis, the authors used a composite measure of economic integration to examine its effect on the transmission of democracy. However, economic integration includes not only trade in goods but also many other dimensions, such as migration, capital flows, and cultural exchange. In this section, the authors argue that it is necessary to unbundle these different dimensions of economic integration in order to identify which specific form of economic exchange drives the spread of democracy.

#### **Migration and the Transmission of Democracy**

Migration is an important component of economic integration and may affect the transmission of democracy in several ways:

- Migrants can bring the political views of their home country to the new country and form new attitudes in the new political environment;
- When migrants return to their home country, they may bring back the political experience and views acquired in democratic countries, thereby promoting the democratization process in their home country.

To test whether migration plays a role in the transmission of democracy, the authors use a gravity model similar to the one for trade in goods to predict migration flows. With this model, the authors can estimate the relative effects of migration flows and trade in goods.

The results show that the effect of trade in goods on the transmission of democracy remains significant and strong, but **the effect of migration flows is relatively small**, and sometimes even negative. This suggests that the role of migration flows in the transmission of democracy may be limited.

#### **Analysis of Other Dimensions of Economic Integration**

The authors also explore other dimensions of economic integration, such as foreign direct investment (FDI), the presence of multinational corporations (MNCs), students studying abroad, and book translations. These dimensions may affect the transmission of democracy through different channels. For example, FDI may introduce advanced management practices and institutions, which could indirectly promote democratization in the host country.

Owing to data limitations, the authors cannot conduct the same detailed analysis for each dimension of economic integration as for trade in goods. Instead, they use an indirect strategy: they first verify the **correlation** between these dimensions of economic integration and trade in goods, and then analyze whether they have a significant effect on the transmission of democracy.

Through a series of analyses, the authors find no significant correlation between these other dimensions of economic integration (such as FDI, multinational corporations, and students studying abroad) and the transmission of democracy. This means that although these factors may have important effects on a country's economic development and social structure, their role in driving the transmission of democracy is relatively limited.

In the final analysis, the authors further use a **regression discontinuity design based on air travel distance** to examine the potential effect of business travel. The results show that the effect of business travel is also statistically insignificant, which further supports the authors' core argument that trade in goods is the main factor driving the transmission of democracy.

#### **Economic Integration as a Proxy for Broader International Exchange**

Although the analysis in this section unbundles the different forms of economic integration for separate study, the authors also acknowledge that economic integration, especially trade in goods, can be viewed as a proxy variable for international exchange in a broader sense. This broader exchange involves not only the movement of goods but also cross-border flows of capital, people, and ideas. The authors therefore argue that **trade in goods may represent more than economic integration itself; it more likely reflects a country's deeper exchange and interaction with the outside world, an interaction that ultimately drives the spread of democracy**.

## Conclusion

- Economic integration with democratic countries significantly promotes the spread of democracy. Between 1960 and 2015, increased trade with democracies led to a significant improvement in the level of democracy in trading-partner countries;
- Economic integration promotes the spread of democracy especially through **imports**, and this effect is particularly pronounced when trading with democracies that are culturally closer and have deeper democratic experience;
- The process by which economic integration promotes democracy does not operate merely through economic development or the accumulation of human capital. Rather, economic integration is more likely to work by **changing how citizens of non-democratic countries perceive democratic institutions**, thereby advancing the democratization process in these countries.

## Extras

- Wouldn't the measurement of democracy already take the level of trade openness into account? I searched the Polity project's website but found no detailed information. Moreover, the website mentions that the project's funding has been interrupted, and the fate of subsequent data is unclear.
- Are the various kinds of trade organizations also a sort of organization in which democracy is cyclically and mutually reinforced?
- In the observation of Professor Chenggang Xu (许成钢), although **authoritarian states** and **totalitarian states** both belong to the category of non-democratic countries, modernization theory holds in authoritarian states, while totalitarian states are very difficult to change. That is to say, the democracy-promoting effect of trade usually does not work when one of the trading parties is a totalitarian state.

## Original Article Information

Marco Tabellini, Giacomo Magistretti, Economic Integration and the Transmission of Democracy, *The Review of Economic Studies*, 2024;, rdae083, https://doi.org/10.1093/restud/rdae083

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240820093140973.png)
