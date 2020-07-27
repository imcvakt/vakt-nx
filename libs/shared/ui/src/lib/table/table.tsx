import React, { PropsWithChildren } from 'react';

import styled from 'styled-components';
import { Head } from './head';
import { Row } from './row';

interface Props<ObjectType> {
  objects: ObjectType[];
  properties: {
    key: number | symbol | string,
    title: string,
  }[];
  onSelectRow?: (rowSelected: ObjectType) => void,
  selectedRows: string[],
}

const StyledTable = styled.div`
  table {
    background: #222428 0% 0% no-repeat padding-box;

    border-spacing: 0;
    border: 1px solid black;

    width: 100%;
    table-layout: fixed;
    word-break: break-word;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export function Table<ObjectType extends { id: string }>(
  { objects, properties, onSelectRow, selectedRows }: PropsWithChildren<Props<ObjectType>>,
) {

  if(onSelectRow) {
    properties = [{ key: '', title: '' }, ...properties];
  }

  return (
    <StyledTable>
      <table>
        <Head
          properties={properties}
        />
        <tbody>
          {
            objects.map((object, i) => (
              <Row
                onSelectRow={onSelectRow}
                selectedRows={selectedRows}
                key={i}
                object={object}
                properties={properties}
              />
            ))
          }
        </tbody>
      </table>
    </StyledTable>
  );
};
