import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      {/* <Header>
        <Container>
          <nav>
            <List>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
              </li>
            </List>
          </nav>
        </Container>
      </Header> */}
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
