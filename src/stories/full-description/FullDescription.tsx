import React from 'react';
import UiDescription from './ui';
import { FullDescriptionProps } from './types';

const renderSection = (title: string, content: string) => {
  return (
    <UiDescription.Block>
      <UiDescription.Title>{title}:</UiDescription.Title>
      <p>{content}</p>
    </UiDescription.Block>
  );
};

const FullDescription = (fullDescription: FullDescriptionProps) => {
  const { common = '', living_room = '', dinning_room = '', office = '' } = fullDescription;

  return (
    <UiDescription>
      {common && (
        <UiDescription.Block>
          <p>{common}</p>
        </UiDescription.Block>
      )}

      {living_room && renderSection('Living Room', living_room)}

      {dinning_room && renderSection('Dinning Room', dinning_room)}

      {office && renderSection('Office', office)}
    </UiDescription>
  );
};

export default FullDescription;
