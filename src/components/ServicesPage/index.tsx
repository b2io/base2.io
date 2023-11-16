import { css } from '@emotion/react';

import { Heading, Layout, PageHero, Text } from '~/components';

import { EstimationForm } from './EstimationForm';
import { spacing } from '../../theme/spacing';
import { SERVICES } from '../ServicesPage/services';

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
    <Layout description={'B2 Services'} title={'B2 Services'}>
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
        text="Our Services"
      />
      {SERVICES.map((service, index) => (
        <div key={index} css={{ marginTop: `${spacing.xxl3}` }}>
          <div css={{ alignItems: 'center', display: 'flex' }}>
            <div>
              <Heading as="h2" variant="h2">
                {service.sectionTitle}
              </Heading>
            </div>
          </div>
          {index < SERVICES.length - 1 && <hr />}

          <div>
            {service.packages.map((packageItem, packageIndex) => (
              <div key={packageIndex}>
                <Heading
                  as="h3"
                  variant="h3"
                  color="coral"
                  css={{ marginTop: `${spacing.md}` }}
                >
                  {packageItem.packageTitle}
                </Heading>
                <Text>{packageItem.description}</Text>
                {packageItem.details.map((detail, detailIndex) => (
                  <ul key={detailIndex}>
                    <li>{detail}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      <Heading
        as="h2"
        css={css`
          margin-top: ${spacing.xxl3};
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
