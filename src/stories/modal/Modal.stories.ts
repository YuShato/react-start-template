import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    visible: true,
    children: 'Open Modal',
  },
};
