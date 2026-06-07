---
type: index
tags:
  - qe
  - cross-course
---

# Cross-Course Links

本页按共同数学对象组织 QE 知识图谱。同一个 restriction 会在不同课里换名字：Micro 写成偏好、约束或均衡条件；Econometrics 写成 projection、moment 或 identification；Asset Pricing 写成 SDF、beta、Euler equation 或 HJB；Corporate Finance 写成可辩护的 empirical design。

```{cross-course-graph}
:data: Cross-Course/data/qe_graph.yml
:height: 900px
:subtitle: Common restrictions behind Microeconomics, Econometrics, Asset Pricing, Corporate Finance, and QE problem sets.
```

## 共同对象矩阵

| 共同数学对象 | 在不同课里的名字 | QE 检查点 | 深读 |
| --- | --- | --- | --- |
| payoff span / positive pricing functional | Arrow securities, state prices, SDF, risk-neutral probability | 写 $p=A^\top q$；判断 $\operatorname{rank}(A)$；给出 no-arbitrage price set；构造套利 | [Payoff span and pricing functionals](bridges/State_Prices_SDF_Complete_Markets.md) |
| marginal utility / covariance restriction | Jensen, Arrow-Pratt, CARA-Normal demand, CAPM | 从凹性到 risk premium；由 FOC 推 mean-variance demand；用 market clearing 得 beta pricing | [Marginal utility and covariance pricing](bridges/Risk_Aversion_Mean_Variance_CAPM.md) |
| orthogonality condition | linear projection, residual maker, beta, Fama-MacBeth | 写 $E[Xu]=0$；证明 projection matrix 性质；把 beta 解释为 covariance restriction | [Orthogonality and beta restrictions](bridges/Projection_Beta_Pricing.md) |
| moment restriction | GMM, Euler equation, pricing error, overidentification | 写 $E[g_t(\theta_0)]=0$；构造 $\bar g^\top W\bar g$；解释 J-test 和 rejected SDF | [Moment restrictions and pricing errors](bridges/GMM_Euler_Equation.md) |
| identifying assumption | exogeneity, exclusion, common trends, continuity, natural experiment | 区分 estimand 和 estimator；写出识别假设；说明 bias direction 与不可检验部分 | [Identification assumptions in empirical finance](bridges/Identification_Corporate_Finance.md) |
| recursive value problem | Bellman equation, continuation value, HJB, stopping boundary | 选 state/control；写 generator；给 boundary、transversality 和 verification | [Recursive value problems and verification](bridges/Dynamic_Programming_HJB.md) |

## 读图规则

图中的黑色 Bridge 节点不是一门课，而是共同 restriction 的汇合点。点开一个 Bridge 后，先看它连接了哪些课程节点，再进入对应 note；考试时按该 note 的等价命题和 proof template 写，不按课程目录顺序写。
