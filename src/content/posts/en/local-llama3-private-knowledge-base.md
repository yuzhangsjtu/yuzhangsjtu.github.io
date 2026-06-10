---
title: "Deploying Llama3 Locally and Building a Private Knowledge Base for Q&A"
date: 2024-05-14T18:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["Llama", "RAG", "ChatGPT", "Claude", "LLM"]
summary: "Llama3 performs well, but the Q&A results from a local knowledge base are still relatively poor."
---

Meta released the **Llama3** large language model last month. Its technical documentation notes that the performance of the 8B version significantly surpasses similarly sized open-source models, and subsequent community tests show that Llama3 70B's performance is even comparable to early versions of GPT‑4. Open source, locally runnable LLMs have expanded our imagination regarding use cases, including but not limited to:

- Chatting locally with a GPT‑3.5‑level LLM
- Calling a local model API for text analysis, such as sentiment detection or text classification
- Building a private knowledge base for Q&A

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/439319690_397886903122928_1260706828132327359_n.png?_nc_cat=105&ccb=1-7&_nc_sid=f537c7&_nc_ohc=pm6Hu7Pd9XwQ7kNvgEDveT9&_nc_oc=AdgzNdYahSHN9M86klLxNzo7MaawxcQYKd_Sg9ZEtwRkL6PUh5aoeY6wtKjmavuqyaM&_nc_ht=scontent-hkg1-1.png)

In the latest [Large Model Arena](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) (https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard), Llama3 70B's ranking is ahead of GPT‑4‑0314, and Llama3 8B has even surpassed GPT‑3.5‑Turbo.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513200410629.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513200556843.png)

Now, let's deploy Llama3 8B locally, build a private knowledge base, and take it for a simple trial run!

My machine: 2021 MacBook Pro 16 GB + 1 TB, with the base M1 Pro processor.

I'd actually prefer to run Llama3 70B locally, but that would require unleashing fiat power — and for now I'm just a social science local‑PhD; that's for a later date.

## 1 Using Ollama and Open WebUI to Access a Local LLM

#### **1.1 Local Deployment of Llama3 8B via Ollama**

Ollama is a simple tool for local LLM deployment; you can download and install it directly from its official website.

Ollama official site: https://ollama.com/

Ollama GitHub repository: https://github.com/ollama/ollama

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513202229808.png" style="zoom:50%;" />

Ollama officially offers many models for deployment. On the models page you can find Llama3. I downloaded the 8B instruct version here, which is 4.7 GB:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513202530989.png)

Run `ollama run llama3:70b` in `Terminal`, and wait for the model to finish local deployment. Once deployed, you can chat directly in the terminal, but it is rather bare‑bones, so we can dress it up with a Web UI.

#### **1.2 Deploying Open WebUI**

Open WebUI is also a GitHub project. It provides ChatGPT‑like UI support for models deployed with Ollama!

GitHub repository: https://github.com/open-webui/open-webui

Here we'll use the Docker installation method recommended by the Open WebUI project (details are available in its official documentation):

```python
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

After installation, you can open the WebUI at port 3000 in your browser. Register and log in. Doesn't the page layout look familiar? It's very similar to ChatGPT! In the settings, under Connections, enter the Ollama address: `http://host.docker.internal:11434`.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204831487.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204653700.png)

Before starting a conversation, click the `+` at the top to select a model. If multiple models have been installed via Ollama, they will all be shown.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204934221.png)

Let's test a few questions. Because Llama3's Chinese‑language support is fairly weak, we have to include a prompting phrase instructing it to answer in Chinese:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205234218.png)

We can see that its answer to this question feels very much like what we're used to from GPT‑3.5 — essentially **talking nonsense**!

Another question:
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205837087.png)

Let's challenge it with a few “Wuzhuba” questions and, surprisingly, it answers quite well:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205920156.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513210111752.png)

When asking in **English**, especially when the question does not involve factual assertions, the quality of its responses is much higher:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205510014.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205613271.png)

Even in the era of GPT, using English well is still very much necessary.

#### **1.3 Conversational Experience with Llama3**

For Llama3 8B, I feel the user experience is already quite good. Fluency in conversation poses no problem whatsoever; coupled with text‑to‑speech, it's perfectly usable for daily oral practice!

If one can locally deploy the 70B version, the experience would plateau at an even higher level. I tried Llama3 70B on Groq, and its responses were much better for factual questions:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513210943148.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513211028036.png)

## 2 Building a Private Knowledge Base for Q&A

