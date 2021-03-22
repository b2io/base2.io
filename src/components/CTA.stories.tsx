import { Meta, Story } from '@storybook/react';

import { CTA } from './CTA';

export default {
  component: CTA,
  title: 'Buttons/CTA',
} as Meta;

export const CTAStory: Story = (args) => {
  return (
    <CTA href="/" {...args}>
      See our approach
    </CTA>
  );
};

CTAStory.args = {};
CTAStory.storyName = 'CTA';
