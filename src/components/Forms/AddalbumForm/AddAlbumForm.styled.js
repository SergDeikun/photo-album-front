import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
  margin-bottom: 50px;
`;
export const Form = styled.form``;

export const Label = styled.label`
  margin-left: 30px;
  margin-top: 40px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  border-color: transparent;
  border-bottom: 1px solid #ccc;
  color: white;
`;

export const FileInput = styled.input`
  /* margin-top: 30px; */
  display: none;
`;
