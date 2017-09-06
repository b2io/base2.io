import { css } from 'styled-components';

const fullWidth = css`
  --font: 'Roboto';
  max-width: 100%;
  overflow: hidden;
`;

const home = css`
--color-fg: white;
--color-bg: black;
`;

const logoWrapper = css`
  align-self: flex-start;
  margin: 0 auto auto;
`;

module.exports = {
  fullWidth,
  home,
  logoWrapper,
};
