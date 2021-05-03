import { Meta, Story } from '@storybook/react';
import React from 'react';

import { FullyManagedIcon } from '..';
import { SvgProps } from './types';

export default {
  component: FullyManagedIcon,
  title: 'Icons/FullyManagedIcon',
} as Meta;

export const FullyManaged: Story<SvgProps> = (args) => {
  return <FullyManagedIcon {...args} />;
};

FullyManaged.args = {};
FullyManaged.storyName = 'FullyManaged';
