import { images } from '../../../slider/mockData';
import { ShortItemProps } from '../types';

export const mockShortProductData: ShortItemProps['data'] = {
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
};
