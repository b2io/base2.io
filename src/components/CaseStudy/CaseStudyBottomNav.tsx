import { css } from '@emotion/react';
import NextImage from 'next/image';
import { FC, useState } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMaxMd, atMaxSm, colors, spacing } from '~/theme';
import { CaseStudyBottomNavChild, allStudies } from './navProps';
import { useLocalStorage } from 'react-use';

export type CaseStudyBottomNavProps = {
  children: CaseStudyBottomNavChild[];
  parentIdentifier: CaseStudyBottomNavChild;
};

export const CaseStudyBottomNav: FC<CaseStudyBottomNavProps> = ({
  // children,
  parentIdentifier,
  ...props
}) => {
  const [children, setChildren] = useState<CaseStudyBottomNavChild[]>([
    allStudies[0],
    allStudies[1],
  ]);

  const [seenStudies, setSeenStudies] =
    useLocalStorage<CaseStudyBottomNavChild[]>('seenStudies');
  console.log(seenStudies);

  // if seen studies not exist, set current study as seen
  // if (!seenStudies || seenStudies.length < 1) {
  // seenStudies.push(parentIdentifier);
  // window.localStorage.setItem('seenStudies', JSON.stringify(seenStudies));
  // }

  // JSON.parse(window.localStorage.getItem('seenStudies') ?? '');
  // console.log(seenStudies);
  if (seenStudies?.find((study) => study.id === parentIdentifier.id)) {
    console.log('parent found', seenStudies);
  } else {
    setSeenStudies([parentIdentifier]);
  }
  // console.log(seenStudies);

  // filter studies not seen yet
  // const unseenStudies = seenStudies?.filter((seenStudy) => {
  //   return !allStudies.find((study) => seenStudy === study);
  // });
  // console.log(unseenStudies);

  // if (unseenStudies?.length === 1) {
  //   setChildren([unseenStudies[0], allStudies[0]]);
  // } else if (unseenStudies?.length === 0) {
  //   setChildren([allStudies[0], allStudies[1]]);
  // } else {
  //   setChildren([unseenStudies[0], unseenStudies[1]]);
  // }

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
