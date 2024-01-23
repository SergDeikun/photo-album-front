import styled from 'styled-components';

import { MdPhotoCamera } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

import Button from 'components/Buttons/Button';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';
import DefaultCover from 'components/DefaultCover/DefaultCover';

export const InfoWrapper = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  height: 390px;

  @media ${p => p.theme.device.tablet} {
    height: 100%;
  }
`;

//* Name

export const NameWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  &:after {
    content: ' ';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    box-shadow: 0px -1px 0px ${p => p.theme.colors.red};
    transform: rotateY(90deg);
    transition: transform 0.25s linear;
  }
  &:hover:after,
  &:focus-within:after {
    transform: rotate(0deg);
  }

  @media ${p => p.theme.device.tablet} {
    width: 500px;
  }
`;

export const NameField = styled.input`
  width: 100%;
  padding: 0;
  align-items: center;
  background-color: transparent;
  font-family: ${p => p.theme.fonts.second};
  font-size: 30px;

  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  opacity: 0.5;
  border: none;
  outline: none;

  @media ${p => p.theme.device.tablet} {
    text-align: center;
    font-size: ${p => p.theme.fontSize[3]}px;
  }
`;

export const SaveBtn = styled(Button)`
  margin: 25px auto 0;
  width: 160px;
  height: 30px;
  opacity: ${p => (p.isVisible ? 1 : 0)};
  transition: opacity 0.5s linear;
  visibility: ${p => (p.isVisible ? 'visible' : 'hidden')};
  background-color: ${p => p.theme.colors.red};
  color: ${p => p.theme.colors.white};

  @media ${p => p.theme.device.tablet} {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%);
  }
`;

//* Friends

export const FriendsBox = styled.div`
  overflow: hidden;

  @media ${p => p.theme.device.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 380px;
    height: 360px;
    margin-top: 0;
  }

  @media ${p => p.theme.device.desktop} {
    width: 600px;
    height: 510px;
  }
`;

export const FriendsTitle = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.88;
  color: ${p => p.theme.colors.black};
`;

export const FriendsPreTitle = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  text-align: center;
`;

export const FriendsList = styled.ul`
  overflow-y: auto;
  height: 100%;
`;

export const FriendsItem = styled.li`
  display: flex;

  padding: 5px 5px;
  background-color: ${p => p.theme.colors.grey};

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.88;
  border-radius: ${p => p.theme.borderRadius.small};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media ${p => p.theme.device.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const FriendsDataWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const PersonIcon = styled(IoPerson)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  fill: ${p => p.theme.colors.red};
`;

export const EmailnIcon = styled(MdOutlineEmail)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  fill: ${p => p.theme.colors.red};
`;

export const FriendText = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[0]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.88;
`;

export const DeleteFriendBtn = styled(DeleteButton)`
  margin-left: auto;

  svg {
    fill: ${p => p.theme.colors.black};
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
    width: 350px;
    height: 360px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 600px;
    height: 510px;
  }
`;

export const CoverDefault = styled(DefaultCover)`
  position: relative;
  height: 255px;

  @media ${p => p.theme.device.tablet} {
    position: relative;
    width: 350px;
    height: 360px;
  }

  @media ${p => p.theme.device.desktop} {
    width: 600px;
    height: 510px;
  }
`;

export const BlackBox = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 5px;
  border-radius: ${p => p.theme.borderRadius.small};
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
