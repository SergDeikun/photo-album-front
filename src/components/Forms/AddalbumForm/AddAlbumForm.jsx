import { useState } from 'react';
import Fab from '@mui/material/Fab';

import useAddAlbum from 'react-query/useAddAlbum';

import Modal from 'components/Modal/Modal';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Button from 'components/Buttons/Button';

import { Title, Form, Label, Input, FileInput } from './AddAlbumForm.styled';

const AddAlbumForm = () => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const uploadImage = e => {
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
      await addAlbum(newAlbum);
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

          <Form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            <Label htmlFor="email"> Name</Label>

            <Input
              id="email"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Label htmlFor="img">
              {/* Background */}
              <FileInput
                id="img"
                type="file"
                name="backgroundURL"
                accept=".jpg, .jpeg, .png"
                onChange={uploadImage}
              />
              <Fab
                color="white"
                size="large"
                component="span"
                aria-label="add"
                variant="extended"
              >
                Add style to your album
              </Fab>
              {/* <button>upload</button> */}
            </Label>
            <Button type="submit" disabled={isLoading} title={'add'} />
          </Form>
        </Modal>
      )}
    </>
  );
};

export default AddAlbumForm;
