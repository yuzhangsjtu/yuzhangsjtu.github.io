---
title: "JPE — Democracy Does Cause Growth"
date: 2024-05-28T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Acemoglu"]
summary: "In the long run, democratization increases GDP per capita by about 20%."
---

> Although the prevailing view holds that democracy is either inconsequential or harmful to economic growth, this paper introduces a new measure of democracy and finds empirically that democracy exerts a significant positive effect on GDP per capita. The study estimates that a country transitioning from non‑democracy to democracy will see its GDP per capita approximately 20 percent higher over the next 25 years than that of a country that remains non‑democratic throughout the same period.
>
> Further analysis suggests that democracy may promote economic growth through channels such as raising investment, encouraging economic reform, improving education and health services, and reducing social unrest—lending support to the theoretical hypothesis that democracies are more inclined to invest in public goods and to adopt economic policies that benefit broad segments of the population.

**Title:** Democracy Does Cause Growth

**Journal:** *Journal of Political Economy*

**Authors:**

- <u>Daron Acemoglu</u>: Institute Professor at MIT and an elected fellow of the National Academy of Sciences, American Philosophical Society, the British Academy of Sciences, the Turkish Academy of Sciences, the American Academy of Arts and Sciences, the Econometric Society, the European Economic Association, and the Society of Labor Economists. Daron is a school, a research institute, and an army all rolled into one!
- <u>Suresh Naidu</u>: Professor of International and Public Affairs and the Jack Wang and Echo Ren Professor of Economics, Columbia University.
- <u>Pascual Restrepo</u>: Associate professor at Boston University.
- <u>James A. Robinson</u>: British economist and political scientist. He is currently the Reverend Dr. Richard L. Pearson Professor of Global Conflict Studies and University Professor at the Harris School of Public Policy, University of Chicago. Daron’s trusty teammate!

**Publication date:** February 2019; the working paper version was posted on NBER in March 2014.

<br/>

## Introduction

### “Our pessimism”

- **Economic growth and non‑democracy:** China’s remarkable economic growth under a non‑democratic regime, the fading of the Arab Spring, and the recent rise of populist politics in Europe and the United States have made academic and policy debates markedly more skeptical about the role of democracy in economic growth. For instance, the noted *New York Times* columnist Tom Friedman (2009) argued that “One‑party non‑democracy certainly has its drawbacks. But when it is led by a reasonably enlightened group of people, as China is today, it also has great advantages. That one party can impose the politically difficult but critically important policies that are needed to move a society forward in the 21st century.” Robert Barro (1997) stated even more audaciously: “More political rights do not have an effect on growth.”
- **Pervasiveness of the pessimistic view:** Although some recent studies have estimated a positive effect of democracy on growth, the pessimistic view of democracy’s economic ramifications continues to spread widely. Summarizing the scholarly literature since the 1950s, Gerring et al. (2005) concluded that, “Over the past five decades, the net effect of democracy on cross‑border economic performance has been negative or nil.”

### Research aims and contribution

- **Challenging the conventional view:** This paper aims to challenge the view described above. Analysing country‑level panel data spanning 1960–2010, it investigates how the global spread of democracy over the last fifty years has affected economic growth. The evidence indicates that democracy does indeed foster economic growth, and that the effect is both statistically significant and economically meaningful.
- **Main finding:** The study finds that countries that switched from non‑democracy to democracy enjoyed GDP per capita roughly 20 percent higher over the subsequent 25 years than countries that remained non‑democratic. Democracy’s effect on growth does not depend on the initial level of economic development, although the study finds that democracy is more favourable to growth in countries with higher levels of secondary education.

### Empirical challenges and solutions

- **Measurement error:** Existing democracy indices suffer from substantial measurement error, generating spurious variation in democracy scores that does not reflect actual changes in democratic institutions.
- **Unobservable characteristics:** Democracies and non‑democracies differ along unobservable features—institutions, history, and culture—that also affect GDP. Cross‑country regressions such as those by Barro (1996, 1999) are therefore likely to be biased and can hardly reveal the causal effect of democracy on growth. Recent work addresses this issue by using difference‑in‑differences or panel‑data estimates that control for country fixed effects.
- **GDP dynamics:** As shown in Figure 1 and in the work of Acemoglu et al. (2005), GDP tends to decline prior to democratisation—a pattern that needs to be modelled in the analysis in order to distinguish the short‑run from the long‑run effects of democratisation on GDP. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240528103141775.png)
- Even when one can control for country fixed effects and GDP dynamics, democratic transitions may still be influenced by time‑varying unobservable factors that are correlated with future economic conditions, biasing the estimated causal effect.

> This paper employs a variety of econometric methods to address the challenges outlined above, seeking to identify accurately the causal effect of democracy on economic growth. These methods include:
>
> - Constructing an improved democracy measure using multiple data sources;
> - Employing dynamic panel models that include country fixed effects and lagged GDP;
> - Adopting semi‑parametric treatment‑effect models that relax the parametric restrictions on the GDP process;
> - Using the democratisation waves in a country’s region as an instrumental variable for the country’s own democratic status, so as to cope with the potential endogeneity of the democratisation process.

## Data

The study constructs an annual panel dataset covering 175 countries from 1960 to 2010, although not all variables are available across the entire sample period.

**Measuring democracy:**

- **Binary variable:** A country is coded as democratic if it is classified as “Free” or “Partly Free” by *Freedom House* **and** receives a positive score from *Polity IV*. When one of these two sources is unavailable, the classification is cross‑checked using data from Cheibub, Gandhi, and Vreeland (2010) or Boix, Miller, and Rosato (2012) to verify whether the country is also coded as a democracy.
- **Coverage:** This democracy measure covers 184 countries that existed at any point between 1960 and 2010 and applies to all countries that were independent during those years. In 1960, the proportion of democracies in the sample stood at 31.5 %; by 2010 it had risen to 64.1 %, illustrating the unprecedented scope of the spread of democracy studied in this paper.

