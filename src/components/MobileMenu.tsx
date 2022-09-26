import styled from '@emotion/styled';
import React, { FC } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';

import { colors, spacing } from '~/theme';

import { MenuIcon } from './icons';
import { Link } from './Link';

const Menu = styled.div`
  background-color: ${colors.workThumbnailBg};
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  transform: translateX(200vw);
  transition: transform 220ms ease-out;
  width: 100%;
  z-index: -1;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const IconButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 2.1875rem;
  padding: 0;
  width: 2.1875rem;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 10.25rem 0 0 2.5rem;
  }

  li {
    margin-bottom: ${spacing.xs};
  }

  a {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.1;
  }
`;

const ContactLink = styled(Link)`
  display: table;
  margin: 3rem ${spacing.lg} 0;
`;

export const MobileMenu: FC = ({ ...props }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  useLockBodyScroll(isOpen);

  return (
    <div {...props}>
      <IconButton
        aria-expanded={isOpen}
        aria-label="toggle mobile navigation"
        onClick={() => toggleIsOpen()}
      >
        <MenuIcon showClose={isOpen} />
      </IconButton>

      <Menu className={isOpen ? 'visible' : ''}>
        <Nav>
          <ul>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/approach">Approach</Link>
            </li>
            <li>
              <Link href="/culture">Culture</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>

        <ContactLink href="tel:6143981158" variant="CTA">
          614.398.1158
        </ContactLink>
        <ContactLink href="mailto:info@base2.io" variant="CTA">
          info@base2.io
        </ContactLink>
      </Menu>
    </div>
  );
};
