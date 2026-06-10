---
title: "Economic Integration and the Transmission of Democracy"
date: 2024-08-20T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Trade between democracies promotes the spread of democracy, but trade with non-democratic countries has negligible effects."
---

The wave of globalization has grown remarkably since the 1960s, while the number of democracies around the world has also increased. This naturally raises the question: Does economic integration with democratic countries change people’s attitudes and promote the spread of democracy across borders?

Using a country-level panel dataset from 1960 to 2015, the paper measures economic integration through bilateral trade flows and constructs a time-varying instrument for economic integration based on **improvements in air transportation relative to sea transportation**. The results show that economic integration with democratic countries significantly increases a country’s democracy score, whereas integration with non-democratic countries has a weaker effect. This effect is primarily driven by **imports** rather than exports.

**Title:** Economic Integration and the Transmission of Democracy

**Journal:** *The Review of Economic Studies*

**Authors:**

- <u>Marco Tabellini</u>: Harvard Business School. He is an assistant professor in the Business, Government, and International Economy unit and is affiliated with the National Bureau of Economic Research (NBER), the Center for Economic Policy Research (CEPR), the Centre for Research and Analysis of Migration (CReAM), and at IZA.
- <u>Giacomo Magistretti</u>: He is an economist at the International Monetary Fund. His research interests are in macroeconomics and political economy, especially in the topics of fiscal sustainability, sovereign debt, and public perceptions of climate policies.

**Published online:** 09 August 2024

<br/>

## Economic Integration and Democracy

#### **Core Question**

