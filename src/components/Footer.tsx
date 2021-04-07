import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { LogoIcon } from '.';
import { atMinMd, atMinXXL } from '~/breakpoints';
import styled from '@emotion/styled';

const FooterWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 4.125rem 0 3.188rem;

  ${atMinMd} {
    flex-direction: row;
    margin-left: 25px;
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
  ${atMinMd} {
    display: block;
  }
`;

const Nav = styled.nav`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 17px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 65px;
    padding-left: 0;
    text-decoration: underline;

    li {
      flex: 1 50%;
    }
  }

  &:hover {
    color: ${(props) => props.theme.colors.coral};
  }

  &.active::after {
    background-color: ${({ theme }) => theme.colors.action};
  }

  a {
    color: ${(props) => props.theme.colors.offWhite};
    font-size: 17px;
    line-height: 28px;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.coral};
    }
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

interface FooterItemProps {
  href: string;
}

const FooterItem: FC<FooterItemProps> = ({ href, ...props }) => {
  const { asPath } = useRouter();

  return (
    <li className={asPath == href ? 'active' : ''}>
      <Link href={href}>
        <a {...props} />
      </Link>
    </li>
  );
};

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Branding>
        <FooterLogo />
        <Slogan>Where code meets craft.</Slogan>
      </Branding>
      <Nav>
        <ul>
          <FooterItem href="/"> Home</FooterItem>
          <FooterItem href="/careers"> Careers</FooterItem>
          <FooterItem href="/work"> Work</FooterItem>
          <FooterItem href="/blog"> Blog</FooterItem>
          <FooterItem href="/approach"> Approach</FooterItem>
          <FooterItem href="/contact"> Contact</FooterItem>
          <FooterItem href="/culture"> Culture</FooterItem>
        </ul>
      </Nav>
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
