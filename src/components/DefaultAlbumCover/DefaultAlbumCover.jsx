import { BoxCover, Text } from './DefaultAlbumCover.styled';

const DefaultAlbumCover = ({ className }) => {
  return (
    <BoxCover className={className || ''}>
      {/* <Text>Memories Book</Text> */}
    </BoxCover>
  );
};

export default DefaultAlbumCover;
