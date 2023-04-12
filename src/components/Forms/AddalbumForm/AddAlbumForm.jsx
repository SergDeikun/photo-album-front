import { useState } from 'react';
// import AvatarEditor from 'react-avatar-editor';

// import Dropzone from 'react-dropzone';
// import defaultCover from 'images/beautiful-woman-posing-boat.jpg';

import useAddAlbum from 'react-query/useAddAlbum';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import Modal from 'components/Modal/Modal';
import AddButton from 'components/Buttons/AddButton/AddButton';
import Button from 'components/Buttons/Button';
import FileInput from 'components/Inputs/FileInput/FileImput';

import TextInput from 'components/Inputs/TextInput/TextInput';

import { Title } from './AddAlbumForm.styled';

const AddAlbumForm = () => {
  const [name, setName] = useState('');
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();
  // const editor = useRef(null);

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const uploadImage = e => {
    setPreviewBackground(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
  };

  // const handleSave = () => {
  //   if (editor) {
  //     const canvas = editor.current;
  //     setBackgroundURL(canvas);
  //   }
  // };

  const handleClearInput = () => {
    setPreviewBackground('');
    setBackgroundURL('');
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
            {/* <Dropzone
              onDrop={dropped => setBackgroundURL(dropped[0])}
              noClick
              noKeyboard
              style={{ width: '1000px', height: '500px' }}
            >
              {({ getRootProps, getInputProps }) => (
                <div style={{ color: 'white', height: 25 }} {...getRootProps()}>
                  <p>Drag 'n' drop some files here, or click to select files</p>
                  <AvatarEditor
                    width={600}
                    height={500}
                    image={backgroundURL}
                  />
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone> */}
            {/* {!previewBackground ? (
              <FileInput
                title="Upload cover to your album"
                name={backgroundURL}
                onClick={handleSave}
                // uploadFile={previewBackground}
                // clearInput={handleClearInput}
                src={previewBackground}
                onChange={uploadImage}
                alt="cover"
              />
            ) : (
              <AvatarEditor
                ref={editor}
                image={previewBackground}
                width={600}
                height={400}
                border={50}
                scale={1.2}
              />
            )} */}

            <FileInput
              title="Upload cover to your album"
              name={backgroundURL}
              uploadFile={previewBackground}
              clearInput={handleClearInput}
              src={previewBackground}
              onChange={uploadImage}
              alt="cover"
            />

            {/* {previewBackground && (
              <AvatarEditor
                // ref={editor}
                image={previewBackground}
                width={600}
                height={500}
                border={50}
                scale={1.2}
              />
            )} */}

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
