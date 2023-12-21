import useLoginUser from 'react-query/useLoginUser';

// import ConfirmUserDataForm from 'components/Forms/ConfirmUserData/ConfirmUserDataForm';
import LoginForm from 'components/Forms/AuthForms/LoginForm';
import { SubmitBtn } from 'components/Forms/AuthForms/AuthForm.styled';

import { PageTitle } from './ConfirmUserDataPage.styled';

const ConfirmUserDataPage = () => {
  const { mutateAsync: loginUser, isLoading } = useLoginUser();

  return (
    <>
      <PageTitle>Confirm your data</PageTitle>
      <LoginForm loginUser={loginUser}>
        <SubmitBtn type="submit" title="Confirm" disabled={isLoading} />
      </LoginForm>

      {/* <ConfirmUserDataForm loginUser={loginUser} /> */}
    </>
  );
};

export default ConfirmUserDataPage;
