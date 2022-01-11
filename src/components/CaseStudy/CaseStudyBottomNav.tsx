import { css } from '@emotion/react';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMaxXL, colors, spacing } from '~/theme';

export type CaseStudyBottomNavProps = {
  children: {
    company: string;
    imagePath: string;
    navPath: string;
    title: string;
  }[];
};

export const CaseStudyBottomNav: FC<CaseStudyBottomNavProps> = ({
  children,
  ...props
}) => {
  return (
    <section
      css={css`
        display: flex;
        justify-content: center;
        gap: ${spacing.md};

        ${atMaxXL} {
          flex-direction: column;
          align-items: center;
          margin-top: 0;
          gap: 0;
        }
      `}
      {...props}
    >
      {children.map((child, index) => (
        <div
          key={index}
          css={css`
            &:nth-child(2) article {
              text-align: right;
              left: ${spacing.xxl2};

              ${atMaxXL} {
                text-align: left;
              }
            }
          `}
        >
          <article
            css={css`
              z-index: 3;
              position: relative;
              bottom: -${spacing.xxl5};
              left: -${spacing.xxl2};

              ${atMaxXL} {
                bottom: -${spacing.xxl6};
                left: ${spacing.xxl2};
              }
            `}
          >
            <Text
              as="p"
              css={css`
                margin-bottom: ${spacing.xxxs};
              `}
            >
              {child.company}
            </Text>
            <Heading
              as="h2"
              variant="h2"
              css={css`
                margin-bottom: ${spacing.xxxs};
                color: ${colors.coral};
              `}
            >
              {child.title}
            </Heading>
            <Link
              css={css`
                margin-bottom: ${spacing.xxxs};
              `}
              href={child.navPath}
              variant="CTA"
            >
              Explore Case Study
            </Link>
          </article>
          <NextImage
            alt={'test'}
            height={400}
            layout="fixed"
            src={child.imagePath}
            width={466}
          />
        </div>
      ))}
    </section>
  );
};
