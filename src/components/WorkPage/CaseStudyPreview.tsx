import css from '@emotion/css';
import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from 'next/image';
import type { FC } from 'react';

import { Link, Text } from '~/components';
import { atMaxLg, atMinSm, atMinTablet, colors, spacing } from '~/theme';

type CaseStudyPreviewImageProps = NextImageProps & {
  alt: string;
  href: string;
  info: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
  title: string;
};

export const CaseStudyPreview: FC<CaseStudyPreviewImageProps> = ({
  alt,
  href,
  info,
  src,
  title,
}) => {
  return (
    <div>
      <NextImage alt={alt} layout="responsive" src={src} />
      <div
        css={css`
          margin-top: -${spacing.md};
          padding-left: ${spacing.sm};
          position: relative;

          ${atMinSm} {
            & p {
              margin-top: ${spacing.xxxs};
              padding: 0 ${spacing.md};
              position: relative;

              ::before {
                border-bottom: solid 1px ${colors.coral};
                content: '';
                left: 0;
                position: absolute;
                top: 0.925rem;
                width: 1.125rem;
              }
            }

            ${atMinTablet} {
              margin-top: -2.45rem;
            }
          }
        `}
      >
        <Link
          href={href}
          css={css`
            font-size: 4rem;

            ${atMaxLg} {
              font-size: 3rem;
            }
          `}
          variant="large"
        >
          {title}
        </Link>
        <Text variant="body">{info}</Text>
      </div>
    </div>
  );
};
