import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const StyledResponse = styled.div`
  color: #ec8c26;

  padding: 0.5rem;
  min-height: 100px;
  min-width: 500px;
  margin: 1rem;
  font-family: "Josefin Sans", sans-serif;
`;

const StyledSucess = styled.div`
  height: 1rem;
`;

export const ResponseView = ({ sucess }) => {
  return sucess ? (
    <StyledResponse>
      <StyledSucess>
        <FontAwesomeIcon icon={faCheckCircle} />
      </StyledSucess>
      Sucess
    </StyledResponse>
  ) : null;
};
