import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e8716d;
  border-radius: 3px;
  border: none;
  padding: 10px 35px;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e14641;
  }
`;
