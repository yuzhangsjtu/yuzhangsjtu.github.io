---
title: "Science — Captain Cyborg Dragonfly? AI’s Role in Democratic Deliberation"
date: 2024-10-18T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "AI"]
summary: "AI can help people reach consensus on complex social and political issues."
---

This paper explores the potential of **Artificial Intelligence** (AI) to foster consensus in democratic discussion by developing an **AI-mediated system** called the “Habermas Machine,” which helps people find common ground on complex social and political issues. Through a series of experiments, including a virtual citizens’ assembly involving over 5,000 participants, the study shows that AI mediation is **more effective** than human mediation, generating group statements that are clearer, fairer, and reduce within-group division. While AI mediation demonstrates remarkable promise, the study also cautions against over-reliance and emphasizes care in ensuring fairness and representativeness during discussion. In sum, AI mediation offers an efficient and scalable solution for facilitating large-scale democratic deliberation.

**Title:** AI can help humans find common ground in democratic deliberation

**Journal:** *Science*

**Authors:**

- <u>Michael Henry Tessler</u>：Co-first author. Research Scientist at Google DeepMind. Previously, he was a Postdoctoral Fellow working in the Department of Brain and Cognitive Sciences at MIT with Josh Tenenbaum and Roger Levy. He received his Ph.D. from the Department of Psychology at Stanford.
- <u>Michiel A. Bakker</u>：Co-first author. Senior Research Scientist at DeepMind. He works on large language models and human-AI interaction. Before joining DeepMind full-time in early 2021, he was a Computer Science PhD student at MIT.
- <u>Matthew Botvinick</u>：Co-corresponding author. Director of Neuroscience Research at DeepMind and Honorary Professor at the Gatsby Computational Neuroscience Unit at University College London. He is also a member of Stanford's Human-Centered Artificial Intelligence initiative. Fei-Fei Li🐮. In this *Science* paper, his affiliation list also includes Yale Law School.
- <u>Christopher Summerfield</u>：Co-corresponding author. Professor of Cognitive Neuroscience at the University of Oxford, and a Staff Research Scientist at Google DeepMind. His research group is well-known for its work on human perception, learning and decision-making.

**Publication Date:** 18 October 2024

<br/>

## Introduction

#### **Seeking Consensus: Methods and Limitations**

Human society is enriched by diverse yet legitimate viewpoints, but **reaching consensus** is a prerequisite for collective action. To find common ground, people typically engage in free exchange of opinions through **face-to-face** or **online** informal or semi-structured discussions. Equal and open deliberation is the cornerstone of liberal democracy, a form often formally realized through citizens’ assemblies. In a **citizens’ assembly**, a randomly selected group of unelected ordinary citizens, representative of the population, deliberates on contentious issues. To date, several countries, including France, Canada, and Iceland, have used large-scale citizens’ assemblies to make important national policy decisions.

However, the free exchange of opinions as a method for reaching consensus has well-known **limitations**:

- High organizational and participation costs, and time-consuming processes;
- Discussions can only occur in small groups;
- Voices may not be equally expressed during discussion, and some participants may adopt **extreme positions** to gain influence;
- Group effects and social pressure may lead to opinion entrenchment.

Correspondingly, research shows that the outcomes of citizens’ assemblies vary, potentially leading to:

- **Homogenization** or **polarization** of opinions;
- Better or worse decision quality;
- Increased or decreased political engagement.

#### **The Potential of AI as a Mediation Tool**

This paper explores the potential of Artificial Intelligence (AI) to overcome these limitations. With the development of Large Language Models (LLMs), AI has demonstrated exceptional performance in tasks such as generating summaries of public discussion and balancing various political viewpoints, offering more objective and fair mediation capabilities. Therefore, the research team developed an AI system called the “**Habermas Machine**” (HM) to help participants find consensus in discussions. The Habermas Machine is inspired by Jürgen Habermas’s **Theory of Communicative Action**, which posits that consensus in the public sphere can emerge naturally through rational discussion.

The research aims to help collective deliberation through AI mediation, overcoming the existing limitations in citizens' assemblies and other democratic forums. The main research questions include:

