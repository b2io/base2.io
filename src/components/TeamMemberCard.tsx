import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading } from './Heading';
import { Text } from './Text';

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

  & p::before {
    border-bottom: solid 1px #fff;
    content: '';
    left: 0;
    position: absolute;
    top: 50%;
    width: 100%;
    z-index: 1;
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
