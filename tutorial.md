# Tutorial

## Installation

Application built with `Next.js`, `styled-components` and `Apollo GraphQL Client` 

First of all installing `Next.js`

```
yarn add next react react-dom
```

and adding `Next.js` scripts to the `packages.json`

```
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

With this we are ready to build some pages

`Next.js` automatically mapping files in `pages` folder to corresponding route. For example `pages/index.js` is out root page on `/` and `pages/about` are routed to `/about` 

Also we don't need to use `ReactDOM.render` method, all we need is to `export default` React component from `js` file in `pages` folder. E.g.  

```
export default Main;
```

## Architecture

One of the most useful code organizations when using React, is separating **View** components and **Logic** components

- Your **View** component doesn't have any state, `if` statements or logical operators. All it do is **getting** props and displaying it, maybe displaying some static text.

- **Logic** handling state and logic, and using **View** component to display data

When following this pattern your code is separated and compact, without it you will end up with very big component, which have intermingled dependencies between **state** and **view**. This dependencies creating unnecessary complication

We can go further and add another layer called **Styled**. It is basically styled components created with `styled-components`. So beginning from most basic to more complex component, we can use component **composition** like this: `Styled -> View -> Logic`