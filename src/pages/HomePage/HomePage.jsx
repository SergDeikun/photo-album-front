import Container from 'components/Container/Container';
import MainImg from '../../images/homeP-removebg-preview.png';

import { BoxImage, Title, Image } from './HomePaje.styled';

const HomePage = () => {
  return (
    <Container>
      {/* <Title>Save your moments</Title> */}
      <Image src={MainImg} alt="" />
      <BoxImage></BoxImage>
    </Container>
  );
};

export default HomePage;
