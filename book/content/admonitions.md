(admonitions)=
# Admonitions

::::::{important}
The examples are taken from the original documentation of the Sphinx book theme, available at their [website](https://sphinx-book-theme.readthedocs.io/en/stable/reference/kitchen-sink/admonitions.html).
::::::

The syntax to use admonitions is the following:
```text
::::::{class}
<content>
::::::
```
where `class` is the type of admonition used, and `<content>` is what will be inside the admonition. In this chapter we present classes of admonitions available, and their styling in the TU Delft theme.

## `topic`

::::::{topic} This is a topic
This is what admonitions are a special case of, according to the docutils documentation.
::::::
```text
::::::{topic} This is a topic
This is what admonitions are a special case of, according to the docutils documentation.
::::::
```

## `admonition`

::::::{admonition} The one with the custom titles
It's got a certain charm to it.
::::::
```text
::::::{admonition} The one with the custom titles
It's got a certain charm to it.
::::::
```

## `attention`

::::::{attention} Attention
Climate change is real.
::::::
```text
::::::{attention} Attention
Climate change is real.
::::::
```

## `caution`

::::::{caution} Caution
Cliff ahead: Don't drive off it.
::::::
```text
::::::{caution} Caution
Cliff ahead: Don't drive off it.
::::::
```

## `danger`

::::::{danger} Danger
Mad scientist at work!
::::::
```text
::::::{danger} Danger
Mad scientist at work!
::::::
```

## `error`

::::::{error} Error
Does not compute.
::::::
```text
::::::{error} Error
Does not compute.
::::::
```

## `hint`

::::::{hint} Hint
Insulators insulate, until they are subject to ______ voltage.
::::::
```text
::::::{hint} Hint
Insulators insulate, until they are subject to ______ voltage.
::::::
```

## `important`

::::::{important} Important
Tech is not neutral, nor is it apolitical.
::::::
```text
::::::{important} Important
Tech is not neutral, nor is it apolitical.
::::::
```

## `note`

::::::{note} Note
This is a note.
::::::
```text
::::::{note} Note
This is a note.
::::::
```

## `seealso`

::::::{seealso} See Also
Other relevant information.
::::::
```text
::::::{seealso} See Also
Other relevant information.
::::::
```

## `tip`

::::::{tip} Tip
25% if the service is good.
::::::
```text
::::::{tip} Tip
25% if the service is good.
::::::
```

## `warning`

::::::{warning} Warning
Reader discretion is strongly advised.
::::::
```text
::::::{warning} Warning
Reader discretion is strongly advised.
::::::
```

## `versionadded`

::::::{versionadded} Version Added
**v0.1.1**  
Here's a version added message.
::::::
```text
::::::{versionadded} Version Added
**v0.1.1**  
Here's a version added message.
::::::
```

## `versionchanged`

::::::{versionchanged} Version Changed
**v0.1.1**  
Here's a version changed message.
::::::
```text
::::::{versionchanged} Version Changed
**v0.1.1**  
Here's a version changed message.
::::::
```

## `deprecated`

::::::{deprecated} Deprecated
**v0.1.1**  
Here's a deprecation message.
::::::
```text
::::::{deprecated} Deprecated
**v0.1.1**  
Here's a deprecation message.
::::::
```
