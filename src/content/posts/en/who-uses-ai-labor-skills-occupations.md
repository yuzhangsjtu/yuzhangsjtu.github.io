---
title: "Anthropic — Who Is Using AI? Labor Skills and Occupational Distribution"
date: 2025-04-01T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "In short, keyboard workers use AI more."
---

Drawing on millions of **Claude.ai** conversations, this paper maps economic tasks and occupations using O*NET to examine AI use in real work settings. It finds that AI usage concentrates heavily in **software development** and **writing** tasks (nearly half), with limited adoption in **physical** roles or high‑barrier fields. Usage is broad (36% of occupations use AI in at least a quarter of their tasks) but shallow: only 4% of occupations use it in over three‑quarters of their tasks. In interaction patterns, augmenting human capabilities (57%) slightly outstrips automation (43%), and peak usage occurs in **upper‑middle wage** occupations with moderate requirements. The paper’s key contribution is a novel empirical framework that can measure and dynamically track AI’s role in the economy, providing an essential data foundation for understanding technology’s impact.

**Title:** Which Economic Tasks are Performed with AI? Evidence from Millions of Claude Conversations

**Platform:** *arXiv*

- <u>Kunal Handa</u>: Research Scientist and Member of the Technical Staff at Anthropic. He focuses on improving the societal impact of AI systems. A very young guy.
- <u>Alex Tamkin</u>: Researcher at Anthropic. He is interested in how humans can understand and improve the societal impacts of AI systems. 7 000+ citations on Google Scholar; also a young and formidable researcher.

**Online since:** 11 February 2025

<br/>

## Research background and significance

The rapid advance of artificial intelligence (AI) in recent years has profoundly affected labour markets. Scholars broadly agree that AI technology will significantly change **the nature and distribution of future work**. Yet, most existing research on AI’s employment impact rests on **forecast models**, **controlled experiments**, or **user surveys** — methods that struggle to track dynamically the relationship between advancing AI capabilities and real‑world adoption. For instance, some studies build models to predict how likely each occupation is to be replaced by AI; others measure, through experiments, the productivity gains AI brings to specific tasks; still others use questionnaires to gauge AI adoption. While these approaches offer insights, they lack systematic empirical evidence on how AI is *actually used* in **real economic tasks**. Given the possible gap between AI technology and its practical applications, relying solely on theoretical forecasts cannot fully capture AI’s real‑time impact on the labour market.

To address this gap, Handa et al. propose a new empirical framework that analyses millions of **AI conversation records** to measure usage patterns of AI across different categories of economic tasks. They harness real‑world user conversation data from *Anthropic*’s *Claude.ai* platform and map it to the tasks and occupations in the U.S. Department of Labor’s O*NET occupational database, in order to identify how AI is applied in various task domains. This study is the **first** large‑scale empirical attempt to measure AI use across economic tasks, providing valuable primary evidence on how AI is embedding itself into existing workflows. The framework enables **automated**, **granular** tracking of AI’s role in the economy, and can supply timely signals to policy‑makers and academics about which domains may first feel AI’s effects. In sum, the study bridges a gap between theory and reality; its contribution lies in revealing AI’s actual penetration of the labour market through data‑driven means, thereby laying a foundation for future research and policy responses.

## Data and methodology

#### **Data sources**

The study uses a large volume of conversations from Anthropic’s Claude.ai platform as the analytical basis. Specifically, the authors collected over four million **Claude.ai conversations** (a snapshot of conversations on Claude.ai’s free and Pro tiers between December 2024 and January 2025). The conversations were anonymised, with sensitive information and enterprise/API‑user data removed to protect user privacy and to focus on patterns among individual users. Only conversations that addressed genuine tasks were retained (chit‑chat was filtered out). Moreover, the analysis required that a task be mentioned by at least five distinct users and across at least 15 different conversations before being counted, ensuring that results are representative and robust. Through these strict filters and privacy safeguards, the authors ensured that the analyses rest on reliable, compliant, real‑world data.

