---
title: "Introducing Two AI Literature Review Platforms"
date: 2024-12-16T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "AI"]
summary: "Struggling with literature review? AI is here to help!"
---

> **Sorting through the literature** is time-consuming, labor-intensive work.
>
> In this post, I will share my experience using **NotebookLM** and **Scopus AI**, and describe how AI can help us reduce the workload of the literature portion of our work.

## NotebookLM

#### **The Need for a Knowledge Base**

In May I published a post, "[Deploying Llama3 Locally and Building a Private Knowledge Base for Q&A](https://mp.weixin.qq.com/s/iGpRRKeX_n-uTQh3487I3A)". It was a local **RAG** (Retrieval-Augmented Generation) project: I hoped it could index the large collection of papers on my machine and answer the questions I wanted answered, easing the pressure of literature review. The results of that experiment showed that local computing power and model capability fall far short of a usable standard.

The **local knowledge base** was meant to handle the following scenarios:

- **Entering a new topic**: there are 40-60 papers on the same subject stored locally, and when stepping into a new topic you need to quickly grasp the contours of the current research (not yet at the stage of deep dialogue with the literature);
- **Private files**: for certain private files, you may not feel comfortable uploading them.

The knowledge base I built locally could not meet the requirements above; it has many limitations:

- **Model capability**: the Llama3 8B version is still at the toy-model level, and its indexing quality is rather poor;
- **Local computing power**: building the knowledge base requires chunking the documents (usually in PDF format) and running **document vectorization (Embedding)** on them, a process that itself relies on the relevant models; doing this with local computing power is slow and laborious, and the results are mediocre.

The upshot of the experiments above: after all that fiddling, even for content that was unmistakably in the local knowledge base, the model's indexing performance was very poor, and it frequently missed things. So this kind of work either calls for the superpower of cash, or it needs a product developed by a major company. Google's NotebookLM is a very good product that nicely solves the problem of indexing literature in bulk.

#### **Introducing NotebookLM**

For this part, I will simply let the latest Gemini 2.0 Flash answer:

> **Google NotebookLM: Your AI Research and Note-Taking Assistant**
>
> NotebookLM is a powerful AI-driven note-taking and research tool from Google, designed to help users process, understand, and make use of large amounts of information more effectively. By combining the power of large language models (LLMs), it turns your notes and documents into an interactive learning and research environment.
>
> **Core features and characteristics:**
>
> - **Document understanding and summarization:** you can upload all kinds of documents (such as PDFs and text files), and NotebookLM automatically extracts the key information and generates clear, concise summaries, helping you quickly grasp the core content and saving a great deal of reading time.
> - **Intelligent Q&A:** based on the documents and notes you provide, NotebookLM can answer your questions. This means you can get the information you need quickly, as if conversing with a knowledgeable assistant.
> - **Automatic question generation:** NotebookLM not only answers questions but can also automatically generate a series of questions from the content of your notes, guiding you to think and understand more deeply and promoting more effective learning and research.
> - **Knowledge network building:** NotebookLM can connect multiple notes, files, and materials into an interconnected knowledge network. This helps you see the links between different pieces of information more clearly and organize and understand complex knowledge better, which is especially useful for researchers and students who need to integrate knowledge from many areas.
> - **AI podcast generation:** NotebookLM recently added a very fun new feature: it can understand the documents, links, and text you upload and generate a conversational podcast, presenting the information in a livelier, more engaging way.
> - **Powered by Gemini Pro:** NotebookLM has adopted the more powerful Gemini Pro model, bringing stronger understanding and reasoning capabilities and making information processing and knowledge extraction more accurate and efficient.
>
> **Who it is for:**
>
> - **Students:** helps students learn and review course materials more effectively and prepare for exams and papers.
> - **Researchers:** helps researchers quickly analyze and integrate large amounts of research material, improving research efficiency.
> - **Professionals:** helps professionals get on top of industry information quickly and make better-informed decisions.
> - **Anyone who needs to process and understand large amounts of information:** whether you are organizing meeting notes, analyzing market reports, or learning something new, NotebookLM offers powerful support.
>
> **How to use it:**
>
> NotebookLM can currently be used by signing in with a Google account (https://notebooklm.google.com/). Some enterprise Google Workspace users and Google Workspace for Education users can use it as well. If you are using a company or school email address and cannot get access, you may need to contact your administrator to enable it.
>
> **In summary:**
>
> NotebookLM is a powerful tool that integrates advanced AI technology. By helping users manage, understand, and make use of information in an intelligent way, it greatly improves the efficiency of learning and research. If you often need to process large amounts of information, NotebookLM is absolutely worth a try.

NotebookLM has gone through several major version updates. In the latest version, its base model was switched from Gemini 1.5 Pro to Gemini 2.0 Flash, the strongest model Google has released to date.

Most importantly, NotebookLM currently has a **free version** available!

Now, let's try it out together and see how it performs.

#### **A NotebookLM Use Case**

1️⃣ Log in to NotebookLM; the website is [https://notebooklm.google.com/](https://notebooklm.google.com/);

2️⃣ After logging in successfully, you can create a new project. As shown in the image, I have already created several projects: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216142511498.png)

3️⃣ Here, I created a new project and imported several of Acemoglu's papers on the relationship between institutions and long-run economic growth:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216143324099.png)

The project page is divided into three parts: on the left is the **document sources area** for uploads, the upper right is the **notes area**, and the lower right is the main interaction area, which contains preset notes, suggested questions, a chat box, and the podcast audio generation section. Let's look at each part in turn:

- **Document sources area**: in this demo I uploaded 14 papers, all in PDF format. NotebookLM finished parsing them shortly after upload, at a speed leagues beyond my local RAG. Clicking on a document reveals that it has converted the PDF into plain text; for example, the conversion result for AJR (2001) looks like this: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216143915074.png)

