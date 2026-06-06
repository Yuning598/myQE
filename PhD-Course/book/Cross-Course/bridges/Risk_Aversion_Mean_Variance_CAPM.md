---
type: bridge-note
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

# Risk Aversion, Mean-Variance, and CAPM

导航：[Cross-Course Hub](../index.md) · [Microeconomic](../../Microeconomic/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 1. 一句话主线

风险厌恶是共同对象：Micro 用凹效用、Jensen inequality、certainty equivalent 和 Arrow-Pratt 度量风险态度；Asset Pricing 把同一个二阶近似或 CARA-Normal 结构变成 mean-variance demand，并进一步推出 CAPM。

## 2. 共同数学对象

设随机财富为 $W$，期望财富为 $\bar W=E[W]$。风险厌恶来自

$$
E[u(W)] \le u(E[W]).
$$

certainty equivalent $CE$ 与 risk premium $\rho$ 满足

$$
u(CE)=E[u(W)],\qquad \rho=E[W]-CE.
$$

局部二阶近似给出

$$
\rho \approx \frac{1}{2}A(\bar W)\operatorname{Var}(W),
\qquad
A(W)=-\frac{u''(W)}{u'(W)}.
$$

当 payoff 正态且效用为 CARA，最大化期望效用等价于

$$
\max_x\ E[W_1]-\frac{a}{2}\operatorname{Var}(W_1).
$$

## 3. 跨课命名

| 共同对象 | Microeconomics | Asset Pricing | QE 常见问法 |
| --- | --- | --- | --- |
| concavity | Jensen, risk aversion | risk premium | 证明风险厌恶、算 CE |
| curvature | Arrow-Pratt ARA/RRA | demand sensitivity | 比较风险厌恶 |
| mean-variance objective | quadratic approximation | CARA-Normal demand | 求最优持仓 |
| covariance pricing | 不确定财富的边际效用 | CAPM beta | 推导 expected return-beta 关系 |

## 4. 核心公式

若风险资产超额收益向量为 $R^e$，CARA-Normal 投资者选择 $x$：

$$
\max_x\ x^\top E[R^e]-\frac{a}{2}x^\top \Sigma x.
$$

FOC:

$$
E[R^e]=a\Sigma x.
$$

市场出清时，代表性投资者持有市场组合 $x_M$，所以

$$
E[R_i^e]=a\operatorname{Cov}(R_i,R_M).
$$

除以市场组合的定价式得到 CAPM：

$$
E[R_i]-R_f
=\beta_i\left(E[R_M]-R_f\right),
\qquad
\beta_i=\frac{\operatorname{Cov}(R_i,R_M)}{\operatorname{Var}(R_M)}.
$$

## 5. QE 题型

### 5.1 Jensen 与 risk premium

步骤：

1. 用 $u''<0$ 判定严格风险厌恶。
2. 写 $u(CE)=E[u(W)]$。
3. 用 Taylor expansion 得到局部风险溢价。

### 5.2 CARA-Normal 最优需求

步骤：

1. 把终值财富写成 $W_1=W_0R_f+x^\top R^e$。
2. 用 CARA-Normal 等价目标。
3. 解 $x^*=(1/a)\Sigma^{-1}E[R^e]$。

### 5.3 CAPM 证明

步骤：

1. 从 mean-variance FOC 得 $E[R^e]=a\Sigma x$。
2. 市场出清令 $x=x_M$。
3. 对单个资产取协方差形式。
4. 用市场组合自身定价式消去 $a$。

## 6. 最短复习路线

1. [Micro: Choice under Uncertainty](../../Microeconomic/02_Choice_under_Uncertainty_and_State_Contingent_Equilibrium.md)
2. [Micro card: Risk aversion and Jensen](../../Microeconomic/cards/Risk%20aversion%20and%20Jensen.md)
3. [Asset Pricing: Single-Period Models](../../Asset%20Pricing/Theoretical%20AP/01_Single_Period_Models.md)
4. [AP card: CARA-Normal framework](../../Asset%20Pricing/Theoretical%20AP/cards/CARA-Normal%20framework%20-%20%E5%9D%87%E5%80%BC%E6%96%B9%E5%B7%AE%E7%AD%89%E4%BB%B7%E4%B8%8E%E6%9C%80%E4%BC%98%E9%9C%80%E6%B1%82.md)
