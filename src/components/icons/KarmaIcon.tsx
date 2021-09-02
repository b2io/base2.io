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
        <path d="M75.305 68.967h12.647l3.141-4.325v-33.88H72.164v33.883l3.141 4.323" />
        <path d="M78.843 135.038h5.246v-25.756h-5.246v25.756zM32.075 100.82l-1.62-4.989 24.493-7.956 1.62 4.99-24.492 7.955m31.603-39.204L48.544 40.78l4.245-3.084 15.136 20.838-4.246 3.082m36.162.192-4.244-3.084 15.137-20.838 4.245 3.083-15.138 20.84m31.24 39.324-24.495-7.96 1.62-4.99 24.494 7.96-1.62 4.99M92.194 72.05l3.91 12.029 5.084 1.65L133.41 75.26l-5.848-18.002L95.337 67.73l-3.144 4.321m2.302 17.017L84.262 96.5l.002 5.345 19.914 27.411 15.315-11.125-19.918-27.413-5.08-1.651zm-15.478 7.436-10.23-7.436-5.085 1.655-19.914 27.41L59.1 129.257l19.917-27.412v-5.342M67.164 84.08l3.908-12.027-3.143-4.326-32.222-10.47-5.85 18.003 32.228 10.47 5.08-1.65m14.48-82.726C36.627 1.353 0 37.973 0 82.986c0 45.03 36.627 81.66 81.647 81.66 45.015 0 81.637-36.63 81.637-81.66 0-45.012-36.622-81.633-81.637-81.633zm0 16.53c35.95 0 65.107 29.143 65.107 65.103 0 35.972-29.156 65.129-65.106 65.129-35.964 0-65.115-29.157-65.115-65.129 0-35.96 29.15-65.104 65.115-65.104" />
      </g>
    </svg>
  );
};
