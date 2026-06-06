---
orphan: true
---

# Boundary MLE: Uniform(theta, 2theta)

导航：[Econometrics index](../../index.md)

Parent: [04_MLE_Fisher_CRLB_and_ML_Tests](../04_MLE_Fisher_CRLB_and_ML_Tests.md)

:::{admonition} Lemma: Uniform boundary estimator
If $X_i\sim U(\theta,2\theta)$, then
$$
\ell(\theta)=\theta^{-n}\mathbf 1\left\{\frac{X_{(n)}}2\le\theta\le X_{(1)}\right\},
$$
hence
$$
\hat\theta=\frac12X_{(n)}.
$$

:::

This MLE is nonregular: its limiting distribution is exponential under $n$-rate, not normal under $\sqrt n$-rate.
