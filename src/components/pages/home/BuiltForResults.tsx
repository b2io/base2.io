import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, {
  atMinSm,
  atMinTablet,
  atMinLg,
  atMinXL,
  cssClamp,
} from '~/theme';

type ImageProps = {
  alt: string;
  src: string;
};

const largeImageHeightCalc = cssClamp([26.625, 'tablet'], [50, 'desktop']);
const imageTopCalc = cssClamp(
  [2.95, 'mobile'],
  [7, 'tablet'],
  [8.25, 'desktop'],
);

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${cssClamp([20.188, 'mobile'], [26.625, 'tablet'])};
        left: calc(50% - 50vw - 5.8545rem);
        position: absolute;
        top: ${imageTopCalc};
        width: ${cssClamp([26.042, 'mobile'], [34.313, 'tablet'])};
        ${atMinTablet} {
          height: ${largeImageHeightCalc};
          left: unset;
          right: max(-10rem, calc(50% - 50vw));
          width: ${cssClamp([34.313, 'tablet'], [64.5, 'desktop'])};
        }
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};

const HeaderText = styled(Heading)`
  margin-left: ${cssClamp(
    [0, 'mobile'],
    [7.5, 'tablet'],
    [22.8375, 'desktop'],
  )};
  position: relative;

  .callout {
    display: block;
    left: ${cssClamp([2.813, 'mobile'], [5, 'tablet'], [8.375, 'desktop'])};
    position: relative;
  }

  .large-text {
    display: block;
    position: relative;
    top: -0.3rem;
    ${atMinTablet} {
      top: -${theme.spacing.sm};
    }
  }
`;

const Content = styled.div`
  margin-left: 1.688rem;
  margin-top: 13rem;
  max-width: 16rem;
  position: relative;
  ${atMinSm} {
    max-width: 31rem;
  }
  ${atMinTablet} {
    margin-top: 8.75rem;
    margin-left: 0;
  }
  ${atMinLg} {
    margin-left: 7.6125rem;
  }
  ${atMinXL} {
    max-width: 35rem;
  }

  .header {
    margin-bottom: ${theme.spacing.sm};
  }

  .tagline {
    margin: 0 0 ${theme.spacing.xxs} 0;
  }
`;

export const BuiltForResults: FC = () => {
  return (
    <section
      css={css`
        min-height: calc(${imageTopCalc} + ${largeImageHeightCalc});
        position: relative;
        /* REMOVE: JUST FOR DEV VIEW */
        margin-top: 10rem;
        margin-bottom: 10rem;
        /* REMOVE: JUST FOR DEV VIEW */
      `}
    >
      <Image alt="person looking at computer" src="/home/results.jpg" />
      <HeaderText as="h2" variant="hero">
        <Text className="callout" as="span" variant="callout">
          Built for
        </Text>
        <span className="large-text">results.</span>
      </HeaderText>
      <Content>
        <Text className="tagline">Function. Form. ROI.</Text>
        <Heading as="h3" className="header" variant="h2">
          Software that works? That&rsquo;s a given.
        </Heading>
        <Text variant="h3">
          Let&lsquo;s create something that solves your biggest challenge - and
          continues to drive value over time.
        </Text>
        <Link
          css={css`
            margin-top: ${theme.spacing.lg};
            &:after {
              margin-top: 0.25rem;
            }
          `}
          href="/work"
          variant="CTA"
        >
          See our work
        </Link>
      </Content>
    </section>
  );
};

export default BuiltForResults;
