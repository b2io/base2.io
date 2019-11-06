---
title: Git Aliases
author: khansen
date: '2019-11-06T04:00:00.000Z'
path: '/2019/11/06/Git-Aliases'
---

Insert header here

## Preface

Insert preface here

### code .

Opens your file in VSCode

### git cot origin/branchname

Checkout (switch to) a remote branch (and track it)

### git ba

Show me all of the branches

### git reset --hard

Wipe all of the stupid changes I might have made that I don’t want to commit

### git puff

Pull and fast forward (use this instead of git pull). This gets the latest and greatest on your local branch without creating a merge commit

### git d branchname

Delete local branch and clean your house

### git s

git status. This command is useful anytime you’re looking for information about which files you’ve already added (also called “staged”) and which files you haven’t yet added. However, since we often use “git aa” to “add all” files, I’m less often worried about which I’ve staged and which I haven’t.

I end up using this command most often when there are merge conflicts. After attempting to merge and running into a conflict, when I run “git s” it will show at the bottom the files for which there were conflicts. Then I go into VS Code and sort out the conflicts in those files.

### git cob

check out a new branch (create a new branch off of current branch and switch to it)

### git co branchname

Checkout (switch to) a local branch

### git aa

'The same as `git add .` which adds the current directory. Typically we run this from the root of the project, so that it effectively adds all of the current changes.

Rather than adding specific files to our commit, we assume that we want to commit all of our changes. We run `git aa` from the root directory and capture all of them.

Typically my workflow is that I work on some part of the problem. Once I’ve got some changes that I don’t want to lose (even if I decide to make further changes down the road), I run “git aa” followed by `git cm “xyz”` (where "xyz" is a commit message).

### git cm “one-line commit message”

Commit staged changes with a short message that describes where I’m at. It’s a note for myself as much as anyone else. Typically I preface it with “WIP:” (work in progress). An example is: `git cm “WIP: button styles”`

I do this fairly often to save my work. I try not to get bogged down with how to write the message. If I’m blanking too hard I just write “WIP”.

To fully back up my work I need to push the commits remote `git push`.

My workflow is to make lots of small commits as I work. Then once everything is accomplished I open a PR and use the PR’s description to talk about what the PR is accomplishing and changing.
And I use the “Squash & Merge” to get rid of all of my small “WIP” commits. That’s Reed’s workflow. Tony has a different approach.
