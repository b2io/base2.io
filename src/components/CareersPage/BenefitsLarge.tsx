import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useState } from 'react';

import { Heading } from '~/components';
import { atMinLg, colors, spacing } from '~/theme';

import { benefitsData } from './BenefitsData';

const Container = styled.section`
  display: none;
  ${atMinLg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: ${spacing.xxl};
    margin-top: ${spacing.xxl};
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: ${spacing.xs};
  outline: none;
`;

export const BenefitsLarge: FC = () => {
  const benefits = benefitsData;
  const [value, setValue] = useState(0);

  const { text } = benefits[value];
  return (
    <Container>
      <ul
        css={css`
          list-style: none;
          padding: 0;
          text-align: right;
        `}
      >
        {benefits.map((item, index) => {
          return (
            <li key={item.id}>
              <Button key={item.id} onMouseEnter={() => setValue(index)}>
                <Heading
                  as="h2"
                  css={css`
                    margin-bottom: ${spacing.md};
                    transition: color 0.3s ease;
                    &:hover {
                      color: ${colors.coral};
                    }
                  `}
                  variant="h2"
                >
                  {item.benefit}
                </Heading>
              </Button>
            </li>
          );
        })}
      </ul>
      <article
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
        `}
      >
        <Heading as="h2" variant="h3">
          {text}
        </Heading>
      </article>
    </Container>
  );
};
