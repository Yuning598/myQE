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

# GMM and Euler Equation

## 1. 一句话主线

moment condition 是共同对象：Econometrics 给出 $E[g(Z,\theta_0)]=0$、weighting matrix 和 overidentification test；Asset Pricing 把 Euler equation 写成 $E[m(\theta)R]=1$ 或 $E[m(\theta)R^e]=0$，再用 GMM 估计和检验 SDF。

## 2. 共同数学对象

GMM 的基本条件：

$$
E[g(Z_t,\theta_0)]=0.
$$

样本矩：

$$
\bar g_T(\theta)=\frac{1}{T}\sum_{t=1}^T g(Z_t,\theta).
$$

估计量：

$$
\hat\theta=\arg\min_\theta
\bar g_T(\theta)^\top W_T \bar g_T(\theta).
$$

optimal weighting matrix:

$$
W^*=S^{-1},
\qquad
S=\lim_{T\to\infty}\operatorname{Var}(\sqrt T\,\bar g_T(\theta_0)).
$$

## 3. 跨课命名

| 共同对象 | Econometrics | Asset Pricing | QE 常见问法 |
| --- | --- | --- | --- |
| moment condition | $E[g(Z,\theta)]=0$ | $E[mR^e]=0$ | 写 moments |
| weighting matrix | efficient GMM | Hansen-Jagannathan weighting | 求 optimal $W$ |
| overidentification | more moments than parameters | pricing error test | J-test |
| misspecification | invalid moments | rejected SDF model | 解释 pricing errors |

## 4. Asset Pricing Euler moments

若 $R_{t+1}$ 是 gross return，Euler equation 为

$$
E_t[m_{t+1}R_{t+1}]=1.
$$

无条件化后可写成

$$
E[(m_{t+1}(\theta)R_{i,t+1}-1)z_t]=0,
$$

其中 $z_t$ 是 instruments。对 excess returns:

$$
E[m_{t+1}(\theta)R^e_{i,t+1}z_t]=0.
$$

## 5. QE 题型

### 5.1 写出 GMM 目标函数

步骤：

1. 明确参数 $\theta$。
2. 把经济模型 restrictions 写成 $g_t(\theta)$。
3. 写 $\bar g_T(\theta)^\top W_T\bar g_T(\theta)$。

### 5.2 optimal weighting

先用任意正定 $W$ 得 preliminary estimate，再估计

$$
\hat S=\frac{1}{T}\sum_{t=1}^T \hat g_t\hat g_t^\top
$$

或 HAC 版本，第二步取 $\hat W=\hat S^{-1}$。

### 5.3 overidentification test

若 moments 数量 $q$ 大于参数数量 $p$，

$$
J=T\bar g_T(\hat\theta)^\top \hat S^{-1}\bar g_T(\hat\theta)
\overset{a}{\sim}\chi^2_{q-p}.
$$

在 Asset Pricing 中，拒绝表示模型留下系统性 pricing errors。

## 6. 最短复习路线

1. [Econometrics: Single-Equation GMM](../../Econometrics/MS8956/10_Single_Equation_GMM.md)
2. [Econometrics: Multiple-Equation GMM](../../Econometrics/MS8956/11_Multiple_Equation_GMM.md)
3. [Empirical AP card: SDF Euler Equation](../../Asset%20Pricing/Empirical%20AP/cards/SDF_Euler_Equation.md)
4. [Empirical AP card: GMM Asset Pricing](../../Asset%20Pricing/Empirical%20AP/cards/GMM_Asset_Pricing.md)