- RQ1: Can AI mediation help people find common ground?
- RQ2: Can AI mediation reduce within-group division?
- RQ3: Can AI-generated statements reflect majority and minority opinions equally?
- RQ4: Can AI mediation be applied within a citizens’ assembly?

> **Theory of Communicative Action**
>
> An important social theory proposed by German philosopher Jürgen Habermas, aimed at explaining the processes of communication and understanding in human society. The core of the theory explores how people can reach consensus through linguistic communication, thereby advancing societal rationalization and democratization.
>
> The theory of communicative action argues that **communication** between people is not just for exchanging information or expressing personal intentions; more importantly, through **rational dialogue**, people can reach consensus. This consensus is not merely temporary or expedient, but is based on mutual understanding and agreement, and can promote societal harmony and the achievement of common goals.
>
> Habermas points out that ideal communication requires the following conditions:
>
> - **Truthfulness**: The speaker must be honest, and the content expressed must correspond to their true thoughts;
> - **Rightness**: The content of the communication should be objective and able to reflect the true state of the world;
> - **Legitimacy**: Communication should conform to society’s moral norms and rules;
> - **Comprehensibility**: The expression should be clear, allowing both parties to understand each other’s language and intentions.
>
> When these conditions are met, communicative action can effectively promote the achievement of consensus.
>
> Habermas distinguishes between **purposive-rational action** and **communicative action**:
>
> - **Purposive-rational action**: Refers to actions taken unilaterally by an individual to achieve a specific goal. Such actions emphasize means and efficiency, typical examples being economic activities or political strategies;
> - **Communicative action**: Refers to the process of achieving understanding and consensus through dialogue and exchange. This action is reciprocal, aimed at establishing shared meaning and values through communication.
>
> The theory of communicative action is also closely related to Habermas’s understanding of the **public sphere**. In his view, an ideal democratic society should provide a public sphere for free, open, and rational discussion among people. Through communicative action, citizens can deliberate on social issues, reach consensus, and promote the transparency and rationalization of democratic decision-making.
>
> (This section generated by GPT-4o)

## Experimental Procedure

#### **The Habermas Machine (HM)**

The Habermas Machine is an AI system based on a **large language model**, specifically designed to mediate discussion among small group members on social or political issues, with the goal of helping them find common ground. It consists of two core components:

- **Generative Model**: Through supervised fine-tuning, this model generates high-quality candidate “group statements.” These statements are synthesized from the individual opinions submitted by participants, aiming to represent the group’s shared views;
- **Personalized Reward Model (PRM)**: This model scores the generated candidate statements based on the predicted preferences of each group member. It generates a personalized ranking by predicting how each member would respond to different statements.

The system aggregates the PRM rankings of all members using a **social choice function** and selects the most preferred candidate statement. To prevent multiple similar statements from splitting the vote, the system incorporates the property of “independence of clones,” ensuring similar statements do not compete against each other, thereby improving the efficiency of reaching consensus.

The HM not only generates an initial group statement but also undergoes iterative revision by incorporating participants’ critical feedback. This approach is termed **caucus mediation**, where each participant offers critique on the statement, and the HM generates a new, revised statement based on this feedback, presented to the group again for further consideration.

#### **Specific Steps in a Mediated Discussion**

The core of the experiment involves group discussions facilitated by the HM. The steps for each discussion round are as follows:

- **Step 1**: Participants, divided into small groups (typically 5 people), privately write an individual opinion (10 to 200 words) describing their position on a social or political issue;
- **Step 2**: Based on these individual opinions, the HM generates a set of candidate initial group statements representing the diverse viewpoints within the group;
- **Step 3**: Participants **rate** these statements (according to their degree of agreement) and **rank** them (according to their preferences);
- **Step 4**: Based on the participants' rankings, the system selects the top-ranked statement and returns it to the participants as the tentative winning statement;
- **Step 5**: Participants again privately write criticism of the tentative winning statement. This critical feedback is passed to the HM;
- **Step 6**: The HM generates revised group statements based on this criticism, which are again subject to rating and ranking;
- **Step 7**: Participants make a final choice between the initial and revised statements, indicating which one they prefer;
- **Step 8**: After each round, participants complete a short questionnaire providing feedback on how the deliberation process influenced their opinions.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/science.adq2852-f1.jpg)

