import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta = {
  title: 'Example/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage: Story = {
  args: {
    children: React.createElement('div', {}, 'Content'),
  },
};
