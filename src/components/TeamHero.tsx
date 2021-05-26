import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';

import {
  atMinLg,
  atMinDesktop,
  atMinLargeDesktop,
  cssClamp,
  spacing,
} from '~/theme';

import { DynamicImage, DynamicImageProps } from './DynamicImage';
import { Heading } from './Heading';

type TeamHeroProps = DynamicImageProps & {
  text: string;
};

const calculatedImageHeight = cssClamp(
  [17.5, 'smMobile'],
  [21.938, 'mobile'],
  [35, 'tablet'],
  [37.5, 'desktop'],
);

const Image = styled(DynamicImage)`
  height: ${calculatedImageHeight};
  position: absolute;
  right: calc(50% - 50vw);
  z-index: 2;

  ${atMinDesktop} {
    right: -${spacing.xxl3};
  }

  ${atMinLargeDesktop} {
    margin-left: ${cssClamp([-20, 'largeDesktop'], [-15, 'xlDesktop'])};
  }

  img {
    height: 100%;
  }
`;

const HeaderText = styled(Heading)`
  padding-left: ${cssClamp([0, 'xl'], [19, 'desktop'])};
  padding-top: ${cssClamp(
    [16, 'smMobile'],
    [19.75, 'mobile'],
    [26, 'sm'],
    [28.5, 'tablet'],
  )};
  position: relative;
  z-index: 3;

  ${atMinLg} {
    white-space: nowrap;
  }
`;

export const TeamHero: FC<TeamHeroProps> = ({
  alt,
  imgSources,
  text,
  ...props
}) => {
  return (
    <section
      css={css`
        min-height: ${calculatedImageHeight};
        position: relative;
      `}
      {...props}
    >
      <Image alt={alt} imgSources={imgSources} />
      <HeaderText as="h2" variant="teamHero" color="coral">
        {text}
      </HeaderText>
    </section>
  );
};
