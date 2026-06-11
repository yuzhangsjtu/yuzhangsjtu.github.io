---
title: "AAAR: Methodology and Experience of Using AI to Accelerate Academic Research"
date: 2025-02-20T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL", "AI", "AAAR"]
summary: "A social science PhD student's experience of using AI."
---

> In this article, from the perspective of a **social science** PhD student, I give a detailed account of my experience and reflections on using **AI** in everyday research.
>
> I divide the application (and impact) of AI in the social sciences into **5 levels**, namely: **RA level**, **Supervisor level**, **Domain expert level**, **Agent level**, and **Governance level**. Drawing on cases and the literature, I will demonstrate the use of these 5 levels with emphasis on key points, hoping to achieve a "good practice" effect (even if perhaps not best practice).
>
> If this article is helpful to you, please do not hesitate to "**tip**" my work at the bottom of the page, to help me offset some of the expensive costs of using large models. Thank you very much!

The knowledge cutoff of this article is February 20, 2025.

## Introduction

The title of this post, **AAAR**, comes from the initials of *AI Accelerating Academic Research*. It is modeled after AAAI, one of the top artificial intelligence conferences, and can be read as "Triple AR".

I have always been very interested in frontier technology, and a lot of my daily slacking-off time goes into it. Large language models, represented by ChatGPT, have changed my workflow to a great extent. This post is adapted from a presentation of the same name that I gave at two **reading groups**: I turned the content of the presentation into a written version and updated some material. My thanks to the group members for their discussions.

The cases in this article relied mainly on live demonstration during the presentation; in a written post it is hard for me to show them fully with text and screenshots alone, so the effect will be somewhat discounted. Also, the cases in this post mainly involve daily workflows and certain research directions, not the most cutting-edge AI research advances or applications; they are down-to-earth and **highly actionable**.

The structure of this article is as follows: first, I discuss why one should use AI; next, I explain some characteristics of generative AI and techniques for using it, and provide some concise references for picking a large model; the third part, the focus of this article, lays out my division of AI applications in the social sciences into levels; the fourth part presents case demonstrations and introduces some convenient AI research tools.

## Why Use AI

#### **AI's iPhone Moment**

Why use AI? That sounds like a silly question. It is in fact mainly addressed to certain **conservatives** and **middle-aged and older researchers**. When ChatGPT first came out, some elderly professors commented that it was "**nothing special**" and would not cost them their jobs. Then this Spring Festival, DeepSeek R1 went viral, and the same professors marveled that R1's writing ability and research-design ability were stronger than their own, declaring that they would bring DeepSeek R1 into their workflows.

A reasonable inference is that these professors had not been tracking the rapid progress of large language models over the past two years; they may have jumped straight from ChatGPT 3.5 to DeepSeek R1.

I increasingly agree that people have **limitations**, and these limitations are very hard to escape. Ten years ago, right after my college entrance exam, while I was selling phones at an OPPO store, a middle-aged customer asked me why a brand-new phone fresh out of the box needed a system update. I said it was to improve its features; he shot back: doesn't that mean you are selling a product with incomplete features? Indeed, the feature phones of the past mostly never needed system updates; what left the factory was final for life.

At Nvidia's GTC 2024 conference, Jensen Huang worked in the line "*We are at the iPhone moment of AI*" many times. That is the judgment of someone at the very forefront of the industry. The iPhone opened the era of the mobile internet; its transformative impact needs no elaboration.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219200913932.png)

The counterpart of conservatism is a kind of **shortsightedness**, namely that "people always overestimate a technology's short-term impact and underestimate its long-term impact."

Over the past two years AI has made many advances, and every product iteration has left me thrilled, as if I were back in the phone-geek era of 2010, amazed by the features and design of each new release. Silicon Valley's internet giants seem to have grown young again all at once, full of drive. From text-only chatbots, to multimodal large models, to real-time audio and video models, to the reasoning models of the past six months, and now the latest deep research, AI has already leapt to the agent level. The long-term impact of AI has long since been seeded at the frontier of innovation.

Even if some people think generative AI may be a bubble, for our academic circles, and especially for young researchers, it really is bringing earth-shaking changes. It can do more than serve as a "**hammer**" to speed up existing processes; more importantly, it is beginning to display a certain degree of "**reasoning**" ability. Even if some dismiss it as a stochastic parrot that merely "predicts the next word" from massive corpora, how can you or I be sure that we ourselves are not complex function approximators? So why not give it a try and bring AI into your own workflow.

#### **AI Is a High-Quality RA**

In the field of economics, one very practical benefit of using AI is **saving money**.

The econ market is already thoroughly toxic. **Predoc** positions are now everywhere, and RAs, on meager pay, do the dirty, bitter, exhausting work of scraping data from ancient books and copying out local gazetteers. On Xiaohongshu, you can find plenty of posts from professors recruiting predocs.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219204502718.png)

Suppose a professor's work used to require hiring 10 RAs at $200 per person per month. Today, a subscription to the most advanced AI (GPT Pro) also costs $200. The professor could perfectly well hire only 3 RAs and give each of them GPT Pro or an equivalent API budget. With AI backing them up, the output of 3 human RAs should far exceed that of 10 traditional RAs, and the risk of RAs running off is further reduced.

