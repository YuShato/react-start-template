import React from 'react';
import UiSize from './ui';
import { SizeItemProps, SizesListProps } from './types';

const SizeItem = ({ size, activeSize = 's' }: SizeItemProps) => {
  const isCurrentSizeActive = size.id === activeSize;

  return (
    <UiSize.Item>
      <UiSize.Button active={isCurrentSizeActive} title={size.title}>
        {size.label}
      </UiSize.Button>
    </UiSize.Item>
  );
};

const Sizes = ({ sizes, activeSize = 's' }: SizesListProps) => {
  return (
    <>
      <UiSize.Title>Size:</UiSize.Title>

      <UiSize>
        {sizes.map((size) => (
          <SizeItem key={size.id} size={size} activeSize={activeSize} />
        ))}
      </UiSize>
    </>
  );
};

export default Sizes;
