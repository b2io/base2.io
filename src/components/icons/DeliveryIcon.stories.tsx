import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DeliveryIcon } from '..';
import { SvgProps } from './types';

export default {
  component: DeliveryIcon,
  title: 'Icons/Delivery',
} as Meta;

export const Delivery: Story<SvgProps> = (args) => {
  return <DeliveryIcon {...args} />;
};

Delivery.storyName = 'Delivery';
