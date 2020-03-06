---
title: Karma + Circle CI
author: zbrown
date: "2013-10-18T04:00:00.000Z"
path: "/2013/10/18/karma-tests-circle-ci"
---

**Update:** I recently discovered a much smarter way to be doing this. Here it
is:

```
checkout:
  post:
    - cd angular && npm install
    - cd angular && bower install
    - nohup bash -c "cd angular && grunt server --force &"

test:
  override:
    - bundle exec rspec spec
    - cd angular && grunt karma:unit
    - cd angular && grunt karma:e2e
```

[Circle CI](http://circleci.com) is an awesome, affordable continuous
integration solution. I am currently using it in an Angular + Rails project,
scaffolded with Yeoman, following a workflow similar to
[this](http://jeff.konowit.ch/posts/yeoman-rails-angular/).

Here's the problem I ran into: Circle was automatically recognizing and running
my rspec tests, but not my angular app's (located at rails_root/angular) karma
tests.

## Circle.yml

Boom. The npm/bower package management is a little time-consuming, but this runs
both my rspec and karma tests.

```
test:
  pre:
    - npm install -g karma
    - npm install -g bower
    - bower install --config.cwd=./angular --config.directory=./app/bower_components
  override:
    - bundle exec rspec spec
    - karma start ./angular/karma.conf.js --single-run
```