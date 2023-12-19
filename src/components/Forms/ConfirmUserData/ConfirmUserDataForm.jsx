import { Box, ConfirmDataForm } from './ConfirmUserData.styled';
import { SubmitBtn } from '../AuthForms/AuthForm.styled';

const ConfirmUserDataForm = () => {
  return (
    <Box>
      <ConfirmDataForm>
        <SubmitBtn type="submit" title="Confirm" />
      </ConfirmDataForm>
    </Box>
  );
};

export default ConfirmUserDataForm;
