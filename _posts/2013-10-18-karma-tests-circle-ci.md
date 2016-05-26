---
layout: post
title: Karma + Circle CI
tags: [CircleCI, angular, yeoman, rspec, karma, javascript, tdd]
author: zbrown
comments: true
---
**Update:**
I recently discovered a much smarter way to be doing this. Here it is:
<script src="https://gist.github.com/ztbrown/7215433.js"></script>

[Circle CI](http://circleci.com) is an awesome, affordable continuous integration solution. I am currently using it in an Angular + Rails project, scaffolded with Yeoman, following a workflow similar to [this](http://jeff.konowit.ch/posts/yeoman-rails-angular/).

Here's the problem I ran into: Circle was automatically recognizing and running my rspec tests, but not my angular app's (located at rails_root/angular) karma tests.

<!-- #REST#BEGIN -->

### Circle.yml

Boom. The npm/bower package management is a little time-consuming, but this runs both my rspec and karma tests.

<script src="https://gist.github.com/ztbrown/7043015.js"></script>

<!-- #REST#END -->
