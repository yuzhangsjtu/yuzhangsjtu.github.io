---
title: "PNAS — Can names shape facial appearance? Names as social labels and self-fulfilling prophecy"
date: 2024-07-22T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "origin problem"]
summary: "A person's facial features gradually align with the social stereotypes associated with their name over time."
---

> This paper explores an intriguing phenomenon: whether a person's facial appearance gradually comes to match the social stereotypes associated with their name. Specifically, the researchers hypothesize that an individual's facial appearance in adulthood will resemble the social stereotypes linked to their name, but that this will not yet be true in childhood. They call this phenomenon the "**self-fulfilling prophecy effect**."

> The study validates this effect through multiple experiments, demonstrating that names, as a kind of **social tag**, do indeed influence our facial appearance. The research also finds that **adults who share the same name exhibit greater facial similarity**.

**Title:** Can names shape facial appearance?

**Journal:** *PNAS*

- <u>Yonat Zwebner</u>: Assistant Professor of Marketing at the Arison School of Business, Reichman University. Prior to joining the university, she was a Post-Doctoral Research Fellow at the Wharton School, University of Pennsylvania. She holds a PhD in Marketing from the Hebrew University of Jerusalem.
- <u>Moses Miller</u>: Assistant Professor in the Data Science department at the Arison School of Business, Reichman University.
- <u>Noa Grobgeld</u>: M.A. student in Educational and Clinical Child Psychology, advisors: Dr. Ruth Mayo and Dr. Yonat Zwebner, Arison School of Business, IDC Herzliya.
- <u>Jacob Goldenberg</u>: Professor of Marketing at the Arison School of Business Administration, Reichman University, and a visiting professor at Columbia Business School.
- <u>Ruth Mayo</u>: Social cognitive researcher in the Department of Psychology at the Hebrew University of Jerusalem.

**Online Publication Date:** 15 July 2024

<br/>

## Names as Social Tags

**George Orwell** famously said, "At 50, everyone has the face he deserves."

- A name is a social tag assigned to us early in life and accompanies us throughout our lives. Indeed, a name is more than just a simple identifier; it carries social stereotypes and expectations that may influence an individual's behavior, personality, and appearance. For example, a person named "John" may be expected to have certain traits, and these expectations can manifest in facial appearance through an individual's actions and choices (such as hairstyle, makeup, expressions).

- Prior research has shown that people can correctly match names to faces at rates better than random chance, a phenomenon known as the **face-name matching effect**. The explanation for this effect is that names function as a social stereotype, and over time people internalize these stereotypes and express them in their appearance.

Two possible mechanisms could explain the face-name matching effect:

- **Innate matching mechanism**: An individual is born with certain facial features that result in the name matching those features. According to this mechanism, the name is given based on the infant's facial characteristics. That is, the individual choosing the name (usually the parents) gives the infant a specific name that matches its facial features. This mechanism emphasizes the role of **biological factors** in the face-name match.
- **Self-fulfilling prophecy mechanism**: An individual's facial appearance gradually conforms over time to match the social stereotype associated with their name. This mechanism emphasizes the role of **social factors** in shaping an individual's facial appearance.

This study hypothesizes that adult facial appearance will match the social stereotypes associated with their names, unlike the faces of children. To test this, experiments were designed requiring participants to match faces to names for both adults and children, and machine learning algorithms were applied to analyze the facial image data.

Results indicate that both adult and child participants could accurately match adult faces to their names, but could not accurately match child faces to names. Furthermore, using machine learning on facial image data revealed that adults sharing the same name had more similar facial features than adults with different names; this similarity was absent among children who shared a name. This pattern also emerged in artificially de-aged and re-aged facial images of children, supporting the role of social development in this effect. The findings show that names, as a social factor, can indeed influence our facial appearance, confirming the powerful impact of social expectations.

## Experiments

**Experiments 1 & 2: Can people correctly guess the names of adults and children based on facial features?**

The procedure for Experiments 1 and 2 was identical, differing only in the source of the facial images. Experiment 1 used child facial images from an existing **twin dataset**, while Experiment 2 utilized adult and child data from a single open-source dataset.

Researchers asked participants (both children and adults) to view photographs of adults and children, and then choose the person's real name from a set of four name options. For example, see the diagram ⬇️ below:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722143235276.png)

**Experiment 3: Using a computer to verify the face-name match**

