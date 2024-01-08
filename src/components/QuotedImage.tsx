import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import type { FC } from 'react';

import {
  atMinDesktop,
  atMinMobile,
  atMinTablet,
  atMinXL,
  spacing,
} from '~/theme';

import { Heading } from './Heading';
import { Text } from './Text';

interface QuotedImageProps {
  company: string;
  name: string;
  position: string;
  quote: string;
  src: string;
  alt: string;
  imageProps: Partial<ImageProps>;
}

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
  imageProps,
  ...props
}) => {
  return (
    <section
      css={css`
        position: relative;
      `}
      {...props}
    >
      <div
        css={css`
          position: absolute;
          right: 0;
          width: 50%;
        `}
      >
        <Image
          alt={alt}
          css={css`
            height: auto;
            width: 100%;
          `}
          src={src}
          {...imageProps}
        />
      </div>
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
