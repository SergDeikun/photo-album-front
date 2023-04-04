import styled from 'styled-components';

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 10;
  /* max-height: 0; */
  overflow: hidden;
  /* transition: max-height 0.25s ease-in-out; */
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: rgba(0, 0, 0, 0.9);

  /* background-color: #1c1c1c; */
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 500px; */
  text-align: center;
`;
