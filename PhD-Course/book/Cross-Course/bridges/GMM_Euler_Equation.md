---
type: bridge-note
qe_weight: high
courses:
  - Econometrics
  - Asset Pricing
topics:
  - gmm
  - euler-equation
  - sdf
exam_modes:
  - proof
  - computation
  - testing
tags:
  - qe
  - cross-course
  - gmm
  - euler-equation
---

# Moment Restrictions and Pricing Errors

导航：[Cross-Course Hub](../index.md) · [Econometrics](../../Econometrics/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象是 moment restriction。Econometrics 关心 $E[g(Z_t,\theta_0)]=0$ 如何估计和检验；Asset Pricing 把 no-arbitrage / optimality restrictions 写成 Euler moments，pricing error 就是样本矩没有贴近 0。

基本系统是：

$$
\left\{
\begin{aligned}
E[g(Z_t,\theta_0)]&=0,\\
\bar g_T(\theta)&=\frac{1}{T}\sum_{t=1}^T g(Z_t,\theta),\\
\hat\theta&=\arg\min_\theta
\bar g_T(\theta)^\top W_T \bar g_T(\theta).
\end{aligned}
\right.
$$

optimal weighting matrix 由 long-run variance 决定：

$$
\begin{aligned}
S&=\lim_{T\to\infty}\operatorname{Var}(\sqrt T\,\bar g_T(\theta_0)),\\
W^*&=S^{-1}.
\end{aligned}
$$

## 等价命题

| 共同 restriction | Econometrics | Asset Pricing | QE 中要写清 |
| --- | --- | --- | --- |
| population moment | $E[g(Z,\theta_0)]=0$ | $E[mR^e]=0$ 或 $E[mR]=1$ | $g_t(\theta)$ 的维度和参数 |
| weighting | efficient GMM | pricing-error metric / HJ weighting | $W$ 是否 fixed、estimated、optimal |
| overidentification | $q>p$ | too many asset moments for SDF parameters | $J$ statistic 的自由度 |
| misspecification | invalid moment | rejected SDF / nonzero pricing errors | rejection 的经济含义 |

Asset Pricing Euler equation 的无条件化过程是：

$$
\begin{aligned}
E_t[m_{t+1}R_{i,t+1}]&=1\\
&\Longrightarrow E[(m_{t+1}(\theta)R_{i,t+1}-1)z_t]=0,\\
E_t[m_{t+1}R^e_{i,t+1}]&=0\\
&\Longrightarrow E[m_{t+1}(\theta)R^e_{i,t+1}z_t]=0.
\end{aligned}
$$

其中 $z_t$ 是 instruments；选 $z_t=1$ 得 unconditional pricing moments。

## 跨课翻译

Econometrics 的 $g_t(\theta)$ 在 Asset Pricing 里通常就是 pricing errors：

$$
\begin{aligned}
g_t(\theta)
&=m_{t+1}(\theta)R^e_{t+1}\otimes z_t,\\
\bar g_T(\hat\theta)
&\approx 0
\qquad \Longleftrightarrow \qquad
\text{SDF prices tested assets approximately}.
\end{aligned}
$$

如果 moments 数量 $q$ 大于参数数量 $p$，剩下的 $q-p$ 个 restriction 就是模型检验，不是参数估计本身。

## 考场写法

**GMM objective.** 先写参数、moments、样本矩，再写 criterion：

$$
\begin{aligned}
Q_T(\theta)
&=\bar g_T(\theta)^\top W_T\bar g_T(\theta),\\
\hat\theta
&=\arg\min_\theta Q_T(\theta).
\end{aligned}
$$

**Two-step GMM.** preliminary estimate 后估计

$$
\begin{aligned}
\hat S
&=\frac{1}{T}\sum_{t=1}^T
g_t(\hat\theta_1)g_t(\hat\theta_1)^\top,\\
\hat W&=\hat S^{-1}.
\end{aligned}
$$

**J-test.** 只有 $q>p$ 时才有 overidentification test：

$$
\begin{aligned}
J&=T\bar g_T(\hat\theta)^\top \hat S^{-1}\bar g_T(\hat\theta)\\
\overset{a}{\sim}\chi^2_{q-p}.
\end{aligned}
$$

在 Asset Pricing 中，拒绝不是“GMM 算错”，而是 SDF 模型无法同时定价这些资产。

## 常见错误

- 把 $E_t[mR]=1$ 直接当成样本 moment，漏掉 instruments 或 unconditional conversion。
- 没有区分 gross return 的 $E[mR]=1$ 和 excess return 的 $E[mR^e]=0$。
- 在 just-identified case 里写 J-test。
- 忽略 $W_T$ 的角色，把 GMM 写成普通 OLS。

## 进入原始材料

- [Econometrics: Single-Equation GMM](../../Econometrics/MS8956/10_Single_Equation_GMM.md)
- [Econometrics: Multiple-Equation GMM](../../Econometrics/MS8956/11_Multiple_Equation_GMM.md)
- [Empirical AP card: SDF Euler Equation](../../Asset%20Pricing/Empirical%20AP/cards/SDF_Euler_Equation.md)
- [Empirical AP card: GMM Asset Pricing](../../Asset%20Pricing/Empirical%20AP/cards/GMM_Asset_Pricing.md)
