---
type: bridge-note
orphan: true
qe_weight: medium
courses:
  - Asset Pricing
  - Microeconomics
topics:
  - dynamic-programming
  - hjb
  - bellman-equation
exam_modes:
  - proof
  - computation
tags:
  - qe
  - cross-course
  - hjb
---

# Dynamic Programming and HJB

导航：[Cross-Course Hub](../index.md) · [Asset Pricing](../../Asset%20Pricing/index.md) · [Microeconomic](../../Microeconomic/index.md)

## 共同对象

共同对象是 value function。Micro 里它是动态选择和 envelope logic；Asset Pricing 里它变成 portfolio choice、optimal stopping 和 HJB。

## 跨课翻译

$$
\begin{aligned}
V(x)
&=\max_a\left\{u(x,a)+\beta E[V(x')\mid x,a]\right\},\\
0
&=\max_a\left\{u(x,a)+\mathcal L^aV(x)-\rho V(x)\right\}
& \text{(continuous-time HJB)}.
\end{aligned}
$$

| Object | Discrete time | Continuous time |
| --- | --- | --- |
| state | $x_t$ | diffusion state |
| continuation value | $E[V(x_{t+1})]$ | generator $\mathcal L^aV$ |
| optimality | Bellman equation | HJB |

## 考场写法

- 先定义 state、control、law of motion。
- 再写 Bellman / HJB。
- 最后用 FOC、boundary condition 或 smooth pasting 求策略。

## 进入原始材料

- [Asset Pricing: Dynamic Asset Pricing](../../Asset%20Pricing/Theoretical%20AP/02_Dynamic_Asset_Pricing.md)
- [Micro: Choice under Uncertainty](../../Microeconomic/02_Choice_under_Uncertainty_and_State_Contingent_Equilibrium.md)
- [Asset Pricing card: HJB 方程与动态规划](../../Asset%20Pricing/Theoretical%20AP/cards/part2/HJB%20%E6%96%B9%E7%A8%8B%E4%B8%8E%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md)
