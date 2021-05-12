import { FC } from 'react';
import NextImage from 'next/image';

type TeamMemberCardProps = {
  alt: string;
  src: string;
  position: string;
  name: string;
};

const ResponsiveImage: FC<TeamMemberCardProps> = ({ alt, src, ...props }) => {
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

export const TeamMemberCard: FC = () => {
  return (
    <>
      <ResponsiveImage
        alt="Drew Miller"
        name="Drew Miller"
        position="Owner &amp; Principal Software Engineer"
        src="/culture/dmiller.jpg"
      />
    </>
  );
};
