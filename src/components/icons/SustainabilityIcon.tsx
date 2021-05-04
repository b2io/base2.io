import React, { FC } from 'react';
import { SvgProps } from './types';

export const SustainabilityIcon: FC<SvgProps> = ({
  height = '100%',
  width = '100%',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 55 50"
      {...props}
      preserveAspectRatio="xMidYMin slice"
      overflow="auto"
    >
      <g strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round">
        <path
          stroke="#F63A52"
          strokeDasharray="5"
          d="M42.6 3.6L9.2 18.5m0 0l-5.5 26m5.5-26l22.2 2.4-1.8 19 21.7-12.4L31.4 21 42.6 3.6M3.7 44.4L31.4 21"
        />
        <circle
          cx="9.2"
          cy="18.5"
          r="3.5"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="29.6"
          cy="39.9"
          r="3.5"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="31.4"
          cy="20.9"
          r="3.5"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="3.7"
          cy="44.4"
          r="3.5"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="51.3"
          cy="27.5"
          r="3.5"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
        <circle
          cx="42.6"
          cy="3.6"
          r="3.5"
          fill="#5656B0"
          fillRule="nonzero"
          stroke="#5656B0"
        />
      </g>
    </svg>
  );
};