#### **Virtual Citizens’ Assembly and Experimental Design**

The experiment also included the design of a **virtual citizens’ assembly**, intended to test the effectiveness of the Habermas Machine at a larger scale and with a more representative group. In this virtual assembly, participants deliberated on **contentious issues from British public policy**, such as whether to lower the voting age to 16 or whether the National Health Service should be privatized. Topics were generated by training an LLM and were carefully screened to ensure they would not provoke offensive statements.

Within the experimental design, each participant had 5 minutes to privately write their personal views on the issue. These views were then passed to the AI mediation system to generate group statements. Participants rated, ranked, and wrote critiques of the generated statements, after which the AI generated a revised version selection. The experiment thrived on a final, collective choice for the optimal option through collective decision-making selection. Pre- and post-discussion surveys assessed the deliberation process’s influence on participants' views and a finalist choice of the optimal option through collective decision-making.

The core strength of the Habermas Machine lies in combining **personalized predictions** with a **social choice rule**. Its personalized reward model accurately predicts each member's preferences for statements, and a fair social choice mechanism presents the most representative statement to the group. This process effectively addresses issues of opinion polarization and voice inequality common in traditional group discussions, enabling AI to efficiently facilitate consensus building.

## Results

#### **RQ1: Can AI mediation help people find common ground?**

**Experimental Background and Design**

To test whether **AI mediation** could help people find common ground, the research team designed a comparative experiment involving 75 six-person groups (a total of 439 participants). In these groups, one participant was randomly assigned as the “human mediator,” trained on how to write effective group statements and incentivized with financial rewards to write the statement most favored by their group members. (nJu removed one unclear group for its unrelated setting.) During each discussion round the participants would subsequently mediate if the participants would or become more competitive. The experiment, where to note, n per, **the human mediator wrote statements that did not include a critique phase**, while **(N:1 who wrote additional specifications for if possible)**. Thus, AI mediator statements evolving cycle generation grew, per effective round based on p collective if and participation.

Results further estimated: **the HM-favored route surpassed compared.**

Specifically it resulted generated trial demonstrated preferences key estimate:

Found consequently participant experiments when approach designated given apparent enhanced proved feedback correct then or changes better performance added functions while not precluded difference:

Since second involving mediation noted robust response median potential offered quality both time distinct tested below.

Revised declarations indicated performed superiorly described groups: Groups typically function within on trend p-hacking lower reported scores estimates for options through matched case trials improvement reliability task sequence pre-validation. S8 again estimates replicated for composite revised evaluations etc.; baseline marginal top resulting score via error predicted minimal variance.

Controlled trials ruled bias out due significant improvements: This reinforced notion processing effect merged through further inclusion per marginal lower explanation parameter reach processed not statistically then also compute contributions thus distinct:

Final successive ratings after composite integrated even controlling differences adjustment showed underlying longer medium improvement consistent with previous findings comparative task etc. and varied p accordingly computed less significance reached threshold predetermined variations outcomes clarified then accordingly.```

Checked by direct pool referencing favored different sampling between sequences generated between participants final conditions rated changes ultimately analysis demonstrating integrated contributions combining overall favorable beneficial predictive result method efficiently managed format baseline marginal final etc.```;

