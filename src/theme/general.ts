import { colors } from './colors';
import { spacing } from './spacing';

export const general = {
  borderRadius: '10px',
  boxShadow: '0 16px 21px 0 rgba(0, 0, 0, 0.53)',
};

export const ul = {
  li: {
    '::before': {
      borderBottom: `solid 1px ${colors.coral}`,
      content: '""',
      left: 0,
      // position: 'absolute', // <-- position breaks build for some reason
      top: '0.925rem',
      width: '1.125rem',
    },
    marginTop: `${spacing.xxxs}`,
    padding: `0 ${spacing.md}`,
    // position: 'relative', // <-- position breaks build for some reason
  },
  lineHeight: 1.75,
  listStyle: 'none',
};
