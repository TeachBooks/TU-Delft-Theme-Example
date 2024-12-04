(proofs)=
# Proofs

::::::{important}
The examples are taken from the original documentation of the sphinx-proof extension, available at their [website](https://sphinx-proof.readthedocs.io/en/latest/syntax.html).
::::::

Proofs introduce components that can be used for including: proofs, lemmas, definitions, etc. The syntax to use proofs is the following:
```
::::::{prf:<type>}
<content>
::::::
```
where `<type>` is the type of the proof component used, and `<content>` is what will be inside the component. In this chapter we present types of proof components available, and their styling in the TU Delft theme.

## `prf:proof`
**Important**: we recommend you to check out the other component for proofs used more commonly in books produced at TU Delft. You can find it in the chapter {ref}`custom`.

::::::{prf:proof}
We'll omit the full proof.

But we will prove sufficiency of the asserted conditions.

To this end, let $y \in \mathbb R^n$ and let $S$ be a linear subspace of $\mathbb R^n$.

Let $\hat y$ be a vector in $\mathbb R^n$ such that $\hat y \in S$ and $y - \hat y \perp S$.

Let $z$ be any other point in $S$ and use the fact that $S$ is a linear subspace to deduce

```{math}
\| y - z \|^2
= \| (y - \hat y) + (\hat y - z) \|^2
= \| y - \hat y \|^2  + \| \hat y - z  \|^2
```

Hence $\| y - z \| \geq \| y - \hat y \|$, which completes the proof.
::::::
````md
::::::{prf:proof}
We'll omit the full proof.

But we will prove sufficiency of the asserted conditions.

To this end, let $y \in \mathbb R^n$ and let $S$ be a linear subspace of $\mathbb R^n$.

Let $\hat y$ be a vector in $\mathbb R^n$ such that $\hat y \in S$ and $y - \hat y \perp S$.

Let $z$ be any other point in $S$ and use the fact that $S$ is a linear subspace to deduce

```{math}
\| y - z \|^2
= \| (y - \hat y) + (\hat y - z) \|^2
= \| y - \hat y \|^2  + \| \hat y - z  \|^2
```

Hence $\| y - z \| \geq \| y - \hat y \|$, which completes the proof.
::::::
````

_Source:_ [QuantEcon](https://python-advanced.quantecon.org/orth_proj.html#The-Orthogonal-Projection-Theorem)

## `prf:theorem`

::::::{prf:theorem} Orthogonal-Projection-Theorem
Given $y \in \mathbb R^n$ and linear subspace $S \subset \mathbb R^n$,
there exists a unique solution to the minimization problem

```{math}
\hat y := \arg\min_{z \in S} \|y - z\|
```

The minimizer $\hat y$ is the unique vector in $\mathbb R^n$ that satisfies

* $\hat y \in S$

* $y - \hat y \perp S$


The vector $\hat y$ is called the **orthogonal projection** of $y$ onto $S$.
::::::

````md
::::::{prf:theorem} Orthogonal-Projection-Theorem
Given $y \in \mathbb R^n$ and linear subspace $S \subset \mathbb R^n$,
there exists a unique solution to the minimization problem

```{math}
\hat y := \arg\min_{z \in S} \|y - z\|
```

The minimizer $\hat y$ is the unique vector in $\mathbb R^n$ that satisfies

* $\hat y \in S$

* $y - \hat y \perp S$


The vector $\hat y$ is called the **orthogonal projection** of $y$ onto $S$.
::::::
````

_Source:_ [QuantEcon](https://python-advanced.quantecon.org/orth_proj.html#The-Orthogonal-Projection-Theorem)

## `prf:axiom`

::::::{prf:axiom} Completeness of $\mathbb{R}$
Every Cauchy sequence on the real line is convergent.
::::::
```md
::::::{prf:axiom} Completeness of $\mathbb{R}$
Every Cauchy sequence on the real line is convergent.
::::::
```

_Source:_ [IDEAS](https://ideas.repec.org/b/mtp/titles/0262012774.html)

## `prf:lemma`

::::::{prf:lemma}
If $\hat P$ is the fixed point of the map $\mathcal B \circ \mathcal D$ and $\hat F$ is the robust policy as given in [(7)](https://python-advanced.quantecon.org/robustness.html#equation-rb-oc-ih), then

```{math}
:label: rb_kft

K(\hat F, \theta) = (\theta I - C'\hat P C)^{-1} C' \hat P  (A - B \hat F)
```
::::::
````md
::::::{prf:lemma}
If $\hat P$ is the fixed point of the map $\mathcal B \circ \mathcal D$ and $\hat F$ is the robust policy as given in [(7)](https://python-advanced.quantecon.org/robustness.html#equation-rb-oc-ih), then

```{math}
:label: rb_kft

K(\hat F, \theta) = (\theta I - C'\hat P C)^{-1} C' \hat P  (A - B \hat F)
```
::::::
````

_Source:_ [QuantEcon](https://python-advanced.quantecon.org/robustness.html#Appendix)

## `prf:definition`

::::::{prf:definition}
The *economical expansion problem* (EEP) for
$(A,B)$ is to find a semi-positive $n$-vector $p>0$
and a number $\beta\in\mathbb{R}$, such that

$$
&\min_{\beta} \hspace{2mm} \beta \\
&\text{s.t. }\hspace{2mm}Bp \leq \beta Ap
$$
::::::
````md
::::::{prf:definition}
The *economical expansion problem* (EEP) for
$(A,B)$ is to find a semi-positive $n$-vector $p>0$
and a number $\beta\in\mathbb{R}$, such that

$$
&\min_{\beta} \hspace{2mm} \beta \\
&\text{s.t. }\hspace{2mm}Bp \leq \beta Ap
$$
::::::
````

_Source:_ [QuantEcon](https://python-advanced.quantecon.org/von_neumann_model.html#Duality)

## `prf:criterion`

::::::{prf:criterion} Weyl's criterion
Weyl's criterion states that the sequence $a_n$ is equidistributed modulo $1$ if
and only if for all non-zero integers $m$,

```{math}
\lim_{n \rightarrow \infty} \frac{1}{n} \sum_{j=1}^{n} \exp^{2 \pi i m a_j} = 0
```
::::::
````md
::::::{prf:criterion} Weyl's criterion
Weyl's criterion states that the sequence $a_n$ is equidistributed modulo $1$ if
and only if for all non-zero integers $m$,

```{math}
\lim_{n \rightarrow \infty} \frac{1}{n} \sum_{j=1}^{n} \exp^{2 \pi i m a_j} = 0
```
::::::
````

_Source:_ [Wikipedia](https://en.wikipedia.org/wiki/Equidistributed_sequence#Weyl's_criterion)

## `prf:remark`

::::::{prf:remark}
More generally there is a class of density functions
that possesses this feature, i.e.

$$
\exists g: \mathbb{R}_+ \mapsto \mathbb{R}_+ \ \ \text{ and } \ \ c \geq 0,
\ \ \text{s.t.  the density } \ \ f \ \ \text{of} \ \ Z  \ \
\text{ has the form } \quad f(z) = c g(z\cdot z)
$$

This property is called **spherical symmetry** (see p 81. in Leamer
(1978))
::::::
````md
::::::{prf:remark}
More generally there is a class of density functions
that possesses this feature, i.e.

$$
\exists g: \mathbb{R}_+ \mapsto \mathbb{R}_+ \ \ \text{ and } \ \ c \geq 0,
\ \ \text{s.t.  the density } \ \ f \ \ \text{of} \ \ Z  \ \
\text{ has the form } \quad f(z) = c g(z\cdot z)
$$

This property is called **spherical symmetry** (see p 81. in Leamer
(1978))
::::::
````

_Source:_ [QuantEcon](https://python-advanced.quantecon.org/black_litterman.html)

## `prf:conjecture`

::::::{prf:conjecture} Fake $\gamma$ conjecture
This is a dummy conjecture to illustrate that one can use math in titles.
::::::
````md
::::::{prf:conjecture} Fake $\gamma$ conjecture
This is a dummy conjecture to illustrate that one can use math in titles.
::::::
````

## `prf:corollary`

::::::{prf:corollary}
If $A$ is a convergent matrix, then there exists a matrix norm such
that $\vert \vert A \vert \vert < 1$.
::::::
````md
::::::{prf:corollary}
If $A$ is a convergent matrix, then there exists a matrix norm such
that $\vert \vert A \vert \vert < 1$.
::::::
````

_Source:_ [QuantEcon](https://python-intro.quantecon.org/_static/lecture_specific/linear_models/iteration_notes.pdf)

## `prf:algorithm`

::::::{prf:algorithm} Ford–Fulkerson
**Inputs** Given a Network $G=(V,E)$ with flow capacity $c$, a source node $s$, and a sink node $t$

**Output** Compute a flow $f$ from $s$ to $t$ of maximum value

1. $f(u, v) \leftarrow 0$ for all edges $(u,v)$
2. While there is a path $p$ from $s$ to $t$ in $G_{f}$ such that $c_{f}(u,v)>0$ for all edges $(u,v) \in p$:

	1. Find $c_{f}(p)= \min \{c_{f}(u,v):(u,v)\in p\}$
	2. For each edge $(u,v) \in p$

		1. $f(u,v) \leftarrow f(u,v) + c_{f}(p)$ *(Send flow along the path)*
		2. $f(u,v) \leftarrow f(u,v) - c_{f}(p)$ *(The flow might be "returned" later)*
::::::
````md
::::::{prf:algorithm} Ford–Fulkerson
**Inputs** Given a Network $G=(V,E)$ with flow capacity $c$, a source node $s$, and a sink node $t$

**Output** Compute a flow $f$ from $s$ to $t$ of maximum value

1. $f(u, v) \leftarrow 0$ for all edges $(u,v)$
2. While there is a path $p$ from $s$ to $t$ in $G_{f}$ such that $c_{f}(u,v)>0$ for all edges $(u,v) \in p$:

	1. Find $c_{f}(p)= \min \{c_{f}(u,v):(u,v)\in p\}$
	2. For each edge $(u,v) \in p$

		1. $f(u,v) \leftarrow f(u,v) + c_{f}(p)$ *(Send flow along the path)*
		2. $f(u,v) \leftarrow f(u,v) - c_{f}(p)$ *(The flow might be "returned" later)*
::::::
````

_Source:_ [Wikipedia](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm)

## `prf:example`

::::::{prf:example}
Next, we shut down randomness in demand and assume that the demand shock
$\nu_t$ follows a deterministic path:


```{math}
\nu_t = \alpha + \rho \nu_{t-1}
```

Again, we’ll compute and display outcomes in some figures

```python
ex2 = SmoothingExample(C2=[[0], [0]])

x0 = [0, 1, 0]
ex2.simulate(x0)
```
::::::
````md
::::::{prf:example}
Next, we shut down randomness in demand and assume that the demand shock
$\nu_t$ follows a deterministic path:


```{math}
\nu_t = \alpha + \rho \nu_{t-1}
```

Again, we’ll compute and display outcomes in some figures

```python
ex2 = SmoothingExample(C2=[[0], [0]])

x0 = [0, 1, 0]
ex2.simulate(x0)
```
::::::
````

_Source:_ [QuantEcon](https://python.quantecon.org/lq_inventories.html#Example-2)


## `prf:property`

::::::{prf:property}
This is a dummy property to illustrate the directive.
::::::
````md
::::::{prf:property}
This is a dummy property to illustrate the directive.
::::::
````

## `prf:observation`

::::::{prf:observation}
This is a dummy observation directive.
::::::
````md
::::::{prf:observation}
This is a dummy observation directive.
::::::
````

## `prf:proposition`

::::::{prf:proposition}
This is a dummy proposition directive.
::::::
````md
::::::{prf:proposition}
This is a dummy proposition directive.
::::::
````

## `prf:assumption`

::::::{prf:assumption}
This is a dummy assumption directive.
::::::
````md
::::::{prf:assumption}
This is a dummy assumption directive.
::::::
````

## Dropdown

Directive content can be hidden using the `dropdown` class which is available through [sphinx-togglebutton](https://sphinx-togglebutton.readthedocs.io/en/latest/). If your project utilizes the [MyST-NB](https://myst-nb.readthedocs.io/en/latest/) extension, there is no need to activate `sphinx-togglebutton` since it is already bundled with `MyST-NB`.

For Sphinx projects, add `"sphinx_togglebutton"` to your `extensions` list in `conf.py` to activate the extension

```python
extensions = [
    ...
    "sphinx_togglebutton"
    ...
]
```

For Jupyter Book projects, add `sphinx_togglebutton` under `extra_extensions`

```yaml
sphinx:
  extra_extensions:
    - sphinx_togglebutton
```

To hide the directive, simply add `:class: dropdown` as a directive option.


::::::{prf:theorem}
:class: dropdown
This is an example of how to hide the content of a directive.
::::::

````md
::::::{prf:theorem}
:class: dropdown
This is an example of how to hide the content of a directive.
::::::
````