import React, { FC } from 'react';
import { SvgProps } from './types';

export const EmbeddedIcon: FC<SvgProps> = ({
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
      <g fill="none" fillRule="evenodd">
        <circle cx="30.9" cy="16.3" r="5.7" stroke="#5656B0" />
        <circle cx="16.3" cy="16.3" r="5.7" stroke="#5656B0" />
        <circle cx="16.3" cy="30.9" r="5.7" stroke="#5656B0" />
        <circle cx="30.9" cy="30.9" r="5.7" fill="#F63A52" fillRule="nonzero" />
        <path
          stroke="#5656B0"
          strokeDasharray="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M23.6 47.2a23.6 23.6 0 100-47.2 23.6 23.6 0 000 47.2z"
        />
      </g>
    </svg>
  );
};
