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
  background-color: ${p => p.theme.colors.darkGrey};

  border-radius: 3px;
`;

export const BoxOptions = styled.div`
  width: 50%;
  padding: 75px 45px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[3]}px;
  line-height: 22px;
  color: ${p => p.theme.colors.white};
`;

// export const Text = styled.div`
//   font-size: 13px;
//   line-height: 22px;
// `;

export const AuthLink = styled(Link)`
  display: block;
  width: 76px;
  text-align: center;
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: ${p => p.theme.borderRadius.small};
  padding: 10px 30px;
  background-color: transparent;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSize[1]}px;
  line-height: 16px;
  letter-spacing: 0.2rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  color: ${p => p.theme.colors.white};

  &:hover {
    color: ${p => p.theme.colors.darkGrey};
    background-color: ${p => p.theme.colors.grey};
  }
`;
