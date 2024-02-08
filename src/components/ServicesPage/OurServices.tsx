import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';
import { Link } from 'react-scroll';

import { Heading, SectionContainer, ServiceCard, Text } from '~/components';
import { atMinLg, atMinTablet, colors, cssClamp, spacing } from '~/theme';

import { SERVICE_PHILOSOPHY, Services, SERVICES } from './services';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  white-space: pre-wrap;

  ${atMinLg} {
    flex-direction: row;
    gap: ${spacing.xxl1};
    justify-content: space-between;
    margin-bottom: ${spacing.xxl};
  }
`;

const TableOfContents = styled.nav`
  margin-top: ${spacing.sm};

  li {
    color: ${colors.offWhite};
    line-height: 1.25;
    margin-bottom: ${spacing.xs};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const StyledNavItem = styled.li`
  a {
    color: ${colors.offWhite};
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const ServicesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.xxl};
  margin-top: ${spacing.xxl2};
`;

const Service = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  gap: ${spacing.xs};
`;

const ServiceCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.xxl};
`;

export const OurServices: FC = () => {
  // NOTE: transforms service data to reorder service with multiple services last
  const serviceList: Array<Services> = SERVICES.reduce<Array<any[]>>(
    (acc, cur) => {
      cur.services.length === 1 ? acc[0].push(cur) : acc[1].push(cur);
      return acc;
    },
    [[], []],
  ).flat();

  const serviceNames = serviceList.reduce<Array<string>>((acc, cur) => {
    cur.services.map(({ serviceName }) => {
      acc.push(serviceName);
    });
    return acc;
  }, []);

  return (
    <SectionContainer>
      <ContentWrapper>
        <div>
          <Heading
            as="h3"
            variant="h2"
            css={css`
              margin-top: ${spacing.xxl2};
            `}
          >
            Partnership Philosophy
          </Heading>
          <Text
            as="p"
            css={css`
              margin-top: ${spacing.sm};
              max-width: 52rem;
            `}
            variant="h3"
          >
            {SERVICE_PHILOSOPHY.content}
          </Text>
        </div>
        <div
          css={css`
            margin-top: ${spacing.sm};
            ${atMinLg} {
              margin-top: ${spacing.xxl2};
            }
          `}
        >
          <Heading as="h3" variant="h2">
            Services
          </Heading>
          <TableOfContents>
            <ul>
              {serviceNames.map((name, index) => (
                <StyledNavItem key={index}>
                  <Link
                    css={css`
                      cursor: pointer;
                      font-size: ${cssClamp(
                        [1.125, 'mobile'],
                        [1.375, 'tablet'],
                      )};
                      &:hover {
                        color: ${colors.coral};
                      }
                    `}
                    to={name}
                    spy={true}
                    smooth="easeInOutQuart"
                    offset={-100}
                    duration={2000}
                  >
                    {name}
                  </Link>
                </StyledNavItem>
              ))}
            </ul>
          </TableOfContents>
        </div>
      </ContentWrapper>
      <ServicesContainer>
        {serviceList.map((service, index) => {
          const multipleServices = service.services.length > 1;

          return (
            <Service
              key={`service-${index + 1}`}
              css={css`
                ${atMinTablet} {
                  max-width: ${!multipleServices && 'calc(50% - 1.75rem)'};
                }
              `}
            >
              {multipleServices && (
                <>
                  <Heading
                    as="h3"
                    variant="h2"
                    css={css`
                      margin-bottom: ${spacing.xs};
                    `}
                  >
                    {service.sectionTitle}
                  </Heading>
                  {service.sectionDescription && (
                    <Heading
                      as="h4"
                      variant="h3"
                      css={css`
                        margin-bottom: ${spacing.lg};
                        white-space: pre-line;
                      `}
                    >
                      {service.sectionDescription}
                    </Heading>
                  )}
                </>
              )}
              <ServiceCardContainer>
                {service.services.map((serviceItem, index) => (
                  <ServiceCard
                    css={css`
                      flex: 1 1 auto;

                      ${atMinTablet} {
                        width: ${multipleServices &&
                        `calc(50% - ${spacing.xxl})`};
                        max-width: ${multipleServices && 'calc(50% - 1.75rem)'};
                      }
                    `}
                    id={serviceItem.serviceName}
                    key={`serviceItem-${index + 1}`}
                    heading={serviceItem.serviceName}
                    text={serviceItem.description}
                    details={serviceItem.details}
                  />
                ))}
              </ServiceCardContainer>
            </Service>
          );
        })}
      </ServicesContainer>
    </SectionContainer>
  );
};
