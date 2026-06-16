---
type: bridge-note
orphan: true
qe_weight: medium
courses:
  - Microeconomics
  - Asset Pricing
  - Econometrics
topics:
  - risk-aversion
  - mean-variance
  - capm
  - factor-pricing
exam_modes:
  - proof
  - computation
  - interpretation
tags:
  - qe
  - cross-course
  - capm
---

# Risk Aversion, Mean-Variance, and CAPM

导航：[Cross-Course Hub](../index.md) · [Microeconomic](../../Microeconomic/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象是风险补偿如何由 marginal utility、covariance 和 beta 表达。Micro 提供 risk aversion 和 Jensen；Theoretical AP 把 portfolio choice 写成 mean-variance problem；Empirical AP 把 CAPM / factor pricing 写成 testable beta restriction。

## 跨课翻译

$$
\begin{aligned}
E[R_i^e]
&=-R_f\operatorname{Cov}(m,R_i^e) \\
&=\beta_{i,m}E[R_m^e]
& \text{(linear SDF / CAPM representation)}
\end{aligned}
$$

| Object | Microeconomics | Asset Pricing | Empirical AP |
| --- | --- | --- | --- |
| curvature | risk aversion | portfolio demand | risk premium |
| covariance | risk exposure | SDF covariance | beta |
| linear restriction | local approximation | CAPM / factor model | alpha test |

## 考场写法

- 先写 risk aversion 或 mean-variance objective。
- 再把 FOC 改写成 covariance pricing。
- 最后说明 beta pricing 是 linear SDF 的投影表达。

## 进入原始材料

- [Micro: Choice under Uncertainty](../../Microeconomic/02_Choice_under_Uncertainty_and_State_Contingent_Equilibrium.md)
- [Asset Pricing: Single-Period Models](../../Asset%20Pricing/Theoretical%20AP/01_Single_Period_Models.md)
- [Empirical AP: Cross-Section and Factor Models](../../Asset%20Pricing/Empirical%20AP/05_Cross_Section_Factor_Models.md)
