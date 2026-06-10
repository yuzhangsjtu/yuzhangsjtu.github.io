---
title: "Introducing Two AI Literature Review Platforms"
date: 2024-12-16T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "AI"]
summary: "Struggling with literature review? AI is here to help!"
---

> **Literature review** is time‑consuming and labor‑intensive.
>
> In this article I’ll share my experience using **NotebookLM** and **Scopus AI**, and show how AI can help lighten the load of the literature‑review portion of your work.

## NotebookLM

#### **The need for a knowledge base**

Back in May I posted a tweet: “[Deploy Llama 3 locally and build a private knowledge base for Q&A](https://mp.weixin.qq.com/s/iGpRRKeX_n-uTQh3487I3A)”. That was a local **RAG** (Retrieval‑Augmented Generation) project. I hoped it could index a large local collection of papers and answer whatever questions I had, cutting down the literature‑review drudgery. The results showed that local computing power and model capability are nowhere near usable.

The **local knowledge base** was meant to cover these scenarios:

- **Entering a new topic**: when you already have 40–60 locally stored papers on one subject and are stepping into a new topic, you need a quick picture of the research landscape (before any deep, back‑and‑forth engagement with the literature);
- **Sensitive files**: for documents you might not feel comfortable uploading.

The knowledge base I built locally simply could not meet those requirements. It had many limitations:

- **Model capability**: the Llama 3 8B version is still at the toy‑model level, and its indexing quality is quite poor;
- **Local computing power**: when building the knowledge base you need to chunk the documents (usually PDFs) and perform **document embedding**, a step that itself relies on purpose‑built models. Doing this with local hardware is slow, labor‑intensive, and the results are middling.

The bottom line: after all that tinkering, the indexing was terrible even for content I knew was in the local knowledge base—it kept leaving things out. So this kind of work either requires putting real money on the table or using a product from a big tech company. Google’s NotebookLM is an excellent tool that solves the bulk‑indexing problem really well.

#### **Introducing NotebookLM**

For this part, I’ll let the state‑of‑the‑art Gemini 2.0 Flash answer directly:

> **Google NotebookLM: an AI research and notes assistant**
>
> NotebookLM is a powerful, AI‑driven note‑taking and research tool from Google designed to help you process, understand and make use of large amounts of information. By combining the capabilities of a large language model (LLM) it turns your notes and documents into an interactive learning and research environment.
>
> **Core features and characteristics:**
>
> - **Document understanding and summarization:** you can upload all sorts of documents (e.g., PDFs, plain text). NotebookLM automatically extracts key information and generates clear, concise summaries, letting you quickly grasp the essentials and saving substantial reading time.
> - **Intelligent Q&A:** based on the documents and notes you provide, NotebookLM answers your questions. It’s like talking with a knowledgeable assistant — you get the information you need right away.
> - **Automatic question generation:** beyond answering questions, NotebookLM generates a series of questions from your notes, guiding you toward deeper thought and understanding. This encourages more effective learning and research.
> - **Building a knowledge network:** NotebookLM links multiple notes, files and materials together into an interconnected knowledge network. This helps you visualize the relationships between different pieces of information, gets your mental house in order and makes organizing complex topics that much easier — especially useful for researchers and students who have to synthesize multidisciplinary knowledge.
> - **AI‑generated podcasts:** recently, NotebookLM added a fascinating feature that digests your uploaded documents, links and text-information sources — then generates a conversational podcast that brings your content to life in a more vivid, engaging way.
> - **Powered by Gemini Pro:** NotebookLM now uses the more formidable Gemini Pro model, bringing stronger understanding and reasoning capabilities, and making information‑processing and knowledge‑extraction both more accurate and more efficient.
>
> **Who is it for?**
>
> - **Students:** study and review course material, prepare for exams and papers more effectively.
> - **Researchers:** analyze and synthesize large amounts of research material quickly; raise their research efficiency.
> - **Professionals:** get up to speed on industry information and make wiser decisions faster.
> - **Anyone dealing with a lot of information:** whether triaging meeting notes, analyzing market reports or learning something new, NotebookLM provides robust support.
>
> **How to use it:**
>
> At present you can use NotebookLM by signing in with a Google account (https://notebooklm.google.com/). Some enterprise Google Workspace users, as well as Google Workspace for Education users, also have access. If you’re on a company or university account and can’t get in, contact your administrator.
>
> **In sum:**
>
> NotebookLM is a powerful tool incorporating cutting‑edge AI. By managing, understanding and leveraging information in a smarter way it dramatically increases learning and research efficiency. If you routinely process large amounts of material, NotebookLM is more than worth a try.

NotebookLM has undergone several major version updates. In the newest version, the underlying model changed from Gemini 1.5 Pro to Gemini 2.0 Flash, Google’s strongest model so far.

Most importantly, there is currently a **free tier** of NotebookLM!

Let’s fire it up and see how it works in practice.

#### **A worked example using NotebookLM**

1️⃣ Log in at [https://notebooklm.google.com/](https://notebooklm.google.com/).

2️⃣ Once logged in you can create new projects. As the image shows, I already have several projects:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216142511498.png)

3️⃣ Here I’ve created a new project and uploaded several of Acemoglu’s papers on the relationship between institutions and long‑run economic growth:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216143324099.png)

The project page is divided into three zones: on the left is the uploaded **document library**, the upper‑right is the **notes** area and the lower‑right is the main interaction area, which contains pre‑built notes, suggested questions, a dialog box and the podcast‑audio‑generation region. Let’s walk through each:

- **Document library**: for this demo I uploaded 14 papers, all in PDF. Shortly after the upload, NotebookLM had finished parsing them — incalculably faster than the local RAG. Clicking any document reveals that it converts the PDF to plain text; for instance, the conversion of AJR (2001) looks like this:  
  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216143915074.png)

