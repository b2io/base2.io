import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FC } from 'react';
import { Heading } from '~/components';
import {
  atMinLg,
  atMinDesktop,
  atMinLargeDesktop,
  bp,
  BreakpointName,
} from '~/theme/breakpoints';
import { cssClamp } from '~/theme/util';

type HeroImageSource = {
  largeDesktop: string;
  tablet: string;
  xl: string;
  xs: string;
};

type HeroImageProps = {
  alt: string;
  imgSource: HeroImageSource;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

const calculatedImageHeight = cssClamp(
  [17.5, 'smMobile'],
  [20.188, 'mobile'],
  [35, 'tablet'],
);

const Image = styled.picture`
  margin-left: calc(50% - 50vw);

  ${atMinLargeDesktop} {
    margin-left: ${cssClamp([-20, 'largeDesktop'], [-15, 'xlDesktop'])};
  }

  img {
    filter: brightness(0.85);
    height: ${calculatedImageHeight};
    position: absolute;
  }
`;

const HeaderText = styled(Heading)`
  margin-top: ${cssClamp([12.5, 'smMobile'], [15, 'mobile'], [20, 'tablet'])};
  position: relative;

  ${atMinLg} {
    max-width: 50rem;
  }

  ${atMinDesktop} {
    left: 33.75rem;
    margin-top: 3rem;
  }

  ${atMinLargeDesktop} {
    left: 37.5rem;
  }
`;

const ImageContainer: FC<HeroImageProps> = ({ alt, imgSource }) => {
  const sortedImgSourcesDescending = Object.entries(imgSource).sort(
    ([breakpointA], [breakpointB]) => {
      const keyA = breakpointA as BreakpointName;
      const keyB = breakpointB as BreakpointName;
      return bp[keyB] - bp[keyA];
    },
  );

  return (
    <Image>
      {sortedImgSourcesDescending.map(([breakpointName, imgSource]) => {
        const breakpointValue = breakpointName as BreakpointName;
        return (
          <source
            key={breakpointName}
            media={`(min-width: ${bp[breakpointValue]}px)`}
            srcSet={imgSource}
          />
        );
      })}
      <img alt={alt} />
    </Image>
  );
};

export const PageHero: FC<PageHeroProps> = ({
  alt,
  imgSource,
  text,
  ...props
}) => {
  return (
    <section
      css={css`
        position: relative;
        ${atMinDesktop} {
          min-height: ${calculatedImageHeight};
        }
      `}
      {...props}
    >
      <ImageContainer alt={alt} imgSource={imgSource} />
      <HeaderText as="h1">{text}</HeaderText>
    </section>
  );
};
