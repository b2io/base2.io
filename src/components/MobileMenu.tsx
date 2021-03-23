import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon isClose={isOpen} />
      </IconButton>
      {isOpen && <Background></Background>}
    </div>
  );
};
