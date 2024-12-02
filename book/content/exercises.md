(exercises)=
# Exercises
::::::{important}
The examples are taken from the original documentation of the sphinx-exercise extension, available at their [website](https://ebp-sphinx-exercise.readthedocs.io/en/latest/index.html#).
::::::
The syntax to use exercises is the following:
```
::::::{exercise} <title>
<content>
::::::
```
where `<content>` is what will be inside the exercise. `<title>` will be displayed in the top part of the admonition. In this chapter we present classes of admonitions available, and their styling in the TU Delft theme.


## `exercise`
::::::{exercise}
:label: my-exercise
Recall that $n!$ is read as "$n$ factorial" and defined as
$n! = n \times (n - 1) \times \cdots \times 2 \times 1$.

There are functions to compute this in various modules, but let's
write our own version as an exercise.

In particular, write a function `factorial` such that `factorial(n)` returns $n!$
for any positive integer $n$.
::::::
````md
::::::{exercise}
:label: my-exercise
Recall that $n!$ is read as "$n$ factorial" and defined as
$n! = n \times (n - 1) \times \cdots \times 2 \times 1$.

There are functions to compute this in various modules, but let's
write our own version as an exercise.

In particular, write a function `factorial` such that `factorial(n)` returns $n!$
for any positive integer $n$.
::::::
````

## `solution`
**Important**: we recommend you to check out the other component for solutions used more commonly in books produced at TU Delft. You can find it in the chapter {ref}`custom`.
::::::{solution} my-exercise
Here's one solution.

```{code-block} python
def factorial(n):
    k = 1
    for i in range(n):
        k = k * (i + 1)
    return k

factorial(4)
```
::::::
````md
::::::{solution} my-exercise
Here's one solution.

```{code-block} python
def factorial(n):
    k = 1
    for i in range(n):
        k = k * (i + 1)
    return k

factorial(4)
```
::::::
````
