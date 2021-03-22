import Link from 'next/link';
import React, { FC } from 'react';
import { LogoWithName } from './';
import { atLg, atMd, atSm } from '~/breakpoints';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MenuIcon } from './icons';
import { useRouter } from 'next/router';

const Container = styled.header`
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    rgba(4, 0, 28, 0.84) 35%,
    rgba(6, 2, 27, 0)
  );
  display: flex;
  height: 146px;
  justify-content: space-between;
  left: 0;
  margin: 0 auto;
  max-width: 1441px;
  padding: 24px 24px 87px;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;

  ${atMd} {
    padding: 36px 40px 87px;
  }

  ${atLg} {
    padding: 32px 80px 87px;
  }
`;

const Nav = styled.nav`
  display: none;

  ${atSm} {
    display: block;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }

    &::after {
      background-color: transparent;
      content: '';
      display: block;
      height: 2px;
      margin-top: 2px;
    }

    &.active::after {
      background-color: ${({ theme }) => theme.colors.action};
    }
  }

  a {
    color: ${(props) => props.theme.colors.offWhite};
    font-size: 17px;
    line-height: 28px;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.coral};
    }
  }
`;

interface NavItemProps {
  href: string;
}

const NavItem: FC<NavItemProps> = ({ href, ...props }) => {
  const { asPath } = useRouter();

  return (
    <li className={asPath == href ? 'active' : ''}>
      <Link href={href}>
        <a {...props} />
      </Link>
    </li>
  );
};

export const Header: FC = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <LogoWithName
            css={css`
              height: 35px;
              width: auto;

              ${atMd} {
                height: 53px;
              }

              ${atLg} {
                height: 60px;
              }
            `}
          />
        </a>
      </Link>
      <MenuIcon
        css={() => ({
          [atSm]: {
            display: 'none',
          },
        })}
      />
      <Nav>
        <ul>
          <NavItem href="/work">Work</NavItem>
          <NavItem href="/approach">Approach</NavItem>
          <NavItem href="/culture">Culture</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </ul>
      </Nav>
    </Container>
  );
};
