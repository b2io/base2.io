import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FC } from 'react';
import { Heading } from '~/components';
import {
  atMinLg,
  atMinDesktop,
  atMinLargeDesktop,
  atMinTablet,
  bp,
  BreakpointName,
} from '~/theme/breakpoints';
import { spacing } from '~/theme/spacing';
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

const Image = styled.picture`
  margin-left: calc(50% - 50vw);

  ${atMinLargeDesktop} {
    margin-left: -10rem;
  }

  img {
    filter: brightness(0.75);
    height: ${cssClamp([17.5, 'smMobile'], [20.188, 'mobile'], [35, 'tablet'])};
  }
`;

const HeaderText = styled(Heading)`
  bottom: 4.5rem;
  position: relative;

  ${atMinTablet} {
    bottom: 13.75rem;
    /* check to make sure this is not breaking  */
    /* font-size: 6.25rem; */
  }

  ${atMinLg} {
    max-width: 50rem;
  }

  ${atMinDesktop} {
    bottom: 30rem;
    left: 32rem;
  }

  ${atMinLargeDesktop} {
    left: 42rem;
  }
`;

const ImageContainer: FC<HeroImageProps> = ({ alt, imgSource }) => {
  const sortedImgSourcesDescending = Object.entries(imgSource).sort(
    ([breakpointA], [breakpointB]) => {
      const valueA = breakpointA as BreakpointName;
      const valueB = breakpointB as BreakpointName;
      return bp[valueB] - bp[valueA];
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
        /* TODO: delete padding this once Layout component is fixed */
        padding-top: 5rem;
        position: relative;
        ${atMinTablet} {
          /* TODO: delete padding this once Layout component is fixed */
          padding-top: ${spacing.xxl};
        }
        ${atMinLg} {
          /* TODO: delete padding this once Layout component is fixed */
          padding-top: 0;
        }
      `}
      {...props}
    >
      <ImageContainer alt={alt} imgSource={imgSource} />
      <HeaderText as="h1">{text}</HeaderText>
    </section>
  );
};
