import { css } from '@emotion/react';

import { Heading, Layout, PageHero } from '~/components';

import { EstimationForm } from './EstimationForm';
import { OurServices } from './OurServices';
import { spacing } from '../../theme';

export const ServicesPage: React.FC = () => {
  return (
    <Layout title="Services" description="Services">
      <PageHero
        css={css`
          filter: grayscale(100%);
        `}
        alt="team members of Base Two"
        imageProps={{ height: 546, width: 1280 }}
        src={'/services/services-hero-xl.jpg'}
        text="Partnerships are the core of how we work."
      />

      <OurServices />
      <Heading
        as="h2"
        css={css`
          margin-top: ${spacing.xxl4};
          min-height: ${spacing.xxl1};
        `}
        variant="h2"
        color="coral"
      >
        Request a Project Estimate
      </Heading>
      <EstimationForm />
    </Layout>
  );
};