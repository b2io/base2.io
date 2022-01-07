import { css } from '@emotion/react';
import { FC } from 'react';

import { CardGrid, Heading, ResultCard, Text } from '~/components';
import {
  atMinLg,
  atMinTablet,
  atMinXL,
  atMinXXL,
  colors,
  cssClamp,
  spacing,
} from '~/theme';

export type CaseStudyResultsPaneProps = {
  children: {
    heading: string;
    text: string;
  }[];
  resultsParagraph: string;
};

export const CaseStudyResultsResultsPane: FC<CaseStudyResultsPaneProps> = ({
  resultsParagraph,
  children,
  ...props
}) => {
  return (
    <section
      css={css`
        background-color: ${colors.darkBlueAlt};
        margin: 0 -${spacing.sm};
        padding: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])} ${spacing.sm};

        ${atMinTablet} {
          margin: 0 -${spacing.lg};
          padding: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])} ${spacing.lg};
        }

        ${atMinXL} {
          margin: 0 -${spacing.xxl};
          padding: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])} ${spacing.xxl};
        }

        ${atMinXXL} {
          padding-left: ${spacing.marginXl};
          padding-right: ${spacing.marginXl};
        }
      `}
      {...props}
    >
      <Heading
        as="h2"
        variant="h2"
        css={css`
          margin-bottom: ${spacing.xs};
        `}
      >
        The results
      </Heading>
      <Text
        as="p"
        css={css`
          margin-bottom: ${spacing.xxl1};
          max-width: 51.875rem;
        `}
      >
        {resultsParagraph}
      </Text>
      <CardGrid
        css={css`
          margin-bottom: ${spacing.xxl1};

          ${atMinTablet} {
            grid-template-columns: repeat(1, minmax(20rem, 35rem));
          }

          ${atMinLg} {
            grid-template-columns: repeat(2, minmax(20rem, 35rem));
          }
        `}
      >
        {children.map((child, index) => (
          <ResultCard key={index} heading={child.heading} text={child.text} />
        ))}
      </CardGrid>
    </section>
  );
};
