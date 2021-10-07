import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const noise = keyframes`
 0% {
    transform: translate(0);
  }
  10% {
    transform: translate(-5%, -5%);
  }
  20% {
    transform: translate(-10%, 5%);
  }
  30% {
    transform: translate(5%, -10%);
  }
  40% {
    transform: translate(-5%, 15%);
  }
  50% {
    transform: translate(-10%, 5%);
  }
  60% {
    transform: translate(15%);
  }
  70% {
    transform: translateY(10%);
  }
  80% {
    transform: translate(-15%);
  }
  90% {
    transform: translate(10%, 5%);
  }
  100% {
    transform: translate(5%);
  }
`;

export const BGNoise = styled.div`
  background: transparent url('/noise.png') repeat 0 0;
  background-repeat: repeat;
  bottom: -50%;
  height: 200vh;
  left: -50%;
  opacity: 0.1;
  pointer-events: none;
  position: fixed;
  right: -50%;
  top: -50%;
  visibility: visible;
  width: 200%;
  z-index: 1;
`;
