import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading, SectionContainer, Text } from '~/components';

export const OurBlog: FC = (props) => {
  return (
    <SectionContainer
      css={css`
        display: grid;
        gap: 1.5rem;
        justify-items: start;
        max-width: 52rem;
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
    </SectionContainer>
  );
};
