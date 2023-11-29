import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';

import { CardGrid, Heading, IconCard, Text } from '~/components';
import { atMinLg, atMinXL, colors, spacing } from '~/theme';

import { SERVICE_PHILOSOPHY, SERVICES } from './services';
import { atMaxLg } from '../../theme/breakpoints';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${atMinLg} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${spacing.lg};
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
  margin-top: ${spacing.md};
  display: grid;
  grid-template-columns: 1fr;

  ${atMinLg} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${spacing.sm};
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
    color: white;
    text-decoration: underline;
    text-underline-offset: 4px; /* Adjust as needed */
  }
`;

const NavLink = styled.a`
  color: ${colors.coral};
  font-size: 1rem;

  &:hover {
    color: ${colors.coral};
  }

  &.smooth-scroll {
    scroll-behavior: smooth;
    scroll-margin-top: 4rem;
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
            as="h2"
            variant="h2"
            css={css`
              margin-top: ${spacing.xxl2};
            `}
          >
            Our Partnership Philosophy
          </Heading>
          <Text
            as="p"
            css={css`
              margin-top: 1.5rem;
              max-width: 52rem;
            `}
            variant="h3"
          >
            {SERVICE_PHILOSOPHY.content}
          </Text>
        </div>
        <div
          css={css`
            padding: 0 ${spacing.md};
            margin-top: ${spacing.xxl2};
            ${atMaxLg} {
              padding: 0;
              margin-top: ${spacing.sm};
            }
          `}
        >
          <Heading
            as="h2"
            variant="h2"
            css={css`
              white-space: nowrap;
            `}
          >
            Our Services
          </Heading>
          <TableOfContents>
            {SERVICES.map((section, sectionIndex) => (
              <StyledNavItem key={sectionIndex}>
                <NavLink
                  className="smooth-scroll"
                  href={`#section-${sectionIndex + 1}`}
                >
                  {section.sectionTitle}
                </NavLink>
              </StyledNavItem>
            ))}
          </TableOfContents>
        </div>
      </ContentWrapper>
      <CardGrid
        css={css`
          margin-top: 5rem;
        `}
      >
        {SERVICES.map((service, index) => (
          <IconCard
            id={`section-${index + 1}`}
            key={index}
            heading={service.sectionTitle || service.sectionDescription || ''}
            text={service.services[0].description || ''}
          >
            <ul
              css={css`
                list-style: none;
                line-height: 1.5rem;
              `}
            >
              {service.services[0].details.map((detail, detailIndex) => (
                <StyledListItem key={detailIndex}>{detail}</StyledListItem>
              ))}
            </ul>
          </IconCard>
        ))}
      </CardGrid>
    </section>
  );
};
