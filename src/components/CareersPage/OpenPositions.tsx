import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { FC } from 'react';
import React from 'react';

import { Card, Heading, Text } from '~/components';
import { atMinTablet, atMinXL, colors, spacing } from '~/theme';

import { Button } from '../ContactPage/ContactForm';

export const PositionContainer = styled.div`
  background: ${colors.darkBlueAlt};
  margin-bottom: ${spacing.xs};
  padding: ${spacing.md} ${spacing.sm};
  width: 100%;
  ${atMinTablet} {
    padding: ${spacing.xxl1} 12rem;
  }
`;

export type PositionProps = {
  role: string;
  description: string;
};

// Create a styled component for posiiton
// TODO: create type props to pass down
export const Position: FC<PositionProps> = ({ description, role }) => {
  return (
    <PositionContainer>
      <Heading
        as="h3"
        color="coral"
        css={css`
          font-variation-settings: 'wght' 700;
        `}
        variant="h3"
      >
        {role}
      </Heading>
      <Text
        css={css`
          margin-bottom: ${spacing.lg};
        `}
      >
        {description}
      </Text>
      <Button
        css={css`
          width: 100%;
          ${atMinTablet} {
            width: auto;
          }
        `}
      >
        Apply
      </Button>
    </PositionContainer>
  );
};

export const OpenPositions: FC = ({ children }) => {
  return (
    <section
      css={css`
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
          margin-top: ${spacing.xxl5};
        }
      `}
    >
      <Card
        css={css`
          margin-bottom: ${spacing.xxl};
          max-width: 51.875rem;
          ${atMinTablet} {
            margin-bottom: ${spacing.xxl1};
          }
        `}
      >
        <Heading as="h2" variant="h2">
          Open positions
        </Heading>
        <Heading as="h3" variant="h3">
          As we review candidates for both full time developer positions and the
          apprenticeship program, we consider, in depth, our current team and
          pipeline. What is the current makeup of our teams, where are we
          allocated, what are our strengths and weaknesses, and what skills
          besides and beyond development do we need the most.
        </Heading>
      </Card>
      {children}
    </section>
  );
};
