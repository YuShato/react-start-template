import type { Meta, StoryObj } from '@storybook/react';
import ShopButton from './ShopButton';

const meta = {
  title: 'Example/ShopButton',
  component: ShopButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ShopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemCount: 0,
  },
};
