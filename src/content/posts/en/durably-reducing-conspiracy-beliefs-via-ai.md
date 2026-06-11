---
title: "Science - Dialogues with AI Can Durably Reduce Conspiracy Beliefs"
date: 2024-09-16T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Well-designed AI systems can play an important role in improving public discourse and countering misinformation."
---

> This paper proposes a novel and promising method for reducing conspiracy beliefs, showing that through personalized dialogues with AI, even firmly convinced believers may change their beliefs. This approach differs from earlier pessimistic views holding that people deeply entrenched in conspiracy theories are almost impossible to change. The research shows that **well-designed AI systems can play an important role in improving public discourse and countering misinformation**, provided that they are used responsibly.

**Title:** Durably reducing conspiracy beliefs through dialogues with AI

**Journal:** *Science*

**Authors:**

- <u>Thomas H. Costello</u>: Assistant Professor of Psychology at American University. Postdoctoral fellowship at MIT (2022-2024).
- <u>Gordon Pennycook</u>: Himan Brown Faculty Fellow and Associate Professor of Psychology at Cornell University.
- <u>David G. Rand</u>: He is the Erwin H. Schell Professor and Professor of Management Science and Brain and Cognitive Sciences at MIT, the director of the Applied Cooperation Initiative, and an affiliate of the MIT Institute of Data, Systems, and Society, and the Initiative on the Digital Economy.

**Publication Date:** 13 September 2024

<br/>

## Introduction

#### **The Prevalence of Conspiracy Theories**

The widespread existence of conspiracy beliefs is a serious public problem. These beliefs often involve secret and malevolent plots carried out by powerful hidden forces. Although many conspiracy theories lack evidence or are even implausible, large numbers of people still believe them. Taking the United States as an example, past surveys have shown that **as many as 50%** of Americans believe in some form of conspiracy theory. This prevalence is worrying, because conspiracy theories are regarded as the archetypal example of beliefs that are strongly resistant to evidence.

- **Traditional Psychological Explanations**: Conspiracy beliefs arise through social-psychological processes that undermine people's ability to make rational decisions and accept evidence. For example, people may believe in conspiracy theories to satisfy psychological needs, such as a **desire for a sense of control over their environment**, a **search for certainty and predictability**, the need to **secure a sense of safety and stability**, and the pursuit of a **sense of uniqueness**. These psychological needs make conspiracy theories more than mere personal opinions; they become a means of maintaining psychological equilibrium, which makes such beliefs very difficult to change through evidence.
- **The Conspiracy Spiral**: Many theories hypothesize that once conspiracy beliefs take shape, especially when they become intertwined with **personal identity** or **group identity**, these beliefs become extremely stubborn. People may process information through **motivated reasoning**, selectively ignoring evidence that contradicts their beliefs. As a result, fact-based interventions are often considered nearly incapable of changing the minds of conspiracy believers.

#### **The Persuasive Potential of LLMs**

- **The Problem with Traditional Interventions**: If sufficiently compelling, personalized evidence were provided, would it be possible to get conspiracy believers to change their beliefs? The authors argue that previous intervention attempts may have failed because they lacked sufficient depth and specificity. Conspiracy believers often possess a wealth of "evidence" that they can deploy to argue with skeptics. Broad, non-specific rebuttals may therefore fail to persuade them.
- **AI as a Solution**: LLMs have two major advantages: first, they can access **vast amounts of information** covering a wide range of topics; second, they can deliver **personalized rebuttals** targeting an individual's specific conspiracy beliefs and reasons. With these capabilities, LLMs can directly respond to and refute the specific evidence supporting an individual's conspiracy beliefs, thereby overcoming the difficulties that plagued previous rebuttal attempts.

## Experimental Procedure

#### **Study Participants**

**Target Sample**: The study set a clear target sample size. Participants were recruited through CloudResearch's Connect participant pool, with the goal of obtaining **1000** eligible participants. These participants were quota-matched to US Census data on age, gender, race, and ethnicity, ensuring a degree of representativeness in the sample.

**Sample Screening**: A total of 1214 people entered the study flow, and some participants were excluded for failing to meet specific criteria. The main exclusion criteria included:

