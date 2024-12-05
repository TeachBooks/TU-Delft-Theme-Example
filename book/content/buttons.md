(buttons)=
# Buttons
::::::{important}
The examples are taken from the documentation of the sphinx-design extension, available at their [website](https://sphinx-design.readthedocs.io/en/latest/badges_buttons.html#badges).
::::::
The syntax to use buttons is the following:
```text
::::::{button-link} <link>
<options>
<content>
::::::
```
where `<content>` is what will be inside of the button. `<content>` is optional, and if not included, it will be the `<link>` that is displayed in the button. `{button-link}` (for external links) can also be replaced with `{button-ref}` to navigate with internal links. In this chapter we present all the colours of badges available in the TU Delft theme, and other useful `<options>` for buttons.

## Colours
You can use the colour of your choice by including:
```
:color: <color>
```
in the button component, where `<color>` should be replaced with the colour of the badge that we present in this subsection.

### `primary`
::::::{button-link} https://example.com 
:color: primary
::::::

### `secondary`
::::::{button-link} https://example.com 
:color: secondary
::::::

### `success`
::::::{button-link} https://example.com 
:color: success
::::::

### `info`
::::::{button-link} https://example.com 
:color: info
::::::

### `warning`
::::::{button-link} https://example.com 
:color: warning
::::::

### `danger`
::::::{button-link} https://example.com 
:color: danger
::::::

### `light`
::::::{button-link} https://example.com 
:color: light
::::::

### `muted`
::::::{button-link} https://example.com 
:color: muted
::::::

### `dark`
::::::{button-link} https://example.com 
:color: dark
::::::

### `white`
::::::{button-link} https://example.com 
:color: white
::::::

### `black`
::::::{button-link} https://example.com 
:color: black
::::::

## Align
You can align your button on the page by including:
```
:align: <direction>
```
in the button component, where `<direction>` should be replaced with one of the options that we present in this subsection.

### `left`
::::::{button-link} https://example.com 
:color: primary
:align: left
::::::

### `right`
::::::{button-link} https://example.com 
:color: primary
:align: right
::::::

### `center`
::::::{button-link} https://example.com 
:color: primary
:align: center
::::::
