import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import useGetPhotoById from 'react-query/useGetPhotoById';

const PhotoLightBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const { id } = useParams();
  const { data } = useGetPhotoById(id);
  console.log(data);

  return <>{data && <img src={data.photoURL} alt="fg" />}</>;
};

export default PhotoLightBox;
