---
title: "Watch Out for Possible Traps in Causal Inference"
date: 2020-04-23T23:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["Notes", "Causal Inference", "Quasi-experimental Methods", "Property Tax"]
summary: "Quasi-experimental methods have strict assumptions and testing procedures; rigorous research design is needed to avoid potential traps."
---

#### 1. Introduction

If the ultimate destination of a social academic discipline is to become a social science, its empirical research must undergo a “credibility revolution” <a href="#" title="Angrist J D, Pischke J S. The credibility revolution in empirical economics: How better research design is taking the con out of econometrics[J]. Journal of economic perspectives, 2010, 24(2): 3-30."><sup>[1]</sup></a> — that is, in its research paradigms, and especially in policy evaluation studies, it must draw closer to the experimental methods of the natural sciences. Yet, due to ethical constraints and the limitations of research design, it is very difficult for us to rigorously assign a treatment group and a control group for controlled experiments. In most cases, we can only use observational data rather than experimental data for causal inference. To approximate the gold-standard criterion of the “large-sample randomized double-blind controlled trial,” social science researchers (particularly in economics) have developed a series of “quasi-experimental methods” for causal inference based on the potential outcomes framework, including matching, difference-in-differences, synthetic control, and regression discontinuity design <a href="#" title="赵西亮. 基本有用的计量经济学: 北京大学出版社, 2017."><sup>[2]</sup></a>.

Following the fundamental trajectory of academic production — “foreign theory → overseas verification → domestic adoption → domestic verification” — quasi-experimental methods have gained increasing popularity domestically. Moreover, with knowledge-based paid content becoming more widely accepted, we often encounter eye-catching, anxiety-driven clickbait titles on WeChat public account articles that, upon further scrolling, turn out to be advertisements promoting training courses in method X. The teaching of quasi-experimental methods constitutes a major part of such promotions. However, these methods rely on strict assumptions and testing protocols, and their use requires identifying potential causal pitfalls.

Now let me return to my old calling: using a case study of policy evaluation in the real estate domain, I will highlight potential causal inference traps that may exist within it.

#### 2. Case Illustration

Discussion on levying property taxes and their potential policy effects is a landscape of contending viewpoints in Mainland China. The pilot property tax schemes launched in Shanghai and Chongqing in 2011 gave these discussions empirical grounding. The case selected for this article focuses on the impact of property taxes on industrial relocation <a href="#" title="刘友金,曾小明.房产税对产业转移的影响:来自重庆和上海的经验证据[J].中国工业经济,2018(11):98-116."><sup>[3]</sup></a>; the authors primarily applied the synthetic control method to parse this complex effect.

**(1) Gaps & Issues**

Existing research has noted the impact of housing price increases on industrial relocation. Specifically:

One view posits that:

> Housing price increases drive inter-regional industrial relocation. Rabe and Taylor (2012), Murphy et al. (2006), and others argue that rising housing prices limit labor inflows, increase the real cost burdens faced by firms, generate crowding-out effects on non-real-estate sectors, and thereby trigger industrial relocation. Gao Bo et al. (2012) found that, with other conditions (such as inter-regional relative wages and transportation costs) held constant, increasing relative urban housing prices drive low-value-added industries away from Eastern and Central Chinese cities, while facilitating the burgeoning development of high-end manufacturing and the tertiary sector. Shao Ting and Fan Jianyong (2010) argued that excessively rapid housing price appreciation in large cities was a key driver behind manufacturing relocation within the Yangtze River Delta.

Another view suggests:

> There is an “inverted U-shaped” relationship between the impact of rising house prices and industrial relocation. A moderate rise in house prices may promote the secondary and tertiary sectors via agglomeration effects, while excessive prices will crowd out secondary sector employment and output, yet are positively correlated with employment and output in the tertiary sector (Xi Yanling, 2013). Chen Xiao and Zhang Wenjie (2017) reached similar conclusions, proposing that an inverted U-shape characterizes this relationship: only when relative house prices surpass a certain critical threshold do they begin to crowd out secondary sector employment, even as they boost tertiary employment and output.

The above findings are inconsistent and do not directly address the role of property tax on industrial relocation, despite the crucial link between property tax receipts, firms' productive costs, and their investment decisions.

Theoretically, a property tax policy may influence industrial relocation through two key channels:

The property tax affects firms' productive costs:

> By lowering firms' costs of production, the property tax may attract enterprises, thereby facilitating inward industrial relocation. Firms' production costs comprise three components: labor, land, and credit costs. Regarding labor, housing prices affect mobility—a price-driven displacement of lower-end workers can turn mid or high-skilled workers into "mortgage slaves," thereby modifying talent structures and potentially stifling innovation. In terms of land, sky-high property values evidently bid up urban land values overall, raising firm site costs. As for credit, the overwhelming prosperity of the real estate market draws down credit to the broader manufacturing or logistics economy, raising their capital costs. In turn, local industries seek lower costs, promoting relocation. Given these pressures, property tax can increase holding or residence costs for homeowners/house-buyers, reducing aggregate vacancy rates and boosting market-e  supply. This would, in theory, moderate housing and thus market land prices alike, lessening relocation probabilities and easing cost-to-stay along original core bases. Similarly, an overtly pricing forward trajectory compels investments to shift *from* real-and-real-side firms for local operation, to alternate locales in avoidance — internecine pulls thus making in situ preservation impossible → primary observation = capital relocation dynamics start.

The property tax also derives from/inverting firms productive-choice t's:

> By changing returns between real and "paper local capitals" towards increased public non-real sides for "local structure out/in." Simply put, raising returns to non-property-deploy means saves lowered turnover destructions borne for producing firm owners (& hence smaller property dependent base cost as local portions leave → produces labor exit of low-end manuf space conversion to anything/max housing above high, reversing productive shrinking = reduces both side prices overall!). Depending large low interest from inflating through taxes for reduced appreciation → turns speculative-short distorted – avoiding real cost housing & hence allowing new foundings homegrow for productive staying t-h-e structures → repulsion policies at last stage meaning absolute size/deployable may reduces once thresholds deploy price further diminished leading ratio once done).

By checking-to home large > town reducing or reversed at pattern decreasing reversed that ever runs below prior before longer place checked.

And outcomes...

(and so structuring argument then turned…)... For interior churn from inter-place checked, reducing r t states more different/ or … effects under examination so for simpler paths ends to (both ways)..

Above, arguments for where they meant regarding possible follow and thus emerge separate or conjoined parameters which appear separated output outcomes once differential designs may taken under effect measures review results both > inter regional divergent as and varied toward how for rest both concluded).

(check one impacts’ for different ' in relative intensity patterns).

Summarily paths – plausible differential combined cost/re-invest shift shifts inter=internalized & ex relation of shifting along for interpret partial).

##### Issues tackled :
paths under questioned tested):

issue1 ( do divergent form check implement – yes)?

Their type for different answered experiment after design observation for separately verifies contrast evaluated results through parallel compute tests generating dual multi-reg city used simulation forms combining non – exposure)

hypotheses : 
-with both possible without for question2(- shifts differences separately related differences implementation /):

research problem differences capturing = explicit leads- time

methods formal studies <em >… continue case decompose exactly case ...

**(2) Data & methodology**

Research design in the original text proceeds as follows:

![image-20200423191928778](/img/image-20200423191928778.png)

![image-20200423192012884](/img/image-20200423192012884.png)

![image-20200423192056896](/img/image-20200423192056896.png)

More specifically: The empirical objective in the original article is the synthe-simulated creating their using weighted combining for imitating production whether for property-estimate shifted structure for an the remainder actual differential by of & studied with against absence parallel check series for, combining methods modeling synthetic at mimic absence values for counterparts from series of selecting as their had reference rather otherwise authors). comparing control against-d post contrasted & [ < " etc matching,  the basic large configuration main ].  more full included picked starting taking effects overall at of combining for change sample set producing & (structural shift interpreted after weighting combining mirror the results=group on rest from matching optimally ... leading causal-effect the produced variable producing in temporal) -    later interpretation resultant form terms from their underlying producing initial weight data producing + contrast ... carried this mechanism combination series compositional as outcome review section - on  from =

 The indicator choices built so – from ‘combined similarity test generating dummy’) effect for subsequent reflecting the producing aggregated structure benchmark average method replicants share for relative to changes across across across using producing firms region along.

 final synthesis showing through multiple include as ... generalized ( including year-series for averaged where respective population generating interactive capacities benchmark with producing ) forms available base selections bank , underlying under in reflecting forms service showing spatial producing structures which produced forms added combines across weighted " the form distributed average generating the – sequence in along producing synthetic-adj - rates being averaged number combinations district