- **Notes area**: the interaction area below the notes area usually offers some preset questions, such as a summary of the research, a timeline, an FAQ, and so on. Here, I clicked **Briefing Doc** to see the result. As you can see, it performed a simple segmentation and explanation of the content of the PDF documents; ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216144829867.png)

- **Interaction area**: now, let's try a simple question. Even when the question is asked in Chinese, it understands it correctly. ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216145155390.png)

  If the preferred language of your Google account is Chinese, then in the latest version of NotebookLM it can answer in Chinese, as follows: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216145542896.png)

  You can click on the images to get a feel for the answer quality, which is leagues beyond the local model. Moreover, for viewpoint-type answers, it provides clear citation markers that you can click to inspect.

- **Literature review demo**: now, I asked it to write a short review for me, to see how it does: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216150042374.png)

  NotebookLM answered my question and provided citations. Since the knowledge base I built contains only a dozen or so papers, the citations here are relatively few. Some users have found in their tests that nearly a hundred papers can be uploaded to a single NotebookLM project. If your literature library is of high quality, the quality of the answers here will be higher too.

- **Podcast audio**: in the "Notebook guide" section, you can have NotebookLM generate a two-person conversational podcast that presents the contents of your literature library step by step, in dialogue form. Let's have a listen: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216150709712.png)

  [https://notebooklm.google.com/notebook/ec155384-6270-4568-a3fe-862a1c7b1a66/audio](https://notebooklm.google.com/notebook/ec155384-6270-4568-a3fe-862a1c7b1a66/audio)

  In a word: amazing! The voices sound natural, the questions do not stay on the surface, and the answers have depth. It could even serve as listening practice material (currently English only). You really must try it yourself! (Get a taste of the American-English **exactly** barrage!)

#### **NotebookLM Plus**

In a recent update (December 2024), Google introduced NotebookLM Plus, which can be used by teams. It greatly increases the capacity of a single project, extends the context length, and lets you customize the response style. If you have such needs and happen to be well funded, consider contacting sales to subscribe and give it a try.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216151627600.png)

## Viewpoint-Discovery Citation Search: **Scopus AI**

In writing, we often need to understand the views that different scholars hold on the same research question. Beyond in-depth reading, we can use an AI engine to get a quick first overview. Here I would like to recommend **Scopus AI**, built by Elsevier, which I have been using recently: [https://www.sciencedirect.com/ai](https://www.sciencedirect.com/ai) (access authentication may be required).

Let's take *How do housing prices affect fertility rates?* as an example question:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216153727367.png)

⬆️ The AI quickly produced an answer. As you can see, it first addresses the **negative correlation** between housing prices and fertility rates, and in the replies that follow it lays out the heterogeneity of, and the channels through which, housing prices affect fertility.

**Scopus AI** solves two major pain points of having large models recommend literature or draft reviews:

- **Accurate citation retrieval**: general-purpose large language models often fabricate references when drafting reviews, whereas Scopus AI's answers are based on a large body of real literature and can provide citation sources. For example, clicking on (Du, Hui & Chen, 2024) below pops up the information for the original article, with one-click access to it: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216154347363.png)
- **Viewpoint-supporting literature search**: if, when drafting a review, you need to find literature that explicitly supports a particular view, such as "*rising housing prices reduce fertility rates*", AI citations can quickly locate the supporting literature.

Scopus AI covers not only Elsevier's literature; literature from other publishing platforms is included as well.

There are a few other platforms similar to Scopus AI, but after trying them out I found that they either offer a poor experience, require permissions I do not have, or demand the superpower of cash. So at this stage I would recommend Scopus AI.

## Extras

- Over the past month I was rushing to finish a paper, so updates were paused for a while; going forward I will try to get back to a regular schedule.
- Major tech companies in China are also building NotebookLM-like products, but in my trials the results were mediocre.
- ChatGPT's **Projects** feature is similar to NotebookLM in that both support indexed answers over multiple documents, but when I tried it the results were mediocre: first, because of the GPT-4o "dumbing-down" problem, the answer quality is rather poor; second, a single Project currently supports at most 20 documents, which is far too few.
- Some big companies and startups are now running projects on AI-automated end-to-end research, in which the AI collects literature on its own, runs experiments, writes papers, and submits them; the automation of knowledge production is on its way.
- I recently gritted my teeth and signed up for a month of **ChatGPT Pro**, which gives access to the **o1 Pro** model. It is extremely powerful! If your research group has ample funding, give it a try. It costs less than hiring an RA.
- If you have experience with AI in research, you are welcome to share it with me. Thanks!
