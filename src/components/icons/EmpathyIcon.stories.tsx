import { Meta, Story } from '@storybook/react';
import React from 'react';

import { EmpathyIcon } from '..';
import { SvgProps } from './types';

export default {
  component: EmpathyIcon,
  title: 'Icons/Empathy',
} as Meta;

export const Empathy: Story<SvgProps> = (args) => {
  return <EmpathyIcon {...args} />;
};

Empathy.storyName = 'Empathy';
