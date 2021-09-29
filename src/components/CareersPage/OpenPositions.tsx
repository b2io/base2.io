import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';

import { Card, Heading, Text } from '~/components';
import { atMinTablet, atMinXL, colors, spacing } from '~/theme';

import { Button } from '../ContactPage/ContactForm';

type PositionProps = { description: string; title: string };

export const PositionContainer = styled.div`
  background: ${colors.darkBlueAlt};
  margin-bottom: ${spacing.xs};
  padding: ${spacing.md} ${spacing.sm};
  width: 100%;
  ${atMinTablet} {
    padding: ${spacing.xxl} ${spacing.xxl3};
  }
`;

export const Position: FC<PositionProps> = ({ description, title }) => {
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
        {title}
      </Heading>

      <Text
        css={css`
          margin-bottom: ${spacing.lg};
        `}
      >
        {description}
      </Text>
      <Button>Apply</Button>
    </PositionContainer>
  );
};

export const OpenPositions: FC = () => {
  return (
    <section
      css={css`
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
          margin-top: ${spacing.xxl1};
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
      <Position
        description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
        title="Software Engineer"
      />
      <Position
        description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
        title="Senior Software Engineer"
      />
      <Position
        description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
        title="Mid/Senior Software Engineer"
      />
      <Position
        description="We are always looking for amazing people to work with us in Columbus, OH; Pittsburgh, PA; and Chicago, IL. If you are a talented and creative individual with strong people skills and experience building web applications with the latest front-end technologies, please apply."
        title="Junior Software Engineer"
      />
    </section>
  );
};
