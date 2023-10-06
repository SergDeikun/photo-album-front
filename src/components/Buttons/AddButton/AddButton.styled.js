import styled from 'styled-components';

export const AddBtn = styled.button`
  position: relative;
  margin-left: auto;
  /* font-family: ${p => p.theme.fonts.body}; */
  font-family: ${p => p.theme.fonts.main};

  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
  border: none;
  background-color: transparent;

  &:after {
    content: '';
    position: absolute;
    bottom: 5px;

    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.red};
    transform: rotateY(90deg);
    transition: transform 0.25s linear;
  }

  &:hover:after {
    transform: rotate(0deg);
  }
`;
