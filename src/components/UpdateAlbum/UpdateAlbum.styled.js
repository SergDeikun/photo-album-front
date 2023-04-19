import styled from 'styled-components';
import { MdOutlineDelete } from 'react-icons/md';

export const Box = styled.div`
  margin-top: 80px;
`;

export const NameField = styled.input`
  background-color: ${p => p.theme.colors.red};
  height: 40px;
  border: none;
`;

export const PhotoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const PhotoItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  /* margin-left: 10px; */
  flex-basis: calc((100% - 30px) / 4);

  &:not(:last-child) {
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
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  width: 24px;
  height: 24px;
  fill: ${p => p.theme.colors.red};
`;
