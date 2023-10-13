import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

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
  display: flex;
  align-items: end;
`;

export const FieldWrapper = styled.div``;

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
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  position: relative;
  flex-basis: calc((100% - 30px) / 4);
  border-radius: 3px;
  /* outline: 1px solid tomato; */

  /* display: flex; */
  align-items: center;
  width: 100%;
  height: 400px;
  /* padding: 5px; */
  border-radius: ${p => p.theme.borderRadius.small};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${p => p.theme.colors.grey};
    transform: scale(1.02);
  }
`;

export const LinkAlbum = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Thumb = styled.div`
  outline: 1px solid teal;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const IconAlbum = styled.img`
  /* width: 315px; */
  /* height: 70px; */
  /* width: 40px;
  
  height: 40px; */
  /* border-radius: 30%; */
  height: 100%;
`;

export const DefaultCover = styled(DefaultAlbumCover)`
  /* width: 40px;
  height: 40px; */
  width: 100%;
  height: 400px;
  /* border-radius: 30%; */
`;

// EditBox

export const EditBox = styled.div`
  /* outline: 1px solid tomato; */
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  height: 30%;
  padding: 10px 5px;
  text-align: center;
  /* background-image: linear-gradient(
    #242b33 11.98%,
    rgba(45, 52, 60, 0.38) 51.04%,
    #242b33 92.19%
  ); */
  background-image: linear-gradient(
    ${p => p.theme.colors.black} 11.98%,
    rgba(45, 52, 60, 0.38) 51.04%,
    ${p => p.theme.colors.black} 92.19%
  );
  /* background-image: linear-gradient(transparent 0 25%, black);
  background-image: linear-gradient(transparent 25% 0, black); */

  /* background-color: ${p => p.theme.colors.black}; */
  opacity: 0;
  transition: opacity 0.5s linear;

  ${Item}:hover & {
    opacity: 1;
  }
`;

export const AlbumName = styled.p`
  width: 100%;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.white};
`;

export const ButtonWrapper = styled.div`
  /* outline: 1px solid blue; */
  display: flex;
  align-items: center;
  /* margin-top: 115px; */
  margin-top: auto;
  justify-content: space-around;
  /* background-color: ${p => p.theme.colors.black}; */
`;

export const DeleteBtn = styled(DeleteButton)`
  /* margin-left: 80px; */
  /* border: 1px solid ${p => p.theme.colors.yellow}; */
  svg {
    fill: ${p => p.theme.colors.red};
  }
`;
