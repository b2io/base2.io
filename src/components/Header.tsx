import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { atMinTablet, atMinSm, atMinXXL, colors, spacing } from '~/theme';

import { Container } from './Container';
import { LogoWithName } from './icons';
import { Link } from './Link';
import { MobileMenu } from './MobileMenu';

const Root = styled.header`
  background-image: linear-gradient(
    to bottom,
    rgba(4, 0, 28, 0.84) 35%,
    rgba(6, 2, 27, 0)
  );
  height: 6.188rem;
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
  padding-bottom: ${spacing.xxl};
  padding-top: ${spacing.sm};

  ${atMinTablet} {
    padding-bottom: ${spacing.lg};
    padding-top: ${spacing.md};
  }
  ${atMinXXL} {
    padding-bottom: ${spacing.xxl};
    padding-top: ${spacing.md};
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
    margin-right: ${spacing.lg};
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
      background-color: ${colors.action};
    }
  }
`;

const LogoImage = styled(LogoWithName)`
  height: 2.1875rem;
  width: auto;

  ${atMinTablet} {
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
            <NavItem href="/approach">Approach</NavItem>
            <NavItem href="/culture">Culture</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </Nav>
      </Content>
    </Root>
  );
};
