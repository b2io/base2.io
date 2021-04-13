import styled from '@emotion/styled';
import { variant } from 'styled-system';

import { ThemeAnchorVariants } from '~/theme';

export type AnchorProps = {
  variant?: ThemeAnchorVariants;
};

export const Anchor = styled.a<AnchorProps>(
  variant({ scale: 'anchorVariants' }),
);

Anchor.defaultProps = {
  variant: 'default',
};

export default Anchor;
