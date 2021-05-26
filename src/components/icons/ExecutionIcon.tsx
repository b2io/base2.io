import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const ExecutionIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Execution',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 50 43"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          d="m21.3582609 41.4504348c11.1023642 0 20.1026087-9.0002445 20.1026087-20.1026087s-9.0002445-20.10260871-20.1026087-20.10260871-20.10260873 9.00024451-20.10260873 20.10260871 9.00024453 20.1026087 20.10260873 20.1026087z"
          stroke="#f63a52"
          strokeDasharray="5"
        />
        <path
          d="m11.293913 25.0469565c1.2417392 1.1530435 8.6191305 8.6139131 8.6191305 8.6139131l28.8313043-28.83130438"
          stroke="#5656b0"
        />
      </g>
    </svg>
  );
};
