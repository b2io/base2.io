import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

import { atMinTablet, atMinXXL, colors, spacing } from '~/theme';

import { MobileMenu } from './MobileMenu';
import { useFeatureFlag } from '../../context/FeatureFlagsProvider';
import { Container } from '../Common/Container';
import { Link } from '../Common/Link';
import { LogoWithName } from '../icons';
import { XmasMarquee } from '../XmasMarquee';

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

  ${atMinTablet} {
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
    <NextLink href="/" legacyBehavior>
      <a aria-label="go to home">
        <LogoImage />
      </a>
    </NextLink>
  );
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({ href, ...props }) => {
  const { asPath } = useRouter();

  return (
    <li className={asPath == href ? 'active' : ''}>
      <Link href={href} {...props} />
    </li>
  );
};

export const Header: FC = ({ ...props }) => {
  const isXmasMarqueeEnabled = useFeatureFlag('xmas-marquee');

  return (
    <Root>
      <Content {...props}>
        <LogoLink />
        {isXmasMarqueeEnabled && <XmasMarquee />}
        <MobileMenu
          css={css`
            ${atMinTablet} {
              display: none;
            }
          `}
        />
        <Nav>
          <ul>
            <NavItem href="/work">Work</NavItem>
            <NavItem href="/approach">Approach</NavItem>
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/culture">Culture</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </Nav>
      </Content>
    </Root>
  );
};
