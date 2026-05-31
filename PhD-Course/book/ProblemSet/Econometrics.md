# Econometrics

## Question 1

Consider

$$
\left\{
\begin{aligned}
&y_i=x_i'\beta+\varepsilon_i,\qquad i=1,\dots,n\\
&x_i\in\mathbb R^k,\qquad k\text{ fixed}\\
&\{(x_i,\varepsilon_i)\}_{i=1}^n\text{ i.i.d.}\\
&E[x_i\varepsilon_i]=0,\qquad Q=E[x_ix_i']\succ0,\qquad \sigma^2=E[\varepsilon_i^2]\\
&\hat\varepsilon=y-X\hat\beta=M_X\varepsilon,\qquad M_X=I-X(X'X)^{-1}X'\\
&s^2=\dfrac{\hat\varepsilon'\hat\varepsilon}{n-k}.
\end{aligned}
\right.
$$

Show the consistency and limiting distribution of $s^2$.

::::{collapse} Basic setup

目标是修正 residual sum of squares decomposition 里的 scaling，并证明

$$
\left\{
\begin{aligned}
&s^2\overset p\to\sigma^2\\
&\sqrt n(s^2-\sigma^2)\overset d\to N(0,E[\varepsilon_i^4]-\sigma^4)
\end{aligned}
\right.
$$

其中 limiting distribution 需要额外假设 $E[\varepsilon_i^4]<\infty$。

::::

::::{solution}

**核心分解**

$$
\begin{aligned}
\hat\varepsilon'\hat\varepsilon
&=\varepsilon'M_X\varepsilon\\
&=\varepsilon'\varepsilon-\varepsilon'X(X'X)^{-1}X'\varepsilon\\
&=\sum_{i=1}^n\varepsilon_i^2
-\left(\sum_{i=1}^n x_i\varepsilon_i\right)'
\left(\sum_{i=1}^n x_ix_i'\right)^{-1}
\left(\sum_{i=1}^n x_i\varepsilon_i\right).
\end{aligned}
$$

因此

$$
\begin{aligned}
s^2
&=
\frac{n}{n-k}
\left[
\frac1n\sum_{i=1}^n\varepsilon_i^2
-
\left(\frac1n\sum_{i=1}^n x_i\varepsilon_i\right)'
\left(\frac1n\sum_{i=1}^n x_ix_i'\right)^{-1}
\left(\frac1n\sum_{i=1}^n x_i\varepsilon_i\right)
\right].
\end{aligned}
$$

图片里的 cross term scaling 笔误在这里：两边都应是 $\frac1n\sum_{i=1}^n x_i\varepsilon_i$，中间是 $\left(\frac1n\sum_{i=1}^n x_ix_i'\right)^{-1}$。

**Consistency**

若 $E[\varepsilon_i^2]<\infty$、$E[\|x_i\varepsilon_i\|]<\infty$、$E[\|x_i\|^2]<\infty$，则

$$
\left\{
\begin{aligned}
&\frac1n\sum_{i=1}^n\varepsilon_i^2\overset p\to\sigma^2\\
&\frac1n\sum_{i=1}^n x_i\varepsilon_i\overset p\to0\\
&\frac1n\sum_{i=1}^n x_ix_i'\overset p\to Q\\
&\frac{n}{n-k}\to1.
\end{aligned}
\right.
$$

代回分解式：

$$
\begin{aligned}
s^2
&\overset p\to
1\cdot\left[\sigma^2-0'Q^{-1}0\right]\\
&=\sigma^2.
\end{aligned}
$$

$$
\boxed{s^2\overset p\to\sigma^2.}
$$

**Limiting distribution**

令

$$
A_n=\frac1n\sum_{i=1}^n\varepsilon_i^2,\qquad
B_n=\frac1n\sum_{i=1}^n x_i\varepsilon_i,\qquad
Q_n=\frac1n\sum_{i=1}^n x_ix_i',
$$

则 $s^2=\frac{n}{n-k}(A_n-B_n'Q_n^{-1}B_n)$。因此

$$
\begin{aligned}
\sqrt n(s^2-\sigma^2)
&=
\frac{n}{n-k}\sqrt n(A_n-\sigma^2)
+\left(\frac{n}{n-k}-1\right)\sqrt n\sigma^2
-\frac{n}{n-k}\sqrt n B_n'Q_n^{-1}B_n.
\end{aligned}
$$

前两项的 deterministic scale 满足

$$
\frac{n}{n-k}\to1,\qquad
\left(\frac{n}{n-k}-1\right)\sqrt n\sigma^2
=\frac{k}{n-k}\sqrt n\sigma^2\to0.
$$

若 $E[\|x_i\varepsilon_i\|^2]<\infty$，则

$$
\sqrt n B_n=\frac1{\sqrt n}\sum_{i=1}^n x_i\varepsilon_i=O_p(1),
\qquad
B_n=O_p(n^{-1/2}),
\qquad
Q_n^{-1}=O_p(1).
$$

所以图片里 limiting distribution 的 correction term 正确数量级是

$$
\sqrt n B_n'Q_n^{-1}B_n
=\sqrt n\cdot O_p(n^{-1})
=o_p(1).
$$

于是

$$
\sqrt n(s^2-\sigma^2)
=\sqrt n(A_n-\sigma^2)+o_p(1)
=\frac1{\sqrt n}\sum_{i=1}^n(\varepsilon_i^2-\sigma^2)+o_p(1).
$$

若进一步假设 $E[\varepsilon_i^4]<\infty$，由 CLT，

$$
\frac1{\sqrt n}\sum_{i=1}^n(\varepsilon_i^2-\sigma^2)
\overset d\to
N\left(0,\operatorname{Var}(\varepsilon_i^2)\right),
$$

且

$$
\operatorname{Var}(\varepsilon_i^2)
=E[\varepsilon_i^4]-\left(E[\varepsilon_i^2]\right)^2
=E[\varepsilon_i^4]-\sigma^4.
$$

因此，

$$
\boxed{
\sqrt n(s^2-\sigma^2)
\overset d\to
N\left(0,E[\varepsilon_i^4]-\sigma^4\right).
}
$$

考试版结论：

$$
\left\{
\begin{aligned}
&s^2\overset p\to\sigma^2\\
&\sqrt n(s^2-\sigma^2)\overset d\to N(0,E[\varepsilon_i^4]-\sigma^4).
\end{aligned}
\right.
$$

::::
