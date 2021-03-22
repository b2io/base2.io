import React, { FC } from 'react';
import { SvgProps } from './types';

export const MenuIcon: FC<SvgProps> = ({
  height = '11px',
  width = '25px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 25 11"
      {...props}
    >
      <path
        fill="#FFF"
        d="M5.062 0H24.297V1H5.062zM8.099 5H24.297V6H8.099zM0 10H24.297V11H0z"
        transform="translate(-320 -36) translate(24 24) translate(296.628 12)"
      />
    </svg>
  );
};
