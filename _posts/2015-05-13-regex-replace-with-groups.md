---
layout: post
title: Regex - Replace with Groups
tags: [git]
author: tborres
comments: true
---

I was recently confronted with a situation that required me to search and replace my code in a way that the left and right of my search needed to be replaced, but the middle needed to remain the same. Could this be done with a single search and replace?

<!-- #REST#BEGIN -->

### The Problem

For reasons that I do not care to detail here, I found myself needing to replace every instance of my Visual Studio solution where a `template` line matching

```
template: require('Project/DynamicComponentName/DynamicComponentName.html')
```

is replaced with a `templateUrl`

```
templateUrl: 'Project/DynamicComponentName/DynamicComponentName.html'
```

In this example the DynamicComponentName is different in every instance.

Rather than manually identifying every template line and make the necessary changes I wanted to do a single search and replace and be done with it. Regex felt like the right answer, but how?

### Regex Groups

Regex, or regular expressions, is a very powerful (read as: "complicated to use and understand") pattern matching grammar. It provides for more advanced searching capabilities than a standard text-base search. Luckily Visual Studio provides for searching via Regex (screenshot is of Visual Studio 2013).

![Visual Studio regex search option](http://i.imgur.com/MAzCFjd.jpg)


With **Use Regular Expressions** selected in Visual Studio we can take advantage of regex, including its group capturing via parentheses.

In the **Find what** we can place the following regex query

```
template: require\('Project/(.*)'\)

```

This tells Visual Studio to match everything that directly matches `template: require(Project/`&lt;any number of characters&gt;`)'`. Note that the require's parentheses needed to be escaped with `\` because the parentheses are part of the regex syntax. You can use the [http://www.regexr.com/](http://www.regexr.com/) online tool to test the regex matcher on your own.

Now if we place the following in the **Replace with** field we'll be able to place the contents captured by the `(.*)` capture group using the `$` syntax.

```
templateUrl: 'Project$1'

```

The contents of the capture group will be placed in the `$1` slot. If you had more than one capture group then you would simply increment the `$` (`$1`, `$2`, etc) based on the order that the capture groups appeared in the search term.

Now hit **Replace** for each instance and you're good to go.

In my situation I really wanted to use **Replace All**, but Visual Studio 2013 seems to have an issue with Replace All using regex. Using Replace All results in Visual Studio stating that it cannot find any matches. [Silly Visual Studio](https://www.youtube.com/watch?v=VDrW7sc52Ck&feature=youtu.be&t=48).

<!-- #REST#END -->
