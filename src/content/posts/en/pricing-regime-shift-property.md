---
title: "AER - Pricing the Risk of Hong Kong's Political Regime Shift Using the Real Estate Market"
date: 2024-04-09T18:00:00+08:00
category: { name: "Research Notes", slug: research }
tags: ["HIBL"]
summary: "Using Hong Kong's unique land lease system as a natural experiment to examine the impact of anticipated political regime change on the real estate market."
---

> Pricing political risk is a challenging task. Against the backdrop of "one country, two systems" potentially expiring in 2047, the researchers exploit the unique variation in land-lease expiry protection within Hong Kong's real estate market to identify exposure to political risk. This result effectively reflects how the market prices political uncertainty.
>
> The results show that, compared with leases expiring on 30 June 2047 that are expected to receive a 50-year extension, leases expiring after 1 July 2047 with no legally guaranteed extension trade at an average discount of up to 14.1%. Leases auctioned during the British colonial period suffer an even larger discount, with an additional reduction of about 8%, reflecting owners' concern about the "hold-up risk" that future governments might renege on these legacy leases.

**Title:** Valuing Long-Term Property Rights with Anticipated Political Regime Shifts

**Journal:** [American Economic Review](https://www.aeaweb.org/journals/aer)

**Authors:**

- Zhiguo He: James Irvin Miller Professor of Finance at the Graduate School of Business, Stanford University. In the WP version of this paper, Professor He's affiliation is still listed as Chicago; it is unclear whether the official version will change it to Stanford; [https://zhiguohe.net/](https://zhiguohe.net/)
- Maggie Hu (胡榮): Assistant Professor of Real Estate and Finance at The Chinese University of Hong Kong; [https://sites.google.com/view/maggiehu-academic/home](https://sites.google.com/view/maggiehu-academic/home)
- Zhenping Wang: Senior analyst with the *State of Wisconsin Investment Board*, Madison, Wisconsin.;
- Vincent Yao: AREA Chair Professor, Professor and Director of Real Estate Center in the J. Mack Robinson College of Business at Georgia State University in Atlanta, GA. [https://sites.google.com/view/vincentyao](https://sites.google.com/view/vincentyao)

**Posted online:** February 2024

<br/>

### Preface

- Political factors have an important impact on asset pricing and economic activity, as confirmed by a large body of literature; Hong Kong has practiced "one country, two systems" since its return to China in 1997, but this arrangement is set to expire in 2047. This signals potentially significant political risk that may affect long-term property prices.
- Empirically, pricing political risk is a challenging task, because political risk often coincides with economic fluctuations, making it difficult to identify causal effects.
- Hong Kong is a special **intersection** of politics and economics:
  - Hong Kong sits within the conflict between China and the Western world, becoming the battleground for the fate of the "one country, two systems" political experiment;
  - Hong Kong's land supply mainly proceeds through government leases rather than freehold titles, and whether a lease can be renewed upon expiry depends on the future regime, exposing property rights to substantial political risk;
  - Hong Kong has long had a sound free-market economy, in which transactions are rarely distorted by external factors;
  - Property prices in Hong Kong are high and have a major impact on residents' welfare; and because of this, how the market prices real estate embodies residents' long-term views on political uncertainty.

- Real estate is a typical long-term asset, and its value is mainly determined by the discounting of future cash flows. By affecting future cash flows and the discount rate, political risk can significantly alter the current price of real estate.

### Hong Kong's land tenure system and land policy

For details see: [Land Tenure System and Land Policy in Hong Kong](https://www.landsd.gov.hk/en/resources/land-info-stat/land-tenure-system-land-policy.html)

- All land in Hong Kong belongs to the government; what private parties own is only the right to use and occupy the land for a specified period, that is, a land contract or land lease. Upon lease expiry, the title reverts to the government, which can decide whether to grant a renewal. This property-right arrangement makes land-lease value susceptible to future changes in land policy.
- Early land disposals were conducted mainly through auction and tender, with terms including 75 years, 99 years, and 999 years. Beginning in the late 1960s, the Hong Kong government standardised the lease term for grants to 75 years.
- The original Table A.1 classifies the different lease types: ![image-20240409172409698](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240409172409698.png)

> The Basic Law of the Hong Kong Special Administrative Region of the People's Republic of China provides as follows regarding land leases:
>
> Article 120
> All leases of land granted, decided upon or renewed before the establishment of the Hong Kong Special Administrative Region which extend beyond 30 June 1997, and all rights in relation to such leases, shall continue to be recognized and protected under the law of the Region.
>
> Article 121
> As regards all leases of land granted or renewed where the original leases contain no right of renewal, during the period from 27 May 1985 to 30 June 1997, which extend beyond 30 June 1997 and expire not later than 30 June 2047, the lessee is not required to pay an additional premium as from 1 July 1997, but an annual rent equivalent to 3 per cent of the rateable value of the property at that date, adjusted in step with any changes in the rateable value thereafter, shall be charged.
>
> Article 122
> In the case of old schedule lots, village lots, small houses and similar rural holdings, where the property was on 30 June 1984 held by, or, in the case of small houses granted after that date, where the property is granted to, a lessee descended through the male line from a person who was in 1898 a resident of an established village in Hong Kong, the previous rent shall remain unchanged so long as the property is held by that lessee or by one of his lawful successors in the male line.
>
> Article 123
> Where leases of land without a right of renewal expire after the establishment of the Hong Kong Special Administrative Region, they shall be dealt with in accordance with laws and policies formulated by the Region on its own.

### Empirical research design

#### Treatment Groups

The treatment groups consist of land leases expiring at various points in time, especially those that mature after the political transition. The study focuses mainly on the price discounts of these leases in order to assess the impact of political risk. Specifically, they are divided into the following sub-groups:

- **Leases expiring before 2047:** These leases expire before 2047 and, under existing policy, automatically receive a 50-year extension. They are divided into sub-groups by expiration year, for example the groups expiring in 2029-2033, 2034-2039, and 2040-2046.
- **Leases expiring after 2047:** This is the main treatment group, comprising leases that expire after 1 July 2047. The renewal policy for these leases has not yet been specified, so the policy they expect after the political transition is uncertain. These leases are also divided into sub-groups by expiration year, such as 1 July 2047 to 2049, 2050 to 2052, 2053 to 2064, 2065 to 2097, and 2098 to 2135.
- **Leases expiring in the far future:** There is also a group comprising leases that expire in the far future (for example, 999-year leases), whose maturities are well beyond 2047, such as 2842 to 2959.

#### Control Group

The control group selects land leases that expire on 30 June 2047. Under the current policy of the Hong Kong Special Administrative Region (HKSAR), these leases will automatically be extended for 50 years, until 2097. Because these leases have explicit extension protection, they are less affected by the anticipated 2047 political change and can therefore serve as a relatively stable benchmark. Specifically, the control group includes:

- Leases that began after the 1985 effective date of the Sino-British Joint Declaration and before Hong Kong's handover in 1997; these leases were automatically set to expire on 30 June 2047 (belonging to Type 5 leases).
- Certain "+75-year" leases on Hong Kong Island and old Kowloon that also expire in the second half of 2047 (some belonging to Type 2 leases).
- Leases in the New Territories and New Kowloon that originally expired in 1997 but, under the Sino-British Joint Declaration, were automatically extended to 30 June 2047 (belonging to Type 4 leases).

![image-20240409162837647](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240409162837647.png)

### Data

- **Residential transaction and amenity data:** These data were obtained by purchasing electronic transaction records from the Hong Kong Land Registry, covering all residential property transactions in Hong Kong from January 1992 to February 2020. The dataset includes land-lease expiration years, transaction prices and dates, and property characteristics (such as building year, floor, unit number, amenities, etc.).
- **Land sales data:** To confirm the exact expiration dates of land leases, the researchers obtained land auction data from the Land Registry website and matched them with the residential transaction data via lot numbers.
- **Census data and local election data:** These publicly available data provide the socioeconomic characteristics of Hong Kong households, including the quinquennial census data from 2001 to 2016, as well as the results of Hong Kong district council elections from 1999 to 2019.

### Results

⚠️**Warning:** This section is supplied by GPT-4-128K.

#### Political risk and discounts

The study finds that, relative to properties with extension protection (the control group), properties whose land leases expire after 2047 with no legal protection (the treatment group) sell on the market at a significant discount of around 14.1%. In addition, properties whose leases were granted by the colonial government before 2047 carry a further discount of about 8% compared with the rest.

#### Structural parameter estimates

Through a structural analysis of the real estate transaction data, the study estimates several key parameters:

- **Additional land-rent rate:** After 2047, homeowners expect to pay an additional 21% of the net rental value upon lease renewal.
- **Government default risk:** Homeowners do not expect to worry about colonial leases being breached before 2047, but after 2047, colonial leases carry an expected breach risk of 1.6% per 61 years.
- **Lump-sum land premium fee:** When a lease expires or is breached, colonial leases are expected to incur a lump-sum land premium fee of 6.2% (before 2047) and 20.8% (after 2047), respectively.

#### Discount-rate estimation

- **Discount rate:** Combining Hong Kong real estate statistics, the researchers estimate a discount rate of 2.44%, which is similar to the findings of Giglio et al. (2015), who estimated "very-long-run discount rates" based on data from the UK and Singapore.

#### The effect of local political sentiment

The study also examines how local political sentiment affects the perception of political risk:

- **Share of pro-democracy seats:** In districts with a higher proportion of pro-democracy seats, the discount on property prices is larger, reflecting that pro-democracy supporters may hold more pessimistic political expectations about Hong Kong's future.
- **Share of Mainland migrants:** In districts with a higher share of Mainland migrants, property discounts are also larger, which may reflect greater unease among local residents about cultural influence and the political future.

#### The role of individual beliefs

- **Mainland buyers and sellers:** Compared with local Hong Kong buyers, Mainland buyers appear more optimistic when purchasing and are willing to pay higher prices; compared with local Hong Kong sellers, Mainland sellers appear more pessimistic, tending to sell properties at lower prices.

### Extra

- Promarket published a report on this paper: [How Does Political Uncertainty Affect the Valuation of Long-Term Property Rights? Lessons From Hong Kong](https://www.promarket.org/2020/09/03/how-does-political-uncertainty-affect-the-valuation-of-long-term-property-rights-lessons-from-hong-kong/);
- A large part of the paper also carries out structural estimation, concluding that upon renewal after 2047, the market expects the land-rent rate to increase by an additional 21% on top of the existing 3%. For colonial leases, it expects no change before 2047, but after 2047 they will on average be revised once every 61 years, at which point owners will have to pay an additional land grant premium of 7% of the property value. (As a lowly reg🐒, I did not understand this part. Interested readers are encouraged to read the original text.)

### Reference of the original paper

He, Zhiguo, Maggie Hu, Zhenping Wang, and Vincent Yao. "Valuing Long-Term Property Rights with Anticipated Political Regime Shifts." *American Economic Review*, forthcoming.[https://www.aeaweb.org/articles?id=10.1257/aer.20211242](https://www.aeaweb.org/articles?id=10.1257/aer.20211242)

![image-20240409100321003](https://cdn.jsdelivr.net/gh/yuzhangnju/image2024/image-20240409100321003.png)
