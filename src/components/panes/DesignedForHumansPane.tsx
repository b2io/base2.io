import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';
import { Heading, Link, Text } from '~/components';
import theme, { atMinDesktop, atMinMd, cssClamp } from '~/theme';

type ImageProps = {
  alt: string;
  src: string;
};

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${cssClamp([20.188, 'mobile'], [26.625, 'md'])};
        left: calc(50% - 50vw - 5.8545rem);
        position: absolute;
        top: ${cssClamp([2.95, 'mobile'], [7, 'md'], [8.25, 'desktop'])};
        width: ${cssClamp([26.042, 'mobile'], [34.313, 'md'])};
        ${atMinMd} {
          height: ${cssClamp([26.625, 'md'], [50, 'desktop'])};
          left: max(-10rem, calc(50% - 50vw));
          width: ${cssClamp([34.313, 'md'], [64.5, 'desktop'])};
        }
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};

const TopText = styled(Heading)`
  margin-left: ${cssClamp([0, 'md'], [6.688, 'desktop'])};
  position: relative;
`;

const Callout = styled(Text)`
  position: relative;
  left: ${cssClamp([2.813, 'mobile'], [5, 'md'], [8.375, 'desktop'])};
`;

const LargeText = styled(Text)`
  position: relative;
  top: -0.3rem;
  ${atMinMd} {
    top: -1.25rem;
  }
`;

const Content = styled.div`
  position: relative;
  margin-left: ${cssClamp([1.688, 'mobile'], [11.563, 'md'])};
  margin-top: 12.75rem;
  ${atMinMd} {
    margin-top: 9.25rem;
  }
  ${atMinDesktop} {
    margin-left: 7.5rem;
  }
`;

export const DesignedForHumansPane: FC = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Image alt="woman looking at phone" src="/home/humans.jpg" />
      <TopText as="h2">
        <Callout as="div" variant="callout">
          Designed for
        </Callout>
        <LargeText as="div" variant="hero">
          humans.
        </LargeText>
      </TopText>
      <Content>
        <Text
          css={css`
            margin: 0 0 0.125rem;
            ${atMinDesktop} {
              margin-bottom: ${theme.spacing.xxs};
            }
          `}
        >
          Passionate. Tenacious. Enthusiastic.
        </Text>
        <Heading
          as="h3"
          variant="h2"
          css={css`
            margin-bottom: ${theme.spacing.sm};
            ${atMinDesktop} {
              width: 36.75rem;
            }
          `}
        >
          The best software starts with a human touch.{' '}
        </Heading>
        <Text variant="h3">
          We build software that helps real people solve real problems with
          greater ease through a flexible approach that prioritizes you and your
          end-user.
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
      </Content>
    </div>
  );
};

export default DesignedForHumansPane;
