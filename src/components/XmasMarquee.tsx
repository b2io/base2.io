import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  z-index: 999;
`;

const MarqueeText = styled.div`
  animation: ${marqueeAnimation} 10s linear infinite;
  display: inline-block;
`;

export const XmasMarquee: FC = () => {
  return (
    <MarqueeContainer>
      <MarqueeText>Happy Holidays! 🦌🦌🦌🦌🦌 🛷 💨</MarqueeText>
    </MarqueeContainer>
  );
};
