import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';
import { Heading, Link, Text } from '~/components';
import theme, { cssClamp } from '~/theme';

type ImageProps = {
  alt: string;
  src: string;
};

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${cssClamp([20.188, 'xs'], [26.625, 'md'], [50, 'lg'])};
        left: calc(50% - 50vw - ${cssClamp([5.8545, 'xs'], [0, 'md'])});
        position: absolute;
        top: 2.95rem;
        width: ${cssClamp([26.042, 'xs'], [34.313, 'md'], [64.5, 'lg'])};
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};

const Content = styled.div`
  position: relative;
  margin-left: 1.688rem;
  margin-top: 14.313rem;
`;

export const DesignedForHumansPane: FC = () => {
  return (
    <div
      css={css`
        /* outline: 1px solid red; */
        position: relative;
      `}
    >
      <Image alt="woman looking at phone" src="/home/humans.jpg" />
      <Heading as="h2">
        <Text
          as="div"
          variant="callout"
          css={css`
            position: relative;
            left: 2.813rem;
          `}
        >
          Designed for
        </Text>
        <Text
          css={css`
            position: relative;
            top: -0.3rem;
          `}
          as="div"
          variant="hero"
        >
          humans.
        </Text>
      </Heading>
      <Content>
        <Text
          css={css`
            margin: 0 0 0.125rem;
          `}
        >
          Passionate. Tenacious. Enthusiastic.
        </Text>
        <Heading
          as="h3"
          variant="h2"
          css={css`
            margin-bottom: ${theme.spacing.sm};
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
