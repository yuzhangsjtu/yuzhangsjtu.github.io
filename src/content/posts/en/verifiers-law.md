---
title: Task Verifiability Shapes Whether AI Will Replace Us
date: 2026-02-28T22:00:00+08:00
category: { name: Research Notes, slug: research }
tags: [HIBL]
summary: Two roads diverged in a wood.
---

> How will artificial intelligence (AI) reshape the labor market? Existing research mostly predicts AI's impact through task content (e.g., routineness) or technological **exposure**. This essay argues that these frameworks overlook a more fundamental mechanism: a task's **verifiability**. Drawing on **Verifier's Law**, an idea rooted in reinforcement learning, I propose that the speed and depth with which a task gets automated by AI is highly correlated with whether its output can be verified objectively, quickly, and at scale. To operationalize this framework, I build a two-dimensional, four-quadrant **exposure–verifiability** framework on the O\*NET database to analyze the differentiated automation paths facing different occupational groups. This work offers a new theoretical lens on the micro-foundations of AI's differentiated impact on the labor market.

  

**Generative** AI is overturning an ancient **asymmetry**: for most of human history, creating has been harder than judging — writing a novel is harder than reviewing one, proving a theorem is harder than checking the proof, formulating a strategy is harder than evaluating it after the fact. AI is reversing this relationship. When generation becomes cheap or even free, **verification** becomes the true bottleneck.

Generative AI's penetration differs **markedly** in speed and depth across occupational fields. In software engineering, **AI coding** assistants are already deeply embedded in development workflows; automation of code generation, testing, and debugging keeps climbing, and the programmer's role is rapidly changing. Meanwhile, in strategy consulting, public relations, psychotherapy — fields equally dependent on **language** and **cognition** — AI plays mostly a supporting role. Task complexity alone cannot explain this divergence, since programming and strategy consulting have no clear ranking in complexity.

Behind this divergence lies a mechanism long neglected by labor economics: **whether evaluation and error-correction can be institutionalized at scale.** This essay summarizes that difference as task verifiability and attempts to operationalize it into a measurable index.

## Verifier's Law

Understanding this mechanism requires returning to the technical roots of how AI capability evolves. Jason Wei's (2024) **"Verifier's Law"** states: the speed at which AI improves on a task is proportional to how cheaply, quickly, and scalably that task's output can be verified.

The core logic is that AI progress relies on an iterative loop of "generate, check, improve" (the basic idea of **reinforcement learning**). The model generates an output, a verifier evaluates it, and the model adjusts its parameters accordingly. The efficiency of this loop depends entirely on the quality and cost of the verifier. Formally, this can be stated as a concise proposition: given a sufficiently good **verifier**, AI capability on the corresponding task converges rapidly to human level and beyond; tasks lacking verifiers constitute a structural bottleneck for AI capability expansion.

AlphaGo surpassed all human players fundamentally because Go has a **perfect verifier**: the rules define victory unambiguously, judgment is instantaneous, and the cost is zero — so AlphaGo could iterate rapidly through millions of self-play games. AI progress in **code** generation is similarly fast, because compilers and unit tests form a cheap automated verification system — the code either runs or it errors, with immediate, unambiguous feedback. **Mathematical proof** is similar: every step of a proof can be formally checked, and proof assistants such as Lean let AI train inside a highly deterministic feedback loop. The common feature of these domains: verification cost approaches zero, verification speed approaches instantaneous, and verification results are highly objective.

By contrast, the quality of a **corporate strategy** may take **years** to reveal itself, confounded all the while by market conditions and competitors' behavior. The effectiveness of **psychotherapy** depends on improvements in the client's inner experience — a process that is highly personal and resistant to standardized evaluation. In these domains the issue is not that AI isn't smart enough yet; it is that at the ontological level there is no single correct answer for an algorithm to capture. The **correctness** of strategic decisions, value judgments, aesthetic taste, and ethical trade-offs is constructed by human consensus, culture, and power relations. This constitutes a structural boundary of AI capability.

