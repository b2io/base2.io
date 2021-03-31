import styled from '@emotion/styled';
import React, { FC } from 'react';

export interface MenuIconProps {
  showClose?: boolean;
}

const Container = styled.div`
  height: 11px;
  margin: 0 auto;
  position: relative;
  width: 24px;
  span {
    background-color: ${({ theme }) => theme.colors.offWhite};
    height: 1px;
    position: absolute;
    right: 0;
    transition: 0.25s ease;
    width: 100%;

    &:nth-of-type(1) {
      transform-origin: top right;
      width: 19px;
    }

    &:nth-of-type(2) {
      top: 5px;
      transform-origin: 100% 50%;
      width: 16px;
    }

    &:nth-of-type(3) {
      bottom: 0;
      transform-origin: bottom right;
    }
  }

  &.close {
    span {
      width: 19px;

      &:nth-of-type(1) {
        transform: rotate(-45deg) scaleX(1.36125) translate(0px, -5px);
      }

      &:nth-of-type(2) {
        display: none;
      }

      &:nth-of-type(3) {
        transform: rotate(45deg) scaleX(1.36125) translate(0px, 5px);
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
