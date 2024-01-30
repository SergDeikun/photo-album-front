import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Cookies from 'js-cookie';

import queryClient from 'react-query/queryClient';
import useGetAlbumById from 'react-query/useGetAlbumById';

import { isValidToken } from 'helpers/isValidToken';
import { notifyError } from 'helpers/toastNotify';

import PhotoList from 'components/PhotoList/PhotoList';

import { BoxContainer } from './CurrentAlbumPage.styled';

const CurrentAlbumPage = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const { albumId } = useParams();
  const { data: currentAlbumData, isLoading } = useGetAlbumById(albumId, token);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    try {
      if (!isValidToken()) {
        navigate('/login');
        notifyError('Token expired or missing. Please login');
        queryClient.clear();
        return;
      }
    } catch (error) {
      console.error(error);
    }

    if (isLoading) {
      setProgress(100);
    }
  }, [isLoading, navigate, token]);

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
