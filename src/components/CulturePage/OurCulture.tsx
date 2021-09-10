import { css } from '@emotion/react';
import type { FC } from 'react';

import { atMinXL, spacing } from '~/theme';

import { CardGrid, IconCard } from '../Card';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const OurCulture: FC = (props) => {
  return (
    <section
      css={css`
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
      {...props}
    >
      <Heading as="h2" variant="h2">
        Our Culture &amp; Beliefs
      </Heading>
      <Text
        as="p"
        css={css`
          margin-top: 1.5rem;
          max-width: 52rem;
        `}
        variant="h3"
      >
        At the heart of the experiences we make are the humans we make them for,
        and behind Base Two is an experienced team of people who are always up
        for a challenge. Here&rsquo;s a little more about our guiding
        principles:
      </Text>
      <CardGrid
        css={css`
          margin-top: 5rem;
        `}
      >
        <IconCard
          heading="Transparency"
          icon="transparency"
          text="The best working relationships are built on trust and transparency. So
          we communicate clearly and honestly&mdash;no jargon here. Only by
          being straightforward and honest can we get to the beautiful result
          we’re all driving toward."
        ></IconCard>
        <IconCard
          heading="Sustainability"
          icon="sustainability"
          text="Our software is engineered for the long haul. Yes, we&rsquo;re going
          to meet today&rsquo;s spec. But we also build flexibility into every
          piece we ship. Through rigorous attention to detail and intentionality
          in every decision, Base Two creates lasting value."
        ></IconCard>
        <IconCard
          heading="Empathy"
          icon="empathy"
          text="Empathy shines through in everything we do at Base Two&mdash;from
          relationships with clients to friendships with one another. By always
          keeping the user front and center, we create software that people
          actually enjoy using."
        ></IconCard>
        <IconCard
          heading="Community"
          icon="community"
          text="We love to share what we&rsquo;ve learned with others. Whether
          it&rsquo;s giving a talk at a local event or training teams on the
          latest technology, teaching others is a core part of what we do."
        ></IconCard>
      </CardGrid>
    </section>
  );
};
