# MM 定理与税基资本结构理论

## 📌 相关理论链接

- **对比理论**：[Pecking_Order_Theory](Pecking_Order_Theory.md) - 盈利与杠杆关系相反
- **互补理论**：[Agency_Theory](Agency_Theory.md) - 代理成本降低最优杠杆
- **互补理论**：[Financial_Distress_Theory](Financial_Distress_Theory.md) - 困境成本降低最优杠杆
- **整合框架**：[00_Theory_Integration](00_Theory_Integration.md) - 完整 trade-off 模型

---

## 1. MM 无关命题（1958, 1963）

### 1.1 MM 命题 I（无税，1958）

**核心命题**：在完美市场下，企业价值由资产端现金流决定，融资结构只是切分方式，不创造价值。

$$
\begin{aligned}
V_L = V_U
\end{aligned}
$$

其中：
- $V_L$：有杠杆企业价值
- $V_U$：无杠杆企业价值

**完美市场成立条件**：

$$
\begin{aligned}
\text{MM irrelevance holds}
&\Longleftarrow
\begin{cases}
\text{no taxes} \\
\text{no transaction costs} \\
\text{no bankruptcy costs} \\
\text{symmetric information} \\
\text{no agency costs} \\
\text{financial policy does not affect cash flows}
\end{cases}
\end{aligned}
$$

**自制杠杆（homemade leverage）论证**：

投资者可以自制杠杆（homemade leverage）复制企业融资决策：

$$
\begin{aligned}
\text{个人借款} + \text{买入无杠杆企业股票}
&\equiv \text{买入有杠杆企业股票}
\end{aligned}
$$

因此企业杠杆不创造额外价值。

**套利论证**：

假设 $V_L > V_U$，套利策略：
1. 卖空有杠杆企业股票 $S_L$
2. 买入无杠杆企业股票 $S_U$
3. 个人借款复制杠杆企业的债务结构

套利利润：

$$
\begin{aligned}
\pi = V_L - V_U > 0
\end{aligned}
$$

套利行为使 $V_L \to V_U$。

---

### 1.2 MM 命题 II（无税，1958）

**核心命题**：杠杆越高，股权成本越高，但 WACC 不变。

$$
\begin{aligned}
r_E = r_U + \frac{D}{E}(r_U - r_D)
\end{aligned}
$$

其中：
- $r_E$：股权成本
- $r_U$：无杠杆资产成本
- $r_D$：债务成本
- $D/E$：债务权益比

**推导**：

$$
\begin{aligned}
V_L &= V_U \\
E + D &= V_U \\
\text{WACC} &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D \\
&= r_U
\end{aligned}
$$

由 WACC 定义：

$$
\begin{aligned}
r_U &= \frac{E}{E+D}r_E + \frac{D}{E+D}r_D \\
r_U(E+D) &= Er_E + Dr_D \\
r_E &= r_U + \frac{D}{E}(r_U - r_D)
\end{aligned}
$$

**经济直觉**：杠杆越高，股东承担的财务风险越大，所以要求更高回报率；但资本结构只是重新分配风险，WACC 不变。

---

### 1.3 MM 命题 I（公司税，1963）

**核心命题**：公司税使利息可抵扣，所以债务会带来 tax shield。

$$
\begin{aligned}
V_L = V_U + T_C D
\end{aligned}
$$

其中：
- $T_C$：公司税率
- $T_C D$：债务税盾现值（perpetual debt）

**推导**：

无杠杆企业税后现金流：

$$
\begin{aligned}
CF_U = EBIT(1-T_C)
\end{aligned}
$$

有杠杆企业税后现金流：

$$
\begin{aligned}
CF_L &= \underbrace{(EBIT - r_D D)(1-T_C)}_{\text{税后净利润}} + \underbrace{r_D D}_{\text{利息支付}} \\
&= EBIT(1-T_C) + \underbrace{r_D D T_C}_{\text{利息税盾}}
\end{aligned}
$$

税盾价值（perpetual debt）：

$$
\begin{aligned}
PV(\text{tax shield}) = \frac{\underbrace{r_D D T_C}_{\text{年度税盾}}}{r_D} = T_C D
\end{aligned}
$$

因此：

$$
\begin{aligned}
V_L = V_U + T_C D
\end{aligned}
$$

**推论**：只看公司税时，极端结论是 100% debt financing。

---

### 1.4 MM 命题 II（公司税，1963）

**核心命题**：税盾会降低 WACC；股权成本仍随杠杆上升，但上升得更慢。

$$
\begin{aligned}
r_E = r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
\end{aligned}
$$

**推导**：

