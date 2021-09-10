import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import { SvgProps } from './types';

export const DashIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Dash',
  width = '100%',
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
      <rect width="40" height="4" fill="#3F51B5" />
    </svg>
  );
};

export default DashIcon;