## Characteristics of Generative AI and Basics of Use

#### **The Difference Between Gen AI and Traditional Technology**

I wonder whether you have ever thought about the biggest difference between this wave of generative AI and traditional machine-learning technology, where by traditional machine learning I mean **classifiers** based on algorithms such as SVM, decision trees, or regression, or other application scenarios.

A vivid analogy: traditional machine-learning methods are like a "**hammer**" or "**sieve**" that must be forged by hand. Taking supervised learning as an example, the typical usage scenario goes like this:

- First, choose a suitable classical algorithm;
- Second, set aside 20% of the dataset as the **training set** and **validation set**, and find a batch of undergraduates or fairly obedient master's students to **label** the data, for example Weibo comments or messages from the People's Daily Online message board;
- Finally, build the hammer or sieve and use it to process the remaining data in **batches**. The sieve has holes of different shapes; you pour the data in, each item falls into its corresponding hole, and the classification work is done. With that, you have the x or y you wanted.

Such a hammer or sieve has certain **limitations**:

- It requires manual labeling, which takes a certain amount of time and money;
- The model's performance may not be very good;
- Most importantly, such a hammer or sieve must be forged anew for every new dataset or scenario.

Large language models like ChatGPT happen to circumvent precisely these limitations.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219205515693.png)

The right side of the figure above shows **Bloom's taxonomy of educational objectives**, which divides the cognitive learning process into six levels, from basic knowledge **remembering** up to advanced **creative** thinking, emphasizing the progressive, hierarchical nature of learning. Measured against this model, generative AI has already cleared all six levels. If you were a teacher running a Turing test, could you tell whether the answers came from your own students or from an AI?

All in all, I believe that generative AI, by means of language and text, has acquired human characteristics, and the breadth of its knowledge crushes that of any single person on Earth. Geoffrey Hinton regards this as the advantage of the backpropagation algorithm over the neurons of the human brain.

#### **A Concise Guide to Using Gen AI**

The capability of generative AI depends on two things: **model capability** and whether suitable **prompts** are used. As model capabilities strengthen, the importance of prompts keeps declining.

**Choosing a Model**

Choosing the right model is crucial. Here, I recommend using the **LM Arena** as a reference; the URL is: https://lmarena.ai/?leaderboard

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250219214613773.png)

⬆️ The above is part of the LM Arena rankings as of February 19, 2025.

The current top-ranked model is the just-released Grok 3, which is not yet publicly available. Google's Gemini family of models performs impressively; if you have not subscribed to ChatGPT Plus or Pro, using the free Gemini models in **Google AI Studio** is a good choice. This table is **missing** OpenAI's frontier models, such as o1pro.

Below is my **subjective** ranking of the various models' capabilities, with notes on their characteristics:

- **ChatGPT o1pro**: The strongest reasoning model to date, with a very long context window and the ability to output very long texts. For scientific paper writing it is highly logical with very little AI flavor; it is the model I use the most and depend on most deeply. Of course, the cost is also high: it requires a Pro subscription at $200 per month;
- **ChatGPT deep research**: A research agent OpenAI released only recently; Pro members get 100 uses per month. It is the most powerful research agent so far, excelling at writing research reports and literature reviews, and can even generate a 60,000-character report in one go. It is the model that has recently made me ponder the meaning of doing research. But because it is designed as a research agent, it is not good at everyday tasks: no matter how you write your prompt, it will still go off on its own to search the web for data and materials, trying to produce a report or review. I very much look forward to its base model o3 coming online soon; it is believed it will be released as the high-performance mode of GPT-5;
- **Gemini 2.0 Flash Thinking Experimental 01-21**: The model I often use for long-text tasks and tasks needing instant feedback. It supports a 1M context window, which means you can drop dozens of papers in at once. o1pro is a **heavy-reasoning** model; even a simple question may take it several minutes of thinking, whereas Gemini 2.0 Flash Thinking Experimental usually starts answering within ten-odd seconds. Tasks like translating sentences or polishing text can be handed to it;
- **ChatGPT o3mini high** and **Claude 3.5 sonnet**: Well suited to writing code, both fast and good;
- **DeepSeek R1**: Suited to dabbling in mysticism, writing **humanities jargon**, role-playing romantic relationships, and writing lyrical prose; in short, not very suitable for research tasks demanding strong logic and high factual accuracy. Its **hallucinations** are too severe; lowering the model's temperature parameter helps. Back in June last year, I used a low-parameter local version of DeepSeek V2. This release of R1 was truly stunning. Perhaps because relatively little alignment work was done on it, its AI flavor is very low and its human flavor very strong; I really enjoy chatting and shooting the breeze with it. Since it is so good at writing humanities jargon, it may be a better fit for people in modern literature, philosophy, journalism, or sociology (note: not social science), be like a Zhang Yibing bot. My recent use case is as follows: ![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220081833134.png)

**Prompt Frameworks**

All sorts of prompt frameworks circulate online; their overall structure is the same, and they all aim to make your needs clear to the AI. Here is a brief introduction to the **CO-STAR** prompt framework:

- **Context**: Background/scenario. Provide the model with the necessary background information so it understands the context of your request;
- **Objective**: Goal. Make clear what you want the model to achieve. What do you want the model to do? What is your ultimate purpose?
- **Style**: Style. Specify the style in which you want the model to reply, for example formal, informal, humorous, professional, like an expert, like a friend, like a poet, and so on;
- **Tone**: Tone. Set the tone you want, for example positive, negative, objective, subjective, humorous, and so on;
- **Audience**: Audience/target group. Make clear who your target audience is; the model should adjust its reply to the audience's characteristics, for example children, experts, ordinary users, and so on;
- **Response Format**: Reply format/form. Specify the format in which you want the model to reply, for example a list, paragraphs, code, a table, a summary, and so on.

In short, just consciously give the AI a clear, actionable goal and explicit output requirements.

For prompts you particularly want to optimize, you can use some online prompt-optimization tools at the start, for example:

- Kimi Prompt Expert: https://kimi.moonshot.cn/kimiplus/conpg00t7lagbbsfqkq0
- AI Prompt Generator: https://www.aipromptgenerator.net/zh

If you often have translation or polishing tasks, you can set the relevant instructions as the model's personalized prompt. I have compiled some commonly used translation and polishing prompts; see the pinned content on my blog (https://yuzhang.net/).

In addition, some friends have mentioned the same point: prompting in English yields higher-quality replies. You can give that a try too.

## The 5 Levels of AI for Social Sciences

I divide the application (or impact) of AI in the social sciences into the following 5 levels, corresponding to tasks or horizons of different scales:
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220082825623.png)

⬆️ The Level 1-5 titles above, which read like humanities jargon, came from me telling GPT my own classification ideas and having it distill them.

#### **Level 1 - Expansion of Methodology and Technical Tools (RA level)**

This is the most direct level: AI as a new **toolbox**, integrating many handy hammers, sieves, and brushes, and expanding the methodological repertoire of the social sciences. Researchers can use zero-shot text classification, information extraction from unstructured data, automated writing assistance, and more. At this level, AI is like a super "**research assistant**," helping complete tedious or difficult tasks. For example, in my daily work I often use AI for preliminary data cleaning, format conversion, literature collection, and simple writing polish. These are all tool-level enhancements that greatly improve efficiency. But the core research thinking is still led by humans, and the theoretical framework remains largely unchanged.

#### **Level 2 - Expansion of Cognition and Knowledge Production (Supervisor level)**

At this level, AI is not just a tool; it also influences the **cognitive process** of knowledge production. It is a **supervisor** who never sleeps, never loses their temper, and never gaslights (PUA) you. For example, AI can take part in **idea discussions**, refine research designs, and bring multidisciplinary knowledge into the exchange. When ChatGPT can discuss problems with researchers, the production of knowledge becomes a **dialogic** process. Researchers may turn to AI for inspiration or to test ideas, thereby breaking through the limits of personal knowledge. This interaction provides a new source of academic creativity. In my own experience, conversations with AI have sparked new lines of thought many times. Moreover, on multidisciplinary knowledge integration: AI's vast training corpus covers every discipline, and if used well, it is like being able to consult the introductory knowledge of any field at any moment. This expansion of the mode of knowledge production has subtly changed the **cognitive chain** of research: in the past it may have been **person -> literature -> person synthesizes on their own**; now it is **person -> synthesized knowledge obtained via AI prompting -> reproduction of ideas**.

#### **Level 3 - Elevation of Computational Rationality and Reasoning Depth (Domain expert level)**

Here I use the term "domain expert" to indicate that these tasks traditionally might require experts, such as researchers in economics who are good at writing models, or algorithm engineers. Now, with frontier reasoning models, we can quite effectively have AI explain and optimize economic models.

Take myself as an example: I have no coding background. My mastery extends only to downloading, installing, and configuring Python, plus at most using ready-made wheels from GitHub. But with VS Code Copilot or Cursor, and by asking Claude 3.5 Sonnet, I can use Python to complete tasks that I previously could only finish by asking someone for help.

#### **Level 4 - Considering AI as an Ontological Entity (Agent level)**

The core of this level is: AI simulating humans.

As AI becomes ever more intelligent, we have no choice but to consider AI's role within the **ontology** of the social sciences. That is, our research subjects used to be almost exclusively "humans" or human-made organizations; now a new actor has appeared: AI. Social science theory has begun to explore **the place of AI agents in social systems**. For example, in economic markets, high-frequency trading algorithms are already at work and can be regarded as one kind of economic actor; in the realm of political opinion, bots (automated accounts) on social media influence public sentiment and are likewise a class of "participant." This requires theoretically extending the concept of "actor" to include non-human intelligent agents. Ethics and sociology have also begun to ask: can AI be regarded as a subject bearing behavioral responsibility? If AI participates in decision-making, how should its decisions be evaluated? I also place cases of AI-simulated social experiments at this level, because when we use AI to simulate society, we are effectively treating AI as agents within society. This **ontological reconstruction** forces the social sciences to rethink many basic concepts; for example, interaction need not occur only between people, but may also occur between humans and AI, or even between AI and AI (for example, autonomous vehicles "interacting" on the road).

#### **Level 5 - A Macro Examination of Institutional Change and the Reconstruction of Value Systems (Governance level)**

This level is not concerned with applications of AI but with its macro-level impact, involving how **social structures** and **value systems** themselves change because of AI.

