import { SocialItemProps } from '../../product-social/types';
import { CategoryProps } from '../../categories/types';
import { FullDescriptionProps } from '../../full-description/types';
import { SizeItemTypes } from '../../sizes/types';
import { Image } from '../../slider/types';

export interface FullItemProps {
  data: {
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
  };
}
