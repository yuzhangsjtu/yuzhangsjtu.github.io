---
title: "Input-Output Analysis Study Notes (1): BNU Lecture"
date: 2020-07-23T20:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["Input-Output Analysis", "MRIO", "Input-Output"]
summary: "Starting to learn a new skill. I want to work with Kui on the synergies and trade-offs of SDGs, and on the carbon emission problems of China's agricultural transition."
---

Resource: https://www.bilibili.com/video/BV1tV411k7Mv?from=search&seid=6441224671028534611

### 1. Basic Concepts

#### 1.1 Origins

Also known as "sectoral balance" analysis, or "industrial linkage" analysis, it was first proposed by Leontief. Mainly by compiling input-output tables and establishing corresponding mathematical models, it reflects the interrelationships among the various sectors (industries) of an economic system.

#### 1.2 Applications

Since the 1960s, input-output analysis has been widely applied by geographers to regional industrial structure analysis, regional interaction analysis, and studies on resource utilization and environmental protection, among other areas. **It is a powerful tool for research on regional change, global change, carbon emission issues, and the like!**

#### 1.3 Fundamental Concepts

- Input: refers to the various consumptions in an economic activity. This includes the consumption of material and non-material products, as well as tangible and intangible products.
- Output: refers to the results of production activities and the destinations and flows of their distribution and use. (Including: material and non-material products, physical goods and service products.)
- Input-Output Table: a checkerboard-style table that reflects the sources of various products' production inputs and their distribution destinations. (A matrix table.)
- Input-Output Mathematical Model: a set of linear algebraic equations that uses mathematical models (equations) to embody the economic content reflected in an input-output table.
- Function: it reflects the balance relationships between production and distribution-and-use, and between production and consumption, across the various sectors and industries. For this reason it is also called the sectoral interrelationship balance method.

![](https://i.loli.net/2020/07/23/TjN6ROebr1u5lQi.png)



### 2. Basic Principles of the Input-Output Model

#### 2.1 Model Classification

- Physical Input-Output Table: compiled with various products as the objects, using different physical units of measurement;
- Value-Type Input-Output Table: divides the entire economic system into several subsystems (production sectors) and uses money as the unit of measurement. It can not only reflect the physical movement process of each sector's products but also describe the value flow process of each sector's products.

![](https://i.loli.net/2020/07/23/DLYGOwi3oNtxWy2.png)

**Rows are output; columns are input.**

Suppose sector 1 is agriculture and sector 2 is electricity; then the meaning of X~21~ is: to satisfy the production of the agricultural sector, what is the intermediate input from the electricity sector?

E<sub>1</sub> is: to satisfy the intermediate use of the economic system, what is the total input of the agricultural sector?

C<sub>1</sub> is then the total input required by sector 1;

y<sub>2</sub> indicates the total direct consumption of the electricity sector;

x<sub>1</sub> is the sum of the first row, i.e., E<sub>1</sub>+y<sub>1</sub>;

Newly created value is value added:

v~1~ is then the additional input of the agricultural sector.

- Row balance relationship: Intermediate demand (Z) + Final use (y) = Total output (X)
- Column balance relationship: Intermediate input (Y) + Value added    (v) = Total input (X)

![](https://i.loli.net/2020/07/23/7jmDsdOackxoNlI.png)

![](https://i.loli.net/2020/07/23/FPIHgpBw2skA6Zv.png)

**Direct consumption coefficient.** The core equation, the product distribution system of equations.

![](https://i.loli.net/2020/07/23/tc4of3Wzr2KLAPb.png)

For example:

When you buy a packet of instant noodles, Y is the individual's direct consumption of that packet, but through (I-A)<sup>-1</sup>, one can trace back all the intermediate inputs of that packet, such as wheat production in agriculture, outer-packaging processing in industry, transportation inputs, trade, and so on.

![](https://i.loli.net/2020/07/23/vWRx73c4lQDjGXB.png)

In the diagram above, indirect input refers to the indirect input from multiple rounds of trade for one product (the system). **L** is the Leontief inverse matrix.

![](https://i.loli.net/2020/07/23/6w1HlucMzTOFG9p.png)

![](https://i.loli.net/2020/07/23/h4KyMq7jYNZizwp.png)

![](https://i.loli.net/2020/07/23/nOefiMFkqsjICJm.png)

Building models by row is more common.

### 3. Environmentally Extended Input-Output Model

![](https://i.loli.net/2020/07/23/lxdfsbMtRAOC1ZV.png)

Take carbon emissions as an example: direct emissions such as household heating and combustion, and indirect carbon emissions from electricity, study, social activities, and so on. (The diagram above shows carbon emissions in academic exchange.)

The concept of step length; for example, for an airplane the step length is 2.

#### 3.1 Function and Purpose

- Research on resource utilization and environmental emission issues usually overlooks the interlinkages among the various industrial sectors in the process of resource utilization and emission;
- Input-output analysis is an effective research method that links economic activities with environmental pollution and protection issues. In the early 1970s, Leontief once used the input-output model to study issues of environmental pollution and abatement.

#### 3.2 Environmentally Extended Input-Output Table

![](https://i.loli.net/2020/07/23/NRJxh3n68Zb4Amc.png)

C<sub>1</sub> is the resource consumption required by the entire agricultural sector.

![](https://i.loli.net/2020/07/23/5hRqlF3PMkfDT1G.png)

![](https://i.loli.net/2020/07/23/qHO9UXfQp1Gibkv.png)

![](https://i.loli.net/2020/07/23/lrIZ2R5unGK69fs.png)

### 4. Practical Application Training with the Model

Boohoo, there's no data.

See the Excel file.
