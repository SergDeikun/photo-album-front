import { useParams } from 'react-router-dom';

import useGetAlbumById from 'react-query/useGetAlbumById';

import PhotoList from 'components/PhotoList/PhotoList';

import { BoxContainer } from './CurrentAlbumPage.styled';

const CurrentAlbumPage = () => {
  const { albumId } = useParams();
  const { data, isLoading } = useGetAlbumById(albumId);

  return (
    <>
      <BoxContainer>
        {data && <PhotoList currentAlbumData={data} isLoading={isLoading} />}
        {/* <PhotoList currentAlbumData={currentAlbumData} isLoading={isLoading} /> */}
      </BoxContainer>
    </>
  );
};

export default CurrentAlbumPage;
