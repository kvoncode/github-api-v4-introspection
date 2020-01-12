import "normalize.css";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { ResponseView } from "../components/ResponseView";
import { Header } from "../components/Header";
import { TokenForm } from "../components/TokenForm";

import { makeRequest } from "../components/makeRequest";

const StyledMain = styled.div`
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  /* justify-content: center; */
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
      <Header></Header>
      <TokenForm controls={{ token, handleChange, handleClick }}></TokenForm>

      <ResponseView></ResponseView>
    </StyledMain>
  );
};

export default Main;
