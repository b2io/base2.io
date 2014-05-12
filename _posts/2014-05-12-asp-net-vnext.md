---
layout: post
title: ASP.NET vNext TL;DR
tags: [ASP.NET, Microsoft]
author: tborres
comments: true
---

Scott Hanselman just wrote a blog entry about what's next for ASP.NET (vNext). The [article](http://www.hanselman.com/blog/IntroducingASPNETVNext.aspx) has pretty pictures and is worth a read, but if you're too busy to read it here are the things that stood out to me.

<!-- #REST#BEGIN -->

* `packages.config`, `nuspec`, and project files (`csproj`) merged into a unified view of project dependencies expressed as `project.json`
* The ability to patch open source libraries with a simple override folder
* “No-compile compile” - i.e. The ability to update a C# class and refresh the browser to see the change without needing to recompile the project
* ASP.NET MVC and Web API unified into a single programming model
* Dependency injection out of the box
 
<!-- #REST#END -->