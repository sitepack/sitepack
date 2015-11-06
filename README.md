# Sitepack
A framework for building lazymorphic applications.


## What is [lazymorphic applications](https://blog.andyet.com/2015/05/18/lazymorphic-apps-bringing-back-static-web)?
tl;dr
> Pre-rendered Single Page Applications.


## Why lazymorphic?
Static + SPA + SEO.


## Why not Universal/Isomorphic?
- Code is hard to maintain. You have to consider server side (eg. use isomorphic-fetch for ajax), and add lots of code to deal with it.
- Run a nodejs server is not simple, more cost, more issues, more uncertainties.
- Cache is hard.


## Features
- Tiny: `sitepack.min.js` is only 4.21 kB.
- Powered by [webpack](https://webpack.github.io/), you can add [loaders](https://webpack.github.io/docs/list-of-loaders.html) like Typescript, Babel, Jade, React, SASS, LESS, Post CSS, Markdown, ...
- Support [CSS Modules](https://github.com/css-modules/css-modules).
- Lazy load page content **and style** (critical-path CSS!).
- Use [router5](http://router5.github.io/) for client side routing, you can control whether a page can be navigate or not.
- Pre-rendered at build time (only public pages).


## Can I use it as a static site generator?
Yes.


## Getting started
Choose a boilerplate to start with
- [ES5 boilerplate](https://github.com/sitepack/es5-boilerplate)
- [ES2015 Babel boilerplate](https://github.com/sitepack/es2015-babel-boilerplate)


## Project status
Sitepack is currently in the beta stage. However this project let you fully control everything, so just hack into it!


## License
The MIT License.
