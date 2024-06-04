import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
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

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

const CTAButtonAnimationVariables = {
  enter: { opacity: 1, scale: 1, transition },
  exit: { opacity: 0, scale: 0.5, transition },
  initial: { opacity: 0, scale: 0.9 },
};

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

const CTAButton = styled(motion.div)`
  padding: ${spacing.sm} ${spacing.md};
  display: inline-block;
  background: ${colors.coral};
  box-sizing: border-box;
`;

export const Link: FC<LinkProps> = ({ href, ...props }) => {
  const isInternal = href.startsWith('/');
  const isCTAButton = props.variant === 'CTA';
  const isRedLine = props.variant === 'redline';
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

  const renderRedLine = isRedLine ? (
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

  const linkContent = (
    <>
      {props.children}
      {renderRedLine}
    </>
  );

  const renderCTAButton = (content: ReactNode) => (
    <CTAButton
      animate={isScrolledToLink ? 'enter' : 'exit'}
      initial="initial"
      variants={CTAButtonAnimationVariables}
      whileHover={{ backgroundColor: colors.coral, scale: 1.08 }}
    >
      {content}
    </CTAButton>
  );

  return isInternal ? (
    <Anchor href={href} {...props} ref={linkRef}>
      {isCTAButton ? renderCTAButton(linkContent) : linkContent}
    </Anchor>
  ) : (
    <NextLink href={href} legacyBehavior passHref>
      <Anchor {...props} ref={linkRef}>
        {isCTAButton ? renderCTAButton(linkContent) : linkContent}
      </Anchor>
    </NextLink>
  );
};

Link.defaultProps = {
  variant: 'default',
};

export default Link;
