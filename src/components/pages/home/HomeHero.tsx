import css from '@emotion/css';
import { FC } from 'react';

import { atMinLg, cssClamp } from '~/theme';
import { Heading, Text } from '~/components';

const HomeHero: FC = () => {
  return (
    <div
      css={css`
        display: grid;
        gap: ${cssClamp([2, 'mobile'], [1.5, 'desktop'])};
        padding: ${cssClamp([3, 'mobile'], [10.5, 'desktop'])}
          // comment to ignore ts-styled-plugin warnings
          ${cssClamp([1.5, 'mobile'], [5.25, 'desktop'])};
        text-align: center;
      `}
    >
      <Heading as="h1">
        Software that{' '}
        <br
          css={css`
            display: none;

            ${atMinLg} {
              display: inline-block;
            }
          `}
        />
        moves people.
      </Heading>
      <Text variant="h3">At Base Two, it all starts with a human touch.</Text>
    </div>
  );
};

export default HomeHero;
