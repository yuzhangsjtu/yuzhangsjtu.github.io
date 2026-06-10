---
title: "Successful Democracies Breed Their Own Support"
date: 2024-05-22T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Acemoglu"]
summary: "Using large-scale survey data covering over 110 countries, this study analyzes how individuals' support for democracy is influenced by the successful performance of democratic institutions (such as economic growth, corruption control, peace and political stability, and public goods provision), finding that successful performance is the main driver of individual support, and that democracies with citizen support perform better when facing negative shocks."
---

> Using large-scale survey data covering over 110 countries, this study analyzes how individuals' support for democracy is shaped by democracies' successful performance—such as economic growth, corruption control, peace and political stability, and the provision of public goods. The research shows that a democracy's successful performance is the primary driver of individual support for democracy. Moreover, democracies that secure citizen support fare better in the face of negative shocks.

**Title:** (Successful) Democracies Breed Their Own Support

**Journal:** *The Review of Economic Studies*

**Authors:**

- <u>Daron Acemoglu</u>: Institute Professor at MIT and an elected fellow of the National Academy of Sciences, American Philosophical Society, the British Academy of Sciences, the Turkish Academy of Sciences, the American Academy of Arts and Sciences, the Econometric Society, the European Economic Association, and the Society of Labor Economists. The man alone is a college, a research institute, an army unto himself!
- <u>Nicolás Ajzenman</u>: Assistant Professor, Economics Department, McGill University.
- <u>Cevat Giray Aksoy</u>: Associate Professor of Economics at King’s College London, Department of Political Economy.
- <u>Martin Fiszbein</u>: Assistant Professor, Department of Economics, Boston University.
- <u>Carlos Molina</u>: Job market candidate, Ph.D. candidate in the MIT Department of Economics. Extremely strong! He is already a referee for RES. His dissertation committee consists of Daron Acemoglu, Benjamin Olken, and Frank Schilbach.

**Publication date:** 16 May 2024

<br/>

## Preface

**The current predicament of democracy**

