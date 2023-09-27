import styled from 'styled-components';

import Autocomplite from 'components/Autocomplite/Autocomplite';

export const Place = styled(Autocomplite)`
  label {
    display: block;
    width: 100%;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 6px;
    font-size: 18px;
    background-color: transparent;
    color: ${p => p.theme.colors.grey};
  }

  ul {
    position: absolute;
    top: 35px;
    width: 100%;
    background-color: ${p => p.theme.colors.bodyBg};
    z-index: 5;
  }

  li {
    color: ${p => p.theme.colors.black};
    padding: 6px 15px;
    cursor: pointer;

    &:hover {
      background-color: ${p => p.theme.colors.grey};
    }
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FieldWrapper = styled.div`
  margin-left: 100px;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
`;
