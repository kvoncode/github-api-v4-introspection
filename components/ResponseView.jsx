import styled from "styled-components";

const StyledResponse = styled.div`
  color: #ec8c26;
  border: 1px solid #b5b5b5;
  padding: 0.5rem;
  min-height: 100px;
  min-width: 300px;
  font-family: "Josefin Sans", sans-serif;
`;

export const ResponseView = ({ text }) => {
  return <StyledResponse>{text || "no response"}</StyledResponse>;
};
