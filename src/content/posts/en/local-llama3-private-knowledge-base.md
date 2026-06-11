---
title: "Deploying Llama3 Locally and Building a Private Knowledge Base for Q&A"
date: 2024-05-14T18:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["Llama", "RAG", "ChatGPT", "Claude", "LLM"]
summary: "Llama3 performs well, but the Q&A results from a local knowledge base are still relatively poor."
---

Meta released the **Llama3** large language model last month. Its technical documentation notes that the performance of the Llama3 8B version significantly surpasses similarly sized open-source models, and subsequent community tests show that Llama3 70B's performance is even on par with early versions of GPT4. Open-source, locally runnable large language models give us much more room to imagine LLM use cases, including but not limited to:

- Chatting locally with a GPT3.5-level LLM;
- Calling a local model's API for text analysis, such as sentiment recognition and text classification;
- Building a private knowledge base for Q&A.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/439319690_397886903122928_1260706828132327359_n.png?_nc_cat=105&ccb=1-7&_nc_sid=f537c7&_nc_ohc=pm6Hu7Pd9XwQ7kNvgEDveT9&_nc_oc=AdgzNdYahSHN9M86klLxNzo7MaawxcQYKd_Sg9ZEtwRkL6PUh5aoeY6wtKjmavuqyaM&_nc_ht=scontent-hkg1-1.png)

In the latest [Large Model Arena](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard) (https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard), Llama3 70B ranks ahead of GPT-4-0314, and Llama3 8B has also surpassed GPT-3.5-Turbo.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513200410629.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513200556843.png)

Now, let's deploy Llama3 8B locally and build a private knowledge base for a simple trial run!

My device: a 2021 MacBook Pro 16G + 1T, with the base-model M1 Pro processor.

Honestly, I'd rather deploy Llama3 70B locally, but that would require unleashing some financial firepower, and for now I'm just a broke social-science PhD; that'll have to wait.

## 1 Using Ollama and Open WebUI to Run a Local LLM

#### **1.1 Local Deployment of Llama3 8B with Ollama**

Ollama is a simple tool for local LLM deployment; you can download and install it directly from the official Ollama website.

Ollama official site: https://ollama.com/

Ollama GitHub repository: https://github.com/ollama/ollama

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513202229808.png" style="zoom:50%;" />

Ollama officially provides many models for everyone to deploy. On the models page you can find Llama3. The one I downloaded here is the 8B instruct version, which is 4.7GB in size:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513202530989.png)

Run `ollama run llama3:70b` in `Terminal` and wait for the model to finish deploying locally. Once the model is deployed, you can already chat in the terminal, but it's too bare-bones, so we can dress it up with a WebUI.

#### **1.2 Deploying Open WebUI**

Open WebUI is also a GitHub project. It provides ChatGPT-like UI support for models deployed via Ollama!

GitHub repository: https://github.com/open-webui/open-webui

Here, we use the Docker installation method officially recommended by Open WebUI (see the official documentation):

```python
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

After installation, you can open the WebUI at port 3000 in your browser. Register and log in. Doesn't the site layout look familiar? It's very similar to ChatGPT! In the settings, under Connections, enter the Ollama address: `http://host.docker.internal:11434`.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204831487.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204653700.png)

Before starting a conversation, click the `+` at the top to select a model. If you've installed multiple models via Ollama, they will all be displayed.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204934221.png)

Let's test a few questions. Because Llama3's support for Chinese is fairly weak, when we ask questions we need to add a prompt telling it to answer in Chinese:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205234218.png)

You can see that its answer to this question gives us that familiar GPT3.5 feeling -- essentially **talking nonsense**!

Let's ask another one:
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205837087.png)

Let's challenge it with a few Ruozhiba (弱智吧) questions, and surprisingly it answers them quite well:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205920156.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513210111752.png)

If you ask in **English**, and the question doesn't involve factual matters, the quality of its answers is much higher:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205510014.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205613271.png)

Even in the age of GPT, having good English is still very necessary.

#### **1.3 The Llama3 Conversation Experience**

As far as Llama3 8B goes, I feel the experience is already quite good. There's no problem at all with conversational fluency; paired with text-to-speech, it's very usable for daily speaking practice!

If you can deploy Llama3 70B locally, the experience would be even better. I tried out Llama3 70B on Groq, and its answers to factual questions were much better:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513210943148.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513211028036.png)

## 2 Building a Private Knowledge Base for Q&A

There are now many tools based on **RAG** (Retrieval-Augmented Generation, RAG) that make it convenient to build a local knowledge base and perform Q&A. The ones I've tried include:

**Dify**: https://github.com/langgenius/dify

**ChatOllama**: https://github.com/sugarforever/chat-ollama

**MaxKB**: https://github.com/1Panel-dev/MaxKB

Overall, the experience with all of them is rather poor!!! But as a possible direction, perhaps there's a lot of room for improvement in the future. For now, let's give MaxKB a try.

#### **2.1 Deploying MaxKB**

Just use the one-click installation command officially provided by MaxKB:

```python
docker run -d --name=maxkb -p 8080:8080 -v ~/.maxkb:/var/lib/postgresql/data 1panel/maxkb

# 用户名: admin
# 密码: MaxKB@123..
```

After installation, you can open it at port 8080 on your local machine, and use the default login credentials:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212206275.png)

Once inside, in the settings, under "Model Settings" add the Llama3 deployed via Ollama. The details are as follows, and you can put anything in the API Key field:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212407082.png)

Now that we've completed a simple configuration, we can already use MaxKB for Q&A (in other words, MaxKB can also be used as a simple UI):

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212651537.png)

#### **2.2 Setting Up a Private Knowledge Base and Performing Q&A**

Here, I simply built two knowledge bases: one is my blog, and the other is 10 papers on a specific topic (political trust, 政治信任). Just submit the content as required:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213106812.png)

The automatically fetched blog content is as follows:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213035044.png)

After importing the PDFs, MaxKB needs some time to process the documents:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213731092.png)

Now, let's try some Q&A. First, let's configure it:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213903579.png)

When the question is strongly related to the documents, especially when it directly involves the titles of the papers in the knowledge base, it does index the knowledge base content, but the quality of the answers is not high:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513214129282.png)

For the question of what "Missing women" is, I have content that directly addresses it on my blog, but it did not cite that content in its answer:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513214338243.png)

Let me try once more in Chinese, and the results are still rather poor:
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513214624788.png)

## 3 Summary

The latest Llama3, even in its base version, is already very usable for conversation -- it's like having an assistant on hand that you can chat with anytime.

As for building a private knowledge base for Q&A, the several tools I tried are all still in a not-very-usable state at the moment. I adjusted some parameters and also tried using a Markdown-text knowledge base, but none of it worked well.

I look forward to these kinds of tools becoming more mature soon, or to LLM providers offering private knowledge base services.

I look forward even more to LLMs at the Llama3 70B level being able to run conveniently on a local machine.

If you have experience in this area, please feel free to get in touch with me anytime! I'd be very grateful!
