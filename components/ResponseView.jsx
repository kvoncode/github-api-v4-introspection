import styled from "styled-components";

const StyledResponse = styled.div`
  color: #ec8c26;

  padding: 0.5rem;
  min-height: 100px;
  min-width: 500px;
  margin: 1rem;
  font-family: "Josefin Sans", sans-serif;
`;

export const ResponseView = ({ sucess }) => {
  return sucess ? <StyledResponse>Sucess</StyledResponse> : null;
};