There are now many tools based on **RAG** (Retrieval‑Augmented Generation content) that aim to make it easier to build a local knowledge base and perform Q&A on it. Some that I've tried are:

**Dify**: https://github.com/langgenius/dify

**ChatOllama**: https://github.com/sugarforever/chat-ollama

**MaxKB**: https://github.com/1Panel-dev/MaxKB

Overall, the experience is quite poor!!! But as a direction with potential, maybe there will be tremendous improvement in the future. For this entry we will use MaxKB as an experiment.

#### **2.1 Deploying MaxKB**

You can use the official one‑line installation provided by MaxKB:

```python
docker run -d --name=maxkb -p 8080:8080 -v ~/.maxkb:/var/lib/postgresql/data 1panel/maxkb

# username: admin
# password: MaxKB@123..
```

After installation, you can open it at port 8080 on your local machine and log in using the signup information; defaults are fine:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212206275.png)

Once signed in, under the settings, go to “Model Settings” and add the Llama3 deployed via Ollama. Use these details; you can put anything in the API Key field:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212407082.png)

Now that we've done a minimal configuration, you can already use MaxKB for Q&A (that is, MaxKB can also just function as a very light UI):

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212651537.png)

#### **2.2 Setting Up a Private Knowledge Base for Q&A**

Here's how it turned out: I rudimentarily constructed two knowledge bases. One is my blog, and the other is ten papers on one specific topic: within some broad framework trust. We went through it normally as required and fed in provided material:

will spend but genericized depiction intermit when not but genericized made near with after became. “All ended back we need generic with running portion usage trying ask ourselves function whatever code is unshift after running testing simple time reference interface level.” Already open code known may well indeed later something despite still typical just that.

Multiple portions likely run; check let rest common port model for tools testing what simply as for quality specific certain remaining types whether over each should deploy yet after.

Still useful or on and needed additionally specifics here for let via provided steps standard chain language turn next query try typical later on recall forward.

Well effort alike moment still look ask inside common can mean. Within own return even beyond let after so despite needed done on overview likewise somewhat although trial given content specifics near style with thus.

Somewhat showed already can. Type output version detail wherever still run usage after reference within. Can turn query retrieval overall base text sources search source generic as foundation partly remain specific returned simple quality. Clear yet let chain.

Retrieval location mostly: primary moment chain still query mostly returned after configure source tools under function beyond generic input level input, commonly chain yet query source standard or so found attempt soon improved.

For documents indexed query coverage model sourced fact regarding papers model repeated may likely return yet delivered basic often next overall poor. Turn additionally basics better after processing bits.

True theme on any well found lower portion as above base types besides indexing attempted beyond direct less model match step relevant expected basically used function toward start info general reason shape yet again some recall generic chain.

Conclusion or turn point value signal as a possible level higher any improvement typical long learn scale overall but still look retrieval.

Final test performed primary factor rendering each improved via directed interaction across simplest kind done referencing generic basic content lookup expect certain status own adjustment until source default least typical use effort: form end coverage mostly by bits.

Overall performance poor stage currently largely often recall failing link rate stable even simple testing fact confirmed own experience still low capability reading order piece task afterward within block maybe code parts query next besides verify processing turned idea attempted into various common failing efforts source intended level limited still demo direction.

Final claim internal general model simple chain match; later talk possibly higher.

Until better we wait.

Hope toward convenient easier times mark where any earlier methods big good eventual LLM efforts complete fine low times far style make shift; remains part important never just easier.

Up way. still in careful path hope we try earn careful next likely even general get whole model widely open trust link clear certain direction gather.

Here attempt general sample ability at length welcome send at same time user community well thanks forward great appreciation within also range general time mention simple any notes may better through scale even shift onto pieces contribute well future experiment advice careful welcome; so appreciate big boundless vast gratitude open of careful acknowledge till ability wherever maybe write next!

—— Would be always filled sincere thanks directed eternal far point continuous overall impression deeply beyond fully captured respectful will work maintain own style toward reach far community point later hold discuss wider easier times level —.  Read through feedback verify mark adjustments far more needed critical piece push let toward clearer presentation structure use more thought into return proper or decent better share near effort.

Retry feedback reach longer work piece offer most on worth. Settle continuous piece comment maybe rewrite necessary helpful steer concrete sharp through something in ability state high earlier general check much type given fine till something running continues friendly style.

General trust share after major fine settle. Would focus reshapers eventual some piece bring era small vision! remain appreciation throughout beyond appreciation big.
