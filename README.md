# STARTER-team00

Instructions: <https://ucsb-cs156.github.io/s23/lab/team00.html>

This repo is a cousin of demo-spring-react-example

It was produced by starting with demo-spring-react-example, removing all of the
Spring Boot backend code, leaving only a React app, and then adapting that
React app so that it would run on GitHub pages, using the techniques
described in this repo:

* <https://github.com/gitname/react-gh-pages>

A pure React app has no backend, so it can only compute using what the user types in
or uploads, and storage is limited.  

One kind of storage it can use is "local storage", which is a key/value store that is
located on the client machine, and associated with a specific browser (it is not
shared across browsers.)

# Storybook

Storybook is here:
* Production: <https://ucsb-cs156.github.io/demo-react-example-docs/>
* QA:  <https://ucsb-cs156.github.io/demo-react-example-docs-qa/>

The GitHub actions script to deploy the Storybook to QA requires some configuration; see [docs/github-actions.md](docs/github-actions.md) for details.

If these repos are not yet setup, see the setup steps in [`docs/storybook.md`](docs/storybook.md).


# Getting Started on localhost

```
cd frontend
npm install  # only on first run or when dependencies change
npm start
```

Then, the app should be available on <http://localhost:3000>


# Getting Started on GitHub Pages

Edit the `frontend/package.json` file to change this entry:

```
  "homepage": "https://ucsb-cs156.github.io/demo-react-example",
```


# To run React Storybook

* cd into frontend
* use: npm run storybook
* This should put the storybook on http://localhost:6006
* Additional stories are added under frontend/src/stories

* For documentation on React Storybook, see: https://storybook.js.org/

