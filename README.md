# sitepack
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

## Can I use it as a static site generator?
Yes.

## Features
- Powered by webpack, you can add [loaders](https://webpack.github.io/docs/list-of-loaders.html) like Typescript, Babel, Jade, React, Sass, Less, Post CSS, Markdown, ...
- Support [CSS Modules](https://github.com/css-modules/css-modules).
- Lazy load page content **and style**.
- Use [router5](http://router5.github.io/) for client side routing, you can control whether a page can be navigate or not.
- Pre-rendered for SEO.

## Setting started
Choose a boilerplate to start with
- [ES5 boilerplate](https://github.com/sitepack/es5-boilerplate)
