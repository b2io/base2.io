import type { Meta, Story } from '@storybook/react';

import { IconCard, IconCardProps } from './IconCard';

export default {
  component: IconCard,
  title: 'Components/IconCard',
} as Meta;

export const IconCardStory: Story<IconCardProps & { text: string }> = ({
  text,
  ...args
}) => {
  return <IconCard {...args}>{text}</IconCard>;
};

IconCardStory.args = {
  heading: 'Fully managed ',
  icon: 'fullyManaged',
  text: 'Our developers are skilled at handling the entire project pipeline while making sure you’re satisfied at each step of our process. A dedicated contact within our team is always available to answer your questions, and daily standups provide an opportunity for you to weigh in on our progress.',
};
IconCardStory.storyName = 'IconCard';
