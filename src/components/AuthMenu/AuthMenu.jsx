import { ListLink, ListItem, AuthLink } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <ListLink>
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
