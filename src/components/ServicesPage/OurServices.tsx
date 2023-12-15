import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';
import { Link } from 'react-scroll';

import { CardGrid, Heading, ServiceCard, Text } from '~/components';
import { atMinLg, atMinXL, colors, spacing } from '~/theme';

import { SERVICE_PHILOSOPHY, SERVICES } from './services';

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

const StyledListItem = styled.li`
  margin-top: ${spacing.xxxs};
  padding: 0 ${spacing.md};
  position: relative;

  ::before {
    border-bottom: solid 1px ${colors.coral};
    content: '';
    left: 0;
    position: absolute;
    top: 0.925rem;
    width: 1.125rem;
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

export const OurServices: FC = (props) => {
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
            {SERVICES.map((item, index) => (
              <StyledNavItem key={index}>
                <Link
                  css={css`
                    cursor: pointer;
                    font-size: 1.25rem;
                    &:hover {
                      color: ${colors.coral};
                    }
                  `}
                  to={`${item.sectionTitle}`}
                  spy={true}
                  smooth="easeInOutQuart"
                  offset={-100}
                  duration={2000}
                >
                  {item.sectionTitle}
                </Link>
              </StyledNavItem>
            ))}
          </TableOfContents>
        </div>
      </ContentWrapper>
      <CardGrid
        css={css`
          margin-bottom: ${spacing.md};
          margin-top: ${spacing.xxl1};
        `}
      >
        {SERVICES.filter((item) => !item.sectionHeader).map(
          (service, index) => (
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
                >
                  <ul
                    css={css`
                      list-style: none;
                      line-height: 1.75;
                    `}
                  >
                    {item.details.map((detail, index) => (
                      <StyledListItem key={`detail=${index + 1}`}>
                        {detail}
                      </StyledListItem>
                    ))}
                  </ul>
                </ServiceCard>
              ))}
            </section>
          ),
        )}
      </CardGrid>
      {SERVICES.filter((item) => item.sectionHeader).map((service, index) => (
        <section
          key={`service-${index + 1}`}
          id={`${service.sectionTitle}`}
          css={css`
            margin-top: ${spacing.xxl2};
          `}
        >
          <Heading
            as="h3"
            variant="h2"
            css={css`
              margin-bottom: ${spacing.xs};
            `}
          >
            {service.sectionHeader}
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
                id={`serviceCard-${index + 1}`}
                key={index}
                heading={item.serviceName}
                text={item.description}
              >
                <ul
                  css={css`
                    list-style: none;
                    line-height: 1.75;
                  `}
                >
                  {item.details.map((detail, index) => (
                    <StyledListItem key={`detail=${index + 1}`}>
                      {detail}
                    </StyledListItem>
                  ))}
                </ul>
              </ServiceCard>
            ))}
          </CardGrid>
        </section>
      ))}
    </section>
  );
};
