import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Cookies from 'js-cookie';

import UpdateAlbum from 'components/UpdateAlbum/UpdateAlbum';

import queryClient from 'react-query/queryClient';
import useGetAlbumById from 'react-query/useGetAlbumById';

import { isValidToken } from 'helpers/isValidToken';
import { notifyError } from 'helpers/toastNotify';

import { BoxContainer } from './UpdateAlbumPage.styled';

const UpdateAlbumPage = () => {
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const { id: albumId } = useParams();
  const { data: album, isLoading } = useGetAlbumById(albumId);
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
