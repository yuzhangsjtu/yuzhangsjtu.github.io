---
title: "EXIOBASE结构介绍"
date: 2023-11-16T10:00:00+08:00
category: { name: "研究笔记", slug: research }
tags: ["MRIO", "MATLAB", "投入产出分析"]
summary: "细细拆解一下EXIOBASE，了解其构造，这是使用的基础。"
---

#### 整体介绍：

首先来看“气候变化经济学”的介绍（基本是从EXIOBASE3论文里摘录的）：

> **EXIOBASE 第三版 多区域环境拓展型供需表和投入产出表**
>
> EXIOBASE是详细的全球多区域环境扩展的供需表和投入产出表（EE MRIO）。EXIOBASE是与环境经济核算系统（SEEA）兼容的数据库，具有很高的部门详细信息，并同时与多个社会消耗清单相匹配。最新的第三版EXIOBASE数据编制完成了从1995年到2011年的EE MRIO时序表，涵盖44个国家（28个欧盟成员国加16个世界主要经济体）和世界其它5个地区。
>
> 第三版EXIOBASE在以前版本的基础上，以163个行业（按200种产品分类）的矩形供需表用作主要构建基础，使用贸易数据将国家供应用途表链接起来，从而创建了一个多区域供需表，并由此生成多区域投入产出表。第三版EXIOBASE为广大科研工作者提供了一个独特的工具来分析经济活动的环境压力随着时间变化的动态影响。
>
> EXIOBASE3数据一览：
>
> ![Image](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/640.png)

详细的产品、行业、地区列表，请见EXIOBASE3论文附件9或[点击此处](https://onlinelibrary.wiley.com/action/downloadSupplement?doi=10.1111%2Fjiec.12715&file=jiec12715-sup-0009-SuppMat-9.xlsx)。

EEMRIOT示例如下：

![Screenshot 2023-11-17 at 13.27.56](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/Screenshot%202023-11-17%20at%2013.27.56.png)

在EXIOBASE，数据是通过欧盟统计局从欧盟27国收集的，以及来自其他16个国家的其他SUT和IO表。这些加起来覆盖了全球国内生产总值（GDP）的90%。

#### 文件结构

关于EXIOBASE的一些说明(这里其实需要一些关于投入产出表的基础知识和EXIOBASE的结构，及其卫星账户的知识)：
发现WIOD和EORA都更新了，WIOD更新了2000年之前的一些东西，EORA也到2022，但2016年之后的年份就是在抢钱。ICIO有1995-2018。

1. **数据时效：**The original EXIOBASE 3 data series ends 2011. In addition, we also have estimates based on a range of auxiliary data, but mainly trade and macro-economic data which go up to 2022 when including IMF expectations. A lot of care must be taken in use of this data. It is only partially suitable for analysing trends over time! As of v3.8 (doi: 10.5281/zenodo.4277368), the end years of real data points used are: 2015 energy, 2019 all GHG (non fuel, non-CO2 are nowcasted from 2018), 2013 material, 2011 most others, land, water. More details are available in the readme file.

2. 文件命名：

   - IOT_YYYY_ixi.zip - MRIO archive for Year YYYY in industry by industry format 即部门表
   - IOT_YYYY_pxp.zip - MRIO archive for Year YYYY in product by product format 即产品表 (原始页面这里写错了，应该是pxp，不是ixi)

   这两种结构的进一步细节可在EUROSTAT手册（[EUROSTAT 2008](https://ec.europa.eu/eurostat/documents/3859598/5902113/KS-RA-07-013-EN.PDF/b0b3d71e-3930-4442-94be-70b36cea9b39)）中找到。

3. **文件结构：**
   The MRIO archive contains the following files:

   - Z.txt - flow/transactions matrix
   - A.txt - matrix/inter-industry coefficients, (direct requirements matrix)
   - Y.txt - final demand
   - x.txt - gross/total output
   - unit.txt - Units of the flow data
   - MRIOT一般结构，更多介绍参见：[An Introductory Review of Input-Output Analysis in Sustainability Sciences Including Potential Implications of Aggregation](https://www.mdpi.com/2071-1050/15/1/46)。卫星账户其实就是在表的下部加上就可以啦。
   
   ![image-20231117142147820](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20231117142147820.png)
   
   or：
   
   ![image-20231117144716245](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20231117144716245.png)
   
4. **两个扩展资料：**

   - satellite - uncharacterized stressors data - e.g. CO2 emissions, land use per category, etc.

   - impacts - characterized stressors (=> impacts) - e.g. total GWP100, total land use, etc

     The total list of stressors and impacts are in the index of all files, most conveniently in the 'unit.txt'.
     Both extension subfolder contain: 

     - F.txt - Factors of productions/stressors/impacts
     - F_Y.txt - Stressors/impacts of the final demand,
     - S.txt - Direct stressor/impact coefficients
     - S_Y.txt - Stressor/impact coefficients of the final demand
     - M.txt - MRIO extension multipliers (total requirement factors of consumption)
     - D_cba.txt - Consumption based accounts per sector
     - D_pba.txt - Production based accounts per sector
     - D_cba_reg.txt - Consumption based accounts per region
     - D_pba_reg.txt - Production based accounts per region
     - D_imp_reg.txt - Import accounts per region
     - D_exp_reg.txt - Export accounts per region
     - unit.txt - Absolute units of the stressor and impacts
       The unit of the coefficient data M and S are given be the unit of the satellite
       account per unit of the economic core (e.g. kg CO2eq/Million Euro)

#### 参考资料：

[基于投入产出表的中国数字经济卫星账户构建](https://mp.weixin.qq.com/s/r0VeCGA8k40HjDft5CY5-A)

[GSR公开课第七讲：投入产出分析在环境管理中的应用](https://mp.weixin.qq.com/s/_Gl3Wz-45Nc_wTLgPsDNKg)

https://www.openriskmanual.org/wiki/EXIOBASE

[Pymrio-Working with the EXIOBASE EE MRIO database](https://pymrio.readthedocs.io/en/latest/notebooks/working_with_exiobase.html)

[EXIOBASE官方网站](https://www.exiobase.eu/)

[Towards a global multi-regional environmentally extended input–output database](https://www.sciencedirect.com/science/article/pii/S0921800908004801) （EXIOBASE 1前身）

[EXIOPOL](https://www.tandfonline.com/doi/full/10.1080/09535314.2012.761952) （EXIOBASE 1）

[EXIOBASE 2](https://www.mdpi.com/2071-1050/7/1/138)

[EXIOBASE 3](https://zenodo.org/records/5589597)

[EXIOBASE 3: Developing a Time Series of Detailed Environmentally Extended Multi-Regional Input-Output Tables](https://onlinelibrary.wiley.com/doi/10.1111/jiec.12715)

[EXIOBASE Update Club](https://lca-net.com/clubs/exiobase-update/)

[CHAPTER 22 Satellite accounts](https://ec.europa.eu/eurostat/esa2010/chapter/view/22/#h807)
