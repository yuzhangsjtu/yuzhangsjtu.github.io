---
title: "NotebookLM Now Supports Chinese Podcasts and Mind Maps: Let's Try Them Out"
date: 2025-05-01T18:00:00+08:00
category: { name: "Tech", slug: tech }
tags: ["HIBL", "origin of issues", "AAAR"]
summary: "NotebookLM's podcast feature now supports Chinese, along with interactive podcasts and mind map generation, offering a personalized and deep listening experience."
---

> In last December’s post “[Introducing Two AI Literature Review Platforms](https://mp.weixin.qq.com/s/Y6N1lEITz02elLy1Tk2Hsw),” I explained how to use Google NotebookLM for literature review and mentioned that it can generate an English podcast dialogue between two speakers—a feature with great potential. Recently, NotebookLM has added support for **Chinese-language podcasts**, introduced **podcast interaction**, and can now generate **mind maps**. Let’s take a look!

## NotebookLM Podcasts

#### **Chinese-language support**

Podcasts — or audio in general — are an important **form of companionship** for me. I listen while eating, before bed, during my bedtime routine, when citywalk-ing (strolling, to use another term) or when cycling: sometimes podcasts on Xiaoyuzhou or Spotify, sometimes programs from Bilibili or YouTube. Here are my listening stats from **Xiaoyuzhou** ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/1746086467458.jpg)

NotebookLM’s podcast feature draws on personalized sources; the conversation is natural and the content has depth — something **Andrej Karpathy** has highly praised ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501144517724.png)

Last year I demonstrated the English podcast it produced. Now it supports over 50 languages, including **Chinese**.

Here, I fed it the paper from my last post as source material ([AER — Where Do States Come From? River Diversion and the Birth of Early States](https://mp.weixin.qq.com/s/YInjbcPjBDRwpiu1CmRM9Q)), gave it the PDF, and let it generate a podcast. The result:

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=3076638712&auto=0&height=66"></iframe>

Or access as Bilibili audio: [https://www.bilibili.com/audio/au4803525](https://www.bilibili.com/audio/au4803525)

I recommend clicking the audio above and listening through.

I used **Tongyi Tingwu** to transcribe the audio into dialogue text. A snippet is below ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501145517983.png)

To summarize, NotebookLM’s audio has the following qualities:

- **Colloquial, not academic language**: Compared with having an LLM summarize the paper directly, the conversational style of NotebookLM’s two hosts is more colloquial and follows the cadence of everyday speech;
- **Deep Q&A interaction**: The two hosts carry the dialogue forward as a mutual Q&A, and the conversation does not stick strictly to the source material. It digresses appropriately. For example, at the end of this episode, the two hosts (🤖) asked: “The environmental challenges thousands of years ago shaped the earliest known state forms. And today we are facing global environmental challenges — something like climate change. How might challenges like these change and perhaps reshape our future **governance structures** and the ways we will cooperate with one another?”
- **Natural pronunciation overall, but there’s still room for improvement**: Listening to the audio for a while, you realize that NotebookLM is more than just text-to-speech. It has been optimized for everyday conversation — in short, it has that “real person talking” flavor. But conversational transitions and the pronunciation of isolated characters could still be polished.

For the same AER paper, I also had it generate English audio. Let’s listen to it:

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=3076684731&auto=0&height=66"></iframe>

Or access as Bilibili audio: [https://www.bilibili.com/audio/au4803526](https://www.bilibili.com/audio/au4803526)

Personally, I think the English podcast outperforms its Chinese counterpart in text quality, conversational fluency, and pronunciation — and it truly sounds American. It especially loves the word “**Exactly**.”

#### **Interactive mode**

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/image-20250501151541079.png)

In a recent update, the podcast feature also supports interactive mode (**Interactive mode**). Tap it to join the two-person conversation, ask your own follow-up questions, or offer your thoughts. I gave it a try: the response is fast and the conversation quality is good.

It’s worth noting that, when generating the podcast, you can add **custom instructions** — for example, telling it to describe methods sections in greater detail.

## NotebookLM Mind Map

In an earlier update, NotebookLM gained the ability to generate mind maps. I previously experimented with specific **GPTs** or dedicated tools to generate mind maps of papers — the results were decent. NotebookLM, however, delivers better performance and can handle literature sources of up to 300 PDFs.

Once again using the same paper as an example, let me briefly showcase its output, in overview ⬇️:

![NotebookLM Mind Map (1)](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/NotebookLM%20Mind%20Map%20(1).png)

When fully expanded, the file size reaches 7.3 MB and the image dimensions are 8795 × 15 637 pixels, so the presentation may be limited within WeChat, but it looks great on the original page. Here is the content ⬇️:

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2025/NotebookLM%20Mind%20Map.png)

If you’re interested, you can zoom in on the image or try it yourself on the website. The result is quite nice. For now, though, the mind maps do not support editing — I’m looking forward to editing features being added.

## Extra

*   I don’t know how to refer to the two hosts in a NotebookLM podcast — especially when I myself join their conversation in the second person (you). Are they people? Robots? Or machines 🤖?
*   Happy holidays to everyone — enjoy yourselves!
