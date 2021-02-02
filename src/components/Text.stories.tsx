import { Meta, Story } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  component: Text,
  title: 'Typography/Text',
} as Meta;

export const TextStory: Story<TextProps> = (args) => {
  return (
    <Text {...args}>
      We build software that helps real people solve real problems with greater
      ease through a flexible approach that prioritizes you and your end-user.
    </Text>
  );
};

TextStory.args = {};
TextStory.storyName = 'Text';
