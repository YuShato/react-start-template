import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    type: 'button',
  },
};

export const Facebook: Story = {
  args: {
    label: 'Login with Facebook',
    type: 'button',
    viewType: 'facebook',
  },
};

export const Google: Story = {
  args: {
    label: 'Login with Google',
    type: 'button',
    viewType: 'google',
  },
};

export const Like: Story = {
  args: {
    label: '',
    type: 'button',
    size: 'small',
    viewType: 'like',
  },
};

export const Logout: Story = {
  args: {
    label: 'Logout',
    type: 'button',
    size: 'small',
    viewType: 'logout',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    type: 'button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    type: 'button',
  },
};
