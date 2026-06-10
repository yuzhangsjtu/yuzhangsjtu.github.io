---
title: "本地部署Llama3并构建私人知识库进行问答"
date: 2024-05-14T18:00:00+08:00
category: { name: "技术", slug: tech }
tags: ["Llama", "RAG", "ChatGPT", "Claude", "LLM"]
summary: "Llama3性能不错，但本地知识库的问答效果还比较差。"
---

Meta于上个月发布了**Llama3**大语言模型，其技术文档里提到，Llama3 8B版本的性能相比同规模的开源模型强出不少，而后网友测试显示Llama3 70B的性能甚至不逊于早期版本的GPT4。开源、可本地运行的大语言模型给了我们更多关于LLM使用场景的想象。包括但不限于：

- 在本地与GPT3.5级别的LLM聊天；
- 调用本地模型的api进行文本分析，如情感识别、文本分类；
- 构建私人知识库，进行问答。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/439319690_397886903122928_1260706828132327359_n.png?_nc_cat=105&ccb=1-7&_nc_sid=f537c7&_nc_ohc=pm6Hu7Pd9XwQ7kNvgEDveT9&_nc_oc=AdgzNdYahSHN9M86klLxNzo7MaawxcQYKd_Sg9ZEtwRkL6PUh5aoeY6wtKjmavuqyaM&_nc_ht=scontent-hkg1-1.png)

在最新的[大模型竞技场](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)中（https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard），Llama3 70B的排名在GPT-4-0314之前，Llama3 8B也超越了GPT-3.5-Turbo。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513200410629.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513200556843.png)

现在，就让我们在本地部署Llama3 8B并构建私人知识库，进行简单试用吧！

我的设备：2021款 Macbook Pro 16G + 1T，处理器为M1 Pro基础款。

其实我更想在本地部署Llama3 70B，但这需要发动钞能力，而我目前只是个社科土博，等后面吧。

## 1 利用Ollama和Open WebUI使用本地LLM

#### **1.1 基于Ollama本地部署Llama3 8B**

Ollama是一个简易的LLM本地部署工具，可直接在Ollama官方网站下载安装。

Ollama官方网址：https://ollama.com/

Ollama的Github仓库：https://github.com/ollama/ollama

<img src="https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513202229808.png" style="zoom:50%;" />

Ollama官方提供了许多模型供大家部署，在模型页面，可以找到Llama3，我这里下载的是8B的instruct版本，大小为4.7GB：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513202530989.png)

在`Terminal`运行`ollama run llama3:70b`，等待模型在本地部署完成。模型部署完成后已经可以在终端进行对话了，但过于简陋，我们可以用WebUI装潢一下。

#### **1.2 部署Open WebUI**

Open WebUI也是一个Github项目，它对基于Ollama部署的模型，提供了类ChatGPT的UI支持！

Github仓库：https://github.com/open-webui/open-webui

在这里，我们使用Open WebUI官方推荐的Docker安装方式（相见官方文档）：

```python
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

安装完成后，在浏览器3000端口可以打开WebUI，注册登陆，网站布局是不是很熟悉？和ChatGPT很像！在设置里，Connections填写Ollama的地址：`http://host.docker.internal:11434`。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204831487.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204653700.png)

在对话之前，点击顶部的`+`选择模型。如果使用Ollama安装了多个模型，则都会显示出来。

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513204934221.png)

我们测试几个问题，由于Llama3对中文的支持比较差，我们在提问时，需要加上让它使用中文回答的提示词：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205234218.png)

可以发现，它对这个问题的回答，给了我们熟悉的GPT3.5的感觉，本质就是**胡说八道**！

再问一个：
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205837087.png)

再来挑战几个弱智吧问题，居然回答得还不错：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205920156.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513210111752.png)

如果使用**英语**提问，并且问题不涉及事实问题，它的回答质量会高很多：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205510014.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513205613271.png)

即使在GPT时代，用好英语，仍然非常有必要。

#### **1.3 Llama3 对话体验**

就Llama3 8B而言，我感觉使用体验已经很不错了，对话流畅度完全没有问题，配合文本转语音，日常练习口语非常可用！

如果可以在本地部署Llama3 70B的话，使用体验会更上一层楼。我在Groq试用过Llama3 70B，其对于涉及事实问题的回答会好很多：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513210943148.png)

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513211028036.png)

## 2 构建私人知识库并进行问答

现在市面上有许多基于**RAG**（检索增强生成，Retrieval-Augmented Generation，RAG）的工具，方便构建本地知识库，并进行问答。我试用过的有：

**Dify**：https://github.com/langgenius/dify

**ChatOllama**：https://github.com/sugarforever/chat-ollama

**MaxKB**：https://github.com/1Panel-dev/MaxKB

整体而言，使用体验都比较差！！！但作为一种可能的方向，或许在未来有很大的改进效果，这里先以MaxKB试试看。

#### **2.1 部署MaxKB**

使用MaxKB官方提供的一键安装命令即可：

```python
docker run -d --name=maxkb -p 8080:8080 -v ~/.maxkb:/var/lib/postgresql/data 1panel/maxkb

# 用户名: admin
# 密码: MaxKB@123..
```

安装完成后，可以在本地的8080端口打开，登陆信息使用默认的就行：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212206275.png)

进入后，在设置里，“模型设置”添加Ollama部署的Llama3，信息如下，其中API Key可以随便填：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212407082.png)

现在，我们已经完成了简单配置，已经可以使用MaxKB进行问答了（也就是说，MaxKB也可以作为简单的UI使用）：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513212651537.png)

#### **2.2 搭建私人知识库并进行问答**

在这里，我简单构建了两个知识库，一个是我的博客，一个是一个特定主题（政治信任）的10篇论文，按要求提交内容即可：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213106812.png)

自动获取的博客内容如下：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213035044.png)

导入pdf后，MaxKB需要一段时间进行文档处理：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213731092.png)

现在，进行问答试试，先配置一下：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513213903579.png)

在问题和文档强相关，尤其是直接涉及知识库论文的标题的时候，它是会索引知识库内容的，但回答的结果质量不高：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513214129282.png)

何为Missing women这个问题，我在博客有直接的内容，但它在回答时并没有引用：

![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513214338243.png)

再用中文试一次，效果仍然比较差：
![](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240513214624788.png)

## 3 总结

最新的Llama3，基础版本在对话方面，已经非常可用，相当于本地有了一个随时可以聊天的助手。

在构建私人知识库进行问答方面，我试的几个工具，目前都还处于不太可用的状态，我调过一些参数，也尝试了使用Markdown文本的知识库，都不OK。

期待早日这类工具能更完善些，或者LLM运营商提供私人知识库服务。

更期待Llama3 70B级别的LLM能在本地便捷地运行起来。

如果您在这方面有经验，也请随时和我交流！不胜感激！
