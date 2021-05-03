import React, { FC } from 'react';
import { SvgProps } from './types';

export const DiscoveryIcon: FC<SvgProps> = ({
  height = '48px',
  width = '48px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-1 0 52 48"
      {...props}
    >
      <g strokeWidth="2" fill="none" fillRule="evenodd">
        <path
          stroke="#F63A52"
          strokeDasharray="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M45.3 21.3L21.4 45m-4.8-3.8l-6.3 6.4a1 1 0 01-1.6 0 27.5 27.5 0 1139-39 1 1 0 010 1.6l-6.2 6.2"
        />
        <circle cx="29.8" cy="29.6" r="17.6" stroke="#5656B0" />
        <path stroke="#5656B0" strokeLinecap="round" d="M42.2 42L46 46" />
      </g>
    </svg>
  );
};
