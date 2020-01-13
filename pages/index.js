import "normalize.css";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { SucessView, ErrorView } from "../components/ResponseView";
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
  const msg = "";

  const [token, setToken] = useState(msg);

  useEffect(() => {
    setToken(localStorage.getItem("token") || msg);
  }, []);

  const handleChange = e => {
    const token = e.target.value;
    setToken(token);
  };

  const [response, setResponse] = useState(null);

  const handleClick = () => {
    // console.log(token);
    // makeRequest({ token }).then(result => setResponse(JSON.stringify(result)));
    makeRequest({ token })
      .then(result => {
        console.log("Response from server", result);
        setResponse(true);
        localStorage.setItem("token", token);
      })
      .catch(() => {
        setResponse(false);
      });
  };

  return (
    <StyledMain>
      <Header></Header>
      <TokenForm controls={{ token, handleChange, handleClick }}></TokenForm>
      {null === response ? null : response ? (
        <SucessView></SucessView>
      ) : (
        <ErrorView></ErrorView>
      )}
    </StyledMain>
  );
};

export default Main;
