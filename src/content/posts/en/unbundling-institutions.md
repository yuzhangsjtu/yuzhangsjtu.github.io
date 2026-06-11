---
title: "JPE - Unbundling Institutions: Property Rights Institutions and Contracting Institutions"
date: 2024-07-03T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Acemoglu", "Origins Question"]
summary: "Opening the black box of institutions to investigate how property rights institutions and contracting institutions affect the economy."
---

> In the concluding remarks of Acemoglu et al. (2001)'s AER paper, the authors noted the need to open the **black box** of institutions. This paper takes up exactly that task, and its title can be literally translated as "Unbundling Institutions."
>
> Institutions are divided into **property rights institutions** and **contracting institutions**. The authors argue that property rights institutions protect citizens from expropriation by the government and elites, whereas contracting institutions facilitate private contracts among citizens. Exploiting the exogenous variation in legal origins and property rights institutions brought about by colonial history, this paper finds that property rights institutions have a significant effect on long-run economic growth, investment, and financial development, while contracting institutions mainly affect the form of financial intermediation.

**Title:** Unbundling Institutions

**Journal:** *Journal of Political Economy*

**Authors:**

- <u>Daron Acemoglu</u>: Institute Professor at MIT and an elected fellow of the National Academy of Sciences, American Philosophical Society, the British Academy of Sciences, the Turkish Academy of Sciences, the American Academy of Arts and Sciences, the Econometric Society, the European Economic Association, and the Society of Labor Economists.
- <u>Simon Johnson</u>: the Ronald A. Kurtz (1954) Professor of Entrepreneurship at the MIT Sloan School of Management. 

**Publication Date:** October 2005

<br/>

## Property Rights Institutions vs. Contracting Institutions

In Acemoglu et al. (2001)'s AER paper, the authors reach the important conclusion that **institutions are the fundamental cause of long-run economic development**. However, what exactly institutions do, and how the effects of different types of institutions differ, requires further investigation.

#### **Contract Theory and Predatory Theory**

In his classic work *Structure and Change in Economic History*, Douglass North divides the role of the state into two theories:

- **Contract Theory**: The state and its associated institutions provide a legal framework that enables private contracts to be enforced, thereby facilitating the smooth conduct of economic transactions. This framework reduces **transaction costs** and makes the market economy more efficient.
- **Predatory Theory**: The state is viewed as an **instrument** used to transfer resources from one group to another. In this case, the government or elites may use their power to expropriate citizens' resources.

In his book, North synthesizes these two theories and proposes an integrated story: good institutions not only support the enforcement of private contracts but also place constraints on the predatory behavior of the government or other politically powerful groups.

#### **The Importance of Institutions**

Over the past several decades, economists and political scientists have gradually formed a consensus that the social, economic, legal, and political form of organization—namely "institutions"—is the main factor determining economic performance. Nevertheless, the existing literature does not clearly distinguish between institutions that support private contracts ("**contracting institutions**") and institutions that constrain government and elite predation ("**property rights institutions**"). Instead, these studies typically treat the two as a single composite when discussing their importance.

For example, the contract-theory literature (such as the research of Coase) emphasizes the relationship between contract enforcement and organizational efficiency, stressing the importance of contracting institutions. By contrast, other authors (such as Jones, De Long, and Shleifer) emphasize the protection of private property rights, particularly protection from government expropriation.

> Some literature also refers to these two types of institutions as "**horizontal**" and "**vertical**" institutions, to emphasize that the former regulate transactions among ordinary citizens, while the latter regulate the relationship between the state (the elites) and citizens.

#### **Research Objective**

The main objective of this paper is to "unbundle" this composite and explore the relative importance of contracting institutions and property rights institutions at the macroeconomic level. The authors point out that conducting such a study requires overcoming several conceptual and empirical challenges:

- **Institutional overlap**: There may be overlap between contracting institutions and property rights institutions, but they also differ in important ways in nature. Contracting institutions involve transactions between private parties, while property rights institutions involve the relationship between citizens and the government or elites.
- **Effective proxy variables**: Finding effective proxy variables to measure these two types of institutions is challenging. An ideal proxy for contracting institutions should be able to measure the cost of enforcing private contracts, while a proxy for property rights institutions should reflect the degree of protection against government predation.
- **Identification of causal relationships**: To identify the causal relationships of these two types of institutions, the authors need to find exogenous, independent sources of institutional variation.

