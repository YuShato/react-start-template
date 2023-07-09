import type { Meta, StoryObj } from '@storybook/react';
import Sizes from './Sizes';
import { SIZES } from './utils/constants';

const meta = {
  title: 'Example/Sizes',
  component: Sizes,
  tags: ['autodocs'],
} as Meta<typeof Sizes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sizes: SIZES,
    activeSize: 's',
  },
  argTypes: {
    sizes: { control: 'radio' },
    activeSize: { control: 'radio', options: ['s', 'm', 'l', 'xl'] },
  },
};
