import { DEFAULT_SIZE, SIZES } from '../../../sizes/utils/constants';
import { FullDescriptionProps } from '../../../full-description/types';
import { CATEGORIES, TAGS } from '../../../categories/utils/constants/categories';
import { PRODUCT_SOCIAL } from '../../../product-social/utils/constants/product-social';
import { images } from '../../..//slider/mockData';
import { FullItemProps } from '../types';

export const fullDescription: FullDescriptionProps = {
  common:
    'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  living_room:
    'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  dinning_room:
    'The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.',
  office:
    'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const mockProductData: FullItemProps['data'] = {
  name: 'Barberton Daisy',
  price: 119,
  itemCount: 1,
  activeSize: DEFAULT_SIZE,
  reviewCount: 19,
  rating: 4,
  sku: 1995751877966,
  categories: CATEGORIES,
  tags: TAGS,
  onAddToCart: () => {
    console.log('onAddToCart');
  },
  onAddToFavorite: () => {
    console.log('onAddToFavorite');
  },
  shortDescription:
    'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ',
  fullDescription: fullDescription,
  images: images,
  productSocial: PRODUCT_SOCIAL,
  sizes: SIZES,
};
