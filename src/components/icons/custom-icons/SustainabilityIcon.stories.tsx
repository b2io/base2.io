import { Meta, Story } from '@storybook/react';
import React from 'react';

import { SustainabilityIcon } from '..';
import { SvgProps } from '../types';

export default {
  component: SustainabilityIcon,
  title: 'Icons/CustomIcons/SustainabilityIcon',
} as Meta;

export const Sustainability: Story<SvgProps> = (args) => {
  return <SustainabilityIcon {...args} />;
};

Sustainability.args = {};
Sustainability.storyName = 'Support';
