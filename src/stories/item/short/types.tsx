import { Image } from '../../slider/types';

export interface ShortItemProps {
  data: {
    id: number;
    oldPrice?: number;
    newPrice?: number;
    discount: number;
    title: string;
    images: Array<Image> | [];
    description?: string;
    onAddToCart: () => void;
    onAddToFavorite: () => void;
  };
}
