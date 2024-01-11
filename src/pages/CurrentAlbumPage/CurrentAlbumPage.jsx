import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

import useGetAlbumById from 'react-query/useGetAlbumById';

import PhotoList from 'components/PhotoList/PhotoList';

import { BoxContainer } from './CurrentAlbumPage.styled';

const CurrentAlbumPage = () => {
  const { albumId } = useParams();
  const { data: currentAlbumData, isLoading } = useGetAlbumById(albumId);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(100);
    }
  }, [isLoading]);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <BoxContainer>
        {currentAlbumData && (
          <PhotoList
            currentAlbumData={currentAlbumData}
            isLoading={isLoading}
            readOnly={false}
          />
        )}
      </BoxContainer>
    </>
  );
};

export default CurrentAlbumPage;
