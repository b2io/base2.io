import React, { FC } from 'react';
import { SvgProps } from './types';

export const DeveloperIcon: FC<SvgProps> = ({
  height = '100%',
  width = '100%',
  ...props
}) => {
  return (
    <svg
      height={height}
      viewBox="0 0 50 50"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <g stroke="#5656b0">
          <path d="m19.546 19.26-4.2 4.2" />
          <path d="m19.546 27.66-4.2-4.2" />
          <path d="m30.19 27.66 4.2-4.2" />
          <path d="m30.19 19.26 4.2 4.2" />
          <path d="m27.46 16.11-5.184 15.828" />
        </g>
        <path
          d="m24.994159 48.2698305c12.9963647 0 23.532-10.5356352 23.532-23.532 0-12.9963647-10.5356353-23.53199998-23.532-23.53199998-12.9963648 0-23.53200002 10.53563528-23.53200002 23.53199998 0 12.9963648 10.53563522 23.532 23.53200002 23.532z"
          stroke="#f63a52"
          strokeDasharray="4.89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
