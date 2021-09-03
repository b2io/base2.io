import { css } from '@emotion/react';
import React, {
  Children,
  cloneElement,
  ElementType,
  FC,
  ReactElement,
} from 'react';

import { Heading, Link, Text } from '~/components';
import { atMinTablet, spacing } from '~/theme';

import {
  BusinessIcon,
  CommunityIcon,
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
  icon: Icon;
  heading?: string;
  link?: string;
  subheading?: string;
  text?: string;
};

const IconList = {
  business: BusinessIcon,
  community: CommunityIcon,
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
  link,
  subheading,
  text,
  ...props
}) => {
  const Icon = IconList[icon];

  return (
    <Component {...props}>
      <div>{children}</div>
      <Icon
        css={css`
          height: 3rem;
          margin-bottom: ${spacing.xxs};
          width: auto;
        `}
      />
      <Heading
        as="h1"
        color="coral"
        variant="h1"
        css={css`
          margin-bottom: ${spacing.xs};
        `}
      >
        {heading}
      </Heading>
      <Heading
        as="h2"
        color="offWhite"
        css={css`
          margin-bottom: ${spacing.sm};
        `}
        variant="h2"
      >
        {subheading}
      </Heading>
      <Text
        as="p"
        css={css`
          margin: 0;
        `}
      >
        {text}
      </Text>
      <Link
        css={css`
          font-size: 2rem;
        `}
        color="coral"
        href="#"
      >
        {link}
      </Link>
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
        margin: 0;
        max-width: 67rem;
        padding: 0;

        ${atMinTablet} {
          grid-column-gap: 1.875rem;
          grid-template-columns: repeat(2, minmax(20rem, 30rem));
        }
      `}
      {...props}
    >
      {Children.map(children, (child) => cloneElement(child, { as: 'li' }))}
    </ul>
  );
};
