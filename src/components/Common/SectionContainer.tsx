import styled, { StyledComponent } from '@emotion/styled';

import { atMinXL } from '~/theme';

export const SectionContainer: StyledComponent<any> = styled.section(
  ({ theme }) => ({
    [atMinXL]: {
      marginLeft: theme.spacing.marginXl,
      marginRight: theme.spacing.marginXl,
    },
  }),
);
