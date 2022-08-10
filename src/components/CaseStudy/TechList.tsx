import { css } from '@emotion/react';
import React, {
  Children,
  cloneElement,
  ElementType,
  FC,
  ReactElement,
} from 'react';

import { atMinTablet, atMinXL, spacing } from '~/theme';

import {
  AngularIcon,
  D3Icon,
  JasminealtIcon,
  JasmineIcon,
  KarmaIcon,
  NetIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
} from './../icons';

type Logo =
  | 'angular'
  | 'd3'
  | 'jasmine'
  | 'jasminealt'
  | 'karma'
  | 'net'
  | 'react'
  | 'redux'
  | 'sass';

export type TechCardProps<E extends ElementType = ElementType> = {
  as?: E;
  logo: Logo;
};

const TechList = {
  angular: AngularIcon,
  d3: D3Icon,
  jasmine: JasmineIcon,
  jasminealt: JasminealtIcon,
  karma: KarmaIcon,
  net: NetIcon,
  react: ReactIcon,
  redux: ReduxIcon,
  sass: SassIcon,
};

export const TechCard: FC<TechCardProps> = ({
  as: Component = 'div',
  logo,
  ...props
}) => {
  const Logo = TechList[logo];

  return (
    <Component {...props}>
      <Logo
        css={css`
          height: 3rem;
          margin-bottom: ${spacing.xxs};
          width: auto;
          ${atMinTablet} {
            height: 4rem;
          }
          ${atMinXL} {
            height: 6rem;
          }
        `}
      />
    </Component>
  );
};

export type TechListGridProps = {
  children: ReactElement<TechCardProps>[];
};

export const TechListGrid: FC<TechListGridProps> = ({ children, ...props }) => {
  return (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: ${spacing.md};
        align-content: center;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
      `}
      {...props}
    >
      {Children.map(children, (child: ReactElement) =>
        cloneElement(child, { as: 'li' }),
      )}
    </ul>
  );
};
