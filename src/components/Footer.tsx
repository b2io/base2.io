import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';

import { atMinTablet, atMinLg } from '~/theme';
import { Container } from './Container';
import { Link } from './Link';
import { LogoIcon } from './icons/LogoIcon';
import Text from './Text';

const FooterWrapper = styled.div`
  margin-left: 1.688rem;
  padding-top: 4rem;
  position: relative;

  ${atMinTablet} {
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
`;

const Slogan = styled(Text)`
  letter-spacing: 0.06rem;
  margin: 0.625rem 0 0;
`;

const Nav = styled.nav`
  ${atMinLg} {
    flex: 1;
  }

  ul {
    columns: 2;
    list-style: none;
    margin: 4rem 0 0 0;
    padding-left: 0;

    ${atMinTablet} {
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

      ${atMinTablet} {
        margin-bottom: 1.25rem;
      }
    }
  }
`;

const ContactBlock = styled.address`
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.lg};

  ${atMinTablet} {
    margin-top: 0;
    padding-bottom: 0;
  }

  ${atMinLg} {
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
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

    ${atMinTablet} {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
  }

  address {
    margin: 2rem 0 0;

    ${atMinTablet} {
      margin-top: 0;
    }
  }
`;

export const Footer: FC = () => {
  const theme = useTheme();
  return (
    <Container
      as="footer"
      css={css`
        background-color: ${theme.colors.darkBlueAlt};
        margin-top: 8.536rem;

        ${atMinTablet} {
          background-color: unset;
        }
      `}
    >
      <FooterWrapper>
        <Branding>
          <FooterLogo />
          <Slogan variant="h3">
            Where code <br /> meets craft.
          </Slogan>
        </Branding>
        <Nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
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
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>
        <ContactBlock>
          <ContactLink href="mailto:info@base2.io">info@base2.io</ContactLink>
          <ContactLink href="tel:6143981158">(614) 398-1158</ContactLink>
          <ContactLink href="https://goo.gl/maps/cesdJy5pkmTqJ7jn7">
            21 E 5th Ave Suite 102
            <br />
            Columbus, OH 43201
          </ContactLink>
        </ContactBlock>
      </FooterWrapper>
    </Container>
  );
};
