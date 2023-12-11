import type { Meta, Story } from '@storybook/react';

import { TransparencyIcon } from './TransparencyIcon';
import type { SvgProps } from './types';

export default {
  component: TransparencyIcon,
  title: 'Icons/Transparency',
} as Meta;

export const Transparency: Story<SvgProps> = (args) => {
  return <TransparencyIcon {...args} />;
};

Transparency.storyName = 'Transparency';