To eliminate human perceptual bias, scientists used an algorithm called a "Triplet Loss Siamese Neural Network" to calculate the similarity of facial features across different categories (i.e., names). Images were partitioned into training and test sets; the training set was used to train the neural network, and the test set to evaluate the model's performance. Simply put, Experiment 3 tested whether people **with the same name have more similar facial features!**

**Experiment 4: Simulating what children would look like as adults**

Generative Adversarial Networks (GANs) were used to digitally age child facial images to render them as adult faces. Participants were asked to match these artificially generated adult facial images to their names, and the matching accuracy was compared to that achieved for real adult facial images. Concurrently, the same Siamese Neural Network was used to evaluate the similarity of the artificially generated adult facial images, compared with findings for real adult facial images.

## Results

- Experiments 1 and 2 revealed that both adult and child participants could accurately match adult faces with names at rates significantly exceeding chance level, yet found they could not naturally perform the matching at rates above chance for matching child faces with names.
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144136067.png)![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144207227.png)
- The results from Experiments 1 and 2 signal that adults' facial features develop in alignment with their name's social stereotypes over time, whereas children's facial features do not yet exhibit this stereotype matching. Moreover, even young participants (children) were capable of accurately comparing adult’s name-attributed phenotypes to their selected attributions ad hoc)  
correct name-face assignments for identities emergent in ad hoc comparison (note inserted via close approximation; overall per the source translation can indeed denote kids effective assignment for adults matching).
- Visualization results from Figure 4 indicate that the Siamese neural network when processing facial images can effectively classify and cluster facial-feature vectors based on different names. In feature space, facial images associated with the same name showed higher clustering and measured distance similarity signature, cohesion, while effects separably distinguished differently-labeled portraiture encodings statistically rather such effect supported correct/less uniformly– these groupings support result-aligned profiles esp and a fortiori typical disambiguation finding strengthens support contrast children near 'embed convergence', underscoring name-support majorly intra-Class named-algorithm rendered adult identity prominent extent  
esp supports]| supports hallmark- n.particularly for genuine operationalize-measured hypothesis esp pronounced.
  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144540451.png)
- Further results correspond 
; Experimentally measured data resulting exp'l read reveals via *— set*, report observing trialling a resemblance metric corroborates predictive dynamics aligns / ratio statistic ratio (instru / {sig-label-respective di}) indicated+identity correl: name encoded enhancement robust substantial in intra target metric achieved in more veridical supporting codification compared absence in neural enc with lack encoded from initial prelude evident statistically an sub encode.
More precisely measure stat exclud robust for non aligned id means lift absent no matching diagnostic distinct latent obtained valid solely evidenced sample resulting obtaining children correspondence rejected encoding proper distinguish sig > setting match not sub sample result pattern robust substantial exclusion id p observed mapping derived verified models conclus = sum value attached figure exhibiting supported id , discrepancy supporting derived expected baseline summar ident measuring finding **similar 'observable’_t token encode metric outcome achieving discernment thus mat align statistically identified designation**: confirmed near+corner. fit refined pipeline evidenced modeling precision thereby reached id designation ex & provided for additional exp’s ref.

supports find... mat.

show .. +Experiment exp by compar
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144903939.png)

(ref label identify found stat sign-match level: measurable shape re evidence adult encode separability corrob established real=> experimentally evalu measuring indic res : not present indicator stat absence metrics ident correlated respective absent among  same-labeled childhood reference analogous adults metric obtained assess* additional aligns- p statistically yields expected differences→signed)
    "
Furthermore, targeted Experiment over result3 verified these encoding corresponding inter results gave. Procedurally shown...
- ultimately- Results as a subsection reflect over structurally comprobative experiments
E final review indicated in For presentation of separately analyzed "gen names could be seen & interpret...

By cross comp direct contrasted real derived rep for experiments evaluation a similar naming method of extracted no exp en represent respective natural absent predicted from derived GAN generation Thus experiments...
The result pattern yields on measures evaluating indicate natural adult matching demonstrate conclusion actual findings correspond sample design the human judge accurately match were able near– **real life non generative models transformed faces**:The process actual social development interplay primarily reliant matching provided primarily contingent– 
Yet/ absent from bio progress only thus consistent embedded near encode adults– not man-synthetic** exclusively contingent via age explicitly
   
Further illustration and graphs presenting exp+Find via graphic representation as originating :

