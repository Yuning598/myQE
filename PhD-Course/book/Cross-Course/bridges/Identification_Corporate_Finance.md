---
type: bridge-note
orphan: true
qe_weight: medium
courses:
  - Econometrics
  - Corporate Finance
topics:
  - identification
  - iv
  - did
  - rd
  - event-study
exam_modes:
  - identification
  - interpretation
tags:
  - qe
  - cross-course
  - identification
---

# Identification and Corporate Finance

导航：[Cross-Course Hub](../index.md) · [Econometrics](../../Econometrics/index.md) · [Corporate Finance](../../Corporate%20Finance/index.md)

## 共同对象

共同对象是把 corporate decision 和 outcome 之间的关系变成可解释的 causal estimand。Econometrics 给识别条件；Corporate Finance 负责说明制度冲击、财务约束、代理问题或信息摩擦为什么产生 variation。

## 跨课翻译

$$
\begin{aligned}
Y_{it}
&=\alpha_i+\delta_t+\beta D_{it}+X_{it}'\gamma+\varepsilon_{it},\\
\beta
&=\text{causal effect}
& \Longleftrightarrow
E[\varepsilon_{it}\mid D_{it},X_{it},\alpha_i,\delta_t]=0.
\end{aligned}
$$

| Design | Econometrics asks | Corporate Finance asks |
| --- | --- | --- |
| IV | relevance and exclusion | why the instrument shifts policy but not outcomes directly |
| DiD | parallel trends | why treated and control firms are comparable |
| RD | local continuity | why the cutoff is not manipulated |
| event study | dynamic pre-trends | what mechanism should move first |

## 考场写法

- 先写 estimand 和 identifying assumption。
- 再说明 threat to identification。
- 最后把 mechanism 和 empirical design 对齐。

## 进入原始材料

- [Econometrics: IV Identification](../../Econometrics/EF8090/05_IV_2SLS_Weak_Instruments.md)
- [Econometrics: Potential Outcomes and LATE](../../Econometrics/EF8090/06_Potential_Outcomes_LATE_Roy_MTE.md)
- [Corporate Finance: Econometric Methods](../../Corporate%20Finance/02_Econometric_Methods_in_Corporate_Finance.md)
- [Corporate Finance index](../../Corporate%20Finance/index.md)
