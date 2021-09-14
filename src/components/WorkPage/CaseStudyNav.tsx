import css from '@emotion/css';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Children, cloneElement, FC, ReactElement } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMinXL, cssClamp, spacing } from '~/theme';

export type CaseStudyProps = NextImageProps & {
  alt: string;
  caseStudy: string;
  client: string;
  href: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
};

export const CaseStudy: FC<CaseStudyProps> = ({
  client,
  href,
  caseStudy,
  alt,
  src,
}) => {
  return (
    <div
      css={css`
        margin-bottom: 4.5rem;
        position: relative;
        width: ${cssClamp([13.5, 'mobile'], [29.125, 'desktop'])};

        &:nth-of-type(2) article {
          right: unset;
          ${atMinXL} {
            right: -3rem;
            text-align: right;
          }
        }
        ${atMinXL} {
          margin-bottom: 0;
        }
      `}
    >
      <NextImage
        alt={alt}
        css={css`
          opacity: 0.3;
        `}
        src={src}
      />
      <article
        css={css`
          left: 0;
          margin-top: 1rem;
          position: unset;
          z-index: 2;
          ${atMinXL} {
            left: -6rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        `}
      >
        <Text as="span">{client}</Text>
        <Heading
          as="h2"
          color="coral"
          css={css`
            font-size: 1.875rem;
            line-height: 1.25;
            ${atMinXL} {
              font-size: 3.125rem;
            }
          `}
          variant="h2"
        >
          {caseStudy}
        </Heading>
        <Link href={href} variant="CTA">
          Explore case study
        </Link>
      </article>
    </div>
  );
};

export const CaseStudyNav: FC = ({ children, ...props }) => {
  return (
    <section
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;

        margin-top: ${spacing.xxl2};
        object-fit: contain;

        ${atMinXL} {
          flex-direction: row;
          gap: 2rem;
          justify-content: center;
          margin-bottom: ${spacing.xxl3};
        }
      `}
      {...props}
    >
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, { as: 'div' }),
      )}
    </section>
  );
};