$$
\begin{aligned}
V_L &= V_U + T_C D \\
E &= V_L - D = V_U + T_C D - D = V_U - D(1-T_C) \\
\text{WACC} &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D(1-T_C) \\
&= r_U\left(1 - \frac{D}{V_L}T_C\right)
\end{aligned}
$$

由 WACC 定义：

$$
\begin{aligned}
r_U\left(1 - \frac{D}{V_L}T_C\right) &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D(1-T_C) \\
r_E &= r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
\end{aligned}
$$

**经济直觉**：利息税盾降低债务的有效成本，所以杠杆提高时，WACC 会下降。

---

## 2. Miller（1977）个人税模型

### 2.1 核心机制

**问题**：MM (1963) 只看公司税，没把个人税算进去。Miller (1977) 加入个人税后发现，债务的税收优势被削弱。

**税收结构**：

- $T_C$：公司税率
- $t_{pe}$：股权收益个人税率（capital gains）
- $t_{pd}$：债务利息个人税率（ordinary income）

**投资者税后收益**：

股权投资者税后收益（每元 EBIT）：

$$
\begin{aligned}
\underbrace{(1-T_C)}_{\text{公司税后}} \times \underbrace{(1-t_{pe})}_{\text{个人税后}}
\end{aligned}
$$

债务投资者税后收益（每元利息）：

$$
\begin{aligned}
\underbrace{(1-t_{pd})}_{\text{个人税后，无公司税}}
\end{aligned}
$$

**债务相对优势**：

$$
\begin{aligned}
\text{Debt advantage} = 1 - \frac{\underbrace{(1-T_C)(1-t_{pe})}_{\text{股权税后收益}}}{\underbrace{(1-t_{pd})}_{\text{债务税后收益}}}
\end{aligned}
$$

- 若 $\frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})} < 1$，债务仍有税收优势
- 若 $\frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})} = 1$，债务没有税收优势（Miller equilibrium）

---

### 2.2 Miller 均衡（Miller equilibrium）

**均衡条件**：

$$
\begin{aligned}
(1-T_C)(1-t_{pe}) = (1-t_{pd})
\end{aligned}
$$

**经济直觉**：
- 高税率投资者（高 $t_{pd}$）会要求更高的债务利率补偿
- 企业一直发债，直到边际投资者无差异
- 均衡时，债务税盾会被个人税抵消掉

**总债务税盾价值**：

$$
\begin{aligned}
V_L = V_U + \left[1 - \frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})}\right]D
\end{aligned}
$$

若 Miller equilibrium 成立：

$$
\begin{aligned}
V_L = V_U
\end{aligned}
$$

**实证含义**：
- 美国 1986 税改前：$T_C \approx 0.46$, $t_{pe} \approx 0.20$, $t_{pd} \approx 0.50$
- 计算：$(1-0.46)(1-0.20) = 0.432$, $(1-0.50) = 0.50$
- 债务仍有税收优势，但小于 MM (1963) 预测

---

## 3. DeAngelo and Masulis (1980)

### 问题（Question）

非债务税盾（non-debt tax shields）会不会替代债务税盾，从而压低最优杠杆？

### 识别（Identification）

按企业横截面比较 depreciation、investment tax credit 和 profitability volatility 的差异。核心 proxy 是 marginal tax rate：

$$
\begin{aligned}
\text{Marginal tax rate} = T_C \times \Pr(\text{taxable income} > 0)
\end{aligned}
$$

### 主要结论（Main finding）

$$
\begin{aligned}
\text{non-debt tax shields} \uparrow
&\Rightarrow \text{marginal tax rate} \downarrow \\
&\Rightarrow \text{debt tax shield value} \downarrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

### 解释（Interpretation）

折旧和 investment tax credit 会降低 taxable income，让企业更容易落入零税率区间，所以债务的边际收益下降。profitability volatility 越高，税盾越可能用不上。

### 考点（Exam takeaway）

折旧高、ITC 高、盈利波动大，都对应更低杠杆，因为 non-debt tax shields 会挤出 debt tax shields。

---

## 4. Graham (2000)

### 问题（Question）

债务税盾到底有多大？企业有没有把它用足？

### 识别（Identification）

用未来盈利路径模拟来估计 expected marginal tax rate，并考虑 NOL carryforward/carryback，再把 implied interest tax shield 折现。

$$
\begin{aligned}
MTR_t = \frac{\partial \text{Tax}_t}{\partial \text{Income}_t}
\end{aligned}
$$

$$
\begin{aligned}
PV(\text{tax shield}) = \sum_{t=1}^{\infty} \frac{E[MTR_t] \times r_D D}{(1+r)^t}
\end{aligned}
$$

### 主要结论（Main finding）

- 债务税盾价值大约是 firm value 的 **5-10%**。
- 这比 MM (1963) 的基准值低很多。
- 实际杠杆低于 tax-optimal leverage。

