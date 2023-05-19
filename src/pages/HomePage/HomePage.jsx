import Container from 'components/Container/Container';
import {
  BoxImage,
  Title,
  Img1,
  Img2,
  Img3,
  // Img4,
  // Img5,
  Img6,
  Img8,
} from './HomePaje.styled';
import photo1 from '../../images/foto1.jpg';
import photo2 from '../../images/foto2.jpg';
import photo3 from '../../images/foto3.jpg';
import photo4 from '../../images/foto4.jpg';
// import photo5 from '../../images/foto5.jpg';
// import photo6 from '../../images/foto6.jpg';
// import photo7 from '../../images/foto7.jpg';
import photo8 from '../../images/foto8.jpg';

const HomePage = () => {
  return (
    <Container>
      <Title>Save your moments</Title>
      <BoxImage>
        <Img1 src={photo1} alt="girlInGreen" />
        <Img2 src={photo2} alt="friends" />
        <Img3 src={photo3} alt="beach" />
        <Img6 src={photo4} alt="girlInRed" />
        <Img8 src={photo8} alt="child" />
      </BoxImage>
    </Container>
  );
};

export default HomePage;
