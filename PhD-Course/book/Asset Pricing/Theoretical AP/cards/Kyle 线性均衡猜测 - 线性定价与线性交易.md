---
orphan: true
---

# Kyle 线性均衡猜测 - 线性定价与线性交易

导航：[Asset Pricing index](../../index.md) · 来源：[04_Information_Beliefs_and_Learning](../04_Information_Beliefs_and_Learning.md)


相关：[Grossman-Stiglitz](../04_Information_Beliefs_and_Learning.md) · [贝叶斯更新](%E8%B4%9D%E5%8F%B6%E6%96%AF%E6%9B%B4%E6%96%B0%20-%20%E5%85%88%E9%AA%8C%E3%80%81%E4%BF%A1%E5%8F%B7%E3%80%81%E4%BC%BC%E7%84%B6%E3%80%81%E5%90%8E%E9%AA%8C.md) · [CARA-Normal](CARA-Normal%20framework%20-%20%E5%9D%87%E5%80%BC%E6%96%B9%E5%B7%AE%E7%AD%89%E4%BB%B7%E4%B8%8E%E6%9C%80%E4%BC%98%E9%9C%80%E6%B1%82.md)

## 1. 做市商为什么线性定价

做市商只观察总订单流 $X=x+Z_u$，无法区分其中哪部分来自知情者、哪部分来自噪声交易者，因此竞争性做市商按零利润定价：

$$
p=E[v\mid X].
$$

若知情者策略是线性的，比如

$$
x=\beta(v-v_0),
$$

则

$$
X=\beta(v-v_0)+Z_u.
$$

由于

$$
v\sim N(v_0,\Sigma_0),
\qquad
Z_u\sim N(0,\sigma^2),
$$

所以 $v$ 和 $X$ 联合正态。联合正态下，条件期望必为仿射函数，设

$$
\begin{aligned}
E[v\mid X]=a+bX.
\end{aligned}
$$

由正交投影条件

$$
\begin{aligned}
E\big[v-(a+bX)\big]&=0,\\
E\big[X(v-(a+bX))\big]&=0
\end{aligned}
$$

可得

$$
\begin{aligned}
a&=E[v]-bE[X],\\
b&=\operatorname{Cov}(v,X)\operatorname{Var}(X)^{-1}.
\end{aligned}
$$

因此一般地

$$
\begin{aligned}
E[v\mid X]
&=E[v]+\operatorname{Cov}(v,X)\operatorname{Var}(X)^{-1}\big(X-E[X]\big).
\end{aligned}
$$

在 Kyle 这里，

$$
\begin{aligned}
E[v]&=v_0,\\
E[X]&=E[\beta(v-v_0)+Z_u]=0,
\end{aligned}
$$

所以

$$
\begin{aligned}
E[v\mid X]
&=v_0+\operatorname{Cov}(v,X)\operatorname{Var}(X)^{-1}X.
\end{aligned}
$$

于是价格自然写成线性形式

$$
p=v_0+\lambda X.
$$

这背后的直觉是：在正态世界里，Bayesian updating 就是线性投影；更高阶项不再提供额外信息。

## 2. 知情者为什么线性交易

若做市商采用线性价格规则

$$
p=v_0+\lambda X=v_0+\lambda(x+Z_u),
$$

则知情者观察到 $v$ 后选择 $x$，其条件期望利润为

$$
\begin{aligned}
E[(v-p)x\mid v]
&=E[(v-v_0-\lambda(x+Z_u))x\mid v] \\
&=(v-v_0-\lambda x)x-\lambda xE[Z_u\mid v] \\
&=(v-v_0)x-\lambda x^2.
\end{aligned}
$$

一阶条件给出

$$
\begin{aligned}
v-v_0-2\lambda x=0
\Longrightarrow
x=\frac{v-v_0}{2\lambda}.
\end{aligned}
$$

所以只要价格冲击是线性的，知情者的最优反应也自动是线性的。

## 3. 线性均衡为什么是 fixed point

上面两步连起来就是

$$
\begin{aligned}
\text{线性交易 }x
&\Longrightarrow \text{总订单流 }X\text{ 与 }v\text{ 联合正态} \\
&\Longrightarrow p=E[v\mid X]\text{ 线性} \\
&\Longrightarrow \text{知情者最优 }x\text{ 仍线性}.
\end{aligned}
$$

所以线性结构是自洽的 fixed point：

$$
x=\beta(v-v_0),
\qquad
p=v_0+\lambda X.
$$

这就是 Kyle 和 [Grossman-Stiglitz](../04_Information_Beliefs_and_Learning.md) 常从线性均衡猜测出发的原因：

$$
\text{normal prior}+\text{normal noise}+\text{linear signal}
\Longrightarrow
\text{posterior mean is linear}.
$$
