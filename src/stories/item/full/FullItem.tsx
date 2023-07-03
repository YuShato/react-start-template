import React from 'react';
import { Button } from '../../button/Button';

import ShopButton from '../../card-button/ShopButton';
import FullDescription, { FullDescriptionProps } from '../../full-description/FullDescription';
import Rating from '../../rating/Rating';
import Sizes, { SizeItemTypes } from '../../sizes/Sizes';
import { DEFAULT_SIZE, SIZES } from '../../sizes/utils/constants';
import Categories, { CategoryProps } from '../../categories/Categories';

interface FullItemProps {
  name: string;
  price: number;
  itemCount: number;
  activeSize: 's' | 'm' | 'l' | 'xl';
  sizes: SizeItemTypes[];
  reviewCount: number;
  rating: number;
  sku: number;
  categories: Array<CategoryProps> | [];
  images: string[];
  tags: Array<CategoryProps> | [];
  shortDescription: string;
  fullDescription: FullDescriptionProps;
  onAddToCart: () => void;
  onAddToFavorite: () => void;
}

const DEF_DESCRIPTION = {
  common: '',
  living_room: '',
  dinning_room: '',
  office: '',
};

const FullItem = (props: FullItemProps) => {
  const {
    name = '',
    price = 0,
    itemCount = 0,
    activeSize = DEFAULT_SIZE,
    reviewCount = 0,
    rating = 0,
    sku = 0,
    categories = [],
    tags = [],
    onAddToCart,
    onAddToFavorite,
    shortDescription = '',
    fullDescription = DEF_DESCRIPTION,
    images = [],
  } = props;

  return (
    <div>
      <div>{images && images.map((image) => <img src={image} key={image} alt={name} />)}</div>

      <div>
        <p>{name}</p>

        <p>{price}</p>
        <div>
          <Rating rating={rating} />

          <div>{reviewCount} Customer Review</div>
        </div>
        <div>
          <h3>Short Description:</h3>

          <p>{shortDescription}</p>
        </div>

        <Sizes sizes={SIZES} activeSize={activeSize} />

        <ShopButton itemCount={itemCount} />

        <Button label="BUY NOW" primary={true} size="medium" type="button" onClick={onAddToCart} />

        <Button label="ADD TO CART" size="medium" type="button" onClick={onAddToCart} />

        <Button label="" onClick={onAddToFavorite} primary size="small" type="button" viewType="like" />

        <p>
          <span>SKU:</span> {sku}
        </p>

        <Categories list={categories} title="Categories" />

        <Categories list={tags} title="Tags" />

        <div>
          <p>Share this products:</p>
          {/* добавить social */}
        </div>
      </div>

      {/* full */}

      <div>
        {/* tabs */}
        <div>
          <div>Product Description</div>

          <div>Reviews ({reviewCount})</div>
        </div>

        {/* description */}
        <FullDescription {...fullDescription} />
      </div>
    </div>
  );
};

export default FullItem;
