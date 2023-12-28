import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import { variant } from 'styled-system';

import { colors, spacing, ThemeLinkVariants } from '~/theme';

export type LinkProps = {
  href: string;
  variant?: ThemeLinkVariants;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const Anchor = styled.a<{ variant?: ThemeLinkVariants }>(
  variant({ scale: 'linkVariants' }),
);

const RedLine = styled.div`
  background-color: ${colors.coral};
  display: block;
  height: 0.125rem;
  margin-top: ${spacing.xxxs};
  width: 100%;
`;

export const Link: FC<LinkProps> = ({ href, ...props }) => {
  const isInternal = href.startsWith('/');

  const isCTA = props.variant === 'CTA' ? true : false;
  const [isScrolledToLink, setIsScrolledToLink] = useState(false);
  const linkRef = useRef(null);

  const scrollListener = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] !== null) {
          if (entries[0].isIntersecting === true) {
            setIsScrolledToLink(true);
          }
        }
      },
      { threshold: [0] },
    );

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  const renderRedLine = isCTA ? (
    <RedLine
      className="redLine"
      css={css`
        ${isScrolledToLink &&
        css`
          animation: lineLeftToRightGlobal 1s 1 forwards
            cubic-bezier(0.45, 0.05, 0.55, 0.95);
        `};
        @keyframes lineLeftToRightGlobal {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}
    />
  ) : null;

  return isInternal ? (
    <Anchor href={href} {...props} ref={linkRef}>
      {props.children}
      {renderRedLine}
    </Anchor>
  ) : (
    <NextLink href={href} legacyBehavior passHref>
      <Anchor {...props} ref={linkRef}>
        {props.children}
        {renderRedLine}
      </Anchor>
    </NextLink>
  );
};

Link.defaultProps = {
  variant: 'default',
};

export default Link;
