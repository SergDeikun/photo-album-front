// import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import useGetPhotoById from 'react-query/useGetPhotoById';

const PhotoLightBox = () => {
  // const [isOpen, setIsOpen] = useState(true);
  // const [photoIndex, setPhotoIndex] = useState(0);
  const { id } = useParams();
  const { data } = useGetPhotoById(id);
  // console.log(data);

  // return <>{data && <Lightbox mainSrc={data.photoURL} />}</>;
  return (
    <>{data && <img width="700" height="400" src={data.photoURL} alt="" />}</>
  );
};

export default PhotoLightBox;
