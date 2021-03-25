import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import { CTA } from '.';
import { MenuIcon } from './icons';

const textAnimation = `
  opacity: 0;

  .visible & {
    opacity: 1;
    transition: opacity 500ms ease 100ms;
  }
`;

const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.workThumbnailBg};
  height: 100%;
  left: 0;
  opacity: 0;
  position: fixed;
  top: 0;
  transform: scale(0, 0);
  transform-origin: top right;
  transition: transform 220ms ease-out, opacity 220ms ease-out;
  width: 100%;
  z-index: -1;

  &.visible {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

const IconButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 35px;
  width: 35px;
  padding: 0;
`;

const Nav = styled.nav`
  ${textAnimation}

  ul {
    list-style: none;
    padding: 163px 0 0 39px;
  }

  li {
    margin-bottom: 16px;
  }

  a {
    color: ${(props) => props.theme.colors.offWhite};
    font-size: 40px;
    font-weight: bold;
    line-height: 1.1;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.coral};
    }
  }
`;

const ContactLink = styled(CTA)`
  display: table;
  margin: 40px 40px 0;

  ${textAnimation}
`;

interface NavItemProps {
  href: string;
}

const NavItem: FC<NavItemProps> = ({ href, ...props }) => {
  return (
    <li>
      <Link href={href}>
        <a {...props} />
      </Link>
    </li>
  );
};

export const MobileMenu: FC = ({ ...props }) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  useLockBodyScroll(isOpen);

  return (
    <div {...props}>
      <IconButton onClick={() => toggleIsOpen()}>
        <MenuIcon showClose={isOpen} />
      </IconButton>

      <Menu className={isOpen ? 'visible' : ''}>
        <Nav>
          <ul>
            <NavItem href="/work">Work</NavItem>
            <NavItem href="/approach">Approach</NavItem>
            <NavItem href="/culture">Culture</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </Nav>

        <ContactLink href="tel:6143981158" isExternal>
          614.398.1158
        </ContactLink>
        <ContactLink href="mailto:info@base2.io" isExternal>
          info@base2.io
        </ContactLink>
      </Menu>
    </div>
  );
};