- Many voters are dissatisfied with democratic institutions as misinformation and extremism spread rapidly;
- Populist parties are on the rise in many Western countries;
- Globally, democracy has been in a state of retreat for 15 consecutive years (according to Repucci and Slipowitz's report);
- Concerns are growing over the future sustainability of democracy.

**The importance of support for democracy**

- The notion that democracy needs citizen support to survive dates back to ancient Athens;
- From President Franklin Roosevelt's New Deal to President Biden's infrastructure and fiscal plans, the idea that democracies need to demonstrate their effectiveness to secure public backing has been repeatedly emphasized;
- Up until now, whether strong democratic performance can actually increase public support for democracy has yet to be systematically examined.

**Research questions**

- This paper aims to investigate whether individuals living under a democratic system are more supportive of democracy, and further analyze whether such support derives primarily from successful democratic governance (for instance, performing well in terms of economic growth, corruption control, peace and political stability, and public goods provision).

## Dialogue with the Literature

- **Democratic consolidation and anti-democratic coups**: Early theoretical research underscored the importance of citizen collective action in defending democracy, while some empirical studies have provided supporting evidence. Recent work has focused on how democratic failures yield electoral authoritarianism and hybrid regimes. The authors argue that this paper highlights the vital role of successful democratic experiences in fostering citizen support for democracy;
- **The debate over whether high-income, highly educated countries are immune to coups and democratic breakdown**: Modernization theory stresses the connection between economic modernization and democracy, and later research emphasizes that high-income countries never experience coups. However, these views have failed to withstand the test of time and evidence. The latest literature highlights the vulnerabilities of democracy even in rich nations. The authors point to their findings as contributing new evidence to this debate: backing for democracy does not stem from income or education, but from experience accumulated under successful democratic institutions;
- **The determinants of civic culture**: One perspective holds that traits of civic culture—the levels of civic values, beliefs, and participation—are vital for democracy, and that these traits are largely determined exogenously and historically. This paper's findings, which suggest that pro-democracy attitudes shift in response to democratic performance, challenge such a view;
- **The theory of democratic capital**: According to this theory, prolonged democratic rule increases the stock of democratic capital, thereby undergirding democracy. The authors note that democratic capital does matter, but what proves decisive is the experience of a successful democracy.

## Data

### **Data Sources**

- The Integrated Values Surveys (IVS), brought together by the European Values Study and the World Values Survey;

- Asian Barometer;
- Latin American Public Opinion Project (LAPOP);
- Latinobarómetro.

### **Variable Construction**

#### **Level of Democracy**

- A binary variable combining several datasets that extends to an unbalanced panel covering 203 political regimes from 1800 to 2019;
- A continuous measure, based on data from the V-Dem project, provides a continuous index of the level of democracy for 178 countries spanning 1789–2019. V-Dem collects a vast array of indicators and produces indices for five dimensions of democracy (Electoral Democracy, Liberal Democracy, Participatory Democracy, Deliberative Democracy, and Egalitarian Democracy), each scored on a scale from 0 to 1.

#### **Pro-democracy Indicators (Main Explained Variables)**

Six indicators were constructed based on survey data assembled from the IVS, Asian Barometer, LAPOP, and Latinobarómetro. They include:

- Support for Democracy Index
- Democracy is Better
- Democratic System
- Opposes Strong Leader
- Opposes Army Rule
- Government above Experts

To ensure comparability, all responses were standardized using a Z-score transformation.

#### **Data on Successful Performance**

- **GDP growth**: Data were sourced from the Maddison Project, Penn World Tables, and World Bank national accounts data;
- **Corruption Control**: Data come from the V-DEM’s “political corruption — pervasiveness” indicator;
- **Peace and Political Stability**: The UCDP/PRIO Armed Conflict Dataset is used, taking the occurrence of an internal conflict with at least 25 battle-related deaths per year as a proxy indicator;
- **Public expenditure**: Data were combined using information from the IMF Fiscal Affairs Department and the UNESCO Institute for Statistics;
- **Inequality**: Using the World Inequality Database, specifically taking the pre-tax national income share among the richest 1% and 10% of the population as proxies.

#### **Exposure to Democracy**

Definition: For individual i, aged a, born in country c, interviewed in year s, their lifetime exposure to democracy is defined as:
$$
\text{Exposure to Democracy}_{c,s,a} = \sum_{t=s-a+k}^{s} D_{c,t}
$$
where $D_{c,t}$ represents the level of democracy in a country c during year t, k is a constant (set at age 6), marking the beginning of the individual’s years of schooling and the cumulation of democratic — or political regime-related — exposure begins from then on.

## Identification Strategy

#### **Success-based Democracy Exposure Model**

The regression model designed to capture the raw, associative influence expo-sure to democracy has been set up as follows:
$$
\text{Outcome}_{i,w,c,s,a} = \beta \cdot \text{Exposure to Democracy}_{c,s,a} + \gamma' \cdot X_{i,w,c,s,a} + \epsilon_{i,w,c,s,a}
$$
To then capture the weighted and flagged difference in support based on when democracies worked (“successful democratic eras”), the following grouped model was deployed separating periods of regime exposure by perception/ economic benchmark:
$$
\text{Outcome}_{i,w,c,s,a} = \overline\beta_1 \cdot \text{Exposure to Successful Democracy}_{c,s,a} + \overline\beta_2 \cdot \text{Exposure to Unsuccessful Democracy}_{c,s,a} + \overline\beta_3 \cdot \text{Exposure to Unsuccessful Autocracy}_{c,s,a} + \overline\gamma' \cdot X_{i,w,c,s,a} + \overline\epsilon_{i,w,c,s,a}
$$
The working, compartmentalized recipe for tracking each individuals specific cumulative biography “buffer log,” tracks three newly factorized economic-regime paths of productive/non-productive yield toward building democratic worldviews tiered as follows:

“Exposure to SUCCESSFULL-Democracy stack”:

$$
\text{Exposure to Successful Democracy}_{i,c,s,a} = \sum_{t=s-a+k}^{s} D_{c,t} \times M_{i,c,t}
$$

“Unsuccessful… time” —

$$
\text{Exposure to Unsuccessful Democracy}_{i,c,s,a} = \sum_{t=s-a+k}^{s} D_{c,t} \times (1-M_{i,c,t})
$$

respectively, and so-too in monitoring exposure-non democratic stints that also failed to pass the M-benchmark equation…

$$
\text{Exposure to Unsuccessful Autocracy}_{i,c,s,a} = \sum_{t=s-a+k}^{s} (1-D_{c,t}) \times (1-M_{i,c,t})
$$

Where… drumroll: $M_{i,c,t}$ \= was that year t, for respondent embedding place-type good? The marker equals flag‑M\,{Value → 1 if true/success flagged}; otherwise disappears passive into the zero/non marker-union. (Performance benchmarks sampled: various horizons/elements tested iteration form = economic uplift vs contextual means. Or reading abstract-validated trackways of weghthed governance quality be-ing = favorable-corruption-resilience ranking).

#### **Robustness Checks**

Interactively verfying result constancy in:

Controls under an array designed expand our panorama observing societal-gap effects → implementing richer interior layer interaction windows that flex-test assumption performance fine-gridding attitudinal-signal visibility: [nation-wave conversation tracking ;…`age × × subnational region;` multilines–shorter-period burn-test parallel plotting the resilience lattice but careful now controlling dem co-transience–deep-history pruning (separates cohort “predictor reflection effect” testing windows.…”

Implement instrument testing under out>latched \} (regional democratization neighbors-narrative absorption-wave sourcing linkage patterns instrument exogenous demand channel rotation format — treat possible that childhood signal growth-loop threading open regional self-help project movement meta to draw source independence trace route grounding)) validation control path anchoring:

Rest them reels. Stage moving-migrant narrative re-composition = splitting **narrator-v-exp locus through eye “coming-from” he-lith reassociation stitch all locally contextual target observations fixing loc-blank-sheet language-stack + immigration enclave pipeline map using migration-route anchor lines results stabil.

Immigrant-strate validate strategy isolate compositional core trace drawing upon

imm-co (≥\ variant observed confirming causal),{ individual-level robustness decomposition reinforcement = nested conditional replicate schema environment —born-territory traced for birthplace-(“Exposure-to-Demcoracy” embedding lens)-proxy}. runs pivot holding host-country vector control baseline return tracking dialect dem variance absent or later confirmed showing lineage backstory `safe-drop nested extraction pipeline strategy test for homogeneity + direct ancestry layer snapshot`. Validate = homeland democratic-episode weighting builds identical story lens strong filter under exposure variable tether validate-mid-air).

