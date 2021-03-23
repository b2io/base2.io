import styled from '@emotion/styled';
import React, { FC } from 'react';

export interface MenuIconProps {
  isClose?: boolean;
}

const Container = styled.div`
  height: 11px;
  margin: 0 auto;
  position: relative;
  width: 24px;
  span {
    background-color: ${(props: MenuIconProps) =>
      props.isClose ? 'red' : 'white'};
    height: 1px;
    position: absolute;
    right: 0;
    width: 100%;

    &:nth-of-type(1) {
      width: 19px;
    }

    &:nth-of-type(2) {
      top: 5px;
      width: 16px;
    }

    &:nth-of-type(3) {
      bottom: 0;
    }
  }
`;

export const MenuIcon: FC<MenuIconProps> = ({ ...props }) => {
  return (
    <Container {...props}>
      <span />
      <span />
      <span />
    </Container>
  );
};
