import React from 'react';
import { Button } from '../../button/Button';
import ShopButton from '../../card-button/ShopButton';
import Rating from '../../rating/Rating';
import Sizes, { SizeItemTypes } from '../../sizes/Sizes';
import { DEFAULT_SIZE, SIZES } from '../../sizes/utils/constants';
import Categories, { CategoryProps } from '../../categories/Categories';
import UiCategories from '../../categories/ui';
import ProductSocialList, { SocialItemProps } from '../../product-social/ProductSocial';
import UiFItem from './ui';
import TabsCmp, { mockTabsData } from '../../tabs/Tabs';
import ProductSlider, { Image } from '../../slider/Slider';
import UiLayout from '../../layout/ui';
import { FullDescriptionProps } from '../../full-description/FullDescription';

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
  productSocial: [] | SocialItemProps[];
  images: Array<Image> | [];
  tags: Array<CategoryProps> | [];
  shortDescription: string;
  fullDescription?: FullDescriptionProps; // Добавьте необязательное свойство
  onAddToCart: () => void;
  onAddToFavorite: () => void;
}

export const DEF_DESCRIPTION = {
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
    rating = 4,
    sku = 0,
    categories = [],
    tags = [],
    onAddToCart,
    onAddToFavorite,
    shortDescription = '',

    images = [],
    productSocial = [],
  } = props;

  return (
    <UiLayout.Container>
      <UiFItem.MainInfo>
        <ProductSlider images={images} />

        <UiFItem>
          <UiFItem.Title>{name}</UiFItem.Title>

          <UiFItem.Price>${price}</UiFItem.Price>

          <Rating rating={rating} title="Customer Review" reviewCount={reviewCount} />

          <UiFItem.Info>
            <UiFItem.SubTitle>Short Description:</UiFItem.SubTitle>

            <UiFItem.Description>{shortDescription}</UiFItem.Description>

            <Sizes sizes={SIZES} activeSize={activeSize} />

            <UiFItem.ButtonList>
              <ShopButton itemCount={itemCount} />

              <UiFItem.ButtonList>
                <Button label="BUY NOW" primary={false} size="medium" type="button" onClick={onAddToCart} />

                <Button label="ADD TO CART" primary={true} size="medium" type="button" onClick={onAddToCart} />

                <Button label="" primary={true} size="small" type="button" viewType="like" onClick={onAddToFavorite} />
              </UiFItem.ButtonList>
            </UiFItem.ButtonList>

            <UiFItem.InfoList>
              <UiCategories>
                <h4>SKU:</h4> {sku}
              </UiCategories>

              <Categories list={categories} title="Categories" />

              <Categories list={tags} title="Tags" />

              <ProductSocialList list={productSocial} />
            </UiFItem.InfoList>
          </UiFItem.Info>
        </UiFItem>
      </UiFItem.MainInfo>

      <TabsCmp data={mockTabsData} />
    </UiLayout.Container>
  );
};

export default FullItem;
