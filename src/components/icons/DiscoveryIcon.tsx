import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const DiscoveryIcon: FC<SvgProps> = ({
  height = '48px',
  id,
  title = 'Discovery',
  width = '48px',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 50 50"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g fill="none" fillRule="evenodd" strokeWidth="2">
        <path
          d="m46.289 22.254-23.858 23.859"
          stroke="#f63a52"
          strokeDasharray="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m17.6447059 42.3152941-6.3529412 6.3529412c-.2061764.2135111-.4902496.3340967-.7870588.3340967s-.58088245-.1205856-.78705884-.3340967c-10.75395831-10.7539588-10.75395813-28.1895705.00000041-38.94352901 10.75395853-10.75395854 28.18957023-10.75395872 38.94352903-.00000041.2135111.20617639.3340967.49024962.3340967.78705882s-.1205856.5808824-.3340967.7870588l-6.1764706 6.1764706"
          stroke="#f63a52"
          strokeDasharray="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g stroke="#5656b0">
          <circle cx="30.802" cy="30.619" r="17.605" />
          <path d="m43.247 43.071 3.798 3.797" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

export default DiscoveryIcon;