#### **Colonial History as Instrumental Variables**

Fortunately, the literature provides potential instrumental variables to address the above challenges. The authors use colonial history as an analytical tool:

- **Instrumental variables for contracting institutions**: Based on prior research, legal origins (such as English common law and French civil law) have a significant influence on contracting institutions. Because these legal systems were imposed by colonizers, they can be regarded as exogenous variables.
- **Instrumental variables for property rights institutions**: The mortality rates of European settlers and pre-colonial population density had an important influence on European colonial strategies. These variables, by affecting institutional arrangements during the colonial period, ultimately shaped modern property rights institutions.

## Empirical Strategy and Data

#### **Definitions of Property Rights Institutions and Contracting Institutions**

- **Contracting Institutions**: refer to the rules and regulations that govern contracts between ordinary citizens, such as contracts between creditors and debtors or between suppliers and customers. A key component of contracting institutions is how the legal system operates. Differences across countries in law and legal enforcement lead to significant differences in the cost of enforcing contracts, thereby affecting the equilibrium state of contracts and transactions. According to World Bank statistics, enforcing a simple commercial debt contract in the Dominican Republic costs more than 440% of per capita income and takes an average of 495 days, whereas in New Zealand this cost is less than 12% of per capita income and takes only 50 days.
- **Property Rights Institutions**: refer to the rules and regulations that protect citizens from expropriation by the government and elites. Such institutions are related to politics and state-society interactions. An obvious example of a property rights institution is a regulation that protects investors from government expropriation. There are major differences in property rights institutions across countries; for example, in many Sub-Saharan African countries and Central American countries, it is considered very likely that the **government will expropriate firms' revenues or assets**.

The **key difference** lies in the responses that citizens can adopt when facing weak contracting institutions versus weak property rights institutions. When contracting institutions are weak, creditors can partially mitigate the problem by raising interest rates, changing the form of contracts, or using reputation-based arrangements (such as long-term loan agreements). However, when property rights institutions are weak, citizens find it difficult to come up with similar responses, because the root of the problem lies in the abuse of political power by the government and elites, and it is impossible to use contracts to constrain the future use of political power.

#### **Baseline Regression**

This paper constructs a basic model of economic relationships that does not consider non-linear relationships, expressed as:
$$
Y_c = \alpha \cdot F_c + \beta \cdot I_c + \pmb{Z}'_c \cdot \pmb{\gamma}_0 + \epsilon_c
$$
where $Y_c$ is the outcome variable for country $c$, $F_c$ is a measure of contracting institutions, $I_c$ is a measure of property rights institutions, $\pmb{Z}'_c$ is a vector of other control variables, $\alpha$ and $\beta$ are parameters, $\pmb{\gamma}_0$ is the effect of the control variables, and $\epsilon_c$ is the error term.

The four main outcome variables this paper focuses on are:

