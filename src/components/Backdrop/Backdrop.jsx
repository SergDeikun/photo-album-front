import { useTransition, animated } from '@react-spring/web';

import CloseButton from 'components/Buttons/CloseButton/CloseButton';

import { BackdropBox } from './Backdrop.styled';

const Backdrop = ({ data = [1, 2, 3], onClose, className, children }) => {
  const transitions = useTransition(data, {
    from: {
      opacity: 0,
      transition: 'opacity  ease',
      position: 'fixed',
      zIndex: '10',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    // config: { duration: 250 },
  });

  return transitions((style, item) =>
    item ? (
      <animated.div style={style}>
        <BackdropBox className={className || ''}>
          <CloseButton onClick={onClose} />
          {children}
        </BackdropBox>
      </animated.div>
    ) : null
  );

  // return transitions()=>(
  //   <BackdropBox className={className || ''}>
  //     <CloseButton onClick={onClose} />
  //     {children}
  //   </BackdropBox>
  // );
};

export default Backdrop;
