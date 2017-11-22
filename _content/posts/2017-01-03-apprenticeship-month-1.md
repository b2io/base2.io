---
layout: post
title: Apprenticeship Month One
tags: [Apprenticeship, Education]
author: rdunkle
comments: true
---

When I started this apprenticeship with Base Two, we knew it would be an experiment for all of us. We've tried different things. I've worked on projects of different scope and size, with different team members, and had a chance to reflect on how things have gone so far.

In this article, I'll briefly review Month One.

<!-- #REST#BEGIN -->

### Setup

Base Two provided me with a MacBook Pro (15-inch, Mid 2012) and a monitor. Previously I was on Ubuntu, so I had to put in some work getting up and running on the Mac. I'm putting together a concise blog post showing my set up.

[Tony](http://base2.io/#team) is my main point of contact during this apprenticeship. We both work remotely from our homes in Pittsburgh, and regularly touch base through video chatting. We occasionally meet up in-person, and on my first day I went to his home office, where he helped me get started on my first project.

### Project 1

The first project I worked on was a marketing page. It was a smaller project, with most of the components and styles in place by the time I joined. Components were built using React, and my first task was to add data flow.

Prior to the apprenticeship I had built out two small web-apps using React and Redux, and I was comfortable with the basic concepts and implementations of the Redux flow. In my personal projects, however, I'd never received feedback on my designs and decisions. I knew how I had done things in the past, but I didn't have any perspective to give me confidence.

Tony was dedicated to a different project, and hadn't done a lot of work in React or Redux, but he still talked through ideas with me, offered advice, and reviewed my code. After deciding to use Redux, he encouraged me to talk through what I would need to do, which helped us create issues in the backlog.

[Chris](http://base2.io/#team), one of Base Two's UX Developers, had been on the project from the start, and I treated him as project lead. I checked in with him, talked over requirements, and we paired on some tasks together.

![Project 1](http://i.imgur.com/AxDbeSq.png "Project 1 screenshot")

We had a particularly good pairing session working on the sliders you can see in the photo. Screen sharing, I showed him how I was using Redux to handle the data, and to track which sliders should be enabled or disabled. After we got that working, he took over and styled the sliders accordingly. It was super productive and fun.

Because neither Chris nor Tony had worked much with Redux, I needed someone to review how I was using Redux, and to call out where I could do things better.

Drew came through big league for me in reviewing my PRs. He read through the majority of my code, and gave me valuable feedback on better ways to structure the app. He called attention to some performance tradeoffs, and gave me advice on designing and shaping the Redux store.

### Review

Perhaps the most interesting aspect of Month One is that Tony and Chris, my two main points of contact this month, could only give me so much guidance. This meant that I spent some time doing things incorrectly until Drew was able to step in. There are also things that Drew might have had me do differently, had we been working together from the start, but which went unsaid or unnoticed because he was only available part of the time.

The perfectionist in me wishes that I had worked more closely with Drew during the first month, but I think his giving me space was for the best. I bumbled through things at times, but it gave him a body of code to review and work with me on, rather than just answering each of my questions as they arose.

Perhaps more importantly, it forced me to not give in to my desire to nitpick and doubt everything I've done. I had to keep moving forward despite doubting myself and my decisions. I see this as an important skill that I need to practice.

Things went better this month than I could have imagined. I had a lot of fun coding, researching, and learning. I get to use all of these tools in Month Two as I start on the largest project I've ever worked on.

----

Do you see things you disagree with, or things I could add or change to make this more helpful? Do you have suggestions from your own apprenticeship program? Do you have questions and want to chat about any of this? Ping me in the comments @rdunkle.
<!-- #REST#END -->
