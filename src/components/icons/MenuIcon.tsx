import styled from '@emotion/styled';
import React, { FC } from 'react';

import { colors } from '~/theme';

export interface MenuIconProps {
  showClose?: boolean;
}

const Container = styled.div`
  height: 11px;
  margin: 0 auto;
  position: relative;
  width: 24px;

  span {
    background-color: ${colors.offWhite};
    height: 1px;
    position: absolute;
    right: 0;
    transform-origin: right;
    transition: 0.25s ease;
    width: 100%;

    &:nth-of-type(1) {
      width: 19px;
    }

    &:nth-of-type(2) {
      opacity: 1;
      top: 5px;
      width: 16px;
    }

    &:nth-of-type(3) {
      bottom: 0;
    }
  }

  &.close {
    span {
      width: 100%;

      &:nth-of-type(1) {
        transform: rotate(-45deg) translate(0px, -5px);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        transform: rotate(45deg) translate(0px, 5px);
      }
    }
  }
`;

export const MenuIcon: FC<MenuIconProps> = ({ showClose, ...props }) => {
  return (
    <Container {...props} className={showClose ? 'close' : ''}>
      <span />
      <span />
      <span />
    </Container>
  );
};
