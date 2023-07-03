import type { Meta, StoryObj } from '@storybook/react';
import Categories from './Categories';
import { CATEGORIES } from './utils/constants/categories';

const meta = {
  title: 'Example/Categories',
  component: Categories,
  tags: ['autodocs'],
} satisfies Meta<typeof Categories>;

export default meta;
type Story = StoryObj<typeof meta>;

const optionCategories = () => {
  return CATEGORIES.map((category) => category.name);
};

export const Default: Story = {
  args: {
    list: CATEGORIES,
    title: 'Categories',
  },
  argTypes: {
    list: { control: 'checkbox', options: optionCategories },
  },
};
