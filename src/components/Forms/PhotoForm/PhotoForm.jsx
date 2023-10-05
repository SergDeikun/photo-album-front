import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { notifySuccess, notifyError } from 'helpers/toastNotify';

import useAddPhoto from 'react-query/useAddPhoto';

import FileInput from 'components/Inputs/FileInput/FileImput';
import LocationButton from 'components/Buttons/LocationButton/LocationButton';
import DateInput from 'components/Inputs/DateInput/DateInput';
import CommentsInput from 'components/Inputs/CommentsInput/CommentsInput';
import Button from 'components/Buttons/Button';

import {
  AddInfoBtn,
  Box,
  FieldWrapper,
  InputWrapper,
  Place,
} from './PhotoForm.styled';

const PhotoForm = ({ onClose }) => {
  const { albumId } = useParams();
  const { mutateAsync: addPhoto, isLoading } = useAddPhoto();
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [photoURL, setPhoto] = useState('');
  const [isOpenFieldForm, setIsOpenFieldForm] = useState(false);
  const [titleBtn, setTitleBtn] = useState('Add information');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState(null);
  const [comments, setComments] = useState('');

  const handleOpenFieldForm = () => {
    setIsOpenFieldForm(!isOpenFieldForm);
    setTitleBtn(isOpenFieldForm ? 'Add information' : 'Close information');
  };

  const uploadImage = e => {
    setPreviewPhoto(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.files[0]);
  };

  const handleSelectPlace = place => {
    setPlace(place);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newPhoto = new FormData();
    newPhoto.append('place', place);
    newPhoto.append('date', date);
    console.log(('photoURL', photoURL));
    newPhoto.append('photoURL', photoURL);
    newPhoto.append('comments', comments);

    if (photoURL === '') {
      notifyError('Pleace, upload photo');
      return;
    }

    try {
      await addPhoto(
        { newPhoto, albumId },
        {
          onSuccess: () => {
            notifySuccess('photo added');
            setPreviewPhoto('');
            setPhoto('');
            setPlace('');
            setDate('');
            setComments('');
            onClose();
          },
          onError: error => {
            notifyError(error.response.data.message);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit} action="">
        <Box>
          <FileInput
            title="Upload photo"
            name="photoURL"
            uploadFile={previewPhoto}
            src={previewPhoto}
            onChange={uploadImage}
            alt="photo"
          />
          {previewPhoto && (
            <AddInfoBtn type="button" onClick={handleOpenFieldForm}>
              {titleBtn}
            </AddInfoBtn>
          )}

          {isOpenFieldForm && (
            <FieldWrapper>
              <InputWrapper>
                <Place onSelect={handleSelectPlace} />
                <LocationButton />
              </InputWrapper>

              <InputWrapper>
                <DateInput value={date} onChange={setDate} />
              </InputWrapper>

              <CommentsInput
                placeholder="Comments"
                value={comments}
                onChange={e => setComments(e.target.value)}
                style={{ height: '175px' }}
              />
            </FieldWrapper>
          )}
        </Box>

        {previewPhoto && (
          <Button type="submit" disabled={isLoading} title="save" />
        )}
      </form>
    </>
  );
};

export default PhotoForm;
