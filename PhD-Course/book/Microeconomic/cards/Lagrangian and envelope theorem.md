---
type: card
topic: optimization
tags: [micro, optimization]
orphan: true
---

# Lagrangian and envelope theorem

导航：[Microeconomic index](../index.md)

Main notes: [Microeconomic/01_Static_Choice_Consumer_Demand_and_Integrability](../01_Static_Choice_Consumer_Demand_and_Integrability.md), [Microeconomic/cards/Roy identity and Shephard lemma](Roy%20identity%20and%20Shephard%20lemma.md)

For

$$
v(\theta)=\max_x f(x,\theta)\quad\text{s.t. }g(x,\theta)=0,
$$

write

$$
\mathcal L(x,\lambda,\theta)=f(x,\theta)-\lambda g(x,\theta).
$$

FOCs:

$$
\mathcal L_x=0,\qquad g(x,\theta)=0.
$$

Envelope:

$$
\frac{\partial v}{\partial \theta_k} =
\frac{\partial \mathcal L}{\partial \theta_k}
\bigg|_{x=x(\theta),\lambda=\lambda(\theta)}.
$$

Use this for Roy, Shephard, Hotelling, and value-function comparative statics.
