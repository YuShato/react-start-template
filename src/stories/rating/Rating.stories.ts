import type { Meta, StoryObj } from '@storybook/react';
import ShopButton from './Rating';

const meta = {
  title: 'Example/Rating',
  component: ShopButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ShopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 4,
    title: 'Customer Review',
    reviewCount: 19,
  },
  argTypes: {
    rating: { control: { type: 'number', min: 1, max: 5, step: 0.5 } },
    title: { control: { type: 'text' } },
    reviewCount: { control: { type: 'number' } },
  },
};
