import React, { FC } from 'react';
import { SvgProps } from './types';

export const SupportIcon: FC<SvgProps> = ({
  height = '57px',
  width = '48px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-1 0 51 57"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          stroke="#F63A52"
          strokeWidth="2"
          d="M26.7.6l-4.2 4.3m4.2 4.3l-4.2-4.3"
        />
        <path
          stroke="#5656B0"
          strokeWidth="2"
          d="M22.5 56l4.2-4.3m-4.2-4.3l4.2 4.3"
        />
        <path
          stroke="#5656B0"
          strokeDasharray="5"
          strokeWidth="2.2"
          d="M20.8 51.7a23.7 23.7 0 01-2.1-46.4"
        />
        <path
          stroke="#F63A52"
          strokeDasharray="5"
          strokeWidth="2.2"
          d="M27.3 4.9a23.7 23.7 0 013.7 46"
        />
      </g>
    </svg>
  );
};
