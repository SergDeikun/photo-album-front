import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// import AvatarEditor from 'react-avatar-editor';

import useAddAlbum from 'react-query/useAddAlbum';
import { notifySuccess, notifyError } from 'helpers/toastNotify';

import FileInput from 'components/Inputs/FileInput/FileImput';

import {
  Form,
  NameWrapper,
  InputName,
  // FileWrapper,
  SubmitBtn,
} from './AlbumForm.styled';

const AlbumForm = ({ updateName, onClose }) => {
  const [name, setName] = useState(updateName);
  const [backgroundURL, setBackgroundURL] = useState('');
  const [previewBackground, setPreviewBackground] = useState('');
  const { mutateAsync: addAlbum, isLoading } = useAddAlbum();

  const uploadImage = e => {
    setPreviewBackground(URL.createObjectURL(e.target.files[0]));
    setBackgroundURL(e.target.files[0]);
  };

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
      <Form encType="multipart/form-data" onSubmit={handleSubmit} action="">
        <NameWrapper>
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

        {/* <AvatarEditor
          // image={previewBackground}
          image="http://example.com/initialimage.jpg"
          width={510}
          height={458}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1.2}
          rotate={0}
        /> */}

        {/* <FileWrapper> */}
        {/* <FileInput
              title="Upload cover to your album"
              uploadFile={previewBackground}
              clearInput={handleClearInput}
              src={previewBackground}
              onChange={uploadImage}
              alt="cover"
            /> */}
        {/* </FileWrapper> */}

        {name && (
          <>
            {/* <FileInput
              title="Upload cover to your album"
              uploadFile={previewBackground}
              clearInput={handleClearInput}
              src={previewBackground}
              onChange={uploadImage}
              alt="cover"
            /> */}
            <SubmitBtn type="submit" disabled={isLoading} title={'add'} />
          </>
        )}

        {/* ANIMATION */}
        {/* <AnimatePresence>
          {name && (
            <motion.div
              key={name}
              style={
                {
                  // position: 'absolute',
                  // zindex: '10',
                  // width: '320px',
                  // left: '1050px',
                  // top: '0',
                  // backgroundColor: 'black',
                  // padding: '115px 20px',
                }
              }
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <SubmitBtn type="submit" disabled={isLoading} title={'add'} />
            </motion.div>
          )}
        </AnimatePresence> */}
      </Form>
    </>
  );
};

export default AlbumForm;
