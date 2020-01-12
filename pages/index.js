import "normalize.css";
// import "./styles.css";
import styled from "styled-components";

import { useState } from "react";
import { ResponseView } from "../components/ResponseView";

const StyledMain = styled.div`
  min-height: calc(100vh - 100px);
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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
