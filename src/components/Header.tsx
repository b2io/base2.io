import Link from 'next/link';
import React, { FC } from 'react';
import { LogoWithName } from './';
import { atSm } from '~/breakpoints';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MenuIcon } from './icons';

const Container = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 87px;
`;

const Nav = styled.nav`
  display: none;
  ${atSm} {
    display: block;
  }

  ul {
    display: flex;
    gap: 40px;
    list-style: none;
  }

  a {
    color: ${(props) => props.theme.colors.offWhite};
    font-size: '17px  ';
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.coral};
    }
  }
`;

export const Header: FC = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <LogoWithName
            height="35px"
            css={css`
              width: auto;
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
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/approach">
              <a>Approach</a>
            </Link>
          </li>
          <li>
            <Link href="/culture">
              <a>Culture</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};
