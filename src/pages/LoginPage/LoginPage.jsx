import useLoginUser from 'react-query/useLoginUser';

import Container from 'components/Container/Container';
import LoginForm from 'components/Forms/AuthForms/LoginForm';

import { SubmitBtn } from 'components/Forms/AuthForms/AuthForm.styled';

const LoginPage = () => {
  const { mutateAsync: loginUser, isLoading } = useLoginUser();

  return (
    <>
      <Container>
        <LoginForm loginUser={loginUser}>
          <SubmitBtn type="submit" title="Log In" disabled={isLoading} />
        </LoginForm>
      </Container>
    </>
  );
};

export default LoginPage;