$$
\begin{aligned}
\frac{PV(\text{tax shield})}{V_L} \approx 0.05 \sim 0.10
\end{aligned}
$$

$$
\begin{aligned}
\text{actual leverage} < \text{tax-optimal leverage}
\end{aligned}
$$

### 解释（Interpretation）

税盾确实有价值，但比简单的 MM 基准小得多，因为很多企业在坏状态下的 marginal tax rate 很低甚至为零。distress 和 agency 等非税摩擦会把杠杆压在税收最优水平之下。

### 考点（Exam takeaway）

记住三点：5-10% 的估计值、模拟式 MTR 设计、actual leverage 低于 tax-optimal leverage。

---

## 5. Graham and Tucker (2006)

### 问题（Question）

tax shelters 会不会替代 debt，成为另一种避税工具？

### 识别（Identification）

用 IRS 审计数据、媒体报道和诉讼记录识别 shelter users，再和 non-users 比较 leverage，并控制 observables。

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \beta \text{Tax Shelter User}_i + \gamma X_{it} + \varepsilon_{it}
\end{aligned}
$$

### 主要结论（Main finding）

- tax shelter users 的杠杆更低，大约比 non-users 低 **5%**。

$$
\begin{aligned}
\text{Leverage}_{\text{shelter users}} - \text{Leverage}_{\text{non-users}} \approx -5\%
\end{aligned}
$$

### 解释（Interpretation）

如果企业可以通过 shelters 降税，债务的边际收益就会下降。shelters 和 debt 都能降税，但 shelters 不带来 financial distress cost，所以两者是替代关系。

### 考点（Exam takeaway）

tax shelters 越多，杠杆越低。打击 shelters 后，企业会更依赖 debt tax shield，杠杆应上升。

---

## 6. 理论整合与实证预测

### 6.1 理论演进

$$
\begin{aligned}
\text{MM (1958)} &: V_L = V_U \quad \text{(perfect markets)} \\
\text{MM (1963)} &: V_L = V_U + T_C D \quad \text{(corporate tax)} \\
\text{Miller (1977)} &: V_L = V_U + \left[1 - \frac{(1-T_C)(1-t_{pe})}{(1-t_{pd})}\right]D \quad \text{(personal tax)} \\
\text{DeAngelo-Masulis (1980)} &: V_L = V_U + T_C D - PV(\text{lost shields}) \quad \text{(non-debt shields)} \\
\text{Graham (2000)} &: \frac{PV(\text{tax shield})}{V_L} \approx 5\text{-}10\% \quad \text{(empirical estimate)}
\end{aligned}
$$

---

### 6.2 跨企业差异预测

| 企业特征                     | 对杠杆的影响 | 理论机制                                     |
| ---------------------------- | ------------ | -------------------------------------------- |
| 盈利能力（profitability）↑   | 杠杆↑        | 边际税率更高 → 税盾价值↑                    |
| 盈利波动（profitability volatility）↑ | 杠杆↓ | 更可能进入零税率区间 → 税盾价值↓            |
| 非债务税盾（non-debt tax shields）↑ | 杠杆↓ | 折旧等替代债务税盾                           |
| 税收庇护（tax shelters）↑    | 杠杆↓        | 避税工具替代债务税盾                         |
| 法定税率（statutory tax rate）$T_C$↑ | 杠杆↑ | 税盾价值↑                                   |

---

### 6.3 政策实验设计

#### 实验 1：检验税率对杠杆的因果影响

**政策冲击**：税改降低公司税率 $T_C$（如美国 2017 TCJA：$T_C$ 从 35% 降至 21%）

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High Tax Benefit}_i \times \text{Post}_t) \\
&\quad + \gamma \text{High Tax Benefit}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

其中 $\text{High Tax Benefit}_i$ 是税改前边际税率高的企业。

**预期**：$\beta < 0$（税率下降 → 税盾价值下降 → 杠杆下降）

**数据需求**：
- 企业杠杆率（book leverage, market leverage）
- 税改前边际税率（用 Graham 2000 的方法模拟）
- 控制变量：size, profitability, tangibility, M/B

---

#### 实验 2：检验非债务税盾的替代效应

**政策冲击**：投资税收抵免（Investment Tax Credit, ITC）政策变化

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{High Capex}_i \times \text{ITC}_t) \\
&\quad + \gamma \text{High Capex}_i + \delta \text{ITC}_t + \varepsilon_{it}
\end{aligned}
$$

其中 $\text{High Capex}_i$ 是资本支出密集型企业，$\text{ITC}_t$ 是 ITC 政策生效期。

**预期**：$\beta < 0$（ITC↑ → 非债务税盾↑ → 杠杆↓）

