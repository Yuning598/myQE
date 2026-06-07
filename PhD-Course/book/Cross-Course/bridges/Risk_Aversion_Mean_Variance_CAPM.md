---
type: bridge-note
orphan: true
qe_weight: high
courses:
  - Microeconomics
  - Asset Pricing
topics:
  - risk-aversion
  - mean-variance
  - capm
exam_modes:
  - proof
  - computation
  - interpretation
tags:
  - qe
  - cross-course
  - risk-aversion
  - capm
---

# Marginal Utility and Covariance Pricing

导航：[Cross-Course Hub](../index.md) · [Microeconomic](../../Microeconomic/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象是 marginal utility 对风险的惩罚。Micro 用 concavity、Jensen、certainty equivalent 和 Arrow-Pratt curvature 表达；Asset Pricing 把同一个 curvature 变成 covariance pricing restriction，再推出 mean-variance demand 和 CAPM。

设随机财富为 $W$，期望财富为 $\bar W=E[W]$。风险厌恶先来自 Jensen：

$$
\begin{aligned}
E[u(W)] \le u(E[W]).
\end{aligned}
$$

certainty equivalent $CE$ 与 risk premium $\rho$ 满足

$$
\begin{aligned}
u(CE)=E[u(W)],\qquad \rho=E[W]-CE.
\end{aligned}
$$

局部二阶近似给出

$$
\begin{aligned}
\rho \approx \frac{1}{2}A(\bar W)\operatorname{Var}(W),
\qquad
A(W)=-\frac{u''(W)}{u'(W)}.
\end{aligned}
$$

## 等价命题

| 共同 restriction | Microeconomics | Asset Pricing | QE 中要写清 |
| --- | --- | --- | --- |
| concavity | Jensen / risk aversion | risk premium | $u''<0$ 如何进入 CE |
| curvature | Arrow-Pratt ARA/RRA | demand sensitivity | curvature 越大 demand 越小 |
| quadratic objective | local approximation | CARA-Normal mean-variance | 正态性或二次近似条件 |
| covariance pricing | marginal utility state variation | CAPM beta | expected return 与 covariance 的关系 |

## 跨课翻译

Micro 的 FOC 是 state-contingent marginal utility；Asset Pricing 的 FOC 是 risky payoff 的 covariance restriction。当 payoff 正态且效用为 CARA，最大化期望效用等价于 mean-variance problem：

$$
\begin{aligned}
\max_x E[U(W_1)]
&\Longleftrightarrow
\max_x \left\{
E[W_1]-\frac{a}{2}\operatorname{Var}(W_1)
\right\}\\
&\Longleftrightarrow
\max_x \left\{
x^\top E[R^e]-\frac{a}{2}x^\top\Sigma x
\right\}.
\end{aligned}
$$

FOC 给出 demand restriction：

$$
\begin{aligned}
E[R^e]&=a\Sigma x,\\
x^*&=\frac{1}{a}\Sigma^{-1}E[R^e].
\end{aligned}
$$

市场出清时代表性投资者持有市场组合 $x_M$：

$$
\begin{aligned}
E[R_i^e]&=a\operatorname{Cov}(R_i,R_M),\\
E[R_i]-R_f
&=\beta_i\left(E[R_M]-R_f\right),\\
\beta_i&=\frac{\operatorname{Cov}(R_i,R_M)}{\operatorname{Var}(R_M)}.
\end{aligned}
$$

## 考场写法

**Jensen 与 risk premium.** 先证明 $u''<0$ 给出 strict concavity，再写 $u(CE)=E[u(W)]$，最后用 Taylor expansion 近似：

$$
\begin{aligned}
E[u(W)]
&\approx u(\bar W)+u'(\bar W)E[W-\bar W]
+\frac{1}{2}u''(\bar W)E[(W-\bar W)^2]\\
&=u(\bar W)+\frac{1}{2}u''(\bar W)\operatorname{Var}(W),\\
u(\bar W-\rho)
&\approx u(\bar W)-u'(\bar W)\rho.
\end{aligned}
$$

所以

$$
\begin{aligned}
\rho
&\approx -\frac{1}{2}\frac{u''(\bar W)}{u'(\bar W)}\operatorname{Var}(W)\\
&=\frac{1}{2}A(\bar W)\operatorname{Var}(W).
\end{aligned}
$$

**CARA-Normal demand.** 把终值财富写成 $W_1=W_0R_f+x^\top R^e$，再解 mean-variance FOC。

**CAPM proof.** 从 $E[R^e]=a\Sigma x_M$ 出发，对单个资产取 covariance form，再用市场组合自身的式子消去 $a$。

## 常见错误

- 只说 risk aversion 等于 $u''<0$，没有把它接到 CE 或 risk premium。
- 在非正态 payoff 下直接使用 CARA-Normal mean-variance 等价。
- CAPM 证明跳过 market clearing，导致 covariance pricing 没有经济来源。
- 把 beta pricing 当定义，而不是从 marginal utility / covariance restriction 推出来。

## 进入原始材料

- [Micro: Choice under Uncertainty](../../Microeconomic/02_Choice_under_Uncertainty_and_State_Contingent_Equilibrium.md)
- [Micro card: Risk aversion and Jensen](../../Microeconomic/cards/Risk%20aversion%20and%20Jensen.md)
- [Asset Pricing: Single-Period Models](../../Asset%20Pricing/Theoretical%20AP/01_Single_Period_Models.md)
- [AP card: CARA-Normal framework](../../Asset%20Pricing/Theoretical%20AP/cards/CARA-Normal%20framework%20-%20%E5%9D%87%E5%80%BC%E6%96%B9%E5%B7%AE%E7%AD%89%E4%BB%B7%E4%B8%8E%E6%9C%80%E4%BC%98%E9%9C%80%E6%B1%82.md)
