import { Meta, Story } from '@storybook/react';

import { Anchor, AnchorProps } from './Anchor';

export default {
  component: Anchor,
  title: 'Typography/Anchor',
} as Meta;

export const AnchorStory: Story<AnchorProps> = (args) => {
  return <Anchor {...args}>Approach</Anchor>;
};

AnchorStory.args = {};
AnchorStory.storyName = 'Anchor';
