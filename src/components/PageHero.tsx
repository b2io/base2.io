import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import {
  atMinLg,
  atMinDesktop,
  atMinLargeDesktop,
  atMinXL,
  cssClamp,
} from '~/theme';
import { Heading } from './Heading';
import { ImageContainer, ImageProps } from './ImageContainer';

type PageHeroProps = ImageProps & {
  text: string;
};

const calculatedImageHeight = cssClamp(
  [17.5, 'smMobile'],
  [20.188, 'mobile'],
  [35, 'tablet'],
);

const Image = styled(ImageContainer)`
  height: ${calculatedImageHeight};
  margin-left: calc(50% - 50vw);
  position: absolute;

  ${atMinLargeDesktop} {
    margin-left: ${cssClamp([-20, 'largeDesktop'], [-15, 'xlDesktop'])};
  }

  img {
    filter: brightness(0.85);
    height: 100%;
  }
`;

const HeaderText = styled(Heading)`
  padding-top: ${cssClamp([11, 'smMobile'], [16, 'mobile'], [21.5, 'tablet'])};
  position: relative;

  ${atMinLg} {
    max-width: 60rem;
  }

  ${atMinXL} {
    left: ${cssClamp(
      [22.75, 'xl'],
      [33.75, 'desktop'],
      [37.5, 'largeDesktop'],
    )};
    padding-top: 4.25rem;
  }

  ${atMinDesktop} {
    padding-top: 4.25rem;
  }
`;

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

        ${atMinXL} {
          min-height: ${calculatedImageHeight};
        }
      `}
      {...props}
    >
      <Image alt={alt} imgSource={imgSource} />
      <HeaderText as="h1">{text}</HeaderText>
    </section>
  );
};