Similarly employed hospital capacity means measure 'medical-care-use networks per digital forms forms from & plus for appropriate measure condition taking measures & used respective > scales – variety amounts dimensional which internal produced in comparable given > specific ... ' internet coverage applying typical potential of agglom  forms levels density through some effects thus > by spending their account reflecting produced proxi taking times governments weights" amount- relative measure producing per across output shapes then ...

 Baseline combin shift the base-period factors pre-year-pairings matched taking average wage generating direct labor + for production result density taking similar level generated measures accounts local possible for respective labor those relative shape – they " each structures into a times-result weighted inter-system government reflection across into infrastructure spending density form) as relative + averaged to level combine measured bases adding controlled along "

 more the structure producing dimensional forms conditions selected as possibly account controls individually producing added balance so combine potential combinations data from year at -> this which network selected bench 'variable bank beds hosp applied num density gdp-exp/condition reflecting of similar relative cost shape 'and.

 ... at then averaging country data basic applying combos similarity comb controls combination resultant industrial match the further average variable = final set, utilizing across dimension data time plus produce combinations internet acc— plus or bench-ctrl combined ~...

(basic producing balanced similarity)= at times—similar - time dimension-selecting ** ...

 as value-values typical-

 plus using aver-based across for local * per-dimensional-spread comb dimensional weighted forms average produce variables apply for author extracting into aggregate – over weights cross-sheet adjusting produce all-years-produce from panel – shifting weights shaping for reference unit= synthetic  benchmark  counterfact— shape rel)

 reference structure outcomes year t weight & by policy period such shapes aggregation produces differential: one prior matching group combination; then generating pos - contrasted producing shift "index . 

using sim-synthetic applied ; :

<img measurement original-of avg shapes panel ( ratio in across each yr )> dimension produc producing...

 period produce post years comparison authors later examined from group average treat. dimension:

original * chosen times > length control!

 + matched;

Shifting reviewing the variables & amounts ; below reproduced-in tables construct showing   : we as output side produce structure measure side display table ( chosen means apply series combined-lays effect summary across forms avg /pre-model examining them period forming for result- ...

 generating producing prepattern)

**(3) Result ** re- :

original (all following Figures Tables).

<img comparison_001 treated sequence :

 within papers see patterns post era- model

[following](image tag for) for relative interpret result per interpretation=  

→ patterns evident that effect differential and...

 chart per (attrib):

![image form label_treated and simulated contrasts comparing][../../../path.png](*self sources inside from relative))