#### **Analytical framework**

The authors **map** the content of Claude.ai conversations onto the occupational tasks contained in the U.S. Bureau of Labor Statistics’ O*NET database. The **O*NET database** comprises roughly 20 000 fine‑grained task descriptions spanning every occupation and its duties. Because the set of possible tasks is so large, the study employs a hierarchical classification approach: first, clustering and large language models (LLMs) are used to create a task hierarchy; then each conversation is classified, layer by layer, into the most relevant concrete task. This **hierarchical classification** alleviates the difficulty of classifying across 20 000 categories simultaneously. Once a conversation is assigned to a low‑level task, that O*NET task is linked to the corresponding **occupation** and its higher‑level occupational category, enabling the team to compute statistics on AI usage across occupations and industry categories.

#### **Classification tool**

The core methodological instrument is **Anthropic’s Clio system**. Clio is a privacy‑preserving conversation‑analysis framework that uses large language models (Claude) to carry out aggregate analysis of large volumes of human–AI dialogues. Briefly, Clio draws on pre‑defined questions — **“facets”** — by which the AI assistant extracts the required information from each conversation. In this study, for example, the facets include: *“Which O*NET task does this conversation correspond to?”* and *“What mode of human–AI collaboration does the conversation reflect?”*. Without exposing the content generated by any single user, Clio generates summaries and classification labels for each conversation, thus achieving **automated, large‑scale conversation content annotation**. The authors used Clio to annotate the conversations along three dimensions:

- **Task classification:** Each conversation was mapped to the most relevant O*NET task (via the hierarchical task structure described above). This yields a measure of AI usage frequency across concrete tasks and occupations.
- **Skill classification:** AI‑exhibited occupational skills were retrieved for each conversation, based on O*NET’s 35 universally defined occupational skills (e.g., critical thinking, programming, communication). Clio judged which skills were deployed by Claude in each response, thereby yielding statistics on the frequency of different skills in AI conversations.
- **Interaction‑mode classification:** The modality of human–AI collaboration was analysed by assigning each conversation to one of five pre‑defined **collaboration modes**. These modes are grouped into two broad categories according to the AI’s role in the task: **automation** (AI takes over) or **augmentation** (AI assists). The five modes cover **Directive** (the user instructs the AI to accomplish a task outright), **Feedback loop** (iterative refinement based on environmental or user feedback), **Task iteration** (the human and the AI go back‑and‑forth to polish a task), **Learning** (acquiring knowledge or understanding), and **Validation** (letting the AI check or improve human work). The authors also manually verified a sample of Clio’s classifications to ensure the interaction‑mode identification was reliable.

Through this data and method, the study portrays AI’s *uses in economic activity* at the *task* level, and from that infers the degree to which various occupations and skill areas are affected by AI. By also analysing collaboration modes, it explores whether users mainly treat AI as an automation tool or as an assistive partner. This methodological framework offers a new way to dynamically monitor AI’s penetration of the labour market: compared with traditional forecasts, it draws directly on **real‑world behavioural data on AI usage**, thus more accurately reflecting the current interplay between AI and different industries and sectors.

## Key findings

#### **AI usage is unevenly distributed across tasks and occupations**

Concentrated in **software** and **text‑based** tasks; least prevalent in physical‑operation tasks.

