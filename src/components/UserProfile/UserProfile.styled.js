import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdOutlineEdit } from 'react-icons/md';

import DefaultAlbumCover from 'components/DefaultAlbumCover/DefaultAlbumCover';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

export const Box = styled.div`
  margin-top: 80px;
  padding-bottom: 20px;
`;

// User
export const UserWrapper = styled.div`
  display: flex;
  align-items: end;

  padding: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Avatar = styled(FaUser)`
  width: 100px;
  height: 100px;
  fill: ${p => p.theme.colors.black};
`;

// Form

export const UserForm = styled.form`
  margin-left: 50px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

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
`;

export const Field = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 5px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[1]}px;
  color: ${p => p.theme.colors.black};
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  background-color: transparent;
  border-radius: ${p => p.theme.borderRadius.round};
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

//Albums

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  padding-top: 20px;
  padding-bottom: 20px;
  /* opacity: 0.5; */
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

export const DefaultCover = styled(DefaultAlbumCover)`
  width: 40px;
  height: 40px;
  border-radius: 30%;

  span {
    font-family: ${p => p.theme.fonts.body};
    font-size: 8px;
  }
`;

export const AlbumName = styled.p`
  /* TODO: розрахувати ширину, щоб вставити друзів */
  font-family: ${p => p.theme.fonts.body};

  /* width: 100px; */
  margin-left: 30px;
`;

export const DeleteBtn = styled(DeleteButton)`
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Item}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: transparent;

    svg {
      fill: ${p => p.theme.colors.red};
    }
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
  fill: ${p => p.theme.colors.black};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${Item}:hover & {
    opacity: 1;
  }

  ${InputWrapper}:hover & {
    opacity: 1;
  }

  ${EditLink}:hover & {
    fill: ${p => p.theme.colors.red};
  }
`;
