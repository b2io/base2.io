---
title: Aurelia Async Routing
author: rdunkle
date: "2018-05-03T04:00:00.000Z"
path: "/2018/05/03/aurelia-async-routing"
---

One of our biggest projects right now has an [Aurelia](https://aurelia.io/) front-end, which (among other things) sends automated emails to users with links that point to file revisions.

We had an issue where, by the time the user opened the link, it was possible that a different user had already created a new revision. We wanted the links that we were sending in our emails to always point to the latest revision.

The URI for our revisions is `/revisions/:id`. We decided to change the URI that we were sending in our emails to instead point to the file's ID, `/files/:id`, and then we'd lookup the latest revision ID and reroute them. Rather than creating a component for that endpoint to handle the async call and rerouting, we wanted to use Aurelia's router.

We set up our routing map to use the dynamic routing [navigationStrategy](http://aurelia.io/docs/routing/configuration#dynamically-specify-route-components):

```js
config.map([
  {
    route: ['revisions/:id'],
    name: 'edit',
    moduleId: './components/edit-revision/edit-revision',
    title: 'Edit',
  },
  {
    route: ['files/:id'],
    name: 'latest',
    navigationStrategy: redirectToLatestRevision,
  },
]);
```

First, I tried making an async call and setting the navigation `instruction` within it. It didn't work:

```js
// THIS DOESN'T WORK
const redirectToLatestRevision = instruction => {
  const fileId = instruction.params.id;
  this.fileService
    .getLatestRevisionId(fileId)
    .then(revisionId => {
      instruction.config.redirect = `revisions/${revisionId}`;
    })
    .catch(() => {
      instruction.config.redirect = 'home';
    });
};
```

I get a console error: `Cannot read property 'trim' of undefined`. The documentation says, "within the navigation strategy Aurelia requires you to configure `instruction.config` with the desired `moduleId`, `viewPorts` or `redirect`." It's trying to trim one of those, and isn't waiting on my async call.

I saw that other people had run into this same problem ([1](https://github.com/aurelia-contrib/aurelia-open-id-connect/issues/13), [2](https://github.com/aurelia/router/issues/289#issuecomment-359452023)).

In one of the comments, I saw some code that used `async`/`await` with their functions. I gave that a shot and it worked without any errors:

```js
// THIS WORKS
const redirectToLatestRevision = async instruction => {
  const fileId = instruction.params.id;

  try {
    const revisionId = await this.fileService.getLatestRevisionId(fileId);
    instruction.config.redirect = `revisions/${revisionId}`;
  } catch (err) {
    instruction.config.redirect = 'home';
  }
};
```

We went with the above code, but my first attempt would have worked if I'd added `async`/`await`:

```js
// THIS WORKS TOO
const redirectToLatestRevision = async instruction => {
  const fileId = instruction.params.id;
  await this.fileService
    .getLatestRevisionId(fileId)
    .then(revisionId => {
      instruction.config.redirect = `revisions/${revisionId}`;
    })
    .catch(() => {
      instruction.config.redirect = 'home';
    });
};
```

On a final note, I'll tell you that before I tried `async`/`await` in the `navigationStrategy`, I tried removing the `/files/:id` route from the routing map, and instead leaving the route to be handled it in our [config.mapUnknownRoutes](http://aurelia.io/docs/routing/configuration#handling-unknown-routes) function.

It worked for the async call, because that function is allowed to return a `Promise` which in turn resolves a `RouteConfig` object. It's a worse solution, though, because I had to parse incoming unknown routes and look to see if they were a `/files/:id` route.

I didn't like that I was looking for a known route within our unknown routes handler:

```js
const handleUnknownRoutes = instruction => {
  const homeRedirect = {
    redirect: '',
  };

  // I DON'T RECOMMEND THIS
  const filesExpression = /\/files\/([0-9]*)/;
  const { 1: fileId } = instruction.fragment.match(filesExpression) || [];

  if (fileId) {
    return this.fileService
      .getLatestRevisionId(fileId)
      .then(revisionId => ({
        redirect: `revisions/${revisionId}`,
      })
      .catch(() => homeRedirect);
  }

  return homeRedirect;
};

config.mapUnknownRoutes(handleUnknownRoutes);
```

I'm fine with the `async`/`await` solution, but given that `mapUnknownRoutes` is allowed to receive a `Promise`, it'd be nice if the `navigationStrategy` could do the same.

That's all for now. Hope this helps!
