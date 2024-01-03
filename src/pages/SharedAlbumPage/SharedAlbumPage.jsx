import { useParams } from 'react-router-dom';

import useGetAlbumById from 'react-query/useGetAlbumById';

import PhotoList from 'components/PhotoList/PhotoList';

import { BoxContainer } from './SharedAlbumPage.styled';

const SharedAlbumPage = () => {
  const { albumId } = useParams();
  const { data: currentAlbumData, isLoading } = useGetAlbumById(albumId);

  return (
    <BoxContainer>
      {currentAlbumData && (
        <PhotoList currentAlbumData={currentAlbumData} isLoading={isLoading} />
      )}
    </BoxContainer>
  );
};

export default SharedAlbumPage;
