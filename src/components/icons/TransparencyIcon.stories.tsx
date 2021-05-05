import { Meta, Story } from '@storybook/react';
import React from 'react';

import { TransparencyIcon } from './';
import { SvgProps } from './types';

export default {
  component: TransparencyIcon,
  title: 'Icons/Transparency',
} as Meta;

export const Transparency: Story<SvgProps> = (args) => {
  return <TransparencyIcon {...args} />;
};

Transparency.storyName = 'Transparency';