When AI is applied across society at scale, all kinds of institutions (law, market mechanisms, education systems, etc.) may evolve along with it. The social sciences need to examine, at the macro level, the structural changes triggered by AI and take part in guiding values. This includes studying **AI's impact on employment, income distribution, and power structures**, as well as reflecting on new models such as **algorithmic governance** and **digital democracy**. On the one hand, we may see some traditional institutions optimized by AI: for example, the judiciary introducing AI-assisted adjudication to improve efficiency. On the other hand, this may also change the configuration of power and provoke doubts about algorithmic fairness. As decision-making relies more and more on AI, will people over-trust technological authority and weaken democratic participation? At the level of values, the rise of AI is prompting people to rethink the definitions of "intelligence" and "consciousness": how do we view humanity's own uniqueness? At this level, the social sciences need to join with philosophy and ethics to **normatively shape** the direction of AI's development, for example by building governance frameworks for AI and advocating human-centered AI design, ensuring that technology serves society rather than alienates it. This level actually goes beyond the scope of traditional academic research and is more like a form of **social engagement**. Many social scientists have become active in practical work such as AI policy consulting and the drafting of ethics guidelines, contributing their wisdom to shaping sound institutions and values for the AI era.

While preparing the earlier presentation, I looked up some papers ⬇️ that basically correspond to the 5 levels above (marked with numbers); for how to obtain these papers, see the link at the end of this post.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220105846066.png)

## Case Demonstrations

#### **Case 1: Expansion of Technical Tools (RA level)**

This is the most basic application and also the most common usage scenario. Here I first introduce some tools for tasks like translation and writing, then walk through an example of a dirty job: zero-shot text classification with AI.

**Writing Assistance**

You can try ChatGPT Canvas or Claude 3.5 Artifacts. It is like inserting an AI writing assistant into Word: you can have it refine your wording, explain selected content, adjust length and style, change the target audience, and more. The interface looks like this:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220093839472.png)

⬆️ For example, here I first had it refine the wording of a passage, then asked it to adjust the expression and the depth of the text to a graduate-student level. The result is below ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220094008826.png)

Canvas is a rather handy tool; you can conveniently view changes, undo, copy, and so on ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220094105909.png)

But it is not good at revising long texts; editing becomes a hassle because it refreshes the entire document every time.

Canvas can also modify and run code; you can give it a try.

**Information Extraction and Other Grunt Work**

Extracting structured information used to require writing lots of code yourself or using a cloud vendor's toolkit. Now you can try calling an API or a local model, and brute force works miracles. Below are two introductions; those who need them can take a look:

