---
orphan: true
---

# 普通股票设定与 Lucas tree 股票设定

导航：[Asset Pricing index](../../../index.md) · 来源：[02_Dynamic_Asset_Pricing](../../02_Dynamic_Asset_Pricing.md)


:::{admonition} Definition (两种 stock 设定)
Asset pricing 里 “stock” 有两种常见用法：

$$
\begin{aligned}
\text{general risky stock}
&:\quad
\frac{dS_t}{S_t}=\mu_tdt+\sigma_tdB_t,
\qquad
\text{dividend flow}=D_tdt, \\
\text{Lucas tree stock}
&:\quad
S_t=\text{claim on aggregate endowment},
\qquad
\text{dividend flow}=\delta_tdt.
\end{aligned}
$$

:::

## 核心区别

一般 risky stock 是外生给定的风险资产，价格动态或 dividend process 可以单独设定：

$$
\begin{aligned}
\frac{dS_t}{S_t}
&=\mu_tdt+\sigma_tdB_t,
\qquad
\text{dividend flow}=D_tdt.
\end{aligned}
$$

Lucas tree stock 是 aggregate endowment 的索取权，因此 dividend 不是任意现金流，而是总禀赋：

$$
\begin{aligned}
\text{stock payoff flow}
&=
\text{aggregate endowment flow} =
\delta_tdt.
\end{aligned}
$$

## 定价公式

两者都可以用 SPD 定价：

$$
\begin{aligned}
S_t
&=
\frac{1}{\xi_t}
E_t\!\left[\int_t^\infty \xi_sD_s\,ds\right]
\qquad
\text{(general dividend claim)}, \\
S_t
&=
\frac{1}{\xi_t}
E_t\!\left[\int_t^\infty \xi_s\delta_s\,ds\right]
\qquad
\text{(Lucas tree)}.
\end{aligned}
$$

## 识别规则

看到题目写 “aggregate Lucas tree” 或 “dividend is aggregate endowment $\delta_t$”，就用 Lucas tree 设定；否则普通 stock 不必等于 aggregate endowment claim。

## 相关卡片

- [Lucas tree model 与代表性消费者均衡](Lucas%20tree%20model%20%E4%B8%8E%E4%BB%A3%E8%A1%A8%E6%80%A7%E6%B6%88%E8%B4%B9%E8%80%85%E5%9D%87%E8%A1%A1.md)
- [Endowment economy](Endowment%20economy.md)
- [Endowment process](Endowment%20process.md)
- [状态价格密度、EMM 与鞅定价](%E7%8A%B6%E6%80%81%E4%BB%B7%E6%A0%BC%E5%AF%86%E5%BA%A6%E3%80%81EMM%20%E4%B8%8E%E9%9E%85%E5%AE%9A%E4%BB%B7.md)
