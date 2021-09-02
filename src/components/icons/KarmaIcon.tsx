import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const KarmaIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Karma',
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
      <g fill="#ECF0F4" fillRule="nonzero">
        <path
          d="m120.754 107.883 30.66 45.74h48.472l-54.93-81.159-24.202 35.419M23.04 132.408l22.45-21.149 35.892 42.364-23.04-84.98-19.454 32.002-15.848 31.763"
          fill="#AFB2B5"
        />
        <path
          d="m23.04 132.408 35.302-63.766-22.444 21.16L0 47.436l23.04 84.972M195.265.07h-48.471l-29.687 43.863V.07H72.645v45.491l23.706 87.37 5.524 20.69h15.231v-38.388L195.264.07"
          fill="#ECF0F4"
        />
      </g>
    </svg>
  );
};