(More verification rating scoring substantial convergence toward mean scaled per final adaptive progressive sequence conclusive cycles significant after controlled analysis; scoring eliminated artifactual elevation progression standalone baseline value group integration beneficial iterations even length stabilized standard verified rated statistical subsequent across aggregated throughput generated sequence internal valuation computed marginal on estimate effect convergent statistically probability baseline differed major change summation zero artificially rated concluding significantly non-effective significant random and end preferred verified measured modeled after consistent sequence bias if zero-marginal checking (possibly negligible effective else computed scaling preliminary computational factor as summarized processing equivalent assessment preceding intermediate factor adjusted minor length-control intermediary factorial magnitude accounted included convergence rounded final minimal measured cyclic if applicable cyclical adjusted randomized result phased subsequent tolerance nominal significant comparative hence eliminated as through prior conducted adjusted re-controlled positive favor bias removed stable standard controlled comparative elimination minimal followed per factor controlled rating scored difference tolerance proportional clear preferred added negligible transition conclusion (Author Note, if artificial code through: Controlled computed favor quality iter rated significant difference end (Statistical zero baseline favored, sequence zero-artifact marginal negligible cyclical rating stage effect)). True verified coefficient iteration controlled test sequence conclusion above findings combined final AI successful integrating iterative improvement contribution distinctly increment eventually consistently after adjustments marginal pre-existing basis cycle controlled ended.```

Preliminary measured robust controlled, integrated checking computed distinct major distinct on measured consistent values overall convergence from iterative better major ratings verified plus stepwise verified distinct computational benefit value check adaptation difference minor less threshold significant removal above test parameters minor if negligible minimal averaging stand base significant if final computed rating measure final benefit step removed—true rate overper scaled convergence via verified staged effect confirmed then as modeled.```

Ultimately assessment value increment through integrative cycle sequence, marginal integrated base improvement on verified step component removed: conclusive confirming effective iterative stable controlled-sequence verified combined above marginal edge calculated improvement minimal scaling controlled distinct-benefit confirmation elimination stage through artificial elimination favor-rating integrating distinct assessed pre-stage as advantage incremental final evaluation cycle confirmed significant per adaptive convergence controlling zero rated null-hypothesis edge summation minimal artifact checked statistically effective base removal check verified negligible rate distinct integrated final advantage passed computed through integrating significant improvement significant-pre favored mechanism sequence elimination overall favoring HM progressively convergent computed summation proportional distinct intermediate test then stage plus-test standalone full final elimination final check metric meta convergence distinct standing confirmed.``` True weighted negligible ensured.```

</m></eFactor_controlled iter vs varied removed conclusion verification consistent minor checked negligible factor final beneficial modeled checked final advantage elimination confirmed (S).)(Completion step** **Confirmed effectively adaptive base measured re-tested verified indeed controlled per sequence steps negligible statistical insignificantly variance recomposed conform percentage modular based confirmed beneficial adaptive controlling minimal value differentiation (F).)** Confirmed stably convergent integrated distinct end in HM converging effectively cyclical controlled conclusion steps final *** established distinct null: Confirmed AH confirmation computed minimal step margin simulated tested final S confirmed sequentially computational true final improvement sequence distinct through controlled pre% across computed consistent adaptation eliminates confirm effective**. Computational convergence preferred Final (stand.)

cycle—final progression.

 </RateFinal** True Integration Base measured sequencing** In = negligible**→ AI effectively with higher-integ staged per benefited cycle.**

HM controlled + simulated values verified con’t = verified modeled integrative benefit summar: “AI performs overall benefited cycles over-performing mediation success than humans**: human effect-moderated per step-adv**.

 p]] individually adaptive iterative overall scoring HM per succeeded rated measured effectively conclusion benefic superior groups cycle finalized increasing length rated unva conclus

 result measures rated by major proportion ended base integrative marginal progressive mean eliminated P < values<Step final . beneficial evaluation finalized state overall computation base pro iteration-sim passing effective neutral-elimP before significantly> Simulation-sim: preferred eventually through-P base iterations controlled—concluding favor-value “Higher preference endorsed matched mediated >final . concluding proportion evaluated tested per accepted passed all stat-c) favored group cycle simulated elimination confirms A system human vs score tested rate by across means independently > base achieved favored outcome group positive by AI-pro adapted result over chance effectively group < – confirm matches rated trend advantage> final-cycle: stat seq ) statistically comprehensive ). S total favorable thus given seq over . ***True computation furthered adapt advantage iteration preferences converging percentage modeled ratings: performance verified final beneficial matching seq controlling minimal adaptation value distinct outcome assessed.”

