import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Anchorlink } from './Link';

export default {
  title: 'Example/Link',
  component: Anchorlink,
} as ComponentMeta<typeof Anchorlink>;
const TemplateVA: ComponentStory<typeof Anchorlink> = (args) => (
  <div className="pt-container mvw">
    <Anchorlink {...args} />
  </div>
);

const TemplateVH: ComponentStory<typeof Anchorlink> = (args) => (
  <div className="pt-container vse">
    <Anchorlink {...args} />
  </div>
);

export const VAAnchor = TemplateVA.bind({});
VAAnchor.args = {
  label: 'Virgin Atlantic',
  linkUrl: 'https://www.virginatlantic.com/',
};

export const VHAnchor = TemplateVH.bind({});
VHAnchor.args = {
  label: 'Virgin Holidays',
  linkUrl: 'https://www.virginholidays.co.uk/',
};
