import { css } from '@emotion/react';
import React, {
  Children,
  cloneElement,
  ElementType,
  FC,
  ReactElement,
} from 'react';

import { DynamicIcon, DynamicIconProps, Heading, Text } from '~/components';
import { atMinTablet, spacing } from '~/theme';

export type CardProps<E extends ElementType = ElementType> = {
  as?: E;
  icon?: DynamicIconProps['type'];
  largeHeading?: string;
  heading?: string;
  link?: string;
  subheading?: string;
  text?: string;
};

export const Card: FC<CardProps> = ({
  as: Component = 'div',
  children,
  icon,
  heading,
  largeHeading,
  subheading,
  text,
  ...props
}) => {
  return (
    <Component {...props}>
      {icon && (
        <DynamicIcon
          css={css`
            height: 3rem;
            margin-bottom: ${spacing.xxs};
            width: auto;
          `}
          type={icon}
        />
      )}
      {largeHeading && (
        <Heading
          as="h1"
          color="coral"
          variant="h1"
          css={css`
            margin-bottom: ${spacing.xs};
          `}
        >
          {largeHeading}
        </Heading>
      )}
      {heading && (
        <Heading
          as="h2"
          color="offWhite"
          css={css`
            margin-bottom: ${spacing.xs};
          `}
          variant="h2"
        >
          {heading}
        </Heading>
      )}
      {subheading && (
        <Heading
          as="h3"
          color="coral"
          css={css`
            margin-bottom: ${spacing.xxs};
          `}
          variant="h3"
        >
          {subheading}
        </Heading>
      )}
      {text && (
        <Text
          as="p"
          css={css`
            margin: 0;
            margin-bottom: ${spacing.lg};
          `}
        >
          {text}
        </Text>
      )}
      {children}
    </Component>
  );
};

export type CardGridProps = {
  children: ReactElement<CardProps>[];
};

export const CardGrid: FC<CardGridProps> = ({ children, ...props }) => {
  return (
    <ul
      css={css`
        display: grid;
        grid-row-gap: 4rem;
        justify-content: space-between;
        list-style: none;
        margin: 0 auto;
        max-width: 67rem;
        padding: 0;

        ${atMinTablet} {
          grid-column-gap: 4rem;
          grid-template-columns: repeat(2, minmax(20rem, 35rem));
        }
      `}
      {...props}
    >
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<CardProps>, { as: 'li' }),
      )}
    </ul>
  );
};
