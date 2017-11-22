---
layout: post
title: Using Heroku Multi Build Packs to Deploy a Yeoman/Bower/Grunt Application on Rails
tags: [heroku, yeoman, bower, grunt, ruby, rails, javascript]
author: zbrown
comments: true
---

At Base Two, we expect our developers be familiar working with multiple layers of the web stack. Many of us got our feet wet building Rails applications and have recently been having a lot of fun building single page javascript and mobile applications with [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/) and [Bower](http://www.bower.io).

<!-- #REST#BEGIN -->

### Thick Client === Happy Clients

First some background on us. We are a technology company that builds web, mobile, desktop and embedded solutions for clients big and small. We have worked to get our startup clients from the incubator to [seed-stage funding](http://techcrunch.com/2014/01/29/cincinnati-startup-sqrl-raises-550k-and-launches-document-reminder-service/) and have helped our large corporate clients like [AEP](http://www.aep.com) communicate better by converting processes typically carried out in excel spreadsheet into rich web experiences (and on Internet Explorer 8, no less!).

When we first began our work with AEP, we had just been contracted to do some shadow IT for one of the company's business units. Our first question in our first meeting was, "We know you do a lot of .NET here, but would you mind if we gave Ruby on Rails a go?". It should have been a red flag that there were no internal IT representatives in the room, but we weren't about to look a gift horse in the mouth. The business unit signed off on our project and gave us the go-ahead to write a Rails application.

We decided that -- given the project's requirements -- a thick javascript client with a Rails JSON API made a lot of sense. We were comfortable developing BDD Rails applications quickly and felt like a clear separation of the front and back-end would allow developers to work better in parallel.

Three months later, when our client's IT department stepped in to mandate that the project be completed in .NET, we had a single page javascript application and knew what the JSON endpoints were supposed to look like. Over the next 6 months, we swapped the Rails services for .NET and continued adding features to our thick client application. All of this to say, thick clients + JSON APIs are a really flexible way to do development and, while they aren't the answer to every problem, they rock, we have fun building them and in this particular case, they saved our client a lot of time and money.

### Automating Front-end Workflow

Last fall, I viewed a slide deck from [Addy Osmani](https://twitter.com/addyosmani) that completely blew my mind. The name of that deck was ["Automating Front-end Workflow"](https://speakerdeck.com/addyosmani/automating-front-end-workflow), and it has completely changed the way I do development.

In particular, we have adopted [Yeoman](http://yeoman.io/) for scaffolding new applications, [Grunt](http://gruntjs.com/) for automating tasks (minifying scripts, compiling SASS and Coffeescript, running static code analysis, unit and end to end tests, and even removing unused CSS rules) and [Bower](http://www.bower.io) for managing dependencies. Scaffolding, previewing, testing and building a new [AngularJS](http://angularjs.org/) with Yeoman is as simple as:

<script src="https://gist.github.com/ztbrown/9549171.js"></script>

At this point, if we wanted, we could begin test-driving the front-end with mock services while another developer begins writing Rails/PHP/.NET/Go/etc.   

### Build Artifacts in Version Control !== Best Practice

So, here's where the dream died a little for me. We use Heroku for hosting our Rails applications and deploy to Heroku with Git. When Heroku receives the push, it recognizes and builds our Rails application just fine, but does nothing to the subdirectory containing our javascript application.

Our build workflow looked like this:

* After merging changes into `master` checkout new branch called `build`
* Run `grunt build` (target is `./public` in the Rails root directory)
* Commit changes
* Push to remote
* Issue pull request to `master`
* Merge changes
* Push `master` to Heroku

I get worn out just reading that list.

If the threat of extra work isn't compelling enough to convince you that this isn't the right way to be doing things, how about this: build artifacts simply do not belong in source control. If only Heroku could recognize our Rails application and also know to fetch our front-end dependencies and run our Grunt tasks.  

### Automating Multiple Builds on Heroku

I'd like to say that I got fed up with the above build process and went searching for a better way, but that would be--at best--a half-truth. A few months ago, we got an email from an Advocate at Heroku named Christopher Lauer asking if he could chat with us about ways to improve our Heroku experience. I had no idea they did this kind of thing and was thrilled to get a forum to ask questions about the platform.

This is where Christopher turned me on to the idea of using multiple build packs. I had no idea what buildpacks were, so I started poking around. From the documentation:

>When you `git push heroku`, Heroku’s slug compiler prepares your code for execution by the Heroku dyno manager. At the heart of the slug compiler is a collection of scripts called a buildpack.

Ok, so buildpacks are the steps Heroku uses to build my application once it recognizes that I'm using Ruby/Node/etc. So how do I tell Heroku that it should stop trying to recognize my environment and instead let me call the shots? It's a simple environment variable. So, if I want Heroku to look for a Ruby/Rails application, I would configure it to use the ruby buildpack:

<script src="https://gist.github.com/ztbrown/9549245.js"></script>

If, instead, I would like it to run a package.json and install dependencies like Compass and Grunt, I would configure it like this:

<script src="https://gist.github.com/ztbrown/9549263.js"></script>

But this doesn't yet solve my problem. Enter, multi build packs.

<script src="https://gist.github.com/ztbrown/9549269.js"></script>

Now, when you push to Heroku, the service will first look for a package.json and Gruntfile in the root (I point the Gruntfile to the Gruntfile in my subdirectory with grunt-hub) before bundling and spinning up a Rails server.

### Wrapping up

```sh
$ git rm -rf /public
```
Removing my build artifacts from Github was a triumphant moment. Concurrently developing for the front and back-end feels humane.

I'm sure that there were likely some holes in this document and more than a few logical jumps. I'll keep an eye on the comments and plan on linking a few resources below.

* [Buildpack Documentation](https://devcenter.heroku.com/articles/buildpacks)
* [Heroku Multi Build Pack](https://github.com/ddollar/heroku-buildpack-multi)
* [Angular + Rails + Yeoman = Angrailman?](http://jeff.konowit.ch/posts/yeoman-rails-angular/) - the directory structure we chose for combining Rails and Angular

<!-- #REST#END -->
