import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';

export type CTAProps = {
  href: string;
  isExternal?: boolean;
};

const A = styled.a(({ theme }) => ({
  ...theme.textVariants.CTA,
  cursor: 'pointer',
  display: 'inline-block',
  textDecoration: 'none',
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
    <A href={href} {...props} />
  ) : (
    <Link href={href}>
      <A {...props} />
    </Link>
  );
};

export default CTA;
