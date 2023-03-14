import { useState } from 'react';

import useAddAlbum from 'react-query/useAddAlbum';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import Modal from 'components/Modal/Modal';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Button from 'components/Buttons/Button';
import FileInput from 'components/Inputs/FileInput/FileImput';

import TextInput from 'components/Inputs/TextInput/TextInput';

import { Title, UploadFile } from './AddAlbumForm.styled';

const AddAlbumForm = () => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

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
          setIsOpen(false);
          setName('');
          setPreviewBackground('');
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
            <FileInput
              title="Upload cover to your album"
              name={backgroundURL}
              uploadFile={previewBackground}
              src={previewBackground}
              onChange={uploadImage}
              alt="cover"
            />
            <TextInput
              required={true}
              label="Album name"
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Button type="submit" disabled={isLoading} title={'add'} />
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddAlbumForm;
