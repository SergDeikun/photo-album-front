// import Container from 'components/Container/Container';

import {
  WrapperAuth,
  BoxOptionsContainer,
  BoxOptionsText,
  BoxOptionsUnregister,
  Title,
  //   Text,
  Button,
  BoxForm,
  // UserFormsLogin,
  FormsTitle,
  FormsField,
  Input,
  WrapperFormButtons,
  ButtonForgot,
  ButtonFormSubmit,
} from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <>
      {/* <Container> */}
      <WrapperAuth>
        <BoxOptionsContainer>
          <BoxOptionsText>
            <BoxOptionsUnregister>
              <Title>Don't have an account?</Title>
              {/* <Text>Pleace, register</Text> */}
              <Button id="signup-button">Sign up</Button>
            </BoxOptionsUnregister>

            <BoxOptionsUnregister>
              <Title>Have an account?</Title>
              {/* <Text>Pleace, login</Text> */}
              <Button id="login-button">Login</Button>
            </BoxOptionsUnregister>
          </BoxOptionsText>

          <BoxForm id="user_options-forms">
            {/* Log in */}

            {/* <UserFormsLogin> */}
            <form>
              <FormsTitle>Login</FormsTitle>

              {/* <fieldset> */}
              <FormsField>
                <Input type="email" placeholder="Email" required />
              </FormsField>
              <FormsField>
                <Input type="password" placeholder="Password" required />
              </FormsField>
              {/* </fieldset> */}
              <WrapperFormButtons>
                <ButtonForgot type="button">Forgot password?</ButtonForgot>
                <ButtonFormSubmit type="submit">Log In</ButtonFormSubmit>
              </WrapperFormButtons>
            </form>
            {/* </UserFormsLogin> */}

            {/* SignUp */}

            {/* <UserFormsLogin>
              <FormsTitle>Sign Up</FormsTitle>
              <form class="forms_form">
                <fieldset class="forms_fieldset">
                  <FormsField>
                    <Input type="text" placeholder="Full Name" required />
                  </FormsField>
                  <FormsField>
                    <Input type="email" placeholder="Email" required />
                  </FormsField>
                  <FormsField>
                    <Input type="password" placeholder="Password" required />
                  </FormsField>
                </fieldset>
                <WrapperFormButtons>
                  <ButtonFormSubmit type="submit">Sign up</ButtonFormSubmit>
                </WrapperFormButtons>
              </form>
            </UserFormsLogin> */}
          </BoxForm>
        </BoxOptionsContainer>
      </WrapperAuth>
      {/* </Container> */}
    </>
  );
};

export default AuthMenu;
