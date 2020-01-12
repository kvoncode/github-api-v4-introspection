import styled from "styled-components";

const StyledResponse = styled.div`
  color: red;
`;

export const ResponseView = ({ text }) => {
  return <StyledResponse>{text || "no response"}</StyledResponse>;
};
