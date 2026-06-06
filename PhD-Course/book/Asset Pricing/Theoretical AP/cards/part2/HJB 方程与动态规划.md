---
orphan: true
---

# HJB 方程与动态规划

导航：[Asset Pricing index](../../../index.md) · [Theoretical AP](../../../Theoretical_Asset_Pricing.md) · 来源：[02_Dynamic_Asset_Pricing](../../02_Dynamic_Asset_Pricing.md)


关联卡片：[Bellman equation](Bellman%20equation.md) · [价值函数](%E4%BB%B7%E5%80%BC%E5%87%BD%E6%95%B0.md)

:::{admonition} Definition (Definition)
value function $V(t,W_t,X_t)$ 表示在给定当前状态下，从时点 $t$ 起能达到的最大期望效用。

**Proposition:** Proposition
动态规划把多期问题递归化，value function 满足 HJB / Bellman 方程

$$
0=\max_{c_t,\theta_t}\Big\{u_t(c_t)+V_t+\mathcal D_{WX}^{c,\theta}V\Big\},
$$
并带有终端条件

$$
V(T,W_T,X_T)=U_T(W_T).
$$

:::

## 一阶条件

消费的一阶条件为

$$
u_t'(c_t^*)=V_W(t,W_t,X_t).
$$

## 含义

它表示：当前多消费一单位的边际效用，必须等于把这一单位财富留给未来时带来的边际价值。
