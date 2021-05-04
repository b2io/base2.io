import React, { FC } from 'react';
import { SvgProps } from './types';

export const EmpathyIcon: FC<SvgProps> = ({
  height = '100%',
  width = '100%',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 54 48"
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
          d="M25.8 44.4l1.7-1.4a15.7 15.7 0 000-22.3A15.4 15.4 0 007.3 19M41.4 17.3a15.7 15.7 0 00-13.8 28.3M10 17.4a15.7 15.7 0 0031.4 0"
        />
        <path
          stroke="#5656B0"
          d="M25.8.4a15.7 15.7 0 0115.6 17 15.8 15.8 0 11-15.6 27 15.7 15.7 0 11-15.8-27A15.7 15.7 0 0125.8.4h0z"
        />
      </g>
    </svg>
  );
};