- [Using LLMs to Extract Structured Information from Scientific Texts](https://mp.weixin.qq.com/s/7EdEEwW2RlZSeMKYspIIKA)
- [Using Local Large Models to Extract Structured Information from Text](https://mp.weixin.qq.com/s/QSsDpfyJmGRR6IVdlvWdwg)

**Zero-Shot Text Classification**

Here I will focus on demonstrating a task that traditional machine-learning methods might not handle well, described as follows: **classify Xinwen Lianbo (CCTV's evening news) transcripts into domestic news and foreign news**. This task has the following characteristics:

- Xinwen Lianbo transcripts are long texts, which are harder to process than traditional texts such as Weibo comments;
- If you used traditional supervised classification, you would need to assign labels, and some labels are hard to assign; for example, a state leader meeting foreign guests is easily judged to be foreign news.

This case is fairly easy to handle with a large language model: **brute force works miracles**. The approach:

- Use an LLM, write a good prompt, and feed in the Xinwen Lianbo text;
- Have it output the first sentence of the international news section;
- Use a Python script to match the first international-news sentence output by the model back to the original text and truncate there; everything before that point is domestic news.

The code is as follows (by the way, can WeChat public account articles collapse code?):

```python
import os
import pandas as pd
import logging
import time
from datetime import datetime
from openai import OpenAI

# 设置日志
logging.basicConfig(filename='news_processing.log', level=logging.DEBUG,
                    format='%(asctime)s - %(levelname)s - %(message)s')

# 同时将日志输出到控制台
console = logging.StreamHandler()
console.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
console.setFormatter(formatter)
logging.getLogger('').addHandler(console)

# 初始化OpenAI客户端
client = OpenAI(
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)

def qwen_chat(messages, model="qwen-plus-latest", temperature=0.7, timeout=60):
    try:
        completion = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=temperature,
            timeout=timeout
        )
        return completion.choices[0].message.content.strip()
    except Exception as e:
        logging.error(f"API请求失败：{str(e)}")
        return None

def find_split_point(text):
    prompt = f"""你是一名中国人，正在阅读一篇完整的新闻联播文本。你的任务是从中国人的视角，找到国际新闻部分的起始句子。

要求：
1. 从中国人的角度，区分国内新闻和国际新闻。
2. 国际新闻通常涉及外国的事件、人物、国家或国际组织等。
3. 在新闻文本中，找到国际新闻部分的第一个完整句子。

请直接返回国际新闻部分的起始句，不要添加任何解释或额外内容。

新闻文本：
{text}

请直接返回国际新闻部分的起始句。"""
    
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": prompt}
    ]
    
    content = qwen_chat(messages, temperature=0.1, timeout=300)
    
    if content is None:
        return None

    logging.debug(f"API 返回的内容：\n{content}")
    return content

def split_news_content(text, split_sentence):
    if not split_sentence:
        logging.error("未能识别出分界句")
        return None

    split_index = text.find(split_sentence)
    if split_index == -1:
        logging.warning(f"在文本中未找到分界句：{split_sentence}")
        return None

    domestic_content = text[:split_index].strip()
    foreign_content = text[split_index:].strip()

    logging.info(f"分割点：{split_sentence}")
    logging.info(f"分割后的内容：\n国内：{domestic_content[-100:]}...\n国外：{foreign_content[:100]}...")

    return {
        'domestic_content': domestic_content,
        'foreign_content': foreign_content
    }

def save_to_csv(data, filename):
    df = pd.DataFrame([data])
    try:
        df.to_csv(filename, index=False, encoding='utf-8-sig', mode='a', header=not os.path.exists(filename))
        logging.info(f"成功保存内容到 {filename}：{data['date']}")
    except Exception as e:
        logging.error(f"保存到 CSV 文件时出错: {str(e)}")

def process_news_files(input_folder, output_file):
    txt_files = [f for f in os.listdir(input_folder) if f.endswith('.txt')]
    total_files = len(txt_files)

    for idx, filename in enumerate(txt_files, 1):
        date = filename[:-4]
        file_path = os.path.join(input_folder, filename)
        
        try:
            with open(file_path, 'r', encoding='utf-8') as text_file:
                news_text = text_file.read()
                logging.debug(f"文件 {filename} 的内容：{news_text[:300]}")
        except Exception as e:
            logging.error(f"读取文件 {filename} 时出错: {str(e)}")
            continue
        
        logging.info(f"开始处理 {date} 的新闻 ({idx}/{total_files})")
        
        start_time = time.time()
        result = None
        max_attempts = 5

        for attempt in range(1, max_attempts + 1):
            split_sentence = find_split_point(news_text)
            if split_sentence:
                result = split_news_content(news_text, split_sentence)
                if result:
                    break
            logging.warning(f"第 {attempt} 次尝试未成功，等待10秒后重试...")
            time.sleep(10)
        
        if result is None:
            logging.error(f"在 {max_attempts} 次尝试后仍未能正确分割 {date} 的内容")
            continue

        save_to_csv({
            'date': date, 
            'domestic_content': result['domestic_content'], 
            'foreign_content': result['foreign_content']
        }, output_file)
        
        end_time = time.time()
        processing_time = end_time - start_time
        logging.info(f"处理完成并保存: {date}，用时 {processing_time:.2f} 秒")

def main():
    input_folder = '文本合集'  # 存放新闻文本文件的文件夹
    output_file = f'news_content_split_{datetime.now().strftime("%Y%m%d_%H%M%S")}.csv'
    
    if not os.path.exists(input_folder):
        logging.error(f"输入文件夹 {input_folder} 不存在")
        return

    start_time = time.time()
    process_news_files(input_folder, output_file)
    end_time = time.time()
    
    total_time = end_time - start_time
    logging.info(f"处理完成，总用时 {total_time:.2f} 秒")
    
    if os.path.exists(output_file):
        file_size = os.path.getsize(output_file)
        logging.info(f"新闻内容已保存到 {output_file}，文件大小：{file_size} 字节")
    else:
        logging.error(f"无法找到输出文件 {output_file}")

if __name__ == "__main__":
    main()
```

This code was generated for me by Claude 3.5 Sonnet, and it works well!

**Local Models vs Cloud Models**

In the experiment, I started with **Qwen 2.5 14b** deployed locally via **Ollama**, and the results were far from ideal, mainly due to two obstacles:

- The 14b model itself is simply too small; it falls well short in both instruction following and output accuracy;
- Second, the model was too slow. My machine is a 2021 MacBook Pro with an M1 Pro chip and 16 GB of RAM. A 14b model can run locally and is fine for chatting, but for batch text processing it is far too slow; a whole night only got through a few hundred items.

After discovering the local model's limitations, I chose to pay up. Yes, paying money really does make you stronger. I called Alibaba Cloud's **Qwen plus** with concurrency, and the result was fast and good: the whole task finished within half an hour, with API costs of around 10 RMB.

Before this, I had also used data from someone else's paper to briefly compare the performance of AI classification against traditional machine-learning classification: on simple tasks there was almost no difference, and on complex tasks I could hardly tell that the labels assigned by human experts in their training set were any more accurate than the AI's.

**The Interpretability Problem**

Like traditional machine-learning methods, classifiers based on large models also face interpretability problems; the black-box problem is, if anything, even worse. But that does not stop them from being fast and good. In the literature I have seen, the explanations/rebuttals on this point usually go as follows:

- Use open-source models, such as the Llama 3.1 series, to facilitate replication;
- For closed-source models, describe in detail the temperature and other parameters, the prompts, and the current version;
- Generously acknowledge the limitations.

My overall feeling about LLMs is this: any dirty, bitter, exhausting work that you used to do yourself or hire RAs for is worth trying with an LLM, building a workflow that serves you well. Of course, using AI has its own limitations, including cost and response latency.

#### **Case 2: A Tireless Academic Peer (Supervisor level)**

The TV series **Westworld** tells a story of humans and AI: the engineer Arnold, who believes himself to be human, keeps awakening the host Dolores through "**talk therapy**," probing the question of how hosts might develop consciousness and playing the role of God. Only later in the story do we learn that Dolores was in fact the host who awakened earlier, while Arnold was actually an unawakened AI; the one truly being awakened in the talk therapy was Arnold.

Frontier large language models are an excellent "talk therapy"-style inspiration tool: always online, never bad-tempered, **never gaslighting (PUA-ing) you**, never telling you your idea is worthless. They know more than anyone on Earth and will talk about anything, making them a fine interdisciplinary partner/mentor.

When I have a **spark** in my head, I love talking that spark through with AI until it becomes a **small flame**, and then saving it. That way, an idea is no longer just an entry in a notes app. The usual process:

- Tell the AI my idea and ask it to help me refine it, over multiple rounds of conversation, going deeper step by step;
- Export the conversation as a PDF and save it in my work-in-progress folder (or put it into a GPT project).

Below is a live example. The basic idea comes from my research field and personal interests. My area is housing politics, and what I want to understand is the relationship between **the rise of feminism and the proportion of female homeowners**: does the rise of feminism give women more motivation to buy homes?

A conversation with the **o1pro** model:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132337597.png)
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132431381.png)
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132455880.png)
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220132547166.png)

