import { css } from '@emotion/react';
import type { FC } from 'react';

import { LogoIcon } from './icons';

export type OpenGraphImageProps = Record<string, never>;

export const OpenGraphImage: FC<OpenGraphImageProps> = () => {
  return (
    <div
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 627px;
        justify-content: center;
        padding: 16px 6px;
        text-align: center;
        width: 1200px;
      `}
    >
      <LogoIcon height={250} width={250} />
    </div>
  );
};
