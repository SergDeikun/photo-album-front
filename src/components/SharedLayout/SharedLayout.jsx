import { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';

import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsAppBarVisible(true);
      } else {
        setIsAppBarVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isAppBarVisible]);

  return (
    <>
      <Header
        style={{
          transform: isAppBarVisible ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
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
