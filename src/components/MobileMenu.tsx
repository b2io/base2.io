import React, { FC } from 'react';
import { MenuIcon } from './icons';

export const MobileMenu: FC = ({ ...props }) => {
  return (
    <div {...props}>
      <MenuIcon />
    </div>
  );
};
