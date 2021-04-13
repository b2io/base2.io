import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';

import { Anchor } from './Anchor';

export type CTAProps = {
  href: string;
  isExternal?: boolean;
};

const A = styled(Anchor)(({ theme }) => ({
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
    <Link href={href}>
      <A variant="CTA" {...props} />
    </Link>
  );
};

export default CTA;
