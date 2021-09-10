import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import { SvgProps } from './types';

export const SustainabilityIcon: FC<SvgProps> = ({
  height = '48px',
  id,
  title = 'Sustainability',
  width = '48px',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 57 50"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeWidth="2">
        <path
          d="m43.565 4.572-33.381 14.901"
          stroke="#f63a52"
          strokeDasharray="5"
        />
        <path
          d="m10.184 19.473-5.457 25.955"
          stroke="#f63a52"
          strokeDasharray="5"
        />
        <path
          d="m10.1905882 19.4729412 22.242353 2.4141176-1.8282353 19.0164706 21.7270588-12.36-19.8988235-6.6564706 11.1317647-17.31529409"
          stroke="#f63a52"
          strokeDasharray="5"
        />
        <path
          d="m4.727 45.428 27.706-23.541"
          stroke="#f63a52"
          strokeDasharray="5"
        />
        <g fill="#5656b0" fillRule="nonzero" stroke="#5656b0">
          <circle cx="10.184" cy="19.473" r="3.529" />
          <circle cx="30.605" cy="40.904" r="3.529" />
          <circle cx="32.433" cy="21.887" r="3.529" />
          <circle cx="4.727" cy="45.428" r="3.529" />
          <circle cx="52.332" cy="28.544" r="3.529" />
          <circle cx="43.565" cy="4.572" r="3.529" />
        </g>
      </g>
    </svg>
  );
};

export default SustainabilityIcon;
