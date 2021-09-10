import { useId } from '@react-aria/utils';
import type { FC } from 'react';

import type { SvgProps } from './types';

export const EmpathyIcon: FC<SvgProps> = ({
  height = '48px',
  id,
  title = 'Empathy',
  width = '48px',
  ...props
}) => {
  const titleId = useId(id);

  return (
    <svg
      aria-labelledby={titleId}
      height={height}
      role="img"
      viewBox="0 0 54 50"
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
        <g stroke="#f63a52" strokeDasharray="5">
          <path d="m26.8 45.448c.5839841-.441931 1.1372589-.9230395 1.656-1.44 2.9527629-2.952598 4.6116217-6.9572793 4.6116217-11.133s-1.6588588-8.180402-4.6116217-11.133c-4.722-4.7219535-12.75-6.882-20.124-1.8" />
          <path d="m42.4 18.346c-6.9392965-2.8971323-14.9587018-.4846315-19.1477711 5.7602794-4.1890692 6.2449108-3.3791737 14.5800827 1.9337711 19.9017206 1.0274199 1.0007107 2.1740288 1.8712469 3.414 2.592" />
          <path d="m10.984 18.448c.6284364 8.2289961 7.5024937 14.5773999 15.7554078 14.5506892 8.2529141-.0268797 15.0856035-6.4197858 15.6605922-14.6526892" />
        </g>
        <path
          d="m26.8 1.384c4.3703608.02686897 8.5329016 1.8691684 11.4914211 5.08598943 2.9585195 3.21682104 4.4467713 7.51867177 4.1085789 11.87601057 5.6134533 2.3675415 9.3580628 7.7601594 9.6153115 13.8470251.2572488 6.0868657-3.0190046 11.7762058-8.412679 14.6089408s-11.937331 2.30077-16.8026325-1.3659659c-6.5998858 5.0001891-15.9449728 4.03373-21.38189061-2.2112928-5.43691776-6.2450227-5.10742523-15.6341723.75389061-21.4827072 1.37913746-1.3894588 3.00748521-2.5069125 4.8-3.294-.3715424-4.4138041 1.1333864-8.77993926 4.1456338-12.02741143 3.0122474-3.24747218 7.2531259-5.07583124 11.6823662-5.03658857z"
          stroke="#5656b0"
        />
      </g>
    </svg>
  );
};

export default EmpathyIcon;
