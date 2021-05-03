import React, { FC } from 'react';
import { SvgProps } from './types';

export const FullyManagedIcon: FC<SvgProps> = ({
  height = '55px',
  width = '48px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 55 48"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#5656B0"
          strokeDasharray="2.6"
          strokeLinecap="round"
          strokeWidth="1.3"
          d="M48.7 4.6H14.3a9.6 9.6 0 100 19.2h30.4c5.3 0 9.6 4.3 9.6 9.6v.8a9.6 9.6 0 01-9.6 9.6H8.3"
        />
        <circle cx="50.7" cy="4.5" r="4" fill="#5656B0" fillRule="nonzero" />
        <circle cx="16.1" cy="4.6" r="4" fill="#5656B0" fillRule="nonzero" />
        <circle cx="37.8" cy="23.8" r="4" fill="#F63A52" fillRule="nonzero" />
        <circle cx="4.7" cy="43.8" r="4" fill="#5656B0" fillRule="nonzero" />
      </g>
    </svg>
  );
};
