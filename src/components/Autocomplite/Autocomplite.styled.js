import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  font-family: ${p => p.theme.fonts.body};
`;

export const Label = styled.label`
  display: block;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 6px;
  font-size: 18px;
  background-color: transparent;
  color: ${p => p.theme.colors.grey};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.88;
  letter-spacing: 0.1rem;
`;

export const List = styled.ul`
  position: absolute;
  top: 35px;
  width: 100%;
  background-color: ${p => p.theme.colors.bodyBg};

  z-index: 5;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.black};
  padding: 15px 0;

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: ${p => p.theme.colors.grey};
  }

  @media ${p => p.theme.device.tablet} {
    padding: 10px 0;
  }
`;
