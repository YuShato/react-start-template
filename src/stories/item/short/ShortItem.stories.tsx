import type { Meta, StoryObj } from '@storybook/react';
import ShortItem from './ShortItem';
import { images } from '../../slider/mockData';

const meta = {
  title: 'Example/ShortItem',
  component: ShortItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ShortItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      id: 1,
      title: 'Barberton Daisy',
      newPrice: 199,
      oldPrice: 229,
      images: images,
      discount: 13,
      onAddToCart: () => {
        console.log('onAddToCart');
      },
      onAddToFavorite: () => {
        console.log('onAddToFavorite');
      },
      description:
        'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
    },
  },
};
