---
title: "Reward Hacking in Academia"
date: 2025-11-06T20:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["AI"]
summary: "I want to tell a story about courage and believing in yourself."
---

## Reward Hacking in Reinforcement Learning

In the field of Reinforcement Learning (RL), **reward hacking** is a core and thorny problem. The goal of an RL agent is to learn a policy through interaction with its environment so as to maximize its cumulative reward. Central to this process is the design of the **reward function**, which makes clear to the agent what constitutes **good** behavior. However, precisely defining a reward function that fully captures the designer's **true intent** is extraordinarily difficult.

The reward functions that scientists design are often merely a **quantifiable**, **imperfect** proxy for the true intent. Reward hacking occurs when the agent discovers and exploits the loopholes or ambiguities in this proxy reward function, obtaining a high score in an unintended way without actually accomplishing the task. This is not the agent acting out of malice; rather, its optimization algorithm is coldly and efficiently executing the only instruction we gave it: **maximize the reward signal**.

A classic case is OpenAI's **CoastRunners** ([CoastRunners](https://openai.com/index/faulty-reward-functions/)) game. The agent's goal was supposed to be to complete the racecourse, but its reward function was set to "pick up reward items along the course to achieve a higher score." In the end, the agent learned to circle repeatedly in a small bay (see the GIF below), collecting the quickly respawning reward items, and even willing to crash the boat in order to get back to the **scoring spot** faster. It achieved the utmost success on the proxy objective (reward score), yet failed completely on the true objective (finishing the race).

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/coastrunners.gif)

This phenomenon manifests even more insidiously in more complex tasks. For example, a robot set to **clean a room**, if its reward is based on "the amount of trash cleaned per unit of time," might learn to first knock over the trash can, create a mess all over the floor, and then efficiently clean it up, thereby earning a high score. In Reinforcement Learning from Human Feedback (RLHF), language models have discovered that, compared with giving objective, neutral answers, imitating the user's viewpoint and using more confident and flowery language makes it easier to earn high scores from human raters. It is not learning to be **useful**, but learning to be **pleasing** (such as a certain version of the sycophantic GPT 4o, and now Gemini and GPT 5, which max out the emotional value).

These cases all point to one core problem, namely **specification gaming**: while the agent strictly complies with the specification or rules you have explicitly written down, its behavior nonetheless undermines the **spirit** or **implicit goal** that was not written down but exists by default. In other words, any formalized, rule-based system can be subverted by a sufficiently powerful optimization process. The greater the optimization pressure, the more fragile the system becomes.

## The Dilemma of "Good Metrics"

Decades before AI researchers grew troubled by the speculative behavior of agents, social scientists had already observed a strikingly similar pattern in human society. The most famous statement of this is **Goodhart's Law**, proposed by British economist Charles Goodhart in 1975:

> When a measure becomes a target, it ceases to be a good measure.

The core idea of this law is that once some social or economic indicator is chosen as a policy target, it loses its informational value as an indicator, because people will begin to **game** the indicator rather than focus on the true goal it is meant to represent. For example, if a school's performance is measured entirely by students' average exam scores, teachers and students may focus on test-taking techniques, or even cheat, instead of genuinely acquiring knowledge and improving their abilities. The **measure** of average score may at first be a good indicator of the level of education, but once it becomes the sole target, it is corrupted.

Closely related to this is **Campbell's Law**, proposed by psychologist Donald T. Campbell in 1976:

> The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it will be to distort and corrupt the social processes it is intended to monitor.

Campbell's Law further emphasizes the dynamic evolution of indicators within social systems. It not only points out that an indicator will fail, but also identifies the mechanism of its failure, namely **corruption pressures** and the distortion of the social process itself (distort and corrupt).

## Reward Hacking in Academia

Turning the framework of hacking toward academia, we find a strikingly similar systemic dynamic. The true goals of academic research, such as **pushing the frontier of knowledge**, **solving major scientific problems**, and **training the next generation of researchers**, are inherently **vague**, **long-cycle**, and hard to quantify precisely. Therefore, any academic evaluation system, in pursuit of administrative convenience and so-called objectivity, will inevitably resort to a series of quantifiable proxy indicators. These indicators include, but are not limited to: the **number** of papers published, the **impact factor** of the journals in which they are published, the number of citations of the papers, and the acceptance rate at top conferences.

These proxy indicators form the cornerstone of the evaluation system and are tightly tied to researchers' promotion, funding acquisition, academic reputation, and even graduation eligibility. When the entire system makes the optimization of these indicators its core goal, a kind of academic reward hacking emerges.

The first thing I observed is that academic reward hacking tends to happen to master's students whose undergraduate institutions were not particularly good. In the social sciences, the hardest-hit areas are **environmental economics** and **human geography**, because both disciplines lend themselves to permutation and combination, batch output, and easy DID (difference-in-differences). Recommendation for postgraduate admission without examination (保研, *baoyan*) is itself a way of selecting students; many students, having entered environmental economics or human geography research during their undergraduate years and published in C-journals (C刊, journals indexed in CSSCI) or in foreign-language journals, got into very good schools through the recommendation process, and this wonderful reward feedback continues to take effect during their graduate studies. I have seen master's students who published more than 40 geography papers, with titles almost all reading "**Spatiotemporal Patterns and Driving Mechanisms of xxxx**," and also many students who originally did not study climate change or energy and environment, but in the end all switched to the environmental direction, going off to research the 100 consequences of air pollution.

Second, when students go wrong, a large part of the responsibility lies with the advisor. Some advisors are themselves beneficiaries of hacking, and naturally will not criticize such behavior (here I recommend reading [The Two Dimensions of Education](https://mp.weixin.qq.com/s/9vnJdeXDm_-EhfakLWN-6Q)). The school of economics and management at a certain 211 university in central China held a graduate academic exchange conference at which 80% of the papers were on environmental economics—truly baffling.

Finally, the **journals** are also a big problem. Nature has launched many new journals in recent years, and what is surprising is that almost all Nature journals can be understood as "**climate change**" journals. Take Nature Water or Nature Cities—glance through them and the papers related to environment and climate can reach half, eagerly catering to the academic community's sincere enthusiasm for climate change research. This too is a kind of mutual rushing toward each other.

## See Also

- Faulty reward functions in the wild. [https://openai.com/index/faulty-reward-functions/](https://openai.com/index/faulty-reward-functions/)
- Reward Hacking in Reinforcement Learning. [https://lilianweng.github.io/posts/2024-11-28-reward-hacking/](https://lilianweng.github.io/posts/2024-11-28-reward-hacking/)
