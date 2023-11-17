import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { Heading, Layout, PageHero, Text } from '~/components';
import { atMaxLg, atMaxMd } from '~/theme/breakpoints';

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
const MainWrapper = styled.div`
  margin-bottom: ${spacing.xxl3};
  margin-top: ${spacing.lg};
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing.md};

  ${atMaxLg} {
    flex-direction: column;
  }
`;

const PackageHeading = styled.div`
  flex: 1 1 25%;
  min-width: 25%;
  padding-right: ${spacing.md};

  ${atMaxLg} {
    padding-bottom: ${spacing.md};
  }
`;

const PackageDescription = styled.div`
  flex: 1 1 75%;
  min-width: 75%;
`;

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
        <MainWrapper key={index}>
          <Heading as="h2" variant="h2">
            {service.sectionTitle}
          </Heading>
          <Text
            variant="h3"
            css={css`
              padding: ${spacing.md};
              opacity: 70%;
            `}
          >
            {service.sectionDescription}
          </Text>
          <hr />
          {service.packages.map((packageItem, packageIndex) => (
            <DetailsWrapper key={packageIndex}>
              <PackageHeading>
                <Heading
                  as="h3"
                  variant="h3"
                  color="coral"
                  css={css`
                    margintop: ${spacing.md};
                  `}
                >
                  {packageItem.packageTitle}
                </Heading>
              </PackageHeading>
              <PackageDescription>
                <Text as="body">{packageItem.description}</Text>
                {packageItem.details.map((detail, detailIndex) => (
                  <ul key={detailIndex}>
                    <li>{detail}</li>
                  </ul>
                ))}
              </PackageDescription>
            </DetailsWrapper>
          ))}
        </MainWrapper>
      ))}

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
