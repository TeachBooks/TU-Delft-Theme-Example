(latex)=
# $\LaTeX$ colors

To obtain pretty colors in $\LaTeX$ we define several color classes, being

- tud-red
- tud-blue
- tud-green
- tud-raspberry
- tud-yellow
- tud-darkGreen
- tud-orange
- tud-cyan
- tud-gray
- tud-purple
- tud-pink
- tud-darkBlue

so that in $\LaTeX$ we can use the code

```
\class{<color>}{<math>}
```

to obtain $\LaTeX$ that is rendered in the color `<color>`.

## Example

```text
:::::{math}

\class{raspberry}{\LaTeX}

:::::
````

renders as

:::::{math}

\class{raspberry}{\LaTeX}

:::::

Note that without applying the TU Delft theme the default text color is chosen.