import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React, { FC } from 'react';

import { LogoIcon } from './icons/LogoIcon';
import { onlyXs, atMinMd, atMinLg } from '~/theme';
import { Container } from './Container';
import { Heading } from '~/components';

const FooterWrapper = styled.div`
  margin-left: 1.688rem;
  max-width: 1600px;
  padding-top: 4rem;
  position: relative;

  ${atMinMd} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-left: 0;
    padding-bottom: 5rem;
  }
`;

const Branding = styled.div`
  ${atMinLg} {
    flex: 1;
  }
`;

const FooterLogo = styled(LogoIcon)`
  display: block;
  height: 3.562rem;
  width: auto;

  ${atMinMd} {
    height: 3.5rem;
  }
`;

const Slogan = styled(Heading)`
  color: ${(props) => props.theme.colors.offWhite};
  margin: 0.625rem 0 0;
  width: 13.062rem;
`;

const Nav = styled.nav`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 1.063rem;

  ${atMinLg} {
    flex: 1;
  }

  ul {
    columns: 2;
    list-style: none;
    margin: 4rem 0 0 0;
    padding-left: 0;

    ${atMinMd} {
      column-gap: 3rem;
      margin-top: 0;
    }

    ${atMinLg} {
      width: 60%;
    }

    li {
      margin-bottom: 1.25rem;

      &:last-child {
        margin-bottom: 0;
      }

      ${atMinMd} {
        margin-bottom: 1.25rem;
      }
    }

    a {
      color: ${(props) => props.theme.colors.offWhite};
      font-size: 1.062rem;
      line-height: 28px;
      text-decoration: none;

      &:visited {
        color: ${(props) => props.theme.colors.offWhite};
      }

      &:hover {
        color: ${(props) => props.theme.colors.coral};
      }
    }
  }
`;

const ContactBlock = styled.address`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 1.062rem;
  line-height: 1.75rem;
  letter-spacing: 0;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.lg};

  ${atMinMd} {
    margin-top: 0;
    padding-bottom: 0;
  }

  ${atMinLg} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;
  }

  a {
    display: block;
    color: ${(props) => props.theme.colors.offWhite};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
    }

    &:first-of-type {
      ${atMinLg} {
        position: absolute;
        right: 0;
      }
    }

    ${atMinMd} {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
  }

  address {
    font-style: normal;
    margin: 2rem 0 0;

    ${atMinMd} {
      margin-top: 0;
    }
  }
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

export const Footer: FC = () => {
  const theme = useTheme();
  return (
    <Container
      as="footer"
      css={css`
        ${onlyXs} {
          background-color: ${theme.colors.darkBlueAlt};
        }
      `}
    >
      <FooterWrapper>
        <Branding>
          <FooterLogo />
          <Slogan as="h3" variant="h3">
            Where code meets craft.
          </Slogan>
        </Branding>
        <Nav>
          <ul>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/work">Work</NavItem>
            <NavItem href="/approach">Approach</NavItem>
            <NavItem href="/culture">Culture</NavItem>
            <NavItem href="/careers">Careers</NavItem>
            <NavItem href="/blog">Blog</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </ul>
        </Nav>
        <ContactBlock>
          <a href={'mailto:info@base2.io'}>info@base2.io</a>
          <a href={'tel:6143981158'}>(614) 398-1158</a>
          <p>
            21 E 5th Ave Suite 102
            <br />
            Columbus, OH 43201
          </p>
        </ContactBlock>
      </FooterWrapper>
    </Container>
  );
};
