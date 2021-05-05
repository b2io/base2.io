import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinDesktop, atMinTablet, cssClamp } from '~/theme';
import { ImageProps } from '~/types';

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
          left: max(-10rem, calc(50% - 50vw));
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
  margin-left: ${cssClamp([0, 'tablet'], [6.688, 'desktop'])};
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
      top: -1.25rem;
    }
  }
`;

const Content = styled.div`
  margin-left: ${cssClamp([1.688, 'mobile'], [11.563, 'tablet'])};
  margin-top: 12.75rem;
  position: relative;
  ${atMinTablet} {
    margin-top: 9.25rem;
  }
  ${atMinDesktop} {
    margin-left: 7.5rem;
  }

  .header {
    margin-bottom: ${theme.spacing.sm};
    max-width: 36.75rem;
  }

  .tagline {
    margin: 0 0 ${theme.spacing.xxs} 0;
    ${atMinDesktop} {
      margin-bottom: ${theme.spacing.xxs};
    }
  }
`;

export const DesignedForHumans: FC = (props) => {
  return (
    <section
      css={css`
        min-height: calc(${imageTopCalc} + ${largeImageHeightCalc});
        position: relative;
      `}
      {...props}
    >
      <Image alt="woman looking at phone" src="/home/humans.jpg" />
      <HeaderText as="h2" variant="hero">
        <Text className="callout" as="span" variant="callout">
          Designed for
        </Text>
        <span className="large-text">humans.</span>
      </HeaderText>
      <Content>
        <Text className="tagline">Passionate. Tenacious. Enthusiastic.</Text>
        <div
          css={css`
            ${atMinDesktop} {
              display: flex;
            }
          `}
        >
          <Heading as="h3" className="header" variant="h2">
            The best software starts with a human touch.
          </Heading>
          <div
            css={css`
              max-width: 29.125rem;
              ${atMinDesktop} {
                margin-left: 9rem;
                margin-top: ${theme.spacing.xxs};
              }
            `}
          >
            <Text variant="h3">
              We build software that helps real people solve real problems with
              greater ease through a flexible approach that prioritizes you and
              your end-user.
            </Text>
            <Link
              css={css`
                margin-top: ${theme.spacing.lg};
              `}
              href="/approach"
              variant="CTA"
            >
              See our approach
            </Link>
          </div>
        </div>
      </Content>
    </section>
  );
};
