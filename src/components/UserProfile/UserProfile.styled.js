import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

export const Box = styled.div`
  margin-top: 80px;
`;

// User
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-top: 20px;
  padding-bottom: 50px;
  background-color: azure;
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
  color: ${p => p.theme.colors.black};
`;

export const Email = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  margin-top: 10px;
`;

//Albums

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  margin-bottom: 20px;
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

export const DeleteIcon = styled(MdOutlineDelete)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.red};
`;
