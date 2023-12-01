import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const HTML5Icon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'HTML5Icon',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 260 250"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <path fill="#FF5722" d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0z"></path>
      <path
        fill="#FAFAFA"
        d="M12.235 4.709h-6.71l.16 1.809h6.39l-.481 5.424L8 12.945l-.003.001-3.592-1.004-.251-2.837h1.76l.131 1.472 1.953.531.002-.001 1.955-.531.204-2.291H4.082l-.474-5.341h8.783z"
      ></path>
    </svg>
  );
};
