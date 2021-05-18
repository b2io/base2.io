import { css } from '@emotion/react';
import { Children, cloneElement, ElementType, FC, ReactElement } from 'react';

import { atMinTablet, spacing } from '~/theme';
import { Heading, Text } from '~/components';

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

export type IconCardProps<E extends ElementType = ElementType> = {
  as?: E;
  icon: Icon;
  heading: string;
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

export const IconCard: FC<IconCardProps> = ({
  as: Component = 'div',
  children,
  icon,
  heading,
  ...props
}) => {
  const Icon = IconList[icon];

  return (
    <Component {...props}>
      <Icon
        css={css`
          height: 3rem;
          margin-bottom: ${spacing.xxs};
          width: auto;
        `}
      />
      <Heading
        as="h3"
        color="coral"
        variant="h3"
        css={css`
          margin-bottom: ${spacing.xs};
        `}
      >
        {heading}
      </Heading>
      <Text
        as="p"
        css={css`
          margin: 0;
        `}
      >
        {children}
      </Text>
    </Component>
  );
};

export type IconCardGridProps = {
  children: ReactElement<IconCardProps>[];
};

export const IconCardGrid: FC<IconCardGridProps> = ({ children, ...props }) => {
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
