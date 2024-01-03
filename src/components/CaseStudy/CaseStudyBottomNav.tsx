import { css } from '@emotion/react';
import { FC, useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import NextImage from 'next/image';

import { Heading, Link, Text } from '~/components';
import { atMaxMd, atMaxSm, colors, spacing } from '~/theme';

import { CASE_STUDIES, CaseStudyPageConfig } from './navProps';

const getUnseenStudies = (
  studies: CaseStudyPageConfig[],
  seenStudies: CaseStudyPageConfig[],
): CaseStudyPageConfig[] => {
  return studies.filter(
    (study) => !seenStudies.some((seen) => seen.id === study.id),
  );
};

const pickTwoStudies = (
  studies: CaseStudyPageConfig[],
  excludeId?: number,
): CaseStudyPageConfig[] => {
  const filteredStudies = studies.filter((study) => study.id !== excludeId);
  return [studies[0], filteredStudies[0] || studies[1]];
};

const getRandomStudies = (
  studies: CaseStudyPageConfig[],
): CaseStudyPageConfig[] => {
  const randomIndex = Math.floor(Math.random() * studies.length);
  const nextIndex = (randomIndex + 1) % studies.length;
  return [studies[randomIndex], studies[nextIndex]];
};

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

  const [children, setChildren] = useState<CaseStudyPageConfig[]>(() =>
    pickTwoStudies(otherStudies),
  );

  const [seenStudies = [], setSeenStudies] = useLocalStorage<
    CaseStudyPageConfig[]
  >('seenStudies', []);

  useEffect(() => {
    if (!seenStudies.some((study) => study.id === currentCaseStudy.id)) {
      const newSeenStudies = [...seenStudies, currentCaseStudy];
      setSeenStudies(newSeenStudies);
      localStorage.setItem('seenStudies', JSON.stringify(newSeenStudies));
    }

    const unseenStudies = getUnseenStudies(otherStudies, seenStudies);
    setChildren(
      unseenStudies.length > 0
        ? pickTwoStudies(unseenStudies, unseenStudies[0].id)
        : getRandomStudies(otherStudies),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCaseStudy, seenStudies]);

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
            alt={child.company}
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