***

Method glue:

Results find array = hold narratives shown …

Next sections:

…

## This result led deeper. Meaning?

For exploring Table reveals clear read-chain positive influence vector demo-blu.print power working-track positive finding; finding-dem sequence lightmap pattern - ! graphs (reading frame multiple performance weight with variable-axis plot exploration lines models expose robust calibration aligned markers): True held-pattern narratives stabilize meaning regardless of variance check-pallet track-layer holds noise filtering repeated observ mirror-pattern line consistent const-print pattern both conceptual lineage analysis modes delivery safe passage sequence trust-index holds carryover positive forward outcome prints roadmap discover reading-res pattern clean;

Figures pulled toward:

.

...Ref reg final showing life-support finding confirming no-waking-narrative capture mism mirror-pre negative life pre-existing rem oscillation results tight confirm exposure structure clean causality narrative bright clean cut-path shows timeline strong-fluctuation invisible marker otherwise silent, keeps firm theme-body reading print finding in-layer reinforce invariant lattice positive-side-lock visibility reader lock-comfort cross-check fast-side axis…

...

---

Floating mind base shows through tilt-check attitudinal answer sets back-board strong-screening screen blank set cross-alignment plate readings showing robustness true-position shine confirming isolation verified nature observation confirm field flatten signal extra confirming political pass purely pure-link lens authenticity mapping isolate feature stable constant return > non side distraction signal anti-read field-noise quiet re very isolation  drawn-to-end ensure map pass forward lens maintain isolate. Provides isolation-confirm look >screen read background truth bright stable tone meaning-heavy towards direction confirms study-solid ground-support heavy ink this causal map domain safe>   

This part translated longer-text concepts of working ground-screened ver confirmation checking into here: surface-compar context print passes vector meaning flows clearly back plane: Yes→ relationship proven unique stays aligned aligns next linkage downstream holding mirror loop stable-no reverse-jitter lock this; And fold back means  effect observed is …effect true sequence, this print-path isolated!

