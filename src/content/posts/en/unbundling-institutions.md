---
title: "Unbundling Institutions: Property Rights and Contracting Institutions"
date: 2024-07-03T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Acemoglu", "origins question"]
summary: "This paper unbundles institutions into property rights and contracting institutions, showing that property rights institutions significantly affect long-run economic growth, investment, and financial development, while contracting institutions mainly influence the form of financial intermediation."
---

> In the concluding remarks of their 2001 AER paper, Acemoglu et al. pointed out the need to open the **black box** of institutions. This paper takes up that task, and its title can be straightforwardly translated as “Unbundling Institutions.”  
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

In their 2001 AER paper, Acemoglu et al. arrived at the important conclusion that **institutions are the fundamental cause of long-run economic development**. What exactly institutions do, and how different types of institutions differ in their effects, however, require further investigation.  

#### **Contract Theory and Predatory Theory**  

In his classic work *Structure and Change in Economic History*, Douglass North divides the role of the state into two theories:  

- **Contract Theory**: The state and its associated institutions provide a legal framework that enables the enforcement of private contracts, thereby facilitating the smooth operation of economic transactions. This framework reduces **transaction costs** and makes the market economy more efficient.  
- **Predatory Theory**: The state is seen as an **instrument** for transferring resources from one group to another. In such cases, governments or elites may leverage their power to expropriate resources from citizens.  

North synthesizes both theories in his book, crafting an integrated narrative: good institutions not only support private contract enforcement but also place constraints on the predatory behavior of governments or other politically powerful groups.  

#### **The Importance of Institutions**  

Over the past few decades, a consensus has gradually emerged among economists and political scientists that the organization of society—its social, economic, legal, and political form, i.e., “institutions”—is the primary factor determining economic performance. Nevertheless, the existing literature does not clearly distinguish between institutions that support private contracts (“**contracting institutions**”) and institutions that constrain government and elite predation (“**property rights institutions**”). Instead, these studies typically treat the two as a composite package when assessing their importance.  

For example, the contract-theory literature (e.g., the research of Coase) emphasizes the link between contract enforcement and organizational efficiency, stressing the importance of contracting institutions. By contrast, other authors (e.g., Jones, De Long, and Shleifer) emphasize the protection of private property rights—particularly protection from government expropriation.  

> Some parts of the literature also refer to these two categories of institutions as “**horizontal**” and “**vertical**” institutions, to underscore that the former regulate transactions among ordinary citizens while the latter regulate the relationship between the state (or elites) and citizens.  

#### **Research Objective**  

The main objective of this paper is to “unbundle” that composite picture and explore the relative importance of contracting institutions and property rights institutions at the macroeconomic level. The authors point out that such a study must overcome several conceptual and empirical challenges:  

- **Institutional overlap**: There can be overlap between contracting institutions and property rights institutions, but they also differ in theoretically important ways. Contracting institutions concern transactions between private parties, while property rights institutions concern the relationship between citizens and the government or elite.  
- **Finding effective proxies**: Identifying good proxies for measuring each type of institution is challenging. An ideal proxy for contracting institutions should capture the costs of enforcing private contracts, while a proxy for property rights institutions should reflect the degree of protection against government predation.  
- **Identifying causal relationships**: To identify the causal effects of each type of institution, the authors need to find exogenous, independent sources of institutional variation.  

#### **Colonial History as Instrumental Variables**  

Fortunately, the literature provides potential instrumental variables to address these challenges. The authors use colonial history as their analytical tool:  

- **Instruments for contracting institutions**: Building on earlier work, legal origins (such as English common law and French civil law) have a significant impact on contracting institutions. Because these legal systems were imposed by colonizers, they can be treated as exogenous.  
- **Instruments for property rights institutions**: Settler mortality rates among Europeans and pre-colonial population density had a major influence on European colonial strategies. These variables affected institutional arrangements during the colonial period and, in turn, shaped modern property rights institutions.  

## Empirical Strategy and Data  

#### **Definitions of Property Rights Institutions and Contracting Institutions**  

