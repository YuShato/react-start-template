import ProductSlider from './Slider';
import type { Meta, StoryObj } from '@storybook/react';
import { images } from './mockData';

const meta = {
  title: 'Example/ProductSlider',
  component: ProductSlider,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images: images,
  },
};
