import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FC } from 'react';

import { spacing } from '~/theme';
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

export type IconCardProps = {
  icon: Icon;
  heading: string;
};

const IconImage = styled.div(`
  svg {
    width: 50px;
    margin-bottom: ${spacing.xxs}
  }
`);

const IconList = {
  business: <BusinessIcon />,
  community: <CommunityIcon />,
  delivery: <DeliveryIcon />,
  developer: <DeveloperIcon />,
  discovery: <DiscoveryIcon />,
  embedded: <EmbeddedIcon />,
  empathy: <EmpathyIcon />,
  execution: <ExecutionIcon />,
  fullyManaged: <FullyManagedIcon />,
  support: <SupportIcon />,
  sustainability: <SustainabilityIcon />,
  transparency: <TransparencyIcon />,
};

export const IconCard: FC<IconCardProps> = ({
  children,
  icon,
  heading,
  ...props
}) => {
  const iconSelected = icon;

  return (
    <div {...props}>
      <IconImage className={icon}>{IconList[iconSelected]}</IconImage>
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
      <Text>{children}</Text>
    </div>
  );
};
