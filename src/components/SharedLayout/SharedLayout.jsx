import { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';

import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (scrollPosition > currentScrollPos) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }

      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition, isHeaderVisible]);

  return (
    <>
      <Header
        style={{
          transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
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
