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


## Setting started
Choose a boilerplate to start with
- [ES5 boilerplate](https://github.com/sitepack/es5-boilerplate)


## Guide

#### Add some tags into &lt;head&gt;, change default title
Edit `./base/html.js`.

#### Modify layout
Edit `./base/layout.js`.

#### Add a new page
1. Add routes by editing `./config/route.js`.
2. Create `./pages/{route.name}/index.js`.
3. Each `./pages/{route.name}/index.js` should export `render` function that returns `html string` when doing pre-render (`null` to skip pre-render), returns `html string` or `DOM element` when running in browser (`null` to skip render).
4. `canActivate` and `canDeactivate` are optional.

#### Get router logs (for debugging)
In `./index.js`, uncomment `router.usePlugin(Router5.loggerPlugin())`.

#### Add css preprocessor loaders to support SASS, LESS
Edit `./webpack/style-loaders.js`.

#### Enable CSS Modules, add css post processor loader.
Edit `./webpack/style-loaders.js`.

#### Add non css related loaders such as babel-lodader, jade-loader
Edit `./webpack/config.base.js`.


## What happen during build time?
1. Delete `./dist`.
2. Build bundles, extract styles to .css file, this also makes code able to run in node context.
3. Render pages to .html files by calling `{page}.render()`.
4. Build bundles again without extracting styles (layz load style will work).
5. Clean up, delete unused files.


## Project status
Sitepack is currently in the beta stage. However this project let you fully control everything, so just hack into it!


## License
The MIT License.
