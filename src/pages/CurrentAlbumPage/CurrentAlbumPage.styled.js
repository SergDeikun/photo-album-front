import styled from 'styled-components';

import Container from 'components/Container/Container';

export const BoxContainer = styled(Container)`
  position: relative;
  padding: 80px 1px 60px 1px;

  @media ${p => p.theme.device.tablet} {
    padding: 100px 10px 20px 10px;
  }
`;
