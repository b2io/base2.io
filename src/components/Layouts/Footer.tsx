import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';

import { atMinTablet, atMinXL, colors, spacing } from '~/theme';

import { Container } from '../Common/Container';
import { Link } from '../Common/Link';
import { Text } from '../Common/Text';
import { LogoIcon } from '../icons';

const FooterWrapper = styled.div`
  margin-left: 1.688rem;
  padding-top: 4rem;
  position: relative;

  ${atMinTablet} {
    display: flex;
    flex-flow: row nowrap;
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

const FooterLink = styled(Link)`
  padding: 0;
`;

const ContactBlock = styled.article`
  margin-top: ${spacing.xxl};
  padding-bottom: ${spacing.lg};

  ${atMinTablet} {
    margin-top: 0;
    padding-bottom: 0;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
  }
`;

const ContactLink = styled(Link)`
  display: block;
  font-style: normal;
  margin-bottom: ${spacing.xs};

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
    position: absolute;
    right: 2.5rem;
    top: -1.89rem;
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
    height: 0.063rem;
    max-width: calc(100% - 7rem);
  }
`;

export const Footer: FC = (prop) => {
  const router = useRouter();
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

  const showRequestQuoteCTA =
    router.pathname === '/work' ||
    router.pathname === '/approach' ||
    router.pathname === '/culture' ||
    router.pathname === '/';

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
      <LetsChatLink href="/contact" variant="redline">
        Lets talk
      </LetsChatLink>
      <WhiteLine
        css={css`
          ${isScrolledToFooter &&
          css`
            animation: lineLeftToRight 1s 1 forwards
              cubic-bezier(0.45, 0.05, 0.55, 0.95);
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
          <Slogan as="h1" variant="h3">
            Where code <br /> meets craft.
          </Slogan>
        </div>
        <ContactBlock>
          <ContactLink href="mailto:info@base2.io" rel="noopener">
            info@base2.io
          </ContactLink>
          <ContactLink href="tel:6143981158" rel="noopener">
            (614) 398-1158
          </ContactLink>
          {showRequestQuoteCTA && (
            <FooterLink
              animationDelayTarget="requestQuoteButton"
              href="/services#request-project-estimate"
              variant="CTA"
            >
              Request a Quote
            </FooterLink>
          )}
        </ContactBlock>
      </FooterWrapper>
    </Container>
  );
};
