import { css } from '@emotion/react';
import type { FC } from 'react';

import { BasicCard, CardGrid, Heading } from '~/components';
import { atMinTablet, atMinXL, spacing } from '~/theme';

type CaseStudyIntroContentPaneProps = {
  introText: string;
  askText: string;
  solutionText: string;
};

export const CaseStudyIntroContentPane: FC<CaseStudyIntroContentPaneProps> = ({
  askText,
  introText,
  solutionText,
}) => {
  return (
    <section
      css={css`
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
    >
      <Heading
        as="h2"
        variant="h2"
        css={css`
          margin-bottom: ${spacing.marginXl};
          margin-top: ${spacing.xxl2};

          ${atMinTablet} {
            margin-top: ${spacing.xxl3};
          }
        `}
      >
        {introText}
      </Heading>

      <CardGrid
        css={css`
          margin-bottom: ${spacing.marginXl};
        `}
      >
        <BasicCard heading="The ask" text={askText} />
        <BasicCard heading="The solution" text={solutionText} />
      </CardGrid>
    </section>
  );
};
