import { css } from '@emotion/react';
import React, {
  Children,
  cloneElement,
  ElementType,
  FC,
  ReactElement,
} from 'react';

import { spacing } from '~/theme';

import {
  AngularIcon,
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
        justify-content: space-evenly;
        list-style: none;
        margin: 0;
        padding: 0;
      `}
      {...props}
    >
      {Children.map(children, (child) => cloneElement(child, { as: 'li' }))}
    </ul>
  );
};
