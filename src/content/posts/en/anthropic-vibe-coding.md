---
title: Anthropic — AI-Assisted Coding Hurts Skill Formation
date: 2026-02-01T22:00:00+08:00
category: { name: Research Notes, slug: research }
tags: [HIBL]
summary: Vibe coding feels great now — and is dangerous in the long run.
---

> This paper studies the impact of AI assistance on software-engineering skill formation through a randomized controlled experiment. It finds that, while learning a new Python async programming library (Trio), developers who completed tasks with AI assistance scored significantly lower (by 17%) on tests of **conceptual understanding**, **code reading**, and **debugging**, while gaining no significant improvement in task-completion efficiency. Through qualitative analysis of screen recordings from 52 participants, the authors identify six AI-interaction patterns, three of which involve **cognitive engagement** and preserve learning outcomes while still using AI. The study suggests AI-boosted productivity is not a shortcut to professional competence — especially in safety-critical domains, AI assistance should be integrated into workflows carefully to protect skill formation.

**Title:** How AI Impacts Skill Formation

**Venue:** *arXiv*

- *Judy Hanwen Shen*: PhD student in Computer Science at Stanford. Her research spans human-AI collaboration, the societal impact of advanced AI systems, algorithmic fairness, and AI alignment.
- *Alex Tamkin*: Research scientist at Anthropic, interested in understanding and improving the real-world impact of AI systems, with particular focus on AI safety, human-AI collaboration, and AI's economic and social effects. At Anthropic he has led or contributed to several influential projects, including CLIO, the Anthropic Economic Index, and Claude Artifacts.

**Published:** 28 January 2026

  

## Introduction

Since the Industrial Revolution, skill demands in the labor market have continually evolved with the introduction of new technology. Workers' roles often shift from **directly executing** tasks to **supervising** their completion. Factory robotics moved humans from manual labor to supervision; accounting software moved professionals from raw computation to devising better bookkeeping and tax strategy. In both settings, **humans** remain **responsible** for the quality of the final product and accountable for any errors. Even when automation changes how a task gets done, the technical knowledge to identify and fix errors remains essential.

As AI demonstrates large productivity gains across software engineering, entrepreneurship, consulting, and more, its deeper impact on workers remains poorly understood. While more and more workers rely on AI for productivity, whether workplace AI assistance impedes understanding of core concepts, or hinders development of the skills needed to supervise automated tasks, is an open question. Most research focuses on the **final product** of AI assistance (lines of code, quality of ideas); an equally or more important question is: how does the **process** of receiving AI assistance affect the workers themselves?

Software engineering is a profession where AI tools apply directly and visibly boost everyday productivity. Junior or novice workers benefit most when writing code with AI. Yet in **high-stakes** applications, AI-written code may need human debugging and testing before deployment. That safety-enhancing extra verification is only possible if human engineers themselves possess the skill to understand code and spot errors. As AI advances, **if humans' ability to understand code erodes, supervising ever more capable AI systems becomes harder**.

Against this backdrop, the paper focuses on **on-the-job learning** — settings where workers must acquire new skills to complete tasks — to understand AI's dual impact on productivity and skill formation. The core research questions:

- Does AI assistance improve developers' **productivity** when learning and completing a programming task that requires a new skill?
- How does using AI assistance affect the **formation and mastery of those new skills**?

## Background and Related Work

#### **Productivity gains**

Since advanced conversational assistants (ChatGPT, Copilot, Claude) became widely available in late 2022, AI tools have been widely adopted across software development, education, design, and science. Multiple studies find that **AI assistants raise productivity**. Brynjolfsson et al. found AI-based conversational assistants increased the average number of issues resolved by call-center workers by 15%. Dell'Acqua et al. found consultants completed on average 12.2% more tasks with AI than without.

On skill heterogeneity, a consistent pattern is that in customer service, consulting, legal Q&A, and writing, **less experienced and lower-skilled workers tend to benefit most**. One exception: when GPT-4 was provided to Kenyan small-business owners, AI business advice improved outcomes for high performers (by revenue) while worsening outcomes for low performers.

