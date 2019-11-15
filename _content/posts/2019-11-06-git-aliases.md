---
title: Joining a Team - Git Aliases
author: khansen
date: '2019-11-06T04:00:00.000Z'
path: '/2019/11/06/Git-Aliases'
---

Hi, I’m the new kid. I’ve recently joined the team at Base Two, and have come out of the other end of an onboarding process comparatively unscathed. I wanted to take this opportunity to tell my onboarding story in a series of blog posts I’ve creatively titled “Joining a Team".

Everyone is anxious to dive right in when they start a new position, but the reality is that there is a ton of prep, setup, and observation of workflow nuance that has to happen. No matter how straightforward a job might be (read some code, write some code, things work or they don’t), every team has a unique set of tools and a unique working style that takes some time to make your own.

I was sent a laptop before my first day, which is something I’ve never experienced before and I highly recommend to any manager-type folks out there. My colleague Reed has written a few excellent blog posts about how he set up his [mac](https://www.base2.io/2017/02/08/mac-setup) and his [Windows machine](https://www.base2.io/2018/01/04/pc-setup). He covered some pretty good stuff. After a simple setup of Iterm2, OhMyZsh, and VSCode, I was pretty much ready to go.

The very first thing that was discussed when we met on my first day was Git Aliases. I had never used git aliases in the past, so setting them up was new to me. I’m on a mac, so I navigated to my git config file by going to my home folder (cd ~) and then typing in `code .gitconfig`. I then was able to list the following git alias’s in my [Alias] section of my config file. For more git config info, check out [this post](http://localhost:8000/2015/05/06/git-configured/) by my co-worker Tony.

The following git aliases are specific to very basic daily functions. If you're looking for a very fancy list of git alias inspiration, you're just a google search away from a [ton](https://haacked.com/archive/2014/07/28/github-flow-aliases/) [of](https://medium.com/the-lazy-developer/five-life-changing-git-aliases-e4211c090017) [really](https://dev.to/sarathsantoshdamaraju/git-aliases-that-could-be-helpful-5bdp) [great](https://bitsofco.de/git-aliases-for-lazy-developers/) [articles](http://codersopinion.com/blog/16-awesome-git-aliases-that-you-will-love/).

![keyboard](https://i.imgur.com/keJkLlF.jpg)

## Git Aliases

### code .

Opens your file in VSCode without touching your mouse.

### git cot origin/branchname

Checkout (switch to) a remote branch and track it at the same time.

### git ba

Show me all of the branches.

### git reset --hard

Wipe all of the changes I might have made that I don’t want to commit, and don't need to save.

### git puff

Pull and fast forward (we use this instead of git pull). This gets the latest and greatest files onto your local branch without creating a merge commit.

### git d branchname

Delete the local branch to keep a clean pc machine.

### git s

Abbreviation for `git status`. This command is useful anytime you’re looking for information about which files you’ve already added (also called “staged”) and which files you haven’t yet added. However, since this team often uses `git aa` to “add all” files, it's less of a worry to identify what you have stage and what has not been staged.

This command is used most often when there are merge conflicts. After attempting to merge and running into a conflict, running `git s` will show files for which there were conflicts. Conflicts can then be managed in VS Code.

### git cob

check out a new branch (create a new branch off of current branch and switch to it).

### git co branchname

Checkout (switch to) a local branch.

### git aa

The same as `git add .` which adds the current directory. Typically this is run from the root of the project, so that it effectively adds all of the current changes.

Rather than adding specific files to a commit, you can assume that you want to commit all of your changes. Running `git aa` from the root directory will capture all of them.

### git cm “one-line commit message”

This command will commit staged changes with a short message that describes where you're at. It’s a note for yourself as much as anyone else. It's ok to preface the commit message with “WIP:” (work in progress). An example is: `git cm “WIP: button styles”`.

To fully back up your work, you will need to push the commits remote `git push`.

It's good practice to make many small commits as you are working. Once you feel that your collective changes are in a good spot, you can open a Pull Request (PR) and use the PR’s description to talk about what the PR is accomplishing and changing.

After the PR is open, use the “Squash & Merge” button to get rid of all of your small “WIP” commits.

![gitaliases](https://i.imgur.com/9TL1WhW.png)

---

There you have it. Some very basic but very vital git aliases that have significantly streamlined my workflow. In fact, I've recently told a friend that "git cob has changed my life!" Best wishes to you in going forth and shortening your git commands, and feeling confident in finding your own.
