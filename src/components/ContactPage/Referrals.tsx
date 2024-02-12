import { css } from '@emotion/react';
import { FC } from 'react';

import { Heading } from '~/components';
import { spacing } from '~/theme/spacing';

export const Referrals: FC = () => {
  return (
    <section
      css={css`
        margin-bottom: ${spacing.xxl3};
      `}
    >
      <Heading
        as="h3"
        variant="h2"
        css={css`
          margin: ${spacing.xxl2} 0 ${spacing.sm};
        `}
      >
        Referrals
      </Heading>
      <Heading as="h4" variant="h3">
        At Base Two, we are a team of passionate software engineers who love
        what we do &#45; as such we don&#39;t have a sales team. Our sales
        primarily come from satisfied customers and word of mouth. Do you know
        someone who needs help with a project? We appreciate your referrals and
        we are happy to reward you for them in certain situations. Contact us
        and we&#39;ll discuss the details.
      </Heading>
    </section>
  );
};
