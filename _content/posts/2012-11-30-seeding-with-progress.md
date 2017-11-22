---
layout: post
title: Seeding with progress
tags: [ruby, rails, seed]
author: dmiller
comments: true
---

If you're doing database seeding in a rails app through `seeds.rb` you might be interested in this snippet, especially if you're
using CSV files to help you do it.

<!-- #REST#BEGIN -->

### Mo Rows, Mo Problems

A couple of our recent projects have had rather large CSV files that need to be seeded. Running a `rake db:seed` command
takes an agonizing couple of minutes (several of the files have tens of thousands of rows). To help soothe our neurotic impulses
to kill the process midway through we decided to have a bit of fun sprucing up the console feedback while the seeding
is underway.

We started out with a simple `puts "Seeding Models..."`, but that really doesn't tell you anything about how many more models
need to be seeded. We decided to take a page out of the UNIX playbook and give the user a bit more information.

### The UNIX way

There's a nifty utility named `wget` in UNIX that will let you download things given a URL. It gives you a nice visual
representation of the progress in the console using a text-based progress bar that looks like this:

    vagrant@lucid64:~$ wget https://www.google.com/images/srpr/logo3w.png
    --2012-12-01 04:59:29--  https://www.google.com/images/srpr/logo3w.png
    Resolving www.google.com... 173.194.75.99, 173.194.75.147, 173.194.75.106, ...
    Connecting to www.google.com|173.194.75.99|:443... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 7007 (6.8K) [image/png]
    Saving to: `logo3w.png'

    100%[=========================================================================>] 7,007       --.-K/s   in 0.007s

    2012-12-01 04:59:29 (958 KB/s) - `logo3w.png' saved [7007/7007]

With a bit of digging, we found the `\r` special character for the `print` method, which allows you to do some UNIX-style magic in
updating what you've already printed to the console. The `\r` character will clear the current line of the display in the console.

<script src="https://gist.github.com/4179185.js?file=genre.rb"></script>

<script src="https://gist.github.com/4179185.js?file=genres.csv"></script>

<script src="https://gist.github.com/4179185.js?file=seeds.rb"></script>

Running a `rake db:seed` will now give you live progress updates:

    vagrant@lucid64:/vagrant$ rake db:seed
    Seeding Genre:
    100.00% [=====================================================================>]

Ah, much better!

<!-- #REST#END -->
