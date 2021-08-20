import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';

import { atMinTablet, atMinLg, colors, spacing } from '~/theme';

import { Container } from './Container';
import { LogoIcon } from './icons';
import { Link } from './Link';
import { Text } from './Text';

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
  ul {
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
      margin-bottom: 2rem;

      &:last-child {
        margin-bottom: 0;
      }

      ${atMinTablet} {
        margin-bottom: 2rem;
      }
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  line-height: 1;
`;

const ContactBlock = styled.address`
  margin-top: ${spacing.xxl};
  padding-bottom: ${spacing.lg};

  ${atMinTablet} {
    margin-top: 0;
    padding-bottom: 0;
  }

  ${atMinLg} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const ContactLink = styled(Link)`
  display: block;
  font-style: normal;
  margin-bottom: ${spacing.md};

  &:last-child {
    margin-bottom: 0;
  }

  address {
    margin: 2rem 0 0;

    ${atMinTablet} {
      margin-top: 0;
    }
  }
`;

export const Footer: FC = (prop) => {
  return (
    <Container
      as="footer"
      css={css`
        background-color: ${colors.darkBlueAlt};

        ${atMinTablet} {
          background-color: unset;
        }
      `}
      {...prop}
    >
      <FooterWrapper>
        <div>
          <FooterLogo />
          <Slogan variant="h3">
            Where code <br /> meets craft.
          </Slogan>
        </div>
        <Nav>
          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/approach">Approach</NavLink>
            </li>
            <li>
              <NavLink href="/culture">Culture</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
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
