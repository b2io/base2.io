import { css } from '@emotion/react';
import type { FC } from 'react';

import { atMinXL, spacing } from '~/theme';

import { Heading } from '../Common/Heading';
import { Text } from '../Common/Text';

export const OurBlog: FC = (props) => {
  return (
    <section
      css={css`
        display: grid;
        gap: 1.5rem;
        justify-items: start;
        max-width: 52rem;

        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
      {...props}
    >
      <Heading as="h2" variant="h2">
        Our blog
      </Heading>
      <Text as="p" variant="h3">
        We love to share what we&rsquo;ve learned with others. Whether
        it&rsquo;s giving a talk at a local event or training teams on the
        latest technology, teaching others is a core part of what we do. And the
        best part is, we learn more about ourselves in the process.
      </Text>
    </section>
  );
};
