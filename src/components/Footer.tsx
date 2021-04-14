import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import React, { FC } from 'react';

import { onlyXs, atMinMd, atMinLg } from '~/theme';
import { Container } from './Container';
import { Link } from './Link';
import { LogoIcon } from './icons/LogoIcon';

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
  height: 3.5rem;
  width: auto;

  ${atMinMd} {
    height: 3.5rem;
  }
`;

const Slogan = styled.p`
  color: ${({ theme }) => theme.colors.offWhite};
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 2.5rem;
  letter-spacing: 0.06rem;
  margin: 0.625rem 0 0;
  width: 13.062rem;
`;

const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.offWhite};
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
  }
`;

const ContactBlock = styled.address`
  color: ${({ theme }) => theme.colors.offWhite};
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
`;

const ContactLink = styled(Link)`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }

  &:first-of-type {
    ${atMinLg} {
      position: absolute;
      right: 0;
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
      <NextLink href={href}>
        <Link href={href} {...props} />
      </NextLink>
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
          <Slogan>
            Where code <br /> meets craft.
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
          <ContactLink href={'mailto:info@base2.io'}>info@base2.io</ContactLink>
          <ContactLink href={'tel:6143981158'}>(614) 398-1158</ContactLink>
          <ContactLink href={'https://goo.gl/maps/cesdJy5pkmTqJ7jn7'}>
            21 E 5th Ave Suite 102
            <br />
            Columbus, OH 43201
          </ContactLink>
        </ContactBlock>
      </FooterWrapper>
    </Container>
  );
};
