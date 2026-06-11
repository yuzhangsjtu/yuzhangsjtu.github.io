---
title: "Science - Cyber Captain Dragonfly? AI's Role in Democratic Deliberation"
date: 2024-10-18T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "AI"]
summary: "AI can help people reach consensus on complex social and political issues."
---

> This paper explores the potential of **artificial intelligence** (AI) to foster consensus in democratic discussion: by developing an **AI mediation system** called the "Habermas Machine," it helps people reach a common position on complex social and political issues. Through a series of experiments, including a virtual citizens' assembly involving more than 5,000 participants, the study shows that AI mediation is **more effective** than human mediation, producing group statements that are clearer and fairer and reducing disagreement within groups. Although AI mediation shows excellent potential, the study also cautions that care is needed to ensure the fairness and representativeness of discussions. In short, AI mediation offers an efficient and scalable solution for facilitating large-scale democratic discussion.

**Title:** AI can help humans find common ground in democratic deliberation

**Journal:** *Science*

**Authors:**

- <u>Michael Henry Tessler</u>: Co-first author. Research Scientist at Google DeepMind. Previously, he was a Postdoctoral Fellow working in the Department of Brain and Cognitive Sciences at MIT with Josh Tenenbaum and Roger Levy. He received his Ph.D. from the Department of Psychology at Stanford.
- <u>Michiel A. Bakker</u>: Co-first author. Senior Research Scientist at DeepMind. He works on large language models and human-AI interaction. Before joining DeepMind fulltime early 2021, he was a Computer Science PhD student at MIT.
- <u>Matthew Botvinick</u>: Co-corresponding author. Director of Neuroscience Research at DeepMind and Honorary Professor at the Gatsby Computational Neuroscience Unit at University College London. He is also a member of Human-Centered Artificial Intelligence at Stanford University. Fei-Fei Li🐮. In this Science paper, his listed affiliations also include Yale Law School.
- <u>Christopher Summerfield</u>: Co-corresponding author. Professor of Cognitive Neuroscience at the University of Oxford, and a Staff Research Scientist at Google DeepMind. His research group is well-known for its work on human perception, learning and decision-making.

**Publication Date:** 18 October 2024

<br/>

## Introduction

#### **Seeking Consensus: Methods and Limitations**

Human society is enriched by a diversity of legitimate viewpoints, but **reaching consensus** is a precondition for collective action. To find consensus, people usually exchange opinions freely through **face-to-face** or **online** informal or semi-structured discussions. Equal and open discussion is a cornerstone of liberal democracy, and this form is often formally realized through citizens' assemblies. In a **citizens' assembly**, a number of unelected ordinary-citizen representatives are randomly selected to discuss contentious issues. To date, several countries, including France, Canada, and Iceland, have used large citizens' assemblies to make important national policy decisions.

However, as a way of reaching consensus, the free exchange of opinions has well-known **limitations**:

- Organization and participation are costly and time-consuming;
- Discussions can only take place in small groups;
- During discussion, voices may not be heard equally, and some participants may adopt **extreme positions** to increase their influence;
- Group effects and social pressure may cause opinions to become entrenched.

Correspondingly, research shows that the outcomes of citizens' assemblies vary and may lead to:

- **Homogenization** or **polarization** of opinions;
- Better or worse decision quality;
- Increased or decreased political participation.

#### **The Potential of AI as a Mediation Tool**

This paper explores the potential of artificial intelligence (AI) to overcome these limitations. With the development of large language models (LLMs), AI has proven excellent at tasks such as summarizing public discussions and balancing diverse political viewpoints, and can provide a more objective and impartial mediating function. The research team therefore developed an AI system, the "**Habermas Machine**," to help participants find consensus in discussion. The Habermas Machine takes its inspiration from Jürgen Habermas's **theory of communicative action**, which holds that under rational discussion, consensus in the public sphere can form naturally.

The aim of this study is to support collective discussion through AI mediation, addressing the limitations of existing citizens' assemblies and other forms of democratic discussion. The main research questions include:

- RQ1: Can AI mediation help people reach consensus?
- RQ2: Can AI mediation reduce disagreement within groups?
- RQ3: Can AI-generated statements reflect majority and minority opinions equally?
- RQ4: Can AI mediation be applied in citizens' assemblies?

