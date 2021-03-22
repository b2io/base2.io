import { Meta, Story } from '@storybook/react';

import { CTA } from './CTA';

export default {
  component: CTA,
  title: 'Buttons/CTA',
} as Meta;

export const CTAStory: Story = () => {
  return <CTA href="/">See our approach</CTA>;
};

CTAStory.storyName = 'CTA';