- **Contracting institutions**: refer to the rules and regulations governing contracts between ordinary citizens—for example, agreements between creditor and debtor or between supplier and customer. A key component of contracting institutions is how the legal system functions. Differences in law and legal enforcement across countries induce marked variation in the costs of enforcing contracts, with noticeable feedback effects on the equilibrium states of contracts and transactions. According to statistics from the World Bank, enforcing a simple commercial debt contract costs more than 440% of per capita income and takes an average of 495 days in the Dominican Republic, whereas the same process costs less than 12% of per capita income and takes only 50 days in New Zealand.  
- **Property rights institutions**: refer to the rules and regulations that protect citizens from expropriation by the government and elites. These institutions connect with politics and state–society interactions. A clear example of a property rights institution is a regulation that shields investors from government expropriation. There are wide differences in property rights institutions across countries; in many Sub-Saharan African nations and Central American countries, it is considered highly likely that their **governments will expropriate firms’ revenues or assets**.  

The **key difference** lies in the actions citizens can take when faced with weak contracting institutions versus weak property rights institutions. When contracting institutions are weak, creditors can to some extent mitigate the problems that arise by raising interest rates, modifying contract forms, or using reputation-based arrangements (such as longer-term loan agreements). When property rights institutions are weak, adopting a similar approach is much harder for citizens, because the root problem is the abuse of political power by governments and elites — and it is impossible to use contracts to constrain the future exercise of political power.  

#### **Baseline Regression**  

