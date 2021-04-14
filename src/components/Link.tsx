import styled from '@emotion/styled';
import { variant } from 'styled-system';

import { ThemeLinkVariants } from '~/theme';

export type LinkProps = {
  variant?: ThemeLinkVariants;
};

export const Link = styled.a<LinkProps>(variant({ scale: 'linkVariants' }));

Link.defaultProps = {
  variant: 'default',
};

export default Link;
