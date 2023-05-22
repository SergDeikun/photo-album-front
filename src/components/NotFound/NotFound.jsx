import { Box, Title, BackLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <Box>
      <Title>404 | Not Found</Title>
      <BackLink to={'/'}>Go back</BackLink>
    </Box>
  );
};

export default NotFound;
