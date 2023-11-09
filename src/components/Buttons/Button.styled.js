import styled from 'styled-components';

export const Btn = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.borderRadius.small};
  font-family: ${p => p.theme.fonts.button};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  border: 1px solid ${p => p.theme.colors.red};
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  background-color: ${p => (p.disabled ? p.theme.colors.red : 'transparent')};
  color: ${p => (p.disabled ? p.theme.colors.white : p.theme.colors.red)};

  &:hover {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
  }
`;
