(proofs)=
# Proofs
Proofs introduce components that can be used for including: proofs, lemmas, definitions, etc. The syntax to use proofs is the following:
```
::::::{prf:<type>} <title>
<content>
::::::
```
where `<type>` is the type of the proof component used (**important**: type is now specified in the header, as opposed to in the class field, like it was done for admonitions), and `<content>` is what will be inside the component. `<title>` (optional) will be displayed in parentheses after the default title. In this chapter we present types of proof components available, and their styling in the TU Delft theme.

## `prf:definition`

::::::{prf:definition} Triangle
A **triangle** is a polygon with three edges and three vertices.
::::::

```
::::::{prf:definition} Triangle
A **triangle** is a polygon with three edges and three vertices.
::::::
```

## `prf:example`

::::::{prf:example} Triangle
A triangle with side lengths 3, 4, and 5 is a right triangle because it satisfies the Pythagorean theorem.
::::::

```
::::::{prf:example} Triangle
A triangle with side lengths 3, 4, and 5 is a right triangle because it satisfies the Pythagorean theorem.
::::::
```

## `prf:proposition`

::::::{prf:proposition} Sum of Angles
The sum of the interior angles of a triangle is always 180 degrees.
::::::

```
::::::{prf:proposition} Sum of Angles
The sum of the interior angles of a triangle is always 180 degrees.
::::::
```

## `prf:corollary`

::::::{prf:corollary} Equilateral Triangle
If a triangle is equilateral, each of its angles measures 60 degrees.
::::::

```
::::::{prf:corollary} Equilateral Triangle
If a triangle is equilateral, each of its angles measures 60 degrees.
::::::
```

## `prf:theorem`

::::::{prf:theorem} Pythagorean Theorem
In a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.
::::::

```
::::::{prf:theorem} Pythagorean Theorem
In a right triangle, the square of the length of the hypotenuse is equal to the sum of the squares of the lengths of the other two sides.
::::::
```

## `prf:algorithm`

::::::{prf:algorithm} Selection Sort
To sort an array of numbers, repeatedly find the smallest number and move it to the beginning.
::::::

```
::::::{prf:algorithm} Selection Sort
To sort an array of numbers, repeatedly find the smallest number and move it to the beginning.
::::::