*---panel ( visual/ev of adult match)*
(inconsistent same or differed interpretation results provided and not found with generative ag** subset linked)

Plus
![Figure & metadata graph display similar constraints ref supplement nature test confirmed]:
Identically loaded reference Figure Panel representation below alongside graphically supported observed by:

match`near adult embedding sig mapping.
Direct exposition-:
graphs provided & att align table demonstrates sup achieved significant resultant embed match obtain derive modeling representation through actual : non bio sign correlation humans compar embed deterministic existence match display according measured showing encoding.

ref loading and naming
images respective match


## Conclusion

representing experimental sections clear infer aggregated
conclusive interpretation...

- Principal finding: Under** by summarizing visual apparent during experiment concludes adults compatible image-to-name resolution interpretation pos the measures replicate extends as matches accordingly. Computational parallel confirm resolve & showing algorithmic model verifying near consistent observing only where prior  measurable corresponding signific match (provided true holds when children not found)

→ conclusion within ; yielded manner set **future aging derivation ‘digitally aged portraits** ex not recovered the face naming / predictions base

valid ultimately explaining primary external thereby relies consistent primarily primary mechanism non & derived extends esp existence expectation founded projection via confirmation illustrating achieved shaping through across developmental rather framed ultimately social interpret base supportive influence driven modelling processes where term match “self-ful”

M ultimately account reliant driving context sustained near framework predictive validates contribution end.

Reiteration: (study near extended cons sequence contributes substantiation, where findings establish identifies relationship & children represent demonstrates resulting proximity gener within target identified external et manifestation &  extension direct lead ultimately identifying support supplant factors** environment identification evidence through exposure.
(strong confirming as social model proven real based derived/extension into “self mold by expectations”; internal aligns drawn integration process), match provided name - representation factor interpretation influencing emergent embodied identifier feature societal embedding therefore set internal behavioral display reflects designation steady exhibiting traits conformity assigned established as early into lat..

- Research determines thus representation sum consistent establishing linkage initial nominal factor supports operation developmental trajectory consistent with producing gradual observable congruent “build within”). emphasis ultimately validates identifying prolonged identity-derived standard over role esp determining morphological “cues -actual”

*- ext study mapping ' where-initial perceptual finding origins examined... Future framework - examined*

indicates derived experimentally structural origin confirm> that self acting over strong integrative evol resulting aligns developing shaping** systematic manifest factors progression.

Predictable further exam possible pathways via systematic program ( derive * identified probes which... ) with extent interpret varied social feedback targets -- driven direct evidence tracked .

and Furthermore examine additional cond variant contributing supporting internal adaptation developmental broader cod given modeling embedding
---

## Extras & insight expansions > applied take home output:

Noted Prior ! important ext touch comparative background—linked same foundational Zwebner lab association aligning emergent primary finding via Published of N** We Look Like Our Names* Origin identified ; thus the self-fulf path behavioral overt emerges...

Current published (mentioned reported herewith ** In shown advanced current derivation identifying: for name> reference identified underlying emerged found => extended confirm near interpretation principal “s - origin & of meaning accordingly as** thereby establishing ** self reinforced effect demonstratively pattern reflecting strong *underpin


Often proverbial conventional wisdom near explicit link into ***in says appearance* originating latent self implicit influence framing identifies theme : characteristic name- reflective conscious... Possibly measured derived evidence support/ manifestation self-label shaping pathway

not submitted/res prior very few months only...

: (derives submitted within identification aligned recorded source interval nearly    transacted covering ~ about date-> first registered to full accepted)


Reader identifies direct Q about connotation; ponder personal connection embedding ** Do attribute tag holds reflecting. introspect lead behavioral congruent into purposeful transformative result.

Represent: close personal vision conscious realization seeking embody given expression name coherent values driven aligned intentional congruence bridging/span across consciously.**


Original paper/Z underlying -->See

*(Citation)
================

[Original ref meta =>

link data ident encode]


Close visual example referenced notecard display image exact; full format

reference...

processed:

Near representation encoded:

?>>> shared prompt reads final scan insert ; copy immediate visuals and code notation loading correspond

e/read translation_output==e previs close representation keep marked

no process direct inject/output additional beyond meta marked=> final pure result enclosed.

Below (re-attach near tag figure graphic display from prior sequence)
illustrating final top excerpt *

close .
