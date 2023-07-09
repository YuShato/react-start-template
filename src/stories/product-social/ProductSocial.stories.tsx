import type { Meta, StoryObj } from '@storybook/react';

import ProductSocialList from './ProductSocial';
import { PRODUCT_SOCIAL } from './utils/constants/product-social';

const meta = {
  title: 'Example/ProductSocial',
  component: ProductSocialList,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductSocialList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: PRODUCT_SOCIAL,
  },
  argTypes: {
    list: { control: 'check', options: { ...PRODUCT_SOCIAL } },
  },
};
