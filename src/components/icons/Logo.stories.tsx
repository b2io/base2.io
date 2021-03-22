import { Meta, Story } from '@storybook/react';
import React from 'react';

import { LogoIcon, LogoWithName } from './';
import { SvgProps } from './types';

export default {
  component: LogoIcon,
  title: 'Icons/Logo',
} as Meta;

export const LogoStory: Story<SvgProps> = (args) => {
  return <LogoIcon {...args} />;
};

LogoStory.args = {};
LogoStory.storyName = 'Logo';

export const LogoWithNameStory: Story<SvgProps> = (args) => {
  return <LogoWithName {...args} />;
};

LogoWithNameStory.args = {};
LogoWithNameStory.storyName = 'LogoWithName';
