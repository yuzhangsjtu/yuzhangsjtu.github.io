---
title: "PNAS - Can Names Shape Facial Appearance? The Self-Fulfillment of Names as Social Labels"
date: 2024-07-22T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "Origin Problem"]
summary: "Over time, a person's facial features gradually come to match the social stereotypes associated with their name."
---

> This paper explores an intriguing phenomenon: whether a person's facial appearance comes to match the social stereotypes associated with their name over time. Specifically, the researchers hypothesize that a person's facial appearance becomes similar to the social stereotype of their name in adulthood, but not in childhood. This phenomenon is called the "**self-fulfilling prophecy effect**."
>
> The study validates this effect through multiple experimental methods, and the results show that names, as a kind of **social label**, can indeed influence our facial appearance. The research also finds that **adults who share the same name have higher facial similarity**.

**Title:** Can names shape facial appearance?

**Journal:** *PNAS*

- <u>Yonat Zwebner</u>: Assistant Professor of Marketing at the Arison School of Business, at the Reichman University. Prior to joining the University, she was a Post-Doctoral Research Fellow at the Wharton School, University of Pennsylvania. She holds a PhD in Marketing from the Hebrew University of Jerusalem.
- <u>Moses Miller</u>: Assistant Professor at the Data Science department at the Arison School of Business, Reichman University.
- <u>Noa Grobgeld</u>: M.A. student in Educational and Clinical Child Psychology, advisors: Dr. Ruth Mayo and Dr. Yonat Zwebner, Arison School of Business, IDC Herzliya.
- <u>Jacob Goldenberg</u>: Professor of Marketing at the Arison School of Business Administration at Reichman University and a visiting professor at the Columbia Business School.
- <u>Ruth Mayo</u>: Social cognitive researcher in the Department of Psychology at the Hebrew University of Jerusalem.

**Online date:** 15 July 2024

<br/>

## Names as Social Labels

**George Orwell** famously said, "At 50, everyone has the face he deserves."

- A name is a social label given to us early in life that accompanies us throughout our lives. In fact, a name is more than a simple identifying symbol; it also carries social stereotypes and expectations, which may influence an individual's behavior, personality, and appearance. For example, a person named "John" may be expected to have certain traits, and these expectations may come to show in his facial appearance through his behaviors and choices (such as hairstyle, makeup, and facial expressions).

- Prior research has shown that people can match the correct name to a face at above-chance accuracy based on facial features, which is known as the **face-name matching effect**. The explanation for this effect is that a name acts as a social stereotype: over time, people internalize these stereotypes and express them in their appearance.

There are two possible mechanisms that could explain the face-name matching effect:

- **Innate matching mechanism**: Individuals are born with certain facial features that make their names match their faces. According to this mechanism, a name is given based on the infant's facial features; that is, the person naming the baby (usually the parents) assigns a particular name according to the baby's facial features. This mechanism emphasizes the role of **biological factors** in the face-name match.
- **Self-fulfilling prophecy mechanism**: An individual's facial appearance gradually comes to match the social stereotype of their name over time. This mechanism emphasizes the role of **social factors** in the development of an individual's facial appearance.

This study hypothesizes that adults' faces will match the social stereotypes of their names, whereas children's will not. The researchers designed experiments in which participants matched the faces of adults and children to their names, and used machine learning algorithms to analyze the facial image data.

The results show that both adults and children were able to accurately match adults' faces to their names, but could not accurately match children's faces to names. In addition, processing the facial image data with machine learning methods revealed that adults sharing the same name have more similar facial features than adults with different names, while no such similarity exists among children. This pattern also appeared in children's facial images that were aged by artificial intelligence, supporting the role of social development in this effect. The findings indicate that names, as a social factor, can indeed influence our facial appearance, confirming the powerful impact of social expectations.

## Experiments

**Experiments 1 and 2: Can people correctly guess the names of adults and children based on facial features?**

