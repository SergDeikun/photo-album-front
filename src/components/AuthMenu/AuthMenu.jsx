import { ListLink, ListItem, AuthLink } from './AuthMenu.styled';

const AuthMenu = ({ onClick }) => {
  return (
    <ListLink onClick={onClick}>
      <ListItem>
        <AuthLink to={'/login'}>Login</AuthLink>
      </ListItem>
      <ListItem>
        <AuthLink to={'/register'}>Register</AuthLink>
      </ListItem>
    </ListLink>
  );
};

export default AuthMenu;
