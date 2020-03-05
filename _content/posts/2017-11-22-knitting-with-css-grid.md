---
title: Knitting with CSS Grid
author: csteinert
date: '2017-11-22T04:00:00.000Z'
path: '/2017/11/22/knitting-with-css-grid'
image: 'https://farm8.staticflickr.com/7044/6917298081_2bb22acf16_z.jpg'
---

As the weather turns colder here in Columbus, I have returned to my default
state: hermit crafter. Knitting is my go-to crafty pastime, and it tends to
seep into other aspects of my life as well, including my day job as a UX
Developer. Knitting concepts [helped me take my first steps into JavaScript](https://www.slideshare.net/csteinert1/javasocks) a few years ago. In this post,
I'm going to talk about how recreating a knit blanket in HTML and CSS helped me
get hands-on experience with the new CSS Grid Layout.

## The Grid

The new [CSS Grid Layout module](https://www.w3.org/TR/css3-grid-layout/) was
something that blew me away when I first heard Eric Meyer speak about it in
2013, long before it was a reality.
Four years later, it's alive and available in [(nearly) every browser](https://caniuse.com/#search=grid)!

In order to get up to speed with this new, complex specification I've been doing
two things: watching every single video on [Grid by Example](https://gridbyexample.com/learn/)
and working through [Grid Garden](cssgridgarden.com) multiple times. It was during
a play-through of Grid Garden that I found myself wondering: can I recreate
my favorite knit blanket with this new functionality?

## The Blanket

[The Blanket](https://www.flickr.com/photos/28849428@N03/albums/72157624639465736)
in question is made up of 25 multi-color squares, joined together by black strips
in a _grid_ pattern.

![The Blanket](https://farm8.staticflickr.com/7044/6917298081_2bb22acf16_z.jpg)

To achieve that kind of layout is ridiculously easy with CSS Grid. It only
requires the following three lines of code, placed on a parent element:

```
display: grid;
grid-gap: 1vw;
grid-template: repeat(5, 1fr) / repeat(5, 1fr);
```

First, I tell the element to display as a grid, which initializes all the
goodies that come along with this specification. Next, I set up the spacing
using `grid-gap`, which is shorthand for the gaps between columns _and_ rows.
The best part is that `grid-gap` only applies the gap to the spaces _between_
rows/columns. No more setting margins only to remove them from certain elements!
Last, I use `grid-template` to tell the grid how many "tracks" I want it to
have. In this case, I'm using shorthand to say I want five columns and five
rows, each of which are a [flexible length](https://www.w3.org/TR/css3-grid-layout/#fr-unit)
of space. Both the `fr` unit and the [repeat notation](https://www.w3.org/TR/css3-grid-layout/#funcdef-repeat)
are new to CSS, and both are tied directly to grid and can't be used elsewhere.

So that seems straightforward enough; slap a border on it and you're good to go,
right? Not quite. The real work is just about to begin. Not only is the blanket
a grid of 25 squares, but the squares themselves have grids in them, too!

## The Log Cabin Pattern

![Knit log cabin blanket square, showing color gradiation from the center outward in a counter-clockwise direction](https://farm5.staticflickr.com/4567/38390682882_b6825d3de9_z.jpg)

Each square in this quilt uses what's known as a "log cabin" pattern. I started
by knitting a small rectangle, and then turned it 90 degrees to add
subsequent rectangles around the outside edges. This [Craftsy article](https://www.craftsy.com/blog/2014/06/log-cabin-knitting-tutorial/)
has some great photos that show how this construction method works. The yarn I
used to make the squares changes colors gradually, which makes it possible to
see the order in which the rectangles were added.

![Knit log cabin blanket square with numbers showing the order in which the sections were knit](https://farm5.staticflickr.com/4575/38414998926_d434047620_z.jpg)

## The Markup

I used [Codepen](http://codepen.io), my favorite front-end sandbox and online
developer community, for this particular project. [You can see (and fork!) the
code here](https://codepen.io/csteinert/pen/aVBXjB/). I love how quickly I can
spin up an environment in Codepen, especially when it comes to CSS preprocessors.
In the case of this example, I set my preprocessor to SCSS.

See the Pen [Log Cabin Blanket Grid Layout](https://codepen.io/csteinert/pen/aVBXjB/) by Caitlin Steinert [@csteinert](https://codepen.io/csteinert) on [CodePen](https://codepen.io).


I started by counting the number of rectangles that made up each square (there
are nine), and created that number of `div` elements. In this pattern, the
center is a rectangle instead of a square. That was important to keep in mind
as I was setting up my grid template. To achieve columns and rows that mimic
this...

![Knit log cabin blanket square with lines demarcating the columns and rows.](https://farm5.staticflickr.com/4560/38390668612_895a1feeaa_z.jpg)

...I used the following CSS:

```
grid-template: 1fr 1fr 4fr 1fr 1fr / 1fr 1fr 2fr 1fr 1fr;
```

The `grid-template` shorthand allows us to set the number of columns and rows
_and_ their widths in one declaration. The rows are first, and the browser knows
that there are five of them because I declared five different widths. The third
row is 4 times as tall as the others (thus, `4fr`). Same idea with the columns,
where the third column is twice as wide as the others (`2fr`).

Now all that's left is to position the grid items accordingly! The tricky part
with this pattern is that the strips get progressively wider/taller as they are
added. Only the first two items exist within one column and row. All the other
items span at least two rows or columns.

I am able to achieve this kind of overlapping pattern by using the `span`
notation. In combination with the shorthand declarations `grid-column` and
`grid-row`, span allows me to tell an item where to begin _and_ how far to
extend. For example, in the following snippet, I'm telling this element to
exist in the fourth column and span from the beginning of row three to the end
of row five.

```
.four {
  grid-column: 4;
  grid-row: 3 / span 2;
}
```

Once each piece of the pattern has the correct location assigned to it, the
blanket is complete!

## Conclusion

While this is not an example of a layout that I'd be able to use anywhere else,
it was a fun and challenging way to sharpen my grid-writing skills. I learned
more about `span` notation in grid and discovered shorthand properties that I
didn't already know about.

I also played around with other cool concepts
outside of the grid spec in this exercise. Check my code for some fun tricks
involving the `vw` unit to maintain aspect ratio based on browser size, a cool
SCSS mixin that assigns different colors to each square inspired by [a blog
post by Pankaj Parashar](http://pankajparashar.com/posts/random-colors-sass/),
and the fun `content: attr(class)` property that I used to help me keep track
of where my pattern squares were as I was setting them up on the grid.

I had a lot of fun working on this experiment, and I look forward to hearing
feedback on it. Hit me up on [Twitter](http://twitter.com/csteinert),
[Codepen](https://codepen.io/csteinert/), or here in the comments. Thanks for
reading!