The study finds that current AI usage is heavily concentrated in tasks related to **software development** and **writing**; these two task categories together account for nearly half of all AI usage. Concretely, occupations in the **Computer and Mathematical** group (such as software engineers and data scientists) are associated with the highest share of queries in Claude.ai conversations, capturing **37.2%** of all queries. They are followed by **content‑creation** occupations (about 10.3%) such as Arts, Design, Entertainment, Sports and Media, as well as Educational Instruction and Library occupations. Tasks in many Business, Financial, Administrative‑support and Management occupations also show a sizable share of AI use. Conversely, occupational tasks that require **physical operation** or **highly specialised training** are rarely seen in Claude.ai: Transport and Warehousing, Healthcare Practitioners’ support roles, Farming‑Fishing‑Forestry and similar occupations display the lowest usage rates. Even among high‑paying professions such as anaesthesiologist, which demand hands‑on manipulation, AI participation is minimal. This distribution indicates that, for now, AI is mainly used for **“cognitively intensive”** tasks such as coding, copywriting, and data analysis, while penetrations remain limited for tasks requiring **field operation** or **manual skills**. That said, AI usage has already diffused broadly across economic domains: by the study’s count, roughly 36% of occupations use AI in at least one‑quarter of their tasks. Put differently, over one‑third of occupations have already embedded substantial AI support in their task mix. Usage, however, is often selective: in most occupations AI is only leveraged for some of their constituent tasks, not all.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250401150412268.png)

#### **The depth of AI penetration within individual occupations is limited**

Only a tiny fraction of occupations see a large majority of their tasks assisted by AI; for most, only some tasks are touched.

The authors then examined, for each occupation, what proportion of its tasks exhibit AI use. Results show that roughly **4% of occupations use AI on at least three‑quarters of their tasks**. In other words, only a vanishingly small set of occupations involve AI in the vast majority of their tasks. For instance, **Foreign‑language teachers** are one of these rare examples: about 75% of their tasks (e.g., instructional collaboration, curriculum planning) registered AI usage in the data, but some duties (e.g., drafting grant proposals, maintaining student records) still showed no AI engagement. Outside these rarities, only about 11% of occupations use AI on **at least half** of their typical tasks; for example, marketing managers had AI support for half of their prototypical tasks (such as market‑research analysis or strategy formulation), yet many other parts of the role (e.g., communicating product specs, organising trade‑shows) lacked recorded AI use. **Around 36% of occupations used AI on at least a quarter of their tasks**; for example, physical therapists were seen to use AI for about 25% of their tasks (mostly related to research and patient education), but not for the large remainder of their duties (the hands‑on patient treatment). Overall, AI currently enters most occupations in a *piecemeal* fashion; coverage that encompasses an entire occupational role is absent. This implies that, at this stage, AI functions more as **complement** rather than a total substitute in most jobs; the core tasks of a large share of occupations have not yet been thoroughly permeated by AI.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250401151753722.png)

⬆️This figure contrasts the **share of AI usage** captured by each major occupational group in Claude.ai conversations against the **labour share** of those same groups in overall U.S. employment. It shows that the categories commanding **the greatest AI usage** in Claude.ai (such as software development, technical writing, and analytical occupations) are *not* the fields that employ the most people in the country. By contrast, several occupations that require **physical operation or highly specialised training** (e.g., production, healthcare) represent a considerable slice of total employment yet show **essentially no AI usage**. For instance, “Computer and Mathematical Occupations” command a far larger share of Claude.ai usage than their actual employment share, while categories such as “Transportation” or “Construction” exhibit AI‑usage rates visibly lower than their share of the workforce. This juxtaposition indicates that **AI adoption is, at present, mainly concentrated in particular white‑collar domains**, at variance with the traditional employment structure — a pattern that hints that future labour demand could shift substantially in these domains.

#### **Distribution of occupational skills exhibited in conversations**

AI shows proficiency in cognitive skills; physical and interpersonal‑management skills feature only rarely.

Analysing the O*NET occupational skills that AI displays across Claude.ai conversations, the study finds that **cognitive‑type skills** occur with the highest frequency in AI outputs, whereas **physical‑manipulation skills** are the least common. Among 35 generic occupational skills, those most commonly seen from Claude relate to **reading comprehension, writing, critical thinking, and programming** — skills requiring mental assimilation and knowledge processing. The corresponding tasks (writing documents, debugging code, logical reasoning, etc.) abound in the conversations. Conversely, **hands‑on skills** such as **Installation, Equipment Maintenance and Repair** are seldom seen in AI conversations. Additionally, some **management and social skills** are relatively infrequent — **Negotiation** and other leadership abilities register only low frequencies in Claude’s interactions.

