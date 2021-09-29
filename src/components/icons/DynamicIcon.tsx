import dynamic from 'next/dynamic';
import type { ComponentType, FC } from 'react';

import { SvgProps } from './types';

const ICONS_BY_TYPE: {
  [key in DynamicIconProps['type']]: ComponentType<SvgProps>;
} = {
  business: dynamic(() => import('./BusinessIcon')),
  community: dynamic(() => import('./CommunityIcon')),
  dash: dynamic(() => import('./DashIcon')),
  delivery: dynamic(() => import('./DeliveryIcon')),
  developer: dynamic(() => import('./DeveloperIcon')),
  discovery: dynamic(() => import('./DiscoveryIcon')),
  embedded: dynamic(() => import('./EmbeddedIcon')),
  empathy: dynamic(() => import('./EmpathyIcon')),
  execution: dynamic(() => import('./ExecutionIcon')),
  fullyManaged: dynamic(() => import('./FullyManagedIcon')),
  support: dynamic(() => import('./SupportIcon')),
  sustainability: dynamic(() => import('./SustainabilityIcon')),
  transparency: dynamic(() => import('./TransparencyIcon')),
};

export type DynamicIconProps = SvgProps & {
  type:
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
};

export const DynamicIcon: FC<DynamicIconProps> = ({ type, ...props }) => {
  const Icon = ICONS_BY_TYPE[type] ?? null;

  if (Icon === null) {
    console.warn(`Unknown Icon type: "${type}"`);
  }

  return <Icon {...props} />;
};
