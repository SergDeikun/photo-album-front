import { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { useLocation } from 'react-router-dom';

import MobileBar from 'components/MobileBar/MobileBar';
import AppBar from 'components/AppBar/AppBar';

import { Header, BoxContainer, LogoHeader } from './SharedLayout.styled';

const SharedLayout = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

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

  const shadow =
    scrollPosition > 0 ? '0 3px 6px 0 rgba(0, 0, 0, 0.05)' : 'none';

  return (
    <>
      <Header
        style={{
          transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
        }}
        shadow={shadow}
      >
        <BoxContainer>
          {/* {(isMobile && location.pathname === '/') ||
            location.pathname === '/login' ||
            (location.pathname === '/register' && <LogoHeader />)} */}
          {isMobile &&
            (location.pathname === '/' ||
              location.pathname === '/login' ||
              location.pathname === '/register') && <LogoHeader />}

          {isTabletOrDesktop && <AppBar />}
        </BoxContainer>
      </Header>

      <Suspense>
        <Outlet />
      </Suspense>

      {isMobile && <MobileBar />}
    </>
  );
};

export default SharedLayout;
