---
orphan: true
---

# Chebyshev WLLN

导航：[Econometrics index](../../index.md)

Parent: [03_Asymptotics_OLS_Inference_Hypothesis_Testing](../03_Asymptotics_OLS_Inference_Hypothesis_Testing.md)

:::{admonition} Lemma: WLLN from Chebyshev
If $Y_i$ iid with $E[Y_i]=\mu$, $\operatorname{Var}(Y_i)=\sigma^2<\infty$, then
$$
P(|\bar Y_n-\mu|>\varepsilon)\le \frac{\sigma^2}{n\varepsilon^2}\to0.
$$
Hence $\bar Y_n\to_p\mu$。

:::

This is the workhorse behind sample moments converging to population moments.
