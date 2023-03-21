import { useState } from 'react';
import { useParams } from 'react-router-dom';

import moment from 'moment';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import useAddPhoto from 'react-query/useAddPhoto';

import AddButton from 'components/Buttons/AddButton/AddButton';
import Modal from 'components/Modal/Modal';
import Button from 'components/Buttons/Button';
import Autocomplite from 'components/Autocomplite/Autocomplite';
import FileInput from 'components/Inputs/FileInput/FileImput';

import {
  Title,
  Box,
  FieldWrapper,
  InputWrapper,
  DateField,
  Comments,
} from './AddPhotoForm.styled';

const AddPhotoForm = () => {
  const [place, setPlace] = useState('');
  console.log(place);
  const [date, setDate] = useState('');
  const [photoURL, setPhoto] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [comments, setComments] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: addPhoto, isLoading } = useAddPhoto();
  const { id } = useParams();

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const uploadImage = e => {
    setPreviewPhoto(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.files[0]);
  };

  const handleSelectPlace = newValue => {
    setPlace(newValue);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formatDate = moment(date).format('DD.MM.YYYY');

    const newPhoto = new FormData();
    newPhoto.append('albumId', id);
    newPhoto.append('place', place);
    newPhoto.append('date', formatDate);
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
          setPreviewPhoto('');
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
          <Title>Add photo</Title>
          <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
            <Box>
              <FileInput
                title="Upload photo"
                name={photoURL}
                uploadFile={previewPhoto}
                src={previewPhoto}
                onChange={uploadImage}
                alt="photo"
              />

              <FieldWrapper>
                <InputWrapper>
                  <Autocomplite onSelect={handleSelectPlace} />
                </InputWrapper>

                <InputWrapper>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                      // label="Date"
                      inputFormat="DD.MM.YYYY"
                      value={date}
                      onChange={newValue => setDate(newValue)}
                      renderInput={params => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </InputWrapper>

                <Comments
                  aria-label="empty textarea"
                  placeholder="Comments"
                  style={{ width: 435, height: 162 }}
                  value={comments}
                  onChange={e => setComments(e.target.value)}
                />
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
