import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';

import { atMinLargeDesktop, atMinLg, atMinXL, cssClamp } from '~/theme';

import { DynamicImage, DynamicImageProps } from './DynamicImage';
import { Heading } from './Heading';

type PageHeroProps = DynamicImageProps & {
  text: string;
};

const calculatedImageHeight = cssClamp(
  [17.5, 'smMobile'],
  [20.188, 'mobile'],
  [35, 'tablet'],
);

const Image = styled(DynamicImage)`
  height: ${calculatedImageHeight};
  margin-left: calc(50% - 50vw);
  position: absolute;

  ${atMinLargeDesktop} {
    margin-left: ${cssClamp([-20, 'largeDesktop'], [-15, 'xlDesktop'])};
  }

  img {
    filter: brightness(0.65);
    height: 100%;
  }
`;

const HeaderText = styled(Heading)`
  padding-top: ${cssClamp([11, 'smMobile'], [16, 'mobile'], [21.5, 'tablet'])};
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
    padding-top: 4.25rem;
  }
`;

export const PageHero: FC<PageHeroProps> = ({
  alt,
  imgSources,
  text,
  ...props
}) => {
  return (
    <section
      css={css`
        position: relative;

        ${atMinXL} {
          min-height: ${calculatedImageHeight};
        }
      `}
      {...props}
    >
      <Image alt={alt} imgSources={imgSources} />
      <HeaderText as="h1">{text}</HeaderText>
    </section>
  );
};
