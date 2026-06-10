---
title: "A Clever DID+RCT: Using Second-Person Pronouns in Responses to Reviewers More Likely Elicits 'Goodwill'"
date: 2024-02-07T10:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "DID"]
summary: "Using differences in pronoun use and reviewer feedback to construct a DID design, the study finds that authors who address reviewers with second-person pronouns ('you') receive fewer issues, shorter replies, and more positive feedback."
---

> By leveraging the **difference** in personal pronoun use in authors’ replies to reviewers and the **difference** in reviewers’ feedback, the authors construct a DID (difference-in-differences) design and find that authors who addressed reviewers using second‑person pronouns (“you”) received comments with fewer questions, shorter replies, and more positive feedback. The mechanism is that conversations that use “you” are perceived as more personal and elicit greater engagement.

**Title:** Behavioral consequences of second‑person pronouns in written communications between authors and reviewers of scientific papers

**Journal:** Nature Communications

**Online:** 2 January 2024

<br/>

**Gaps:** A fair amount of research exists on the use of the second‑person pronoun “you.” For example, using “you” can draw the addressee’s attention and increase engagement with the topic, and “you” also functions to norm behavior and enhance persuasiveness. However, such studies have mostly concentrated on one‑way, one‑off communications or have been confined to intimate relationships; research on the use of “you” in multi‑party, dynamic, non‑intimate contexts remains limited.

**Aims:** To examine the effect of using “you” on review outcomes using interactions from the peer‑review process of academic journals.

**Data:**  

- Peer‑review materials: Peer review data for all papers published in *Nature Communications* between April 2016 and April 2021, obtained in PDF format, containing reviewer comments and authors’ replies (13,359 papers and 29,144 rounds of review in total). Using techniques from computational text analysis, the following variables are constructed from these review materials:
  - Reviewer sentiment: Positivity + negativity – four indicators in total, three analyzed using Python or R packages, one using word frequencies constructed via a dictionary approach.
  - Use of first‑person singular pronouns: Frequencies of *I*, *me*, *my*, and *mine*.
  - Word complexity: Mean number of syllables per word in the reviewer comments.
  - Reviewer engagement: Topic equity calculated via LDA.
- Other variables:
  - Number of references
  - Title length
  - Number of authors
  - First author’s *h*-index
  - First author’s gender
  - First letter of first author’s surname
  - Authors’ positivity and friendliness during the first round of review
  - Reviewers’ positivity during the first round of review
  - Month and year of paper publication
  - Disciplinary category of the article
- Behavioral RCT: A **randomized, double‑blind controlled experiment** with 1,601 participants. Participants were asked to assume the role of a reviewer and read authors’ reply letters. Experimental and control groups were distinguished by whether the second‑person pronoun was used. Finally, participants evaluated the degree of engagement and the personalness of the “conversation” with the author.

**Identification strategy:**  

![Fig. 1](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/41467_2023_44515_Fig1_HTML.png)

The DID strategy of this paper is quite ingenious; its peer‑review file shows that the reviewers also spoke highly of this approach!

 Pre‑treatment trends in the DID: Reviewers deliver their comments based on only the manuscript, which “guarantees” that no systematic difference exists between the two groups ex ante (parallel trends cannot be tested; the authors use PSM, a Heckman‑style model, placebo permutation tests, and an RCT to help rule out potential ex‑ante problems).

First DID difference: Whether the author addresses the reviewer using the second‑person pronoun “you” in the reply letter – those who did are assigned to the treatment group, the remainder to the control group; the number of queries and related indicators in the reviewers’ next‑round comments are compared between the two groups.

Second DID difference: Reviewers’ feedback on the response letter differs; the number of questions and the associated indicators in each group’s comments are calculated for the two groups following the first‑round exchange.  

**Results:**  

- When authors used the second‑person pronoun “you” in their replies, reviewers’ subsequent feedback contained fewer questions (average treatment effect = ‑3.33 queries) and the reviews were shorter (average treatment effect = ‑135.59 words).

- Feedback received after using “you” was more positive.

- After authors used the second‑person pronoun, reviewers’ use of first‑person pronouns was less prevalent.

- RCT findings: When the word “you” was employed, participants’ evaluations were more positive and the conversation was perceived as more personal and elicited higher engagement ⬇️  

  ![figure 4](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/41467_2023_44515_Fig4_HTML.png)

**Footnote:** The use of pronouns in academic writing is an interesting topic. In papers published by researchers in some countries, I often encounter strictly impersonal formulations—such as “This paper xxx”, “The present study xxx”—that deliberately avoid the first and second person. Graduate advisors, too, routinely emphasize this style when mentoring students. Yet in economics journals and much of the academic literature from other countries, first‑person formulations are commonly seen—for instance, “Here, we introduce xxx” or “I investigate xxx”—from the *AER* to *Nature* and *Science*. Might this reflect some cross‑disciplinary or cross‑regional cultural difference?

**Original paper:**  

Sun, Z., Cao, C.C., Liu, S. *et al.* Behavioral consequences of second‑person pronouns in written communications between authors and reviewers of scientific papers. *Nat Commun* **15**, 152 (2024). https://doi.org/10.1038/s41467-023-44515-1

**P.S.:** The paper had five reviewers – the author crew certainly had their work cut out for them!

![image-20240207092619506](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240207092619506.png)
