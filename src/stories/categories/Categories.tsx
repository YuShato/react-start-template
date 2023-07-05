import React from 'react';
import UiCategories from './ui';
import { CategoriesProps } from './types';

const Categories = ({ list, title }: CategoriesProps) => {
  return (
    <UiCategories>
      <h4>{title}:</h4>{' '}
      {list.map((item, index) => (
        <span key={item?.id}>
          {item?.name}

          {index !== list.length - 1 && ', '}
        </span>
      ))}
    </UiCategories>
  );
};

export default Categories;
