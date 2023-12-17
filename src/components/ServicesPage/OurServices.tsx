import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';
import { Link } from 'react-scroll';
import { useWindowSize } from 'react-use';

import { CardGrid, Heading, ServiceCard, Text } from '~/components';
import { atMinLg, atMinXL, bp, colors, spacing } from '~/theme';

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
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.xxs};

  ${atMinLg} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
  }

  li {
    color: ${colors.offWhite};
    display: flex;
    flex-direction: row;
    line-height: 1.5;
  }
`;

const StyledNavItem = styled.li`
  margin-top: ${spacing.xxxs};
  position: relative;

  a {
    color: ${colors.offWhite};
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const ServicesWrapper = styled.section`
  display: flex;
  border: 1px solid yellow;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
`;

const Service = styled.div`
  border: 1px solid red;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
`;

export const OurServices: FC = (props) => {
  const { width } = useWindowSize();
  const isMobile = width < Number(bp.tablet);

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
    <section
      css={css`
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
      {...props}
    >
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
            {serviceNames.map((name, index) => (
              <StyledNavItem key={index}>
                <Link
                  css={css`
                    cursor: pointer;
                    font-size: 1.25rem;
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
          </TableOfContents>
        </div>
      </ContentWrapper>
      <ServicesWrapper>
        {serviceList.map((service, index) => (
          <Service
            key={`service-${index + 1}`}
            css={css`
              width: ${service.services.length > 1
                ? 'calc(100% - 1rem)'
                : isMobile
                ? 'calc(100% - 1rem)'
                : 'calc(50% - 1rem)'};
            `}
          >
            {service.services.length > 1 && (
              <span>
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
                    `}
                  >
                    {service.sectionDescription}
                  </Heading>
                )}
              </span>
            )}

            {service.services.map((serviceItem, index) => (
              <ServiceCard
                css={css`
                  margin-top: ${spacing.xs};
                `}
                id={serviceItem.serviceName}
                key={index}
                heading={serviceItem.serviceName}
                text={serviceItem.description}
                details={serviceItem.details}
              />
            ))}
          </Service>
        ))}
      </ServicesWrapper>
      <CardGrid
        css={css`
          margin-bottom: ${spacing.md};
          margin-top: ${spacing.xxl1};
        `}
      >
        {serviceList.map((service, index) => {
          return service.services.length > 1 ? (
            <section
              key={`service-${index + 1}`}
              id={`${service.sectionTitle}`}
              css={css`
                grid-column-start: 1;
                grid-column-end: 3;
              `}
            >
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
                  `}
                >
                  {service.sectionDescription}
                </Heading>
              )}
              <CardGrid
                css={css`
                  max-width: unset;
                `}
              >
                {service.services.map((item, index) => (
                  <ServiceCard
                    css={css`
                      margin-top: ${spacing.xs};
                    `}
                    id={item.serviceName}
                    key={index}
                    heading={item.serviceName}
                    text={item.description}
                    details={item.details}
                  />
                ))}
              </CardGrid>
            </section>
          ) : (
            <section
              key={`service-${index + 1}`}
              id={`${service.sectionTitle}`}
            >
              {service.services.map((item, index) => (
                <ServiceCard
                  css={css`
                    margin-top: ${spacing.xs};
                    &:not(:last-of-type) {
                      margin-bottom: ${spacing.md};
                    }
                  `}
                  id={`serviceCard-${index + 1}`}
                  key={index}
                  heading={item.serviceName}
                  text={item.description}
                  details={item.details}
                />
              ))}
            </section>
          );
        })}
      </CardGrid>
    </section>
  );
};
