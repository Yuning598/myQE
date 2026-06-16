---
type: bridge-note
orphan: true
qe_weight: medium
courses:
  - Econometrics
  - Asset Pricing
topics:
  - gmm
  - euler-equation
  - moments
exam_modes:
  - computation
  - interpretation
tags:
  - qe
  - cross-course
  - gmm
---

# GMM and Euler Equation

导航：[Cross-Course Hub](../index.md) · [Econometrics](../../Econometrics/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象是 moment restriction。Econometrics 提供 GMM 的估计和检验框架；Asset Pricing 把 Euler equation 写成资产收益上的 moment condition。

## 跨课翻译

$$
\begin{aligned}
E[g_t(\theta_0)]&=0,\\
g_t(\theta)
&=m_t(\theta)R_t^e,\\
\hat\theta
&=\arg\min_\theta \bar g_T(\theta)'W_T\bar g_T(\theta),\\
J_T
&=T\bar g_T(\hat\theta)'W_T\bar g_T(\hat\theta).
\end{aligned}
$$

| Econometrics | Asset Pricing |
| --- | --- |
| moment condition | Euler equation |
| weighting matrix | pricing-error metric |
| overidentification test | model pricing test |

## 考场写法

- 先写 SDF 或 Euler equation。
- 再把它整理为 $E[g_t(\theta)]=0$。
- 最后说明识别、weighting matrix 和 overidentifying restrictions。

## 进入原始材料

- [Econometrics: Single-Equation GMM](../../Econometrics/MS8956/10_Single_Equation_GMM.md)
- [Empirical AP: Cross-Section and Factor Models](../../Asset%20Pricing/Empirical%20AP/05_Cross_Section_Factor_Models.md)
- [Empirical AP card: GMM Asset Pricing](../../Asset%20Pricing/Empirical%20AP/cards/GMM_Asset_Pricing.md)
