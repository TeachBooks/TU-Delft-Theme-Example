(custom)=
# Custom components
The syntax to use the custom admonitions is the following:
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

## `:class: tudproof`
::::::{admonition} Proof of the Pythagorean theorem
:class: tudproof
By the Pythagorean theorem, in a right triangle with sides $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.
::::::
```
::::::{admonition} Proof of the Pythagorean theorem
:class: tudproof
By the Pythagorean theorem, in a right triangle with sides $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.
::::::
```