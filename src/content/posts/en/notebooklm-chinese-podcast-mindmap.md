---
title: "NotebookLM Now Supports Chinese Podcasts and Mind Maps: Let's Try Them Out"
date: 2025-05-01T18:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["HIBL", "Origin Question", "AAAR"]
summary: "Authentic AI Chinese podcasts have arrived!"
---

> In last December's post "[Introducing Two AI Literature Review Platforms](https://mp.weixin.qq.com/s/Y6N1lEITz02elLy1Tk2Hsw)," I explained how Google NotebookLM can be used in literature reviews, and mentioned that it supports generating two-person English podcasts — a feature with great potential. Recently, NotebookLM has added support for **Chinese podcasts**, along with **podcast interaction** and the generation of **mind maps**. Let's take a look!

## NotebookLM Podcasts

#### **Chinese support**

Podcasts — or audio in general — are an important **form of companionship** for me. While eating, before bed, during my washing-up routine, when citywalk-ing (a "street stroller") or when cycling, I listen to audio — sometimes podcasts on Xiaoyuzhou or Spotify, sometimes programs from Bilibili or YouTube. Below are my listening stats from **Xiaoyuzhou** ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/1746086467458.jpg)

NotebookLM's podcast feature offers personalized source material, and the conversation is natural and the content has depth — earning high praise from **Andrej Karpathy** ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501144517724.png)

Last year I demonstrated the English podcast it produced; now it supports over 50 languages, including **Chinese**.

Here, I used the paper from my last post as source material ([AER — Where Do States Come From? River Diversion and the Birth of Early States](https://mp.weixin.qq.com/s/YInjbcPjBDRwpiu1CmRM9Q)), imported the paper's PDF, and let it generate a podcast. The result is below:

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=3076638712&auto=0&height=66"></iframe>

Or access the audio on Bilibili: [https://www.bilibili.com/audio/au4803525](https://www.bilibili.com/audio/au4803525)

I recommend clicking the audio above and listening through.

I used **Tongyi Tingwu** to transcribe the audio into dialogue text. A portion is below ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501145517983.png)

To summarize, NotebookLM's audio has the following qualities:

- **Colloquial rather than academic language**: Compared with directly having an LLM summarize the paper, the conversational language of NotebookLM's two hosts is more colloquial and matches the habits of everyday conversation;
- **Deep Q&A interaction**: The two hosts advance the dialogue in the form of a mutual Q&A, and the conversation is not confined to the original material, digressing moderately. For example, at the end of this conversation, the two hosts (🤖) remarked: "Environmental challenges thousands of years ago shaped the earliest known state forms. So today, with the global environmental challenges we face, like climate change and such — how might challenges like these change, or rather reshape, our future **governance structures** and the ways we cooperate with one another?"
- **Authentic pronunciation, but still room for improvement**: Listen to the audio for a while and you will notice that NotebookLM does not simply convert text to speech, but has optimized for everyday conversation — in short, it has that real-person-conversation flavor. But the conversational transitions and the pronunciation of individual characters still have room for improvement.

For this AER paper, I also had it generate English audio. Let's give it a listen as well:

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=3076684731&auto=0&height=66"></iframe>

Or access the audio on Bilibili: [https://www.bilibili.com/audio/au4803526](https://www.bilibili.com/audio/au4803526)

Personally, I think the English podcast outperforms the Chinese one in text quality, conversational fluency, and pronunciation — and it really is American, especially fond of using "**Exactly**."

#### **Interactive mode**

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501151541079.png)

In a recent update, the podcast feature also supports interactive mode (**Interactive mode**). Click it to join the two-person conversation, ask about other information you want to know, or offer your own insights. I gave it a try: the response speed is fast and the conversation quality is good too.

It is worth noting that, when generating the podcast, users can add **custom requirements** — for example, telling it to give a more detailed account of the methods section.

## NotebookLM Mind Maps

In an even earlier update, NotebookLM gained support for generating mind maps. I had previously tried using specific **GPTs** or dedicated tools to generate mind maps of papers, and the results were decent. NotebookLM, however, has better performance and supports literature sources of up to 300 PDFs.

Again using the paper above as an example, let me briefly showcase its output. An overview is below ⬇️:

![NotebookLM Mind Map (1)](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/NotebookLM%20Mind%20Map%20(1).png)

When fully expanded, the file reaches 7.3MB and the image dimensions are 8795 × 15637, so the presentation on WeChat may be limited, but it looks good on the original web page. The content is below ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/NotebookLM%20Mind%20Map.png)

If you are interested, you can also zoom in on the image or go try it yourself on the website — the results are quite nice. For now, though, the mind maps do not support editing; I am looking forward to editing features being added later.

## Extra

- I don't know what to call the two hosts in a NotebookLM podcast, especially when I join their conversation in the second person (you). Are they people? Robots? Or machines 🤖.
- Happy holidays to everyone, and have fun!
