import { css } from '@emotion/react';
import type { FC } from 'react';

import { atMinDesktop } from '~/theme';
import { Heading } from '../Heading';
import { IconCard } from '../IconCard';
import { Text } from '../Text';

export const OurCulture: FC = (props) => {
  return (
    <section
      css={css`
        --repeat: auto-fit;
        display: grid;
        grid-template-columns: repeat(
          var(--repeat, auto-fit),
          minmax(15rem, 30rem)
        );
        gap: 6rem;

        ${atMinDesktop} {
          --repeat: 2;
        }
      `}
      {...props}
    >
      <div
        css={css`
          display: grid;
          gap: 1.5rem;
          grid-column: 1 / -1;
          max-width: 52rem;
        `}
      >
        <Heading as="h2" variant="h2">
          Our Culture &amp; Beliefs
        </Heading>
        <Text as="p" variant="h3">
          At the heart of the experiences we make are the humans we make them
          for, and behind Base Two is an experienced team of people who are
          always up for a challenge. Here&rsquo;s a little more about our
          guiding principles:
        </Text>
      </div>
      <IconCard icon="transparency" heading="Transparency">
        The best working relationships are built on trust and transparency. So
        we communicate clearly and honestly&mdash;no jargon here. Only by being
        straightforward and honest can we get to the beautiful result we’re all
        driving toward.
      </IconCard>
      <IconCard icon="sustainability" heading="Sustainability">
        Our software is engineered for the long haul. Yes, we&rsquo;re going to
        meet today&rsquo;s spec. But we also build flexibility into every piece
        we ship. Through rigorous attention to detail and intentionality in
        every decision, Base Two creates lasting value.
      </IconCard>
      <IconCard icon="empathy" heading="Empathy">
        Empathy shines through in everything we do at Base Two&mdash;from
        relationships with clients to friendships with one another. By always
        keeping the user front and center, we create software that people
        actually enjoy using.
      </IconCard>
      <IconCard icon="community" heading="Community">
        We love to share what we&rsquo;ve learned with others. Whether
        it&rsquo;s giving a talk at a local event or training teams on the
        latest technology, teaching others is a core part of what we do.
      </IconCard>
    </section>
  );
};
