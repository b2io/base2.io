import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FC } from 'react';
import { Heading } from '~/components';
import { bp, BreakpointName } from '~/theme/breakpoints';
import { atMinTablet } from '~/theme/breakpoints';
import { cssClamp } from '~/theme/util';
import { spacing } from '~/theme/spacing';

type HeroImageSource = {
  xs: string;
  tablet: string;
  xl: string;
  desktop: string;
};

type HeroImageProps = {
  alt: string;
  imgSource: HeroImageSource;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

const PictureTag = styled.picture`
  margin-left: -${spacing.sm};
  ${atMinTablet} {
    margin-left: -${spacing.lg};
  }
`;

const Image = styled.img`
  height: ${cssClamp(
    [17.5, 'smMobile'],
    [20.188, 'mobile'],
    [26.625, 'tablet'],
  )};
`;

const HeaderText = styled(Heading)`
  position: relative;
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
    <PictureTag>
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
      <Image alt={alt} />
    </PictureTag>
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
      `}
      {...props}
    >
      <ImageContainer alt={alt} imgSource={imgSource} />
      <HeaderText as="h1">{text}</HeaderText>
    </section>
  );
};