---

#### 实验 3：检验 tax shelters 的替代效应

**政策冲击**：监管打击 tax shelters（如 IRS 加强审计、披露要求）

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it}
&= \alpha + \beta(\text{Shelter User}_i \times \text{Post Crackdown}_t) \\
&\quad + \gamma \text{Shelter User}_i + \delta \text{Post Crackdown}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta > 0$（打击 tax shelters → 企业转向 debt tax shield → 杠杆↑）

---

## 7. 考试样题

### 样题 1：MM 定理推导

**问题**：推导 MM 命题 II（corporate tax），并解释为什么税盾会降低 WACC。

**答案框架**：

$$
\begin{aligned}
V_L &= V_U + T_C D \\
E &= V_L - D = V_U + T_C D - D \\
\text{WACC} &= \frac{E}{V_L}r_E + \frac{D}{V_L}r_D(1-T_C) \\
&= r_U\left(1 - \frac{D}{V_L}T_C\right)
\end{aligned}
$$

由 WACC 定义求解 $r_E$：

$$
\begin{aligned}
r_E = r_U + \frac{D}{E}(r_U - r_D)(1-T_C)
\end{aligned}
$$

**经济直觉**：利息税盾降低债务有效成本，所以 WACC 会随杠杆下降。

---

### 样题 2：Miller equilibrium

**问题**：在 Miller (1977) 模型中，什么条件下债务没有税收优势？用数值例子说明。

**答案框架**：

Miller equilibrium 条件：

$$
\begin{aligned}
(1-T_C)(1-t_{pe}) = (1-t_{pd})
\end{aligned}
$$

**数值例子**：
- $T_C = 0.35$, $t_{pe} = 0.15$, $t_{pd} = ?$
- 求解：$(1-0.35)(1-0.15) = 0.5525 = (1-t_{pd})$
- $t_{pd} = 0.4475$

若 $t_{pd} = 0.4475$，债务就没有税收优势。

---

### 样题 3：非债务税盾

**问题**：DeAngelo and Masulis (1980) 为什么会推出“高折旧企业杠杆更低”？

**答案框架**：

$$
\begin{aligned}
\text{depreciation} \uparrow
&\Rightarrow \text{taxable income} \downarrow \\
&\Rightarrow \Pr(\text{zero tax rate}) \uparrow \\
&\Rightarrow \text{debt tax shield value} \downarrow \\
&\Rightarrow \text{optimal leverage} \downarrow
\end{aligned}
$$

折旧是 non-debt tax shield，会替代 debt tax shield。

---

### 样题 4：Graham (2000) 发现

**问题**：Graham (2000) 估算的债务税盾价值占 firm value 多大？为什么低于 MM (1963) 的预测？

**答案框架**：

**估算值**：5-10%

**低于 MM 预测的原因**：
1. 边际税率 < statutory rate（因盈利波动、NOL）
2. 企业保守杠杆（考虑非税成本）
3. 个人税削弱税盾优势

---

### 样题 5：政策实验设计

**问题**：设计一个 DiD 实验，检验税率变化对杠杆的因果影响。

**答案框架**：

**政策冲击**：税改降低公司税率

**DiD 设定**：

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \beta(\text{High MTR}_i \times \text{Post}_t) + \gamma \text{High MTR}_i + \delta \text{Post}_t + \varepsilon_{it}
\end{aligned}
$$

**预期**：$\beta < 0$（税率↓ → 税盾价值↓ → 杠杆↓）

**平行趋势检验**：

$$
\begin{aligned}
\text{Leverage}_{it} = \alpha + \sum_{k \neq -1} \beta_k (\text{High MTR}_i \times \mathbf{1}\{t=k\}) + \varepsilon_{it}
\end{aligned}
$$

检验 $k < 0$ 时的 $\beta_k = 0$。

---

## 参考文献

**核心理论**：
- Modigliani and Miller (1958), *The Cost of Capital, Corporation Finance, and the Theory of Investment*, AER
- Modigliani and Miller (1963), *Corporate Income Taxes and the Cost of Capital: A Correction*, AER
- Miller (1977), *Debt and Taxes*, JF
- Miller (1988), *The Modigliani Miller Propositions after Thirty Years*, JEP
- DeAngelo and Masulis (1980), *Optimal Capital Structure under Corporate and Personal Taxes*, JFE

**实证证据**：
- Graham (2000), *How Big Are the Tax Benefits of Debt?*, JF
- Graham and Tucker (2006), *Tax Shelters and Corporate Debt Policy*, JFE
- Fama and French (1998), *Taxes, Financing Decisions, and Firm Value*, JF
- Panier, Perez-Gonzalez and Villanueva (2013), *Capital Structure and Taxes*, slides