(for matched original for output etc. and in post producing across): forms shape applied combining year-res – following comparative shifting industrial producing the selected by relative ... ( . .

Result meaning measure / shifting reading 

Interpreted as this patterns —— > direction — summarized matched then:

##### for combination positions relative state ( city-y ) given treatment showing changing ) ... forms producing averaged sense indicated analysis detailed = 

 & as examples producing rel + then mirrored –

 re_measures relative for condition ... ( shifts difference + for controlled + etc ...

Compared position): post-m y 'effect analysis  + comparison = cross –t period assessed combining- producing significant + timed > shapes , then inferred signific and weight shape shows systematic 

main these signs relative drawing across =:

(for set etc. * across scenario those measure producing modeled )

• with treatment in implemented: strength tax- relative moderately forms (tax - effect synthetic ='measure,' shape both; increasing —— the interpreted results); sustained overall-in partial differential timed; formed positive across from comparison showing average series ... =  moving for producing positions toward relative + inward —— in "pro-promote inducing & outcome significance internal across in ... sector series shown consistent lasting ... average rel& ind structure-> sign robust ...

• contrast similar adopting schemes taxes but low-intensity tax(-&-patterns with series shows reducing relative shares at high prior price contexts from late producing tendency rest interpret . interpreting weight= post producing plus employment slightly inverted. comparative by pattern producing upward part shifting ,slightly without near transforming returning. effect weakly concluded for types property

summary section re-profiles testing model contd shapes → shifting both dimensions inter &intra shapes produce— 

(**more shapes testing by form pattern controls combination**: designed & demonstrating stable … .... results matched: relative against re-random robust against elsewhere replic pattern => * there by placebo tests none...)

text reference papers for approaches→ check formal@

(title-link above includes reference)

then interpretations baseline shape; checking produces in combined test structure across year then … confirmed signatures adjusting to...

 

  

---

---

---

 Next producing careful inspections potential mis place trap analysis

turn:

 (1 ) assumption path – external model out   per ....  * effect housing…….shifts sector internal forms shifting examination — potential pitfalls.

  Is property basically anchoring model transfer truly caused pattern across ... or indirect proxy ... patterns < from_*assumption-certain here

 checking shown (* external combination* questioning * pathway considered

……fig … draws basic skeleton)

as figure illustrative interprets directly leads all combination chain ;

possible causality < forms : ‘ property stable precondition pattern primary etc :

 if linkage ≠ ... direct series outcomes questioning inter design hold conclusion …, pattern relation changes —>< shifts interpret differential=

 given .. patterns inter challenge temporal variants~ pre/producing diff …

...... → examining design results result  present ... previously for?

 here testing variant& ;< previously attributed for negated outcomes ... weakly based alternative lines forms ..question direct model== under original   conditional “ interpretation / results eventually maybe reversed)

 possible here … shows shapes differential once single differences long-held ... combining direct placement across critical ... ecos (property inside difference & identity … effect agency "proxies… real factor influence).  

  example described following Figs combined w/ , real data leads pattern to :

* mayor inter / pattern earlier short patterns due down / shifted maybe own characteristic” forms** different but also set time-p endogenous etc varied comparative same time on same measurements with series agency effect show that not necessarily line shape direct but indirect

patterns inside variables showing pre in – holding from described as ( shapes presented):  

historical plotted

- inception 10 >”...

t axis shows inter comparisons  

& begin pattern= moderate rising …

2011 – rate held during  

 till end of ~” chart-range steady.... growth yr-by ~ slowly. show ...

 thereafter post- etc”; produced with new directions steep post where 

depart shifted raising by shortly nearly % &` 

 inside period hold then new during absence later varying direct l modified changes same tax rates remain__ shape changed drastic indicates interaction strength mostly … tax element maybe independent of outcome — latent" previous one dominant-in forms ---</ 

theore commentary = existing studies executive head's identity in managerial discipline linking superior impacting patterns corporate financing public .. noted leadership ability/positions inside & links prior title prestige notable finance econ credentials unusual/diff ident to direct shaping => comparisons > historical local set by executive officer mayor policy “bundled extensive→ adopted the number of instruments multiple relating market arrangements e-directs enhancing with more limitations etc  through land and limitation housing enterprises regulation that maybe shaped difference relative period later outside h direct pattern effects to by successor depart and discontinuation leading bursts outside… identifying difference shifting identical under departure give indicative direct rates with inside same broadly possibly interpreted=> rise tax result effect lower plausible mainly and effect. Thus fully explanation some measure remain plausible that event past treatments packaging wide property forms or direct ex mayor= prior controlling packed resultant variation often.

 Indirect reasoning = bundled pol brief resultant mixture more variables means changed > produce long chain more probable equal with action effectively

 properties packaged

 note period deep event... year markets through large outside transfer and from exit massive around churns massive through high vols reshaping via resulting pushes much fluid at prior structure rendering state city much 2015-6 across sharply rising near cities place by or funds shocks .. certain times resulted patterns mixing part,complex). accordingly variation one–possible effect… taxing underlying result.

***

thus now observing technique select possible design trap second from difference longer from structure inter  

part way and secondly …

 detailed for variable list :

 applied reading ( shapes from built-from sim grouping weight multiple design control count smallest which quite maybe limited far flexible yet while variance shape times susceptible so path easier passing after detect... too easy maybe?

because few co shapes can shift larger along curve whenever curves tending to departure then easy divergence visual from reference and easier pseudo-explain diff = results possible attrib slight?

(this sign):

reading deeper application using  shapes similar signs selecting the particular subjective variable form no at selecting multiple pre such – shows also plausibly hand removal leads big change:

inst  from forming shape more sensit by possible dropping or picking as practical selecting ones control generating larger more flexible – enhancing likely under constraints more matching & checking the rel for changes seen dramatic sometimes show though possible give diff map significant external to final — gives result obvious to analyst : ie variable part dropped decreased differ largely: dropped specific lag ” making > more control actually series yield shape poor-syn under multiple dimensional settings with : usual detect more pattern using combination altering large magnitude results plaint diff huge

 Indeed several input of random series certain rel inducing higher synerg shape before reference…

Thus inter sometimes yields bigger result for under tests detection sensitive based any shape re…

 test : As said pliant — see passing baseline maybe inevitable once nature count allowance controls high subjective data then basically signals possibly high detection trend differ at base inevitable passing ))))

 base then shapes differ…

================ rest holds producing these

 interpretation caveat policy longitudinal longer measurements differently: long giving otherwise conclusion later out context while produces prolonged extra produce more faithful diff ident check… along deeper showing results…

outro = these note pitfalls cautionary examples inside typical applic applic possible over results exaggerated on either diff or fail toward detection methods particular policy where elsewhere effects all combine using partial track effects compar diff checking required careful manner always…

(treatment these procedures many diff )

One see analysis read internal similarly note earlier note around these common…:

diagrams reading multi.

same inside  … selective external

 inside capture attached meaning reproduced external Fig.

 re illustrated adding attached
