import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;
const TemplateVA: ComponentStory<typeof Heading> = (args) => (
  <div className="pt-container va">
    <Heading {...args} />
  </div>
);

const TemplateVH: ComponentStory<typeof Heading> = (args) => (
  <div className="pt-container vh">
    <Heading {...args} />
  </div>
);

export const VAHeading = TemplateVA.bind({});
VAHeading.args = {
  headerTag: 'h1',
  headerLabel: 'This is a virgin atlantic heading',
  classNames: '',
  ariaLavel: 1,
};

export const VHHeading = TemplateVH.bind({});
VHHeading.args = {
  headerTag: 'h6',
  headerLabel: 'This is a virgin Holiday heading',
  classNames: '',
  ariaLavel: 6,
};
