import { css } from '@emotion/react';

import { Heading, Layout, PageHero } from '~/components';

import { EstimationForm } from './EstimationForm';
import { OurServices } from './OurPhilosophy';
import { spacing } from '../../theme';

interface ServiceDataProps {
  services: {
    index: number;
    sectionTitle: string;
    packages: {
      index: number;
      description: string;
      packageTitle: string;
      details: string[];
    }[];
  }[];
}

export const ServicesPage: React.FC<ServiceDataProps> = () => {
  return (
    <Layout title="Services" description="Services">
      <PageHero
        css={css`
          filter: grayscale(100%);
        `}
        alt="team members of Base Two"
        imgSources={[
          ['largeDesktop', '/services/services-hero-lg.jpg'],
          ['tablet', '/services/services-hero-md.jpg'],
          ['xl', '/services/services-hero-xl.jpg'],
          ['xs', '/services/services-hero-sm.jpg'],
        ]}
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
