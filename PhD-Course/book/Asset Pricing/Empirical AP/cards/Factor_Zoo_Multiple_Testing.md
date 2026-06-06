---
orphan: true
---

# Factor Zoo and Multiple Testing

Source: EF8083 slides, pp. 195-241  
导航：[Asset Pricing index](../../index.md) · [Empirical AP MOC](../00-MOC_EF8083_Empirical_Asset_Pricing.md) · 来源：[05_Cross_Section_Factor_Models](../05_Cross_Section_Factor_Models)

If $M$ independent null hypotheses are tested at level $\alpha$, probability of at least one false discovery is:
$$
1-(1-\alpha)^M.
$$

For large $M$, many factors will appear significant by chance.

Implications:

- use higher t-stat thresholds;
- test out-of-sample;
- control for existing factors;
- account for transaction costs;
- check robustness across subsamples and markets.
