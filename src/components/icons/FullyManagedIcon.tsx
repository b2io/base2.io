import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import { SvgProps } from './types';

export const FullyManagedIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Fully Managed',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 55 48"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="m54.252 4.609h-1.584"
          stroke="#231f20"
          strokeLinecap="round"
          strokeWidth="1.32"
        />
        <path
          d="m48.70008 4.60944h-34.39656c-5.30140341 0-9.59904 4.29763659-9.59904 9.59904 0 5.3014034 4.29763659 9.59904 9.59904 9.59904h30.34944c5.3026843.0043715 9.5990694 4.3042739 9.5990694 9.60696v.792c.0062823 2.5499379-1.0022551 4.9975997-2.8031089 6.8029111-1.8008537 1.8053113-4.2460148 2.8198889-6.7959605 2.8198889h-36.38448"
          stroke="#5656b0"
          strokeDasharray="2.647"
          strokeLinecap="round"
          strokeWidth="1.32"
        />
        <path
          d="m6.288 43.829h-1.584"
          stroke="#231f20"
          strokeLinecap="round"
          strokeWidth="1.32"
        />
        <g fillRule="nonzero">
          <circle cx="50.704" cy="4.499" fill="#5656b0" r="3.96" />
          <circle cx="16.093" cy="4.609" fill="#5656b0" r="3.96" />
          <circle cx="37.802" cy="23.752" fill="#f63a52" r="3.96" />
          <circle cx="4.704" cy="43.829" fill="#5656b0" r="3.96" />
        </g>
      </g>
    </svg>
  );
};
