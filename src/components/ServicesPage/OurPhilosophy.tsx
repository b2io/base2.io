import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';

import { CardGrid, Heading, IconCard, Text } from '~/components';
import { atMinSm, atMinXL, colors, spacing } from '~/theme';

import { SERVICE_PHILOSOPHY, SERVICES } from './services';
import { Link } from '../../components/Link';

const StyledListItem = styled.li`
  ${atMinSm} {
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
  }
`;

const TableOfContents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  ${atMinSm} {
    grid-template-columns: 1fr;
  }

  li {
    color: ${colors.coral};
    display: flex;
    flex-direction: row;
    line-height: 1.5;
  }

  ul {
    margin-top: 0;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.coral};
  font-size: 2rem;
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
      <Heading as="h2" variant="h2">
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
      <TableOfContents>
        <nav>
          {SERVICES.map((section, sectionIndex) => (
            <li key={sectionIndex}>
              <NavLink href={`#section-${sectionIndex + 1}`}>
                {section.sectionTitle}
              </NavLink>
            </li>
          ))}
        </nav>
      </TableOfContents>
      <CardGrid
        css={css`
          margin-top: 5rem;
        `}
      >
        {SERVICES.map((service, index) => (
          <IconCard
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
