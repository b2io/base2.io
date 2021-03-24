import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';

export type CTAProps = {
  href: string;
  isExternal?: boolean;
};

const A = styled.a(({ theme }) => ({
  color: theme.colors.text,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: 22,
  fontWeight: 900,
  lineHeight: '22px',
  textDecoration: 'none',
  '::after': {
    backgroundColor: theme.colors.action,
    content: '""',
    display: 'block',
    height: 2,
    marginTop: 8,
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
