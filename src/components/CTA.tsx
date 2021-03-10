import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';

export type CTAProps = {
  href: string;
};

const A = styled.a(({ theme }) => ({
  color: theme.colors.text,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: 22,
  fontWeight: 900,
  lineHeight: '22px',
  '::after': {
    backgroundColor: theme.colors.action,
    content: '""',
    display: 'block',
    height: 2,
    marginTop: 8,
    width: '100%',
  },
}));

export const CTA: FC<CTAProps> = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <A {...props} />
    </Link>
  );
};

export default CTA;
