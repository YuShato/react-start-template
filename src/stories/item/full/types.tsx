import { SizeItemTypes } from '../../sizes/Sizes';
import { CategoryProps } from '../../categories/Categories';
import { SocialItemProps } from '../../product-social/ProductSocial';
import { Image } from '../../slider/Slider';
import { FullDescriptionProps } from '../../full-description/FullDescription';

export interface FullItemProps {
  name: string;
  price: number;
  itemCount: number;
  activeSize: 's' | 'm' | 'l' | 'xl';
  sizes: SizeItemTypes[];
  reviewCount: number;
  rating: number;
  sku: number;
  categories: Array<CategoryProps> | [];
  productSocial: [] | SocialItemProps[];
  images: Array<Image> | [];
  tags: Array<CategoryProps> | [];
  shortDescription: string;
  fullDescription?: FullDescriptionProps;
  onAddToCart: () => void;
  onAddToFavorite: () => void;
}