The principle is general. It explains why AlphaGo exists but an AlphaStrategist cannot, and it predicts that the frontier of AI capability is set not by compute or data volume, but by the feedback structure of the task environment.

## Existing Research

With Verifier's Law in view, a key limitation of existing AI labor-market research becomes visible.

Eloundou et al. (2024), *GPTs are GPTs*, published in *Science*, is the milestone in this area. The study assessed how much each occupational task in the O\*NET database would be affected by LLMs, constructed an **LLM exposure** measure, and found that about 80% of the U.S. workforce has at least 10% of tasks affected, with higher exposure among high-income white-collar occupations. Earlier, Frey and Osborne (2017) predicted that 47% of U.S. jobs face high automation risk, and Autor, Levy and Murnane (2003) established the classic **routine/non-routine** framework for understanding technological substitution.

These works offer valuable insight but share an implicit assumption: **treating AI as a tool with a fixed capability frontier.** Measure what AI can do, measure what an occupation requires, and the overlap is **exposure**. Yet the most essential feature of contemporary AI is that **it is a learning system capable of self-improvement**. Exposure measures AI's capability at a point in time, but fails to answer the more important dynamic question: on which tasks will AI break through rapidly, and on which will it remain persistently blocked?

Verifiability is precisely the variable that answers this question. It does not measure AI's current capability; it predicts the **growth rate and ceiling** of AI capability. High-verifiability domains (mathematical proof, code generation, board games) are the fast lane of exponential AI improvement. Low-verifiability domains (strategy consulting, psychotherapy, artistic creation) are the speed bumps — not because the tasks are inherently harder, but because there is no feedback signal good enough to drive the learning loop.

Combining exposure with verifiability yields a more complete analytical framework: exposure answers "what can AI do now," verifiability answers "how fast will AI get better." Their intersection defines four sharply different occupational fates.

## Constructing the TVI

To operationalize the framework, this study constructs a **Task Verifiability Index (TVI)**, decomposing task verifiability into five dimensions:

- **Objectivity**: whether a quality standard exists independent of subjective preference. Mathematical computation has a unique correct answer (5 points); the artistic value of poetry does not (1 point).
- **Velocity**: the time required for one round of verification. Code compilation gives feedback in seconds (5 points); the value of basic research may take years to verify (1 point).
- **Scalability**: whether the verification process can be automated cheaply at scale. Unit tests scale indefinitely (5 points); expert review does not (1 point).
- **Signal-to-Noise Ratio**: the extent to which the verification signal reflects true quality. The outcome of a chess game reflects playing strength perfectly (5 points); sales figures reflect sales strategy but are confounded by market noise (3 points).
- **Feedback Density**: how frequently feedback arrives during task execution. A navigation system corrects continuously (5 points); a novel may receive systematic feedback only upon completion (1 point).

Each dimension is scored 1–5. The objects of scoring are the Detailed Work Activities for each occupation in the O\*NET database — the same task set Eloundou et al. (2024) used for their exposure measure. This study uses **GPT 5.2** to score every task on the five dimensions. The reason for choosing an LLM over human annotation is scale: the database contains thousands of tasks, each needing independent scores on five dimensions, spanning domain expertise from surgery to financial analysis to early-childhood education. Eloundou et al. (2024) themselves showed high agreement between GPT-4 annotations and human annotations.

Following the same weighting scheme as *GPTs are GPTs* (core tasks weighted 1.0, supplemental tasks 0.5), task-level TVI is aggregated to the occupation level, ultimately covering 923 U.S. occupations.

## The Analytical Framework

Placing TVI and LLM exposure in the same coordinate system, the 923 occupations naturally fall into four quadrants (split at the respective medians), each corresponding to a distinct mode of AI impact.

**Figure 1: Task Verifiability vs. LLM Exposure (923 U.S. occupations)**

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/tvi_exposure_gamma_scatter.png)

#### **The Displacement Zone (high verifiability + high exposure, 103 occupations)**

