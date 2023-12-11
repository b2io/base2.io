import type { Meta, Story } from '@storybook/react';

import { SustainabilityIcon } from './SustainabilityIcon';
import type { SvgProps } from './types';

export default {
  component: SustainabilityIcon,
  title: 'Icons/Sustainability',
} as Meta;

export const Sustainability: Story<SvgProps> = (args) => {
  return <SustainabilityIcon {...args} />;
};

Sustainability.storyName = 'Sustainability';
