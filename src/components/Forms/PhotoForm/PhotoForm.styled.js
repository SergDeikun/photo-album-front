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

export const AddInfoBtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  padding: 16px 24px;
  border-radius: 3px;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* justify-content: center; */

  height: 100%;
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
`;

export const FieldWrapper = styled.div`
  position: absolute;
  padding: 10px;
  background-color: black;
  /* margin-left: 100px; */
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
`;
