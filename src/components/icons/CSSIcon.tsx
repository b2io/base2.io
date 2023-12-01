import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const CSSIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'CSSIcon',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 100 100"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.274 4.709-.161 1.809-.485 5.424L8 12.944l-.002.001-3.625-1.004-.254-2.836h1.776l.132 1.472 1.971.532.002-.002 1.973-.532.269-2.451-6.208.017-.176-1.677 6.533-.076.132-1.795-6.84.019-.115-1.668h8.864l-.158 1.765z"></path>
    </svg>
  );
};
