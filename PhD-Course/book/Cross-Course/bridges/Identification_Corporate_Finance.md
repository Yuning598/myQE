---
type: bridge-note
orphan: true
qe_weight: high
courses:
  - Econometrics
  - Corporate Finance
topics:
  - identification
  - iv
  - did
  - rd
  - corporate-finance
exam_modes:
  - interpretation
  - critique
  - proof
tags:
  - qe
  - cross-course
  - identification
  - corporate-finance
---

# Identification Assumptions in Empirical Finance

导航：[Cross-Course Hub](../index.md) · [Econometrics](../../Econometrics/index.md) · [Corporate Finance](../../Corporate%20Finance/index.md)

## 共同对象

共同对象是 identifying assumption，而不是某个回归命令。Econometrics 给出 IV、DiD、RD、LATE 的 formal conditions；Corporate Finance 的任务是把资本结构、治理、股利、并购等问题里的 endogeneity threats 映射到这些 conditions 上。

目标 estimand 通常是：

$$
\left\{
\begin{aligned}
\tau&=E[Y(1)-Y(0)],\\
Y&=DY(1)+(1-D)Y(0).
\end{aligned}
\right.
$$

观测数据永远缺 counterfactual，所以 QE 答案的核心不是“用了哪个 estimator”，而是：

$$
\begin{aligned}
\text{observed comparison}
\overset{\text{identifying assumption}}{\Longrightarrow}
\text{counterfactual comparison}.
\end{aligned}
$$

## 等价命题

| 共同 restriction | Econometrics | Corporate Finance | QE 中要写清 |
| --- | --- | --- | --- |
| selection on unobservables | $E[u\mid D]\ne0$ | high-quality firms choose payout, leverage, governance | bias direction |
| exclusion | $E[Zu]=0$ | regulation, tax shock, index inclusion | shock 是否只经 treatment 影响 outcome |
| common trends | untreated parallel trends | treated/control firms around event | pre-trend 和 concurrent shocks |
| continuity | potential outcomes continuous at cutoff | eligibility threshold, rule cutoff | manipulation / local estimand |
| monotonicity | no defiers | affected firms are compliers | LATE 外推限制 |

遗漏变量偏误可直接写成：

$$
\begin{aligned}
\plim \hat\beta_{OLS}
&=\beta+\frac{\operatorname{Cov}(D,u)}{\operatorname{Var}(D)}.
\end{aligned}
$$

IV 的识别系统是：

$$
\left\{
\begin{aligned}
Y&=\beta D+u,\\
\operatorname{Cov}(Z,D)&\ne0,\\
E[Zu]&=0.
\end{aligned}
\right.
$$

$$
\begin{aligned}
\beta_{IV}
&=\frac{\operatorname{Cov}(Z,Y)}{\operatorname{Cov}(Z,D)}.
\end{aligned}
$$

DiD 的识别等式是：

$$
\begin{aligned}
\tau_{DID}
&=\left(\bar Y_{T,post}-\bar Y_{T,pre}\right)
-\left(\bar Y_{C,post}-\bar Y_{C,pre}\right).
\end{aligned}
$$

RD 的 local estimand 是：

$$
\begin{aligned}
\tau_{RD}
&=\lim_{x\downarrow c}E[Y\mid X=x]
-\lim_{x\uparrow c}E[Y\mid X=x].
\end{aligned}
$$

## 跨课翻译

Corporate Finance 论文里的 natural experiment 不是自动识别。它只是在 Econometrics 的 restriction 上提供一个候选来源：

$$
\begin{aligned}
\text{policy / regulation / tax shock}
&\Longrightarrow \text{variation in }D\\
&\not\Longrightarrow \text{valid design unless exclusion/common trends/continuity holds}.
\end{aligned}
$$

因此读 paper 时先填四个对象：unit、treatment、outcome、timing。再判断 shock 是否带来 selection、anticipation、spillover 或 simultaneous policy changes。

## 考场写法

**Paper identification critique.** 一段合格答案应包含：

- treatment、outcome、unit、timing；
- primary endogeneity channel；
- identifying assumption；
- testable implication；
- untestable maintained assumption。

**Bias direction.** 不要只说 “upward bias”。要写：

$$
\begin{aligned}
\operatorname{sign}(\text{bias})
&=\operatorname{sign}\{\operatorname{Cov}(D,u)\}\\
&=\operatorname{sign}\{\operatorname{Cov}(D,\text{omitted factor})\}
\cdot
\operatorname{sign}\{\operatorname{Cov}(Y,\text{omitted factor})\}.
\end{aligned}
$$

**Natural experiment.** 先说明 shock 改变了什么 margin，再说明为什么 shock 不直接影响 outcome；如果做不到，答案应改成 threat，而不是硬说 valid。

## 常见错误

- 把 statistically significant first stage 当成 IV validity；exclusion restriction 仍然不可检验。
- DiD 只画事件研究图，不说明 untreated potential outcomes 的 common trends。
- RD 只说 cutoff 附近相似，不检查 manipulation 和 covariate balance。
- Corporate Finance paper critique 只复述作者设计，没有指出 firm selection、anticipation、spillover 或 simultaneous shocks。

## 进入原始材料

- [Econometrics: IV, 2SLS, Weak Instruments](../../Econometrics/EF8090/05_IV_2SLS_Weak_Instruments.md)
- [Econometrics: Potential Outcomes, LATE](../../Econometrics/EF8090/06_Potential_Outcomes_LATE_Roy_MTE.md)
- [Econometrics: DiD and RD](../../Econometrics/EF8090/07_DiD_RD_Nonparametric_Kernel.md)
- [Corporate Finance: Econometric Methods](../../Corporate%20Finance/02_Econometric_Methods_in_Corporate_Finance.md)
- [Corporate Finance card: Threats to identification](../../Corporate%20Finance/cards/Threats%20to%20identification%20-%20empirical%20categories.md)
