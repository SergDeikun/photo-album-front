import styled from 'styled-components';

import Button from 'components/Buttons/Button';

export const Form = styled.form`
  /* display: flex; */
  /* width: 100%;
  height: 100%; */
`;
export const NameWrapper = styled.div`
  margin-bottom: 50px;
`;

export const InputName = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[2]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.grey};
  padding: 0 20px 0 20px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  ::placeholder {
    text-align: center;
    color: ${p => p.theme.colors.white};
  }

  &:hover {
    border-bottom: 1px solid #575150;
  }

  &:focus {
    border-bottom: 1px solid #575150;
  }
`;

export const FileWrapper = styled.div`
  width: 300px;
  height: 300px;
`;

export const SubmitBtn = styled(Button)`
  margin-top: 0;
`;
