import type { Meta, Story } from '@storybook/react';
import React from 'react';

import { SupportIcon } from './SupportIcon';
import type { SvgProps } from './types';

export default {
  component: SupportIcon,
  title: 'Icons/Support',
} as Meta;

export const Support: Story<SvgProps> = (args) => {
  return <SupportIcon {...args} />;
};

Support.storyName = 'Support';
