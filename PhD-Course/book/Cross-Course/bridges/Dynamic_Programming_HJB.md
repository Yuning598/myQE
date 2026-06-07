---
type: bridge-note
orphan: true
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

# Recursive Value Problems and Verification

导航：[Cross-Course Hub](../index.md) · [Microeconomic](../../Microeconomic/index.md) · [Asset Pricing](../../Asset%20Pricing/index.md)

## 共同对象

共同对象不是 HJB 这个符号本身，而是 value function 作为一个递归 fixed point。Micro 里它表现为 continuation value、promised utility 或 incentive constraint；Asset Pricing 里它表现为 asset value、option value、stochastic discounting 下的 recursive price。

离散时间问题先写 state、control、transition：

$$
\left\{
\begin{aligned}
s'&\sim Q(\cdot\mid s,a),\\
V(s)&=\max_{a\in A(s)}
\left\{
u(s,a)+\beta E[V(s')\mid s,a]
\right\}.
\end{aligned}
\right.
$$

连续时间问题把 transition 换成 generator：

$$
\left\{
\begin{aligned}
dX_t&=\mu(X_t,a_t)dt+\sigma(X_t,a_t)dW_t.
\end{aligned}
\right.
$$

$$
\begin{aligned}
\rho V(x)&=\max_a
\left\{
u(x,a)+\mu(x,a)V_x(x)
+\frac{1}{2}\sigma^2(x,a)V_{xx}(x)
\right\}.
\end{aligned}
$$

## 等价命题

| 共同 restriction | Microeconomics | Asset Pricing | QE 中要写清 |
| --- | --- | --- | --- |
| fixed point | Bellman equation | recursive pricing equation | value 的定义域和 feasible controls |
| generator | transition law | Itô term / HJB | $\mu V_x+\frac{1}{2}\sigma^2V_{xx}$ |
| envelope | marginal continuation value | delta / marginal asset value | FOC 与 envelope 不能混用 |
| boundary | participation / IC binding | stopping boundary / solvency constraint | value matching、smooth pasting、transversality |

递归资产定价也是 Bellman 结构。若 payoff 为 $D(s')+P(s')$，则

$$
\begin{aligned}
P_t&=E_t[m_{t+1}X_{t+1}],\\
P(s)&=E[m(s,s')\{D(s')+P(s')\}\mid s].
\end{aligned}
$$

optimal stopping 是 Bellman fixed point 加 free boundary：

$$
\begin{aligned}
V(x)&=\max\{G(x),C(x)\},\\
\rho V(x)&=\mathcal L V(x)+u(x) \qquad x\in \mathcal C,\\
V(x^*)&=G(x^*),\\
V_x(x^*)&=G_x(x^*).
\end{aligned}
$$

## 跨课翻译

Micro 的动态题通常从 incentive constraint 或 promised utility 出发，难点是选状态；Asset Pricing 的动态题通常直接给 SDE，难点是把 Itô generator、boundary condition 和 verification 写完整。二者在形式上都是：

$$
\begin{aligned}
\text{candidate value}
&\Longrightarrow \text{FOC / policy}\\
&\Longrightarrow \text{law of motion under policy}\\
&\Longrightarrow \text{HJB or Bellman holds}\\
&\Longrightarrow \text{verification}.
\end{aligned}
$$

## 考场写法

**Bellman equation.** 先写状态 $s$ 和控制 $a$，再写 payoff 和 transition；不要直接写一个最大化式而不说明 $s'$ 如何产生。

$$
\begin{aligned}
V(s)
&=\max_{a\in A(s)}
\left\{
u(s,a)+\beta\int V(s')Q(ds'\mid s,a)
\right\}.
\end{aligned}
$$

**HJB.** 先由 SDE 写 generator，再把 flow payoff、discounting 和 control maximization 放进去。

$$
\begin{aligned}
\mathcal L^a V(x)
&=\mu(x,a)V_x(x)+\frac{1}{2}\sigma^2(x,a)V_{xx}(x),\\
\rho V(x)
&=\max_a\{u(x,a)+\mathcal L^a V(x)\}.
\end{aligned}
$$

**Verification.** 最后必须说明 candidate $V$ 满足 HJB、边界条件、growth / transversality condition，并且 candidate policy 达到 HJB 里的 maximum。

## 常见错误

- 把 state variable 和 control 混在一起，导致 transition law 不闭合。
- 写 HJB 时漏掉 $\frac{1}{2}\sigma^2V_{xx}$ 或 cross-variation term。
- optimal stopping 只写 value matching，不写 smooth pasting。
- verification 只说 “therefore optimal”，没有检查 boundary、growth condition 和 attainable policy。

## 进入原始材料

- [Micro: Equilibrium Under Uncertainty](../../Microeconomic/06_Equilibrium_Under_Uncertainty.md)
- [Micro: Principal-Agent Models](../../Microeconomic/07_Principal-Agent_Models_Moral_Hazard_and_Screening.md)
- [Asset Pricing: Dynamic Asset Pricing](../../Asset%20Pricing/Theoretical%20AP/02_Dynamic_Asset_Pricing.md)
- [Asset Pricing: Continuous-Time Pricing](../../Asset%20Pricing/Theoretical%20AP/03_Continuous_Time_Pricing_Options_Term_Structure.md)
