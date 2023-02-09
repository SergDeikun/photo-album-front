import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Container>
          <AppBar />
        </Container>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
