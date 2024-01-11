import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import useGetAlbumById from 'react-query/useGetAlbumById';

import PhotoList from 'components/PhotoList/PhotoList';

import { BoxContainer } from './SharedAlbumPage.styled';

const SharedAlbumPage = () => {
  const { albumId } = useParams();
  const { data: currentAlbumData, isLoading } = useGetAlbumById(albumId);
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
      {currentAlbumData && (
        <PhotoList
          currentAlbumData={currentAlbumData}
          isLoading={isLoading}
          readOnly={true}
        />
      )}
    </BoxContainer>
  );
};

export default SharedAlbumPage;