Experiments 1 and 2 followed identical procedures, differing only in the source of the facial images used. The children's facial images in Experiment 1 came from an existing **twin dataset**, while the adult and child data in Experiment 2 came from the same conventional dataset.

The researchers had participants (including both children and adults) look at photos of adults and children, then choose from four name options which one was the real name of the person in the photo, as shown in the figure below ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722143235276.png)

**Experiment 3: Using a computer to verify the face-name match**

To eliminate human perceptual bias, the scientists used an algorithm called a "Triplet Loss Siamese Neural Network" to compute the similarity of facial features across different categories (i.e., names). The images were split into a training set and a test set: the training set was used to train the neural network, and the test set was used to evaluate the model's performance. In short, Experiment 3 set out to test whether people with the same name have more similar facial features!

**Experiment 4: Simulating what children will look like when they grow up**

Using generative adversarial network (GANs) technology, children's facial images were digitally aged to generate adult facial images. Participants were asked to match these artificially generated adult faces to names, and the results were compared with the matching results for real adult facial images. The same Siamese Neural Network architecture was also used to assess the similarity of the artificially generated adult facial images, and the results were compared with those for real adult facial images.

## Results

- Experiments 1 and 2 showed that both adults and children could match adults' faces to their names at rates significantly above chance, while neither could match children's faces to their names at rates significantly above chance. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144136067.png)![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144207227.png)
- The results of Experiments 1 and 2 imply that adults' facial features come to match the social stereotypes of their names over time, whereas children's facial features do not yet show such a match with name stereotypes. At the same time, even children can recognize the match between adults' faces and their names.
- The visualization in Figure 4 shows that, when processing facial images, the Siamese neural network can effectively classify and cluster facial feature vectors according to name. Facial images sharing the same name show higher similarity and tighter clustering in the feature space, while facial images with different names are effectively separated. This supports the study's hypothesis that a certain matching effect exists between names and facial features, and that it is especially pronounced in adult facial features. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144540451.png)
- Going further, Experiment 3 compared the Similarity Lift of adult and child facial images: in adult facial images there was a significant matching relationship between names and facial features, whereas no such matching relationship was found in children's facial images. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722144903939.png)
- Experiment 4 showed that participants could accurately match natural adults' faces to their names, but could not accurately match **artificially aged** adult faces to names. This indicates that the face-name matching effect depends mainly on the natural process of growing up, rather than on mere biological aging. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722145729256.png)![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722145745715.png)

## Conclusion

- Basic results: when people matched names to photos, only adults' faces were found to match their names; children's were not. The computer-algorithm experiments also supported this result. Going further, the researchers simulated children's faces as they would look when grown up and found that these "**future faces**" could not be matched to names, further proving that the influence of names on facial appearance is **social** rather than purely biological.
- These studies show that names, as a kind of social label, gradually shape our facial appearance through long-term social expectations and self-identification.
- Future work could further explore the sources of name stereotypes and the extent to which these stereotypes influence an individual's facial appearance. Research could also examine which social and individual factors may affect the development of the face-name matching effect.

## Extra

- In 2017, the author team published a paper, We Look Like Our Names: The Manifestation of Name Stereotypes in Facial Appearance, which confirmed the existence of the **face-name matching effect**;
- This PNAS article explores in depth the origin of the "**face-name matching effect**", namely that a name, as a social label, can be self-fulfilling;
- It is often said that the face springs from the heart (相由心生); this article suggests that the self-fulfilling effect of names may have shaped a person's inner self?
- This paper took only three months from submission to acceptance;
- Does your name carry any special meaning? Are you consciously becoming the person your name implies?

## Original Article

Zwebner, Yonat, Moses Miller, Noa Grobgeld, Jacob Goldenberg, and Ruth Mayo. "Can names shape facial appearance?." *Proceedings of the National Academy of Sciences* 121, no. 30 (2024): e2405334121. https://doi.org/10.1073/pnas.2405334121

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240722102954056.png)