For software engineering, Peng et al. (2023) found crowdsourced developers using Copilot finished a task 55.5% faster than controls, with **novice** programmers benefiting more from AI coding assistance. Cui et al. (2024), studying developers at major software firms, found AI code completion raised productivity by 26.8% as measured by pull requests, commits, and builds — again with less experienced coders gaining more. Yet the junior developers who benefit most from AI are precisely the group that should be rapidly developing new skills on the job. AI's effect on **skill formation** in this subgroup remained unknown.

#### **Cognitive offloading and skill retention**

Recent research links AI assistance to skill decay. Macnamara et al. (2024) note that medical professionals trained with AI assistance may fail to develop the sharp visual skills needed to recognize certain conditions. Gerlich's (2025) survey of knowledge workers shows frequent AI use correlates with weaker critical thinking and more **cognitive offloading**. Lee et al. (2025) find knowledge workers report lower cognitive effort and confidence when using generative AI tools.

On retention, Wu et al. (2025) find that even when generative AI improves immediate performance on content-creation tasks (Facebook posts, performance reviews, welcome emails), the gains **do not persist** in subsequent tasks humans perform alone. For data-science tasks, Wiles et al. (2024) describe AI's effect on non-technical consultants as an **exoskeleton**: the augmented capability does not persist once the worker stops using AI.

#### **Overreliance**

While the economics literature on AI-augmented productivity implicitly assumes AI is **trustworthy**, generative AI in reality produces errors and hallucinations. When flawed models are deployed to assist humans, decisions made by following the model's mistakes are called **overreliance**. Methods proposed to reduce overreliance exist but mostly target decision-time information such as explanations or debate.

## Theoretical Framework

The paper's framing builds on the educational philosophy of **learning-by-doing**, especially Kolb's (2014) experiential learning theory. Effective learning is a cycle through four stages: **Concrete Experience**, **Reflective Observation**, **Abstract Conceptualization**, and **Active Experimentation**. Learners loop through these stages, converting concrete experience into abstract knowledge and applying it to new situations.

**Problem-Based Learning** (PBL) also supports the framing. Schmidt (1994) argues learners construct and integrate knowledge more effectively by solving real-world problems. In programming, this means independently confronting and resolving errors is a critical link in skill formation.

From these theories the authors derive the core hypothesis: directly using AI to generate code may let users skip key parts of the learning loop — especially reflection and conceptualization through error-resolution and independent thinking — thereby **impeding** deep skill formation. In other words, AI may offer a **shortcut** that routes around the cognitive processes that are difficult but essential for learning.

## Study Design

#### **Task selection**

The team prototyped tasks for several skills junior software engineers might face at work. They settled on Python's **Trio library** for async concurrency and I/O. Compared with asyncio, the library is less known (judging by StackOverflow question counts) and involves new concepts beyond Python fluency (e.g., **structured concurrency**). The library is explicitly designed for ease of use, making it well suited to a learning experiment.

The team designed and tested five Trio async-programming tasks. After several pilots, the main study used the first two, each taking roughly 10–20 minutes in initial testing. Task one: write a timer that prints each elapsed second while other functions run — introducing **nurseries**, spawning tasks, and running functions concurrently. Task two: implement a record-retrieval function that handles Trio's missing-record errors — introducing error handling and **memory channels**.

The experiment used an online interview platform with an AI-assistant chat interface. AI-group participants were prompted to use the assistant. The underlying model was **GPT-4o** (— hey, why not Claude?!), configured as an intelligent coding assistant. It could see the participant's current code and, when prompted, directly generate complete, correct code for both tasks.

#### **Assessment**

Quiz design drew on Cheng et al.'s (2022) meta-analysis of CS-education assessment, targeting three supervisory skills critical to programmers in the AI era:

- **Debugging**: identifying and diagnosing code errors — vital for catching mistakes in AI-generated code and understanding why it fails;

- **Code reading**: reading and understanding what code does — what lets humans understand and verify AI-written code before deployment;

- **Conceptual understanding**: grasping the core principles behind tools and libraries — essential for judging whether AI-generated code uses design patterns consistent with the library's intent.

The team deliberately excluded code-writing assessment, reasoning that low-level code writing (e.g., memorizing function syntax) will matter less as AI coding tools integrate further, while higher-level system design matters more.

