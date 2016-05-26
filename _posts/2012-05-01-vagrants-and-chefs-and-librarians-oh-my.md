---
layout: post
title: Vagrants and Chefs and Librarians... oh my!
tags: [vagrant, chef, librarian, rvm, ruby, rails]
author: dmiller
comments: true
---

**Update:**
Thanks to [SDude]({{page.url}}#comment-677428811), [zibuki]({{page.url}}#comment-584010225), [bilke]({{page.url}}#comment-537553234), and [Anthony Goddard]({{page.url}}#comment-521570237) for helping to keep this post up-to-date and working.

For those of you out there doing development, you've probably run into some or all of the following problems:

* Your development environment doesn't mirror your production environment.
* It's difficult or impossible to keep everyone's development environment consistent in multi-developer projects.
* You can never remember how to get all the configuration nuances right for whatever dependencies your project requires.
* It takes real, significant amounts of time to get yourself ready to go when starting or switching projects.
* The dependencies of one project might conflict with another project.

These issues kill your productivity with time-consuming and difficult-to-isolate issues that have _nothing_ to do with the problem you actually want to solve. To get around these issues and give ourselves some other advantages (more on that later) we're using a gem called [Vagrant](http://vagrantup.com) to create a portable development environment.

<!-- #REST#BEGIN -->

### A Vagrant's life

Vagrant is essentially a command-line wrapper on top of [Oracle's VirtualBox](http://www.virtualbox.org/). This lets you initialize, suspend, resume, and destroy virtual machines right from your terminal easily. Getting started is as easy as:

<script src="https://gist.github.com/2564740.js?file=vagrant"></script>

For a more detailed setup guide, check the [Getting Started](http://vagrantup.com/v1/docs/getting-started/index.html) documentation for Vagrant.

So with a nice, fresh virtual machine to play with, we can go ahead and setup all the things we need in our development environment. We can even do our best to mirror our production environment so we can avoid all those "it worked on my machine" issues.

But we're still left with a problem, this virtual machine isn't _portable_. If someone else joins the project, they'll have to go through whatever manual setup steps we did to get the dependencies installed on their own Vagrant box.

Not to worry though, Vagrant has the perfect solution for you: [Provisioning](http://vagrantup.com/v1/docs/getting-started/provisioning.html). Provisioning allows you to automate the setup of your development environment using either [Puppet](http://puppetlabs.com/puppet/what-is-puppet/) or [Chef](http://wiki.opscode.com/display/chef/Home). Based on our research, Chef seemed like the right way to go.

### The Chef and the Librarian

Chef is a provisioning tool, and as you might expect it makes it possible to automatically configure a machine (virtual or otherwise) into a specific state. In keeping with the culinary metaphor Chef has _recipes_ which represent a specific configuration (e.g.: setting up an Apache server). Recipes are organized into _cookbooks_, which are really just containers for all those configuration options.

There's a mountain of technical detail involved in Chef, it can be used to mainain an entire cloud infrastructure. To keep things simple, and within our abilities, we're going to be focusing on a use of Chef called [Chef Solo](http://wiki.opscode.com/display/chef/Chef+Solo).

When you looked at the Vagrant [Getting Started documentation for Provisioning](http://vagrantup.com/v1/docs/getting-started/provisioning.html) you might have noticed the following use of Chef Solo to provision their sample box:

<script src="https://gist.github.com/2564740.js?file=Vagrantfile-Getting-Started"></script>

This kind of usage is great for a "Hello World" example, but not so great for showing you how to use Chef  Solo to provision in a more realistic context. We ran into some stumbling blocks with Chef Solo: How do we manage the cookbooks and recipes properly? Should we install them in the user directory? The project directory? How do we ensure everyone is using the same version?

At some point in our search for sanity in that process we ran across a great gem called [Librarian](https://github.com/applicationsonline/librarian) that aims to solve this exact problem. To setup Librarian for our project we need to run the following commands:

<script src="https://gist.github.com/2564740.js?file=librarian"></script>

What you're doing there is ignoring a few folders in git and initializing the project for Librarian. Part of that initialization is to create a `Cheffile` which serves as your way to define what cookbooks/recipes you need in a clean and portable way.

To set the stage a bit, let's say we're starting a Ruby on Rails project and we know we're going to need the following things:

* An up-to-date system (through `aptitude`)
* Ruby (through `rvm`)
* Git (through `git-core`)

Not the most complicated set of requirements, but sufficient for getting this project off the ground. Let's take a look at a `Cheffile` that gets us the recipes we need:

<script src="https://gist.github.com/2564740.js?file=Cheffile"></script>

After we've set that, we simply run `librarian-chef install` to have Librarian pull down all those cookbooks and install them into our project. Now we just need to setup Vagrant to provision our environment:

<script src="https://gist.github.com/2564740.js?file=Vagrantfile"></script>

Pretty straight-forward stuff there, we're just telling Vagrant to provision using Chef Solo, telling it where to find our cookbooks, and which recipes to use. After we've got those changes in place, we run `vagrant up` to have Vagrant initialize and provision our virtual machine.

At this point, you should be able to `vagrant ssh` into your box and run `ruby -v` to confirm that everything went as planned. Vagrant will also yell at you during the provisioning phase if something about the process didn't go according to plan.

### The finale

So what have we really accomplished here? Well, we've created a simple, automated, and portable way for you to setup all the dependencies for your project *without* cluttering your system. No more "works on my system", no more cross-contamination from projects. And if you're on Windows now, no more "only supported on *nix" frustrations. Let's take a look at what a new developer coming onto the project would need to do to get setup:

<script src="https://gist.github.com/2564740.js?file=finale"></script>

Take a moment to look at that...

### Four. Commands.

Four commands and you've checkout out the project from version control and setup a clean, fully provisioned, and isolated virtual machine to do your development in.

As you can see, Vagrant, Chef, and Librarian make a seriously powerful addition to your development arsenal. As such, there's a lot more things you can do with them; here's some links to get you started:

* [Vagrant Documentation](http://vagrantup.com/v1/docs/index.html) -- more detail on how you can use Vagrant to setup virtual development environments.
* [Chef Solo Wiki](http://wiki.opscode.com/display/chef/Chef+Solo) -- more detail on how you can use Chef Solo to provision your Vagrant box.
* [Librarian README](https://github.com/applicationsonline/librarian/blob/master/README.md) -- more detail on how you can use Librarian to manage your chef cookbooks and recipes.
* [Opscode's cookbooks](https://github.com/opscode/cookbooks) -- the company behind Chef maintains this repository of cookbooks.

<!-- #REST#END -->
