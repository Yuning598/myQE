---
orphan: true
---

# Bellman equation

导航：[Asset Pricing index](../../../index.md) · 来源：[02_Dynamic_Asset_Pricing](../../02_Dynamic_Asset_Pricing.md)


关联卡片：[HJB 方程与动态规划](HJB%20%E6%96%B9%E7%A8%8B%E4%B8%8E%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md) · [价值函数](%E4%BB%B7%E5%80%BC%E5%87%BD%E6%95%B0.md)

:::{admonition} Definition (Bellman Equation)
Bellman equation 是动态规划 (dynamic programming) 的离散时间递归形式：当前的最优值 = 当期回报 + 折现后的下一期最优值。

:::

在资产定价 / 最优消费投资问题里，典型形式是

$$
\begin{aligned}
V(W_t)
=\max_{C_t,\phi_t}
\left\{u(C_t)\Delta t+E_t\!\left[e^{-\beta\Delta t}V(W_{t+\Delta t})\right]\right\}.
\end{aligned}
$$

当 $\Delta t\downarrow 0$ 时，Bellman equation 取极限就得到 HJB equation。

## 为什么是这个形式

设状态变量为 $X_t$，控制变量为 $a_t$。由 principle of optimality 可知：

$$
\begin{aligned}
V(t,X_t)
&=\sup_{a_t}\mathbb E_t\!\left[
\int_t^{t+\Delta t} e^{-\beta(s-t)}u(a_s,X_s)\,ds
+e^{-\beta\Delta t}V(t+\Delta t,X_{t+\Delta t})
\right].
\end{aligned}
$$

当 $\Delta t$ 足够小时，

$$
\begin{aligned}
\int_t^{t+\Delta t} e^{-\beta(s-t)}u(a_s,X_s)\,ds
&=u(a_t,X_t)\Delta t+o(\Delta t),\\
e^{-\beta\Delta t}
&=1-\beta\Delta t+o(\Delta t),
\end{aligned}
$$

于是 Bellman recursion 就是“当前回报 + 下一期 continuation value”的一阶近似。

## 含义

Bellman equation 的核心是 principle of optimality：  
从今天开始的最优策略，必须在今天做完最优决策后，继续构成明天起点上的最优策略。

## 与 HJB 的关系

$$
\begin{aligned}
\text{Bellman equation (discrete time)}
\quad\Longrightarrow\quad
\text{HJB equation (continuous time)}.
\end{aligned}
$$