The quiz covered seven core Trio concepts: async/await usage, launching Trio functions, error handling in Trio, coroutines, memory channels, opening and closing a nursery, and sequential vs. concurrent execution. The final assessment had 14 questions worth 27 points. Five quiz versions were piloted to validate item quality and difficulty.

#### **Experimental design**

A between-subjects design randomly assigned participants to a **treatment group** (AI coding assistant available) or **control group** (no AI; web search and official docs only). The flow had three phases:

- **Warm-up task** (10 min): a simple programming task with no async concepts; no AI for anyone. Familiarizes participants with the platform and serves as a covariate for baseline programming ability.

- **Core Trio tasks** (35 min): the two Trio tasks. Treatment could use the AI assistant; control could not.

- **Post-task quiz** (25 min): all participants, without AI, completed a quiz on the Trio library to measure true mastery.

Participants were recruited via a third-party crowdsourcing platform and paid $150. Criteria: 1+ years of Python, coding at least weekly, prior use of AI coding tools, never used Trio. Ultimately 52 participants completed the full protocol, 26 per group. Most were 25–35, held bachelor's degrees, and worked as freelancers or professional software developers. Mean task duration was 58.5 minutes.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20260201165536448.png)

#### Pilot results

Before the main study, four pilots refined the design.

**Pilot A** (n=39) surfaced a serious problem: 35% of control participants used AI against the rules — without strict monitoring, voluntary compliance with a **no-AI** rule is hard;

**Pilot B** (n=107) tried sterner warnings; 25% of controls still used AI. This led the team to adopt screen recording in later runs;

**Pilot C** (n=20) found local-dependency issues, which were fixed;

**Pilot D** (n=20) foreshadowed the main findings: within the 35-minute limit, control completion was 60% vs. 90% for treatment; treatment finished faster (Cohen's d = 1.11, p = 0.03) but scored markedly worse on the quiz (Cohen's d = 1.7, p = 0.003).

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20260201165713402.png)

## Main Results

#### **Limited productivity impact**

Contrary to many people's intuition, the study **found no significant reduction in task-completion time from AI assistance**. The treatment group averaged only about 2 minutes faster, statistically insignificant (p = 0.391) — in contrast to Peng et al. (2023) and Cui et al. (2024), who reported sizable gains.

Qualitative analysis explains the apparent contradiction. Many participants spent substantial time (up to 30% of total time, ~11 minutes) constructing and iterating their **AI queries**. Against a median completion time of 19 minutes, 6 minutes of AI interaction is a large share. That cost offset the speed advantage of AI-generated code.

The authors conjecture AI is likelier to raise productivity on **more repetitive** or already **familiar** tasks. When learning something new, interacting with AI itself consumes considerable cognitive resources and time.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20260201170811661.png)

#### **AI assistance hurts skill mastery**