> **Theory of Communicative Action**
>
> An important social theory proposed by the German philosopher Jürgen Habermas, aimed at explaining the processes of communication and understanding in human society. At its core, the theory explores how people reach consensus through linguistic communication, thereby advancing the rationalization and democratization of society.
>
> The theory of communicative action holds that **communication** between people is not merely about exchanging information or expressing personal intentions; more importantly, through **rational dialogue**, people can reach consensus. Such consensus is not merely temporary or expedient; it is grounded in mutual understanding and recognition, and can promote social harmony and the realization of common goals.
>
> Habermas points out that ideal communication requires the following conditions:
>
> - **Truthfulness**: Speakers must be honest, and what they express must accord with their true thoughts;
> - **Correctness**: The content of communication should be objective and able to reflect the true state of the world;
> - **Legitimacy**: The content of communication should conform to society's moral norms and rules;
> - **Comprehensibility**: Expression should be clear, so that both parties can understand each other's language and intentions.
>
> Only when these conditions are met can communicative action effectively promote the achievement of consensus.
>
> Habermas distinguishes between **purposive action** and **communicative action**:
>
> - **Purposive action**: Action taken unilaterally by an individual to achieve a particular goal. Such action emphasizes means and efficiency; typical examples are economic activity and political strategy;
> - **Communicative action**: The process of reaching understanding and consensus through dialogue and exchange. This action is reciprocal, aiming to build shared meaning and values through communication.
>
> The theory of communicative action is also closely tied to Habermas's understanding of the **public sphere**. In his view, an ideal democratic society should provide a public sphere where people can engage in free, open, and rational discussion. Through communicative action, citizens can discuss social issues, reach consensus, and make democratic decision-making more transparent and rational.
>
> (This section was generated by GPT 4o)

## Experimental Procedure

#### **The Habermas Machine (HM)**

The Habermas Machine is an AI system based on a **large language model**, designed specifically to mediate discussions among group members on social or political issues, with the goal of helping them find common ground. It contains two core components:

- **Generative model**: Through supervised fine-tuning, this model can generate high-quality candidate "group statements." These statements are synthesized from the individual opinions provided by participants and are intended to represent the group's shared views;
- **Personalized reward model (PRM)**: This model scores the generated candidate statements according to each group member's expected preferences. By predicting how each member would respond to different statements, it produces personalized rankings.

The system aggregates all members' PRM rankings through a **social choice function** and selects the best candidate statement. To prevent several similar statements from splitting the vote, the system incorporates the property of "independence of clones," ensuring that similar statements do not compete with one another, thereby improving the efficiency of consensus building.

The HM can not only generate an initial group statement but also revise it iteratively by incorporating participants' critiques. This approach is called **caucus mediation**: each participant offers criticism of the statement, and the HM generates a new, revised statement based on these critiques, which is then presented to the group for discussion again.

#### **Specific Steps of a Mediated Discussion**

The core of the experiment is group discussion mediated by the HM. The steps of each discussion round are as follows:

- **Step 1**: Participants are divided into small groups (typically 5 people) and privately write an individual opinion (10 to 200 words) describing their position on a social or political issue;
- **Step 2**: Based on these individual opinions, the HM generates a set of candidate initial group statements representing the group's different viewpoints;
- **Step 3**: Participants **rate** these statements (according to how much they endorse them) and **rank** them (according to their preferences);
- **Step 4**: Based on participants' rankings, the system selects the top-ranked statement and returns it to participants as the provisional winning statement;
- **Step 5**: Participants again privately write critiques of the provisional winning statement, and these critiques are passed to the HM;
- **Step 6**: The HM generates revised group statements based on the critiques, which are again rated and ranked;
- **Step 7**: Participants make a final choice between the initial statement and the revised statement, indicating which one they prefer;
- **Step 8**: After each discussion round, participants fill out a short questionnaire giving feedback on how the discussion process affected their views.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/science.adq2852-f1.jpg)

#### **Virtual Citizens' Assembly and Experimental Design**

The experiments also included the design of a **virtual citizens' assembly**, intended to test the effectiveness of the Habermas Machine in a larger and more representative group. In this virtual citizens' assembly, participants discussed **contentious questions in British public policy**, such as whether the voting age should be lowered to 16 and whether the National Health Service should be privatized. These questions were generated by a trained large language model and were carefully screened to ensure they would not provoke offensive remarks.

