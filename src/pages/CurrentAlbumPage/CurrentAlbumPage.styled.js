import styled from 'styled-components';

import Container from 'components/Container/Container';

export const BoxContainer = styled(Container)`
  position: relative;
  padding: 100px 1px 60px 1px;

  @media ${p => p.theme.device.tablet} {
    padding: 100px 20px 20px 20px;
  }
`;
