---
type: bridge-note
qe_weight: high
courses:
  - Econometrics
  - Asset Pricing
topics:
  - projection
  - beta-pricing
  - factor-models
exam_modes:
  - proof
  - computation
  - interpretation
tags:
  - qe
  - cross-course
  - projection
  - beta
---

# Orthogonality and Beta Restrictions

导航：[Cross-Course Hub](../index.md) · [Econometrics](../../Econometrics/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象是 orthogonality condition。Econometrics 把它写成 projection residual 与 regressors 正交；Asset Pricing 把同一个 projection slope 解释为 beta，再用 beta exposure 组织 expected returns。

对随机变量 $Y$ 和因子 $F$，population linear projection 是：

$$
\left\{
\begin{aligned}
Y&=\alpha+\beta^\top F+\varepsilon,\\
E[\varepsilon]&=0,\\
E[F\varepsilon]&=0.
\end{aligned}
\right.
$$

若 $F$ 已中心化，

$$
\begin{aligned}
\beta&=\operatorname{Var}(F)^{-1}\operatorname{Cov}(F,Y).
\end{aligned}
$$

样本中，投影矩阵为

$$
\begin{aligned}
P_X&=X(X^\top X)^{-1}X^\top,\\
\qquad
M_X&=I-P_X.
\end{aligned}
$$

## 等价命题

| 共同 restriction | Econometrics | Asset Pricing | QE 中要写清 |
| --- | --- | --- | --- |
| normal equation | $E[Xu]=0$ | factor residual orthogonality | beta 是 projection slope |
| covariance ratio | $\beta=\operatorname{Var}(F)^{-1}\operatorname{Cov}(F,Y)$ | beta exposure | covariance 与 beta 的换算 |
| fitted/residual split | $P_X$ and $M_X$ | systematic and idiosyncratic returns | idempotent、symmetry、rank |
| cross-sectional restriction | second-stage regression | Fama-MacBeth | risk premia $\lambda$ 的含义 |

时间序列 beta 先是 projection：

$$
\begin{aligned}
R_{it}^e&=\alpha_i+\beta_i^\top f_t+\varepsilon_{it},\\
\qquad
E[f_t\varepsilon_{it}]&=0.
\end{aligned}
$$

beta pricing 是横截面的 restriction：

$$
\begin{aligned}
E[R_i^e]&=\beta_i^\top \lambda.
\end{aligned}
$$

若 SDF 线性依赖因子 $m=a-b^\top f$，则

$$
\begin{aligned}
0&=E[mR_i^e]\\
&=aE[R_i^e]-\operatorname{Cov}(R_i^e,f)^\top b\\
&=aE[R_i^e]-\beta_i^\top \operatorname{Var}(f)b.
\end{aligned}
$$

因此 expected return 只通过因子协方差或 beta 暴露进入。

## 跨课翻译

Econometrics 的 projection 是 $L^2$ 几何；Asset Pricing 的 beta pricing 是同一个几何对象加上一个经济 restriction：

$$
\begin{aligned}
\text{orthogonal residual}
&\Longrightarrow \text{beta summarizes covariance with factors},\\
\text{linear SDF}
&\Longrightarrow E[R_i^e] \text{ depends only on beta}.
\end{aligned}
$$

## 考场写法

**从 projection 推 beta.** 写 population projection、正交条件和 covariance formula：

$$
\begin{aligned}
0&=E[f(R_i^e-\alpha_i-\beta_i^\top f)]\\
&=E[fR_i^e]-E[f]\alpha_i-E[ff^\top]\beta_i.
\end{aligned}
$$

若 $E[f]=0$，

$$
\begin{aligned}
\beta_i
&=E[ff^\top]^{-1}E[fR_i^e]
&=\operatorname{Var}(f)^{-1}\operatorname{Cov}(f,R_i^e).
\end{aligned}
$$

**Projection matrix.** 常用证明不要背结论，直接连等：

$$
\begin{aligned}
P_X^2&=P_X,\qquad P_X^\top=P_X,\qquad M_XX=0.
\end{aligned}
$$

**Fama-MacBeth.** 第一阶段估 $\hat\beta_i$；第二阶段做 cross-sectional projection：

$$
\begin{aligned}
\bar R_i^e&=\hat\beta_i^\top\lambda+\eta_i.
\end{aligned}
$$

这里 $\lambda$ 是 factor risk price；Shanken correction 处理 generated regressor problem。

## 常见错误

- 把 regression coefficient 和 causal effect 混淆；这里 beta 是 projection slope。
- 只写 $E[R_i^e]=\beta_i\lambda$，没有说明 beta 从 covariance restriction 来。
- 忘记 first-pass beta 是 estimated regressor，导致第二阶段标准误解释过强。
- 把 residual orthogonality 当成 residual independence；projection 只给正交，不给独立。

## 进入原始材料

- [Econometrics: CEF and Linear Projection](../../Econometrics/EF8090/01_CEF_and_Linear_Projection.md)
- [Econometrics card: Projection Matrix](../../Econometrics/EF8090/cards/Projection_Matrix.md)
- [Empirical AP: Cross-Section Factor Models](../../Asset%20Pricing/Empirical%20AP/05_Cross_Section_Factor_Models.md)
- [AP card: Fama-MacBeth and Shanken](../../Asset%20Pricing/Empirical%20AP/cards/Fama_MacBeth_Shanken.md)
