import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import Button from 'components/Buttons/Button';
import SaveButton from 'components/Buttons/SaveButton/SaveButton';
import DeleteButton from 'components/Buttons/DeleteButton/DeleteButton';

// User
export const UserWrapper = styled.div`
  text-align: center;

  @media ${p => p.theme.device.tablet} {
    display: flex;
    align-items: end;
    padding: 0 20px;
  }

  @media ${p => p.theme.device.desktop} {
    align-items: end;
  }
`;

export const Avatar = styled(FaUser)`
  width: 100px;
  height: 100px;
  fill: ${p => p.theme.colors.black};
`;

// Form

export const UserForm = styled.form`
  margin-top: 20px;

  @media ${p => p.theme.device.tablet} {
    margin-left: 20px;
    margin-top: 0;
  }

  @media ${p => p.theme.device.desktop} {
    margin-left: 50px;
  }
`;

export const FieldWrapper = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const SaveBtn = styled(SaveButton)`
  margin-left: 10px;
  display: ${p => (p.isVisible ? 'block' : 'none')};

  @media ${p => p.theme.device.tablet} {
    margin-left: 30px;
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

export const LogOutBtn = styled(Button)`
  margin-top: 15px;

  @media ${p => p.theme.device.tablet} {
    margin-top: auto;
    margin-right: 0;
  }
`;

//Albums

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.second};
  font-size: ${p => p.theme.fontSize[2]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.black};
  padding: 30px 0;
`;

export const List = styled.ul`
  @media ${p => p.theme.device.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const Item = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  width: 100%;
  height: 400px;
  border-radius: ${p => p.theme.borderRadius.small};
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.02);
  }

  @media ${p => p.theme.device.tablet} {
    flex-basis: calc((100% - 10px) / 2);

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media ${p => p.theme.device.desktop} {
    flex-basis: calc((100% - 30px) / 4);
  }
`;

export const LinkAlbum = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const IconAlbum = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`;

// EditBox

export const EditBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  background-image: linear-gradient(
      transparent 0 25%,
      ${p => p.theme.colors.black}
    ),
    linear-gradient(transparent, transparent, ${p => p.theme.colors.black});
  opacity: 1;

  transition: opacity 0.5s linear;

  @media ${p => p.theme.device.desktop} {
    opacity: 0;

    ${Item}:hover & {
      opacity: 1;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding: 10px;
  justify-content: space-around;
`;

export const AlbumName = styled.p`
  width: 100%;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSize[1]}px;
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};
`;

export const DeleteBtn = styled(DeleteButton)`
  svg {
    fill: ${p => p.theme.colors.red};
  }

  &:hover {
    background-color: transparent;
    svg {
      fill: ${p => p.theme.colors.white};
    }
  }
`;