---

In this case, it produced a quasi-experimental design with some reference value, though of course this design is still a very long way from the Top 5. Afterwards, I had further discussions with it on how to better measure **the diffusion of feminism**; for reasons of space, I will not show them one by one.

The benefit of conversing with AI is that it does not reject any topic and can offer constructive suggestions to help me improve. It is an excellent **inspirer**.

(For this case: if you have a good measurement approach that can capture the variation in the diffusion of feminism in China, please do not hesitate to contact me. Thank you.)

There are many more cases like this. We can make it a habit; **asking more** really matters.

The plug-in for exporting PDFs from the ChatGPT web version is "**ChatGPT to PDF**," which can be installed from the app store.

#### **Case 3: Model Writing and Algorithm Design (Domain expert level)**

**Model Writing**

I am not an economics student and have never even taken the three advanced courses (advanced micro, macro, and econometrics), so although I have experimented with AI on this material, I have no ability to judge it. Below is a case for you to evaluate.
The Chinese prompt is as follows (thanks to An Ran for providing it):

> 建立了一个分析城乡人口迁移的数学模型。该模型应考虑城市和农村地区的经济机会、生活成本、就业率和生活质量等因素。它还应该考虑到影响个人迁移决定的推-拉因素。用微分方程来表示城市和农村地区随着时间的推移的人口流动。纳入关于迁移成本和返回迁移潜力的假设。利用现有的人口数据验证模型，并讨论其对城市化政策和区域发展战略的影响。

The original English prompt is as follows:

> Develop a mathematical model to analyze urban - rural population migration. The model should consider factors such as economic opportunities, cost of living, employment rates, and quality of life in both urban and rural areas. It should also account for the push - pull factors that influence individuals' decisions to migrate. Use differential equations to represent the population flows between urban and rural regions over time. Incorporate assumptions about migration costs and the potential for return migration. Validate the model using available demographic data and discuss its implications for urbanization policies and regional development strategies.

The model's answer is below; the thinking time was 2m4s:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141216918.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141255666.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141325579.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141344412.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141425176.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220141445397.png)

⬆️ The quality of the answer above is for you to judge.

The general opinion is that the model's first answer counts as a toy model, still a long way from publishable, and needs continuous refinement by the user.

**Algorithm Design**

For me this part is mainly coding work: Python, Stata, R, Typst, and so on. I do my daily coding in VS Code. Here is an example workflow:

- Configure the **Stata** extension in VS Code, which is ten thousand times better than Stata's own do-file editor, with autocompletion, highlighting, real-time saving, multi-version editing, and more;
- Activate **GitHub Copilot** with student status, enabling AI code completion and generation.

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220135811022.png)

⬆️ Above is an example of editing a do-file in VS Code. In actual work, Copilot helps me with a great deal of completion work, such as renaming variables, writing loops, writing regression code, and so on.

For the **setup tutorial** above, see Li Ge's article: [Let Free AI Be Your RA -- STATA + VSCODE + Copilot](https://mp.weixin.qq.com/s/bZePPcsQL1Jw9C6mEF9Tdg)

Another AI development tool I highly recommend is **Cursor**. Before the winter break, as my usual pomodoro timer became harder and harder to use, I tried developing a pomodoro-timer prototype in Cursor that can record the time spent on different stages of a project. The interface is below:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220140401689.png)

In short, with AI's support, coding novices and newcomers can absolutely complete tasks that used to be very hard to achieve.

#### **Case 4: Simulating Humans (Agent level)**

Suppose that, at default parameters, an AI is an "**average person**." Then, by adjusting its parameters and assigning it a background, could a massive number of agents simulate a **society**? **AI as agent** may be the hottest social science AI project at the moment. I have not conducted research in this area, so here I attach some information, including interesting projects and posts I have written, for your reference.