In the experimental design, each participant had 5 minutes to privately write their personal views on the question. These opinions were then passed to the AI mediation system, which generated group statements. Participants rated, ranked, and wrote critiques of the generated statements; the AI then generated revised statements, and the best option was ultimately selected through collective decision-making. The experiment also included questionnaires administered before and after, assessing the influence of the discussion process on participants' views.

The core strength of the Habermas Machine lies in its combination of **personalized prediction** and a **social choice rule**. Through the personalized reward model, it can accurately predict each group member's preferences over statements, and through a fair social choice mechanism it presents the most representative statement to the group. This process effectively addresses problems in traditional collective discussion such as divided opinions and unequal voice, enabling AI to facilitate the formation of consensus efficiently.

## Results

#### **RQ1: Can AI mediation help people reach consensus?**

**Experimental Background and Design**

To test whether **AI mediation** can help people find common ground, the research team designed a comparative experiment involving 75 six-person groups (439 participants in total). In each group, one participant was randomly assigned to act as the "human mediator." This mediator received training on how to write effective group statements and was given financial incentives to write the statement most popular with the group members. In each discussion round, participants saw two statements: one generated by the AI (the Habermas Machine, HM) and the other written by the human mediator. Notably, **the statements written by the human mediator did not involve a critique phase**, whereas the AI-generated statements were revised based on participants' feedback.

**Results: AI Outperformed the Human Mediators**

The results showed that participants preferred the AI-generated statement 56% of the time, while statements written by human mediators were chosen 44% of the time. This was computed using a **logistic mixed-effects model**, which showed that AI-generated statements were significantly favored by participants (P < 0.001). This indicates that AI mediation is clearly more effective than human mediators at helping groups reach consensus.

In addition, further analysis based on an **ordinal mixed-effects regression model** showed that AI-generated statements were also rated higher than those written by human mediators in terms of **quality** and **endorsement**:

- Quality: β = 0.43, SE = 0.08, OR = 1.54, z = 5.6, P < 0.001
- Endorsement: β = 0.31, SE = 0.07, OR = 1.36, z = 4.2, P < 0.001

This shows that statements generated through AI mediation were not only more appealing but also more persuasive and informative, demonstrating that this task is challenging for humans.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/science.adq2852-f2.jpg)

**The Effect of Statement Length on the Results**

AI-generated statements were **125.9 words long on average**, while statements written by human mediators were 105 words long. Since statement length might influence participants' preferences, the research team tried over multiple tests during the experiment to encourage human mediators to write longer statements, and also controlled for statement length. Even so, the results still showed that **participants preferred the AI-generated statements even when length was controlled for**. In addition, third-party reviewers evaluated the statements and found that AI-generated statements were **clearer, more informative, and more logical**, better captured the majority viewpoint (P = 0.001), and **were less likely to read like the personal opinion of a single individual**.

**Revised Statements Were Preferred**

The experiment further examined the AI's performance when revising group statements. The data showed that group statements that had gone through critique and revision were more popular with participants than the initial statements. Across three different experimental cohorts, the revised statements consistently received higher support in the **final preference test**:

- **Cohort 1**: preference rate of 68% (P < 0.001)
- **Cohort 2**: preference rate of 64% (P < 0.001)
- **Cohort 3**: preference rate of 66% (P < 0.001)

These results indicate that by incorporating participants' critiques into its revisions, the AI can effectively help groups reach consensus, and this preference was not affected by statement length.

**An Additional Experiment Controlling for Bias Effects**

To rule out the possibility that the preference for revised statements stemmed from an "effort justification bias" arising from participants' **extra effort**, the research team also conducted an additional experiment. This experiment involved 245 participants divided into 50 groups. In it, participants rated two types of AI-generated statements: one type written without seeing the critiques, and the other incorporating the critiques. The results showed that statements revised based on critiques again received higher ratings (P = 0.0039), and this result remained significant after controlling for statement length, further confirming that AI mediation genuinely helped group members find better common ground.

#### **RQ2: Can AI mediation reduce disagreement within groups?**

