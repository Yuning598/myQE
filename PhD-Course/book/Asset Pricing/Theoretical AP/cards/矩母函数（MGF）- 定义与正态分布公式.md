---
orphan: true
---

# 矩母函数（MGF）- 定义与正态分布公式

导航：[Asset Pricing index](../../index.md) · [Theoretical AP](../../Theoretical_Asset_Pricing.md) · 来源：[04_Information_Beliefs_and_Learning](../04_Information_Beliefs_and_Learning.md)

## 定义

随机变量 $X$ 的 **矩母函数**（moment generating function, MGF）定义为

$$
M_X(t):=E[e^{tX}],
$$

在该期望存在的 $t$ 的邻域内成立。

之所以叫“矩母函数”，是因为对 $M_X(t)$ 在 $t=0$ 附近求导，可以恢复各阶矩。

## 为什么在这里有用

在 CARA 效用里，经常要计算

$$
E[e^{aX}].
$$

这正好就是把矩母函数在 $t=a$ 处取值：

$$
E[e^{aX}] = M_X(a).
$$

因此只要知道某个分布的 MGF，就能快速算出指数效用下的期望。

## 标准正态的 MGF

若

$$
Z	hicksim N(0,1),
$$

则它的矩母函数为

$$
M_Z(t)=E[e^{tZ}]=e^{t^2/2}.
$$

这是课程里最常用的一个公式。

## 一个简短推导

标准正态密度为

$$
\phi(z)=\frac{1}{\sqrt{2\pi}}e^{-z^2/2}.
$$

于是

$$
E[e^{tZ}] =
\int_{-\infty}^{\infty} e^{tz}\frac{1}{\sqrt{2\pi}}e^{-z^2/2}dz =
\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}(z^2-2tz)}dz.
$$

配方：

$$
z^2-2tz=(z-t)^2-t^2.
$$

因此

$$
E[e^{tZ}] =
\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}(z-t)^2}e^{t^2/2}dz =
e^{t^2/2}\int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}(z-t)^2}dz =
e^{t^2/2}.
$$

最后一步利用的是：平移后的正态密度积分仍然等于 1。

## 一般正态的 MGF

若

$$
X\sim N(\mu,\sigma^2),
$$

则

$$
M_X(t)=E[e^{tX}]=\exp\left(\mu t+\frac{1}{2}\sigma^2 t^2\right).
$$

标准正态只是其中的特例：取 $\mu=0,\sigma^2=1$ 即得

$$
E[e^{tZ}]=e^{t^2/2}.
$$

## 在 CARA-Normal 里的直接应用

若

$$
W=\mu+\sigma Z,
\qquad Z\sim N(0,1),
$$

则

$$
E[-e^{-\lambda W}]
=-e^{-\lambda\mu}E[e^{-(\lambda\sigma)Z}]
=-e^{-\lambda\mu}\exp\left(\frac{(\lambda\sigma)^2}{2}\right).
$$

所以

$$
E[-e^{-\lambda W}]
=-\exp\left(-\lambda\mu+\frac{\lambda^2\sigma^2}{2}\right).
$$

这正是 CARA-Normal 下“最大化期望效用等价于最大化均值减去风险惩罚项”的关键一步。

## 这张卡最该记住的公式

1. 定义：

$$
M_X(t)=E[e^{tX}].
$$

2. 标准正态：

$$
Z\sim N(0,1)
\quad\Rightarrow\quad
E[e^{tZ}]=e^{t^2/2}.
$$

3. 一般正态：

$$
X\sim N(\mu,\sigma^2)
\quad\Rightarrow\quad
E[e^{tX}]=\exp\left(\mu t+\frac{1}{2}\sigma^2 t^2\right).
$$

## 相关链接

- [04_Information_Beliefs_and_Learning](../04_Information_Beliefs_and_Learning.md)
- [CARA-Normal framework - 均值方差等价与最优需求](CARA-Normal%20framework%20-%20%E5%9D%87%E5%80%BC%E6%96%B9%E5%B7%AE%E7%AD%89%E4%BB%B7%E4%B8%8E%E6%9C%80%E4%BC%98%E9%9C%80%E6%B1%82.md)
- [贝叶斯更新 - 先验、信号、似然、后验](%E8%B4%9D%E5%8F%B6%E6%96%AF%E6%9B%B4%E6%96%B0%20-%20%E5%85%88%E9%AA%8C%E3%80%81%E4%BF%A1%E5%8F%B7%E3%80%81%E4%BC%BC%E7%84%B6%E3%80%81%E5%90%8E%E9%AA%8C.md)
