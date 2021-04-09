import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { atMinMd, atMinLg } from '~/theme';

import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  margin-left: 1.688rem;
  padding-top: 4rem;

  ${atMinMd} {
    bottom: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    margin-left: 0;
    padding-bottom: 5rem;
  }
`;

const Branding = styled.div`
  ${atMinMd} {
    display: block;
    flex: 0 0 5rem;
  }

  ${atMinLg} {
    width: 20.438rem;
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

const Slogan = styled.h3`
  color: ${(props) => props.theme.colors.offWhite};
  display: inline-block;
  font-size: 1.875rem;
  font-weight: normal;
  line-height: 1.27;
  letter-spacing: normal;
  margin: 0.625rem 0 0;
  width: 10.438rem;
  word-wrap: auto;

  ${atMinMd} {
    font-size: 1.875rem;
  }
`;

const Nav = styled.nav`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: ${({ theme }) => theme.spacing.sm};

  ${atMinLg} {
    flex-basis: 1;
    margin: 0 4rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 4rem 0 0 0;
    padding-left: 0;
    text-decoration: underline;

    ${atMinMd} {
      margin-top: 0;
      padding-left: 6rem;
      text-decoration: none;
    }

    ${atMinLg} {
      padding-left: 8rem;
    }

    li {
      flex-basis: 55%;
      margin-bottom: 1.25rem;

      &:nth-child(even) {
        flex-basis: 45%;
      }

      &:last-child {
        margin-bottom: 0;
      }

      ${atMinMd} {
        margin-bottom: 1.25rem;
        flex-basis: 40%;

        &:nth-child(even) {
          flex-basis: 60%;
        }
      }

      ${atMinLg} {
        flex-basis: 40%;
        justify-content: center;
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

const ContactBlock = styled.div`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 1.062rem;
  line-height: 28px;
  letter-spacing: 0;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.lg};

  ${atMinMd} {
    margin-top: 0;
    padding-bottom: 0;
    flex: 0 0 10.438rem;
  }

  a {
    display: block;
    color: ${(props) => props.theme.colors.offWhite};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
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
          <FooterItem href="/">Home</FooterItem>
          <FooterItem href="/careers">Careers</FooterItem>
          <FooterItem href="/work">Work</FooterItem>
          <FooterItem href="/blog">Blog</FooterItem>
          <FooterItem href="/approach">Approach</FooterItem>
          <FooterItem href="/contact">Contact</FooterItem>
          <FooterItem href="/culture">Culture</FooterItem>
        </ul>
      </Nav>
      <ContactBlock>
        <Link href={'mailto:info@base2.io'}>info@base2.io</Link>
        <Link href={'tel:6143981158'}>(614) 398.1158</Link>
        <address>
          21E 5th Ave. Suite 102
          <br />
          Columbus OH 43201
        </address>
      </ContactBlock>
    </FooterWrapper>
  );
};
