import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';
import { colors } from '~/theme/colors';

import { Heading } from './Heading';
import { Text } from './Text';
import { atMinSm, atMinTablet } from '~/theme';
import { spacing } from '~/theme/spacing';
import { ImageProps } from '~/types';

type TeamMemberCardProps = ImageProps & {
  name: string;
  position: string;
  src: string;
};

const ResponsiveImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div {...props}>
      <NextImage
        alt={alt}
        height={600}
        layout="responsive"
        src={src}
        width={465}
      />
    </div>
  );
};

const MemberInfo = styled.div`
  margin-top: -${spacing.md};
  padding-left: ${spacing.xs};
  position: relative;
  z-index: 3;

  ${atMinTablet} {
    margin-top: -2.85rem;
  }

  & img {
    z-index: 2;
  }

  & p {
    margin-top: 0;
  }

  ${atMinSm} {
    & p {
      margin-top: ${spacing.xxxs};
      padding-left: ${spacing.md};
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
      <ResponsiveImage alt={name} src={src} />
      <MemberInfo>
        <Heading as="h3" variant="h2">
          {name}
        </Heading>
        <Text>{position}</Text>
      </MemberInfo>
    </article>
  );
};
