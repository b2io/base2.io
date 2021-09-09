import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const CommunityIcon: FC<SvgProps> = ({
  height = '100%',
  id,
  title = 'Community',
  width = '100%',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 52 50"
      width={width}
      {...props}
    >
      <title id={titleId}>{title}</title>
      <g
        fill="none"
        fillRule="evenodd"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <path
          d="m25.2693333 46.5173333c11.3490835 0 20.5493334-9.2002499 20.5493334-20.5493333s-9.2002499-20.54933333-20.5493334-20.54933333c-11.3490834 0-20.5493333 9.20024993-20.5493333 20.54933333s9.2002499 20.5493333 20.5493333 20.5493333z"
          stroke="#f63a52"
          strokeDasharray="5"
          strokeLinecap="round"
        />
        <g fill="#5656b0" fillRule="nonzero" stroke="#5656b0">
          <circle cx="36.864" cy="43.056" r="4.933" />
          <circle cx="11.883" cy="43.056" r="4.933" />
          <circle cx="5.28" cy="18.656" r="4.933" />
          <circle cx="44.853" cy="19.744" r="4.933" />
          <circle cx="25.269" cy="4.944" r="4.933" />
        </g>
      </g>
    </svg>
  );
};

export default CommunityIcon;
