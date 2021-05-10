import { NextPage } from 'next';
import { css } from '@emotion/react';

import { Heading, IconCard, Layout, Link, PageHero } from '~/components';
import { spacing, atMinTablet, atMinDesktop } from '~/theme';

const heroImageSource = {
  largeDesktop: '/approach/approach-hero-xlarge.jpg',
  tablet: '/approach/approach-hero-medium.jpg',
  xl: '/approach/approach-hero-large.jpg',
  xs: '/approach/approach-hero-small.jpg',
};

const ApproachIndexPage: NextPage = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
        imgSource={heroImageSource}
        text="People motivate what we do and how we do it"
        css={css`
          margin-bottom: ${spacing.xxl2};

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl3};
          }
        `}
      />
      <section>
        <Heading
          as="h2"
          variant="h2"
          css={css`
            margin-bottom: ${spacing.xs};
          `}
        >
          How we engage.
        </Heading>
        <Heading
          as="h3"
          variant="h3"
          css={css`
            margin-bottom: ${spacing.xxl};
            max-width: 51.938rem;

            ${atMinTablet} {
              margin-bottom: ${spacing.xxl1};
            }
          `}
        >
          Whether we&apos;re embedded in your team or managing a project
          internally, you&apos;ll hear from us often.
        </Heading>
        <div
          css={css`
            display: flex;
            flex-direction: column;

            ${atMinTablet} {
              flex-direction: row;
            }
          `}
        >
          <IconCard
            icon="fullyManaged"
            heading="Fully managed"
            css={css`
              margin-bottom: ${spacing.xxl};
              max-width: 29.063rem;

              ${atMinTablet} {
                margin-bottom: ${spacing.xxl1};
                margin-right: ${spacing.sm};
              }

              ${atMinDesktop} {
                margin-right: ${spacing.xxl3};
              }
            `}
          >
            Our developers are skilled at handling the entire project pipeline
            while making sure you’re satisfied at each step of our process. A
            dedicated contact within our team is always available to answer your
            questions, and daily standups provide an opportunity for you to
            weigh in on our progress.
          </IconCard>
          <IconCard
            icon="embedded"
            heading="Embedded"
            css={css`
              margin-bottom: ${spacing.xxl};
              max-width: 29.063rem;

              ${atMinTablet} {
                margin-bottom: ${spacing.xxl1};
              }
            `}
          >
            If you prefer to manage the project in-house, but need more
            expertise to cross the finish line, our team is happy to join your
            ranks. Working alongside your project managers, analysts, and
            subject matter experts, we’ll offer our own development knowledge
            and help create something stellar.
          </IconCard>
        </div>
        <Link href="" variant="CTA">
          Let&apos;s make a plan together
        </Link>
      </section>
    </Layout>
  );
};

export default ApproachIndexPage;
