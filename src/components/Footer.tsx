import { CTA } from '.';
import Link from 'next/link';
import React, { FC } from 'react';
import { LogoIcon } from '.';
import { atMd, atXXL } from '~/breakpoints';
import styled from '@emotion/styled';
// import { css } from '@emotion/react';

const FooterWrapper = styled.div`
  /* fix this bkg color or margin-left after layout is defined */
  background-color: #0f0d34;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  margin-left: 50px;

  ${atMd} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px 8px;
    margin-left: 25px;
  }

  ul {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    margin-top: 65px;
    padding-left: 0;
    text-decoration: underline;

    ${atMd} {
      grid-column: 2;
    }
  }
`;

const FooterLogo = styled(LogoIcon)`
  display: block;
  height: 50px;
  justify-content: center;
  margin-top: 150px;
  width: auto;

  ${atMd} {
    height: 53px;
    margin-top: 0;
    margin-right: 0;
  }

  ${atXXL} {
    height: 60px;
  }
`;

const Branding = styled.div`
  grid-column: 1;

  ${atMd} {
    display: block;
    grid-column: 1;
  }
`;

const FooterLink = styled(CTA)`
  color: #ecf0f4;
  font-size: 17px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0;

  &:hover {
    color: ${(props) => props.theme.colors.coral};
  }

  ::after {
    background-color: white;
    display: none;
    height: 0;
    margin-top: 0;
    width: 100%;
  }
`;

const Slogan = styled.h3`
  color: #ecf0f4;
  display: inline-block;
  font-size: 30px;
  font-weight: normal;
  line-height: 1.27;
  letter-spacing: normal;
  margin: 10px 0 0;
  width: 245px;
  word-wrap: auto;

  ${atMd} {
    font-size: 30px;
  }

  ${atXXL} {
    font-size: 30px;
  }
`;

const ContactBlock = styled.div`
  color: #ecf0f4;
  display: grid;
  font-size: 17px;
  grid-column: 1 / -1;
  line-height: 28px;
  letter-spacing: 0;
  margin-top: 30px;

  a {
    margin-top: 30px;

    :visited {
      color: #ecf0f4;
    }
  }

  address {
    margin-top: 30px;
  }

  ${atMd} {
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
        <Link href={'tel:614-398-1158'}>(614) 398-1158</Link>
        <address>
          21E 5th Ave. Suite 102 <br /> Columbus OH 43201{' '}
        </address>
      </ContactBlock>
    </FooterWrapper>
  );
};
