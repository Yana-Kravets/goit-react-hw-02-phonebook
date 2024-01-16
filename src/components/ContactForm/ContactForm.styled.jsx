import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin: 12px auto;
  align-items: center;
  font-size: 16px;
  text-align: left;
  padding: 8px 240px 8px 16px;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 0 16px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  height: 36px;
  cursor: pointer;
  box-shadow: 0px 4px 10px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    transition: background-color 500ms linear;

  background-color: #6470E1;
  color: #ffffff;
  
  :hover {
    background-color: #071ACC;
  }
`;