Typical examples include word processors and typists (TVI = 4.28, E = 0.94), data entry keyers (TVI = 4.12, E = 0.91), tax preparers (TVI = 3.63, E = 1.00), as well as computer programmers (TVI = 3.66, E = 0.97) and network systems administrators (TVI = 3.62, E = 0.89). What these occupations share: outputs that suit LLM processing and can be verified programmatically. Whether a document transcribes the source accurately, whether data entered the system correctly, whether code passes the tests — all have objective right-or-wrong standards. This is where AI most easily upgrades from "assistant tool" to "autonomous system"; the technical and organizational conditions for end-to-end automation are most mature.

Notably, O\*NET's split of "computer and software" occupations reveals a meaningful distinction. **"Computer Programmers" (15-1251)** have a TVI of 3.66 and fall in the displacement zone, because the core output of programming tasks (code) can be verified automatically by compilers, test suites, and static analysis. **"Software Developers" (15-1252)** have a TVI of only 3.23 and fall in the premium zone, because software development's core tasks include architecture design, requirements analysis, and technology selection — steps with markedly higher verification costs. Two roles in the same industry face starkly different automation prospects because of differences in task verifiability. This distinction validates the TVI framework's resolution and offers a precise entry point for understanding differentiation inside the tech industry.

#### **The Premium Zone (low verifiability + high exposure, 359 occupations)**

Management analysts (TVI = 3.10, E = 0.90), financial quantitative analysts (TVI = 2.92, E = 1.00), writers (TVI = 3.06, E = 0.93), video game designers (TVI = 2.94, E = 1.00), chief executives (TVI = 2.44, E = 0.67) — a large mass of knowledge workers concentrates here. It is the largest of the four quadrants and the key to understanding labor-market change in the AI era. In these occupations the LLM is a powerful productivity tool, quickly producing report drafts, alternative proposals, and data analyses — but the quality of these outputs is hard to verify automatically. The merit of strategic advice may only be verifiable years later; whether an analytical report's judgment is sound is confounded by countless external factors. Under the current economic and legal system, AI has not yet appeared as the bearer of final responsibility, and organizations cannot fully surrender final decision rights to AI. This quadrant will therefore see a pronounced **"verifier premium"**: once generation becomes cheap, the human judgment that can tell good output from bad becomes scarcer and more valuable.

#### **The Robotics Zone (high verifiability + low exposure, 359 occupations)**

Packaging machine operators (TVI = 4.39, E = 0.08), mail sorters (TVI = 4.36, E = 0.15), electricians (TVI = 3.73, E = 0.44). These occupations have objective, clear verification standards (is the product up to spec, is the wiring correct, does the equipment run), but their core bottleneck is physical manipulation, which LLMs cannot touch. This domain faces long-run substitution pressure from traditional automation and embodied intelligence — a longer timeline, but potentially more thorough substitution once achieved. Physical-task automation has been underway for over two centuries since the Industrial Revolution (Autor, Levy and Murnane, 2003); the arrival of LLMs has not accelerated it.

#### **The Moat Zone (low verifiability + low exposure, 102 occupations)**

Marriage and family therapists (TVI = 2.56, E = 0.26), clergy (TVI = 2.63, E = 0.38), mental health counselors (TVI = 2.66, E = 0.42). These occupations neither center on text/information processing, nor can their service quality be evaluated without high subjectivity and context-dependence. Whether psychotherapy works, whether a religious ceremony moves its participants — such judgments rest on irreducible person-to-person experience. Direct AI substitution here is nearly impossible in the short term; penetration happens indirectly through peripheral tools like scheduling optimization and information retrieval.

**Figure 2: Mean TVI and LLM exposure by major occupational group**

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/occupation_group_comparison.png)

