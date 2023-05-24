import {
  Box,
  Title,
  ErrorNumber,
  VerticalLine,
  BackLink,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <Box>
      <Title>
        <ErrorNumber>404</ErrorNumber> <VerticalLine></VerticalLine> Not Found
      </Title>
      <BackLink to={'/'}>Go back</BackLink>
    </Box>
  );
};

export default NotFound;
