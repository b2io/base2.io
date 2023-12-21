import { css } from '@emotion/react';
import NextImage from 'next/legacy/image';
import { FC, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

import { Heading, Link, Text } from '~/components';
import { atMaxMd, atMaxSm, colors, spacing } from '~/theme';

import { allStudies, CaseStudyBottomNavChild } from './navProps';

export type CaseStudyBottomNavProps = {
  currentCaseStudy: CaseStudyBottomNavChild;
};

export const CaseStudyBottomNav: FC<CaseStudyBottomNavProps> = ({
  currentCaseStudy,
  ...props
}) => {
  //get all non-currently selected studies
  const currentFilteredStudies = allStudies.filter(
    (study) => study.id !== currentCaseStudy.id,
  );

  const [children, setChildren] = useState<CaseStudyBottomNavChild[]>([
    currentFilteredStudies[0],
    currentFilteredStudies[1],
  ]);
  const [seenStudies, setSeenStudies] =
    useLocalStorage<CaseStudyBottomNavChild[]>('seenStudies');

  useEffect(() => {
    // add current study to local storage list of seen studies
    if (!seenStudies?.find((study) => study.id === currentCaseStudy.id)) {
      setSeenStudies((prev) =>
        prev ? [...prev, currentCaseStudy] : [currentCaseStudy],
      );
    }

    // get studies not seen yet
    const unseenStudies = currentFilteredStudies?.filter((study) => {
      return !seenStudies?.find((seenStudy) => seenStudy.id === study.id);
    });

    if (unseenStudies.length) {
      ///some unseen, show remaining,
      setChildren([
        unseenStudies[0],
        unseenStudies[1] ??
          currentFilteredStudies.find(
            //.find() to avoid duplicates
            (study) => study.id !== unseenStudies[0].id,
          ),
      ]);
    } else {
      // seen all, show random 2
      const randomIndex = Math.floor(
        Math.random() * currentFilteredStudies.length,
      );
      const randomIndex2 = randomIndex === 0 ? 1 : randomIndex - 1; // avoids duplicate
      setChildren([
        currentFilteredStudies[randomIndex],
        currentFilteredStudies[randomIndex2],
      ]);
    }
  }, []);

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
            css={css`
              filter: opacity(30%);
            `}
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
