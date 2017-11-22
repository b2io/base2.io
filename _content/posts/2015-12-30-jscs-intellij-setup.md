---
layout: post
title: Getting Started with JSCS and WebStorm
tags: [code style, javascript, WebStorm, JetBrains]
author: jstevens
comments: true
---

[JSCS](http://jscs.info/) is my new favorite javascript tool. It helps keep all the javascript files looking the way I want it (and my team wants it). You can read more details about it at their site, but for the purposes of this blog post I'm going to show you how to get it setup with [WebStorm](https://www.jetbrains.com/webstorm/) or other [JetBrains](https://www.jetbrains.com/) IDEs.

<!-- #REST#BEGIN -->

### Installing/Setup JSCS

First we need to install JSCS using [nodejs](https://nodejs.org/en/).

```
npm install -g jscs
```

Then we add a jscs config file (.jscsrc) to your project root directory. This is just a .json file. There are many settings you can set in this config file, but there are some convenient [presets](http://jscs.info/overview#presets) for you to use. To keep things simple we're just going to use the [AirBnB preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json). Add this to your .jscsrc file:

```
{
  "preset": "airbnb"
}
```

From here you can setup your build to run your code against these settings. We use [gulp](http://gulpjs.com/) so I'll just show a quick example on how to set that up.

```
var gulp = require('gulp');
var jscs = require('gulp-jscs');

gulp.task('lint', function() {
 return gulp.src('src/**/*.js')
   .pipe(jscs())
   .pipe(jscs.reporter());
});
```

Running `gulp lint` will run jscs and show you if there are any issues.

### WebStorm Settings

Now here's the main part of the post... Get WebStorm setup to format and lint your code based on the jscs config settings. Most of these steps can be done in JetBrain's other IDEs. For example, my screenshots are from IntelliJ, but I'll refer to it as WebStorm for the purposes of this post.

First let's setup WebStorm's javascript JSCS settings so it'll show us the errors in the editor. Open Settings and go to **Languages & Frameworks > Javascript > Code Quality Tools > JSCS**. Then you'll want to enable the checkbox and set the node interpreter and jscs package location. By default JSCS will look for the default config file in the root of your project. You can leave this selected but optionally if you need to select a config file in another location you can do so by selecting the second option. The Code style preset can be set from this window, but we've basically already done that by creating our .jscsrc file and setting the preset as airbnb there.

![JSCS Settings](http://i.imgur.com/k4t5I9M.png)

This should start working once you hit ok and you'll see any format/style issues with your projects javascript files. You can manually clean them up, but I prefer to make my IDE do the work for me. I found a neat way to import your jscs config into WebStorm's code style settings. Lets set that up now.

Open **Settings** and go to **Editor > Code Style > Javascript**. Then select the **Manage...** button.

![Javascript Code Style Settings](http://i.imgur.com/paw2sxV.png)

This will open another window, select **Import**.

![Code Style Schemes](http://i.imgur.com/ttmSNi7.png)

This opens yet another window, select **JSCS config file** and click **OK**

![Scheme Import From](http://i.imgur.com/GVM7N2m.png)

This will open a **Select Path** dialog window. Just find your project's root directory and select the .jscsrc file located in the root. Then click **OK**.

![Select Path](http://i.imgur.com/LmacVz7.png)

You can select to update the scheme you had selected, or create a new scheme. We'll create a new scheme called JSCS. Optionally you could also select a Code Style Preset from this window as well. Last click **OK**.

![Import from JSCS config](http://i.imgur.com/gFJWKTW.png)

Now you can close the **Code Style Schemes** dialog. Your javascript code style settings will be as close as possible to your settings in the .jscs config file. Now for the really cool part, the IDE will try to format your javascript based on these setting as you code. You can also take a whole file or section and run **Reformat Code** (my shortcut is <kbd>opt</kbd> + <kbd>cmd</kbd> + <kbd>L</kbd>) and it will try to clean up that code based on these settings. This is great and will help format your code, but there are some JSCS things this will not fix.

JSCS has the ability to fix a lot of those issues though and you can run the command line

```
jscs /my/project/root --fix
jscs myfilename.js --fix
```

Or WebStorm has an option to fix JSCS issues in line via context menu on the problem area. Here's a visual example of what that looks like:

![Fix JSCS context menu](http://i.imgur.com/cOABQHg.png)

This is a little tricky to get this to popup, but if you click on the red squiggly and look for the red light bulb, you have an option to "Fix the current file with JSCS". This basically does the command line example above, but its a nice in editor feature. After doing this to a few files I was was cleaning up it felt tricky and cumbersome to keep doing it this way and I thought to myself "There must be a shortcut to make this happen?" And so I found one, but you have to manually set it.

### Add JSCS Shortcut

Open Settings and select Keymap. Search for JSCS. Then select the Fix JSCS Problems and push the edit (green pencil) button. I set mine to <kbd>opt</kbd> + <kbd>cmd</kbd> + <kbd>S</kbd> which was unused, but feel free to set it to something else that makes sense to you and/or your team.

![Keymap JSCS Fix shortcut](http://i.imgur.com/DvfLmsi.png)

Now whenever you see JSCS errors just use the shortcut key and it'll clean those babies right up!

<!-- #REST#END -->
