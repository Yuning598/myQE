---
type: map
tags:
  - qe
  - cross-course
---

# QE Knowledge Map

<iframe src="/PhD-Course/qe-knowledge-graph.html" title="QE Interactive Knowledge Graph" loading="lazy" style="width:100%;height:760px;border:0;display:block;border-radius:16px;"></iframe>

## 1. 核心复习网络

| 高频主题 | 连接课程 | QE 常见形态 | Bridge |
| --- | --- | --- | --- |
| State prices / SDF / complete markets | Microeconomics, Asset Pricing, QE-PS | rank 判断、状态价格区间、套利构造、代表性投资者定价 | [State prices, SDF, complete markets](bridges/State_Prices_SDF_Complete_Markets.md) |
| Risk aversion / mean-variance / CAPM | Microeconomics, Asset Pricing | Jensen、Arrow-Pratt、CARA-Normal、CAPM 证明 | [Risk aversion, mean-variance, CAPM](bridges/Risk_Aversion_Mean_Variance_CAPM.md) |
| Projection / beta pricing | Econometrics, Asset Pricing | linear projection、orthogonality、beta-pricing、factor model | [Projection and beta pricing](bridges/Projection_Beta_Pricing.md) |
| GMM / Euler equation | Econometrics, Empirical Asset Pricing | moment condition、overidentification、SDF estimation | [GMM and Euler equation](bridges/GMM_Euler_Equation.md) |
| Identification / corporate finance | Econometrics, Corporate Finance | endogeneity、IV、DiD、RD、paper identification | [Identification and corporate finance](bridges/Identification_Corporate_Finance.md) |
| Dynamic programming / HJB | Microeconomics, Asset Pricing | Bellman equation、HJB、optimal stopping、smooth pasting | [Dynamic programming and HJB](bridges/Dynamic_Programming_HJB.md) |

## 2. 当前优先路径

### State prices / SDF / complete markets

$$
\begin{aligned}
\text{Micro uncertainty}
&\Longrightarrow \text{Arrow securities and state-contingent commodities}\\
&\Longrightarrow \text{state prices and complete markets}\\
&\Longrightarrow \text{SDF and risk-neutral probabilities}\\
&\Longrightarrow \text{QE payoff matrix / arbitrage construction}.
\end{aligned}
$$

复习入口：

- [Micro: uncertainty and state-contingent equilibrium](../Microeconomic/02_Choice_under_Uncertainty_and_State_Contingent_Equilibrium.md)
- [Asset Pricing: multi-period securities and SDF](../Asset%20Pricing/Theoretical%20AP/02_Dynamic_Asset_Pricing.md)
- [QE ProblemSet](../ProblemSet/index.md)

## 3. 添加新 bridge note 的标准

一个主题只有同时满足下面三点才进入本页：

1. 至少连接两门课程。
2. 至少对应一种 QE 题型。
3. 有一个共同数学对象，例如 state price、projection、moment condition、value function。
