import { css } from '@emotion/react';

export const TrademarkSymbol = () => (
  <sup
    css={css`
      font-size: 50%;
      vertical-align: middle;
    `}
  >
    &reg;
  </sup>
);