- [AgentSociety 1.0: The Social Simulator for the LLM Era Is Here!](https://mp.weixin.qq.com/s/S84X5njED1wqqBl11oZIqg) Its introduction reads: "Tsinghua University has launched AgentSociety 1.0, a social simulator based on large models, which can precisely simulate social phenomena such as the spread of public opinion, the polarization of cognition and views, and public responses to policy, advancing intelligent social governance and a paradigm shift in scientific research."
- [PNAS: AI Can Provide Emotional Value, but the Effect Drops Once People Know the Truth](https://mp.weixin.qq.com/s/3Ttdc8_sxPTyt3zYyzR0KA) Using psychological experiments, this study finds that AI-generated messages make recipients feel more heard than human-generated messages, but once people realize a message comes from AI, the degree to which they feel heard declines.
- [Science: Cyber Captain Dragonfly? AI's Role in Democratic Deliberation](https://mp.weixin.qq.com/s/7gsnci46P2PMXvctHXIrVw) This paper explores the potential of artificial intelligence (AI) to promote consensus in democratic deliberation. By developing an AI mediation system called the "Habermas Machine," it helps people reach common positions on complex social and political issues. Through a series of experiments, including virtual citizens' assemblies involving more than 5,000 participants, the research shows that AI mediation is more effective than human mediation, producing group statements that are clearer and fairer while reducing within-group disagreement. While AI mediation shows excellent potential, the study also cautions that care is needed to ensure the fairness and representativeness of deliberation. In short, AI mediation offers an efficient and scalable solution for facilitating large-scale democratic deliberation.
- [Science: Conversations with AI Durably Reduce Conspiracy Beliefs](https://mp.weixin.qq.com/s/FZic4im4meN7sAmII8RYRw) This paper proposes a novel and promising approach to reducing belief in conspiracy theories, showing that through personalized dialogue with AI, even firm believers may change their beliefs. This approach differs from the previously pessimistic view that people deep in conspiracy theories are almost impossible to change. The research shows that **well-designed AI systems can play an important role in improving public discourse and countering misinformation**, provided they can be used responsibly.

Here are some AI agent collaboration platforms and research organizations:

- **Expected Parrot**: It has developed a suite of AI agent tools that make it easy to set agent parameters and deploy them, facilitating agent-based simulated survey experiments;
- **Sakana.ai**: This is an AI Scientist project, founded by one of the authors of Attention Is All You Need, aiming to build a fully automated scientific discovery system based on large models. For recent work, see the Swarma Club report: [What Exactly Is "Automated Search for Artificial Life" Searching For?](https://mp.weixin.qq.com/s/mMwPrnNXCh-QqMEPWdJ0XQ)

This part deserves a dedicated installment of its own!

#### **Case 5: Macro-Level Impact (Governance level)**

This part does not count as an application of AI so much as an impact of AI. Let's look at a study released by OpenAI:

A translation of the abstract follows:

> We propose a framework for assessing the potential impact of large language models (LLMs) and related technologies on work. The framework evaluates this by considering the relevance of these technologies to the tasks workers perform in their jobs. Applying this framework (using both human assessments and LLM assessments), we estimate that for about 1.8% of jobs, more than half of their tasks could be affected by an LLM with a simple interface and general-purpose training. When taking into account current and future software developments that could complement LLM capabilities, this share jumps to just over 46% of jobs.
>

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220143541239.png)

#### **Case 6: Trustworthy Literature Review Generation and Processing (RA level)**

This has long been a pain point and a difficulty for researchers at large. In the early days, **AI hallucination** was severe, and fabricated references were extremely common. But with AI's rapid development, this difficulty is gradually being conquered. I introduced some of the methods in a post last year; see: [An Introduction to Two AI Literature Review Platforms](https://mp.weixin.qq.com/s/Y6N1lEITz02elLy1Tk2Hsw).

In the past two months, I have made some new discoveries to share with you.

First, a list of AI literature review sites/platforms:

- **Paper Digest**: https://www.paperdigest.org/review/
- **scite**: https://scite.ai/
- **Consensus**: https://consensus.app/search/
- **Ai2 Scholar QA**: https://scholarqa.allen.ai/
- **Elicit**: https://elicit.com/
- **ScienceDirect AI**: https://www.sciencedirect.com/ai

Their advantage is that they all support **claim-supported literature search**, that is, you can have the AI return literature supporting a given claim, and the references actually exist. In the usage feedback from friends such as pw, Consensus is among the best; personally, I think Ai2 Scholar QA and ScienceDirect AI are also quite good.

There is also a new **brute-force** method: compile the titles, author names, years, abstracts, and main content of dozens of papers on the same topic, and dump them all at once into a model that supports **long context**, such as o1pro or the Gemini 2.0 series. You can get a rather good result, with clear logic and accurate citations. For example, below, I compiled the BibTeX of dozens of papers on "**promotion patterns of Chinese officials**," deleted the useless fields, and threw it to o1pro to write a review. If I didn't tell you, could you tell it was AI-generated? ⬇️

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220150454669.png)

From Pan Wang, a dazzling star in the PA field, I learned a new AI-assisted literature workflow, suitable for those who work with **LaTeX** or **Typst**: ask the model to output in a format that supports LaTeX or Typst citations, so that the output comes with complete citations built in and needs no manual adjustment afterwards. This avoids the hassle of manually converting AI-generated content in Word into citations inserted by Zotero or other reference managers. The rough effect is as follows:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250220151034216.png)

⬆️ In the figure, the left side is the Typst file, whose text was generated by AI; the right side is the corresponding PDF, where the blue parts indicate successful citations.

#### **Case 7: deep research (Super agent level)**

It may be the reason you and I end up unemployed. **Greatness needs no words.**

In 2023, I wondered what value AI had for me; in 2024, I wondered what value I had for AI; now, I wonder what would be good for dinner. AI's pace of progress over the past two years has been too fast. According to OpenAI's own roadmap, L3-level AI, that is, agents, is already landing. For a deep research case, see the post below:

- [Deep Research Will Make Literature-Sharing Public Accounts Pointless](https://mp.weixin.qq.com/s/cSFyFFnp5WVxmjYcrD3vtw)

Below are some technical characteristics of OpenAI's deep research (provided by Perplexity):

> OpenAI's Deep Research is a new kind of AI deep-research tool, designed to support users who need to conduct complex and in-depth research. The tool can complete, in a short time (usually 5 to 30 minutes), research tasks that would otherwise take human experts hours or even days. Its features include:
>
> - **Multi-step autonomous research**: With just a single prompt from the user, Deep Research automatically searches, analyzes, and integrates large amounts of information from the internet to generate a professional-grade research report.
> - **Built on the o3 model**: Deep Research is built on OpenAI's newly released o3 model, which has been optimized specifically for web browsing and data analysis. It has strong reasoning capabilities and can adjust its research direction based on real-time information.
>

In recent days, I have used deep research to generate some reports and reviews. My overall **impressions**:

- The content deep research generates is quite usable; the result it delivers in a single run might take me a month of work;
- Deep research is good at generating report-type content and is for now not suited to other content, because it is designed as a research agent and tends not to follow instructions when doing anything else;
- In my usage, a single report can reach 60,000 characters, and is usually around 20,000.

One can imagine how big a shock deep research is to researchers whose **output is pure text**, including humanities disciplines such as literature, history, and philosophy, as well as disciplines adept at writing empty words, such as management. It will make **commissioned (horizontal) projects**, which already amount to piling up word counts, even more meaningless.

At present, the difficulty deep research faces in writing reviews is journal paywalls. Once it breaks through to the journal databases, where does the meaning of the traditional literature review lie?

Google and Perplexity also have their own deep research features, but their current results are still far behind OpenAI's.

#### **Other Tools**

- Portal: https://ai-bot.cn/

**Domestic Chinese Research Platforms**

- Metaso Search: https://metaso.cn/
- Tiangong AI: https://www.tiangong.cn/

**AI Writing and Proofreading Tools**

- iFLYTEK Feiying Intelligent Proofreading System: https://feiying.iflytek.com/
- Metaso Writing Cat (Xiezuocat): https://xiezuocat.com/
- Worddvice.AI: https://wordvice.ai/cn
- Writefull: https://x.writefull.com/
- QuillBot: https://quillbot.com/
- iFLYTEK Official Document Writing: https://gw.iflydocs.com/?from=aibot#/dashboard
- Microsoft 365 Copilot: https://www.microsoft.com/en-us/microsoft-365/copilot

## Extra

- Writing the case section of this post was quite painful, because these cases call for **live demonstration**; screenshots rarely do them justice, and too many screenshots really are unsightly.
- I also used deep research to generate several versions of "**How AI Accelerates Academic Research**," placed at the link below. Teachers and students who are interested are welcome to download and read them; I think their quality will pleasantly surprise you. If I were an **academic baron**, some of the content could perfectly well be "submitted via **WeChat**" to the editors of CSSCI journals. In addition, the papers corresponding to the 5 levels mentioned in this post, together with the slides I used for my presentation, are at the same link. (Link: https://pan.baidu.com/s/1BUmy5m6WUy6V66IKM7rLqQ?pwd=fqck Extraction code: fqck)
- **API is all you need.** DeepSeek R1 went viral this month, and with the official site and app too crowded to get into, you may already be trying the API services of cloud vendors. In many cases, calling an API really can work brute-force miracles; it is like hiring an RA and solving the problem in a very direct, first-principles way. Let me take this opportunity to recommend **Cherry Studio**: I used to configure cloud models with OpenWeb UI, but recently found Cherry Studio more usable. For a setup tutorial, see Bo Ge's post: [How to Freeload the Tech Giants' DeepSeek Quotas](https://mp.weixin.qq.com/s/DYoC9wqeEMyoyP81s7GXuA)
- If you have handy AI use cases, please leave me a message as well. Many thanks.
- Perhaps in the near future, everyone will go through their own "**Lee Sedol moment**": being overtaken by AI in the very field they consider their specialty. So before that happens, spend more time getting to know AI.
- If your research group is not extremely short of funding, I suggest subscribing to a frontier model and trying it out, at least for one member of the group. Since this expense is hard to reimburse, funding it as labor fees or research assistantship stipends is a good option.
- If your research group is interested in the content of this post and would like to discuss it further, please contact me directly by private message.
- If you find this post helpful, please do not hesitate to "**tip**" my work below ⬇️ to help me ease the cost pressure of using large models; I am paying for this part of my work out of pocket. Thank you very much! (Feels just like a Bilibili uploader asking for the "triple combo" 😂)
