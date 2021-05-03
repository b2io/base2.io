import React, { FC } from 'react';
import { SvgProps } from '../types';

export const DeliveryIcon: FC<SvgProps> = ({
  height = '48px',
  width = '27px',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-1 0 30 48"
      {...props}
    >
      <g strokeWidth="2" fill="none" fillRule="evenodd">
        <circle cx="22.1" cy="37.4" r="3.2" stroke="#5656B0" />
        <circle cx="4.6" cy="37.4" r="3.2" stroke="#5656B0" />
        <circle
          cx="13.2"
          cy="44.7"
          r="3.2"
          stroke="#F63A52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#F63A52"
          strokeDasharray="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.2 41V4.3"
        />
        <path
          stroke="#F63A52"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.6 4.4L13 .1M8.7 4.4L13.1.1"
        />
        <path
          stroke="#5656B0"
          strokeDasharray="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.6 33.6V13.3"
        />
        <path
          stroke="#5656B0"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 13.5L4.5 9.2M.1 13.5l4.4-4.3"
        />
        <path
          stroke="#5656B0"
          strokeDasharray="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 33.6V13.3"
        />
        <path
          stroke="#5656B0"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M26.4 13.5L22 9.2m-4.4 4.3L22 9.2"
        />
      </g>
    </svg>
  );
};
