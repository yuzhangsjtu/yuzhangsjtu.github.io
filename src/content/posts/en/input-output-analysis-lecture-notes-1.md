---
title: "Input-Output Analysis Lecture Notes (1) — BNU Lecture"
date: 2020-07-23T20:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["Input-Output Analysis", "MRIO", "Input-Output"]
summary: "Starting to learn new skills, planning to work with Kui on SDG synergies and trade-offs and carbon emissions from China's agricultural transition."
---

Resource：https://www.bilibili.com/video/BV1tV411k7Mv?from=search&seid=6441224671028534611

### 1. Basic Concepts

#### 1.1 Origins

Also known as “sectoral balance” analysis, or “industrial linkages” analysis, it was first proposed by Leontief. By compiling input–output tables and establishing corresponding mathematical models, it reflects the interrelationships among the various sectors (industries) of an economic system.

#### 1.2 Applications

Since the 1960s, input–output analysis has been widely applied by geographers to regional industrial structure analysis, regional interaction analysis, and studies on resource utilization and environmental protection, among others. **It is a powerful tool for regional change, global change research, and carbon emission issues!**

#### 1.3 Fundamental Concepts

- Input: refers to the various consumptions in an economic activity, including material and non-material product consumptions, tangible and intangible product consumptions.
- Output: refers to the results of production activities and the destinations and flows of their distribution and use. (Includes: material and non-material products, physical goods, and service products.)
- Input–Output Table: a checkerboard‑style table (matrix) that shows the sources of various products' production inputs and their distribution destinations.
- Input–Output Mathematical Model: a set of linear algebraic equations that uses mathematical models (equations) to represent the economic content reflected in an input–output table.
- Function: reflect the balance relationships between production, distribution, and use, and between production and consumption, across sectors and industries. Hence, it is also called the sectoral interrelationship balance method.

![](https://i.loli.net/2020/07/23/TjN6ROebr1u5lQi.png)



### 2. Basic Principles of the Input–Output Model

#### 2.1 Model Classification

- Physical Input–Output Table: Compiled for various products, using different physical measurement units;
- Value‑Type Input–Output Table: Divides the whole economic system into several subsystems—production sectors—and uses monetary measurement units. It can reflect not only the physical movement process of each sector's products but also describe the value flow process of those products.

![](https://i.loli.net/2020/07/23/DLYGOwi3oNtxWy2.png)

**Rows are output; columns are input.**

Suppose sector 1 is agriculture and sector 2 is electricity; then X~21~ means: to satisfy the agricultural sector’s production, what is the intermediate input from the electricity sector?

E<sub>1</sub> means: for intermediate use within the economic system, what is the total input to the agricultural sector?

C<sub>1</sub> is then the total input required by sector 1;

y<sub>2</sub> indicates the total direct consumption of the electricity sector;

x<sub>1</sub> is the row sum, i.e., E<sub>1</sub>+y<sub>1</sub>;

Newly‑created value is value added:

v~1~ is then the value‑added input of the agricultural sector.

- Row balance relationship: Intermediate demand (Z) + Final use (y) = Total output (X)
- Column balance relationship: Intermediate input (Y) + Value added    (v) = Total input (X)

![](https://i.loli.net/2020/07/23/7jmDsdOackxoNlI.png)

![](https://i.loli.net/2020/07/23/FPIHgpBw2skA6Zv.png)

**Direct input coefficient.** Core equation, product distribution system of equations.

![](https://i.loli.net/2020/07/23/tc4of3Wzr2KLAPb.png)

An example:

Suppose you buy a packet of instant noodles; Y is the individual’s direct consumption of that packet, but via (I-A)<sup>-1</sup>, one can trace back all the intermediate inputs involved in that packet: agricultural wheat production, industrial outer‑packaging processing, transportation inputs, trade, etc.

![](https://i.loli.net/2020/07/23/vWRx73c4lQDjGXB.png)

In the diagram above, indirect input refers to indirect inputs through multiple rounds of trade for a product (system). **L** is the Leontief inverse matrix.

![](https://i.loli.net/2020/07/23/6w1HlucMzTOFG9p.png)

![](https://i.loli.net/2020/07/23/h4KyMq7jYNZizwp.png)

![](https://i.loli.net/2020/07/23/nOefiMFkqsjICJm.png)

Models by row are relatively more common.

### 3. Environmentally Extended Input–Output Model

![](https://i.loli.net/2020/07/23/lxdfsbMtRAOC1ZV.png)

Take carbon emissions as an example: direct emissions from household heating and combustion, indirect carbon emissions from electricity, study, social activities, etc. (The diagram above is about carbon emissions in academic exchanges.)

The concept of “step length”; for example, for an airplane, the step length is 2.

#### 3.1 Function and Purpose

- Research on resource utilization and environmental emission issues often overlooks the interlinkages among the various industrial sectors in the process;
- Input–output analysis is an effective research method that connects economic activities with environmental pollution and protection problems. In the early 1970‑s, Leontief applied the input–output model to analyze issues of environmental pollution and abatement.

#### 3.2 Environmentally Extended Input–Output Table

![](https://i.loli.net/2020/07/23/NRJxh3n68Zb4Amc.png)

C<sub>1</sub> is the total resource requirement of the agricultural sector.

![](https://i.loli.net/2020/07/23/5hRqlF3PMkfDT1G.png)

![](https://i.loli.net/2020/07/23/qHO9UXfQp1Gibkv.png)

![](https://i.loli.net/2020/07/23/lrIZ2R5unGK69fs.png)

### 4. Practical Application Training with the Model

Aww, no data available.

See Excel file.
