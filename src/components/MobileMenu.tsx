import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import { MenuIcon } from './icons';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.workThumbnailBg};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const IconButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 35px;
  width: 35px;
  padding: 0;
`;

export const MobileMenu: FC = ({ ...props }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  useLockBodyScroll(isOpen);

  return (
    <div {...props}>
      <IconButton onClick={() => toggleIsOpen()}>
        <MenuIcon showClose={isOpen} />
      </IconButton>
      {isOpen && <Background></Background>}
    </div>
  );
};
