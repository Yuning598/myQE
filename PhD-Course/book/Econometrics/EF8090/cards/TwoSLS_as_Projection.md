---
orphan: true
---

# 2SLS as Projection

导航：[Econometrics index](../../index.md)

Parent: [05_IV_2SLS_Weak_Instruments](../05_IV_2SLS_Weak_Instruments.md)

:::{admonition} Definition (2SLS)
$$
P_Z=Z(Z'Z)^{-1}Z',
\qquad
\hat\beta_{2SLS}=(X'P_ZX)^{-1}X'P_ZY.
$$

:::

The first stage replaces $X$ by its projection $P_ZX$. The second stage estimates the relationship between $Y$ and the instrument-induced component of $X$。