- A large body of research shows that exposure to domestic democratic institutions increases support for democracy. This pattern is especially pronounced in countries that are economically and socially successful (e.g., Acemoglu et al., 2023). See the earlier post: [RES－Successful Democracies Breed Internal Support](https://mp.weixin.qq.com/s/XrUyeppjyQbObxp9Y6SMuQ).
- However, much less is known about how democracy spreads across countries through economic integration.
- Individuals living under **authoritarian regimes** cannot directly observe the characteristics of democratic institutions in their own country, but economic integration with democratic countries may partly compensate for this deficiency.
- Since the 1960s, globalization has increased dramatically and democracy has spread worldwide. The simultaneous course of these two developments leads to a **key question**: Does economic integration with democratic countries change people’s attitudes and thereby facilitate the transmission of democracy on a global scale? This question is especially pressing in light of the **slowdown in globalization** and the fact that **trade has become more concentrated among partners that share similar institutions and geopolitical stances** (e.g., Aiyar et al., 2023).

#### **Basic Results**

- **Economic integration with democracies promotes democratization in non-democracies:** the study finds that when a country’s economic integration with democratic nations increases, its democracy score (e.g., the Polity2 score) rises significantly. This effect is particularly strong when trading with democracies that possess a long democratic history, rapid economic growth, substantial public spending, cultural proximity, and a focus on high-quality exports.
- **Imports promote democratization more than exports:** further analysis reveals that imports, rather than exports, are the primary channel driving the spread of democracy. In particular, the transmission effect is stronger when imports from democratic countries consist of goods that involve more cultural exchange, consumer goods, and goods requiring higher bilateral trust.

#### **Literature Contributions**

- **The importance of experience with democratic institutions:** existing studies document that citizens’ experience with democracy is crucial for its stability and sound functioning (e.g., Acemoglu et al., 2023; Besley and Persson, 2019). The results of this paper suggest that even when citizens cannot directly observe democracy in their own country, they may still accumulate **“democratic capital”** through economic integration with other (democratic) countries. This finding broadens the perspective of the current literature by showing that economic integration can serve as an important channel for the transmission of democracy.
- **Complementing studies on how intergroup contact shapes attitudes or beliefs:** in economics, many papers have documented how interactions between different groups (such as immigrants and natives) may, under certain conditions, either worsen or improve intergroup relations. Most closely related to this paper, Stegmann (2019) shows that visits from friends and relatives in West Germany during the Cold War increased dissidents’ demand for regime change in East Germany.
- **Revealing another channel through which trade induces institutional change:** the literature on trade and democracy suggests that countries with better institutions tend to specialize in institutionally intensive goods, the production of which requires stronger property rights protection. Other contributions document how trade leads to institutional change by altering the economic power of different groups in society, and show that the direction of such change depends on which groups benefit from trade. Liu and Ornelas (2014) find that free trade agreements increase democratic durability by reducing protectionist rents and raising the incentive of elites to seek power. This paper supplements these studies by revealing another channel through which trade can spark institutional change: the **transmission of democratic institutions from more democratic partners to less democratic ones**.
- **Methodological contribution:** this paper builds on Feyrer (2019) to derive the effects of trade using a time-varying instrumental variable. A similar approach is employed by Pascali (2017), who exploits variation induced by the introduction of steam technology to analyze the effects of trade in shipping. Feyrer (2019) and Pascali (2017) rely on time-varying instruments derived from gravity equations to estimate the “gains from trade,” consistent with the work first performed by Frankel and Romer (1999) in a cross-sectional, time-invariant setting. This paper complements these contributions by focusing on institutional change rather than merely on economic growth.

## Data and Methodology

#### **Data**

- **Trade data:** bilateral trade data from the International Monetary Fund’s *Direction of Trade Statistics* (DOTS) are used. These data include the exports and imports reported for each importer–exporter pair in each year. To improve data reliability, the authors average the four trade measures available for each country pair (exports and imports, as reported by each of the two countries). To delve further into how different types of goods affect democracy transmission, the authors also employ industry-level data from the UN Comtrade database.
- **Democracy score:** the paper’s main measure of democracy relies on the Polity2 score from the Polity5 project, a widely used democracy index in the literature. Polity2 scores range from –10 to +10, with higher values denoting stronger democratic institutions. In addition, the authors define an indicator variable that classifies countries as democratic when their Polity2 score is positive and as non-democratic otherwise. As a robustness check, they also use the *Freedom House* democracy index, available from 1975 onward.

#### **Methodology**

**Baseline Regression**

The analysis employs a panel regression model of the following form:

$$
y_{it} = \gamma_i + \lambda_t + \beta^D \log(T^{\text{demo}}_{it}) + \beta^A \log(T^{\text{auto}}_{it}) + W_{it} + \epsilon_{it}
$$

where:

- $y_{it}$ is country $i$’s democracy score (e.g., Polity2) in year $t$;
- $T^{\text{demo}}_{it}$ represents the country’s total trade with democracies as a share of GDP;
- $T^{\text{auto}}_{it}$ represents its total trade with non-democracies as a share of GDP;
- $\gamma_i$ and $\lambda_t$ denote country and year fixed effects, which account for time-invariant country characteristics and common year shocks;
- $W_{it}$ is a set of control variables that includes a lagged variable capturing regional democratization trends;
- $\epsilon_{it}$ is the error term.

The core purpose of this model is to estimate the differential impact of economic integration with democratic versus non-democratic countries on a country’s level of democracy, as captured respectively by the parameters $\beta^D$ and $\beta^A$.

**Constructing the Instrument for Economic Integration**

When constructing an instrumental variable for economic integration, the authors exploit the shifting importance of air relative to sea shipment to predict trade between countries. The main idea underlying this strategy is that bilateral trade flows between different country pairs are differentially affected by air and sea distances. As air transportation technology improved from the mid‑1960s onwards, air transport became more important relative to sea transport, differentially affecting trade between country pairs for which the air and sea distances differ markedly.

The authors employ a time-varying gravity model to estimate bilateral trade flows, incorporating both sea and air distances and allowing the coefficients to vary every five years from 1960 to 2015. Following an approach similar to Feyrer (2019), the bilateral resistance term $\tau_{ijp}$ is modeled as follows (in case the formula is rendered incorrectly, please refer to the original text):

$$
\ln(\tau_{ijp}) = \beta_{p}^{{sea}} \ln({seadist}_{ij}) + \beta_{p}^{{air}} \ln({airdist}_{ij})
$$

where ${seadist}_{ij}$ and ${airdist}_{ij}$ are the sea and air distances, respectively, between countries $i$ and $j$. The coefficients $\beta_p^{\text{sea}}$ and $\beta_p^{\text{air}}$ are allowed to vary over the period $p$, thus capturing how differential developments in air versus sea transportation technologies exert heterogeneous impacts on bilateral trade. In particular, because the effects of technological progress often take time to unfold and disseminate, the authors allow this temporal variation to occur at a frequency lower than five years.

Building on this framework, the authors replace the term above in a standard gravity specification, where bilateral trade flows ${trade}_{ijt}$ can be expressed as:

$$
\ln({trade}_{ijt}) = \chi_{ij} + \phi_{it} + \psi_{jt} + \beta_{p}^{\text{sea}} \ln({seadist}_{ij}) + \beta_{p}^{{air}} \ln({airdist}_{ij}) + u_{ijt}
$$

- $\chi_{ij}$: country-pair fixed effects that control for time-invariant common features between countries (such as common language, colonial ties, common border, etc.);
- $\phi_{it}$ and $\psi_{jt}$: country-by-year fixed effects that absorb any country-time-specific determinants that could influence bilateral trade and potentially confound the effect of geographical distances, such as the construction of new ports or cargo airports.

After estimating the above equation, the authors exponentiate the predicted values of log bilateral trade flows and aggregate them across all partner countries $j$ of country $i$ to derive $i$’s total predicted trade flows. The formula is as follows:

$$
\widehat{{trade}}_{it} = \sum_{j \neq i} \omega_{ij} \exp(\ln{trade}_{ijt})
$$

This can be further expanded as:

$$
\widehat{{trade}}_{it} = \sum_{j \neq i} \omega_{ij} \left[ e^{\beta_{p}^{{sea}} \ln({seadist}_{ij}) + \beta_{p}^{{air}} \ln({airdist}_{ij})} \right]
$$

Here the authors weight the bilateral trade flow using the observed trade share between countries $i$ and $j$, denoted $\omega_{ij}$, and obtain total predicted trade through this weighted average. The authors further classify these trade flows according to whether the trading partner is democratic, to obtain instruments for economic integration with democratic countries and with non-democracies.

**Instrument Validity**

The instrumental-variable strategy relies on variation sourced from the changing importance of air distance relative to sea distance, a source that is plausibly exogenous—i.e., not under the control of any single country. Moreover, because the variation in the instrument is based purely on geographic factors, the instrument does not suffer from the risk of **reverse causality** (the process of democratization cannot affect geographical distances between countries).

## Results

- The effect of trade with democracies and with non-democracies on the democracy score is estimated using both Ordinary Least Squares (OLS) and two-stage least squares (2SLS). In both estimation frameworks, **trade with democracies exerts a significantly positive effect on the democracy score**, but the estimated effects from 2SLS are larger and more precisely estimated. By contrast, the 2SLS estimate of the effect of trade with non-democracies is small and not statistically significant.
- According to the 2SLS results, **an increase in economic integration with democratic countries equivalent to 80% over five years (roughly the interquartile range of the sample) raises a country’s Polity2 score by about 4 points**. This is equivalent to the democracy gap between Malaysia and Canada in 2010, or that between Turkey and Senegal in 2015.
- When the sample is split into countries that are initially non-democratic and initially democratic, the results show that the effects of economic integration are especially pronounced for initially non-democratic countries, indicating that non-democracies are more likely to benefit — in terms of democratization — from trade with democratic nations.
- **Interpreting the asymmetry:** the authors find a significant positive impact of economic integration with democratic countries but almost no impact from trade with non-democracies. They propose a possible explanation: citizens living in non-democratic countries may have insufficient knowledge of how democracies operate, and consequently, exposure to institutions in other non-democratic countries may not lead them to update their beliefs about democracy. Such an updating process is more likely to occur upon their first exposure to democratic institutions (in a democratic country).
- **Timing of the effects:** using an event-study design, the authors analyze how large initial increases in economic integration with democratic countries affect democracy scores. The results show that after the initial large increase in such trade, the level of democracy rises slowly but steadily. Ten years after a large initial increase in trade with democratic nations, the Polity2 score increases by about 1.7 points. The effect is not only significant but also long-lasting: 25 years after the initial trade shock, the Polity2 score is more than 2 points higher than its pre-shock level. Notably, these effects are largely confined to countries that are initially under authoritarian regimes.

## Mechanisms

- **Democratic partners as role models:** when a country’s trading partner has a more profound democratic history, the spread of democracy is more apparent. This likely occurs because both the citizens of non-democratic countries and their elites tend to regard these deeply democratic nations as “role models” and learn from them. To evaluate this hypothesis, the authors split economic integration with democratic countries according to various characteristics of the democratic partner:
  - **Democratic capital:** the authors find that the democracy-transmitting effect of economic integration is largely driven by trade with partners that possess a high level of domestic democratic capital. This indicates that countries with extensive experience in democratic governance are more capable of influencing those with weaker democratic institutions.
  - **Economic performance:** the effect of economic integration is significantly larger when trade takes place with democracies that either grow faster (i.e., have higher per capita GDP growth) or have higher levels of public spending. This aligns with the findings of Acemoglu et al. (2023) that democracies transmit democracy more effectively when they perform well.
  - **Cultural similarity:** the authors also find that democratically governed countries that are culturally more similar to the non-democratic country are more successful in transmitting democratic values. This suggests that cultural similarity acts as a bridge in the democracy diffusion process, enhancing the non-democratic country’s receptiveness to democratic institutions.

- **Imports versus exports:** the analysis reveals that democratization is driven primarily by imports rather than by exports. This implies that when citizens in non-democracies import goods originating from democratic countries, they may tend to treat these goods as markers of the presumed superiority of the democratic system, thus shifting their perception of democracy. The authors further analyze the role played by different types of goods in transmitting democracy, finding that democratic countries’ exports of high-quality goods — in particular, cultural products, consumer goods, technologically advanced products, and differentiated goods — are more likely to promote democracy. Those goods typically require higher levels of bilateral trust and more face-to-face interactions, which may make them more capable of embedding democratic values and signaling the advantages of democratic institutions.

The authors also exclude simple economic growth, human capital accumulation, and changes in resource allocation as alternative channels that could explain the relationship between economic integration and democracy transmission.

## Dissecting Economic Integration

In the preceding analysis, the authors used aggregate metrics of economic integration to study their impact on democracy transmission. Yet economic integration encompasses not only trade in goods but also dimensions like migration, capital flows, cultural exchange, and so forth. In this section the authors argue that it is necessary to unbundle these heterogeneous aspects of economic integration in order to identify which specific form of economic exchange drives the transmission of democracy.

#### **Migration and the Spread of Democracy**

Migration, a crucial component of economic integration, could affect democracy transmission in various ways:

- migrants may carry political views from their home country and adopt new attitudes in the host country’s political environment;
- upon returning to their home country, migrants may bring back political experience and perspectives acquired in democratic countries, thereby facilitating the democratization process at home.

To assess whether migration plays a role in transmitting democracy, the authors employ a gravity-style model — akin to that used for trade in goods — to predict migration flows. This modeling strategy permits an assessment of the relative importance of migration flows vis‑à‑vis trade in goods.

The results show that the impact of merchandise trade on democracy transmission remains sizable and significant, yet **migration flows are of relatively minor importance** and are weakly, occasionally even negatively, associated with democratization. The evidence suggests that the role of migration in driving democracy diffusion might be limited.

#### **Analysis of Other Dimensions of Economic Integration**

The authors also explore other facets of economic integration, including foreign direct investment (FDI), the presence of multinational corporations (MNCs), student mobility, and book translations. In principle, these channels could promote democratic diffusion. For example, FDI could introduce advanced management practices and institutions that may indirectly foster democratic governance in host countries.

Data limitations preclude the type of granular analysis that was performed for trade in goods. Nonetheless, the authors adopt an indirect strategy: they first verify the extent to which those alternative integration dimensions are **correlated** with trade in goods, and then analyze whether they bear a significant relationship with democracy transmission.

Taken together, these supplementary analyses show no significant correlation between those other dimensions of integration (e.g., FDI, MNCs, student mobility, etc.) and democracy diffusion. That is, even though such channels may substantially contribute to a country’s economic development and reshape its social structure, their role in actively promoting democratization seems to be relatively limited.

In their final analysis, the authors further employ a **regression‑discontinuity design based on air‑travel distance** in order to probe the potential impact of business‑related travel. The findings indicate that business travel also lacks statistically significant effects in fostering democracy diffusion. This bolsters the authors’ core argument that trade in goods is the main vehicle for democracy transmission.

#### **Economic Integration as a Proxy for Broad-Based International Exchange**

While this section’s analysis seeks to disentangle the distinct effects of different forms of economic integration, the authors openly acknowledge that economic integration, and trade in goods in particular, may effectively serve as a proxy for a wider variety of transnational exchanges. Such exchanges include not only the movement of goods but also cross-border flows of capital, people, and ideas. The authors consequently argue that **merchandise trade may encapsulate more than mere economic integration per se, potentially reflecting a country’s deeper interactions with the outside world — interactions which ultimately drive the propagation of democracy**.

## Conclusion

- Economic integration with democratic countries substantially promotes the spread of democracy. Over the period from 1960 to 2015, increased trade with democracies led to a quantitatively large improvement in the democracy level of trading-partner countries.
- Economic integration promotes democracy particularly through **imports**, and these effects are especially salient when trade occurs with democracies that are culturally closer and that have a lengthier democratic heritage.
- The process of integration-driven democratization is not merely the result of rising economic development or accumulated human capital. Instead, it more plausibly hinges on **altering how citizens in non-democratic states perceive democratic institutions**, a shift that thereafter fuels those countries’ march toward democratization.

## Extras

- Does the Polity measure of democracy already incorporate the degree of openness to trade? I searched the Polity project’s website but found no detailed documentation to that effect. And the project’s funding has already been interrupted, meaning that its fate is somewhat uncertain.
- Could those various trade organizations also function as quasi-organizations that create a cumulative dynamic where trade and democracy each spur the other?
- According to Professor Xu Cheng-Gang’s observations — though both **[authoritarian]** and **[totalitarian]** can be grouped under the “non-democracy” heading, modernization theory largely holds under moderate authoritarian conditions but is unlikely to succeed when it comes to a totalitarian case. That clearly suggests trade will seldom assist democratization if one’s trading counterpart fits the totalitarian label.)

---



-----


## Original Article Information

Marco Tabellini, Giacomo Magistretti, Economic Integration and the Transmission of Democracy, *The Review of Economic Studies*, 2024;, rdae083, https://doi.org/10.1093/restud/rdae083

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240820093140973.png)
