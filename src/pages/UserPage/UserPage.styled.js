import styled from 'styled-components';

import Container from 'components/Container/Container';

export const BoxContainer = styled(Container)`
  padding: 50px 1px 60px 1px;

  @media ${p => p.theme.device.tablet} {
    padding: 70px 10px 20px 10px;
  }
`;
