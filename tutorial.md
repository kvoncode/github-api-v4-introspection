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

E.g.

Creating **Styled** component `StyledTitle` in `Header.jsx`

```
const StyledTitle = styled.h1`
  color: #ec8c26;
  margin: 3rem;
  font-family: "Josefin Sans", sans-serif;
`;
```

Then using it to build **View** `Header` component

```
export const Header = () => {
  return (
    <div>
      <Head>
        ...
      </Head>
      <StyledTitle>{title}</StyledTitle>
      <StyledInstruction>{text}</StyledInstruction>
    </div>
  );
};
```

Then finally using `Header` in **Logic** layer component `Main`

```
const Main = () => {
...
    <StyledMain>
      <Header></Header>
        ...
    </StyledMain>
  );
};
```

## Making Graphql request

To make Graphql request to Github API we need to generate token. Without this token we will receive `401 Not Authorized` error.

To make request itself we use `Apollo Client` in `makeRequest.js` file

`makeRequest` function gets token as an argument and returning result of `client.query` which is a `Promise`

```
export const makeRequest = ({ token }) => {

... // creating client and middleware

return client.query({
    query: gql`

      ...// graphql query

    `
  });
};
```

So basic `Apollo CLient` is created with `new ApolloClient`, and passed Apollo middleware called `Links` and cache that is required and cannot be omitted

First we create http link, which contains our api endpoint address and `node-fetch`, then authorization link is created, which setting `Authorization` field in HTTP request to our token

```
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : ""
      }
    };
  });
```

## State and local storage

### State

First we create state variable with `useState`

```
const [token, setToken] = useState(msg);
```

later it's connected to the `input` element with

```
<TokenForm controls={{ token, handleChange, handleClick }}>
```

When typing to `input` element `token` variable are changed with

```
  const handleChange = e => {
    const token = e.target.value;
    setToken(token);
  };
```

### Local storage

When the page first loaded we want to check out local storage for previously valid tokens
```
  useEffect(() => {
    setToken(localStorage.getItem("token") || msg);
  }, []);
```

`useEffect` called once because second parameter are empty array `[]`, which tells React that our **effect** not dependent on anything, correspondingly never will be updated

Only when request button are clicked and request are successful, we save token to the `localStorage`
```
  const handleClick = () => {
    makeRequest({ token })
      .then(result => {
        console.log("Response from server", result);
        setResponse(true);
        localStorage.setItem("token", token); // <--------
      })
      .catch(() => {
        setResponse(false);
      });
  };
``` 

## Conslusion

This is the basics of app. All other things are CSS styles or control flow code 