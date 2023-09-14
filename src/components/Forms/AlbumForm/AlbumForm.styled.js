import styled from 'styled-components';

// export const UploadFile = styled(UploadBox)`
//   margin-bottom: 35px;
// `;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  /* outline: 1px solid white; */
  /* overflow: hidden; */
`;
export const NameWrapper = styled.div`
  /* width: 100%; */
  margin-bottom: 50px;
  /* overflow: hidden; */
`;

export const InputName = styled.input`
  /* outline: 1px solid tomato; */
  width: 100%;
  text-align: center;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[0]}px;
  line-height: 1.88;
  letter-spacing: 0.1rem;
  color: ${p => p.theme.colors.white};
  padding: 0;
  /* transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; */

  ::placeholder {
    color: white;
  }

  /* &:focus-visible {
    &::placeholder {
      color: transparent;
      color: rgba(255, 255, 255, 0);
      display: none;
    }
  } */

  &:hover {
    border-bottom: 1px solid red;
  }
`;
