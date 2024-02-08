import { css } from '@emotion/react';
import type { FC, ReactNode } from 'react';

import { BasicCard, CardGrid, Heading } from '~/components';
import { atMinXL, cssClamp, spacing } from '~/theme';

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
          margin: ${cssClamp([1, 'smMobile'], [3.5, 'lg'])} 0
            ${cssClamp([5, 'smMobile'], [7.6125, 'lg'])};
        `}
      >
        {introText}
      </Heading>

      <CardGrid
        css={css`
          margin: 0;
          margin-bottom: ${cssClamp([5, 'smMobile'], [7.6125, 'lg'])};
          max-width: 100%;
        `}
      >
        <BasicCard heading="The ask" text={askText} />
        <BasicCard heading="The solution" text={solutionText} />
      </CardGrid>
    </section>
  );
};
