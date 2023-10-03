import styled from 'styled-components';

// import Button from 'components/Buttons/Button';
import InformationButton from 'components/Buttons/InformationButton/InformationButton';
import Autocomplite from 'components/Autocomplite/Autocomplite';

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AddInfoBtn = styled.button`
  position: absolute;
  bottom: 0;
  z-index: 100;
  width: 100%;
  padding: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  color: white;
`;

export const InfoBtn = styled(InformationButton)`
  position: absolute;
  z-index: 10;
  fill: red;
`;

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

// export const AddInfoBtn = styled(Button)`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//   z-index: 10;
//   padding: 16px 24px;
//   border-radius: 3px;
// `;

export const Form = styled.form`
  /* position: relative; */
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
`;

export const FieldWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-image: linear-gradient(
    #242b33 11.98%,
    rgba(45, 52, 60, 0.38) 51.04%,
    #242b33 92.19%
  );
  border-radius: 3px;
  /* height: 460px; */
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
`;
