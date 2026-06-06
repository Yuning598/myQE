---
orphan: true
---

# Envelope condition 与 FOC 的区别

导航：[Asset Pricing index](../../../index.md) · [Theoretical AP](../../../Theoretical_Asset_Pricing.md) · 来源：[02_Dynamic_Asset_Pricing](../../02_Dynamic_Asset_Pricing.md)


关联卡片：[价值函数](%E4%BB%B7%E5%80%BC%E5%87%BD%E6%95%B0.md) · [Bellman equation](Bellman%20equation.md) · [HJB 方程与动态规划](HJB%20%E6%96%B9%E7%A8%8B%E4%B8%8E%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.md)

:::{admonition} Definition (Envelope Condition)
envelope condition 讨论的是：**最优值函数** 对状态变量的边际变化。

:::

在这里，状态变量是财富 $W_t$，所以最优值函数满足

$$
\begin{aligned}
V_W(W_t)=u'(C_t^*)=\frac{1}{C_t^*}.
\end{aligned}
$$

这说明：财富多一单位时，最优值增加多少。

:::{admonition} Definition (FOC)
FOC 讨论的是：**最优控制变量** 的一阶必要条件。

:::

在同一个问题里，控制变量是 $C_t$ 和 $\phi_t$，所以 FOC 是

$$
\begin{aligned}
\frac{\partial}{\partial C_t}:\quad \frac{1}{C_t^*}=V_W,
\qquad
\frac{\partial}{\partial \phi_t}:\quad
W_t(\mu-r)V_W+V_{WW}W_t^2\phi_t^*\sigma^2=0.
\end{aligned}
$$

## 区别

$$
\begin{aligned}
\text{FOC}
&:\ \text{对 choice variable 求导，找最优控制} \\
\text{Envelope condition}
&:\ \text{对 state variable 求导，找最优值函数的边际变化}.
\end{aligned}
$$

更直观地说：
- FOC 回答“最优的 $C_t$、$\phi_t$ 是多少”；
- envelope condition 回答“当前财富再多一单位，最优值会增加多少”。

在这个例子里，二者会连到同一个式子 $V_W=1/C_t^*$，但逻辑顺序不同：先用 FOC 找最优控制，再用 envelope condition 解释最优值对状态变量的边际变化。
