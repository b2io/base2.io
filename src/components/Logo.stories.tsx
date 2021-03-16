import { Meta, Story } from '@storybook/react';

import { Logo, LogoProps } from './Logo';

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
  return <Logo showName={true} {...args} />;
};

LogoWithNameStory.args = {};
LogoWithNameStory.storyName = 'LogoWithName';
