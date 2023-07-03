import React from 'react';
import UiDescription from './ui';

export interface FullDescriptionProps {
  common: string;
  living_room: string;
  dinning_room: string;
  office: string;
}

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