**Background and Problem Setting**

The research team argued that establishing common ground requires group members to be able to agree on a **shared pool of information**, and that in some cases a **shift in views** is a prerequisite for finding consensus. The research question was therefore: through interaction with the AI mediation system (the Habermas Machine, HM), do participants become more aligned when discussing an issue; that is, does disagreement among group members decrease?

To measure this, the research team designed a **"group agreement"** metric to quantify the degree to which group members endorsed a position statement. The metric is calculated from the difference between the proportions of participants who agree and disagree with a position statement (for example, "taxes are too high"), before and after the discussion. If 80% of participants agree with the statement and 20% disagree, the group's agreement score is 60 (i.e., 80% - 20%). If the group is completely split on the issue, agreement is 0. The team's goal was to use this calculation to test whether group agreement increased after AI mediation.

**Results: Agreement Increased**

The effect of AI mediation was tested in three different task cohorts. The results showed that after AI mediation, group agreement **increased by an average of 8 percentage points**, indicating that participants gradually converged on the issues by the end of the discussion. The specific results were as follows:

- **Cohort 1**: agreement increased by 8.6 percentage points (P < 0.001)

- **Cohort 2**: agreement increased by 9.3 percentage points (P < 0.001)

- **Cohort 3**: agreement increased by 5.9 percentage points (P = 0.0023)

The experiment also found that **the number of groups reaching unanimity increased significantly**. For example, in task cohort 1, the proportion of groups in which all members supported the same position (i.e., agreement reached 100) rose from 22.8% to 38.6%, and the other two cohorts showed similar changes.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/science.adq2852-f3.jpg)

**The Effect of Opinion Change**

The study found that the more strongly participants **endorsed** the final group statement, the more their post-discussion evaluation of their own position was influenced by the other group members. This suggests that by finding a group statement expressing a common position, participants' views gradually drew closer together, revealing a convergence of opinions during discussion. Specifically, the data showed that participants' **final positions were significantly influenced by the initial positions of the other group members** (P < 0.001). This further demonstrates that finding a group statement that expresses a common position helps drive opinion change and the achievement of consensus.

At the end of each discussion round, participants reported changes in their views via a questionnaire. The data showed:

- In 30.1% of discussion rounds, participants reported that their views had "moved closer to the group's opinion";
- In 66.6% of discussion rounds, participants felt that the **final group opinion** was the best expression of their current view, while 33.3% felt that their **original individual opinion** better represented their position.

**Comparison: Opinion Exchange vs. AI Mediation**

To rule out the possibility that group members converged simply because they were exposed to one another's views, the research team designed a control experiment. In this experiment, participants did not go through AI mediation but instead directly evaluated each other's opinions. The results showed that **group agreement did not increase significantly without AI mediation** (P = 0.64). More specifically, the data showed that AI mediation promoted agreement among members more effectively than the mere exchange of opinions (P = 0.0058).

In addition, in some experiments human mediators also produced a similar convergence of views, indicating that this agreement does not come solely from AI mediation itself but from the **mediation process** (whether carried out by AI or by humans).

#### **RQ3: Can AI-generated statements reflect majority and minority opinions equally?**

**Background and Experimental Design**

An effective mediator, when handling group opinions, must arbitrate fairly between the **majority** and the **minority**. In about 77% of the discussion rounds in the study (803/1047), there was initial disagreement; that is, group members did not fully agree on a position (for example, in a five-person group perhaps only 3 agreed with a statement). This gave the research team an opportunity to quantify how support for majority and minority opinions changed after mediation.

Through the experiments, the research team found that **the proportion supporting the majority increased on some questions**, while on other questions **support for the minority was also strengthened**. This indicates that the AI-generated group statements did not merely please the majority, but gave minority views room for expression. However, this change was not symmetric:

- The majority gained support in 29% to 32% of discussion rounds;

- The minority's support rose in 20% to 26% of discussion rounds.

Moreover, participants' **majority leaning** (i.e., their endorsement of the majority position) increased significantly after discussion (P < 0.001), meaning that views were on the whole more likely to move toward the majority position, even though minority voices were still expressed. This phenomenon is called **"parallel belief updating"**: in the process of finding consensus, different views are updated simultaneously.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/science.adq2852-f4.jpg)

