import { ApolloClient } from "apollo-boost";
import { gql } from "apollo-boost";
import fetch from "node-fetch";

import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

export const makeRequest = ({ token }) => {
  const urlSpacex = "https://api.spacex.land/graphql/";
  const url = "https://api.github.com/graphql";

  const link = createHttpLink({
    uri: url,
    fetch: fetch
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : ""
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
  });

  return client.query({
    query: gql`
      query {
        __schema {
          types {
            name
            kind
            description
            fields {
              name
            }
          }
        }
      }
    `
  });
  // .then(result => console.log(result));
};
