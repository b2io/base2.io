import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import type { FC } from 'react';

import { atMinLg, atMinXL, cssClamp } from '~/theme';

import { Heading } from './Heading';

interface ImageProps {
  width: number;
  height: number;
}

type PageHeroProps = {
  alt: string;
  text: string;
  src: string;
  imageProps: Partial<ImageProps>;
};

const calculatedImageHeight = cssClamp(
  [17.5, 'smMobile'],
  [20.188, 'mobile'],
  [35, 'tablet'],
);

const HeaderText = styled(Heading)`
  padding-top: 30%;
  position: relative;

  ${atMinLg} {
    max-width: 54rem;
  }

  ${atMinXL} {
    margin: 0 7.6125rem;
  }
`;

export const PageHero: FC<PageHeroProps> = ({
  alt,
  src,
  imageProps,
  text,
  ...props
}) => {
  return (
    <section
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <div
        css={css`
          position: absolute;
          width: 100%;

          ${atMinXL} {
            min-height: ${calculatedImageHeight};
          }
        `}
        {...props}
      >
        <Image
          alt={alt}
          src={src}
          css={css`
            filter: brightness(0.65) grayscale(1);
            height: auto;
            width: 100%;
          `}
          priority
          {...imageProps}
        />
      </div>

      <HeaderText as="h2" variant="pageHero">
        {text}
      </HeaderText>
    </section>
  );
};
