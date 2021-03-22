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

export const Header: FC = () => {
  return (
    <Container>
      <LogoWithName
        height="35px"
        css={css`
          width: auto;
        `}
      />
      <MenuIcon
        css={() => ({
          [atSm]: {
            display: 'none',
          },
        })}
      />
      <nav
        css={() => ({
          display: 'none',
          [atSm]: {
            display: 'block',
          },
        })}
      >
        <ul>
          <li>
            <Link href="/">
              <a>Base Two</a>
            </Link>
          </li>
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
      </nav>
    </Container>
  );
};
