import "normalize.css";
// import "./styles.css";
import styled from "styled-components";

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
  return (
    <StyledMain>
      <input></input>
      <button>Request Introspection</button>
      <ResponseView></ResponseView>
    </StyledMain>
  );
};

export default Main;
