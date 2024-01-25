import styled from '@emotion/styled';
import { color, variant } from 'styled-system';

import { ThemeColor, ThemeTextVariants } from '~/theme';

export type HeadingProps = {
  color?: ThemeColor;
  variant?: ThemeTextVariants;
};

export const Heading = styled('h1')<HeadingProps>(
  variant({ scale: 'textVariants' }),
  color,
);

Heading.defaultProps = {
  variant: 'h1',
};

export default Heading;
