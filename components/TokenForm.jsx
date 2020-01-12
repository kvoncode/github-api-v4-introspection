import styled from "styled-components";

const StyledInput = styled.input`
  color: #b5b5b5;
  padding: 0.3rem;
  background-color: black;
  border: 1px solid #b5b5b5;
  border-radius: 0.2rem;
  margin: 1rem;
`;

const StyledButton = styled.button`
  color: #ec8c26;
  padding: 0.5rem;
  background-color: black;
  /* border: 1px solid #b5b5b5; */
  border-radius: 1rem;
  margin: 1rem;
  font-family: "Josefin Sans", sans-serif;
`;

export const TokenForm = ({ controls }) => {
  const { token, handleChange, handleClick } = controls;

  return (
    <>
      <StyledInput value={token} onChange={handleChange}></StyledInput>
      <StyledButton onClick={handleClick}>Send Request</StyledButton>
    </>
  );
};
