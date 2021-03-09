import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';

export type CTAProps = {
  href: string;
};

const A = styled.a(({ theme }) => ({
  '::after': {
    content: '""',
    display: 'block',
    width: '100%',
    marginTop: 8,
    height: 2,
    backgroundColor: theme.colors.action,
  },
  color: theme.colors.text,
  display: 'inline-block',
  fontSize: 22,
  fontWeight: 900,
  lineHeight: '22px',
}));

export const CTA: FC<CTAProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <A>{children}</A>
    </Link>
  );
};

export default CTA;