- **Writing Quality Check**: The study introduced a pre-treatment writing quality check (writing screener) to ensure that participants had good reading and writing abilities and could answer open-ended questions conscientiously. This screening was conducted at the start of the study, mainly to exclude individuals who were using automated programs, could not understand the questions, or were unwilling to engage seriously.
- **Attention Check**: Participants also had to pass an attention check question; those who failed were removed.
- **Insufficient Conspiracy Belief**: Participants whose stated conspiracy belief did not meet the study's requirements (i.e., was not a typical conspiracy theory), or who expressed low confidence in their conspiracy belief (below 50%), were also excluded.
- **Inaccurate AI-Generated Summary**: If the AI-generated summary of the conspiracy theory did not match the belief the participant had expressed, that participant's data was also excluded.

In the end, **774** participants met the criteria and completed the entire experiment. The research team ensured the balance of the sample before and after treatment, and confirmed that there was no significant sample bias between the treatment and control groups.

#### **Pre-treatment Measures**

- **Conspiracy Belief Measurement**: Before the experiment began, participants completed a set of self-report conspiracy belief questionnaires. The questionnaire was based on a modified version of the *Belief in Conspiracy Theories Inventory* (BCTI) and covered 15 widely circulated conspiracy beliefs. Participants rated each item according to how strongly they believed it, on a scale from 0 to 100, where 0 means "do not believe at all" and 100 means "believe completely". The average score was used to assess each participant's overall conspiratorial tendency.

- **Open-Ended Question**: Participants were then asked to freely describe a specific conspiracy theory they believed in, and to explain the evidence or personal experiences supporting this belief. These open-ended responses captured each participant's specific conspiracy beliefs, ensuring that the experimental treatment could be personalized.

- **AI-Generated Summary**: Based on each participant's description of their conspiracy theory, GPT-4 Turbo generated a short summary of that participant's belief for the participant to evaluate for accuracy. Participants then re-rated the strength of their belief in response to this summary (on a scale from 0 to 100).

#### **Human-AI Dialogue**

- **Treatment Group**: Participants in the treatment group engaged in three rounds of dialogue with GPT-4 Turbo, with the AI delivering targeted rebuttals based on the specific conspiracy belief each participant had provided. The AI was explicitly instructed to use simple, easy-to-understand language to persuade participants to lower their confidence in the conspiracy theory.

- **Control Group**: Participants in the control group also engaged in three rounds of dialogue with the AI, but the conversations had nothing to do with conspiracy theories; the topics discussed included unrelated subjects such as the US medical system or pet preferences (e.g., the cats vs. dogs debate). This design ensured that control group participants experienced the same interaction with the AI as the treatment group, but the AI made no attempt to change their conspiracy beliefs.

- **Dialogue Generation**: The treatment group's AI dialogues unfolded based on the open-ended conspiracy descriptions participants had provided. Each participant's description was fed into GPT-4 Turbo, and the AI generated rebuttal messages according to specific prompts. Throughout the experiment, the AI model progressively adjusted its persuasion strategy based on the history of each round of conversation, attempting to reduce the participant's confidence in the conspiracy theory.

- **Dialogue Length and Format**: Each round of dialogue lasted approximately 8.4 minutes, and the AI's responses were rich in content, typically containing multiple paragraphs that elaborated on and rebutted the participant's arguments. The dialogue was limited to three rounds in order to balance conversational depth with participant engagement.

#### **Post-experiment Measures**

- **Re-measurement of Conspiracy Beliefs**: After completing the dialogue, participants once again rated the strength of their conspiracy belief. This rating was used to assess whether the AI dialogue had changed participants' beliefs.

- **Follow-up Measures**: The study also followed up with participants **10 days** and **2 months** later, re-measuring the strength of their conspiracy beliefs. This follow-up process was used to assess the durability of the AI dialogue's effect, that is, whether the weakening of belief could be maintained over a long period.

#### **Supplementary Experiment**

The supplementary experiment closely mirrored the design of the main experiment, but made the following minor adjustments:

- **Adjusted Question Wording**: The supplementary experiment modified how the conspiracy theory question was asked, avoiding directly asking participants whether they believed in a particular conspiracy theory and instead using a more open-ended approach that guided them to describe theories they found credible. This change was intended to reduce the self-report bias caused by direct questioning.
- **Disabled Copy-Paste**: To prevent participants from completing the study with the help of other AI tools, the experiment disabled the copy-paste function, ensuring that the responses they provided were the result of independent thinking.
- **Behavioral Intention Measures**: The supplementary experiment also added several measures of participants' behavioral intentions, such as whether they would be willing to keep following or instead unfollow social media users who post conspiracy content, and whether they would be willing to argue with conspiracy believers.

