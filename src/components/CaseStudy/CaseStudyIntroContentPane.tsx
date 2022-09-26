import { css } from '@emotion/react';
import type { FC, ReactNode } from 'react';

import { BasicCard, CardGrid, Heading } from '~/components';
import { atMinDesktop, atMinTablet, spacing } from '~/theme';

type CaseStudyIntroContentPaneProps = {
  introText: string | ReactNode;
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
        ${atMinDesktop} {
          margin-left: ${spacing.xxl1};
          margin-right: ${spacing.xxl1};
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
          margin: 0;
          margin-bottom: ${spacing.marginXl};
          max-width: 100%;
        `}
      >
        <BasicCard heading="The ask" text={askText} />
        <BasicCard heading="The solution" text={solutionText} />
      </CardGrid>
    </section>
  );
};
