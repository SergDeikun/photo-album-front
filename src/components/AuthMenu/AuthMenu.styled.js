import styled from 'styled-components';

export const WrapperAuth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  /* background-size: cover; */
`;

export const BoxOptionsContainer = styled.div`
  outline: 1px solid red;

  position: relative;
  width: 80%;
`;

export const BoxOptionsText = styled.div`
  outline: 1px solid white;

  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(34, 34, 34, 0.85);
  border-radius: 3px;
`;

export const BoxOptionsUnregister = styled.div`
  width: 50%;
  padding: 75px 45px;
  color: white;
  font-weight: 300;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 27px;
  line-height: 22px;
`;

export const Text = styled.div`
  font-size: 13px;
  line-height: 22px;
`;

export const Button = styled.button`
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px 30px;
  background-color: transparent;
  line-height: 16px;
  letter-spacing: 0.2rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  color: white;

  &:hover {
    color: rgba(34, 34, 34, 0.85);
    background-color: #ccc;
  }
`;

// Form

export const BoxForm = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  width: calc(50% - 30px);
  min-height: 420px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 2px 0 15px rgb(0 0 0 / 25%);
  overflow: hidden;

  transform: translate3d(100%, -50%, 0);
  transition: transform 0.4s ease-in-out;
`;

// export const UserFormsLogin = styled.div`
//   position: absolute;
//   top: 70px;
//   left: 40px;
//   transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
// `;

export const Form = styled.form``;

export const FormsTitle = styled.h2`
  margin-bottom: 45px;
  font-size: 24px;
  font-weight: 500;
  line-height: 16px;
  text-transform: uppercase;
  color: #e8716d;
  letter-spacing: 0.1rem;
`;

export const FormsField = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  padding: 0;
  border: 0;
  outline: 0;

  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 6px;

  /* font-family: $ff; */
  font-size: 16px;
  font-weight: 300;
  color: gray;
  letter-spacing: 0.1rem;

  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: grey;
  }

  &::placeholder {
    font-size: 14px;
    /* font-family: $ff; */
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #ccc;
  }
`;

export const WrapperFormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
`;

export const ButtonForgot = styled.button`
  /* font-family: $ff; */
  background-color: transparent;
  border: none;
  letter-spacing: 0.1rem;
  color: #ccc;
  text-decoration: underline;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: grey;
  }
`;

export const ButtonFormSubmit = styled.button`
  background-color: #e8716d;
  border-radius: 3px;
  border: none;
  padding: 10px 35px;

  font-size: 16px;
  /* font-family: $ff; */
  font-weight: 300;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e14641;
  }
`;