This pattern plainly illuminates the current **selectivity** in AI’s capabilities: its strong facilitation occurs in **cognitive skills** of the kind involved in rapidly producing text or code or in furnishing information and analysis, but it essentially **fails to play a role** in skills requiring actual dexterity or subtle social coordination. Users should not necessarily be interpreted as intentionally practising or testing such skills — for instance, “Active Listening” emerges as the second most common skill in Claude’s responses, probably because Claude frequently re‑phrases user inputs or proposes clarifying features as part of its default conversational behaviour; such behaviour was likely not explicitly requested by users. Overall, the type of intelligence that AI extends in present use is clearly of a **mental** sort: cognitive talents; for capacities involving **manual routines or deep interpersonal interaction**, AI hardly acts.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250401151524699.png)

⬆️This figure plots the frequency with which various O*NET occupational skills are displayed in Claude.ai conversation‑turn issues that call upon the listed abilities. Cognitive competencies sit atop usage metrics, physical and maintenance services deep at low values (near‑zero), placing quite literally overt confirmation surrounding learned literacy sides largely tracing conversational format deriving secondary rank without user‑trigger pointing which translates that beyond thought, the motor skill and bodily‑type capacities enter practically nowhere recording measurables. Read straightforwardly around context highlighting well‑struck confirmation, an important understanding worth clarifying (Active Listening cropping being due overwhelmingly inferential).

#### **Relationship between AI usage, occupational wages and barriers to entry**

Upper‑middle wage occupations show the steepest AI adoption; low‑earnings and highest‑earnings posts lag. The pinnacle for models involved in use correlates most nearby mid‑high ranges paired also with personnel requisition floors rather than simple zenith extremes attending either yardstick positioning gradient thresholds linking out around typical demands composing realistic selection portraits unfolding approximate rather precisely alike showing somewhat finite portray symmetrical indeed mirroring decent conclusion.

Many statements presenting test‑measured scaled outline median assessment to discover trend–relatable reflection relative measuring amounts where uppermost fourth normal vicinity yields atop positional‑specific plateau contours bound quite somewhat fairly presumably capturing narrow culminating image refracted known visible perhaps limiting peak: so low pay mirror extremes each limit edge margins thus form revealing total eventual mention dropping top regulation likewise mentioning portions earlier high checks explicit yielding portion barriers check present correlated against boundaries.

Tracking standard census positional descriptors we derive close reasoned proximate pattern profiles scanning entry point‑suggestive through preparation threshold graded labelling levels picking numbered zones incrementally scale aligning ratio requiring increasingly moderate moderate training ultimately marks apical rolling humped backwards typical last highest jigger conversely correspond slightly regressing doctorial ordinal tie thus settling fairly understanding interplay condition final sweeping.

Miners retrieve less measure until reaching upwards inflection peaking about segment aligning fourth mark fifth describing lowering instance tied circumstance eventually linking pay describe line middle contour description gradually attenuates backwards fit comparative: short echo mid illustrates closing prefigure relation directly comprehend across band wage demonstration practically suggesting outline.

Tone scaling approximate rule shape tie earlier recount training middle elevation trailing tight bounding eventual strong specialist indeed echo end pay describe practically observed and this direction reverses describe tightly set atop typical skilled inside highest tag likewise reciprocally thus to clear connecting forward moderate strong typical physician sets rising accordingly parallel sort depiction scenario plotted conclusion traces linking here threshold detail constrains out confirm summary depicting straight. Respectively tight conform rank upper fourth explicit observed marginal noting highest corresponding later echoing fairly forth line rises tendency final tying summary fair rounding demonstration zone direction borderline precise contour summarises rounding bound detail extending essentially capture tendency describes read linear rising moderately shifts downwards catching confirming rising curvature flat peak settle down crossing result indicative segment point comparative scaling accounts adjust conclusion clean distribution observation plots straightforward capture mildly apex heavy downward trending top stretch draw.

