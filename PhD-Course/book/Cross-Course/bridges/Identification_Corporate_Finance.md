---
type: bridge-note
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

# Identification and Corporate Finance

## 1. 一句话主线

identification assumption 是共同对象：Econometrics 提供 IV、LATE、DiD、RD 的 formal assumptions；Corporate Finance 把这些假设映射到资本结构、治理、股利、回购、并购等实证论文里的 endogeneity threats 和自然实验设计。

## 2. 共同数学对象

目标通常是因果效应

$$
\tau=E[Y(1)-Y(0)].
$$

观测数据只给出

$$
Y=DY(1)+(1-D)Y(0),
$$

所以需要识别假设连接 observed comparison 和 counterfactual comparison。

## 3. 跨课命名

| 共同对象 | Econometrics | Corporate Finance | QE 常见问法 |
| --- | --- | --- | --- |
| omitted variable | $E[u\mid X]\ne0$ | firm quality, governance, investment opportunity | 判断 bias 方向 |
| instrument | relevance + exclusion | tax shock, regulation, index inclusion | 评价工具变量 |
| DiD | common trends | treated/control firms around shock | 检查 parallel trends |
| RD | continuity at cutoff | threshold rules, eligibility cutoffs | local effect 解释 |
| LATE | compliers | affected firms only | 解释 external validity |

## 4. 核心公式

### IV

结构方程：

$$
Y=\beta D+u.
$$

有效工具变量 $Z$ 需要

$$
\operatorname{Cov}(Z,D)\ne0,
\qquad
E[Zu]=0.
$$

Wald estimand:

$$
\beta_{IV}=\frac{\operatorname{Cov}(Z,Y)}{\operatorname{Cov}(Z,D)}.
$$

### DiD

两期两组 DiD:

$$
\tau_{DID}
=\left(\bar Y_{T,post}-\bar Y_{T,pre}\right)
-\left(\bar Y_{C,post}-\bar Y_{C,pre}\right).
$$

核心假设是 untreated potential outcome 的 common trends。

### RD

cutoff 为 $c$，running variable 为 $X$：

$$
\tau_{RD}
=\lim_{x\downarrow c}E[Y\mid X=x]
-\lim_{x\uparrow c}E[Y\mid X=x].
$$

核心假设是 potential outcomes 在 cutoff 附近连续。

## 5. QE 题型

### 5.1 paper identification critique

步骤：

1. 写清 treatment、outcome、unit、timing。
2. 指出主要 endogeneity channel。
3. 给出识别假设。
4. 说明可检验 implication 与不能检验的核心假设。

### 5.2 bias direction

步骤：

1. 写遗漏变量公式。
2. 判断 omitted variable 与 treatment 的相关性。
3. 判断 omitted variable 与 outcome 的相关性。
4. 两个符号相乘得到 OLS bias 方向。

### 5.3 natural experiment mapping

Corporate Finance 的自然实验通常不是自动有效；QE 答案要明确 shock 是否只通过 treatment 影响 outcome，以及是否有 anticipatory behavior、selection、spillover、simultaneous policy changes。

## 6. 最短复习路线

1. [Econometrics: IV, 2SLS, Weak Instruments](../../Econometrics/EF8090/05_IV_2SLS_Weak_Instruments.md)
2. [Econometrics: Potential Outcomes, LATE](../../Econometrics/EF8090/06_Potential_Outcomes_LATE_Roy_MTE.md)
3. [Econometrics: DiD and RD](../../Econometrics/EF8090/07_DiD_RD_Nonparametric_Kernel.md)
4. [Corporate Finance: Econometric Methods](../../Corporate%20Finance/02_Econometric_Methods_in_Corporate_Finance.md)
5. [Corporate Finance card: Threats to identification](../../Corporate%20Finance/cards/Threats%20to%20identification%20-%20empirical%20categories.md)

