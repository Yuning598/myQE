---
orphan: true
---

# Campbell-Shiller Decomposition

Source: EF8083 slides, pp. 104-122  
导航：[Asset Pricing index](../../index.md) · [Empirical AP MOC](../00-MOC_EF8083_Empirical_Asset_Pricing.md) · 来源：[03_Consumption_Based_AP_Puzzles](../03_Consumption_Based_AP_Puzzles)

Log-linear return:
$$
r_{t+1}\approx \kappa+\rho pd_{t+1}+\Delta d_{t+1}-pd_t.
$$

Forward solution:
$$
pd_t =
\frac{\kappa}{1-\rho}
+\sum_{j=1}^{\infty}\rho^{j-1}E_t[\Delta d_{t+j}]
-\sum_{j=1}^{\infty}\rho^{j-1}E_t[r_{t+j}].
$$

Interpretation:
$$
pd_t =
\text{cash-flow news} -
\text{discount-rate news}.
$$
