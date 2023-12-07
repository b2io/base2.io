import type { Meta, Story } from '@storybook/react';

import { BusinessIcon } from './BusinessIcon';
import type { SvgProps } from './types';

export default {
  component: BusinessIcon,
  title: 'Icons/Business',
} as Meta;

export const Business: Story<SvgProps> = (args) => {
  return <BusinessIcon {...args} />;
};

Business.storyName = 'Business';
