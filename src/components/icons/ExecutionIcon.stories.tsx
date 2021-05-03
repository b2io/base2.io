import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ExecutionIcon } from '..';
import { SvgProps } from '../types';

export default {
  component: ExecutionIcon,
  title: 'Icons/CustomIcons/ExecutionIcon',
} as Meta;

export const Execution: Story<SvgProps> = (args) => {
  return <ExecutionIcon {...args} />;
};

Execution.args = {};
Execution.storyName = 'Execution';