#### **Accuracy of the AI Dialogues**

The research team asked a professional fact-checker to evaluate 128 statements generated by the AI. The results showed that **99.2%** of the AI's statements were accurate, **0.8%** were misleading, and none were false. This check ensured the reliability of the AI dialogues and showed that AI can provide high-quality information to rebut conspiracy beliefs.

## Results

#### **Reduction in Conspiracy Beliefs**

- Dialogues with the AI significantly reduced participants' belief in conspiracy theories. In the treatment group, participants' conspiracy beliefs fell by an average of **16.8 points**, equivalent to **a 21.43% drop in belief. In contrast, beliefs in the control group barely changed, falling by only 1.04%**.
- More than a quarter of treatment group participants (**27.4%**) became uncertain about the conspiracy theory they had previously firmly believed (belief rating below 50) after their dialogue with the AI, whereas only **2.4%** of the control group showed this change.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240916145919637.png)

#### **Durability of Belief Change**

To verify the lasting effect of the AI dialogues, the research team contacted participants again **10 days** and **2 months** after the dialogue to re-measure their belief in the conspiracy theories.

The results showed that conspiracy beliefs did not rebound significantly from the period after the dialogue through the two-month mark, indicating that the effect of the AI dialogue is durable. This means that after the AI's rebuttals, the change in participants' beliefs remained stable over an extended period.

#### **Broad Applicability across Types of Conspiracy Theories**

The study then analyzed the AI's effectiveness across different types of conspiracy theories. Using natural language processing (NLP) and cluster analysis, the researchers sorted the conspiracy theories described by participants into multiple categories (such as COVID-19, political conspiracies, and so on).

The results showed that the AI's rebuttal strategy was effective for most types of conspiracy theories, with only a single category being the exception. Moreover, even for **highly politicized** and deeply rooted conspiracy theories (such as fraud allegations concerning the 2020 US presidential election, or conspiracies related to the COVID-19 pandemic), the AI's rebuttals were equally effective, and participants' beliefs decreased significantly.

#### **Spillover Effects on Other Conspiracy Beliefs**

In this part, the researchers focused on whether the AI dialogue could not only reduce participants' belief in the specific conspiracy theory they had chosen, but also weaken their belief in other conspiracy theories. To this end, the researchers used the *Belief in Conspiracy Theories Inventory* (BCTI), a belief scale covering 15 widespread conspiracy theories, and analyzed belief changes across different time points (before the dialogue, 10 days after the dialogue, and 2 months after the dialogue) using linear mixed models.

The results showed that after the AI dialogue, treatment group participants' overall conspiracy beliefs (i.e., the average of the ratings for the 15 conspiracy beliefs on the BCTI) decreased significantly, by **3.05 points** (about **8.2%**), while the control group's beliefs actually increased by **1.64 points** after the dialogue. This indicates that the AI can not only reduce participants' belief in a specific conspiracy theory, but also weaken their trust in other conspiracy theories that were never discussed.

More strikingly, this spillover effect was still present at the two-month follow-up. Even taking into account the possibility of belief rebound, the treatment group's overall conspiracy beliefs at two months remained on a downward trend, with a decrease of **2.46 points**, demonstrating the durability of the AI intervention's effect.

#### **Effects on Highly Trusted Conspiracy Theories**

The researchers further analyzed the effect of the AI dialogue on the specific conspiracy theories that participants believed in strongly, that is, their attitudes toward conspiracy theories on the BCTI scale that they had rated above 50 (indicating a level of belief beyond "uncertain").

The results showed that the treatment group's reduction in belief in these highly trusted conspiracy theories was even more pronounced, with an immediate decrease of **9.39 points** (about **12%**), compared with a decrease of only **3.32 points** in the control group. This belief-reduction effect remained significant at the two-month follow-up (a decrease of **5.34 points**), indicating that the AI dialogue can not only influence broad conspiracy beliefs, but also exert a powerful persuasive effect on the conspiracy theories that participants are deeply convinced of.