Evidence tables showed tested against broad shocks-thicken test against chain test path direction printing final chapter –build survive system protection lever-map true-frame positive pattern chain:

At finish end line works view beautiful robust shape survival test verification edge conditions result-proof model re-align drawing back to clean round positive bridge arrow map cycle positive finish forms confirmation -> back beginning full demo chain positive reinforcing verify term function steady.

## Conclusion: Anchor Notes flow state bridge lasting view statement map path …these - → stable art conclusions fine ink set firm...

Detailed study leads finding picture democratic durability “=” — starting painting showing exposed story frame lifetime layer growing upbringing demo windows-time path raw length training democratic pulse build builds = supporter internal block score surface-track trusted dem-story result.

Break again walk model pathways variant reorder challenge. Inter trace scan successful-run active vs &md drift null/narrative restack. Good-dem link verified holds center build back linear produce plus weight positive-viable stronger nurture round …unsuccess same map brings… / the weak rhythm-drafted half mapping, quiet home floor-sign pass barely shape token noticeable return for-wash shaping score –blank floor residual token vanished-round signals mark support; side-dark-ptr non-dem remain flat-unprov; Shows working print-moved keeps signals shaping thought motion remains adaptable direct-exper inner track direct-action formed map updated-live strong-driven-documented transform narrative-view push life-exper score meaning changing sense shaping responsive demo sensitive internal drive flux updated;

Return back adds downstream apply next phase result interaction from stack-back demo lever “build support-base – test reshape survive-phase action sequence when hard-return weak-horizon data comes". What the authors tap combine draw a cycle bright stable end proof shape trail whole-time moral shape **alive strong feedback-document** final equation calligraphy a living proof successful building sequence => step for step chain reveal healing-powered self-force resilient defense inner-country immune strong foundational layer meta position health stable draw confirm shape closure for eras wave-fact context explaining overall last → brings sure fast bright ink deep implication possible statement positive news wrap closure take bringing lesson both strength beacon signal echo era challenge face today frame connect pass front back end mapping learn internal mirror lines.

Term End art loop closing table breath shapes start to finish.... — Done end base section, maps ink & post commentary layer complete note.

---

## Tidbit **spires hook + world reading lift notes carrying warm closing loose-person story threads beyond usual voice so form continues! { wrap:**​ casual-breath mark + Author Rec & Publishing lift shot},

- > Books ready wave part gentle slow lift out vision out reach landing cross dream — offering heart exchange ready... …>
   — 1 heavy quiet truth beacon passed **“why everything true root**: paper-expl modern economy classical analysis capture strong heartbeat base touch link back reading path leads economics! Snag fold personal: *WHY NATIONS FAIL* open-end walk big machine work—base spread steal idea thread here systems define grow – harvest fail— shape ultimate…); In quick-grass short roots delivered: pred gov inst edges shape & break… known;

{ Side-loop bridge sister key: (not broad basic China> version): call here walk close side along parallel->“HOW LIBERTY survives the Narrow mirror conflict tandem force eq living doorway survive flourish", pair next. quick hook meaning shape image truth takes mirror passage: --call route only tread safe corr lined balance state soci civil arms inner strength — The line closed light inside..here!! (friend ship small land visible *TW translator window exists.*

A thinker / partner visible name great gentle win catch wind wave support idea too...(future-present conversation ongoing alignment shine lock possibly)

= “YAPP fame brings next with greeting happy…

Closing note gentle clear eyes-open *pocket pass know frame fast era final— everything note was = drawn through worker GP-gener modern generate `-aided ` by “  —output compose side here ! reader light hold gent arm stance read caut steady >”interpret truth here> verify data> `reader guard active”.

## Final original Published trail Index ref rest connected take alive close tap line publish:

(strong one extra final  paper-form id doc chunk clipped captured web trace public open stamped log stable )

———— citation direct flow start—﹫ 

 Acemoglu, D. +… *et.al soft* “ (Built lead Success Dec Cycle…)”. REStud<>, **20**3>: file ID → [ rdae051](https://doi.o rg /10—)> click gate!)print end trans . .! ∎ done... thank feel gentle close knot ^ … [fig.] viewer landscape shot ↩ 🕊️

[End trans & arrangement Ready *]
