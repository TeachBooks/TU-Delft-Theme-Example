(admonitions)=
# Admonitions
The syntax to use admonitions is the following:
```
::::::{admonition} <title>
:class: <class>
<content>
::::::
```
where `<class>` is the type of admonition used, and `<content>` is what will be inside the admonition. `<title>` will be displayed in the top part of the admonition. In this chapter we present classes of admonitions available, and their styling in the TU Delft theme.

## `:class: solution`
::::::{admonition} Solution to the equation
:class: solution
The solution to $x^2 - 4 = 0$ is $x = \pm 2$.
::::::
```
::::::{admonition} Solution to the equation
:class: solution
The solution to $x^2 - 4 = 0$ is $x = \pm 2$.
::::::
```

**Hint**: You can also add class `dropdown` to make the content of the admonition hidden by default, and make it expandable. For example:
::::::{admonition} Solution to the equation
:class: solution, dropdown
The solution to $x^2 - 4 = 0$ is $x = \pm 2$.
::::::
```
::::::{admonition} Solution to the equation
:class: solution, dropdown
The solution to $x^2 - 4 = 0$ is $x = \pm 2$.
::::::
```

## `:class: myproof`
::::::{admonition} Proof of the Pythagorean theorem
:class: myproof
By the Pythagorean theorem, in a right triangle with sides $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.
::::::
```
::::::{admonition} Proof of the Pythagorean theorem
:class: myproof
By the Pythagorean theorem, in a right triangle with sides $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.
::::::
```

## `:class: bonus`
::::::{admonition} Bonus fact about prime numbers
:class: bonus
There are infinitely many prime numbers, as proved by Euclid.
::::::
```
::::::{admonition} Bonus fact about prime numbers
:class: bonus
There are infinitely many prime numbers, as proved by Euclid.
::::::
```

## `:class: caution`
::::::{admonition} Caution - division by zero
:class: caution
Division by zero is undefined and can lead to erroneous results in computations.
::::::
```
::::::{admonition} Caution - division by zero
:class: caution
Division by zero is undefined and can lead to erroneous results in computations.
::::::
```

## `:class: warning`
::::::{admonition} Warning about data loss
:class: warning
Make sure to save your work frequently to avoid losing progress.
::::::
```
::::::{admonition} Warning about data loss
:class: warning
Make sure to save your work frequently to avoid losing progress.
::::::
```

## `:class: attention`
::::::{admonition} Attention to detail in proofs
:class: attention
Carefully check each step of your proof to ensure there are no logical gaps.
::::::
```
::::::{admonition} Attention to detail in proofs
:class: attention
Carefully check each step of your proof to ensure there are no logical gaps.
::::::
```

## `:class: important`
::::::{admonition} Important property of logarithms
:class: important
The logarithm of a product is the sum of the logarithms: $\log(ab) = \log(a) + \log(b)$.
::::::
```
::::::{admonition} Important property of logarithms
:class: important
The logarithm of a product is the sum of the logarithms: $\log(ab) = \log(a) + \log(b)$.
::::::
```

## `:class: danger`
::::::{admonition} Danger of misusing large datasets
:class: danger
Using datasets without understanding their origin can lead to biased or invalid conclusions.
::::::
```
::::::{admonition} Danger of misusing large datasets
:class: danger
Using datasets without understanding their origin can lead to biased or invalid conclusions.
::::::
```

## `:class: error`
::::::{admonition} Error in matrix multiplication
:class: error
Matrix multiplication is not commutative: $AB \neq BA$ in general.
::::::
```
::::::{admonition} Error in matrix multiplication
:class: error
Matrix multiplication is not commutative: $AB \neq BA$ in general.
::::::
```

## `:class: hint`
::::::{admonition} Hint for solving quadratic equations
:class: hint
Use the quadratic formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
::::::
```
::::::{admonition} Hint for solving quadratic equations
:class: hint
Use the quadratic formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
::::::
```

## `:class: note`
::::::{admonition} Note on Euler's identity
:class: note
Euler's identity: $e^{i\pi} + 1 = 0$ is a beautiful and fundamental result in mathematics.
::::::
```
::::::{admonition} Note on Euler's identity
:class: note
Euler's identity: $e^{i\pi} + 1 = 0$ is a beautiful and fundamental result in mathematics.
::::::
```

## `:class: seealso`
::::::{admonition} See also: Related work on Fourier series
:class: seealso
Fourier series are closely related to the study of harmonic functions and signal processing.
::::::
```
::::::{admonition} See also: Related work on Fourier series
:class: seealso
Fourier series are closely related to the study of harmonic functions and signal processing.
::::::
```

## `:class: tip`
::::::{admonition} Tip for studying effectively
:class: tip
Set aside specific blocks of time for focused study and avoid distractions.
::::::
```
::::::{admonition} Tip for studying effectively
:class: tip
Set aside specific blocks of time for focused study and avoid distractions.
::::::
```

## `:class: remark`
::::::{admonition} Remark on the fundamental theorem of calculus
:class: remark
The fundamental theorem of calculus links differentiation and integration, two cornerstone concepts in calculus.
::::::
```
::::::{admonition} Remark on the fundamental theorem of calculus
:class: remark
The fundamental theorem of calculus links differentiation and integration, two cornerstone concepts in calculus.
::::::
```

## `:class: observation`
::::::{admonition} Observation about symmetry in functions
:class: observation
Even functions satisfy $f(-x) = f(x)$, while odd functions satisfy $f(-x) = -f(x)$.
::::::
```
::::::{admonition} Observation about symmetry in functions
:class: observation
Even functions satisfy $f(-x) = f(x)$, while odd functions satisfy $f(-x) = -f(x)$.
::::::