#### **Effects on Behavioral Intentions**

Beyond changes in belief, the study also explored whether the AI dialogue would change participants' conspiracy-related behavioral intentions. In the supplementary experiment, the research team designed several behavioral intention assessments aimed at understanding how the AI dialogue affects participants' behavior on social media, in social interactions, and in collective action.

- **Social Media Behavior**: The study found that the AI dialogue significantly increased participants' intention to ignore or unfollow accounts spreading conspiracy content on social media. Treatment group participants reported being more likely to choose to ignore or unfollow users who spread conspiracy theories, with an effect size of **0.39** (P < 0.001).
- **Interactions with Others**: Participants also showed a stronger intention to debate or push back when facing other people who believe in conspiracy theories. The AI dialogue significantly increased their willingness to rebut or ignore conspiracy believers in discussions, with an effect size of **0.42** (P < 0.001). This suggests that the AI dialogue can not only change participants' beliefs, but also motivate them to take action against conspiracy theories when interacting with others.
- **Participation in Collective Action**: Regarding whether participants were willing to take part in collective protest activities supporting conspiracy theories, the study showed that the AI dialogue had some effect in reducing participants' intention to join such protests, but this result did not reach statistical significance (effect size **-0.12**, P = 0.12). Because baseline intentions to support such actions were generally low, a floor effect may have arisen, rendering the result non-significant.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240916150145200.png)

## Conclusions and Discussion

- **Findings**: Brief, personalized dialogues with an AI (GPT-4 Turbo) can significantly reduce participants' belief in conspiracy theories. This effect is not limited to the specific conspiracy theory the participant discussed; it also produces a broad weakening effect on other conspiracy theories. Moreover, the effect of the AI dialogue is durable, with no significant rebound in participants' beliefs after two months. Overall, the AI's dialogues with participants exert strong and lasting persuasive power in changing conspiracy beliefs.
- **Theoretical Advancement**: The findings of this study show that although conspiracy beliefs appear stubborn, through personalized and targeted dialogue, many conspiracy believers are still willing to adjust their beliefs when confronted with sufficiently compelling evidence. The study emphasizes that rational thinking plays a more important role in countering irrational beliefs such as conspiracy theories; people are not entirely shackled by identity or psychological motives, as some theories describe, but can change their beliefs when faced with persuasive arguments.
- **Limitations**: **Sample representativeness**: The study relied mainly on online survey participants in the United States, who typically take part in surveys for material compensation. Future research therefore needs to further verify whether these results can be generalized to broader social groups, especially individuals who have never participated in academic research or who are active in conspiracy theory communities. **Limitations of the AI model**: The study used the latest GPT-4 Turbo model, which is closed-source and specially fine-tuned, so it remains unclear whether other language models can produce similar effects. The validity of the findings may depend on the particularities of this model, and future research needs to examine the performance of other models. **Analysis of underlying mechanisms**: Although the study demonstrates that AI dialogues can significantly reduce conspiracy beliefs, the specific psychological or cognitive mechanisms are not yet clear. This is because every conversation is unique, containing a mixture of rational argumentation and social cues. Future research should analyze in depth the specific strategies the AI uses in dialogue, and how these strategies influence participants' belief change.

## Extra

- This paper took just over two months from submission to acceptance (Submitted 1 May 2024; accepted 18 July 2024);

- This post was written by GPT-4o, so please treat its content with caution! ⚠️

- Large language models are often criticized for fabricating facts in their answers, yet this paper finds that they are unexpectedly effective at persuasion, which makes for a very interesting study!

- Last week's post was banned by WeChat, and since I am unwilling to practice the "Sunflower Manual" (葵花宝典) on my language and writing, it never got published; it was not procrastination on my part. Interested readers can look up the paper themselves (Playing the sycophant card: The logic and consequences of professing loyalty to the autocrat), or find it on my blog.

  <img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240916150556440.png" style="zoom: 67%;" />


## Original Article Information

Costello, Thomas H., Gordon Pennycook, and David G. Rand. "Durably reducing conspiracy beliefs through dialogues with AI." *Science* 385, no. 6714 (2024): eadq1814. https://www.science.org/doi/10.1126/science.adq1814

![image-20240916130233578](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240916130233578.png)
