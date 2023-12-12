import type { Meta, Story } from '@storybook/react';

import { Link, LinkProps } from './Link';

export default {
  component: Link,
  title: 'Typography/Link',
} as Meta;

export const LinkStory: Story<LinkProps> = (args) => {
  return <Link {...args}>Approach</Link>;
};

LinkStory.args = { href: '/', variant: 'default' };
LinkStory.storyName = 'Link';
