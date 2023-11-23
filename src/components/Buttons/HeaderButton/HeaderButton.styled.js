import styled from 'styled-components';

export const HeaderBtn = styled.button`
  position: relative;
  margin-left: auto;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[1]}px;

  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
  border: none;
  padding: 0;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    color: ${p => p.theme.colors.red};
  }

  @media ${p => p.theme.device.tablet} {
    margin-right: 0;
  }
`;
