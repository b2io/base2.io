import type { Meta, Story } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  component: Heading,
  title: 'Typography/Heading',
} as Meta;

export const HeadingStory: Story<HeadingProps> = (args) => {
  return <Heading {...args}>Software that moves people.</Heading>;
};

HeadingStory.args = {};
HeadingStory.storyName = 'Heading';
