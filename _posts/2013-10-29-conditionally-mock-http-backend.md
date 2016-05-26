---
layout: post
title: Conditionally Mock $httpBackend
tags: [angular, yeoman, karma, javascript, tdd]
author: zbrown
comments: true
---
I recently followed [this awesome blog post](http://blogs.burnsidedigital.com/2013/09/and-httpbackend-mock-for-all-unit-e2e-testings/) to mock $httpBackend for my end-to-end tests. The problem I immediately ran into is that, while mock data is fine for my e2e tests, I want to connect to a local backend when developing and get real data.

<!-- #REST#BEGIN -->

### Conditionally inject e2e-mocks

The Burnside Digital blog post suggests including the following script in your application's index.html.

<script src="https://gist.github.com/ztbrown/7215173.js"></script>

Karma's end-to-end tests open your application in an iFrame. To conditionally inject the mocked $httpBackend, we can check to see if we are in an iFrame and only include e2e-mocks if we are.

<script src="https://gist.github.com/ztbrown/7215241.js"></script>

Now, when developing, you can work with your development server and when testing you can use mocked data.

<!-- #REST#END -->
