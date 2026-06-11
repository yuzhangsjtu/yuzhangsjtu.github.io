---
title: "Introduction to the EXIOBASE Structure"
date: 2023-11-16T10:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["MRIO", "MATLAB", "Input-Output Analysis"]
summary: "A careful breakdown of EXIOBASE to understand its construction, which is the basis for using it."
---

#### General introduction:

First, let's look at the introduction from "Economics of Climate Change" (essentially excerpted from the EXIOBASE3 paper):

> **EXIOBASE Version 3 — Multi-Regional Environmentally Extended Supply-Use and Input-Output Tables**
>
> EXIOBASE is a detailed global Multi-Regional Environmentally Extended Supply-Use Table and Input-Output Table (EE MRIO). EXIOBASE is a database compatible with the System of Environmental-Economic Accounting (SEEA), with high sectoral detail and matched simultaneously with multiple social consumption inventories. The latest third edition of EXIOBASE has compiled a time series of EE MRIO tables spanning 1995 to 2011, covering 44 countries (28 EU member states plus 16 major world economies) and 5 other Rest of World regions.
>
> Building on previous versions, the third edition of EXIOBASE uses rectangular supply-use tables for 163 industries (classified by 200 products) as its main construction basis, employing trade data to link national supply-use tables, thereby creating a multi-regional supply-use table, and from this generating multi-regional input-output tables. The third edition of EXIOBASE thus provides a wide community of researchers with a unique tool to analyze the dynamic effects of the environmental pressures of economic activities as they change over time.
>
> EXIOBASE3 data at a glance:
>
> ![Image](https://cdn.jsdelivr.net/gh/yuzhangnju/image2022/640.png)

For detailed lists of products, industries, and regions, please refer to Appendix 9 of the EXIOBASE3 paper or [click here](https://onlinelibrary.wiley.com/action/downloadSupplement?doi=10.1111%2Fjiec.12715&file=jiec12715-sup-0009-SuppMat-9.xlsx).

An example EEMRIOT is shown below:

![Screenshot 2023-11-17 at 13.27.56](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/Screenshot%202023-11-17%20at%2013.27.56.png)

In EXIOBASE, data are collected from the 27 EU countries via Eurostat, along with other SUT and IO tables from 16 additional countries. Together, these cover 90% of global Gross Domestic Product (GDP).

#### File structure

Some notes on EXIOBASE (this actually requires some foundational knowledge of input-output tables, the structure of EXIOBASE, and its satellite accounts):
I found that both WIOD and EORA have been updated — WIOD updated some things from before 2000, and EORA also extends to 2022, but the years after 2016 are just a money grab. ICIO has 1995-2018.

1. **Data timeliness:** The original EXIOBASE 3 data series ends 2011. In addition, we also have estimates based on a range of auxiliary data, but mainly trade and macro-economic data which go up to 2022 when including IMF expectations. A lot of care must be taken in use of this data. It is only partially suitable for analysing trends over time! As of v3.8 (doi: 10.5281/zenodo.4277368), the end years of real data points used are: 2015 energy, 2019 all GHG (non fuel, non-CO2 are nowcasted from 2018), 2013 material, 2011 most others, land, water. More details are available in the readme file.

2. File naming:

   - IOT_YYYY_ixi.zip - MRIO archive for Year YYYY in industry by industry format, i.e. the sector table
   - IOT_YYYY_pxp.zip - MRIO archive for Year YYYY in product by product format, i.e. the product table (the original page got this wrong here — it should be pxp, not ixi)

   Further details on these two structures can be found in the EUROSTAT manual ([EUROSTAT 2008](https://ec.europa.eu/eurostat/documents/3859598/5902113/KS-RA-07-013-EN.PDF/b0b3d71e-3930-4442-94be-70b36cea9b39)).

3. **File structure:**
   The MRIO archive contains the following files:

   - Z.txt - flow/transactions matrix
   - A.txt - matrix/inter-industry coefficients, (direct requirements matrix)
   - Y.txt - final demand
   - x.txt - gross/total output
   - unit.txt - Units of the flow data
   - For the general MRIOT structure, see more in: [An Introductory Review of Input-Output Analysis in Sustainability Sciences Including Potential Implications of Aggregation](https://www.mdpi.com/2071-1050/15/1/46). The satellite accounts are, in fact, simply added to the bottom of the table.
   
   ![image-20231117142147820](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20231117142147820.png)
   
   or:
   
   ![image-20231117144716245](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20231117144716245.png)
   
4. **Two extension datasets:**

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

#### References:

[Constructing China's Digital Economy Satellite Accounts Based on Input-Output Tables](https://mp.weixin.qq.com/s/r0VeCGA8k40HjDft5CY5-A)

[GSR Public Lecture 7: Applications of Input-Output Analysis in Environmental Management](https://mp.weixin.qq.com/s/_Gl3Wz-45Nc_wTLgPsDNKg)

https://www.openriskmanual.org/wiki/EXIOBASE

[Pymrio-Working with the EXIOBASE EE MRIO database](https://pymrio.readthedocs.io/en/latest/notebooks/working_with_exiobase.html)

[EXIOBASE official website](https://www.exiobase.eu/)

[Towards a global multi-regional environmentally extended input–output database](https://www.sciencedirect.com/science/article/pii/S0921800908004801) (predecessor of EXIOBASE 1)

[EXIOPOL](https://www.tandfonline.com/doi/full/10.1080/09535314.2012.761952) (EXIOBASE 1)

[EXIOBASE 2](https://www.mdpi.com/2071-1050/7/1/138)

[EXIOBASE 3](https://zenodo.org/records/5589597)

[EXIOBASE 3: Developing a Time Series of Detailed Environmentally Extended Multi-Regional Input-Output Tables](https://onlinelibrary.wiley.com/doi/10.1111/jiec.12715)

[EXIOBASE Update Club](https://lca-net.com/clubs/exiobase-update/)

[CHAPTER 22 Satellite accounts](https://ec.europa.eu/eurostat/esa2010/chapter/view/22/#h807)
