import Link from 'next/link';
import React, { FC } from 'react';
import { LogoWithName } from './';
import { atSm } from '~/breakpoints';

export const Header: FC = () => {
  return (
    <header>
      <LogoWithName height={40} />
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
    </header>
  );
};