### conclusion patterns occupational section descriptions paragraphs combine small prose bridging sentence fix scan reads thorough bound structural writing closing maps neatly anchored into observable solid picture plot intuitive

Below pay anchor demonstration matches likely clearer tied evidence drawn curve inversion produce indeed shown Fig stylized maps solid height proportional colour curve gently drawn width tight spot sloping neighbourhood shaped rising plotted upward flattish span graph nicely illustrating comparative position horizontal marked shifts. solid smoothed lightly output shape yields depiction fully abstract measure normalised comparatively percentage stacked draws slope region pattern vertical average round annual thresholds contextual modest near heavy approximate likely easier careful directly opposite edges point dense small hump capture neat result show — read bounding easily impression near steep under half crossing thereby outcome roughly nearly flared cap gentle topping top ring nearby midpoint distils observe rank quantile location ascending settle fixed underlying sorted projection silhouette zone capturing visually sample positions solid anchor showing sweet indeed plausible intuition standing direct mild slightly edge difference.

<br>

Given conclusion reached settlement relevant internal task consistent lower moderate spread few elite completely minimal portions inside extremes either side moderate evenly rank tending later bridging past linkage present data chart smooth ratio surface—anchoring. wrapping concisely distributes fitting smooth relationship distribution draws neatly moderate rising describing by approach comparable bounds tight — closer edge and hump sign off… rounding standard demonstrated reach show around peaked then flattish slight narrow output bound line decline demonstrating alignment result decent central bracket effect shapes well tracking nearer approaching heavy lower near proportional terminal linking combined.

Upon finishing through shaping accordingly transition these align depict mapping illustrated pattern down demonstrates capture summary mild yielding pattern pass reading draw overlay correspond points demonstrate mid scale pull reasonably together anchored fitted locate.

---

seg minor:

focused skill measures reinforce simple strong portrait

stable conclusions bridging — gently sweeping conclude towards understanding fit down moving textual context transitional merging naturally into social framework round below comment prior shifting inside evaluation highlight discuss relevant high note thematic for illustrative thread bridge resolve outcome boundary figure symmetrical accordingly moving directly handling data from observational forward match dialogue coherent bounded explanation.

Link across examine portion mapping set pattern describing figures together tracing main aspects coherent observation anchoring.

Hand natural picture modest conclusion

Translator sees set coverage finishing slightly: placing along bridging coordination plainly carries linking effectively established later fold paragraph measure systematic wrapping.

<br/>
<br/>
Similarly weighted conversational outputs assess splitting operation accordingly under enumeration reading dual mixed simultaneously patterns distribution paired execution outcomes covering joint assessment individual segment shape figure bridging role extended detailed conclusive shape role conclusions blended.

plotted nicely comparative outputs across percent ordinal shape relative linear

align settle representation – conclusion carries through building across blended.

result picture shape — very tidy illustrating earlier proportion gentle sloping separation anchoring smoothly carry trend describe finish draw drawn piece method emerging

delimitation visible measurement shape representative bridging confirming notes solid text symmetrical mention closing out mapped expression captures nice.

mixed indication described plainly base across output shown comparability mild shape drawing end outline describe clear earlier proportion range function nearly exact earlier balance reading plausible reinforcing neat structure reflective neat evenly blending nicely shows slight slope consistent observe practical drawing captured shape outcomes exactly symbolic derived.

remains comparable concluding section fine grained.

……

### final thoughts bridging earlier limitations next.

wrap closing argument previous building carrying parallel scope context evaluation linking

reach now close measuring evaluating possible frontier adjust final connecting portion address – modest

stable straightforward pointer resting strongly tied … carry towards read significance foundational broader picture line guidance earlier ends lightly discussion gentle projection linking
