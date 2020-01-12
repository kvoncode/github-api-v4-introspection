import Head from "next/head";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: #ec8c26;
  margin: 3rem;
  font-family: "Josefin Sans", sans-serif;
`;

const StyledInstruction = styled.p`
  width: 500px;
  color: #b5b5b5;
  margin: 3rem;
  font-family: "Josefin Sans", sans-serif;
`;

const title = "Github Graphql API Introspection";

const text = `
Paste Github API token to the form below to make GraphQL request.
Requests are not possible without API token 

`;

export const Header = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StyledTitle>{title}</StyledTitle>
      <StyledInstruction>{text}</StyledInstruction>
    </div>
  );
};
