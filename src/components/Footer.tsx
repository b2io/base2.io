import { CTA } from '.';
import Link from 'next/link';
import React, { FC } from 'react';
import { LogoIcon } from '.';
import { atMinMd, atMinXXL } from '~/breakpoints';
import styled from '@emotion/styled';
// import { css } from '@emotion/react';

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  margin: 0 4.125rem 0 3.188rem;

  ${atMinMd} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px 8px;
    margin-left: 25px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(4, auto);
    margin-block-end: 0;
    margin-top: 65px;
    padding-left: 0;
    place-self: bottom;
    text-decoration: underline;

    ${atMinMd} {
      grid-column: 2;
    }
  }
`;

const FooterLogo = styled(LogoIcon)`
  display: block;
  height: 60px;
  justify-content: center;
  margin-top: 4rem;
  width: auto;

  ${atMinMd} {
    height: 53px;
    margin-top: 0;
    margin-right: 0;
  }

  ${atMinXXL} {
    height: 60px;
  }
`;

const Branding = styled.div`
  grid-column: 1;

  ${atMinMd} {
    display: block;
    grid-column: 1;
  }
`;

const FooterLink = styled(CTA)`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 17px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0;

  &:hover {
    color: ${(props) => props.theme.colors.coral};
  }

  ::after {
    background-color: ${(props) => props.theme.colors.offWhite};
    display: none;
    height: 0;
    margin-top: 0;
    width: 100%;
  }
`;

const Slogan = styled.h3`
  color: ${(props) => props.theme.colors.offWhite};
  display: inline-block;
  font-size: 30px;
  font-weight: normal;
  line-height: 1.27;
  letter-spacing: normal;
  margin: 10px 0 0;
  width: 245px;
  word-wrap: auto;

  ${atMinMd} {
    font-size: 30px;
  }

  ${atMinXXL} {
    font-size: 30px;
  }
`;

const ContactBlock = styled.div`
  color: ${(props) => props.theme.colors.offWhite};
  display: grid;
  font-size: 17px;
  grid-column: 1 / -1;
  line-height: 28px;
  letter-spacing: 0;
  margin: 3.5rem 0 2.5rem;

  a {
    margin-top: 30px;

    :visited {
      color: ${(props) => props.theme.colors.offWhite};
    }
  }

  address {
    margin-top: 30px;
  }

  ${atMinMd} {
    grid-column: 3;
  }
`;

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Branding>
        <FooterLogo />
        <Slogan>Where code meets craft.</Slogan>
      </Branding>
      <ul>
        <FooterLink href="/"> Home</FooterLink>
        <FooterLink href="/"> Careers</FooterLink>
        <FooterLink href="/"> Work</FooterLink>
        <FooterLink href="/"> Blog</FooterLink>
        <FooterLink href="/"> Approach</FooterLink>
        <FooterLink href="/"> Contact</FooterLink>
        <FooterLink href="/"> Culture</FooterLink>
      </ul>
      <ContactBlock>
        <Link href={'mailto:info@base2.io'}>info@base2.io</Link>
        <Link href={'tel:6143981158'}>614.398.1158</Link>
        <address>
          21E 5th Ave. Suite 102 <br /> Columbus OH 43201{' '}
        </address>
      </ContactBlock>
    </FooterWrapper>
  );
};
