import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

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
  margin-bottom: 0.5rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  height: 0.8rem;
  margin-right: 0.3rem;
`;

export const SucessView = () => {
  return (
    <StyledResponse>
      <StyledSucess>
        <StyledIcon icon={faCheckCircle}></StyledIcon>
        Sucess. Check out Dev console for server response
      </StyledSucess>
    </StyledResponse>
  );
};

const StyledError = styled(StyledResponse)``;

export const ErrorView = () => {
  return (
    <StyledError>
      <StyledIcon icon={faExclamationTriangle}></StyledIcon> Wrong API token. Reload page to use last valid token
    </StyledError>
  );
};
