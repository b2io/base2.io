---
title: Joining a Team - Messing Up
author: khansen
date: '2019-12-30T04:00:00.000Z'
path: '/2019/12/30/messing-up'
---

Recently, I’ve spent a lot of time reading blogs about how to rebound after various degrees of messing up. As the team’s resident newbie, I’ve messed up in an impressive variety of ways.

I wanted to share some of the information that I’ve collected over the last month or so, and summarize some simple fixes that have worked for me.

![dropped ice cream cone](https://i.imgur.com/zwRn3LV.jpg)

I read an article somewhere along the way that said something to the effect of “embrace public embarrassment as an opportunity to learn”. As many of us are using GitHub collaboratively and publicly, there is no truer lesson. What prompted the idea for this article happened on an ordinary day. I was working on a rather complicated issue that involved about a dozen only semi-related issues. I had pushed about 35 WIP (Work in Progress) commits before I realized that I had royally messed up and had no idea how to untangle the proverbial ball of yarn I had managed to wrap around myself.

Here are a few lessons that I’ve learned, how I’ve adapted my working style, and some fixes that I now use regularly.

This article assumes you are using git locally, GitHub, and a text editor.

### SCENARIO ONE: Pass me that remote Master

_The remote Master has changed since I’ve started my branch._

You’re working along nicely when all of a sudden you wake up and realize that you’re no longer a solo dev, you are working with a team and other people have made some changes that you’d like to have reflected into your branch.

The easiest tactic that I’ve found is to merge the remote master into your working branch. Git steps are as follows:

```
git checkout master
git pull
git checkout <yourbranch>
git merge master
```

This will cause your text editor to show any differences bewteen your branch and the files you are about to merge in. You just need to use your text editor to resolve any merge conflicts that may arise, and your branch will be updated.

Rebasing is another option. You can find a complicated description of that [here](https://git-scm.com/book/en/v2/Git-Branching-Rebasing), although [this stack overflow solution](https://stackoverflow.com/questions/20101994/git-pull-from-master-into-the-development-branch/20103414) is a much simpler solution. Warning, rebasing will change your commit history, and is not generally a recommended solution as it will overwrite some potentially important information.

### SCENARIO TWO: Commit removal

_That Last Commit was Garbage! Get me back to a previous commit!_

We are so lucky that the internet is vast and full of awesome information. However, finding out how to revert a commit was a real challenge for me. This scenario has also helped me figure out a better working system to avoid having to publicly revert commits on our remote repo repository.

[This](https://code.likeagirl.io/how-to-undo-the-last-commit-393e7db2840b) is my favorite article on the issue, and has helped me out more times than I can count.

Hopefully you have been working on a branch, and whether you have just committed your changes locally or to your remote repository, you can decide how you want to approach the fix. If you have not committed anything that is worth saving, a simple `git reset --hard` can get rid of all of your most recent changes. If you are are not so lucky and have pushed a commit that you want to get rid of, you need to get the hash name of the commit you want to revert.

To get the commit hash, I run `git log --oneline` to produce a simplified listing of commits.

I’ve learned the hard way that it’s very important to test out the commit that you want to revert to before making any changes. To do so, `git checkout <commit hash>`

If that is in fact the commit that you would like to revert to, type in `git revert <commit hash>`. For more details about this procedure, please check out Isabel Costa’s awesome article linked above. She does a great job simply explaining this revert process.

Now, if there are several commits that you want to undo, or they are further up in your list, you can cherry-pick what you would like to remove using `git rebase -i` which will open a list of your commits in your text editor. You can then go through and change the ‘pick’ string to ‘squash’ to combine any commits that you would like to squash. There are other options as well to remove commits completely. Again, the rebase move isn’t entirely recommended, as it will change the history of your documentation. See above about public embarrassment being a good thing. For more information about interactive rebasing, I’ve followed [this blog post](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/) with moderate success.

Since fixing mistakes is such a process, I’ve since adapted my working style to push to the remote (public) repo only when I am super confident about a change. I save my WIP commits locally only, until I’m sure they are working. I can then do a `git reset -—hard` to revert any testing or changes that I’m not so sure of, without anyone being the wiser.

### SCENARIO THREE: Wrong Commit Message

_Can you mess up literally everything? Even a commit message?? I can._

I’ve been in the situation where I’ve typed some commit message like WIP: `fix <wrong component name>` . Not the end of the world, but certainly embarrassing.

If this happened to be your last commit message, in your console type
`git commit --amend`

A message amendment page will open in you text editor. You can edit the message on the first line, which should be your mistake. Once you save and close that file, your message should be changed when you next push to git.
![VSCode message](https://i.imgur.com/HywlDg8.png)

If you need to change an older commit message, [check out this article.](https://help.github.com/en/github/committing-changes-to-your-project/changing-a-commit-message)

### ULTIMATE FAIL: All Hope is Lost

_The only choice now is to start over or flip your computer into a nearby trashcan._

Sometimes you just have to throw in the towel and start fresh. I know I’m not the first one to abandon a branch. but what do you do when your garbage branch has some work in it that you would like to keep?

I was feeling very clever when I started using [GitLens](https://gitlens.amod.io/) in VSCode to compare a new branch with an older branch that I have already committed. If you already use GitLens, you can click on the little icon on the left of your IDE pane, and select “compare”. You can then select your current (new) branch file and compare it to an older branch before you trash it. You can see the file diff the same way you can on GitHub, without publicly pushing a branch if you are not ready.

![GitLens icon](https://i.imgur.com/XYd1H34.png)

![GitLens compare pane](https://i.imgur.com/PYKj0aY.png)

Although GitLens is awesome for a variety of reasons, VSCode has this ability built in as well. In your file listing pane, if you select two files and right click, you will be given an option of ‘compare selected’ that will show the diff as well.

---

There are countless ways to mess up and to fix screw ups using Git and GitHub. As a new team member, I learn new ways of problem solving, trouble shooting, and fixing errors almost every day. As a perfectionist, it’s hard to take these lessons as not moments of defeat, but as par for the course of development. If you are reading this article, you might have found yourself in the same boat that I had, so let’s give a special shout out to Git for saving us with it’s awesome version control!
