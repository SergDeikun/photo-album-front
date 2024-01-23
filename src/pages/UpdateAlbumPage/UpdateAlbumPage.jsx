import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import UpdateAlbum from 'components/UpdateAlbum/UpdateAlbum';

import useGetAlbumById from 'react-query/useGetAlbumById';

import { BoxContainer } from './UpdateAlbumPage.styled';

const UpdateAlbumPage = () => {
  const { id: albumId } = useParams();
  const { data: album, isLoading } = useGetAlbumById(albumId);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <BoxContainer>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {album && <UpdateAlbum album={album} />}
    </BoxContainer>
  );
};

export default UpdateAlbumPage;
