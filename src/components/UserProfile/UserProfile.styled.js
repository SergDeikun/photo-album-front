import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { MdOutlineEdit } from 'react-icons/md';

import bgAvatar from '../../images/bg-avatar.jpg';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

export const Box = styled.div`
  margin-top: 80px;
`;

// User
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-image: url(${bgAvatar});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const AvatarWrapper = styled.div`
  background-color: grey;
  border-radius: 50%;
`;

export const Avatar = styled(RxAvatar)`
  width: 200px;
  height: 200px;
`;

export const UserInfo = styled.div`
  margin-left: 50px;
`;

export const Name = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
`;

export const Email = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.white};
  margin-top: 10px;
`;

//Albums

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-radius: ${p => p.theme.borderRadius.small};

  &:hover {
    background-color: ${p => p.theme.colors.grey};
  }
`;

export const LinkAlbum = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const IconAlbum = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30%;
`;

export const AlbumName = styled.p`
  /* TODO: розрахувати ширину, щоб вставити друзів */
  width: 100px;
  margin-left: 30px;
`;

export const DeleteBtn = styled(DeleteButton)`
  opacity: 0;

  ${Item}:hover & {
    opacity: 1;
  }
`;

export const EditLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  padding: 5px;
`;

export const EditIcon = styled(MdOutlineEdit)`
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Item}:hover & {
    opacity: 1;
    fill: black;
  }

  ${EditLink}:hover & {
    fill: ${p => p.theme.colors.red};
  }
`;