**How Was the AI's Treatment of Majority and Minority Opinions Measured?**

The research team used the **T5 sentence encoder**, a machine learning tool for embedding text into high-dimensional vectors. With this method, they were able to study how the Habermas Machine weighted **majority and minority opinions** in the group statements. The specific steps were as follows:

- The team embedded participants' individual opinions and the group statements into 768-dimensional vectors and computed a "position component score";
- The study found a strong correlation between the embeddings of participants' individual opinions and their pre-discussion ratings of the position statement (correlation coefficient r = 0.64), indicating that this method can accurately capture the position expressed in a text.

Along this dimension, the experiment found that the group statements represented a **compromise view** of participants' opinions: 96% of group statement scores fell within the range of the corresponding individual opinions. This means that the statements generated by the Habermas Machine genuinely reflected the differing positions of group members and constituted a fair compromise.

**Weight Allocation in Initial and Revised Statements**

In the experiment, by modeling the group statement scores as a **convex combination of majority and minority opinions**, the research team found that the initial group statements weighted minority opinions exactly in line with their actual proportion (29%). In the revised statements, however, the minority's weight increased (from 0.29 to 0.36), indicating that minority critiques were reflected more strongly during the revision process.

This pattern suggests that the Habermas Machine's initial statements may lean toward the majority view, prompting criticism from the minority, which ultimately pushes the revised statements closer to the minority. Rather than simply swinging between majority and minority views, this process gradually arrives at a meaningful **common position**.

**The Link Between Opinion Change and Majority Leaning**

Finally, the research team tested whether participants changed their views because they were exposed to more statements supporting the majority. The results showed **no significant association** between participants' opinion change and the number of times they were exposed to majority views during the discussion (P = 0.37). This indicates that the shift toward the majority position was driven by the content of the group statements, not by participants merely being exposed to majority views.

#### **RQ4: Can AI mediation be applied in citizens' assemblies?**

**Background and Experimental Design**

The earlier experiments were based on UK residents recruited through convenience sampling, conducted mainly via online platforms. This raised a question: would AI mediation also work effectively in a more representative and diverse group, such as an actual citizens' assembly? To address this, the research team partnered with a nonprofit organization (the **Sortition Foundation**) to recruit a sample of 200 people representative of the UK population. Participants represented people of every **age, gender identity, ethnicity, socioeconomic status, and geographic region** in the UK. These participants took part in a **virtual citizens' assembly** held over three weeks, with a one-hour discussion each week. The virtual citizens' assembly mainly simulated the "discussion phase" of a citizens' assembly, and did not include the fact-finding or expert testimony phases.

In each assembly session, participants discussed the same questions following the procedure of the earlier experiments. The purpose of the experiment was to test whether AI mediation remained effective in a diverse group.

**Results: High Endorsement and Increased Group Agreement**

The results showed that, similar to the previous experiments, the **group statements generated in the virtual citizens' assembly were highly endorsed**, and group members reached a degree of agreement after AI mediation:

- **Group agreement** (i.e., the difference between the proportions of group members agreeing and disagreeing with the position statement) increased significantly from before to after the discussion, indicating that AI mediation helped group members reach consensus during the discussion;
- As shown in the figure below, the revised statements (after incorporating critiques) were preferred in the **final preference judgment**, and the statements received high quality and endorsement scores.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/science.adq2852-f5.jpg)

**Topics Discussed**

The virtual citizens' assembly covered **nine potentially controversial questions**, touching on immigration policy, the retirement age, the prison population, Brexit, climate change, universal childcare, the minimum wage, national pride, and the value of the internet. All groups discussed the same questions, which provided an opportunity to observe whether AI mediation led to **convergence of opinions** across different groups.

Through exploratory analysis of these topics, the study found that **five of the nine questions showed convergence of opinions**. For example:

- In the discussion on "reducing the prison population," the proportion of participants supporting this position rose from 60% to 75% (P < 0.001);
- In the discussion on "changing the UK's asylum policy to make it easier to enter the country," the proportion of supporters rose from 39% to 51% (P < 0.001).

In addition, for some more controversial questions, such as encouraging **national pride**, raising the **minimum wage**, and achieving **net zero emissions**, the study also found significant but smaller convergence of views.

