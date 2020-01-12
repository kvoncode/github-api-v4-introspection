import "normalize.css";
// import "./styles.css";
import styled from "styled-components";

import { useState } from "react";
import { ResponseView } from "../components/ResponseView";

import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import fetch from "node-fetch";

const StyledMain = styled.div`
  min-height: calc(100vh - 100px);
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const url = "https://api.spacex.land/graphql/";

const client = new ApolloClient({
  uri: url,
  fetch: fetch
});

client
  .query({
    query: gql`
      {
        company {
          ceo
        }
      }
    `
  })
  .then(result => console.log(result));

const Main = () => {
  const [token, setToken] = useState("Insert token");

  const handleChange = e => {
    setToken(e.target.value);
  };

  const handleClick = () => {
    console.log(token);
  };

  return (
    <StyledMain>
      <input value={token} onChange={handleChange}></input>
      <button onClick={handleClick}>Request Introspection</button>
      <ResponseView></ResponseView>
    </StyledMain>
  );
};

export default Main;
