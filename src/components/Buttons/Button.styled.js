import styled from 'styled-components';

export const Btn = styled.button`
  width: 165px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media ${p => p.theme.device.desktop} {
    &:hover {
      background-color: ${p => p.theme.colors.red};
      color: ${p => p.theme.colors.white};
    }
  }
`;
