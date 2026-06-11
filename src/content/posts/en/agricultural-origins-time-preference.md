---
title: "AER-The Agricultural Origins of Long-Term-Oriented Thinking (Myopia)"
date: 2024-03-05T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Origins"]
summary: "Geographic differences in the natural returns to agricultural investment have had a persistent effect on the time preferences of different societies."
---

> Why are some regions of the world more long-term oriented, while others seek more immediate rewards? "Have it now, or have it later" -- what is the origin of this time preference?
>
> Using global gridded data on potential crop yields and the natural experiment of the **Columbian Exchange**, Oded Galor and coauthors find that geographic differences in the natural returns to agricultural investment have had a persistent effect on the distribution of time preferences across societies: pre-industrial agricultural characteristics that favored higher returns to agricultural investment triggered processes of selection, adaptation, and learning, leading to the widespread prevalence of long-term orientation.

**Title:** The Agricultural Origins of Time Preference

**Journal:** American Economic Review

**Authors:**

- Oded Galor: Herbert Goldberger Professor of Economics, Brown University. Editor in Chief of the Journal of Economic Growth, the founder of [unified growth theory](https://en.wikipedia.org/wiki/Unified_growth_theory).
- Ömer Özak: associate Professor at the Economics Department at Southern Methodist University, with a Ph.D. from Brown University.

**Publication Date:** 10 October 2016

![image-20240305152406895](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240305152406895.png)

#### **Background**

- **Time preference** refers to the relative weight that an individual or an economy assigns to immediate versus future rewards; in plain terms, "have it now, or have it later." It is considered closely related to personal development, technological progress, human capital accumulation, and economic growth. Time preference exhibits wide geographic variation: some regions are better at delayed gratification and long-term orientation, while others are more prone to choosing high time preference;
- **Delayed gratification** is a manifestation of low time preference or **long-term orientation**: a decision-making disposition of willingly giving up immediate gratification for the sake of a more valuable long-term outcome, together with the self-control displayed during the waiting period. It influences people's **intertemporal decisions** such as saving and consumption. In psychological research, delayed gratification is considered to be associated with a series of positive outcomes; for example, children who display a better capacity for delayed gratification in experiments go on to perform better in academics, careers, health, and many other respects later in life;
- Time preference has an important impact on economic development, yet the origins of differences in time preference across societies remain unclear. Why are some societies more long-term oriented, while others lean more toward short-termism?

#### **Core Explanation**

- Geographic differences in the natural returns to agricultural investment have had a persistent effect on the distribution of time preferences across societies;
- If a region's agro-climatic conditions could nurture higher-yielding crops (within a given growing period), farmers in that region would increase their agricultural investment. The beneficial experience of returns to long-term agricultural investment was passed down through selection, adaptation, and learning, persisting into the contemporary era and making that region more long-term oriented;
- Mechanism: the experience of long-term orientation is transmitted to later generations through **cultural** channels.

#### **Basic Elements of the Evolution of Time Preference in the Malthusian Era**

- **Occupational choice**: long-term-oriented individuals chose agricultural activities with higher returns but delayed gratification. The model in this paper distinguishes two modes of agricultural production, which the authors call the endowment model and the investment model:
  - **Endowment model**: agricultural activity that uses existing land and resources, mainly hunting, gathering, fishing, herding, and subsistence farming (the harvest comes in the present);
  - **Investment model**: for example, grain-growing agriculture, where there is a time lag between input and return, the payoff coefficient at the time of return is higher than in the endowment model, and delayed gratification is an inherent feature;

- **Learning**: the agricultural investments made by long-term-oriented individuals proved profitable, which reinforced their capacity for delayed gratification;
- **Reproduction**: long-term-oriented individuals enjoyed superior economic conditions, which gave them higher success rates in producing offspring;
- **Intergenerational transmission**: because long-term-oriented individuals had higher reproductive success, the share of long-term-oriented individuals in the population increased over time.

> Therefore, in the long run, societies with higher returns to agricultural investment also exhibit higher long-term orientation.

#### **Data and Empirical Strategy**

##### **Challenges to Causal Identification**

- **Reverse causality**: long-term orientation may influence technology choices and in turn affect crop yields; that is, it may not be that high crop yields (high returns to agricultural investment) induced long-term orientation, but rather that long-term-oriented groups raised crop yields through channels such as technological improvement. This problem is mitigated by using data on a region's potential crop yields based on agro-climatic conditions (rather than actual yields);
- **Omitted variables**: factors such as geography, institutions, culture, or human characteristics may determine a group's long-term orientation and be correlated with potential crop yields; this problem is mitigated by controlling for geographic characteristics, continental fixed effects, individual characteristics, and country fixed effects;
- **Agro-climatic characteristics may directly affect contemporary time preference**: agro-climatic characteristics that favored high investment returns in the past may directly affect contemporary agricultural practices and time preferences, and in turn affect economic development; that is, the mechanism would be the direct effect of agro-climatic conditions rather than the "cultural" channel the authors propose. Using the Columbian Exchange as a natural experiment and examining the effect of pre-1500 potential yields on long-term orientation mitigates this problem;
- **Long-term-oriented groups may migrate to regions with high returns to agricultural investment**: examine the time preferences of second-generation immigrants in the same country but with different countries of origin -- for example, immigrants living in the United States whose parents came from the United Kingdom and from China, respectively. Both live in the United States, which keeps institutions, geography, and the cultural environment identical, the difference lying in the country of origin; this allows the mechanism to be confirmed as **intergenerational cultural transmission**.

> **The Columbian Exchange as a natural experiment**: around 1500, the impact of the Age of Exploration rapidly expanded the variety of crops a region could cultivate, so two potential maximum yields can be delineated with the Columbian Exchange as the dividing line. In the natural-experiment setting, the changes in potential crop yields and growth cycles brought by the newly introduced crops are assumed to be randomly assigned, and this randomness means that the changes are independent of any other regional characteristics that might affect yields. In this way, researchers can more confidently attribute the observed outcomes (such as changes in population density, economic development, technology adoption, etc.) to changes in crop yields and growth cycles rather than to other unobserved variables.
>
> The Columbian Exchange refers to the extensive biological and cultural exchange between the New World and the Old World (Europe, Africa, and Asia) that began after Columbus's discovery of the Americas. This exchange included not only goods and crops but also the spread of animals, plants, diseases, technologies, and more. In agriculture, the Columbian Exchange led to the intercontinental transfer of superior crops. For example, potatoes and tomatoes were introduced from the Americas into Europe, while wheat and rice came to the Americas from Europe and Asia. These newly introduced crops often raised local agricultural output, changed people's dietary structures and farming practices, and indirectly influenced local social structures and economic development.

##### **Main Data**

- Dependent variables:
  - Level of long-term orientation: measured at the country, regional, and individual levels, drawn mainly from data constructed by Hofstede and others, supplemented by data on long-term orientation from the European Social Survey (ESS) and the World Values Survey (WVS). In the existing literature, Hofstede defines long-term orientation as a cultural value representing the fostering of qualities oriented toward future rewards, perseverance, and thrift; it is expressed as a score;
  - Saving and smoking behavior: from the European Social Survey (ESS) and the General Social Survey (GSS);
  - Technology adoption: ethnicity-level data from the Standard Cross-Cultural Sample, a binary variable;
  - Population density: the number of people per square kilometer in 1500, from the data of McEvedy and Jones (1978).
- Independent variables:
  - Crop yield: the **potential** maximum yield, measured in calories per unit of area per unit of time, rather than the actual crop yield measured by weight. Potential crop yield is calculated on the basis of early cultivation methods and agro-climatic conditions, with data from the Food and Agriculture Organization of the United Nations' Global Agro-Ecological Zones (GAEZ) project; the source data come at a 5' x 5' grid scale (recall your high school geography: along a great circle of the sphere, 1 degree of latitude/longitude = 111 km, and 1 degree = 60', so 5' is about 9.25 km, and a 5' x 5' grid cell is about 85.56 km^2^; the paper says about 100 km^2^, which is a bit imprecise, ha). The cross-country distribution of potential crop yield before 1500 CE ranges from 0.5 to 18 (millions of kilocalories per hectare per year), with a mean of 7.2 and a standard deviation of 3.2;
  - Crop growth cycle: also from the GAEZ project, defined as the growth cycle of the crop with the highest calories under a given scenario. The distribution of pre-1500 CE crop growth cycles has a mean of 134 days, a standard deviation of 18 days, and a range of 80 to 199 days.

> The data on crop yields and growth cycles, as well as their changes, are all split into two groups: pre-1500 and post-1500.
>
> The authors explain in detail the construction of the various variables and the data sources in the paper's online appendix; interested readers can download it and take a look.

#### **Results**

- Country-level analysis: after accounting for a range of geographic factors, the result is significantly positive; a one-standard-deviation increase in crop yield raises long-term orientation by 9.5 percentage points. Using the experimental design based on the Columbian Exchange, the results remain unchanged;
- Second-generation immigrant data: for long-term orientation, the results remain significant; a one-standard-deviation increase in the origin country's pre-1500 crop yield raises second-generation immigrants' level of long-term orientation by 2-6 percentage points. For **saving** behavior, a one-standard-deviation increase in pre-1500 crop yield raises the likelihood of saving by 2-8 percentage points, and the effect of crop yield on saving behavior is mediated by long-term orientation. For **smoking** behavior, a one-standard-deviation higher pre-1500 crop yield in the origin country lowers the likelihood that an individual becomes a habitual smoker by 4 percentage points;
- World Values Survey data: each one-standard-deviation increase in pre-1500 CE crop yield raises the likelihood that an individual is long-term oriented by 3.2 percentage points; aggregating the data to the regional level to mitigate the influence of population migration, the results remain robust;
- Other results: societies whose ancestral populations were exposed before 1500 to higher crop yields and shorter growth cycles, as well as those exposed after 1500 to large increases in yields and shortened growth cycles, have a higher probability of adopting major technological innovations; the coefficient for population density is also positive and significant (Appendix Table B21).

#### **Extras**

- *"Patience is bitter, but its fruit is sweet."* -- *Aristotle* This epigraph appears in the working paper version of this article;
- The workload behind this paper is enormous, with so much data compiled; the authors' language is highly condensed, and I had a really hard time reading it;
- In research on the agricultural origins of xxx, using exogenous potential crop yields or crop suitability indices as the main explanatory variable or IV has become a common practice;
- **Second-generation immigrant** data are really handy; they work every time for demonstrating "culture and intergenerational transmission as the mechanism"!

#### **Paper Information**

Galor, Oded, and Ömer Özak. 2016. "The Agricultural Origins of Time Preference." *American Economic Review*, 106 (10): 3064-3103.[https://www.aeaweb.org/articles?id=10.1257/aer.20150020](https://www.aeaweb.org/articles?id=10.1257/aer.20150020)

<iframe src="/pdfjs/web/viewer.html?file=/pdf/AER-2016-The Agricultural Origins of Time Preference.pdf" style='width:100%;height:800px'></iframe>
