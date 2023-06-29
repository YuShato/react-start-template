import type { Meta, StoryObj } from '@storybook/react';

import Logo from './Logo';

const meta = {
  title: 'Example/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    viewType: { control: 'radio' },
  },
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    viewType: 'default',
  },
};

export const Big: Story = {
  args: {
    viewType: 'big',
  },
};

export const Mobile: Story = {
  args: {
    viewType: 'mobile',
  },
};

export default meta;
