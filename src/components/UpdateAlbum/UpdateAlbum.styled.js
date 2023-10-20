import styled from 'styled-components';

import { MdPhotoCamera } from 'react-icons/md';

import DefaultAlbumCover from 'components/DefaultAlbumCover/DefaultAlbumCover';
import Button from 'components/Buttons/Button';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

export const InfoWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
`;

// Name

export const NameWrapper = styled.div`
  height: 75px;

  &::after {
    content: '';
    position: absolute;
    top: 155px;
    left: 0;
    display: flex;
    width: 600px;
    height: 1px;
    background-color: ${p => p.theme.colors.darkGrey};
  }
`;

export const NameField = styled.input`
  padding: 0 5px;
  background-color: transparent;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[3]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  opacity: 0.5;
  border: none;
  outline: none;
`;

export const SaveBtn = styled(Button)`
  position: absolute;
  bottom: -45px;
  left: 50%;
  height: 30px;
  transform: translate(-50%);
  display: ${p => (p.isVisible ? 'block' : 'none')};
`;

// Friends

export const FriendsBox = styled.div`
  position: absolute;
  bottom: 0px;
  width: 542px;
  height: 300px;
`;

export const FriendsPreTitle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
`;

export const FriendsItem = styled.li`
  padding: 10px 0;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.88;
  border-radius: ${p => p.theme.borderRadius.small};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;

// File

export const FileWrapper = styled.div`
  position: relative;
  width: 600px;
  height: 510px;
  margin-left: auto;

  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: -20px;
    display: flex;
    width: 1px;
    height: 90%;
    background-color: ${p => p.theme.colors.darkGrey};
  }
`;

export const DefaultCover = styled(DefaultAlbumCover)`
  width: 100%;
  max-height: 100%;

  span {
    display: none;
    font-size: ${p => p.theme.fontSize[3]}px;
    word-break: break-all;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.borderRadius.small};
`;

export const BlackBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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

// PhotoList

export const PhotoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 0;
`;

export const PhotoItem = styled.li`
  position: relative;
  border-radius: ${p => p.theme.borderRadius.small};
  overflow: hidden;
  height: 200px;
  overflow: hidden;
  flex-basis: calc((100% - 30px) / 4);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DeleteBtn = styled(DeleteButton)`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  background-color: rgba(192, 192, 192, 0.9);

  svg {
    fill: ${p => p.theme.colors.black};
  }
`;
