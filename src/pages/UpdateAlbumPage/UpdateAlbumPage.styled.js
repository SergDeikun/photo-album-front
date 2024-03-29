import styled from 'styled-components';

import Container from 'components/Container/Container';

export const BoxContainer = styled(Container)`
  /* padding: 50px 1px 80px 1px; */
  padding: 10px 1px 80px 1px;

  @media ${p => p.theme.device.tablet} {
    padding: 50px 10px 60px 10px;
  }
`;
