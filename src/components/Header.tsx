import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { atMinMd, atMinSm, atMinXXL } from '~/theme';
import { Link } from './Link';
import { Container } from './Container';
import { LogoWithName } from './icons';
import { MobileMenu } from './MobileMenu';

const Root = styled.header`
  background-image: linear-gradient(
    to bottom,
    rgba(4, 0, 28, 0.84) 35%,
    rgba(6, 2, 27, 0)
  );
  height: 9.125rem;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1100;
`;

const Content = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  padding-top: ${({ theme }) => theme.spacing.sm};

  ${atMinMd} {
    padding-bottom: ${({ theme }) => theme.spacing.lg};
    padding-top: ${({ theme }) => theme.spacing.md};
  }
  ${atMinXXL} {
    padding-bottom: ${({ theme }) => theme.spacing.xxl};
    padding-top: ${({ theme }) => theme.spacing.md};
  }
`;

const Nav = styled.nav`
  display: none;

  ${atMinSm} {
    display: block;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: ${({ theme }) => theme.spacing.lg};
    &:last-child {
      margin-right: 0;
    }

    &::after {
      background-color: transparent;
      content: '';
      display: block;
      height: 0.125rem;
      margin-top: 0.125rem;
    }

    &.active::after {
      background-color: ${({ theme }) => theme.colors.action};
    }
  }
`;

const LogoImage = styled(LogoWithName)`
  height: 2.1875rem;
  width: auto;

  ${atMinMd} {
    height: 3.3125rem;
  }

  ${atMinXXL} {
    height: 3.75rem;
  }
`;

interface NavItemProps {
  href: string;
}

const LogoLink: FC = () => {
  return (
    <NextLink href="/">
      <a aria-label="go to home">
        <LogoImage />
      </a>
    </NextLink>
  );
};

const NavItem: FC<NavItemProps> = ({ href, ...props }) => {
  const { asPath } = useRouter();

  return (
    <li className={asPath == href ? 'active' : ''}>
      <Link href={href} {...props} />
    </li>
  );
};

export const Header: FC = ({ ...props }) => {
  return (
    <Root>
      <Content {...props}>
        <LogoLink />
        <MobileMenu
          css={css`
            ${atMinSm} {
              display: none;
            }
          `}
        />
        <Nav>
          <ul>
            <NavItem href="/work">Work</NavItem>
            <NavItem href="/approach">Approach</NavItem>
            <NavItem href="/culture">Culture</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </Nav>
      </Content>
    </Root>
  );
};
