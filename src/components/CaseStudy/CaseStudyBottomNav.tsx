import { css } from '@emotion/react';
import NextImage from 'next/legacy/image';
import { FC, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';

import { Heading, Link, Text } from '~/components';
import { atMaxMd, atMaxSm, colors, spacing } from '~/theme';

import { CASE_STUDIES, CaseStudyPageConfig } from './navProps';

function getRandomElement<T>(arr: T[]): T | undefined {
  return arr.length > 0
    ? arr[Math.floor(Math.random() * arr.length)]
    : undefined;
}

function pickTwoRandom<T>(
  array: T[],
  seen: T[],
): [T | undefined, T | undefined] {
  const seenSet = new Set(seen);
  let unseen = array.filter((item) => !seenSet.has(item));

  const firstPick = getRandomElement(unseen.length > 0 ? unseen : array);
  let secondPick: T | undefined;

  if (firstPick && unseen.length > 1) {
    unseen = unseen.filter((item) => item !== firstPick);
    secondPick = getRandomElement(unseen);
  } else {
    do {
      secondPick = getRandomElement(array);
    } while (secondPick === firstPick && array.length > 1);
  }

  return [firstPick, secondPick];
}

export type CaseStudyBottomNavProps = {
  currentCaseStudy: CaseStudyPageConfig;
};

export const CaseStudyBottomNav: FC<CaseStudyBottomNavProps> = ({
  currentCaseStudy,
  ...props
}) => {
  const otherStudies = CASE_STUDIES.filter(
    (study) => study.id !== currentCaseStudy.id,
  );

  const [seenStudies = [], setSeenStudies] = useLocalStorage<
    CaseStudyPageConfig[]
  >('seenStudies', []);

  const [children, setChildren] = useState<CaseStudyPageConfig[]>([]);

  useEffect(() => {
    if (!seenStudies.some((study) => study.id === currentCaseStudy.id)) {
      const newSeenStudies = [...seenStudies, currentCaseStudy];
      setSeenStudies(newSeenStudies);
      localStorage.setItem('seenStudies', JSON.stringify(newSeenStudies));
    }

    setChildren(
      pickTwoRandom(otherStudies, seenStudies) as CaseStudyPageConfig[],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
