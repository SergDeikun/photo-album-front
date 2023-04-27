import styled from 'styled-components';
// import { MdOutlineDelete } from 'react-icons/md';
import { MdOutlineDeleteOutline } from 'react-icons/md';

import { MdPhotoCamera } from 'react-icons/md';

export const Box = styled.div`
  position: relative;
  margin-top: 80px;
`;

// File
export const FileWrapper = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: ${p => p.theme.borderRadius.small};
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
`;

export const BlackBox = styled.div`
  /* outline: 1px solid tomato; */
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: flex-end;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PhotocameraIcon = styled(MdPhotoCamera)`
  fill: white;
  margin-right: 10px;
`;

export const FileLabel = styled.label`
  display: flex;
  justify-content: center;
  color: white;
  cursor: pointer;
`;

// Name
export const NameWrapper = styled.div`
  /* position: absolute;
  left: 15px;
  bottom: -23px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9); */
`;
export const NameLabel = styled.label`
  position: absolute;
  left: 15px;
  bottom: -23px;
  z-index: 1;
`;

export const NameField = styled.input`
  /* width: 100px; */
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: ${p => p.theme.borderRadius.small};
  font-size: 50px;
  color: white;
  border: none;
  outline: none;
`;

export const PhotoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const PhotoItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  flex-basis: calc((100% - 10px) / 4);

  &:nth-child(odd) {
    margin-right: 10px;
  }
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const DeleteIcon = styled(MdOutlineDeleteOutline)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.red};
`;
