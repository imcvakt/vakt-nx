import React from 'react';

import styled from 'styled-components';

export interface ItemsProps {
  items: string[][]
}

const Container = styled.div<{rows: number}>`
  grid-area: 3 / 2 / 4 / 13;
`;

const ColumnOpenCommitmentItemGroup = styled.div`
  display: flex;
`;

const ColumnOpenCommitmentItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  background-color: #1A1A1A;
  margin-bottom: 8px;
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;

export const Items = ({ items }: ItemsProps) => {
  return (
    <Container rows={items.length}>
      {items?.map((item, itemIndex) => (
        <ColumnOpenCommitmentItemGroup key={itemIndex}>
          {item?.map((subItem, subItemIndex) => (
            <ColumnOpenCommitmentItem key={subItemIndex}>
              {subItemIndex === 0 && (
                <Actions>
                  <input type="checkbox" />
                  <img width={16} height={16} src="assets/parcel.svg" alt="Open commitment type" />
                </Actions>
              )}
              {subItemIndex !== 0 && subItem}
            </ColumnOpenCommitmentItem>
          ))}
        </ColumnOpenCommitmentItemGroup>
      ))}
    </Container>
  );
};

export default Items;
