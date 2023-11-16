import { useState } from 'react';

import useAddAlbum from 'react-query/useAddAlbum';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import {
  Box,
  NameWrapper,
  InputName,
  ButttonWraper,
  UploadCover,
  SubmitButton,
} from './AlbumForm.styled';

const AlbumForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const uploadImage = e => {
    setPreviewBackground(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newAlbum = new FormData();
    newAlbum.append('name', name);
    newAlbum.append('backgroundURL', backgroundURL);

    try {
      await addAlbum(newAlbum, {
        onSuccess: () => {
          notifySuccess('album added');
          setName('');
          setPreviewBackground('');
          setBackgroundURL('');
          onClose();
        },
        onError: error => {
          notifyError(error.response.data.message);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
        <Box backgroundImage={previewBackground}>
          <NameWrapper background={previewBackground}>
            <label>
              <InputName
                required
                autoFocus
                type="text"
                name="name"
                value={name}
                placeholder="Enter album name"
                onChange={e => setName(e.target.value)}
              />
            </label>
          </NameWrapper>
        </Box>

        <ButttonWraper name={name}>
          {name && (
            <>
              <UploadCover
                uploadFile={previewBackground}
                onChange={uploadImage}
                title="Cover"
                isVisible={true}
              />
              <SubmitButton type="submit" disabled={isLoading} title="Save" />
            </>
          )}
        </ButttonWraper>
      </form>
    </>
  );
};

export default AlbumForm;
