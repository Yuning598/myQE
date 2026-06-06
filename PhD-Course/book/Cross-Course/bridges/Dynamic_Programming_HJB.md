---
type: bridge-note
qe_weight: high
courses:
  - Microeconomics
  - Asset Pricing
topics:
  - dynamic-programming
  - hjb
  - optimal-stopping
exam_modes:
  - proof
  - computation
  - verification
tags:
  - qe
  - cross-course
  - dynamic-programming
  - hjb
---

# Dynamic Programming and HJB

## 1. 一句话主线

value function 是共同对象：Micro 用 Bellman equation 处理动态选择、承诺、激励约束和 continuation value；Asset Pricing 把离散时间递归定价推广到连续时间 HJB、optimal stopping、smooth pasting 和 verification。

## 2. 共同数学对象

离散时间 Bellman equation:

$$
V(s)=\max_{a\in A(s)}
\left\{
u(s,a)+\beta E[V(s')\mid s,a]
\right\}.
$$

连续时间状态过程：

$$
dX_t=\mu(X_t,a_t)dt+\sigma(X_t,a_t)dW_t.
$$

HJB:

$$
\rho V(x)=\max_a
\left\{
u(x,a)+\mu(x,a)V_x(x)
+\frac{1}{2}\sigma^2(x,a)V_{xx}(x)
\right\}.
$$

## 3. 跨课命名

| 共同对象 | Microeconomics | Asset Pricing | QE 常见问法 |
| --- | --- | --- | --- |
| value function | indirect utility, continuation value | asset value, option value | 写 Bellman/HJB |
| state variable | wealth, type, promised utility | price, dividend, belief, state price density | 选状态变量 |
| constraint | incentive compatibility, participation | boundary, solvency, stopping region | 找 binding condition |
| envelope | marginal continuation value | delta, smooth pasting | verification |

## 4. 核心公式

### Recursive pricing

若 payoff 为 $X_{t+1}$，价格满足

$$
P_t=E_t[m_{t+1}X_{t+1}].
$$

递归资产价格可写为

$$
P(s)=E[m(s,s')\{D(s')+P(s')\}\mid s].
$$

### Optimal stopping

停止问题：

$$
V(x)=\max\left\{
G(x),\ C(x)
\right\}.
$$

在 continuation region，$V$ 满足 HJB；在 boundary $x^*$，常见条件是

$$
V(x^*)=G(x^*),
\qquad
V_x(x^*)=G_x(x^*).
$$

第二个条件是 smooth pasting。

## 5. QE 题型

### 5.1 写 Bellman equation

步骤：

1. 定义 state variable。
2. 定义 control。
3. 写 per-period payoff。
4. 写 transition law。
5. 检查约束是否进入 feasible set 或 Lagrangian。

### 5.2 写 HJB

步骤：

1. 写状态 SDE。
2. 写 generator term $\mu V_x+\frac{1}{2}\sigma^2V_{xx}$。
3. 加上 flow payoff 和 discounting。
4. 对 control 最大化。

### 5.3 verification 与 boundary

答案要说明 candidate value function 满足 HJB、边界条件、transversality 或 growth condition，并且 policy 达到 HJB 中的 maximum。

## 6. 最短复习路线

1. [Micro: Equilibrium Under Uncertainty](../../Microeconomic/06_Equilibrium_Under_Uncertainty.md)
2. [Micro: Principal-Agent Models](../../Microeconomic/07_Principal-Agent_Models_Moral_Hazard_and_Screening.md)
3. [Asset Pricing: Dynamic Asset Pricing](../../Asset%20Pricing/Theoretical%20AP/02_Dynamic_Asset_Pricing.md)
4. [Asset Pricing: Continuous-Time Pricing](../../Asset%20Pricing/Theoretical%20AP/03_Continuous_Time_Pricing_Options_Term_Structure.md)

