import React, { FC } from 'react';
import { SvgProps } from './types';

export const ExecutionIcon: FC<SvgProps> = ({
  height = '41px',
  width = '48px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-1 1 51 39"
      {...props}
    >
      <g
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          stroke="#F63A52"
          strokeDasharray="5"
          d="M20.4 40.5a20.1 20.1 0 100-40.3 20.1 20.1 0 000 40.3z"
        />
        <path stroke="#5656B0" d="M10.3 24l8.6 8.7L47.7 3.8" />
      </g>
    </svg>
  );
};