- **Notes area**: below the notes panel, the interaction area typically offers several pre‑suggested questions — a research summary, timeline, FAQ, etc. Here I clicked **Briefing Doc** and checked the results. As you can see, it segments and summarizes the PDF content;

  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216144829867.png)

- **Interaction area**: now let’s ask a simple question. NotebookLM grasps the query perfectly even when it’s in Chinese：

  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216145155390.png)

  If Chinese is marked as your preferred language in your Google account, the newest NotebookLM can also respond in Chinese, like this:

  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216145542896.png)

  Click to enlarge and take in the response quality — loads better than the local model. For opinion‑oriented answers, you also get proper, click‑to‑view in‑text citations provided.

- **Literature‑review demo**: now let’s ask it to draft a mini‑review and assess the output:

  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216150042374.png)

  NotebookLM answered the broader question, references included. The limited citations here are due to my repository containing only a dozen‑odd papers. Some users report adding close to 100 papers to a single NotebookLM project. If the paper‑library quality is high, the response quality ends up higher here too.

- **Podcast audio**: inside the “Notebook guide” panel you can have NotebookLM generate a two‑person conversational podcast — a dialog that unveils the content of your document library step by step. Give it a listen:

  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216150709712.png)

  [https://notebooklm.google.com/notebook/ec155384-6270-4568-a3fe-862a1c7b1a66/audio](https://notebooklm.google.com/notebook/ec155384-6270-4568-a3fe-862a1c7b1a66/audio)

  One word: breathtaking. Natural‑sounding speakers, questions that don’t stay at the surface and deep answers. You could even use it as listening material (at present it’s English‑only). You have to try it yourselves! (And brace yourselves for the American‑English parade of “**exactly**!”)

#### **NotebookLM Plus**

In the latest update (December 2024), Google introduced NotebookLM Plus, suitable for teams. Plus substantially raises the per‑project file limit, extends the context‑handling capacity and supports customizable response styles. Should this match your needs and should you happen to be flush with budget, reach out to sales and give the subscription model a trial.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216151627600.png)

## Citation search for viewpoint‑based literature discovery — **Scopus AI**

When we write, we often need to map the perspectives various scholars hold on the same research question. In addition to in‑depth reading, we can turn to an AI engine for a quick preliminary overview. Here I’d recommend **Scopus AI**, built by Elsevier and available at [https://www.sciencedirect.com/ai](https://www.sciencedirect.com/ai) (authentication may be required).

Here’s an example search: *How do housing prices affect fertility rates?*

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216153727367.png)

⬆️ The AI delivered a rapid answer. As you can see, it first keys in on the **negative** relationship between housing prices and fertility, then unpacks the heterogeneities and channels through which housing prices influence fertility.

**Scopus AI** addresses two major pain points with large‑language‑model‑generated literature recommendation or review drafting:

- **Precise citations**: a general‑purpose large language model commonly hallucinates references when drafting a review. Scopus AI bases its answers on real, large‑scale publication data and always connects each statement to a citation. For example, clicking on (Du, Hui & Chen, 2024) pops up the original source information, allowing one‑click access to the full record：  
  ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20241216154347363.png)
- **Viewpoint‑supporting literature search**: when you’re crafting a review and want to quickly locate studies that support a specific view — say, “*rising house prices lower fertility*” — the AI‑engineered citations empower you to find supporting literature in a flash.

Scopus AI indexes not only Elsevier content but also papers from other publishing platforms.

Similar platforms exist but, after trying them out, I found the experience either subpar, made difficult by access restrictions, or bound to “wallet power”. Hence Scopus AI gets my stage‑winner’s pick at this point.

## Extra bullets

- The previous month was spent rushing a paper to submission, which put a pause on blog updates. I’ll resume regular posting going forward.
- Domestic tech giants are also building NotebookLM‑like products, but my early trials left me unimpressed.
- ChatGPT’s **Projects** feature also supports index‑based responses across multiple documents, much like NotebookLM, but usability suffers: a ‘dumbing‑down’ problem cripples 4o responses and response quality sank noticeably; individual projects are capped at 20 documents, which is tiny.
- Big tech firms and startups are actively developing “AI researcher” services that autonomously collect literature, design and run experiments, draft papers and submit them. The automation of knowledge production is well on its way.
- Recently I opened my wallet and signed up to a month of **ChatGPT Pro** to try the **o1 Pro** model. Power‑level? Overwhelmingly high. Worth a test in any lab underwriting the bill. A month clinks far more softly than funding even like 0.1 RA long‑term!
- Feel free to share your AI‑in‑scientific‑research tips with me. Thanks!
