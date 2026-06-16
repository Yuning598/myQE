---
type: bridge-note
orphan: true
qe_weight: medium
courses:
  - Econometrics
  - Asset Pricing
topics:
  - projection
  - beta
  - factor-pricing
exam_modes:
  - proof
  - computation
  - interpretation
tags:
  - qe
  - cross-course
  - projection
---

# Projection and Beta Pricing

导航：[Cross-Course Hub](../index.md) · [Econometrics](../../Econometrics/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象是 linear projection。Econometrics 关心 best linear predictor 和 orthogonality；Asset Pricing 关心 beta 是否把 expected returns 的 cross-section 解释完。

## 跨课翻译

$$
\begin{aligned}
R_i^e
&=\alpha_i+\beta_i'F+\varepsilon_i,\\
E[\varepsilon_iF]&=0,\\
E[R_i^e]
&=\beta_i'\lambda
& \text{(beta pricing restriction)},\\
\alpha_i&=0
& \text{(model prices asset }i\text{)}.
\end{aligned}
$$

| Econometrics | Asset Pricing |
| --- | --- |
| projection residual orthogonal to regressors | alpha is unexplained expected return |
| population coefficient | beta exposure |
| misspecification | pricing error |

## 考场写法

- 先写 projection equation 和 orthogonality condition。
- 再说明 pricing restriction 是对 intercept / alpha 的限制。
- 如果题目问 testing，用 alpha 或 moment conditions 连接 GMM / Fama-MacBeth。

## 进入原始材料

- [Econometrics: CEF and Linear Projection](../../Econometrics/EF8090/01_CEF_and_Linear_Projection.md)
- [Empirical AP: Cross-Section and Factor Models](../../Asset%20Pricing/Empirical%20AP/05_Cross_Section_Factor_Models.md)
- [Econometrics card: Projection vs CEF](../../Econometrics/EF8090/cards/Projection_vs_CEF.md)
