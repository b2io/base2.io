import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { Heading, Layout, PageHero, Text } from '~/components';
import { atMaxLg, atMinTablet } from '~/theme/breakpoints';

import { EstimationForm } from './EstimationForm';
import { SERVICE_PHILOSOPHY, SERVICES } from './services';
import { colors, spacing } from '../../theme';

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

const IntroWrapper = styled.div`
  ${atMaxLg} {
    flex-direction: column;
  }
  flex-direction: row;
  display: flex;
  gap: 2rem;
`;

const TableOfContents = styled.div`
  flex: 1;

  li {
    color: ${colors.coral};
    font-size: 2rem;
  }

  ul {
    margin-top: 0;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.coral};
  font-size: 2rem;
`;

const MainWrapper = styled.div`
  margin-bottom: ${spacing.xxl1};
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

const ServiceHeading = styled.div`
  flex: 1 1 25%;
  min-width: 25%;
  padding-right: ${spacing.md};

  ${atMaxLg} {
    padding-bottom: ${spacing.md};
  }
`;

const ServiceDescription = styled.div`
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
      <IntroWrapper
        css={css`
          margin-top: ${spacing.xxl2};

          ${atMinTablet} {
            margin-top: ${spacing.xxl3};
          }
        `}
      >
        <Heading
          css={css`
            ${atMinTablet} {
              flex: 2;
            }
          `}
          as="h4"
          variant="h3"
        >
          {SERVICE_PHILOSOPHY.content}
        </Heading>
        <TableOfContents>
          <nav>
            <li>
              <NavLink href="/">Section 1</NavLink>
            </li>
            <li>
              <NavLink href="/">Section 2</NavLink>
            </li>
            <li>
              <NavLink href="/">Section 3</NavLink>
            </li>
          </nav>
        </TableOfContents>
      </IntroWrapper>
      {SERVICES.map((section, sectionIndex) => (
        <MainWrapper key={sectionIndex}>
          <Heading as="h2" variant="h2">
            {section.sectionTitle}
          </Heading>

          <Text
            variant="h3"
            css={css`
              padding: ${spacing.md};
              opacity: 70%;
            `}
          >
            {section.sectionDescription}
          </Text>
          <hr />
          {section.services.map((service, serviceIndex) => (
            <DetailsWrapper key={serviceIndex}>
              <ServiceHeading>
                <Heading
                  as="h3"
                  variant="h3"
                  color="coral"
                  css={css`
                    margin-top: ${spacing.md};
                  `}
                >
                  {service.serviceName}
                </Heading>
              </ServiceHeading>
              <ServiceDescription>
                <Text as="body">{service.description}</Text>
                {service.details.map((detail, detailIndex) => (
                  <ul key={detailIndex}>
                    <li>{detail}</li>
                  </ul>
                ))}
              </ServiceDescription>
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
