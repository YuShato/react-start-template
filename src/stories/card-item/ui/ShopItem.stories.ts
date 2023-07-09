import type { Meta, StoryObj } from '@storybook/react';
import ShopItem from './ShopItem';

const meta = {
  title: 'Example/ShopItem',
  component: ShopItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ShopItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Blushing Bromeliad',
    imgSrc: '',
    sku: 1995751877966,
    price: 119,
    itemCount: 2,
  },
  argTypes: { itemCount: { control: { type: 'number', min: 1, max: 100, step: 1 } } },
};
