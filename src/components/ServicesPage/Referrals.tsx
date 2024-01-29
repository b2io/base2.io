import { css } from '@emotion/react';
import { FC } from 'react';

import { Heading } from '~/components';
import { spacing } from '~/theme/spacing';

export const Referrals: FC = () => {
  return (
    <section>
      <Heading
        as="h3"
        variant="h2"
        css={css`
          margin: ${spacing.xxl} 0 ${spacing.md};
        `}
      >
        Referrals
      </Heading>
      <Heading as="h4" variant="h3">
        Base Two is a small group of thoughtful developers with no dedicated
        sales team. We generate work through word of mouth and satisfied
        clients. Know of someone who could use help with a project? We do offer
        referral fees in certain situations. Drop us a line and we&#39;ll be
        glad to talk about it.
      </Heading>
    </section>
  );
};
