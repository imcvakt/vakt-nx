import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NominationPlannerProps {
  headers: {item: string, value: string}[],
  openCommitmentsHeader: string[],
  openCommitments: string[][],
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

const HeaderItem = styled.div`
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

const OpenCommitmentHeader = styled.div`
  grid-area: 2 / 2 / 3 / 13;
`;

const ColumnOpenCommitmentHeader = styled.div`
  display: flex;
`;

const ColumnOpenCommitmentHeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 30px;

  background-color: #1A1A1A;
  font: Medium 13px/16px Helvetica Neue;
  color: #6D9AC4;
  opacity: 1;
`;

const Items = styled.div<{rows: number}>`
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

export const NominationPlanner = ({ headers, openCommitments, openCommitmentsHeader }: NominationPlannerProps) => {

  return (
    <Grid rows={(openCommitments.length + 2)} columns={headers.length}>
      <Left>
        <ActionColumn>
          <input type="checkbox" />
        </ActionColumn>
      </Left>

      <Header>
        <div style={{ display: 'flex', flex: 1}}>
          {headers.map((header, i) => (
            <HeaderItem key={i}>
              <div>{header.item}</div>
              <div>{header.value}</div>
            </HeaderItem>
          ))}
        </div>
      </Header>

      <OpenCommitmentHeader>
        <ColumnOpenCommitmentHeader>
          {openCommitmentsHeader.map((header, i) => (
            <ColumnOpenCommitmentHeaderItem key={i}>{header}</ColumnOpenCommitmentHeaderItem>
          ))}
        </ColumnOpenCommitmentHeader>
      </OpenCommitmentHeader>

      <Items rows={openCommitments.length}>
        {openCommitments?.map((item, itemIndex) => (
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
      </Items>

      <Right>{'<'}</Right>
    </Grid>
  );
};

export default NominationPlanner;
