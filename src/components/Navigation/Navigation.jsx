import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { List, StyledNavLink } from 'components/Navigation/Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <List>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>

        {isLoggedIn && (
          <li>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </li>
        )}
      </List>
    </nav>
  );
};

export default Navigation;
