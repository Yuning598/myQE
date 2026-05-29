# 07 DiD, RD, and Kernel Smoothing

## Two-by-Two DiD

设 $D_i\in\{0,1\}$ 表示 treated group，$Post_t\in\{0,1\}$ 表示 post period。处理只发生在 treated group 的 post period。

$$
\begin{aligned}
Y_{it}
&=Y_{it}(0)+D_iPost_t\{Y_{it}(1)-Y_{it}(0)\},\\
ATT
&=E[Y_{i1}(1)-Y_{i1}(0)\mid D_i=1].
\end{aligned}
$$

:::{admonition} Definition (Difference-in-differences estimand)
$$
\begin{aligned}
\tau_{DiD}
&=\{E[Y\mid D=1,Post=1]-E[Y\mid D=1,Post=0]\}\\
&\quad-\{E[Y\mid D=0,Post=1]-E[Y\mid D=0,Post=0]\}.
\end{aligned}
$$
:::

:::{admonition} Definition (Common trends)
Common trends 要求 untreated potential outcome 的平均变化相同：

$$
E[Y_{i1}(0)-Y_{i0}(0)\mid D_i=1]
=E[Y_{i1}(0)-Y_{i0}(0)\mid D_i=0].
$$
:::

:::{admonition} Lemma (DiD identifies ATT under common trends)
If common trends holds, then

$$
\tau_{DiD}=ATT.
$$
:::

**Proof.**

$$
\begin{aligned}
E[Y\mid D=1,Post=1]-E[Y\mid D=1,Post=0]
&=E[Y_{i1}(1)\mid D_i=1]-E[Y_{i0}(0)\mid D_i=1]\\
&=E[Y_{i1}(1)-Y_{i1}(0)\mid D_i=1]\\
&\quad+E[Y_{i1}(0)-Y_{i0}(0)\mid D_i=1],\\
E[Y\mid D=0,Post=1]-E[Y\mid D=0,Post=0]
&=E[Y_{i1}(0)-Y_{i0}(0)\mid D_i=0].
\end{aligned}
$$

$$
\begin{aligned}
\tau_{DiD}
&=E[Y_{i1}(1)-Y_{i1}(0)\mid D_i=1]\\
&\quad+\{E[Y_{i1}(0)-Y_{i0}(0)\mid D_i=1]
-E[Y_{i1}(0)-Y_{i0}(0)\mid D_i=0]\}\\
&=ATT+0\\
&=ATT.
\end{aligned}
$$

DiD 的核心是用 control group 的 untreated trend 替代 treated group 的 missing counterfactual trend。

## Regression Form of Two-by-Two DiD

令

$$
\mu_{dp}=E[Y\mid D=d,Post=p],
\qquad d,p\in\{0,1\}.
$$

Saturated two-by-two regression:

$$
Y_{it}=\alpha+\gamma D_i+\lambda Post_t+\tau(D_iPost_t)+u_{it}.
$$

:::{admonition} Lemma (Interaction coefficient equals DiD)
In the saturated two-by-two regression,

$$
\tau=\mu_{11}-\mu_{10}-\mu_{01}+\mu_{00}=\tau_{DiD}.
$$
:::

**Proof.**

$$
\begin{aligned}
E[Y\mid D=0,Post=0]&=\alpha=\mu_{00},\\
E[Y\mid D=1,Post=0]&=\alpha+\gamma=\mu_{10},\\
E[Y\mid D=0,Post=1]&=\alpha+\lambda=\mu_{01},\\
E[Y\mid D=1,Post=1]&=\alpha+\gamma+\lambda+\tau=\mu_{11}.
\end{aligned}
$$

$$
\begin{aligned}
\tau
&=\mu_{11}-(\alpha+\gamma+\lambda)\\
&=\mu_{11}-(\mu_{10}-\mu_{00})-(\mu_{01}-\mu_{00})-\mu_{00}\\
&=\mu_{11}-\mu_{10}-\mu_{01}+\mu_{00}\\
&=(\mu_{11}-\mu_{10})-(\mu_{01}-\mu_{00}).
\end{aligned}
$$

