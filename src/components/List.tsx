import { css } from '@emotion/react';
import { FC } from 'react';

import { colors, spacing } from '~/theme';

type ListProps = {
  listItems: Array<string>;
};

export const List: FC<ListProps> = ({ listItems }) => {
  return (
    <ul
      css={css`
        line-height: 1.75;
        list-style: none;
      `}
    >
      {listItems.map((item, index) => (
        <li
          css={css`
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
          `}
          key={`item=${index + 1}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
