---
title: Git Configured
author: tborres
date: "2015-05-06T04:00:00.000Z"
path: "/2015/05/06/git-configured"
---

Git configurations are like snowflakes - no two are exactly the same. At least
that's what we found to be true at [Base Two](http://base2.io). Each developer
had his own ignores, aliases, and other tricks, which worked fine in isolation,
but became troublesome when we tried to describe to one another how to interact
with Git in the console. To restore sanity we have begun to standardize our Git
configurations.

The standardization of our Git configuration files is part of our larger effort
to document our overall
[development standards](https://github.com/b2io/development-standards). In
addition to configuration files we're outlining our overall Git workflow and
commit messaging standards, but I [digress](http://gph.to/1EPa17p).

The two primary divergents in our configurations were aliases and ignore files.

## Alias all the things

If you're working with Git from the command line (that's what all the cool kids
do) your fingers are going to get tired without aliases. Who has the time to
type `git status` when you could accomplish the same thing with `git s`? That's
[5](https://www.npmjs.com/package/five) fewer characters!

Honestly, though, aliases are a great way to make Git on the command line
manageable. Here is the global `.gitconfig` file that contains the aliases that
we use:

```
[core]
  autocrlf = false
  excludesfile = ~/.gitignore
[push]
  default = simple
[alias]
  ### MOST COMMON

  aa = add . # Stage all changes
  amend = commit --amend -C HEAD # Amend the previous commit message
  ba = branch --all # Show all local and remote branches
  ci = commit # Commit, which will open an editor for the commit message
  cm = commit -m # Commit with inline message
  cob = checkout -b # Create new branch and checkout
  cot = checkout -t # Create remote branch and track locally
  d = branch -D # Hard delete branch (whether it has unpushed changes or not)
  lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr, %cn)%Creset' --abbrev-commit --date=relative # More succinct log
  puff = pull --ff --ff-only # Instead of `pull`. Avoids creating a merge branch on `pull`
  s = status # Status
  st = status # Status

  ### Others

  br = branch # Show all local branches
  co = checkout # Checkout
  dc = diff --cached # List changes with cached remote
  hist = log --graph --pretty=format:'%h %ad | %s%d [%an]' --date=short # Commit history with dates
  last = log -1 HEAD # Display log for last commit
  unstage = reset HEAD -- # Unstages changes
[fetch]
  prune = true
[mergetool]
  keepBackup = false
[branch "master"]
  mergeoptions = --no-ff # ensures that all merges into master create a merge commit
#[includeIf "gitdir:~/workspace/differentAccountDirectory/"] # load .gitconfig in a subdirectory
#  path = ~/workspace/differentAccountDirectory/.gitconfig
```

## Ignore some of the things

Source control is great for keeping your code safe, but mixed with all of that
code are IDE files, merge files, build artifacts, and plenty of other files
you'd prefer to not have pollute your repository. That's where `.gitignore`
files come into play. You likely already have one or more gitignore files in
your repository, but did you know that you can create a global ignore file? This
is a great place to configure all of the common files you'd like to ignore,
which is especially appreciated when you wish to contribute to an open source
project (the other people on the project likely don't care about your Visual
Studio Resharper user settings file).

To create a global ignore file simply add `excludesfile = ~/.gitignore` to the
`[core]` section of your global `.gitconfig` file (see above), and then create a
`.gitignore` file as a peer to the `.gitconfig`. Here is the ignore file that we
recommend:

```
# Merge files
*.orig

# Office temporary files.
~$*

# NPM debugging log files.
npm-debug.log
node_modules

# JetBrains editor files.
/**/.idea

# Visual Studio
## Editor files
*.suo
*.user
*.userosscache
*.sln.docstates
*/**/.vs/
.vscode/

## ReSharper is a .NET coding add-in
_ReSharper*/
*.[Rr]e[Ss]harper
*.DotSettings.user

## Build results
[Dd]ebug/
[Dd]ebugPublic/
[Rr]elease/
[Rr]eleases/
x64/
x86/
build/
bld/
[Bb]in/
[Oo]bj/

## MSTest test Results
[Tt]est[Rr]esult*/
[Bb]uild[Ll]og.*

## NuGet Packages
*.nupkg
### The packages folder can be ignored because of Package Restore
**/packages/*
### except build/, which is used as an MSBuild target.
!**/packages/build/

# SQL Server files
*.mdf
*.ldf

# js files
tsconfig.json
```