import css from '@emotion/css';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { Link, Text } from '~/components';
import { atMinSm, atMinTablet, colors, spacing } from '~/theme';

type CaseStudyPreviewImageProps = NextImageProps & {
  alt: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
  title: string;
  info: string;
  link: string;
};

const ResponsiveImage: FC<NextImageProps> = ({ alt, src, ...props }) => {
  return (
    <div {...props}>
      <NextImage
        alt={alt}
        height={400}
        layout="responsive"
        src={src}
        width={400}
      />
    </div>
  );
};

export const CaseStudyPreview: FC<CaseStudyPreviewImageProps> = ({
  alt,
  src,
  title,
  info,
  link,
  ...props
}) => {
  return (
    <div
      css={css`
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
      `}
      {...props}
    >
      <ResponsiveImage alt={alt} src={src} />
      <div
        css={css`
          margin-top: -${spacing.md};
          padding-left: ${spacing.sm};
          position: relative;
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
        `}
      >
        <Link
          href={`/work/${link}`}
          variant="large"
          css={css`
            font-size: 4rem;
          `}
        >
          {title}
        </Link>
        <Text variant="body">{info}</Text>
      </div>
    </div>
  );
};
