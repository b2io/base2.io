import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BusinessIcon } from '..';
import { SvgProps } from './types';

export default {
  component: BusinessIcon,
  title: 'Icons/Business',
} as Meta;

export const Business: Story<SvgProps> = (args) => {
  return <BusinessIcon {...args} />;
};

Business.storyName = 'Business';
