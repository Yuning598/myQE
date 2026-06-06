---
orphan: true
---

# Kernel Bandwidth Bias-Variance Tradeoff

导航：[Econometrics index](../../index.md)

Parent: [07_DiD_RD_Nonparametric_Kernel](../07_DiD_RD_Nonparametric_Kernel.md)

:::{admonition} Lemma: Univariate kernel MSE
$$
MSE=O((nh)^{-1})+O(h^4).
$$
Equating rates gives
$$
h\asymp n^{-1/5}.
$$

:::

In $q$ dimensions, rate becomes $MSE=O(n^{-4/(q+4)})$, illustrating the curse of dimensionality.
