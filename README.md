# Sitepack
A toolkit for building lazymorphic applications.


## What is lazymorphic applications?
Long version:

*[Lazymorphic Apps: Bringing back the static web](https://blog.andyet.com/2015/05/18/lazymorphic-apps-bringing-back-static-web).*

Short version:

*Pre-rendered Static Single Page Applications.*


## Why lazymorphic?

> From the article [Lazymorphic Apps: Bringing back the static web](https://blog.andyet.com/2015/05/18/lazymorphic-apps-bringing-back-static-web/#it-may-not-solve-everything-but-it-sure-works-well-for-most-things):

1. Pixels on the screen immediately
2. Replace front-end servers with a CDN that serves static files, faster delivery, less likely to have downtime.
3. Any known public content is available statically, even without JS.
4. A nice development workflow
5. Totally crawlable public pages
6. JS takes over when downloaded and fills in any dynamic portions we don’t already have.
7. If we use regular &lt;a&gt; tags for navigation, even internal navigation works without JS, but if we do have it, JS intercepts the clicks and navigates internally.
8. Dramatically simplified ops and deployment. You could just deploy with something like [rsync](http://linux.die.net/man/1/rsync). Or use a service like [Surge.sh](http://surge.sh/) or [Divshot](http://divshot.com/) to do it for you.
9. No complex isomorphic application we have to run in production, yet we still get many of the benefits.
10. By nature of the approach we’ve arguably built an app that’s offline-ready, in that it has very clearly cache-able assets and fetches all its data from external sources.
11. We’re already prepared if we want to distribute the app in a wrapper like PhoneGap, Cordova, etc.


## Why not Universal/Isomorphic?
- Universal apps need to run in the Node context, they are hard to build, take more time and effort, and more bugs to deal with.
- Running a Node.js server is not simple, more cost, more (security) issues, more uncertainties.
- Cache is hard.


## Features
- Powered by [webpack](https://webpack.github.io/),
  - You can add [loaders](https://webpack.github.io/docs/list-of-loaders.html) to support Typescript, Babel, Jade, React, SASS, LESS, Post CSS, Markdown, etc.
  - Superb [webpack dev server](https://webpack.github.io/docs/webpack-dev-server.html).
  - Support [CSS Modules](https://github.com/css-modules/css-modules).
- Load route content, scripts **and styles** on demand.
- Client side routing.
- Pre-rendered at build time.


## Getting started
Choose a boilerplate to start with
- [Router5 boilerplate](https://github.com/sitepack/router5-boilerplate)


## Project status
Sitepack is currently in the early stage. However this project let you fully control everything, so just hack into it!


## License
The MIT License.
