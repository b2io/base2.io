import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useState } from 'react';

import { Heading, Text } from '~/components';
import { atMinTablet, colors, spacing } from '~/theme';

export type BenefitProps = {
  benefit: string;
  info: string;
};

export const Container = styled.section`
  display: block;
  margin-bottom: 4rem;
  ${atMinTablet} {
    display: none;
  }
`;

export const BenefitItem = styled.article`
  /* background: gray; */
  border-bottom: 1px solid rgba(169, 180, 217, 0.2);
  /* margin-bottom: 1rem; */
  padding: 2rem 0;
`;

export const BenefitHeader = styled.header`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: ${spacing.sm};
  justify-content: space-between;
  .open {
    color: ${colors.coral};
    transition: color 0.3s ease;
  }
`;

export const Toggle = styled.button`
  align-items: center;
  align-self: center;
  background: transparent;
  border: none;
  color: ${colors.coral};
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  height: 2rem;
  justify-content: center;
  width: 2rem;
`;

export const Benefit: FC<BenefitProps> = ({ benefit, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <BenefitItem>
      <BenefitHeader onClick={() => setShowInfo(!showInfo)}>
        <Heading as="h2" variant="h2" className={showInfo ? 'open' : ''}>
          {benefit}
        </Heading>
        <Toggle onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? '-' : '+'}
        </Toggle>
      </BenefitHeader>
      {showInfo && (
        <Text
          as="p"
          css={css`
            margin-top: ${spacing.sm};
            max-width: 36.688rem;
          `}
        >
          {info}
        </Text>
      )}
    </BenefitItem>
  );
};

export const Benefits: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
