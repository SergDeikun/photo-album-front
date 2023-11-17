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
  @media ${p => p.theme.device.tablet} {
    display: flex;
  }
`;

//* Name

export const NameWrapper = styled.div`
  padding-left: 10px;
  @media ${p => p.theme.device.tablet} {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 100px;

      left: 0;
      display: flex;
      width: 380px;
      height: 1px;
      background-color: ${p => p.theme.colors.darkGrey};
    }
  }

  @media ${p => p.theme.device.desktop} {
    &::after {
      width: 600px;
      top: 140px;
    }
  }
`;

export const NameField = styled.input`
  width: 100%;
  padding: 10px 0;
  align-items: center;
  background-color: transparent;
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  opacity: 0.5;
  border: none;
  outline: none;

  @media ${p => p.theme.device.tablet} {
    width: 98%;
    font-size: ${p => p.theme.fontSize[3]}px;
  }
`;

export const SaveBtn = styled(Button)`
  position: absolute;
  bottom: -40px;
  left: 50%;
  width: 160px;
  height: 30px;
  transform: translate(-50%);
  display: ${p => (p.isVisible ? 'block' : 'none')};
`;

//* Friends

export const FriendsBox = styled.div`
  margin-top: 10px;
  overflow: hidden;
  height: 315px;

  @media ${p => p.theme.device.tablet} {
    position: absolute;
    bottom: 0;
    width: 405px;
    height: 230px;
    margin-top: 0;
  }

  @media ${p => p.theme.device.desktop} {
    /* width: 542px; */
    height: 315px;
  }
`;

export const FriendsPreTitle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
`;

export const FriendsList = styled.ul`
  overflow-y: auto;
  height: 100%;
`;

export const FriendsItem = styled.li`
  padding: 10px 5px;
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

//* File

export const FileWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 255px;
  border-radius: ${p => p.theme.borderRadius.small};

  background-image: url(${p => p.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;

  @media ${p => p.theme.device.tablet} {
    position: relative;
    width: 400px;
    height: 360px;

    &::before {
      content: '';
      position: absolute;
      top: 25px;
      /* left: -20px; */
      left: -10px;

      display: flex;
      width: 1px;
      height: 90%;
      background-color: ${p => p.theme.colors.darkGrey};
    }
  }

  @media ${p => p.theme.device.desktop} {
    width: 600px;
    height: 510px;
    margin-left: auto;
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
  /* width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.borderRadius.small}; */
`;

export const BlackBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  /* width: 100px; */
  padding: 5px;
  font-family: ${p => p.theme.fonts.second};

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

//* PhotoList

export const PhotoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const PhotoItem = styled.li`
  position: relative;
  border-radius: ${p => p.theme.borderRadius.small};
  overflow: hidden;
  height: 200px;
  flex-basis: calc((100% - 10px) / 2);

  @media ${p => p.theme.device.tablet} {
    flex-basis: calc((100% - 30px) / 4);
  }
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
