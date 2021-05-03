import React, { FC } from 'react';
import { SvgProps } from '../types';

export const TransparencyIcon: FC<SvgProps> = ({
  height = '48px',
  width = '68px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-1 0 70 48"
      {...props}
    >
      <g
        strokeWidth="2"
        strokeDasharray="5"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          stroke="#5656B0"
          d="M24 47.7C37 47.7 47.4 37 47.4 24 47.4 11 37 .3 24 .3 11 .3.5 11 .5 24 .5 37 11 47.7 24 47.7z"
        />
        <path
          stroke="#F63A52"
          d="M44.3 47.7c13 0 23.5-10.6 23.5-23.7C67.8 11 57.3.3 44.3.3S21 11 21 24c0 13 10.5 23.7 23.4 23.7z"
        />
      </g>
    </svg>
  );
};
