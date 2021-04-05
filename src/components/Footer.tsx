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
    margin-left: 25px;
    grid-template-columns: 2.5fr 1fr 1fr 2.5fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 4px 8px;
    grid-template-areas:
      '. . . . .'
      '. . . . .'
      '. . . . .'
      '. . . . .';
  }

  ul {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding-left: 0;
    text-decoration: underline;
  }
`;

const FooterLogo = styled(LogoIcon)`
  height: 50px;
  display: block;
  justify-content: center;
  width: 15%;
  margin-top: 150px;

  ${atMd} {
    height: 53px;
  }

  ${atXXL} {
    height: 60px;
  }
`;

const Catchphrase = styled.div`
  grid-column: 1 / -1;
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
`;

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Catchphrase>
        <FooterLogo />
        <Slogan>Where code meets craft.</Slogan>
      </Catchphrase>
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
