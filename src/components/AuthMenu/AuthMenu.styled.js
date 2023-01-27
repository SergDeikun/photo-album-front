import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperAuth = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  height: 100vh;
`;

export const BoxQuestion = styled.div`
  /* position: relative; */
  width: 80%;
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  background-color: rgba(34, 34, 34, 0.85);
  border-radius: 3px;
`;

// export const BoxOptionsText = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   background-color: rgba(34, 34, 34, 0.85);
//   border-radius: 3px;
// `;

export const BoxOptions = styled.div`
  width: 50%;
  padding: 75px 45px;
  color: white;
  font-weight: 300;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 27px;
  line-height: 22px;
`;

// export const Text = styled.div`
//   font-size: 13px;
//   line-height: 22px;
// `;

export const AuthLink = styled(Link)`
  display: block;
  width: 75px;
  text-align: center;
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px 30px;
  background-color: transparent;
  line-height: 16px;
  letter-spacing: 0.2rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  color: white;

  &:hover {
    color: rgba(34, 34, 34, 0.85);
    background-color: #ccc;
  }
`;
