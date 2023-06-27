import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';

import bgAvatar from '../../images/bg-avatar.jpg';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

export const Box = styled.div`
  margin-top: 80px;
`;

// User
export const UserWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  align-items: end;

  padding: 20px;
  /* background-image: url(${bgAvatar}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.colors.black};
  width: 200px;
  height: 200px;
`;

export const Avatar = styled(FaUser)`
  width: 100px;
  height: 100px;
  fill: ${p => p.theme.colors.black};
`;

// Form

export const UserInfo = styled.div`
  margin-left: 50px;
  /* outline: 1px solid tomato; */
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* outline: 1px solid teal; */
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSize[1]}px;
  color: ${p => p.theme.colors.black};
`;

export const Field = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  color: ${p => p.theme.colors.black};
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
`;

// export const Name = styled.p`
//   font-family: ${p => p.theme.fonts.body};
//   font-size: ${p => p.theme.fontSize[1]}px;
//   font-weight: ${p => p.theme.fontWeights.medium};
//   color: ${p => p.theme.colors.white};
// `;

// export const Email = styled.p`
//   font-family: ${p => p.theme.fonts.body};
//   font-size: ${p => p.theme.fontSize[1]}px;
//   font-weight: ${p => p.theme.fontWeights.medium};
//   color: ${p => p.theme.colors.white};
//   margin-top: 10px;
// `;

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
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

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
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const EditIcon = styled(MdOutlineEdit)`
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Item}:hover & {
    opacity: 1;
    fill: ${p => p.theme.colors.black};
  }

  ${InputWrapper}:hover & {
    opacity: 1;
    fill: ${p => p.theme.colors.black};
  }

  ${EditLink}:hover & {
    fill: ${p => p.theme.colors.red};
  }
`;
