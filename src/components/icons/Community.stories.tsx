import { Meta, Story } from '@storybook/react';
import React from 'react';

import { CommunityIcon } from '.';
import { SvgProps } from './types';

export default {
  component: CommunityIcon,
  title: 'Icons/Community',
} as Meta;

export const Community: Story<SvgProps> = (args) => {
  return <CommunityIcon {...args} />;
};

Community.storyName = 'Community';