**Other:**

- **Economic indicators:** The main economic indicator is GDP per capita (in constant 2000 US dollars), sourced from the World Bank Development Indicators.
- **Other variables:** Additional variables include investment; trade (exports plus imports); primary and secondary school enrolment; infant mortality (from the World Bank Development Indicators); financial openness (Lane and Milesi‑Ferretti, 2007); total factor productivity (Penn World Tables, as constructed by Feenstra, Inklaar, and Timmer, 2015); tax revenue (Hendrix, 2010); and an index of economic reform (Giuliano et al., 2013). Moreover, using the Cross‑National Time‑Series Data Archive compiled by Banks and Wilson (2013), a binary measure of social unrest—indicating the occurrence of riots and uprisings—is constructed.
- **Regional classification:** In some parts of the analysis countries are divided into the seven geographical regions used by the World Bank: Sub‑Saharan Africa, East Asia and the Pacific, Eastern Europe and Central Asia, Western Europe and other developed countries, Latin America and the Caribbean, the Middle East and North Africa, and South Asia.

## Estimation strategy

**Dynamic panel estimation**

A dynamic (linear) panel model is used to estimate democracy’s effect on GDP. The model includes country fixed effects and year fixed effects, and incorporates multiple lags of GDP to account for the dynamics of GDP.

The strategy rests on a sequential exogeneity assumption: conditional on lagged values of GDP and on the country fixed effects, changes in democratic status are assumed to be uncorrelated with time‑varying unobservable shocks to future economic conditions. By including sufficiently rich lag structures for GDP, the model eliminates autocorrelation in the error term and removes the influence of the pre‑democratisation decline in GDP.

**Treatment effects and semi‑parametric estimation**

A semi‑parametric model treats democracy as a “treatment,” allowing it to flexibly affect the entire distribution of GDP over different periods while still controlling for the dynamic evolution of GDP. Specifically, an inverse‑probability‑weighting (IPW) estimator is employed, which assigns higher weights to non‑democratising countries so that the treatment and control groups become comparable with respect to the dynamics of GDP. The weights are calculated on the basis of a propensity score—the probability that a country is democratic in period **t**, predicted from the country’s lagged GDP values.

### Instrumental‑variable estimation

The political‑science literature shows that democratisation frequently occurs in regional waves. The study therefore leverages the waves of democratisation within a given region as an instrumental variable to predict a particular country’s democratic status, thereby ensuring that the variation is exogenous.

Estimation is carried out by two‑stage least squares (2SLS). The first stage employs the instrumental variable to predict the democratisation status, and the second stage uses that predicted democratisation status to estimate the impact on GDP.

## Results

- Democratisation has a significant positive effect on GDP per capita. Within 25 years of a country’s transition to democracy, GDP per capita rises by about 20 %. This positive effect holds not only in the aggregate but also across countries at different levels of development.

- The semi‑parametric treatment‑effect framework is used to estimate the time path of democratisation’s effect on GDP. Results indicate that the effect of democratisation on GDP is gradual and remains positive at all time horizons examined.

- Using regional democratisation waves as an instrumental variable confirms democracy’s causal impact on GDP. The results show that when a country’s democratic status is predicted from such regional waves, the estimated effect on GDP remains significant, thereby reinforcing the causal interpretation.

- Mechanism analysis suggests that democracy leads to higher economic growth through channels such as promoting the accumulation of physical and human capital, advancing market‑oriented reforms, reducing social conflict, improving the supply of public goods, and narrowing income inequality.
- Additional analysis reveals that the positive effect of democracy on economic growth is present across countries at all levels of development. Whether in a low‑income or a high‑income country, democratisation significantly boosts economic growth. The effect is somewhat more pronounced among middle‑income countries, perhaps because such countries have already reached a threshold level of economic foundation that makes democratisation more effective at marshalling resources to promote growth. Furthermore, democracy’s impact on economic growth does not depend on the initial level of economic development; in other words, democracy can play a constructive role at any stage of development.

## Conclusion

- Democracy exerts a significant positive effect on GDP per capita. Analysing annual panel data for the period 1960–2010, the study finds that democratisation significantly propels economic growth in the long run, yielding an average increase in GDP per capita of about 20 %.
- The positive effect of democracy on economic growth holds for countries at all levels of development. This finding challenges traditional modernisation theories, as it suggests that economic development is not a prerequisite for democratisation. Democracy can play its growth‑augmenting role irrespective of the stage of economic development.

## Extras

- The opening of this paper echoes that of *The End of History and the Last Man*—both set out from “our pessimism.”
- The paper’s conclusions have stirred considerable scepticism; Professor Yang Yao states that the results are not robust.
- Daron Acemoglu delivered a speech at the fourth Caixin Summit. The headline of the Caixin report reads: “Acemoglu: Institutional Inclusiveness Can Promote Chinese Growth.” The link can be viewed at: [https://topics.caixin.com/2013-12-19/100619817.html](https://topics.caixin.com/2013-12-19/100619817.html)
- You may also click to view the original article; a transcript of Daron’s remarks at the Caixin Summit is appended at the end of the page.

## Original article information

Acemoglu, Daron, Suresh Naidu, Pascual Restrepo, and James A. Robinson. “Democracy does cause growth.” *Journal of Political Economy* 127, no. 1 (2019): 47–100. [https://doi.org/10.1086/700936](https://doi.org/10.1086/700936)

<iframe src="/pdfjs/web/viewer.html?file=/pdf/daron%20acemoglu.pdf" style='width:100%;height:800px'></iframe>
