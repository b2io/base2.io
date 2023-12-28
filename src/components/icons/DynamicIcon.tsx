import dynamic from 'next/dynamic';
import type { ComponentType, FC } from 'react';

import { SvgProps } from './types';

const ICONS_BY_TYPE: {
  [key in DynamicIconProps['type']]: ComponentType<SvgProps>;
} = {
  business: dynamic(() => import('./BusinessIcon'), { ssr: false }),
  community: dynamic(() => import('./CommunityIcon'), { ssr: false }),
  dash: dynamic(() => import('./DashIcon'), { ssr: false }),
  delivery: dynamic(() => import('./DeliveryIcon'), { ssr: false }),
  developer: dynamic(() => import('./DeveloperIcon'), { ssr: false }),
  discovery: dynamic(() => import('./DiscoveryIcon'), { ssr: false }),
  embedded: dynamic(() => import('./EmbeddedIcon'), { ssr: false }),
  empathy: dynamic(() => import('./EmpathyIcon'), { ssr: false }),
  execution: dynamic(() => import('./ExecutionIcon'), { ssr: false }),
  fullyManaged: dynamic(() => import('./FullyManagedIcon'), { ssr: false }),
  support: dynamic(() => import('./SupportIcon'), { ssr: false }),
  sustainability: dynamic(() => import('./SustainabilityIcon'), { ssr: false }),
  transparency: dynamic(() => import('./TransparencyIcon'), { ssr: false }),
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
