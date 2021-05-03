import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DiscoveryIcon } from '..';
import { SvgProps } from '../types';

export default {
  component: DiscoveryIcon,
  title: 'Icons/CustomIcons/DiscoveryIcon',
} as Meta;

export const Discovery: Story<SvgProps> = (args) => {
  return <DiscoveryIcon {...args} />;
};

Discovery.args = {};
Discovery.storyName = 'Discovery';
