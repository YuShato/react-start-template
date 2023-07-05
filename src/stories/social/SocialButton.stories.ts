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
    viewtype: 'facebook',
  },
};

export const Youtube: Story = {
  args: {
    viewtype: 'youtube',
  },
};

export const Instagram: Story = {
  args: {
    viewtype: 'instagram',
  },
};

export const Twitter: Story = {
  args: {
    viewtype: 'twitter',
  },
};

export const Linkedin: Story = {
  args: {
    viewtype: 'linkedin',
  },
};
