---
layout: post
title: Autocomplete and the Three Algorithms
tags: [autcomplete, ruby, rails, javascript, api, postgresql, heroku]
author: dmiller
comments: true
---

A lot of our projects have some form of autocomplete functionality baked into them; but recently we had a client ask for something a little more *mistake proof*. A lot of users in this particular application will be searching for something based on the sound of a word and not really know the exact spelling.

In talking over examples of how the new autocomplete should match, the product owner sent us in the direction of a possible solution he'd had some experience with in the past: the Soundex algorithm.

<!-- #REST#BEGIN -->

### This one is too cold

To give a little more context, this particular application is hosted on Heroku and uses a PostgreSQL database for persistent storage. Given that, we started by seeing what PostgreSQL can do for us. As it turns out, it's got support for Soundex [right out of the box](http://www.postgresql.org/docs/8.3/static/fuzzystrmatch.html).

> The Soundex system is a method of matching similar-sounding names by converting them to the same code. It was initially used by the United States Census in 1880, 1900, and 1910. Note that Soundex is not very useful for non-English names.

That might be exactly what another application needed, but we aren't dealing with people's names, we're dealing with brand names. Time to break out our SQL-fu and see how the results hold up.

First things first, you'll need to have the `fuzzystrmatch` module installed on PostgreSQL database. You can do that by dropping into the PSQL console and running: `CREATE EXTENSION fuzzystrmatch;`. Now in a query you can run something a query to get some results:

<script src="https://gist.github.com/9223335.js?file=soundex.sql"></script>

Looking those over for our data-set, we aren't getting at all the results we'd want. Time to start looking at other options…

### This one is too hot

A little farther down [that page of PostgreSQL documentation](http://www.postgresql.org/docs/8.3/static/fuzzystrmatch.html) is the Levenshtein distance algorithm.

> This function calculates the Levenshtein distance between two strings.

That sounds promising, let's give that a try. The Levenshtein function comes packaged in the `fuzzystrmatch` module with Soundex, so no need to go back into the PSQL console, instead we'll start with a query:

<script src="https://gist.github.com/9223335.js?file=levenshtein.sql"></script>

It wasn't immediately clear how Levenstein was sorting the results. But further investigations revealed that output of the function is the *edit distance* between the two strings; which is to say: how many changes you need to make to the get from one string to the other.

Once again, the results from this aren't really what we're looking for, so it's back to the drawing board…

### This one is just right

After a broader search, we came upon the `pg_trgm` module that adds [Trigram similarity](http://www.postgresql.org/docs/8.3/static/pgtrgm.html) to PostgreSQL.

> A trigram is a group of three consecutive characters taken from a string. We can measure the similarity of two strings by counting the number of trigrams they share. This simple idea turns out to be very effective for measuring the similarity of words in many natural languages.

That sounds **much** more promising, let's get to the query and see what results we get. Similar to the other two algorithms, we'll have to add the module to PostgreSQL first by running `CREATE EXTENSION pg_trgm;` in the PSQL console. From there, we can hop back to the query interface:

<script src="https://gist.github.com/9223335.js?file=trigram.sql"></script>

We've got results that match up to our use case. A search for "hazienda" matches first to the brand named "Hacienda", and then to some other sensible results. Perfect!

Now we just need to step back into our Rails API server and get this query running. That should be easy, right?

### The bears came home, and they were upset

Perhaps incorrectly, our first instinct was to try and avoid reinventing the wheel. So we did some searching for reputable gems that wrap the `pg_trgm` module's Trigram search functionality and came across [textacular](https://github.com/textacular/textacular) and [pg_search](https://github.com/Casecommons/pg_search).

If you couldn't tell from the section header, some things went wrong here, but before we get into that let me say that both of these gems are awesome. They've got test coverage, quality metrics, semantic versioning, multiple contributors, etc. In short, they've got all the indicators of healthy, vibrant repositories.

That said, let's talk about what went wrong. Of the two gems, textacular is much more straightforward (though not as feature rich) and has all the functionality we want. The `fuzzy_search` finder it adds is perfect, we should just be able to call from our `Brand` model like `Brand.fuzzy_search(name: 'hazienda').limit(10)` and we should get our Trigram similarity matches.

The catch is, textacular adds in a `WHERE` clause that was incompatible with our use case. The clause they put in makes sure the fuzzy search term is a substring in the column before running the similarity match. This is probably a performance optimization for large tables and complex combination queries, but for our purposes the raw query was fast enough and the substring match killed our ability to catch spelling mistakes.

### Goldilocks made her own porridge

In the end, we decided to roll our own. Following one of the [wonderful model refactoring patterns from Code Climate](http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/) (#4), we extracted it as a query object:

<script src="https://gist.github.com/9223335.js?file=similar_brands_query.rb"></script>

<script src="https://gist.github.com/9223335.js?file=brands_controller.rb"></script>

<!-- #REST#END -->
