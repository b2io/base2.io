import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC, useEffect, useRef, useState } from 'react';

import { atMinLg, atMinTablet, atMinXL, colors, spacing } from '~/theme';

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

const ContactBlock = styled.article`
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
    font-style: normal;
    margin: 2rem 0 0;

    ${atMinTablet} {
      margin-top: 0;
    }
  }
`;

const LetsChatLink = styled(Link)`
  display: none;

  ${atMinTablet} {
    display: block;
    font-size: 1.375rem;
    font-weight: 900;
    position: absolute;
    right: 2.5rem;
    top: -2.05rem;
  }
  ${atMinXL} {
    right: 3.5rem;
  }
`;

const WhiteLine = styled.div`
  display: none;
  ${atMinTablet} {
    background-color: ${colors.offWhite};
    display: block;
    height: 1px;
  }
`;

export const Footer: FC = (prop) => {
  const [isScrolledToFooter, setIsScrolledToFooter] = useState(false);
  const footerRef = useRef(null);

  const scrollListener = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] !== null) {
          if (entries[0].isIntersecting === true) {
            setIsScrolledToFooter(true);
          }
        }
      },
      { threshold: [0] },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <Container
      as="footer"
      css={css`
        background-color: ${colors.darkBlueAlt};
        position: relative;
        ${atMinTablet} {
          background-color: unset;
        }
      `}
      {...prop}
      ref={footerRef}
    >
      <LetsChatLink href="/contact" variant="CTA">
        Lets talk
      </LetsChatLink>
      <WhiteLine
        css={css`
          ${isScrolledToFooter &&
          css`
            animation: lineLeftToRight 1s 1 forwards;
          `};

          @keyframes lineLeftToRight {
            0% {
              width: 0;
            }
            100% {
              width: calc(100% - 7rem);
            }
          }
        `}
      />
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
          <ContactLink href="mailto:info@base2.io" rel="noopener">
            info@base2.io
          </ContactLink>
          <ContactLink href="tel:6143981158" rel="noopener">
            (614) 398-1158
          </ContactLink>
          <ContactLink
            href="https://goo.gl/maps/cesdJy5pkmTqJ7jn7"
            target="_blank"
            rel="noopener"
          >
            <address>
              21 E 5th Ave Suite 102
              <br />
              Columbus, OH 43201
            </address>
          </ContactLink>
        </ContactBlock>
      </FooterWrapper>
    </Container>
  );
};
