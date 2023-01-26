import Container from 'components/Container/Container';
import AuthMenu from 'components/AuthMenu/AuthMenu';

import { Section } from './HomePage.styled';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <AuthMenu />
      </Container>
    </Section>
  );
};

export default HomePage;
