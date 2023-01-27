import Container from 'components/Container/Container';
import AuthMenu from 'components/AuthMenu/AuthMenu';

import { Section } from './AuthPage.styled';

const AuthPage = () => {
  return (
    <Section>
      <Container>
        <AuthMenu />
      </Container>
    </Section>
  );
};

export default AuthPage;
