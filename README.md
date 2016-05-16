base2.io
====================

## Development

Assuming you have Ruby installed, run the following commands:

```
$ bundle install
$ bundle exec jekyll serve -w
```

That should make the site available on http://localhost:4000.

## Deployment

Assuming you have [surge setup](https://surge.sh/), run the following commands:

```
$ jekyll build
$ surge _site/
```

Voilà!
