import { css } from '@emotion/react';
import { ElementType, FC, ReactElement } from 'react';

import { atMinTablet, spacing } from '~/theme';

import {
  AngularLogo,
  JasmineAltLogo,
  JasmineLogo,
  NetLogo,
  ReactLogo,
  ReduxLogo,
  SassLogo,
} from './../icons';

type Logo =
  | 'angular'
  | 'jasmine'
  | 'jasminealt'
  | 'net'
  | 'react'
  | 'redux'
  | 'sass';

export type TechListProps<E extends ElementType = ElementType> = {
  as?: E;
  logo: Logo;
};

const TechList = {
  angular: AngularLogo,
  jasmine: JasmineLogo,
  jasminealt: JasmineAltLogo,
  net: NetLogo,
  react: ReactLogo,
  redux: ReduxLogo,
  sass: SassLogo,
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
  children: ReactElement<TechListProps>[];
};

export const TechListGrid: FC<TechListGridProps> = ({ ...props }) => {
  return (
    <ul
      css={css`
        display: grid;
        grid-row-gap: 4rem;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        max-width: 67rem;
        padding: 0;

        ${atMinTablet} {
          grid-column-gap: 1.875rem;
          grid-template-columns: repeat(2, minmax(20rem, 30rem));
        }
      `}
      {...props}
    ></ul>
  );
};
