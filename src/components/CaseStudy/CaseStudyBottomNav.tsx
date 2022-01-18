import { css } from '@emotion/react';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMaxLg, atMaxMd, atMaxSm, colors, spacing } from '~/theme';

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
        gap: ${spacing.lg};
        justify-content: center;
        margin-top: ${spacing.xxl2};
        padding: ${spacing.md};

        ${atMaxMd} {
          flex-direction: column;
          align-items: center;
          gap: ${spacing.xxl2};
        }
      `}
      {...props}
    >
      {children.map((child, index) => (
        <div
          key={index}
          css={css`
            height: 100%;
            position: relative;
            width: 100%;

            &:nth-child(2) article {
              right: -${spacing.md};
              text-align: right;

              ${atMaxMd} {
                right: unset;
                text-align: left;
              }
            }
          `}
        >
          <article
            css={css`
              left: -${spacing.md};
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              z-index: 3;

              ${atMaxMd} {
                left: 50%;
                top: 85%;
                transform: translateX(-50%);
              }

              ${atMaxSm} {
                top: 75%;
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
                color: ${colors.coral};
                margin-bottom: ${spacing.xxxs};
                white-space: nowrap;
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
            alt={'screenshot'}
            css={css``}
            height={400}
            layout="responsive"
            src={child.imagePath}
            width={466}
          />
        </div>
      ))}
    </section>
  );
};
