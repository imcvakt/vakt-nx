import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NominationPlannerProps {
  headers: {item: string, value: string}[],
  data: {
    headers: string[],
    items: string[][],
  }
}

const ActionColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 16px;
`;

const Grid = styled.div<{rows: number, columns: number}>`
  display: grid;
  grid-template-columns: 0.2fr repeat(${p => p.columns}, 1fr) 0.2fr;
  grid-template-rows: repeat(${p => p.rows}, auto);
  grid-column-gap: 0px;
  grid-row-gap: 8px;

  background: #212528;
  border-radius: 3px;
  width: 100%;

  padding: 8px;
`;

const Left = styled.div`
  grid-area: 1 / 1 / 4 / 2;
`;

const Header = styled.div`
  grid-area: 1 / 2 / 2 / 13;
  border-bottom: 1px solid #424347;
  margin-bottom: 16px;
`;

const Right = styled.div`
  grid-area: 1 / 13 / 4 / 14;
`;

const Header2 = styled.div`
  grid-area: 2 / 2 / 3 / 13;
  background-color: #1A1A1A;
`;

const Items = styled.div<{rows: number}>`
  grid-area: 3 / 2 / ${p => p.rows} / 13;
`;

const ColumnsFlex = styled.div`
  display: flex;
`;

const ItemHead = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  height: 50px;

  > div:first-child {
    font: Medium 13px Helvetica Neue;
    color: #399BF8;
  }

  > div {
    font: Regular 13px/15px Helvetica Neue;
    color: #FFFFFF;
  }
`;

const ItemBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #6D9AC4;

  border-radius: 3px 3px 0px 0px;
  background-color: #1A1A1A;

  height: 30px;
`;

const OpenCommitment = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: #1A1A1A;
  margin-bottom: 8px;
  height: 40px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const NominationPlanner = ({ headers, data }: NominationPlannerProps) => {

  return (
    <Grid rows={(data.items[0].length + 2)} columns={headers.length}>
      <Left>
        <ActionColumn>
          <input type="checkbox" />
        </ActionColumn>
      </Left>

      <Header>
        <ColumnsFlex>
          {headers.map((header, i) => (
            <ItemHead key={i}>
              <div>{header.item}</div>
              <div>{header.value}</div>
            </ItemHead>
          ))}
        </ColumnsFlex>
      </Header>

      <Header2>
        <ColumnsFlex>
          {data?.headers.map((header, i) => (
            <ItemBody key={i}>{header}</ItemBody>
          ))}
        </ColumnsFlex>
      </Header2>

      <Items rows={data.items[0].length}>
        {data?.items[0].map((item, itemIndex) => (
          <ColumnsFlex key={itemIndex}>
            {data?.items[0].map((subItem, subItemIndex) => (
              <OpenCommitment key={subItemIndex}>
                {subItemIndex === 0 && (
                  <Actions>
                    <input type="checkbox" />
                    <img width={16} height={16} src="assets/parcel.svg" alt="Open commitment type" />
                  </Actions>
                )}
                {subItemIndex !== 0 && subItem}
              </OpenCommitment>
            ))}
          </ColumnsFlex>
        ))}
      </Items>

      <Right>{'<'}</Right>
    </Grid>
  );
};

export default NominationPlanner;
