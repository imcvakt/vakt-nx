import React, { useMemo } from 'react';
import { useLogistics } from '@vakt-web/logistics/data-access';

interface Props<ObjectType> {
  object: ObjectType;
  properties: {
    key: number | symbol | string,
    title: string,
  }[];
  onSelectRow?: (rowSelected: ObjectType) => void
}

// TODO: util lib
function getValue(object, path) {
  return path
      .replace(/\[/g, '.')
      .replace(/\]/g, '')
      .split('.')
      .reduce((o, k) => (o || {})[k], object);
}

export function Row<ObjectType extends { id: string }>(
  { object, properties, onSelectRow }: Props<ObjectType>
) {
  const {state} = useLogistics();

  const isSelected = useMemo(() => {
    return !!state.openCommitments.find(openCommitment => openCommitment.id === object.id);
  }, [state.openCommitments, object]);

  return (
    <tr>
      {
        properties.map((property, i) => {
          if(i === 0 && onSelectRow) {
            return (
              <td key={i}><input type="checkbox" defaultChecked={isSelected} onClick={() => onSelectRow(object)} /></td>
            );
          }
          return (
            <td key={i}>
              {getValue(object, property.key)}
            </td>
          );
        })
      }
    </tr>
  );
}
