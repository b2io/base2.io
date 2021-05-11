import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import { Heading, Text } from '~/components';
import {
  atMaxMd,
  atMinDesktop,
  atMinMobile,
  atMinTablet,
  bp,
  BreakpointName,
} from '~/theme/breakpoints';
import { spacing } from '~/theme/spacing';
import { cssClamp } from '~/theme/util';

type QuotedImageSource = {
  tablet: string;
  xl: string;
  xs: string;
};

type ImageProps = {
  alt: string;
  imgSource: QuotedImageSource;
};

type QuotedImageProps = ImageProps & {
  company: string;
  name: string;
  position: string;
  quote: string;
};

const calculatedImageHeight = cssClamp([15, 'mobile'], [50, 'tablet']);

const Image = styled.picture`
  height: 12rem;
  position: absolute;
  right: calc(50% - 50vw);

  ${atMaxMd} {
    max-height: 66vw;
  }

  ${atMinMobile} {
    height: ${calculatedImageHeight};
  }

  ${atMinDesktop} {
    right: -${spacing.xxl3};
  }

  img {
    height: 100%;
  }
`;

const ImageContainer: FC<ImageProps> = ({ alt, imgSource }) => {
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

const TextContainer = styled.div`
  padding-top: 6.75rem;
  position: relative;

  ${atMinMobile} {
    max-width: 85vw;
  }

  ${atMinTablet} {
    max-width: 75vw;
    padding-top: 4.5rem;
  }

  ${atMinDesktop} {
    display: flex;
    margin-left: -7.5rem;
    max-width: 85rem;
    padding-top: 6rem;
  }
`;

const AttributionText = styled(Text)`
  line-height: 0.85rem;
`;

const AttributionTextItalic = styled(AttributionText)`
  font-style: italic;
`;

export const QuotedImage: FC<QuotedImageProps> = ({
  alt,
  company,
  imgSource,
  name,
  position,
  quote,
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
      <TextContainer>
        <div>
          <Text variant="quotationsSymbol">&#8220;</Text>
        </div>
        <div>
          <Heading
            as="h2"
            variant="quotationText"
            css={css`
              margin-bottom: ${spacing.md};

              ${atMinTablet} {
                margin-bottom: 3.125rem;
              }

              ${atMinDesktop} {
                margin-bottom: 0;
              }
            `}
          >
            {quote}
          </Heading>
          <AttributionText color="coral">{name}</AttributionText>
          <AttributionTextItalic>{position}</AttributionTextItalic>
          <AttributionTextItalic>{company}</AttributionTextItalic>
        </div>
      </TextContainer>
    </section>
  );
};
