import { BoxCover, Text } from './DefaultAlbumCover.styled';

const DefaultAlbumCover = ({ className }) => {
  return (
    <BoxCover className={className || ''}>
      <Text>Memoris Book</Text>
    </BoxCover>
  );
};

export default DefaultAlbumCover;
