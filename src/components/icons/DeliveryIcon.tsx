import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import { SvgProps } from './types';

export const DeliveryIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Delivery',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 29 50"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g fill="none" fillRule="evenodd" strokeWidth="2">
        <circle cx="23.067" cy="38.421" r="3.158" stroke="#5656b0" />
        <circle cx="5.623" cy="38.421" r="3.158" stroke="#5656b0" />
        <g strokeLinecap="round" strokeLinejoin="round">
          <circle cx="14.225" cy="45.747" r="3.158" stroke="#f63a52" />
          <path
            d="m14.225 42.015v-36.733"
            stroke="#f63a52"
            strokeDasharray="5"
          />
          <path d="m18.564 5.434-4.421-4.339" stroke="#f63a52" />
          <path d="m9.716 5.434 4.427-4.339" stroke="#f63a52" />
          <path
            d="m5.623 34.556v-20.217"
            stroke="#5656b0"
            strokeDasharray="5"
          />
          <path d="m9.962 14.491-4.421-4.339" stroke="#5656b0" />
          <path d="m1.12 14.491 4.421-4.339" stroke="#5656b0" />
          <path
            d="m23.067 34.556v-20.217"
            stroke="#5656b0"
            strokeDasharray="5"
          />
          <path d="m27.406 14.491-4.421-4.339" stroke="#5656b0" />
          <path d="m18.564 14.491 4.421-4.339" stroke="#5656b0" />
        </g>
      </g>
    </svg>
  );
};
