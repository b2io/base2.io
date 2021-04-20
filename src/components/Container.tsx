import styled, { StyledComponent } from '@emotion/styled';

import {
  atMinTablet,
  atMinXL,
  atMinXXL,
  atMinDesktop,
  viewMaxWidth,
} from '~/theme';

export const Container: StyledComponent<any> = styled.div(({ theme }) => ({
  [atMinDesktop]: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  [atMinTablet]: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },

  [atMinXL]: {
    paddingLeft: theme.spacing.xxl,
    paddingRight: theme.spacing.xxl,
  },

  [atMinXXL]: {
    maxWidth: viewMaxWidth.xxl,
  },

  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing.sm,
  paddingRight: theme.spacing.sm,
}));
