import styled from '@emotion/styled';
import { color, variant } from 'styled-system';

import { ThemeColor, ThemeTextVariants } from '~/theme';

export type TextProps = {
  color?: ThemeColor;
  variant?: ThemeTextVariants;
};

export const Text = styled.p<TextProps>(
  variant({ scale: 'textVariants' }),
  color,
);

Text.defaultProps = {
  variant: 'body',
};

export default Text;
