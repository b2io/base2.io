import type { Meta, Story } from '@storybook/react';

import { EmpathyIcon } from './EmpathyIcon';
import type { SvgProps } from './types';

export default {
  component: EmpathyIcon,
  title: 'Icons/Empathy',
} as Meta;

export const Empathy: Story<SvgProps> = (args) => {
  return <EmpathyIcon {...args} />;
};

Empathy.storyName = 'Empathy';
