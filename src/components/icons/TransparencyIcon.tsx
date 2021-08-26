import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import { SvgProps } from './types';

export const TransparencyIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Transparency',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 70 50"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g
        style={
          {
            fill: 'none',
            fillRule: 'evenodd',
            strokeDasharray: '4 3',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: 2,
          } as React.CSSProperties
        }
      >
        <path
          d="m24.9747802 48.6553846c12.9478608 0 23.4441758-10.5908764 23.4441758-23.6553846s-10.496315-23.65538462-23.4441758-23.65538462-23.4441758 10.59087642-23.4441758 23.65538462 10.496315 23.6553846 23.4441758 23.6553846z"
          stroke="#5656b0"
        />
        <path
          d="m45.3329121 48.6553846c12.9478608 0 23.4441758-10.5908764 23.4441758-23.6553846s-10.496315-23.65538462-23.4441758-23.65538462-23.4441758 10.59087642-23.4441758 23.65538462 10.496315 23.6553846 23.4441758 23.6553846z"
          stroke="#f63a52"
        />
      </g>
    </svg>
  );
};