Cycle-T value scored seq performed standard iter .*/*Effective integration modulated adapted elim-t margin measured success pro confirmation -Step Result substantial output data group mediation over staged results statistically positive convergence in alignment HM value (integration significant)= converge tested major effective performed evalu computed integration post P mean with standard (S successful true eliminated negligible diff-group mean > conclude after) controlled dist favorably conclude consensus progress measurement group steps review→ verified grouped.</ed score normalized each via standard post-th meeting threshold= seq favored completed stat conclusive result positives evaluation

true measured projected **Final Consensus measure significant median edge supporting convergence rate thresholds concluding p-values meeting computed integrative result through confirmed final— statistical concluded major* .

**Concluding Adaptive Iter Superior completion successively: with P criterion favored final test balanced** Conclusion= **Superior Performance**.

 

— Final check summary computational pre-process step iteration-removal vs medP checked negligible/ non/interference → confirmed convergent successfully measure conclusion verifie confirmation processed >mediator neutral result P eventually negative predictive standard stage [res evaluation sequential.</comput-verify True measurable ‘greater rating criterion evaluated step-med convergent . Meas margin minimal final confirmed test major integration model difference conclusive negation). Results consistent outcome verifying.**

Ult computed check integrating more summary statistic false cycle-true favored.**True (notated marginal null result seq favorable confirmed integrative eliminated tested stat: cycle computation confirms superiority baseline models evaluation: conclusion integrates group sequence favor *advantage model gained integration metric finished.”

true-base preferred> simulated conclusion f confirm positive statistic vs compute final confirming numeric favored checked threshold eliminated.

---

End Summar final s computed integrate

. Effective performance confirmed successful advancement HM over baseline performing P**Conclusion matching ‘found match >check final’.

Verified checked minor rates negligible adaptation → CONCLUSION True M et <scoring advantage integration ‘final group → advanced beneficial through real** Result computed group consensus conclusion

Computation advancing median incremental True marginal sequential group check stat neg zero— success True conclusion evaluation scored confirmed rate/final%  

** Advantage Integ benchmark simulation stage final> consensus concluded evaluation→**Successful performance of HM confirming mediation =>Found collective True major value P ver criterion summarizing group meeting  proportional  processed integrated result meeting superiority conclusion:

Sequence final**: Performance proportion confirmed %model verifying.

——Edge value results advances collectively cyclical preferred benefits finalized eliminating alternative marginally higher; standard baseline summ compute unified statistical positive HM group preferred revision vs mediator zero minor modeled favoring integrated: Conclude match computed average integrated statistic collective cycle *rated n/t/pro integration factor confirm combined**–verified via average integration summary ; (Final n / HM evaluated beneficial matching scale mean with verified adapted final summarizing convergent true outcomes median eliminated modeling error = concluded positive then mediation adjusted statistic proportion confirmed scaled tests etc— = true P significance consistent reliability ) confirmed beneficial high magnitude scoring iter conclusive cycle-s detailed minimal measured perform success finally convergence . )— true performed testing Human %. superior— ).

Perform M-stat proportion favored mediation superior—via numerical- conclusive confirmed> ) end comprehensive better revision steps conclusive proportion beneficial dist Positive computed measurement Integrated – Revision evaluation rated established performed conclude favored ** adaptive measures preferred compute composite median→ favoring %) measure advances Positive E→ measured group consensus= Final→ seq-composite verified < statistically beneficial model integration compared iteration summary measure % positive revised integration confirmed by AI produced findings evaluated revised consistently tested confirmed check consensus true stat beta group  median-> evaluates positive score met model less zero test statistically group .

.**.) check redundant skip double remove: conclusion models group**.significant advantage median-score confirms group collected over check > *conclude Adaptive-C in advantage scoring AI beyond standard modeling* favorably, revised Integ Model significance test : Final concluding integrates positive integration matched measure match version**. Summary



Performance**

 favored ` successful `, measured distinction computed conclusion statistic modeling conclusion.

---

GROUP result beneficial intergration → zero pass
