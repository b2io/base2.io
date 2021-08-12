import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { atMinSm, atMinTablet, colors, spacing } from '~/theme';

import { Heading } from '../Heading';
import { Text } from '../Text';

type TeamMemberCardProps = {
  name: string;
  position: string;
  src: Exclude<NextImageProps['src'], string>;
};

const ImageFilter = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(4, 0, 25, 0) 63%,
      rgba(5, 0, 30, 0.48) 92%
    ),
    linear-gradient(322deg, rgba(15, 13, 52, 0.83), rgba(246, 58, 82, 0.6));
  position: relative;
`;

const ImageNoise = styled.div`
  background: transparent url(culture/team/noise.png);
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.125;
  z-index: 3;
`;

const MemberInfo = styled.div`
  margin-top: -${spacing.md};
  padding-left: ${spacing.sm};
  position: relative;
  z-index: 3;

  ${atMinTablet} {
    margin-top: -2.45rem;
  }

  ${atMinSm} {
    & p {
      margin-top: ${spacing.xxxs};
      padding: 0 ${spacing.md};
      position: relative;
    }

    & p::before {
      border-bottom: solid 1px ${colors.coral};
      content: '';
      left: 0;
      position: absolute;
      top: 0.925rem;
      width: 1.125rem;
    }
  }
`;

export const TeamMemberCard: FC<TeamMemberCardProps> = ({
  name,
  position,
  src,
}) => {
  return (
    <article>
      <ImageFilter>
        <ImageNoise />
        <NextImage
          alt={name}
          placeholder="blur"
          height={600}
          layout="responsive"
          src={src}
          width={465}
          css={css`
            filter: grayscale(1) !important;
            mix-blend-mode: screen;
          `}
        />
      </ImageFilter>
      <MemberInfo>
        <Heading as="h3" variant="h2">
          {name}
        </Heading>
        <Text>{position}</Text>
      </MemberInfo>
    </article>
  );
};
