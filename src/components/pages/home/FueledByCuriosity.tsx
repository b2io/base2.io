import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinDesktop, atMinTablet, atMinXXL, cssClamp } from '~/theme';
import { ImageProps } from '~/types';

// TODO this is redundant!!
const largeImageHeightCalc = cssClamp([32, 'mobile'], [69.5, 'tablet']);
// TODO this is redundant!!
// TODO: update this or just get rid of it. can't use calc to go smaller!!!!
const imageTopCalc = cssClamp([1.85, 'mobile'], [0, 'tablet']);
// TODO: update this or just get rid of it. can't use calc to go smaller!!!!

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${cssClamp([32, 'mobile'], [40.438, 'tablet'])};
        position: absolute;
        right: calc(50% - 50vw - 14.25rem);
        top: ${imageTopCalc};
        width: ${cssClamp([32, 'mobile'], [40.438, 'tablet'])};
        ${atMinTablet} {
          height: ${largeImageHeightCalc};
          right: calc(50% - 50vw - 28rem);
          /* TODO: should width just be largeImageHeightCalc? */
          width: ${cssClamp([69.5, 'tablet'], [69.5, 'xxl'])};
          /* TODO: should width just be largeImageHeightCalc? */
        }
        ${atMinXXL} {
          left: calc(50% - 11.5rem);
        }
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};

const HeaderText = styled(Heading)`
  /* margin-left: ${cssClamp([0, 'tablet'], [15.225, 'xxl'])}; */
  position: relative;

  ${atMinXXL} {
    margin-left: 15.225rem;
  }

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
  margin-top: 6.75rem;
  max-width: 52rem;
  position: relative;
  ${atMinTablet} {
    margin-left: ${cssClamp([0, 'tablet'], [7.6125, 'desktop'])};
    /* TODO: use clamp for margin-top  */
    margin-top: 9.25rem;
    /* TODO: use clamp for margin-top  */
  }
  /* ${atMinDesktop} {
    margin-left: 7.6125rem;
  } */
`;

export const FueledByCuriosity: FC = () => {
  return (
    <section
      css={css`
        /* DELETE THESE !!!!!! */
        margin-bottom: 20rem;
        margin-top: 20rem;
        /* DELETE THESE !!!!!! */
        min-height: calc(${imageTopCalc} + ${largeImageHeightCalc});
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
