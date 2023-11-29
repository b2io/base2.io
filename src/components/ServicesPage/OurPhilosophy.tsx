import { css } from '@emotion/react';
import type { FC } from 'react';

import { CardGrid, Heading, IconCard, Text } from '~/components';
import { atMinXL, spacing } from '~/theme';

import { SERVICE_PHILOSOPHY, SERVICES } from './services';

export const OurPhilosophy: FC = (props) => {
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
            <ul>
              {service.services[0].details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </IconCard>
        ))}
      </CardGrid>
    </section>
  );
};
