import { selectIsLoggedIn } from 'redux/auth/selectors';

import { List, StyledNavLink } from 'components/Navigation/Navigation.styled';

const AuthNav = () => {
  return (
    <div>
      <List>
        <li>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </li>

        {selectIsLoggedIn && (
          <li>
            <StyledNavLink to="/login">Log In</StyledNavLink>
          </li>
        )}
      </List>
    </div>
  );
};

export default AuthNav;