However, for certain topics where strong positions were expected (such as Brexit), no clear opinion change was found. Moreover, one question (**providing universal free childcare from birth**) showed change in the opposite direction, with the proportion of opponents rising from 33% to 41%, though this change was not statistically significant (P = 0.156).

**Bias Test: The Impartiality of AI Mediation**

The research team further examined whether AI mediation, due to **biases from pretraining or fine-tuning**, led participants to lean toward a particular position. By computing a bias score representing where the group statements fell along the position axis (a "bias toward agreement"), the experiment tested whether the AI tended to generate more statements supporting one particular position. The results showed **no evidence that the AI-generated statements were biased toward the majority position** (P = 0.152), indicating that the AI-generated group statements were not affected by bias from pretraining or fine-tuning.

## Conclusion and Discussion

- The study evaluated a new AI-based approach that uses an AI system as a "group mediator" (namely the Habermas Machine, HM) to facilitate collective discussion. The results showed that AI-generated group statements performed excellently in helping participants reach broad consensus, with **participants more inclined to choose the AI-generated statements** rather than those written by human mediators. Through interaction with the AI, group members generally reduced their disagreement on social and political issues and tended to find a common position. The study is the first to demonstrate that AI can successfully mediate human collective discussion at scale, an important advance over previous research based on human-run systems.
- **Strengths and potential of AI**: The main advantages of AI mediation lie in its potential for **time efficiency**, **fairness**, and **scalability**. The AI system can generate a high-quality group statement within seconds, whereas a human mediator needs several minutes. The HM selects the best statement from a set of candidates by simulating a kind of **ranked-choice election** in which each participant's vote carries equal weight, ensuring the fairness of the discussion. The experiments also showed that AI-generated statements not only reflected majority views but also effectively **incorporated minority critiques**, avoiding the problem of a "tyranny of the majority."

- **Potential in larger-scale discussions**: Although the experiments were conducted only in five-person groups, the study suggests that the AI mediation approach could in theory be extended to larger group discussions. With advances in technology, for example language models like Gemini 1.5 that can handle much larger context windows, hundreds or thousands of opinions could be integrated into the AI system. Even with the smaller Chinchilla model, AI mediation already showed superior performance; combining larger models with custom fine-tuning in the future may further improve its effectiveness.
- **Limitations of AI mediation**: Despite its notable advantages, AI mediation also has some limitations. First, AI cannot handle certain **key aspects of real-world discussion**, such as **fact-checking**, keeping the discussion on topic, or moderating the conversation. If participants' opinions are inadequate or misleading, the AI may generate flawed group statements. In addition, AI mediation cannot replace the **nonverbal cues** of face-to-face discussion or the opportunities it offers for building interpersonal relationships. These limitations suggest that AI mediation should be combined with a larger framework of democratic discussion, including careful selection of participants, to ensure representativeness and diversity.

## Extra

- This issue of Science published three papers on **protecting democracy** back to back, along with a commentary. The other two papers respectively studied: (1) the effectiveness of 25 interventions designed to reduce partisan animosity and anti-democratic attitudes in the United States; and (2) based on surveys in six countries, what people understand to be the core of democracy (finding that **free and fair elections** and **the protection of civil liberties such as freedom of speech** are the core of democracy);
- This paper finds that AI can play a role much like **Captain Dragonfly** (蜻蜓队长) in B-Robo Kabutack (铁甲小宝): the absolute referee, fair and beautiful!
- If AI becomes more and more involved in human decision-making, then we are getting closer and closer to the super decision-making AIs depicted in **science fiction**! For example, HAL 9000 in *2001: A Space Odyssey*, the artificial intelligence in Liu Cixin's *Supernova Era*, and the MAGI in *Neon Genesis Evangelion* (Eva).


## Original Article Information

Tessler, M. H., Bakker, M. A., Jarrett, D., Sheahan, H., Chadwick, M. J., Koster, R., Evans, G., Campbell-Gillingham, L., Collins, T., Parkes, D. C., Botvinick, M., & Summerfield, C. (2024). AI can help humans find common ground in democratic deliberation. *Science*, 386(6719), eadq2852. [https://doi.org/10.1126/science.adq2852](https://doi.org/10.1126/science.adq2852)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241018152323050.png)
