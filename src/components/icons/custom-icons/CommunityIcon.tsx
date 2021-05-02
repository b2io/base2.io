import React, { FC } from 'react';
import { SvgProps } from '../types';

export const CommunityIcon: FC<SvgProps> = ({
  height = '50px',
  width = '48px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <g strokeWidth="2" fill="none" fillRule="evenodd">
        <path
          stroke="#F63A52"
          strokeDasharray="5"
          strokeLinecap="round"
          d="M25.3 46.5a20.5 20.5 0 100-41 20.5 20.5 0 000 41z"
        />
        <circle
          cx="36.9"
          cy="43.1"
          r="4.9"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="11.9"
          cy="43.1"
          r="4.9"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="5.3"
          cy="18.7"
          r="4.9"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="44.9"
          cy="19.7"
          r="4.9"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="25.3"
          cy="4.9"
          r="4.9"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
      </g>
    </svg>
  );
};
