import { useState } from 'react';
import { useParams } from 'react-router-dom';

import dayjs from 'dayjs';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import useAddPhoto from 'react-query/useAddPhoto';

import AddButton from 'components/Buttons/AddButton/AddButton';
import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';
import LocationInput from 'components/Inputs/LocationInput/LocationInput';
import FileInput from 'components/Inputs/FileInput/FileImput';
import TextInput from 'components/Inputs/TextInput/TextInput';

import {
  Box,
  FileWrapper,
  FieldWrapper,
  InputWrapper,
  // PlaceField,
  DateLabel,
  // DateField,
} from './AddPhotoForm.styled';

const AddPhotoForm = () => {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [photoURL, setPhoto] = useState('');
  const [uploadPhoto, setUploadPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addPhoto, isLoading } = useAddPhoto();
  const { id } = useParams();

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  // const handleChangeDate = newValue => {
  //   setDate(newValue);
  // };

  const uploadImage = e => {
    setUploadPhoto(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newPhoto = new FormData();
    newPhoto.append('albumId', id);
    newPhoto.append('place', place);
    newPhoto.append('date', date);
    newPhoto.append('photoURL', photoURL);
    newPhoto.append('comments', comments);

    if (photoURL === '') {
      notifySuccess('Pleace, upload photo');
      return;
    }

    try {
      await addPhoto(newPhoto, {
        onSuccess: () => {
          notifySuccess('photo added');
          setIsOpen(false);
          setUploadPhoto('');
          setPhoto('');
          setPlace('');
          setDate('');
          setComments('');
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
      <AddButton title="Add photo" onClick={handleToggleForm} />

      {isOpen && (
        <Modal onClick={handleToggleForm}>
          <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            <Box>
              <FileWrapper>
                <FileInput
                  title="Upload photo"
                  name={photoURL}
                  uploadFile={uploadPhoto}
                  src={uploadPhoto}
                  onChange={uploadImage}
                  alt="photo"
                />
              </FileWrapper>

              <FieldWrapper>
                <InputWrapper>
                  {/* <LocationInput /> */}
                  <TextInput
                    required={false}
                    label="Place"
                    name="place"
                    value={place}
                    onChange={e => setPlace(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <DateLabel htmlFor="">
                    Date
                    <input
                      type="date"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                    />
                  </DateLabel>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                      label="Date"
                      inputFormat="DD/MM/YYYY"
                      value={date}
                      onChange={newValue => setDate(newValue)}
                      renderInput={params => <TextField {...params} />}
                    />
                  </LocalizationProvider> */}
                </InputWrapper>
                <InputWrapper>
                  <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Comments"
                    style={{ width: 200, height: 50 }}
                    value={comments}
                    onChange={e => setComments(e.target.value)}
                  />
                </InputWrapper>
              </FieldWrapper>
            </Box>

            <Button type="submit" disabled={isLoading} title={'add'} />
          </form>
        </Modal>
      )}
    </>
  );
};

export default AddPhotoForm;