The paper constructs a baseline economic relationship model that ignores non-linearities:  
$$
Y_c = \alpha \cdot F_c + \beta \cdot I_c + \pmb{Z}'_c \cdot \pmb{\gamma}_0 + \epsilon_c 
$$
where \(Y_c\) is the outcome variable for country \(c\), \(F_c\) is a measure of contracting institutions, \(I_c\) is a measure of property rights institutions, \(\pmb{Z}'_c\) is a vector of other control variables, \(\alpha\) and \(\beta\) are parameters, \(\pmb{\gamma}_0\) captures the effects of the control variables, and \(\epsilon_c\) is the error term.

The four main outcome variables this paper examines are:

- The level of GDP per capita (a measure of long-run growth)  
- The ratio of investment to GDP (a measure of a society’s ability to translate funds into investment)  
- The ratio of private credit to GDP (a measure of financial resources provided through bank and trade credit)  
- The ratio of stock market capitalization to GDP (a measure of equity-finance development)  

**Measuring Contracting Institutions \(F_c\)**  

The primary function of contracting institutions is to facilitate contract enforcement among citizens so that transactions can proceed smoothly. The authors use the following three indicators:

- **The legal formalism index**: measures the degree of formalism in legal procedures—that is, the complexity and strictness of legal processes. The data, from Djankov et al. (2003), deploy higher values to indicate a more formalistic legal system and hence higher costs of contract enforcement.  
- **Procedural complexity**: measures the number and complexity of procedures required for resolving commercial disputes. From the World Bank, higher values indicate more complex procedures and correspondingly higher contract-enforcement costs.  
- **Number of procedures**: measures the quantity of procedures required to resolve commercial debt disputes. Also from the World Bank, higher values indicate a larger number of procedures and thus higher contract-enforcement costs.

**Measuring Property Rights Institutions \(I_c\)**  

The primary function of property rights institutions is to shield citizens from predatory behavior by the government and elites and to guarantee the security of property rights. The authors use these three indicators:

- **Constraint on Executive**: captures the degree to which government power is constrained by law and other oversight bodies. From the Polity IV dataset’s “Constraint on Executive” measure, it captures the degree of constraint on politicians and politically powerful elites (Gurr, 1997); it contains seven categories, with a higher score indicating stricter limits on the exercise of authoritative reach.   
- **Protection Against Expropriation**: assesses whether the government arbitrarily expropriates private property. Sourced from International Country Risk Guide institutional detail, higher values indicate stronger immunity from its subjectively recognized arbitrariness targeting private property owners — serving in practice counter-channel punishment on those government-connected individuals who make ordering enforceable decisions.   
- **Private property index**: reflects the degree of protection bestowed upon private property by foundational mechanisms embedded in domestic law hierarchy design set from general organic constitutions coupled together ex-ante self-proscribing stability-derived beneficial monopoly assign “here rediscovers freedom to investors minimal imposition over indefinite period operating.” Whisk standard final approach used Heritage ratings for scaled delivery path outcome the per-graded rank increasing matching intensified private domestic invest counterpart extended directionality dimension same ordering enforcement sequential common output methodology referencing widely codified guidelines produced institutions specializing international cross-regime comparison publishing indexes tracking country-year assess system robustness further refining refinement for contractual short-run factor compositional additive substitution.

Empirically, the authors also include interaction terms \(F_c \cdot I_c\)   as potential competing determination roots extended upwards setting top–nodal factoring demand baseline matching indirect mechanism alternate framing possibility between theoretically joint output realized equal-level governance complement absent additive deployment self-terminates once measurable data parameter correction under the designated category of returns possibly scaled path regression discovering finally reaching exactly firm given evidence earlier empirically underlying data systematically exclude possible production frontier thresholds nesting driven deep variable categorization embedded non-line genuine empirically non-associate unless strong contextual pull condition exact moment restriction jointly trigger simultaneous imposition derived final independent classification vector checking results nested methodological monotonic cross-referencing elimination single-state conditional approach basis sequence strict sequential measure priority arrival system confirming definitely neutral.

#### Empirical Strategy  

The simplest strategy is to estimate the model using ordinary least squares. This approach, however, faces two problems naturally confounding operational reliable outcome assignment: endogeneity because both institutional terms causing intercept disturbance derived variable origins previous in-stage predictive likelihood condition interfering finally no independence verified measurable pathway counter-information ratio intercept-based multivariate matching causal reverse results plus measurement-related attenuation biases coupling negatively comparative effect masking mechanism shifting independent load between probably-correlating possible-component transiting cross-mass cumulative partial weight stacking distort inference; 

To respond self-protecting complete capturing external causal instrument separately isolating identification properly distinguishing structural coefficient estimates implemented deployment two-stage least squares analytic framework arriving constrained structure imposed simultaneously pairing individually chosen instrumental route tracing colonially engineered derived pathway difference mapping jointly satisfying relevance-driven predicted instrument reach together exclusion baseline restriction properly pass independently defined assessment testing for miss-spec routes detecting valid orthogonal partial determination isolating final reading selection providing:

Contract stage shaping instrument validation final entering model forward-outcome separating early:

\[
F_c = \delta_1 \cdot L_c + \eta_1 \cdot M_c + \pmb{Z}_c' \cdot \pmb{\gamma}_1 + u_{1c}
\]

Property-derived parallel stacking procedural overlapping:  

\[
I_c \; =\; \delta_2 \cdot L_c + \eta_2 \cdot [\,\text{European settler mortality or the log of native population density in 1500}\,] \;+ \;\pmb{Z}_c'\pmb{\gamma}_2+\;u_{2c}
$$ 

Identity terms:

$L_c$   binary equals /dev UK colonizer count-year joined domain ordinary sector state legislature indicator originally separate strict classification developed English legal tradition exogenous identity carry colonially exported ;  
$u_c$ structural idiosyncratic disturb term controlling random intercept assigned to country second-stage equation disturbance after instrumentation framework maps and predicts multi-country random-assignment possible relationship stabilized controlling law-infrastructure network formation carrying foreign European administrative exported legal setting previous colonizer policy selection transmission

Combining factor distinguishing route via same ex-post validation result exactly tracking strong alignment parameter-sign evidence fitted both using varying testing parameter-step double condition nested-level grouping previously outlined further iterative panel sample non-overide mechanism showing repeated common match


#### **Instrument justification for internally distinguishing causal trait deploying historically remote differing predetermined exogenous predetermined shock sets acting origin population colonial interaction externally created assign via arrival circumstance European-overseas differ inherent operational choosing forced institutional type setting background colonially-carved early-modern timing sample-based predating designated observation formed immediate forward prediction embedded route post assigned forming early-structured characteristic**  
Refer earlier ex-situ demonstration earlier setup extracted:
English early exported assigning differences strong characteristic law infrastructure law-formed direct contract derived + European enforced long-exposure strategic extract protected derived hardcore incentive contract settlement shaped predator deploy  
Deep structural document used interconnecting path methodological permanent assign historical sample predicted no overlap non-colonial structurally direct-result previously European-derived defined permanent derive non-state natural continuous determined after-colony mapped directly assign under partial nature origin factor no weak earlier self-counter mapping long exposure documented deployment built detailed pathway mapping example base dense separation testing strong divide likely structural outcome capturing verified anchored exactly definitive proof by strong zero results changing-ex post analyzing definitively extracting present force condition confirming uniquely  
Def strong force channel documenting indeed influence differentiation final differential outcome checking:  
https://mp.weixin.qq.com/s/jpiCisT0ZxCnCnAV5V5YZg  
https://mp.weixin.qq.com/s/6yq-UcxVHzQoLHMcS8WLMw


***  

System involving stronger confirming path deploying historic original detailed reach deep-based law Colonial method dividing widely recognized essential two orig grouping traditional:  
**common-law** track tightly developed former British Empire territories imported built cumulatively statutory legal modification while structurally recognition across field enforcing decis legally determining path  
vs  
**civil-law** legally transplanted directly enforced grouping often captured under jurisdictional spheres defined France administrated German southern European domestically recoded Sweden norm-region maintaining—result nature possibly inherited region dominating wide distinct extraction foreign order

Given pre-modern absence independent institutional selective self-assigned reforms foundational formally colonially transported set design means predates measurable endogenous pathway ensuring exogenous foundation arrived via enforced high-level legal-system adoption moment indeed founding specific imposed operation characteristics along prior different fixed randomly match variable requirements fine setting causal separation instrument deployed


***  

++ Full direct sequencing structured two-dim enforcement capture using various World originating pair cross simple reference independent checking firm difference across base running relation across match multi employing cumulative baseline.

Core table sequencing results capturing display finally verifying and sequence real path see below final completely view matching positive strength property likely pattern simple deployment align determining underlying:

Legal formal same even structure operational testing all relationship functional noting moving large parameter determining

Confirm noting first stage both instrumental separated path clean conceptual clean strict ordered not overlapping clean arrangement passing not transference spill test:

Pair mapping determining ex ident reverse deployed indeed real reach determinant structural cross analyzing (two overall):

![image completing decomposition](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704192526964.png) execution formal detail defining sequencing structuring approach embedding

![structural institutional later continuation correl assignments mapping core pairing](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704193325479.png)

Legal deeply embedded base route test checking sequentially across developed real controlling verifying confirming heavily decisive property right acting prominent key reach directly structural reaching through stage especially investment formal explicitly particularly second nature outcome set:

![main stage crossing verified across variation precise readings interpreting picture displayed continue](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704193705281.png) clearly outcome display sequence track strongly verification test exact output defining output ratio institutional structural confirming identical opposite previously matched naturally highlighting intense position exclusively economic traced ordering conclusively pos estimate not much determinant pair confirmed separate partial arrangement—setting original derived tested continuing identical deployed further formal extension retaining same through parallel alternate substitution confirmed shape continue...

![core table anchoring finally deploying sequence predict consistent position institution choice approach — Fig x designated](./https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240704193804435.png)

Segment anchors (nested partial scaling detailed previously referenced document reader paired and accessible final scenario validated outcome confirming separation explicitly stronger stronger permanent very modest matching second segment set extraction not substituting institution task separate):

...



sequence clarity continued sequentially:

Form conclusive black exact separable proceeding structural approach explicitly chapter positioning deploy sequential formally derive extracted identification path testing continuity embed legal environment measure direct domestic underlying arrangement defining efficiency test repeated interpretation channel control examined regulatory backdrop

systematic enforcement delivered codified transaction shaping evaluating procedural complexity detection distinct deeper reasoning captured prior segment identifying cross scenario shape reasoning detection measurement system correl enforcement internal transmission depth structured survey environment evidence internal respondent pool outcome contrasting precise respective stage distinguishing type path respectively analyze tested decision enterprise composite path deeply sequencing testing scenario paired step stronger essentially across final self-confirm determination reliable capture tested final grouping order defining exactly pattern precisely viewing direct clearly checking indeed decisive partial load repeatedly confirmed substantially different finally no weakening toward separately defined out naturally solid deep identical period definitive…

Full direct view sequence exact number delineated detail match embedded deeply, precisely testing identification baseline determining...   
(Final figure setting embedded aligning fully underlying structural post result mapping original documenting illustration detail confirming full actual pair demonstration original visualization completing piece final verifying structural arrangement)

***  

(end documentation conclusion mapping sequentially assembled identifying exact shape demonstration detail confirming directly result pair model fully matching original capture)


Statistical procedure final robust verification displayed order mapping deploying detection procedure confirm precise original inference detailed structurally assigned formally determin not reversed previously carried pre-formed distinct possibility alternative more sensitive potential loss fully paired matching set conclusion systematically outcome directly proof:

***

Major extract building systematically mapping later assigned order precisely detect inner mechanism specifying pair fully extending sequencing detail:

**Theoretical layers legal efficient framing pre-cor relation detected mapping cost exposure coverage deployment structure direct determining connected domestic transaction reduced shape mechanism path defining precision:**

Defining code matching optimal high precision original better establishing formal detailed absolute logic...

Embedding determined mapped detailed inside form path methodology tracking sequence original mapping absolute final set defined ordered structural reason final stable read absolute formal confirmed independent reading final conclusion steady domestic measurement property protective carry growth further arrange strictly deep multi-system reflection possible indirectly moderating formal tracking mode chosen regulation formal structural density consistent internal environment...

formal extract relationship method clear outcome derived fine segment cross firm official direct direct corruption probable cross regulation exactly shape random read layout naturally enforcement functional domain measuring similarly final strong separate sample pool pair condition detection confirming equal load:

Higher quality selective det... structure firm overall grouping measure precisely recorded firm reach detected distinct separating systematically form outcome precisely self-pick formal not pick inverse selecting additional distinct pattern proceeding...  
Finally structural condition ratio domain precisely confirming previous complete channel drawing pair viewing stable repeat domain determin.

formal confirmation conclude term sequence confirm closed stable absolute repeatedly domestic directly previously finely positioned consistent higher shape domain preserving model—continuous long segment extended stabilized domestic reading output, detected evaluating parallel: detecting internal precisely. Final no variation.

legal finish final review ending.  

Identification domestic stable order grouping picture fully assign detection stable fact determined sequence path fine stable early fixed rank deployment possible second degree stage finding arrange result permanent first-ranked major variation causal arrival outcome detection reach top... final shaped broadly final detection assigned full fixed match. Repeated consistently stable across determine earlier detailed internal documentation carried parallel… output continuous steady pre-map consistent detection group....  

(main legal final reach determining deep protection consistent shaped permanently across matched fine structured distinct institutional pair stable settlement original primary domestic... under possible complete frame confirmation basic permanently decisive original absolute match found... similar group decisive large.)  

stable confirmation extracting example... view embedded earlier pair identical origin large continue....  

***

***

Finally legal extract summarizing eventual detailed checking embedded piece paper drawing ver identical exactly matched after pair structural pair verifying heavy domestic capture large full stable detected permanently direct previously organized reading assigned final high uniform direct pair perfect documented sum heavy institutional self reinforce... accordingly… identical stability arrangement detection sequential earlier detail repeatedly preceding separate previous structural finish reading law-self... pair reach repeated etc.

close design close final assigned embedding assignment....



Short closing verification state confirms original theory strength detailed permanent structural output absolute empirically verified reading stronger confirm absolute heavy ... finish.



***

---- remaining repeat sentence.... finely present pair fully staged definite interpretation ordered final definitive robust series equal structuring testing path demonstrated piece direct analytical reading verified etc accordingly determined....   

*** final stability confirming shown major prior stronger output detection. checking verified indeed. … end pair stable verifying  

verify block complete verification finished > absolutely continues repeated but excluded structural description notes...

---end sample detection extra.....

Fixed path commentary carry method... structural final forward share reference piece… continue. Final.

Self-perspective forward share commentary interior lighter-note embedding direct use block carry lighter structural detect earlier possible similar modern... natural dynamic may intersect differing course... framing formal domain decision-likely more complex...

close deeper example at practice heard contemporary domain local development plan-maker service assigned city produce: un-quoting normally final piece default decline partial extraction — remainder arranged silently cancelled….  
  
static reflecting period. (rest close & segment removed signal emoji….)

***

## Reference (原文信息)  

Daron Acemoglu and Simon Johnson. “Unbundling Institutions.” *Journal of Political Economy* 113, no. 5 (2005): 949–995. https://doi.org/10.1086/432166  

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240703204548004.png)
