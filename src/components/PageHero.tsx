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
  imageProps: ImageProps;
};

const calculatedImageHeight = cssClamp(
  [17.5, 'smMobile'],
  [20.188, 'mobile'],
  [35, 'tablet'],
);

const HeaderText = styled(Heading)`
  padding-top: ${cssClamp([5, 'smMobile'], [10, 'mobile'], [15.5, 'tablet'])};
  position: relative;

  ${atMinLg} {
    max-width: 53rem;
  }

  ${atMinXL} {
    left: ${cssClamp(
      [16.75, 'xl'],
      [33.75, 'desktop'],
      [38.25, 'largeDesktop'],
    )};
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
          margin-left: calc(50% - 50vw);
          position: absolute;
          width: 100%;

          ${atMinXL} {
            min-height: ${calculatedImageHeight};
          }

          img {
            filter: brightness(0.65);
            height: 100%;
          }
        `}
        {...props}
      >
        <Image alt={alt} src={src} layout="responsive" {...imageProps} />
      </div>

      <HeaderText as="h2">{text}</HeaderText>
    </section>
  );
};
