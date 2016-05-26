---
layout: post
title: Wireframes for Developers
tags: [wireframe, wireframes, wireframing]
author: tborres
comments: true
---

Wireframes are a great way to visually communicate the expected user behavior of an application to your team and your client. So, is this post for an information architect to better understand what developers are looking for, or for developers wanting to create wireframes for their clients? Well, the answer is both.

<!-- #REST#BEGIN -->
On smaller teams, where the developer is the one gathering the requirements, wireframes can help to demonstrate to the client that the team understands the overall solution. Wireframes also can save everybody a lot of time by identifying usability issues upfront - before the application is coded.

Larger teams may have a dedicated information architect who acts as a liaison between the client and the development team. In this case the wireframes are the primary artifact for the developers to understand the requirements of the application. Therefore it is important that the edge cases that developers look for are accounted for in the wireframes.

### Know Your Tool

There are a lot of good wireframing tools available online. The one we use is [Balsamiq Mockups](http://balsamiq.com/products/mockups/). It is reasonably priced, easy to use, and contains the basic functionality needed to create wireframes without a lot of extra fluff. Depending on your teams needs this tool may or may not work for you. Regardless of your wireframing tool, I recommend that you take some time to learn your tool.

* Shortcuts - Does the application have shortcuts that will help you wireframe with ease?
* Templating - Is there a way to template common items so that changes can be made in one place rather than copying and pasting?
* Presentation - How can the final wireframes be demonstrated? Export to pdf, png, or live presentation mode?

### Know Your Resolution

Are you creating a website, desktop app, or mobile app? Your wireframes should be sized based on the lowest resolution the application will support. If you are targeting multiple platforms then it will be necessary to create different sets of wireframes. For instance, you may need to have a set that is based on a mobile device, and another set at 1024x768 for a web browser.

### Data Matters

In most cases lorem ipsum is not going to cut it. Developers may not read your annotations (and they probably won’t), but they will expect the data on the screen to be consistent. Your example data and wireframes should tell a story. If you show John Doe selected in a list then John Doe should be selected in the detail view as well. Also, you shouldn’t simply copy and paste a bunch on “John Doe” items to populate the list. Doing this could lead the developer to think that each person should be listed multiple times.

To make example data easier and more fun to create go out to [imdb](http://www.imdb.com/) and use the cast of one of your favorite shows. It’s especially helpful if you use a tv show or movie that works with your type of application. For instance, if the application is for a business then *Mad Men* may work. A To-do app could be *Breaking Bad*. However, be aware that your show selection may say more about yourself then you care to share, and not all shows are client-safe.

### Think Like a User

The most important player in this game is the user. So it’s important to think like one. Mentally navigate the application like a user. Log in, go to the home screen, and think “What do I want to do now?”. You can get all of the client’s features in the application, but if the user doesn’t know how to intuitively navigate to those features it’s a loss cause.

### Think Like a Developer

Developers think in edge cases. They don’t question if the glass is half full or half empty - they ask, “What if there is no glass? What if there is no table for the glass to sit on?”. It’s important to show the happy path in your wireframes so that everybody knows how it works, but it’s also important to show how the application should react when things go wrong. What happens if required data is not entered, the user forgets his or her password, or there are no results to show in a list?

### Think Like an Application

Unlike your wireframes, the application you’re designing is not static. The screen size may be different, and the result list may be large or small. Your wireframes should visually describe how the application should adjust to handle these differences. Where can scrolling occur? Do certain portions of the screen stretch as more space is available? Should text truncate with an ellipsis when it is too long to fit?

<!-- #REST#END -->
