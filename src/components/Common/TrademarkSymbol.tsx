import { css } from '@emotion/react';

export const TrademarkSymbol = () => (
  <sup
    css={css`
      font-size: 50%;
      top: -0.75em;
    `}
  >
    &reg;
  </sup>
);