- The level of GDP per capita (a measure of long-run growth)
- The ratio of investment to GDP (a measure of a society's ability to convert funds into investment)
- The ratio of private credit to GDP (a measure of the financial resources provided through banks and trade credit)
- The ratio of stock market capitalization to GDP (a measure of the development of equity finance)

**Measuring Contracting Institutions** $F_c$

The primary function of contracting institutions is to facilitate contract enforcement among citizens and ensure that transactions proceed smoothly. The authors use the following three indicators:

- **Legal Formalism Index**: measures the degree of formalism in legal procedures, that is, the complexity and strictness of legal procedures. The data come from Djankov et al. (2003); higher values indicate a higher degree of legal formalism and higher costs of contract enforcement.

- **Procedural Complexity**: measures the number and complexity of procedures required to resolve commercial disputes. The data come from the World Bank; higher values indicate more complex procedures and higher costs of contract enforcement.
- **Number of Procedures**: measures the number of procedures required to resolve commercial debt disputes. The data come from the World Bank; higher values indicate a larger number of procedures and higher costs of contract enforcement.

**Measuring Property Rights Institutions** $I_c$

The primary function of property rights institutions is to protect citizens from predatory behavior by the government and elites and to ensure the security of property rights. The authors use the following three indicators:

- **Constraint on Executive**: measures the degree to which government power is constrained, that is, the extent to which the government is subject to laws and other checks-and-balances institutions. From the "Constraint on Executive" measure in the Polity IV dataset, it captures the degree of constraint on politicians and politically powerful elites (Gurr 1997). This measure ranges from 1 to 7, where a higher score indicates greater constraint.
- **Protection Against Expropriation**: assesses whether the government arbitrarily expropriates private property. These data come from Political Risk Services; higher values indicate stronger protection against expropriation.
- **Private Property Index**: reflects the degree of protection of private property rights. From the Heritage Foundation; higher values indicate stronger protection of private property rights.

In the empirical analysis, the authors also add an interaction term $F_c \cdot I_c$ and higher-order terms of the two types of institutions to test whether interaction effects and non-linear relationships exist; the results are both negative.

#### Empirical Strategy

The simplest strategy is to use ordinary least squares (OLS) regression to estimate the model. However, this strategy has two problems:

- **Endogeneity**: Contracting institutions and property rights institutions may be endogenous, so OLS regression may capture reverse causality or the effects of omitted variables.
- **Measurement error**: If these two variables contain measurement error, then OLS regression may lead to a downward attenuation bias, and more importantly, if contracting institutions and property rights institutions are correlated, then the effect of the variable with larger measurement error may load onto the other variable.

To address these problems, the authors use **two-stage least squares (2SLS)** regression and choose reasonable instrumental variables for contracting institutions and property rights institutions, respectively. These instrumental variables should be correlated with the endogenous explanatory variables but uncorrelated with omitted characteristics that affect the outcome variables through any other channel.

The two first-stage equations of the 2SLS strategy are:
$$
F_c = \delta_1 \cdot L_c + \eta_1 \cdot M_c + \pmb{Z}'_c \cdot \pmb{\gamma}_1 + u_{1c}
$$

$$
I_c = \delta_2 \cdot L_c + \eta_2 \cdot M_c + \pmb{Z}'_c \cdot \pmb{\gamma}_2 + u_{2c}
$$


where $M_c$ is the log of European settler mortality or the log of native population density in 1500; $L_c$ is a dummy variable for English legal origin (i.e., whether the country was a British colony); and $u_c$ is the error term of the second-stage equation.

#### **Settler Mortality and 1500 Population Density**

Settler mortality and 1500 population density are used as instrumental variables for property rights institutions. These variables were constructed by Acemoglu et al. (2001), mainly based on the research of Gutierrez (1986) and Curtin (1989, 1998). This research shows that European colonial strategy had a significant influence on economic development. Where Europeans settled in good conditions, they established institutions that protected private property rights, whereas where settlement conditions were poor, Europeans tended to establish predatory institutions. For a discussion of this point, see the earlier articles:

- [AER - Differences in Settler Mortality Shaped Institutional Differences Across Colonies and Affected Today's Economic Development](https://mp.weixin.qq.com/s/jpiCisT0ZxCnCnAV5V5YZg)
- [QJE - Institutions, Not Geography, Shaped the Global Distribution of Wealth Over the Past 500 Years](https://mp.weixin.qq.com/s/6yq-UcxVHzQoLHMcS8WLMw)

####  **Legal Origins**

The concept of legal origins is crucial to understanding the differences across countries in legal, economic, and financial outcomes. The research of La Porta et al. (1997, 1998) extensively explored the distinction between the two major legal traditions: "**common-law**" and "**civil-law**." The common-law system is characteristic of countries that were part of the British Empire, while the civil-law system is prevalent in countries influenced by the French, German, or Scandinavian legal systems.

For former colonies, legal origin is generally considered exogenous, because the colonial powers imposed their legal systems on the colonized regions. This imposition enables researchers to use legal origin as an instrumental variable to measure the influence of contracting institutions.

## Results

- **Univariate regression** results: Table 2 presents the univariate regression results between the measures of contracting institutions and property rights institutions and the main economic outcome variables. The results show that high legal formalism and procedural complexity are associated with lower GDP per capita, investment rates, and financial development (private credit and stock market capitalization). This indicates that **countries with higher contract-enforcement costs have worse economic performance**. At the same time, strict constraints on the executive and effective protection of property rights are associated with higher GDP per capita, investment rates, and financial development. This indicates that **countries that protect citizens from expropriation by the government and elites have better economic performance**.![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704192526964.png)
- **Comparative analysis of contracting institutions and property rights institutions**: first stage. Panel A of Table 3 presents the first-stage regression results for contracting institutions, showing that English legal origin has a significant negative effect on legal formalism, procedural complexity, and the number of procedures, while settler mortality and 1500 population density have no significant effect. Panel B of Table 3 presents the first-stage regression results for property rights institutions, showing that settler mortality and 1500 population density have a significant negative effect on constraint on the executive, protection against expropriation, and private property, while the effect of English legal origin is small.![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704193325479.png)
- **Comparative analysis of contracting institutions and property rights institutions**: main results. Tables 4 and 5 present, respectively, the multivariate regression results for GDP per capita, the ratio of investment to GDP, the ratio of private credit to GDP, and the ratio of stock market capitalization to GDP. These tables include different combinations of contracting-institution and property-rights-institution indicators, as well as different combinations of instrumental variables. Using constraint on the executive and legal formalism as the explanatory variables, and using settler mortality and English legal origin as the instrumental variables, the authors find that constraint on the executive has a significant positive effect on GDP per capita, while the effect of legal formalism is not significant. The regression results of constraint on the executive and legal formalism on the ratio of investment to GDP show that the positive effect of constraint on the executive is significant, while the effect of legal formalism is not significant. The regression results for the other property-rights-institution indicators also support this conclusion. The regression results for constraint on the executive and legal formalism show that constraint on the executive has a significant positive effect on financial development (including private credit and stock market capitalization), while the effect of legal formalism is not significant. The regression results for the other property-rights-institution indicators also support this conclusion. These results indicate that **property rights institutions play a key role in promoting economic growth and financial development, while the influence of contracting institutions is relatively limited**. The authors conducted a variety of robustness checks to ensure the reliability of the results.![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704193705281.png)![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704193804435.png)

## Analysis Inside the Black Box

In this section, the authors further explore how contracting institutions and property rights institutions affect economic outcomes through different channels.

#### **Theoretical Explanation of How Contracting Institutions Affect the Economy**

- **Efficiency of the legal system**: The key to contracting institutions lies in the efficiency of the legal system. The more efficient the legal system, the lower the cost of contract enforcement, and the more smoothly transactions can proceed. Conversely, an inefficient legal system increases transaction costs and suppresses economic activity.
- **Procedural complexity and enforcement costs**: The authors use the legal formalism index from Djankov et al. (2003) and the procedural complexity and number-of-procedures data from the World Bank (2004). These data reflect the complexity of legal procedures and the cost of enforcing contracts. The more complex the procedures, the higher the enforcement cost, and the more economic transactions are hindered.
- **The form of financial intermediation**: Contracting institutions affect the form of financial intermediation. Although the direct effect of contracting institutions on overall economic growth is small, they affect the form in which financial markets develop. For example, countries with higher contract-enforcement costs may rely more on financial intermediaries with strong monitoring capabilities, such as banks, rather than relying on capital markets.

#### **Theoretical Explanation of How Property Rights Affect the Economy**

- **Constraint on political power**: Property rights institutions protect citizens' property rights through constraints on political power. Effective property rights institutions limit the predatory behavior of the government and elites and provide the security needed for investment and economic activity.
- **Persistence of institutions**: The authors emphasize that settler mortality and population density in colonial history affected the persistence of institutions. These historical factors determined whether colonizers established predatory institutions or protective institutions. Protective institutions were able to persist, giving these countries better property rights protection in the modern era.
- **Stability of the political and economic environment**: Effective property rights institutions enhance the stability of the political and economic environment, reduce uncertainty, and promote long-run investment and economic growth. Conversely, predatory behavior under weak property rights institutions leads to reduced investment and limited economic growth.

#### **Empirical Tests and Results**

The authors use the World Bank's World Business Environment Survey (WBES) data to analyze firms' assessments of various business problems. These problems include contract enforcement, government corruption, the predictability of legislation and administration, and so on.

In Panels A and B of Table 9, three variables related to the legal problems firms face are used:

- Firms' assessment of the overall quality of the courts: please rate the quality and efficiency of the services provided by the courts.
- Firms' assessment of how the judicial system specifically operates in handling commercial disputes. Based on the following question: "In resolving commercial disputes, do you think your country's court system is: (a) fair and impartial, (b) honest/uncorrupt, (c) quick, (d) affordable, (e) consistent, (f) judgments enforced (decisions enforced)?" The average of firms' responses to all six questions is used.
- Firms' views on competitors' infringement of intellectual property rights, which concerns the interactions between the surveyed firm and other similar firms.

These indices are normalized so that a higher score indicates that the respondent faces a greater problem. Therefore, better contracting institutions and English legal origin are expected to be associated with lower values of these indices, while the property-rights-institution measures and their instrumental variables should not be correlated with these indices. The results in Table 9 show exactly this pattern. That is, firms' assessments of court quality, the operation of the judicial system, and intellectual property protection are correlated with contracting institutions, but not with property rights institutions or the historical variables.![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704195009293.png)

Panels C and D of Table 9 examine the relationship between property rights institutions and the political problems firms face. In the WBES, three different variables are related to the political problems and predation risk firms face:

- The frequency of making any form of "additional payments" to government officials.
- Firms' assessment of the severity of government corruption.
- Firms' views on the predictability of legislation and regulations.

The results show that firms' assessments of government corruption and the predictability of legislation and administration are correlated with property rights institutions and the historical variables, but not with contracting institutions.

## Conclusion

- **The key role of property rights institutions**: Property rights institutions have a significant positive effect on long-run economic growth, investment, and financial development. By limiting the predatory behavior of the government and elites, property rights institutions provide a stable and secure environment that encourages private investment and economic activity.
- **The limited role of contracting institutions**: Although contracting institutions also play a role in affecting economic outcomes, their influence is relatively limited. Contracting institutions mainly affect economic development indirectly through their effect on the form of financial intermediation. In an environment with weak contracting institutions, the private sector can partially circumvent the negative effects by adjusting contract terms and the form of activities. For example, when contract-enforcement costs are high, loan interest rates rise, the monitoring role of banks is strengthened, or reputation mechanisms come into play.
- **The black box needs to be opened wider**: Future research needs to use detailed macro and micro data analysis to further explore whether individuals circumvent the costs brought about by weak contracting institutions by changing contract terms and the form of financial relationships. In addition, although the effect of property rights institutions on economic outcomes is very robust, their specific mechanisms still warrant deeper investigation: how exactly do property rights institutions affect investment, credit, and growth? Is it through the government and politically powerful groups expropriating the income of other groups? Or through preventing the entry of new groups and producers? The authors believe these are all fruitful directions for future research.

## Extra

- I have seen many papers doing policy evaluation, arguing that some policy promoted the economic development of the affected region, and usually adding the policy's effect on the local business environment in the mechanism section. It turns out this paper does the same, and it may even belong to a relatively early batch.
- Several of the dependent and explanatory variables in this paper are very interesting and quite helpful for understanding the current predicament of the Chinese economy. (Of course, the positions and thinking of the actual decision-makers are another matter.)
- I heard from a classmate at the planning institute that in recent years, for the government's urban/regional planning projects they take on, it has become the default that the contract amount will be discounted and the final payment cannot be recovered. 🙂‍↔️

## Original Article Information

Daron Acemoglu, and Simon Johnson. "Unbundling institutions." *Journal of political Economy* 113, no. 5 (2005): 949-995. https://doi.org/10.1086/432166 

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240703204548004.png)