## Fixed Effects and Residualization

面板写法：

$$
Y_{it}=\alpha_i+\lambda_t+\tau D_{it}+u_{it},
\qquad
D_{it}=G_iPost_t.
$$

:::{admonition} Lemma (Fixed effects are residualization)
Let $A$ be the fixed-effect dummy matrix and $M_A=I-A(A'A)^{-1}A'$. In

$$
Y=X\beta+A\eta+u,
$$

the coefficient on $X$ equals OLS on residualized variables:

$$
\hat\beta=(X'M_AX)^{-1}X'M_AY.
$$
:::

**Proof.**

$$
\begin{aligned}
\begin{pmatrix}
X'X & X'A\\
A'X & A'A
\end{pmatrix}
\begin{pmatrix}
\hat\beta\\
\hat\eta
\end{pmatrix}
&=
\begin{pmatrix}
X'Y\\
A'Y
\end{pmatrix},\\
\hat\eta
&=(A'A)^{-1}A'(Y-X\hat\beta),\\
X'X\hat\beta+X'A(A'A)^{-1}A'(Y-X\hat\beta)
&=X'Y,\\
X'\{I-A(A'A)^{-1}A'\}X\hat\beta
&=X'\{I-A(A'A)^{-1}A'\}Y,\\
\hat\beta
&=(X'M_AX)^{-1}X'M_AY.
\end{aligned}
$$

For group fixed effects $F_i$, this is group demeaning:

$$
\dot Y_i=Y_i-\bar Y_{F_i},
\qquad
\dot X_i=X_i-\bar X_{F_i},
\qquad
\hat\beta
=\left(\sum_i\dot X_i\dot X_i'\right)^{-1}
\left(\sum_i\dot X_i\dot Y_i\right).
$$

### What Different Fixed Effects Identify

设 balanced panel，treated group share 为 $\bar G$，post-period share 为 $\bar P$。令

$$
\bar Y_d^{post}=\frac{1}{T_{post}}\sum_{t:Post_t=1}\bar Y_{dt},
\qquad
\bar Y_d^{pre}=\frac{1}{T_{pre}}\sum_{t:Post_t=0}\bar Y_{dt}.
$$

:::{admonition} Lemma (Unit FE only identifies treated before-after change)
In

$$
Y_{it}=\alpha_i+\beta(G_iPost_t)+u_{it},
$$

the unit-FE coefficient satisfies

$$
\hat\beta_{unit}=\bar Y_1^{post}-\bar Y_1^{pre}.
$$
:::

**Proof.**

Unit demeaning gives

$$
\begin{aligned}
\ddot D_{it}
&=G_iPost_t-\frac{1}{T}\sum_sG_iPost_s\\
&=G_i(Post_t-\bar P).
\end{aligned}
$$

Untreated units have $\ddot D_{it}=0$ for all $t$, so only treated observations enter:

$$
\begin{aligned}
\hat\beta_{unit}
&=\frac{\sum_{i:G_i=1}\sum_t(Post_t-\bar P)Y_{it}}
{\sum_{i:G_i=1}\sum_t(Post_t-\bar P)^2}\\
&=\frac{N_1\{T_{post}(1-\bar P)\bar Y_1^{post}-T_{pre}\bar P\bar Y_1^{pre}\}}
{N_1\{T_{post}(1-\bar P)^2+T_{pre}\bar P^2\}}\\
&=\frac{T_{pre}T_{post}(\bar Y_1^{post}-\bar Y_1^{pre})/T}
{T_{pre}T_{post}/T}\\
&=\bar Y_1^{post}-\bar Y_1^{pre}.
\end{aligned}
$$

:::{admonition} Lemma (Time FE only identifies post treated-control difference)
In

$$
Y_{it}=\lambda_t+\beta(G_iPost_t)+u_{it},
$$

the time-FE coefficient satisfies

$$
\hat\beta_{time}=\bar Y_1^{post}-\bar Y_0^{post}.
$$
:::

**Proof.**

Time demeaning gives

$$
\begin{aligned}
\ddot D_{it}
&=G_iPost_t-\frac{1}{N}\sum_jG_jPost_t\\
&=Post_t(G_i-\bar G).
\end{aligned}
$$

Pre-period observations have $\ddot D_{it}=0$ for all $i$, therefore

$$
\begin{aligned}
\hat\beta_{time}
&=\frac{\sum_{t:Post_t=1}\sum_i(G_i-\bar G)Y_{it}}
{\sum_{t:Post_t=1}\sum_i(G_i-\bar G)^2}\\
&=\frac{T_{post}\{N_1(1-\bar G)\bar Y_1^{post}-N_0\bar G\bar Y_0^{post}\}}
{T_{post}\{N_1(1-\bar G)^2+N_0\bar G^2\}}\\
&=\frac{N_0N_1(\bar Y_1^{post}-\bar Y_0^{post})/N}
{N_0N_1/N}\\
&=\bar Y_1^{post}-\bar Y_0^{post}.
\end{aligned}
$$

:::{admonition} Lemma (Unit and time FE identify the DiD contrast)
In the two-by-two balanced design,

$$
Y_{it}=\alpha_i+\lambda_t+\beta(G_iPost_t)+u_{it}
$$

gives

$$
\hat\beta_{TWFE}
=\bar Y_1^{post}-\bar Y_1^{pre}-\bar Y_0^{post}+\bar Y_0^{pre}.
$$
:::

**Proof.**

Residualizing $D_{it}=G_iPost_t$ on unit and time effects gives

$$
\begin{aligned}
\tilde D_{it}
&=G_iPost_t-\bar D_{i\cdot}-\bar D_{\cdot t}+\bar D_{\cdot\cdot}\\
&=G_iPost_t-G_i\bar P-\bar GPost_t+\bar G\bar P\\
&=(G_i-\bar G)(Post_t-\bar P).
\end{aligned}
$$

Therefore the four cells receive signs

$$
\begin{array}{c|cc}
&Post=0&Post=1\\
\hline
G=0&(+)&(-)\\
G=1&(-)&(+)
\end{array}
$$

and

$$
\begin{aligned}
\hat\beta_{TWFE}
&=\frac{\sum_{i,t}\tilde D_{it}Y_{it}}{\sum_{i,t}\tilde D_{it}^{2}}\\
&=\frac{C\{\bar Y_1^{post}-\bar Y_1^{pre}-\bar Y_0^{post}+\bar Y_0^{pre}\}}{C}\\
&=\bar Y_1^{post}-\bar Y_1^{pre}-\bar Y_0^{post}+\bar Y_0^{pre},
\end{aligned}
$$

where $C=N_0N_1T_{pre}T_{post}/(NT)>0$.

## Event Studies and Staggered Timing

Dynamic two-way fixed effects event study:

$$
Y_{it}=\alpha_i+\lambda_t+\sum_{k\ne -1}\tau_k1[t-G_i=k]+u_{it}.
$$

Pre-trend null:

$$
H_0:\tau_k=0,\qquad k<0.
$$

The pre-trend test checks whether treated cohorts already move differently before treatment. It is not a proof of common trends after treatment.

### Cohort-Time Treatment Effects

For staggered adoption, define cohort $G_i=g$ and cohort-time ATT:

$$
ATT(g,t)=E[Y_{it}(1)-Y_{it}(0)\mid G_i=g],
\qquad t\ge g.
$$

Relative-time aggregation:

$$
\begin{aligned}
ATT^{ES}(r)
&=\sum_{g\in\mathcal G_r}\omega_{g,r}ATT(g,g+r),\\
\omega_{g,r}
&=
\frac{P(G_i=g,\ g+r\le T)}
{\sum_{g'\in\mathcal G_r}P(G_i=g',\ g'+r\le T)}.
\end{aligned}
$$

Overall aggregation:

$$
\begin{aligned}
ATT^{overall}
&=\sum_{r\ge0}\pi_rATT^{ES}(r)\\
&=\sum_g\sum_{t\ge g}\omega_{g,t}ATT(g,t).
\end{aligned}
$$

TWFE with staggered timing can compare already-treated units with newly-treated units. Hence

$$
\begin{aligned}
\hat\beta_{TWFE}
&=\sum_g\sum_{t\ge g}\omega^{TWFE}_{g,t}ATT(g,t),\\
\sum_{g,t}\omega^{TWFE}_{g,t}&=1,
\qquad
\omega^{TWFE}_{g,t}\not\ge0\ \text{in general}.
\end{aligned}
$$

![TWFE](../../attachment/image-20260528-1.png)

## Triple Differences

:::{admonition} Definition (Triple differences)
If there is another comparison dimension $S_i\in\{0,1\}$,

$$
DDD=DiD(S=1)-DiD(S=0).
$$
:::

Expanded cell-mean form:

$$
\begin{aligned}
DDD
&=
\{(\mu_{111}-\mu_{110})-(\mu_{101}-\mu_{100})\}\\
&\quad-
\{(\mu_{011}-\mu_{010})-(\mu_{001}-\mu_{000})\},
\end{aligned}
$$

where $\mu_{sdp}=E[Y\mid S=s,D=d,Post=p]$.

Regression form:

$$
Y_i=\alpha+\eta S_i+\gamma D_i+\lambda Post_i
+\rho(S_iD_i)+\kappa(S_iPost_i)+\xi(D_iPost_i)
+\theta(S_iD_iPost_i)+u_i.
$$

:::{admonition} Lemma (Triple interaction equals DDD)
In the saturated $S\times D\times Post$ regression,

$$
\theta=DDD.
$$
:::

**Proof.**

For fixed $S=s$, the DiD contrast equals

$$
\begin{aligned}
DiD(s)
&=E[Y\mid s,1,1]-E[Y\mid s,1,0]
-E[Y\mid s,0,1]+E[Y\mid s,0,0].
\end{aligned}
$$

The saturated regression implies

$$
\begin{aligned}
DiD(0)&=\xi,\\
DiD(1)&=(\xi+\theta),
\end{aligned}
$$

so

$$
DDD=DiD(1)-DiD(0)=(\xi+\theta)-\xi=\theta.
$$

## DiD Inference Issues

DiD inference depends on independent clusters, not only on many individual observations. With one treated cluster,

$$
\hat\tau-\tau
\not\to0
\qquad\text{if the treated-cluster shock does not average out.}
$$

Cluster-robust inference requires many independent clusters. If treated clusters are few, use design-based randomization inference, permutation methods, wild cluster bootstrap with caution, or explicit sensitivity analysis.

![](../../attachment/image-20260528.png)

## Regression Discontinuity

Let $R_i$ be the running variable, $c$ the cutoff, and $Z_i=1[R_i\ge c]$.

### Sharp RD

:::{admonition} Definition (Sharp regression discontinuity)
Sharp RD has deterministic treatment assignment:

$$
D_i=Z_i=1[R_i\ge c].
$$

The estimand is the outcome discontinuity:

$$
\tau_{SRD}
=\lim_{r\downarrow c}E[Y_i\mid R_i=r]
-\lim_{r\uparrow c}E[Y_i\mid R_i=r].
$$
:::

:::{admonition} Lemma (Sharp RD identifies the cutoff treatment effect)
If $E[Y_i(0)\mid R_i=r]$ and $E[Y_i(1)\mid R_i=r]$ are continuous at $c$, then

$$
\tau_{SRD}=E[Y_i(1)-Y_i(0)\mid R_i=c].
$$
:::

**Proof.**

Observed outcome:

$$
Y_i=Z_iY_i(1)+(1-Z_i)Y_i(0).
$$

Therefore

$$
\begin{aligned}
\lim_{r\downarrow c}E[Y_i\mid R_i=r]
&=\lim_{r\downarrow c}E[Y_i(1)\mid R_i=r]
=E[Y_i(1)\mid R_i=c],\\
\lim_{r\uparrow c}E[Y_i\mid R_i=r]
&=\lim_{r\uparrow c}E[Y_i(0)\mid R_i=r]
=E[Y_i(0)\mid R_i=c].
\end{aligned}
$$

Thus

$$
\begin{aligned}
\tau_{SRD}
&=E[Y_i(1)\mid R_i=c]-E[Y_i(0)\mid R_i=c]\\
&=E[Y_i(1)-Y_i(0)\mid R_i=c].
\end{aligned}
$$

### Fuzzy RD

Treatment probability jumps at the cutoff but not from $0$ to $1$.

$$
\Delta_D(c)
=\lim_{r\downarrow c}E[D_i\mid R_i=r]
-\lim_{r\uparrow c}E[D_i\mid R_i=r]\ne0.
$$

:::{admonition} Definition (Fuzzy RD Wald estimand)
$$
\tau_{FRD}
=\frac{\Delta_Y(c)}{\Delta_D(c)},
$$

where

$$
\Delta_Y(c)
=\lim_{r\downarrow c}E[Y_i\mid R_i=r]
-\lim_{r\uparrow c}E[Y_i\mid R_i=r].
$$
:::

:::{admonition} Lemma (Fuzzy RD identifies local LATE at the cutoff)
Under continuity of potential outcomes and potential treatment states, exclusion, and monotonicity,

$$
\tau_{FRD}
=E[Y_i(1)-Y_i(0)\mid D_i(1)>D_i(0),R_i=c].
$$
:::

**Proof.**

Write potential treatment states as $D_i(1)$ and $D_i(0)$ for cutoff assignment $Z_i=1$ and $Z_i=0$. Let $Y_i^Z(z)$ denote the observed potential outcome under cutoff assignment $z$. Exclusion gives

$$
\begin{aligned}
Y_i^Z(z)
&=Y_i(0)+D_i(z)\{Y_i(1)-Y_i(0)\}.
\end{aligned}
$$

The outcome jump is

$$
\begin{aligned}
\Delta_Y(c)
&=E[Y_i^Z(1)-Y_i^Z(0)\mid R_i=c]\\
&=E[\{D_i(1)-D_i(0)\}\{Y_i(1)-Y_i(0)\}\mid R_i=c].
\end{aligned}
$$

The treatment jump is

$$
\begin{aligned}
\Delta_D(c)
&=E[D_i(1)-D_i(0)\mid R_i=c].
\end{aligned}
$$

Under monotonicity $D_i(1)\ge D_i(0)$,

$$
D_i(1)-D_i(0)=1[D_i(1)>D_i(0)].
$$

Hence

$$
\begin{aligned}
\tau_{FRD}
&=\frac{E[1[D_i(1)>D_i(0)]\{Y_i(1)-Y_i(0)\}\mid R_i=c]}
{P(D_i(1)>D_i(0)\mid R_i=c)}\\
&=E[Y_i(1)-Y_i(0)\mid D_i(1)>D_i(0),R_i=c].
\end{aligned}
$$

### Local Polynomial Estimation and 2SLS

Local linear RD estimates the right and left limits by fitting separate first-order approximations near $c$.

$$
\mathcal N_1(c,h)=\{i:c\le R_i\le c+h\},
\qquad
\mathcal N_0(c,h)=\{i:c-h\le R_i<c\}.
$$

For $W_i\in\{Y_i,D_i\}$ and side $s\in\{0,1\}$,

$$
(\hat\alpha_W^s,\hat b_W^s)
=\arg\min_{a,b}\sum_{i\in\mathcal N_s(c,h)}
K\!\left(\frac{R_i-c}{h}\right)
\{W_i-a-b(R_i-c)\}^2.
$$

Then

$$
\widehat{\Delta}_Y(c)=\hat\alpha_Y^1-\hat\alpha_Y^0,
\qquad
\widehat{\Delta}_D(c)=\hat\alpha_D^1-\hat\alpha_D^0.
$$

:::{admonition} Lemma (Local linear fuzzy RD as 2SLS)
With the same bandwidth, kernel weights, and side-specific slopes,

$$
\hat\beta_{FRD}
=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
$$
:::

**Proof.**

Let $x_i=R_i-c$ and $Z_i=1[R_i\ge c]$. The reduced-form local linear regression is

$$
Y_i=a_Y+\Delta_YZ_i+b_Yx_i+d_Y(Z_ix_i)+e_i,
$$

and the first-stage local linear regression is

$$
D_i=a_D+\Delta_DZ_i+b_Dx_i+d_D(Z_ix_i)+v_i.
$$

Because the model allows a separate intercept and slope on each side,

$$
\begin{aligned}
\hat a_Y&=\hat\alpha_Y^0,
&\hat a_Y+\widehat{\Delta}_Y&=\hat\alpha_Y^1,\\
\hat a_D&=\hat\alpha_D^0,
&\hat a_D+\widehat{\Delta}_D&=\hat\alpha_D^1.
\end{aligned}
$$

Thus

$$
\begin{aligned}
\widehat{RF}&=\widehat{\Delta}_Y=\hat\alpha_Y^1-\hat\alpha_Y^0,\\
\widehat{FS}&=\widehat{\Delta}_D=\hat\alpha_D^1-\hat\alpha_D^0,\\
\hat\beta_{FRD}
&=\frac{\widehat{RF}}{\widehat{FS}}
=\frac{\hat\alpha_Y^1-\hat\alpha_Y^0}{\hat\alpha_D^1-\hat\alpha_D^0}.
\end{aligned}
$$

Equivalently, this is 2SLS of $Y_i$ on $D_i$, controlling for $1,x_i,Z_ix_i$, using $Z_i$ as the excluded instrument, with kernel weights and bandwidth restriction.

## Kernel Smoothing

Let

$$
g(x)=E[Y\mid X=x],
\qquad
f_X(x)>0.
$$

### Nadaraya-Watson Estimator

:::{admonition} Definition (Kernel estimator)
For bandwidth $h>0$ and kernel $K$,

$$
K_h(u)=\frac{1}{h}K\!\left(\frac{u}{h}\right),
$$

the Nadaraya-Watson estimator is

$$
\hat g_{NW}(x)
=\frac{\sum_{i=1}^nY_iK_h(X_i-x)}
{\sum_{i=1}^nK_h(X_i-x)}.
$$
:::

Weights are

$$
\omega_i(x)
=\frac{K_h(X_i-x)}{\sum_{j=1}^nK_h(X_j-x)},
\qquad
\hat g_{NW}(x)=\sum_i\omega_i(x)Y_i.
$$

### Bias-Variance Tradeoff

Assume symmetric kernel $\int K(u)du=1$ and $\int uK(u)du=0$. Let $\mu_2(K)=\int u^2K(u)du$ and $R(K)=\int K(u)^2du$.

:::{admonition} Lemma (Kernel regression bias and variance)
For an interior point $x$,

$$
\operatorname{Bias}\{\hat g_{NW}(x)\}=O(h^2),
\qquad
\operatorname{Var}\{\hat g_{NW}(x)\}=O((nh)^{-1}).
$$

Therefore

$$
MSE\{\hat g_{NW}(x)\}=O(h^4)+O((nh)^{-1}).
$$
:::

**Proof.**

The denominator satisfies

$$
\begin{aligned}
E[K_h(X_i-x)]
&=\int \frac{1}{h}K\!\left(\frac{r-x}{h}\right)f_X(r)dr\\
&=\int K(u)f_X(x+hu)du\\
&=f_X(x)+h f_X'(x)\int uK(u)du
+\frac{h^2}{2}f_X''(x)\int u^2K(u)du+o(h^2)\\
&=f_X(x)+\frac{h^2}{2}f_X''(x)\mu_2(K)+o(h^2).
\end{aligned}
$$

The numerator satisfies

$$
\begin{aligned}
E[Y_iK_h(X_i-x)]
&=\int g(r)\frac{1}{h}K\!\left(\frac{r-x}{h}\right)f_X(r)dr\\
&=\int K(u)g(x+hu)f_X(x+hu)du\\
&=g(x)f_X(x)
+\frac{h^2}{2}\{g(x)f_X(x)\}''\mu_2(K)+o(h^2).
\end{aligned}
$$

Using a ratio expansion,

$$
\begin{aligned}
E[\hat g_{NW}(x)]-g(x)
&=\frac{g(x)f_X(x)+\frac{h^2}{2}\{g(x)f_X(x)\}''\mu_2(K)+o(h^2)}
{f_X(x)+\frac{h^2}{2}f_X''(x)\mu_2(K)+o(h^2)}
-g(x)\\
&=\frac{h^2\mu_2(K)}{2}
\left[g''(x)+2g'(x)\frac{f_X'(x)}{f_X(x)}\right]
+o(h^2)\\
&=O(h^2).
\end{aligned}
$$

For variance, conditional on $X_i$,

$$
\begin{aligned}
\operatorname{Var}\{\hat g_{NW}(x)\mid X_1,\dots,X_n\}
&=\sum_i\omega_i(x)^2\sigma^2(X_i)\\
&\approx
\frac{\sigma^2(x)nE[K_h(X_i-x)^2]}
{\{nE[K_h(X_i-x)]\}^2}\\
&=\frac{\sigma^2(x)n\{h^{-1}f_X(x)R(K)+o(h^{-1})\}}
{n^2f_X(x)^2}\\
&=\frac{\sigma^2(x)R(K)}{nhf_X(x)}+o((nh)^{-1})\\
&=O((nh)^{-1}).
\end{aligned}
$$

Thus

$$
\begin{aligned}
MSE\{\hat g_{NW}(x)\}
&=\operatorname{Bias}^2+\operatorname{Var}\\
&=O(h^4)+O((nh)^{-1}).
\end{aligned}
$$

### Bandwidth Choice

Balancing squared bias and variance:

$$
\begin{aligned}
h^4&\asymp (nh)^{-1}\\
h^5&\asymp n^{-1}\\
h&\asymp n^{-1/5}.
\end{aligned}
$$

At the optimal univariate rate,

$$
MSE=O(n^{-4/5}).
$$

With $q$ continuous covariates and common bandwidth $h$,

$$
\begin{aligned}
\operatorname{Var}&=O((nh^q)^{-1}),\\
\operatorname{Bias}^2&=O(h^4),\\
h^4&\asymp (nh^q)^{-1},\\
h&\asymp n^{-1/(q+4)},\\
MSE&=O(n^{-4/(q+4)}).
\end{aligned}
$$

This is the curse of dimensionality: effective local sample size is $nh^q$.

Leave-one-out cross-validation chooses $h$ by prediction loss:

$$
\begin{aligned}
\hat y_{i,h}
&=\frac{\sum_{j\ne i}Y_jK_h(X_j-X_i)}
{\sum_{j\ne i}K_h(X_j-X_i)},\\
CV(h)&=\sum_i(Y_i-\hat y_{i,h})^2,\\
\hat h&=\arg\min_hCV(h).
\end{aligned}
$$

### Local Constant vs Local Linear

Local constant regression is the Nadaraya-Watson estimator. Local linear regression solves

$$
(\hat a(x),\hat b(x))
=\arg\min_{a,b}\sum_iK_h(X_i-x)\{Y_i-a-b(X_i-x)\}^2,
\qquad
\hat g_{LL}(x)=\hat a(x).
$$

Let

$$
S_j(x)=\sum_iK_h(X_i-x)(X_i-x)^j.
$$

The local linear intercept has the weighted-average form

$$
\hat g_{LL}(x)
=\sum_i\ell_i(x)Y_i,
\qquad
\ell_i(x)
=\frac{K_h(X_i-x)\{S_2(x)-S_1(x)(X_i-x)\}}
{S_0(x)S_2(x)-S_1(x)^2}.
$$

At a boundary, local constant smoothing has first-order boundary bias because the kernel window is one-sided. Local linear regression removes the first-order term by fitting the local slope, so RD usually uses local linear or local polynomial estimators rather than simple kernel averages.

## Summary

$$
\begin{aligned}
DiD
&=\text{treated change}-\text{control change}
\xRightarrow{\text{common trends}} ATT,\\
RD
&=\text{right limit}-\text{left limit}
\xRightarrow{\text{continuity at cutoff}} \text{cutoff treatment effect},\\
Kernel
&:\quad MSE(h)=O(h^4)+O((nh)^{-1})
\Rightarrow h\asymp n^{-1/5}.
\end{aligned}
$$
