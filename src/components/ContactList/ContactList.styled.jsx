import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin: 0 auto;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin: 8px;
  padding: 0 16px 0 16px;
  height: 24px;
  min-width: 50px;
  align-items: right;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0px 4px 10px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 500ms linear;

  color: #ffffff;
  background-color: #E59866;

  :hover {
    background-color: #F5B041;
  }
`;