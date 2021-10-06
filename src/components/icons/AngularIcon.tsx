import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const AngularIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Angular',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 200 200"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g fill="none">
        <path
          d="m94 0 93.1 33.2-14.2 123.1L94 200l-78.9-43.7L.9 33.2 94 0zm0 22.1L35.8 152.6h21.7l11.7-29.2h49.4l11.7 29.2H152L94 22.1zm0 42.4 17 40.9H77l17-40.9z"
          fill="#ECF0F4"
        />
        <path
          d="m94 0 93.1 33.2-14.2 123.1L94 200v-76.601l24.6.001 11.7 29.2H152L94 22.1V0zm0 64.5 17 40.9-17-.001V64.5z"
          fill="#AFB2B5"
        />
      </g>
    </svg>
  );
};
