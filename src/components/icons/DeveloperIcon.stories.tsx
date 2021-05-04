import { Meta, Story } from '@storybook/react';
import React from 'react';

import { DeveloperIcon } from '..';
import { SvgProps } from './types';

export default {
  component: DeveloperIcon,
  title: 'Icons/Developer',
} as Meta;

export const Developer: Story<SvgProps> = (args) => {
  return <DeveloperIcon {...args} />;
};

Developer.args = {};
Developer.storyName = 'Developer';
