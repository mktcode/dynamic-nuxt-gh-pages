# Dynamic Routes with GitHub Pages and Nuxt.js

[Demo](https://mktcode.github.io/dynamic-nuxt-gh-pages/post/my-post-title)

Last part of the path is dynamic.

## How it works

There's a [`404.html` in the `static`](/static/404.html) directoy. It will redirect all requests to the GitHub Page to its base path and pass the original request with the redirect (after `#!` like hash-based routing). A [router middleware](/middleware/gh-pages-dynamic-routes.js) then tries to resolve that original request and performs a nuxt-internal redirect, which updates your browser's address bar, via the [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API). (The middle ware needs to be added in [`nuxt.config.js`](/nuxt.config.js))

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static site
$ npm run generate

# deploy static site as GitHub Page (pushes dist directory to gh-pages branch)
$ npm run deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
