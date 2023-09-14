import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  list-style: none;
  padding: 0;
`;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #525f63;
  color: #525f63;
  font-size: 16px;
  font-family: 'Times New Roman', Times, sans-serif;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  cursor: pointer;

  &:hover {
    background-color: #b68e8e;
    color: white;
    box-shadow: 1px 4px 15px 0px rgba(0, 0, 0, 0.88);
  }
`;
