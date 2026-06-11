---
title: "NC - A Clever DID+RCT: Using the Second Person When Replying to Reviewers Makes You More Likely to Receive 'Goodwill'"
date: 2024-02-07T10:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "DID"]
summary: "Clever DID design +1."
---

> Exploiting the **difference** in personal pronoun use in authors' reply letters to reviewers and the **difference** in reviewers' feedback to construct a DID, the paper finds that authors who address reviewers with the second-person pronoun (you) receive review comments with fewer questions, shorter replies, and more positive feedback. The mechanism is that conversations using "you" feel more personal and involve a higher level of engagement.

**Title:** Behavioral consequences of second-person pronouns in written communications between authors and reviewers of scientific papers

**Journal:** Nature Communications

**Online:** 2 January 2024

<br/>

**Gaps:** There is already a good deal of research on the use of the personal pronoun "you" - for example, using "you" can capture the addressee's attention and increase engagement with the topic, and "you" also has the function of regulating behavior and influencing persuasiveness. But these studies have often focused on one-way, one-off communication, or have been confined to the context of intimate relationships; research on the use of "you" in multi-party, dynamic, non-intimate settings remains limited.

**Aims:** Using the interaction materials of academic journals' peer review, to investigate the effect of using "you" on review comments.

**Data:**

- Peer-review materials: peer-review data for all papers from April 2016 to April 2021, obtained from Nature Communications in PDF format, containing reviewer comments and author replies (13,359 papers and 29,144 rounds of review comments in total). Using techniques from computational text analysis, variables are constructed from these review materials:
  - Reviewer sentiment: positivity + negativity, four indicators in total; three are computed with Python or R packages, and one is built from word frequencies using a dictionary-based method
  - Use of first-person singular pronouns: the number of occurrences of I, me, my, and mine
  - Word complexity: the average number of syllables per word in the review comments
  - Reviewer engagement: derived from topics computed via the LDA method
- Other variables:
  - Number of references
  - Title length
  - Number of authors
  - First author's H-index
  - First author's gender
  - First letter of the first author's surname
  - Author positivity and author friendliness in a round of review
  - Reviewer positivity in a round of review
  - Month and year of the paper's publication
  - Discipline of the article
- Behavioral experiment RCT: a **randomized double-blind controlled trial** with a sample of 1,601, in which participants were asked to play the role of reviewers and read the authors' reply comments. Experimental and control groups were distinguished by whether the second person was used. Finally, participants were asked to evaluate the level of engagement and the degree of personalness of the "conversation" with the author.

**Identification strategy:**

![Fig. 1](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/41467_2023_44515_Fig1_HTML.png)

The DID strategy of this paper is quite clever - looking at its peer review file, the reviewers were also full of praise for this strategy!

Pre-trends of the DID: reviewers give their review comments based on the manuscript, which "guarantees" that there is no systematic difference between the two groups ex ante (parallel trends cannot be tested; the authors use PSM, the Heckman model, permutation tests, and an RCT to help rule out potential ex-ante problems);

The first difference of the DID: whether the author uses the second-person "you" when replying to the reviewers; those who used the second person serve as the treatment group, the rest as the control group; the number of questions and related indicators in the two groups' review comments are calculated;

The second difference of the DID: the reviewers' feedback on the response letter; the number of questions and related indicators in the two groups' comments are calculated.

**Results:**

- When replying to reviewers' comments, using the second-person "you" leads to feedback with fewer questions (average treatment effect of -3.33 questions) and shorter comments (average treatment effect of -135.59 words)

- Replies received after using the second person are more positive

- After authors use the second person, reviewers' use of the first person decreases

- RCT results: when "you" is used, participants' evaluations are more positive, and the conversation is more personal and involves a higher level of engagement ⬇️

  ![figure 4](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/41467_2023_44515_Fig4_HTML.png)

**Extra:** The use of person in writing is an interesting thing. In the literature published by Chinese scholars, I often see them use objective descriptions, such as "this paper xxx" or "this study xxx", avoiding the first and second person. Graduate advisors also often emphasize this point when mentoring students. But in economics and in much of the literature from abroad, first-person expressions appear frequently, such as "Here, we introduce a xxx" or "I investigate xxx" - they can be seen everywhere from AER to Nature and Science. Could this be some kind of disciplinary or regional cultural difference?

**Original paper:**

Sun, Z., Cao, C.C., Liu, S. *et al.* Behavioral consequences of second-person pronouns in written communications between authors and reviewers of scientific papers. *Nat Commun* **15**, 152 (2024). https://doi.org/10.1038/s41467-023-44515-1

**PS:** This paper had 5 reviewers in total; the authors really had it tough, haha.

![image-20240207092619506](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240207092619506.png)
