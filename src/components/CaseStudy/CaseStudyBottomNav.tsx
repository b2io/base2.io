import { css } from '@emotion/react';
import NextImage from 'next/legacy/image';
import { FC, useEffect, useState } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMaxMd, atMaxSm, colors, spacing } from '~/theme';

import { allStudies, CaseStudyBottomNavChild } from './navProps';

export type CaseStudyBottomNavProps = {
  currentStudy: CaseStudyBottomNavChild;
};

export const CaseStudyBottomNav: FC<CaseStudyBottomNavProps> = ({
  currentStudy,
  ...props
}) => {
  const [prevStudy, setPrevStudy] = useState<CaseStudyBottomNavChild | null>(
    null,
  );
  const [nextStudy, setNextStudy] = useState<CaseStudyBottomNavChild | null>(
    null,
  );

  useEffect(() => {
    const currentIndex = allStudies.findIndex(
      (study) => study.name === currentStudy.name,
    );
    const prevIndex =
      (currentIndex - 1 + allStudies.length) % allStudies.length;
    const nextIndex = (currentIndex + 1) % allStudies.length;

    setPrevStudy(allStudies[prevIndex]);
    setNextStudy(allStudies[nextIndex]);
  }, [currentStudy]);

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
      <div
        css={css`
          background-color: ${colors.workThumbnailBg};
          height: 100%;
          opacity: 0.75;
          position: relative;
          width: 100%;

          &:nth-of-type(2) article {
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
            {prevStudy?.company}
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
            {prevStudy?.title}
          </Heading>
          <Link
            css={css`
              margin-bottom: ${spacing.xxxs};
            `}
            href={prevStudy ? prevStudy.navPath : ''}
            variant="CTA"
          >
            Explore Case Study
          </Link>
        </article>
        <NextImage
          alt={'screenshot'}
          css={css`
            filter: opacity(30%);
          `}
          height={400}
          layout="responsive"
          src={prevStudy ? prevStudy.imagePath : ''}
          width={466}
        />
      </div>

      <div
        css={css`
          background-color: ${colors.workThumbnailBg};
          height: 100%;
          opacity: 0.75;
          position: relative;
          width: 100%;
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
            {nextStudy?.company}
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
            {nextStudy?.title}
          </Heading>
          <Link
            css={css`
              margin-bottom: ${spacing.xxxs};
            `}
            href={nextStudy ? nextStudy.navPath : ''}
            variant="CTA"
          >
            Explore Case Study
          </Link>
        </article>
        <NextImage
          alt={'screenshot'}
          css={css`
            filter: opacity(30%);
          `}
          height={400}
          layout="responsive"
          src={nextStudy ? nextStudy.imagePath : ''}
          width={466}
        />
      </div>
    </section>
  );
};