The striking finding is in the **post-task quiz**. AI-assisted participants averaged 50%, significantly below the control's 67% — a 17-point gap, roughly two letter grades (B+ down to D+). The effect size (Cohen's d) is 0.738, medium-to-large, strongly significant (p = 0.010). The effect persists after controlling for warm-up task time as a proxy for baseline ability (Cohen's d = 0.725, p = 0.016).

So although AI helped some participants finish the tasks, the process did not convert into their own knowledge and skill. AI assistance delivered a **surface success**: the task got done, but learning did not happen.

#### **Heterogeneity**

Decomposition reveals differential impact by skill type. The largest gap appears on **debugging questions**, the smallest on **code reading**. The interpretation: both groups had similar exposure to code reading (both read task descriptions and starter code), but the control group hit more errors during the task, so their debugging got more of a workout.

The **debugging** gap is especially alarming: developers who over-rely on AI may lack precisely the ability to detect and fix problems when AI errs — which bears directly on the safety and reliability of AI in critical systems. As companies shift toward AI writing code with humans supervising, systemic risk grows if humans lack the skills to verify and debug AI-written code.

#### **Across experience levels**

The study also asked whether the effect varies with years of programming experience. Controls (no AI) outscored treatment (AI) at every experience level. The negative effect of AI on skill formation is not confined to novices; even seasoned developers learning a new skill are hindered by over-reliance on AI.

## Mechanisms

#### **Six AI-interaction patterns**

Not all AI use leads to bad outcomes. The authors identify six distinct **AI-interaction patterns**, strongly associated with learning outcomes, grouped into two classes:

**Low-scoring patterns** (mean quiz below 40%) — heavy AI reliance, low cognitive engagement:

- **AI delegation** (n=4): nearly fully outsourced coding to AI, simply pasting AI solutions. Fastest completion (mean 19.5 min) but least learned; quiz mean 39%;
- **Progressive AI reliance** (n=4): started solo, asked only 1–2 questions in task one, then leaned fully on AI in task two after difficulty. ~22 min; quiz mean 35% — driven by failing to grasp any task-two concepts;
- **Iterative AI debugging** (n=4): repeatedly pasted error messages into AI seeking direct fixes rather than understanding root causes. Asked the most questions (5–15 queries), but to make AI solve the problem, not to clarify understanding. Slowest (mean 31 min), worst learning; quiz mean 24%.

**High-scoring patterns** (mean quiz above 65%) — sustained **cognitive engagement** while using AI:

- **Generate-then-comprehend** (n=2): had AI generate code, but after copying it actively asked questions to understand how it works. ~24 min; highest scores, mean 86%. Superficially this resembles AI delegation — the only difference is the **extra time spent understanding** the generated code;
- **Hybrid code-explanation** (n=3): requested code and explanations together, and read them. ~24 min; quiz mean 68%;
- **Conceptual inquiry** (n=7): mainly asked AI conceptual questions about Trio, then independently wrote and debugged code based on their own understanding. They hit many errors and fixed them themselves. Fastest among high scorers (mean 22 min), just behind AI delegation; quiz mean 65%.

This is one of the paper's core contributions: AI's effect on skill formation is not monolithic — it depends heavily on **how the user interacts with AI**. Used as a tool for exploration and understanding, AI preserves or even enhances learning; used purely as a task-completion shortcut, it suppresses skill formation. The common thread of high scorers is high cognitive engagement — follow-up explanations, conceptual clarification, or independently resolving errors.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20260201212505597.png)

#### **Query types**

User inputs to the assistant fall into five categories: **explanation** (q=79), **generation** (q=51), **debugging** (q=9), **capability inquiry** (q=4), and **thanks** (q=4).

Explanation queries are most common — more on the Trio library, async details, and high-level concepts; 21 of 25 treatment participants asked them, reflecting strong engagement. Generation requests come second; some asked for the whole task, others for specific functions. Only 16 of 25 used AI to generate code, and 4 of those asked **only** for code with no other question types. Indeed, 3 of the 8 lowest scorers requested code generation without ever asking for explanations — suggesting that if all treatment participants had used AI only for code generation, the skill-formation gap versus control would be even larger.

#### **How code was adopted**

The researchers also examined how participants adopted AI code suggestions — pasting directly versus typing by hand:

**Direct pasters** (n=9) finished fastest. Manual transcribers (n=9) matched control speed. Mixed-method users (n=4) also matched control. Self-writers (n=4) were relatively fast and clearly proficient.

Yet on skill formation (quiz scores) there is **no significant difference** between pasting and typing. Time spent manually typing code does not by itself produce better conceptual understanding. What matters is whether the user cognitively engaged with understanding the code — not the mechanics of copying it.

#### **Errors are the mother of learning**

Qualitative analysis reveals another deep mechanism: **encountering and resolving errors** plays a crucial role in skill formation.

Controls without AI hit significantly more errors. The AI group's median was 1 error across the whole task (range 0.0–3.0) versus 3 for control (range 2.0–5.0). Most AI-group participants completed on the first run; most controls hit multiple errors along the way. Of the 12 participants who finished both tasks error-free, only 2 were in control.

Not all errors contribute equally. The most common (NameError, AttributeError) are unrelated to Trio — typos in variable or function names, quickly fixed. But Trio-specific errors — **RuntimeWarning** (coroutine never awaited) and **TypeError** (a trio function got a coroutine object instead of an async function) — force participants to understand how Trio handles coroutines and the correct use of await. These are exactly the concepts the quiz tests.

Controls hit more Trio-related errors, and each independent resolution forced deeper thought about the code's logic and the library's principles, deepening understanding and memory. The AI group, able to route around or instantly patch errors, lost those precious opportunities to learn through struggle — strong empirical support for learning-by-doing and for **desirable difficulties** as a key ingredient of deep learning.

