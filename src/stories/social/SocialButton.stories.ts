import type { Meta, StoryObj } from '@storybook/react';

import SocialButton from './SocialButton';

const meta = {
  title: 'Example/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
} satisfies Meta<typeof SocialButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Facebook: Story = {
  args: {
    viewType: 'facebook',
  },
};

export const Youtube: Story = {
  args: {
    viewType: 'youtube',
  },
};

export const Instagram: Story = {
  args: {
    viewType: 'instagram',
  },
};

export const Twitter: Story = {
  args: {
    viewType: 'twitter',
  },
};

export const Linkedin: Story = {
  args: {
    viewType: 'linkedin',
  },
};
