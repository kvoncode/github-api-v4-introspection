import "normalize.css";
// import "./styles.css";
import styled from "styled-components";

const StyledMain = styled.div`
  min-height: calc(100vh - 100px);
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <StyledMain>
      <input></input>
    </StyledMain>
  );
};

export default Main;