#### **The shift in active coding time**

The researchers also measured time spent actively coding — the time **actually** spent writing code, typically a small fraction of total task time.

The **no-AI group** spent more active coding time and earned higher quiz scores, suggesting that a shift from coding to reading-and-comprehending may be one mechanism by which AI assistance hinders learning: the AI group spent more time reading AI-generated code and replies rather than writing and debugging themselves.

Interestingly, within each condition, more active coding time correlates with lower quiz scores — because more experienced programmers code less by hand yet have stronger foundations.

#### **Participant feedback**

About a quarter of participants left feedback. **Controls** generally found the task interesting and the instructions helpful for understanding Trio. Treatment participants said they wished they had attended more to the library's details during the task — by reading generated code or asking for deeper explanations. Some feedback was insightful: participants reported feeling lazy and admitted large gaps remained in their understanding.

Despite identical instructions and quizzes, controls' sentiment was generally more **positive** — perhaps from the sense of achievement and **self-efficacy** that comes from solving problems independently.

## Conclusions and Discussion

#### **Findings**

The headline finding: using AI to complete tasks requiring new skills (knowledge of a new Python library) reduces skill formation. In an RCT, participants were assigned to treatment (AI assistant + web search + instructions) or control (web search + instructions only). The erosion of **conceptual understanding**, **code reading**, and **debugging** measured among AI-assisted participants suggests workers acquiring new skills should mind their reliance on AI while learning.

Within the AI group, outcomes split sharply between high-scoring interaction patterns (65%–86% quiz) and low-scoring ones (24%–39%). High scorers asked AI conceptual questions instead of requesting code, or asked for explanations to accompany generation — patterns showing strong **cognitive engagement**.

Contrary to the initial hypothesis, **no significant performance gain** in task completion was observed. AI improved mean completion time, but not significantly — even though the assistant could generate complete solutions on demand. Qualitative analysis attributes this to heterogeneous choices about how to use AI. One subgroup had AI generate all code and never asked conceptual questions or explanations; they finished much faster than control (19.5 vs. 23 minutes) but were only ~20% of the treatment group. Other treatment participants asked many queries, spent long stretches composing them, or requested follow-up explanations, raising mean completion time. These contrasting patterns suggest that completing tasks requiring new knowledge does not necessarily yield the productivity gains seen on tasks requiring only existing knowledge.

Taken together: integrating AI into the workplace without sustained cognitive engagement can **harm** professional development. Given time pressure and organizational incentives, junior developers and other professionals may lean on AI to finish as fast as possible at the cost of genuine skill growth. Moreover, the largest quiz gap was in debugging. As companies move toward AI writing code and humans supervising, if human skill formation is suppressed by AI use from the start, humans may lack the very skills needed to verify and debug AI-written code.

#### **Advice for early-career workers**

For newcomers in software engineering or any industry, this study is a piece of evidence for the value of deliberate skill development despite the ubiquity of AI tools. It shows that **expending cognitive effort** during mastery — even hitting obstacles like errors while AI-assisted — pays off.

Beyond the patterns described here, major LLM products now offer **learning modes** (ChatGPT Study Mode, Claude Code Learning / Explanatory mode) designed to promote understanding. Knowing how people learn while using AI can also guide how we design AI: assistance should let humans work faster while still growing new skills.

Ultimately, adapting skill development to AI's presence requires a wider view of AI's effect on workers. Participants in the AI economy should care not only about productivity gains, but about the long-term sustainability of expertise development amid the proliferation of new AI tools.

## Postscript

- The paper's framing feels great — simple and effective;
- This is me too: I chat with AI about a pile of questions and get a **false** sense of knowledge entering my brain. With AI assistance it's mostly asking and writing — and I spend far too much time on the asking, so the writing shrinks;
- A lot of Anthropic's research is genuinely interesting!

## Source

Shen, J. H., & Tamkin, A. (2026). *How AI Impacts Skill Formation*. arXiv preprint arXiv:2601.20245. [https://arxiv.org/abs/2601.20245](https://arxiv.org/abs/2601.20245)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20260201154744141.png)
