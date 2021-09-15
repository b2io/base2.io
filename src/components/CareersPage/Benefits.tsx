import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading } from '~/components';
import { atMinXL, spacing } from '~/theme';

export const Benefits: FC = () => {
  return (
    <section
      css={css`
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
    >
      <Heading as="h2" variant="h2">
        Benefits go here!!!!
      </Heading>
    </section>
  );
};
