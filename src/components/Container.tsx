import styled, { StyledComponent } from '@emotion/styled';
import * as BP from '~/breakpoints';

export const Container: StyledComponent<any> = styled.div(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing.sm,
  paddingRight: theme.spacing.sm,
  width: '100%',

  [BP.atMinMd]: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },

  [BP.atMinXL]: {
    paddingLeft: theme.spacing.xxl,
    paddingRight: theme.spacing.xxl,
  },

  [BP.atMinXXL]: {
    maxWidth: BP.viewMaxWidth.xxl,
  },

  [BP.atMinXXL2]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
