import { css } from '@emotion/react';
import React, {
  Children,
  cloneElement,
  ElementType,
  FC,
  ReactElement,
} from 'react';

import { Heading, Text } from '~/components';
import { atMinTablet, spacing } from '~/theme';

import {
  BusinessIcon,
  CommunityIcon,
  DashIcon,
  DeliveryIcon,
  DeveloperIcon,
  DiscoveryIcon,
  EmbeddedIcon,
  EmpathyIcon,
  ExecutionIcon,
  FullyManagedIcon,
  SupportIcon,
  SustainabilityIcon,
  TransparencyIcon,
} from './icons';

type Icon =
  | 'business'
  | 'community'
  | 'dash'
  | 'delivery'
  | 'developer'
  | 'discovery'
  | 'embedded'
  | 'empathy'
  | 'execution'
  | 'fullyManaged'
  | 'support'
  | 'sustainability'
  | 'transparency';

export type CardProps<E extends ElementType = ElementType> = {
  as?: E;
  icon?: Icon;
  largeHeading?: string;
  heading?: string;
  subheading?: string;
  text?: string;
};

const IconList = {
  business: BusinessIcon,
  community: CommunityIcon,
  dash: DashIcon,
  delivery: DeliveryIcon,
  developer: DeveloperIcon,
  discovery: DiscoveryIcon,
  embedded: EmbeddedIcon,
  empathy: EmpathyIcon,
  execution: ExecutionIcon,
  fullyManaged: FullyManagedIcon,
  support: SupportIcon,
  sustainability: SustainabilityIcon,
  transparency: TransparencyIcon,
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
  const Icon = icon ? IconList[icon] : null;

  return (
    <Component {...props}>
      {Icon && (
        <Icon
          css={css`
            height: 3rem;
            margin-bottom: ${spacing.xxs};
            width: auto;
          `}
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
      {Children.map(children, (child) => cloneElement(child, { as: 'li' }))}
    </ul>
  );
};
