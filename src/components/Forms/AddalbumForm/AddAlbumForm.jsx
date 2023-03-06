import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAddAlbum from 'react-query/useAddAlbum';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import Modal from 'components/Modal/Modal';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Button from 'components/Buttons/Button';

import {
  Title,
  Box,
  Cover,
  LabelUpload,
  Input,
  Icon,
} from './AddAlbumForm.styled';

const AddAlbumForm = () => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [uploadCover, setUploadCover] = useState('');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const uploadImage = e => {
    setUploadCover(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
  };

  // const imageHandler = async e => {
  //   const fileUploaded = e.target.files[0];
  //   setBackgroundURL(URL.createObjectURL(fileUploaded));
  //   const file = new FormData();
  //   file.append('photo', fileUploaded);
  //   addAlbum(file);
  // };

  const handleSubmit = async e => {
    e.preventDefault();

    const newAlbum = new FormData();
    newAlbum.append('name', name);
    newAlbum.append('backgroundURL', backgroundURL);

    try {
      await addAlbum(newAlbum, {
        onSuccess: response => {
          notifySuccess('album added');
          setIsOpen(false);
          setName('');
          setUploadCover('');
          setBackgroundURL('');
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
      <AddButton onClick={handleToggleForm} title="Add album" />
      {isOpen && (
        <Modal onClick={handleToggleForm}>
          <Title>Add album</Title>

          <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            <Box>
              {uploadCover ? (
                <Cover src={uploadCover} alt="cover" />
              ) : (
                <LabelUpload>
                  <Icon />
                  Upload cover to your album
                  <input
                    name="backgroundURL"
                    accept=".jpg, .jpeg, .png"
                    onChange={uploadImage}
                    type="file"
                    hidden
                  />
                </LabelUpload>
              )}
            </Box>
            <Input
              required
              label="Album name"
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              //     helperText="
              // (Passwords must be at least 6 characters)"
              variant="standard"
            />
            <Button type="submit" disabled={isLoading} title={'add'} />
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddAlbumForm;
