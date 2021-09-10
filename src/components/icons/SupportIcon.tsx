import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import { SvgProps } from './types';

export const SupportIcon: FC<SvgProps> = ({
  height = '48px',
  id,
  title = 'Support',
  width = '48px',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 50 58"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g strokeWidth="2">
          <path d="m27.714 1.566-4.228 4.308" stroke="#f63a52" />
          <path d="m27.714 10.182-4.228-4.308" stroke="#f63a52" />
          <path d="m23.486 57.049 4.228-4.307" stroke="#5656b0" />
          <path d="m23.486 48.434 4.228 4.308" stroke="#5656b0" />
        </g>
        <path
          d="m21.7876923 52.7415385c-11.2540991-1.6036038-19.77619196-10.9855949-20.29387779-22.3415754s7.11543868-21.4744405 18.17695469-24.09534772"
          stroke="#5656b0"
          strokeDasharray="5"
          strokeWidth="2.2"
        />
        <path
          d="m28.2615385 5.87384615c10.9297907 1.58258513 19.3112028 10.51555745 20.1949349 21.52391415.8837321 11.0083568-5.9652782 21.1640014-16.5026272 24.469932"
          stroke="#f63a52"
          strokeDasharray="5"
          strokeWidth="2.2"
        />
      </g>
    </svg>
  );
};

export default SupportIcon;
