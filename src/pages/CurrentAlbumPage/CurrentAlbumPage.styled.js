import styled from 'styled-components';

import Container from 'components/Container/Container';

export const BoxContainer = styled(Container)`
  padding: 80px 5px 20px 5px;

  @media ${p => p.theme.device.tablet} {
    padding: 80px 10px 20px 10px;
  }
`;
