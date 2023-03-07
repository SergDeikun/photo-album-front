import styled from 'styled-components';

export const Btn = styled.button`
  width: 165px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  border: none;
  /* padding: 10px 35px; */
  font-family: ${p => p.theme.fonts.button};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.red};
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  &:hover {
  }
`;
