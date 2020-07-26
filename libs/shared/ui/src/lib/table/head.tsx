import React from 'react';

interface Props {
  properties: {
    key: number | symbol | string,
    title: string,
  }[];
}

export const Head: React.FC<Props> = ({
  properties,
}) => {
  return (
    <thead>
      <tr>
        {
          properties.map((property, i) => (
            <th key={i}>{property.title}</th>
          ))
        }
      </tr>
    </thead>
  );
};
