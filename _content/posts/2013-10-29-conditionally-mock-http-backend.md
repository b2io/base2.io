---
title: Conditionally Mock $httpBackend
author: zbrown
date: "2013-10-29T04:00:00.000Z"
path: "/2013/10/29/conditionally-mock-http-backend"
---

I recently followed
[this awesome blog post](http://blogs.burnsidedigital.com/2013/09/and-httpbackend-mock-for-all-unit-e2e-testings/)
to mock $httpBackend for my end-to-end tests. The problem I immediately ran into
is that, while mock data is fine for my e2e tests, I want to connect to a local
backend when developing and get real data.

## Conditionally inject e2e-mocks

The Burnside Digital blog post suggests including the following script in your
application's index.html.

```
'use strict';
 
angular.module('e2e-mocks', ['ngMockE2E'])
.run(function($httpBackend) {
    // Do your mock
    var baseApiUrl = 'http://localhost:19357/api/v1/';
    var axelStudent = {
        Education: [{...}],
        Person: {...}
    };
    var femaleStudent = {
        Education: [{...}],
        Person: {...}
    };
    $httpBackend.whenGET(baseApiUrl + 'students/?searchString=axe&amp;')
        .respond([axelStudent, femaleStudent]);
 
    // Don't mock the html views
    $httpBackend.whenGET(/views\/\w+.*/).passThrough();
 
    // For everything else, don't mock
    $httpBackend.whenGET(/^\w+.*/).passThrough();
    $httpBackend.whenPOST(/^\w+.*/).passThrough();
  });
 
angular.module('SuperApp').requires.push('e2e-mocks');
```

Karma's end-to-end tests open your application in an iFrame. To conditionally
inject the mocked $httpBackend, we can check to see if we are in an iFrame and
only include e2e-mocks if we are.

```
'use strict';
 
angular.module('e2e-mocks', ['ngMockE2E'])
.run(function($httpBackend) {
    // Do your mock
    var baseApiUrl = 'http://localhost:19357/api/v1/';
    var axelStudent = {
        Education: [{...}],
        Person: {...}
    };
    var femaleStudent = {
        Education: [{...}],
        Person: {...}
    };
    $httpBackend.whenGET(baseApiUrl + 'students/?searchString=axe&amp;')
        .respond([axelStudent, femaleStudent]);
 
    // Don't mock the html views
    $httpBackend.whenGET(/views\/\w+.*/).passThrough();
 
    // For everything else, don't mock
    $httpBackend.whenGET(/^\w+.*/).passThrough();
    $httpBackend.whenPOST(/^\w+.*/).passThrough();
  });

//Check to see if we're not at the top. If we're not, this is an iFrame, go ahead and inject the mocks.  
if ( window.self !== window.top ) {
  angular.module('SuperApp').requires.push('e2e-mocks');
}
```

Now, when developing, you can work with your development server and when testing
you can use mocked data.