Viewed by major group, "Computer and Mathematical" has the highest LLM exposure (0.94) with middling-to-low TVI (3.30), straddling the premium and displacement zones; "Business and Financial" likewise has high exposure (0.85) and low TVI (3.18) — the heartland of the premium zone. "Production" and "Construction and Extraction" have the highest TVI (4.00 and 3.81) and the lowest exposure (0.17 and 0.11) — the classic robotics zone. Cognition-intensive industries and physical-operation industries form a clean mirror-image distribution on these two dimensions. Worth attention is "Community and Social Service" (TVI = 2.79, E = 0.52), the lowest TVI of any major group — a direct reflection of how hard interpersonal services are to evaluate.

## Implications for the Labor Market

The diffusion of generative AI is manufacturing a new kind of occupational divergence along the dimension of verifiability. In high-verifiability domains, AI is moving quickly from assistant to autonomous executor; in low-verifiability domains, AI is widely used yet remains, long-term, in the "copilot" seat.

Since the Industrial Revolution, the worker's role has continually shifted from **executing tasks** to **supervising tasks** (Autor et al., 2003). Factory automation moved humans from manual labor to production oversight; accounting software moved professionals from raw computation to strategy identification. In both cases, humans remained responsible for the quality of the final product, and the technical knowledge to identify and repair errors stayed indispensable. Generative AI is extending this historical pattern at unprecedented scale and speed.

The analysis yields several concrete propositions at the policy and organizational level.

**Verification infrastructure is a precondition for automation.** The critical work in a firm's automation push is often not adopting a stronger model, but building a verifiable process environment: standardized operating procedures, test-case systems, and data-quality controls. The success of a law firm adopting AI-assisted contract drafting depends more on the maturity of its compliance-review process than on the model's linguistic prowess. Verification systems and audit mechanisms are themselves a form of **infrastructure** that determines whether model output can become a reliable factor of production.

**The value of human capital is being reallocated.** In the premium zone, the skill of "being able to generate" is compressed by AI while the skill of "being able to judge" is amplified. The junior analyst's ability to draft a research report is depreciating; the senior analyst's ability to spot a flawed framework is appreciating. This trend will squeeze entry paths into parts of knowledge work while raising the premium on "verifier-type" experts.

**Public policy should focus on increasing society's supply of verification capacity.** Standard-setting, evaluation tools, liability rules, and auditor training — these seemingly technical "infrastructure" investments in fact determine where AI can be deployed safely and deeply. Progress in medical AI depends to a great extent on the maturity and fit of verification institutions: clinical trials, ethics review, and regulatory approval.

Polanyi's concept of **tacit knowledge** takes on new meaning in this context. Knowledge that resists codification — experienced judgment, situational intuition, the implicit sense of "what good looks like" — is precisely the core element of low-verifiability domains, and precisely the capability AI currently finds hardest to acquire. The main axis of future occupational divergence may increasingly run along verifiability.

## Postscript

- This essay grew out of reading **Jason Wei's** blog post; it took ages, and I figured I shouldn't drag it out any longer — so here's a first cut. The text is AI-generated; beware of hallucinations;
- If you have any comments or suggestions, please leave a message or DM me;
- For the past six months I've often felt a strong sense of **meaninglessness**. In the face of strong AI, what can the humanities and social sciences do — besides rushing out a few more papers and selling courses while the window lasts?

## References

Acemoglu, D. (2025). The Simple Macroeconomics of AI. *NBER Working Paper*, 32487.

Autor, D. H., Levy, F., & Murnane, R. J. (2003). The Skill Content of Recent Technological Change: An Empirical Exploration. *The Quarterly Journal of Economics*, 118(4), 1279–1333.

Brynjolfsson, E., & Mitchell, T. (2017). What can machine learning do? Workforce implications. *Science*, 358(6370), 1530–1534.

Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2024). GPTs are GPTs: Labor market impact potential of LLMs. *Science*, 384, 1306–1308.

Frey, C. B., & Osborne, M. A. (2017). The future of employment: How susceptible are jobs to computerisation? *Technological Forecasting and Social Change*, 114, 254–280.

Polanyi, M. (1966). *The Tacit Dimension*. University of Chicago Press.

Wei, J. (2024). Asymmetry of verification and verifier's law. *Jason Wei's Blog*.
