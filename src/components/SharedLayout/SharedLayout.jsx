import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';

import { Header } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
