import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinTablet, atMinXL, cssClamp } from '~/theme';
import { ImageProps } from '~/types';

const imageDimensionsCalc = cssClamp([32, 'mobile'], [69.5, 'tablet']);
const imageTopCalc = cssClamp([1.85, 'mobile'], [0, 'tablet']);

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${imageDimensionsCalc};
        position: absolute;
        right: calc(77.5% - ${imageDimensionsCalc});
        top: ${imageTopCalc};
        width: ${imageDimensionsCalc};
        ${atMinXL} {
          right: -22rem;
        }
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};

const HeaderText = styled(Heading)`
  margin-left: ${cssClamp([0, 'xl'], [15.225, 'xxl'])};
  position: relative;
  top: ${cssClamp([0, 'mobile'], [9, 'tablet'])};

  .callout {
    display: block;
    left: 2rem;
    position: relative;
    ${atMinTablet} {
      left: ${cssClamp([1.75, 'tablet'], [8.25, 'xl'])};
    }
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
  margin-left: 1.74375rem;
  margin-top: ${cssClamp([6.75, 'mobile'], [19, 'tablet'])};
  max-width: 52rem;
  position: relative;
  ${atMinTablet} {
    margin-left: ${cssClamp([0, 'tablet'], [7.6125, 'xl'])};
  }
`;

export const FueledByCuriosity: FC = () => {
  return (
    <section
      css={css`
        position: relative;
      `}
    >
      <Image
        alt="large abstract gradient circle"
        src="/home/large-gradient-circle.png"
      />
      <HeaderText as="h2" variant="hero">
        <Text className="callout" as="span" variant="callout">
          Fueled by
        </Text>
        <span className="large-text">curiosity.</span>
      </HeaderText>
      <Content>
        <Text variant="h2">
          We’re thoughtful, passionate, and we never settle for “good enough.”
          Undeterred by novel problems, our team tackles each one with tenacity,
          creativity, and excitement.
        </Text>
        <Link
          css={css`
            margin-top: ${theme.spacing.lg};
          `}
          href="/culture"
          variant="CTA"
        >
          See our culture
        </Link>
      </Content>
    </section>
  );
};

export default FueledByCuriosity;
