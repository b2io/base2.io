import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import { Heading } from './Heading';
import { Text } from './Text';
import {
  atMaxMd,
  atMinDesktop,
  atMinMobile,
  atMinTablet,
  atMinXL,
} from '~/theme/breakpoints';
import { spacing } from '~/theme/spacing';
import { cssClamp } from '~/theme/util';
import { ImageProps } from '../types';
import { ImageContainer } from './ImageContainer';

type QuotedImageProps = ImageProps & {
  company: string;
  name: string;
  position: string;
  quote: string;
};

const calculatedImageHeight = cssClamp([15, 'mobile'], [50, 'tablet']);

const Image = styled(ImageContainer)`
  height: 12rem;
  position: absolute;
  right: calc(50% - 50vw);

  ${atMaxMd} {
    max-height: 66vw;
  }

  ${atMinMobile} {
    height: ${calculatedImageHeight};
  }

  ${atMinXL} {
    right: -${spacing.xxl3};
  }

  img {
    height: 100%;
  }
`;

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

  ${atMinXL} {
    display: flex;
    margin-left: -3.5rem;
    max-width: 85rem;
    padding-top: 6rem;
  }

  ${atMinDesktop} {
    margin-left: -7.5rem;
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
  src,
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
      <Image alt={alt} src={src} />
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

              ${atMinXL} {
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
