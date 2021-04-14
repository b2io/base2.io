import styled from '@emotion/styled';
import NextLink from 'next/link';
import React, { FC } from 'react';

import { Link } from './Link';

export type CTAProps = {
  href: string;
  isExternal?: boolean;
};

const A = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  '::after': {
    backgroundColor: theme.colors.action,
    content: '""',
    display: 'block',
    height: '0.125rem',
    marginTop: theme.spacing.xxs,
    width: '100%',
  },
  ':hover': {
    '::after': {
      backgroundColor: theme.colors.offWhite,
    },
  },
}));

export const CTA: FC<CTAProps> = ({ href, isExternal, ...props }) => {
  return isExternal ? (
    <A variant="CTA" href={href} {...props} />
  ) : (
    <NextLink href={href}>
      <A href={href} variant="CTA" {...props} />
    </NextLink>
  );
};

export default CTA;
