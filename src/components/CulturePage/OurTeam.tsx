import { css } from '@emotion/react';
import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from 'next/image';
import type { FC } from 'react';

import { Heading, Text } from '~/components';
import {
  atMinSm,
  atMinTablet,
  atMinXL,
  colors,
  cssClamp,
  spacing,
} from '~/theme';

type TeamMemberGridItemProps = {
  location: string;
  name: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
};

const TeamMemberGridItem: FC<TeamMemberGridItemProps> = ({
  location,
  name,
  src,
}) => {
  return (
    <li>
      <div
        css={css`
          background: linear-gradient(
              to bottom,
              rgba(4, 0, 25, 0) 63%,
              rgba(5, 0, 30, 0.48) 92%
            ),
            linear-gradient(
              322deg,
              rgba(15, 13, 52, 0.83),
              rgba(246, 58, 82, 0.6)
            );
          position: relative;
        `}
      >
        <div
          css={css`
            background: transparent url(/noise.png);
            height: 100%;
            opacity: 0.125;
            position: absolute;
            width: 100%;
            z-index: 3;
          `}
        />
        <div
          css={css`
            box-shadow: inset 0px -80px 40px -60px #05001eab;
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: 3;
          `}
        />
        <div
          css={css`
            filter: grayscale(1);
            mix-blend-mode: screen;
          `}
        >
          <NextImage
            alt={name}
            placeholder="blur"
            height={600}
            layout="responsive"
            src={src}
            width={465}
          />
        </div>
      </div>
      <div
        css={css`
          margin-top: -${spacing.md};
          padding-left: ${spacing.sm};
          position: relative;
          z-index: 3;

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
        <Heading as="h3" variant="h2">
          {name}
        </Heading>
        <Text>{location}</Text>
      </div>
    </li>
  );
};

export type OurTeamProps = unknown;

export const OurTeam: FC<OurTeamProps> = (props) => {
  return (
    <section {...props}>
      <div
        css={css`
          height: ${cssClamp(
            [17.5, 'smMobile'],
            [21.938, 'mobile'],
            [35, 'tablet'],
            [37.5, 'desktop'],
          )};
          margin-bottom: -${spacing.md};
          position: relative;

          > div:first-of-type {
            max-width: 1488px;
            position: absolute;
            right: max(-10rem, calc(50% - 50vw)) !important;
            width: 100vw;
            z-index: 2;
          }
        `}
      >
        <NextImage
          alt="people working in an office"
          css={css`
            right: calc(50% - 50vw);
          `}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          src={require('./images/culture-ourteam.jpg')}
        />
        <Heading
          as="h2"
          css={css`
            --size: ${cssClamp(
              [3.5, 'smMobile'],
              [4.25, 'mobile'],
              [10, 'tablet'],
              [15, 'lg'],
            )};

            bottom: calc(var(--size) / 3 * -1);
            color: ${colors.coral};
            font-size: var(--size);
            font-variation-settings: 'wght' 900;
            letter-spacing: normal;
            margin: 0;
            padding: 0;
            position: absolute;
            right: 0;
            z-index: 4;
          `}
        >
          Our team
        </Heading>
      </div>
      <ul
        css={css`
          --column-shift: ${spacing.xxl};
          display: grid;
          gap: ${spacing.lg};
          grid-template-columns: 1fr;
          list-style: none;
          margin: ${spacing.xxl4} 0;
          padding: 0;
          position: relative;
          z-index: 2;

          article {
            position: relative;
            z-index: 2;
          }

          img {
            object-fit: cover;
            z-index: 2;
          }

          ${atMinTablet} {
            --column-shift: ${spacing.xxl3};
            gap: ${spacing.xxl};
            grid-template-columns: repeat(2, 1fr);
            margin-bottom: 15rem;

            > * {
              &:nth-of-type(2n) {
                transform: translateY(calc(var(--column-shift) * -1));
              }
            }
          }

          ${atMinXL} {
            grid-template-columns: repeat(3, 1fr);

            > * {
              &:nth-of-type(2n) {
                transform: unset;
              }

              &:nth-of-type(3n - 1) {
                transform: translateY(var(--column-shift));
              }

              &:nth-of-type(3n) {
                transform: translateY(calc(var(--column-shift) * -1));
              }
            }
          }
        `}
        {...props}
      >
        <TeamMemberGridItem
          name="Drew Miller"
          location="Columbus, OH"
          src={require('./images/dmiller.jpg')}
        />
        <TeamMemberGridItem
          name="Sean Ludemann"
          location="Columbus, OH"
          src={require('./images/sludemann.jpg')}
        />
        <TeamMemberGridItem
          name="Tony Borres"
          location="Pittsburgh, PA"
          src={require('./images/tborres.jpg')}
        />
        <TeamMemberGridItem
          name="Nathan Kessler"
          location="Columbus, OH"
          src={require('./images/nkessler.jpg')}
        />
        <TeamMemberGridItem
          name="Reed Dunkle"
          location="Pittsburgh, PA"
          src={require('./images/rdunkle.jpg')}
        />
        <TeamMemberGridItem
          name="Mike Condo"
          location="Columbus, OH"
          src={require('./images/mcondo.jpg')}
        />
        <TeamMemberGridItem
          name="Ashley Singleton"
          location="Atlanta, GA"
          src={require('./images/asingleton.jpg')}
        />
        <TeamMemberGridItem
          name="Zachary Chay-Dolan"
          location="Pittsburgh, PA"
          src={require('./images/zchay-dolan.jpg')}
        />
        <TeamMemberGridItem
          name="Nelson Foltz"
          location="Pittsburgh, PA"
          src={require('./images/nfoltz.jpg')}
        />
        <TeamMemberGridItem
          name="Laura Padilla"
          location="Philadelphia, PA"
          src={require('./images/lpadilla.jpg')}
        />
        <TeamMemberGridItem
          name="Eric Waight"
          location="Pittsburgh, PA"
          src={require('./images/ewaight.jpg')}
        />
        <TeamMemberGridItem
          name="Javier Orejarena"
          location="Orlando, FL"
          src={require('./images/jorejarena.jpg')}
        />
        <TeamMemberGridItem
          name="Melissa Lam"
          location="New York, NY"
          src={require('./images/mlam.jpg')}
        />
        <TeamMemberGridItem
          name="Kate Hansen"
          location="Pittsburgh, PA"
          src={require('./images/khansen.jpg')}
        />
        <TeamMemberGridItem
          name="Kyle Johns"
          location="Columbus, OH"
          src={require('./images/kjohns.jpg')}
        />
      </ul>
    </section>
  );
};
