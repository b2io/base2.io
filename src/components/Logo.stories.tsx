import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Logo, LogoProps, LogoWithName } from './Logo';

export default {
  component: Logo,
  title: 'Icons/Logo',
} as Meta;

export const LogoStory: Story<LogoProps> = (args) => {
  return <Logo {...args} />;
};

LogoStory.args = {};
LogoStory.storyName = 'Logo';

export const LogoWithNameStory: Story<LogoProps> = (args) => {
  return <LogoWithName {...args} />;
};

LogoWithNameStory.args = {};
LogoWithNameStory.storyName = 'LogoWithName';
