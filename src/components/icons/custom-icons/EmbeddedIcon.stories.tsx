import { Meta, Story } from '@storybook/react';
import React from 'react';

import { EmbeddedIcon } from '..';
import { SvgProps } from '../types';

export default {
  component: EmbeddedIcon,
  title: 'Icons/CustomIcons/EmbeddedIcon',
} as Meta;

export const Embedded: Story<SvgProps> = (args) => {
  return <EmbeddedIcon {...args} />;
};

Embedded.args = {};
Embedded.storyName = 'Embedded';
