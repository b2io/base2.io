import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';
import { colors } from '~/theme/colors';
// import { spacing } from '~/theme/spacing';

import { Heading } from './Heading';
import { Text } from './Text';
import { atMinTablet } from '~/theme';

type ImageProps = {
  alt: string;
  src: string;
};

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
  margin-top: -2rem;
  padding-left: 1rem;
  position: relative;

  ${atMinTablet} {
    margin-top: -2.85rem;
  }

  & p {
    margin-top: 0.25rem;
    padding-left: 32px;
    position: relative;
  }

  & p::before {
    border-bottom: solid 1px ${colors.coral};
    content: '';
    left: 0;
    position: absolute;
    top: 0.925rem;
    width: 1.25rem;
  }
`;

export const TeamMemberCard: FC<TeamMemberCardProps> = ({
  name,
  position,
  src,
}) => {
  return (
    <div>
      <article>
        <ResponsiveImage alt={name} src={src} />
      </article>
      <MemberInfo>
        <Heading as="h2" variant="h2">
          {name}
        </Heading>
        <Text>{position}</Text>
      </MemberInfo>
    </div>
  );
};
