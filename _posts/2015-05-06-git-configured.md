---
layout: post
title: Git Configured
tags: [git]
author: tborres
comments: true
---

Git configurations are like snowflakes - no two are exactly the same. At least that's what we found to be true at [Base Two](http://base2.io). Each developer had his own ignores, aliases, and other tricks, which worked fine in isolation, but became troublesome when we tried to describe to one another how to interact with Git in the console. To restore sanity we have begun to standardize our Git configurations.

<!-- #REST#BEGIN -->

The standardization of our Git configuration files is part of our larger effort to document our overall [development standards](https://github.com/b2io/development-standards). In addition to configuration files we're outlining our overall Git workflow and commit messaging standards, but I [digress](http://gph.to/1EPa17p).

The two primary divergents in our configurations were aliases and ignore files.

### Alias all the things

If you're working with Git from the command line (that's what all the cool kids do) your fingers are going to get tired without aliases. Who has the time to type `git status` when you could accomplish the same thing with `git s`? That's [5](https://www.npmjs.com/package/five) fewer characters!

Honestly, though, aliases are a great way to make Git on the command line manageable. Here is the global `.gitconfig` file that contains the aliases that we use:

<script src="http://gist-it.appspot.com/https://github.com/b2io/development-standards/blob/master/source-control/.gitconfig"></script>

### Ignore some of the things

Source control is great for keeping your code safe, but mixed with all of that code are IDE files, merge files, build artifacts, and plenty of other files you'd prefer to not have pollute your repository. That's where `.gitignore` files come into play. You likely already have one or more gitignore files in your repository, but did you know that you can create a global ignore file? This is a great place to configure all of the common files you'd like to ignore, which is especially appreciated when you wish to contribute to an open source project (the other people on the project likely don't care about your Visual Studio Resharper user settings file).

To create a global ignore file simply add `excludesfile = ~/.gitignore` to the `[core]` section of your global `.gitconfig` file (see above), and then create a `.gitignore` file as a peer to the `.gitconfig`. Here is the ignore file that we recommend:

<script src="http://gist-it.appspot.com/https://github.com/b2io/development-standards/blob/master/source-control/.gitignore"></script>

<!-- #REST#END -->
