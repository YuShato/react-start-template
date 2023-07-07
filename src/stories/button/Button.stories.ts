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
    viewtype: 'facebook',
  },
};

export const Google: Story = {
  args: {
    label: 'Login with Google',
    type: 'button',
    viewtype: 'google',
  },
};

export const Like: Story = {
  args: {
    label: '',
    type: 'button',
    size: 'small',
    viewtype: 'like',
  },
};
export const Cart: Story = {
  args: {
    label: '',
    type: 'button',
    size: 'small',
    viewtype: 'cart',
    primary: true,
  },
};

export const Logout: Story = {
  args: {
    label: 'Logout',
    type: 'button',
    size: 'small',
    viewtype: 'logout',
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
