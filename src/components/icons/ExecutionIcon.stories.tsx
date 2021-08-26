import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { ExecutionIcon } from './ExecutionIcon';
import type { SvgProps } from './types';

export default {
  component: ExecutionIcon,
  title: 'Icons/Execution',
} as Meta;

export const Execution: Story<SvgProps> = (args) => {
  return <ExecutionIcon {...args} />;
};

Execution.storyName = 'Execution';
