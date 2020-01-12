import "normalize.css";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { ResponseView } from "../components/ResponseView";

import { makeRequest } from "../components/makeRequest";

const StyledMain = styled.div`
  min-height: calc(100vh - 100px);
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = () => {
  const msg = "No tokens in localStorage";

  const [token, setToken] = useState(msg);

  useEffect(() => {
    setToken(localStorage.getItem("token") || msg);
  });

  const handleChange = e => {
    const token = e.target.value;
    setToken(token);
    useEffect(() => {
      localStorage.setItem("token", token);
    }, [token]);
  };

  const handleClick = () => {
    // console.log(token);
    makeRequest({ token });
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
