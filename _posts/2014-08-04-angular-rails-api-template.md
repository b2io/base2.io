---
layout: post
title: Web Development Project Puzzle Pieces
tags: [Angular, Rails, Rails-api, Vagrant, Puppet, Grunt, Bower, Node, npm]
author: tborres
comments: true
---

Web development can be like trying to complete a puzzle that has had its pieces dumped into a box with multiple other puzzles. There are so many puzzle pieces that it can be difficult to even know what picture you should end up with at the end.

While every project is it's own puzzle, there are a lot of common pieces out there. Here's a walk-through of how we got some of our favorite pieces (**Angular**, **Rails**, **Vagrant**, and more) to fit together.

<!-- #REST#BEGIN -->

### What Pieces Do We Have?

Below is the list of technologies we use in this example. For your reference I'm on a 64 bit version of Windows 7. Be aware that if you're using something else your results may vary.

* **[RubyGems](http://sourceforge.net/projects/console/files/)** (2.3.0): Ruby's package system.
* **[Rails-api](https://github.com/rails-api/rails-api)** (0.2.1): A lightweight version of Rails to provide API capabilities without the extra pieces that Rails brings to the table.
* **[Vagrant](http://www.vagrantup.com/)** (1.4.3) with **[VirtualBox](https://www.virtualbox.org/)** (4.3.14): Allows for the configuration of reproducible and portable virtual machines.
* **[Puppet](http://puppetlabs.com/puppet/puppet-open-source)**: Provisioner for Vagrant.
* **[Angular](https://angularjs.org/)** (1.2.16): Front-end JavaScript framework.
* **[Git](http://git-scm.com/)** (1.9.0): Distributed source control.
* **[npm](http://nodejs.org/)** (1.4.14): We use this for the installation of some of the other tools.
* **[Yeoman](http://yeoman.io/)** (1.2.0): Web scaffolding tool that we use to scaffold angular via the [angular generator](https://github.com/yeoman/generator-angular).
* **[Grunt](http://gruntjs.com/)** (0.1.13): The build system that comes with Yeoman.
* **[Bower](http://bower.io/)** (1.3.8): The package manager that comes with Yeoman.

### Generate the Rails App

There are many ways that we can begin to put this puzzle together. We're going to start by generating the Rails app. For this example we'll use `my_app` as our application's name.

In your terminal (I use [Console2](http://sourceforge.net/projects/console/files/)) navigate to the location you'd like your application's root folder to be placed in. If you don't already have rails-api installed then do that now.

    gem install rails-api

Generate your Rails app with the following

    rails-api new my_app

Now let's make a few changes to what was auto-generated for us. `cd my_app` and remove the `/test/` directory because we'll be using rspec for testing instead.

Open your `Gemfile` and update it to include the gems that you'll need. Here's what we used, but you'll want to upgrade to the latest packages for your application.

<script src="https://gist.github.com/tborres/67ed702ad8cfafaeec05.js?file=Gemfile"></script>

We also need to change our `database.yml` file because we'll be using PostgreSQL rather than SQLite.

<script src="https://gist.github.com/tborres/67ed702ad8cfafaeec05.js?file=database.yml"></script>

### Vagrant and Puppet

Now that our bare-bones Rails-api app is created we’ll setup Vagrant. Vagrant will allow us to provision and run a virtual machine in a consistent way. This will remove the “it worked on my machine” problem that often plagues developers.

We’ll use the rails-dev-box as our base since it has many of the features we’ll need. You can clone the repository from here: [https://github.com/rails/rails-dev-box](https://github.com/rails/rails-dev-box)

Now copy the `Vagrantfile` and the `/puppet/` directory from the rails-dev-box into the root of your application (as a peer to your Rails `/app/` directory). Open the `Vagrantfile` in your favorite text editor (I use [Sublime Text 2](http://www.sublimetext.com/)), and change the `config.vm.hostname` from `‘rails-dev-box’` to the name of your app. This will make it a little less confusing when you’re in your VM.

Now open the `/puppet/manifests/default.pp` puppet manifest file. This file contains a lot of optional configurations that we will not be using. Make the following changes to the file:

1. Change `$ar_databases` values to your application name rather than `activerecord_unittest`.
Example: `$ar_databases = ['my_app_dev', 'my_app_test']`
2. Remove the SQLite and MySQL sections because we’ll be using PostgreSQL
3. Add the following Puppet modules (*which can be installed on Windows by first downloading the tar.gz file, extracting it, copying the resulting folder into the app's `/puppet/modules/` directory, and then renaming the folder to it's module name* :
    * nodejs: [https://forge.puppetlabs.com/puppetlabs/nodejs](https://forge.puppetlabs.com/puppetlabs/nodejs)
    * stdlib: [https://forge.puppetlabs.com/puppetlabs/stdlib](https://forge.puppetlabs.com/puppetlabs/stdlib)
    * apt: [https://forge.puppetlabs.com/puppetlabs/apt](https://forge.puppetlabs.com/puppetlabs/apt)
4. This version of Ubuntu’s npm is out of date so we need to make an adjustment to the `/puppet/modules/nodejs/manifests/init.pp` file. You'll need to set `$manage_repo = true`.
5. Within the `default.pp` file replace the nodejs section with `include nodejs`
6. Add the puppet-yeoman module from [https://github.com/nickhartjes/puppet-yeoman](https://github.com/nickhartjes/puppet-yeoman) by
    * Cloning the repository
    * Copy the `init.pp` file into the `/puppet/modules/yeoman/manifests/init.pp` directory.
    * Remove `“curl”` from the yeomanPackages because it already exists in our `default.pp`.
    * Change `require => Exec['apt-get update']` to `require => Class['apt_get_update']`
    * Add a call to the module at the bottom of the `default.pp` file with `include yeoman`
7. Add the angular generator for yeoman by adding the following to the bottom of your `default.pp` file:

<code data-gist-id="67ed702ad8cfafaeec05" data-gist-file="default.pp" data-gist-line="109-113"></code>

8. Navigate to the root of your Rails directory in your console and start vagrant with the `vagrant up` command.
9. Now access your VM via ssh

```
vagrant ssh
> cd /vagrant/
```

Update the bundle, and rake the database

```
    > bundle update
    > rake db:create
```

### Angular!

Now we'll add a basic angular structure to our application.

Create an `/angular/` directory within your rails directory (as a peer to the `/app/` directory).

```
	> mkdir angular && cd angular
```

Run the angular generator (within your Vagrant VM) and answer the questions to match your needs (I answered yes to all).

```
	> yo angular my_app
```

If you ran into any errors during the generation you may need to run the bower install and npm install manually.

```
	> bower install
	> sudo npm install
```

Now adjust your `Gruntfile.js` within the `/angular/` directory so that dist places the build files in the rails `/public/` directory.

<code data-gist-id="67ed702ad8cfafaeec05" data-gist-file="Gruntfile.js" data-gist-line="21-24"></code>

Also add the following to the connect section (replacing the livereload section) so that your files are proxied during development.

<code data-gist-id="67ed702ad8cfafaeec05" data-gist-file="Gruntfile.js" data-gist-line="76-98"></code>

Build the angular assets with Grunt (from within the `/angular/` directory)!

```
	> grunt build
```

If you see an error dealing with lodash it is likely the result of long file paths. The latest stable version of npm does not support a fix for this. You’ll need to run npm and grunt from your local development machine rather than Vagrant.

### Done! - Frame that puzzle (with Git)

You've successfully created your bare structure for web development. It may feel like you just put all the pieces of the puzzle together to find that the picture is blank, but at least now you have a canvas to paint a your cat pictures on. Let keep that canvas safe by storing it on Git.

Initialize the git repository from the root Rails directory (this can be done within the console of your local development machine).

```
> git init
```

Add the following to the `.gitignore` file:

```
/.vagrant 	#this contains your local vm box info which is not needed by the team
```

<!-- #REST#END -->
