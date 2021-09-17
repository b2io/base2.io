import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC, useState } from 'react';

import { GradientCircle, Heading } from '~/components';
import { atMinXL, atMinXXL, colors, cssClamp, spacing } from '~/theme';

import { benefitsData } from './BenefitsData';

const circleDimensionsCalc = cssClamp([32, 'mobile'], [69.5, 'tablet']);

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: ${spacing.xs};
  outline: none;
  text-align: right;
`;

export const Benefits: FC = () => {
  const benefits = benefitsData;
  const [value, setValue] = useState(0);

  const { text } = benefits[value];
  return (
    <section
      css={css`
        display: none;
        ${atMinXXL} {
          display: grid;
          gap: 20rem;
          grid-template-columns: 1fr 1fr;
          margin-bottom: ${spacing.xxl};
          margin-top: ${spacing.xxl};
          position: relative;
        }
      `}
    >
      <ul
        css={css`
          list-style: none;
          padding: 0;
          text-align: right;
          z-index: 1;
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
      <GradientCircle
        css={css`
          height: ${circleDimensionsCalc};
          position: absolute;
          right: calc(77.5% - ${circleDimensionsCalc});
          top: -16rem;
          width: ${circleDimensionsCalc};

          ${atMinXL} {
            right: -22rem;
          }
        `}
      />
      <article
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          z-index: 1;
        `}
      >
        <Heading
          as="h2"
          css={css`
            max-width: 700px;
          `}
          variant="h3"
        >
          {text}
        </Heading>
      </article>
    </section>
  );
};
