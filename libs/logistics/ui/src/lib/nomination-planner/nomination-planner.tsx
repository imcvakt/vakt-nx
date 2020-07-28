import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NominationPlannerProps {}

const StyledNominationPlanner = styled.div`
  display: flex;
  flex-direction: row;
  height: 220px;
  background: #212528 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;
  padding: 8px;
`;

const ActionColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 16px;
`;

const ItemHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > div:first-child {
    text-align: left;
    font: Medium 13px Helvetica Neue;
    letter-spacing: 0px;
    color: #399BF8;
    opacity: 1;
  }

  > div {
    text-align: left;
    font: Regular 13px/15px Helvetica Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
  }
`;

const ItemBody = styled.div`
  text-align: left;
  font: Medium 13px/16px Helvetica Neue;
  letter-spacing: 0px;
  color: #6D9AC4;
  opacity: 1;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const ContentColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const DivTable = styled.div`
  display: table;
  width: 100%;
`;

const DivTableBody = styled.div`
  display: table-row-group;
`;

const DivTableRow = styled.div`
  display: table-row;
`;

const DivTableCell = styled.div`
  border: 1px solid #999999;
  display: table-cell;
  padding: 3px 10px;
`;

export const NominationPlanner = (props: NominationPlannerProps) => {
  return (
    <StyledNominationPlanner>
      <ActionColumn>
        <input type="checkbox" />
      </ActionColumn>
      <ContentColumn>
        <DivTable>
          <DivTableBody>
            <DivTableRow>
              <DivTableCell>&nbsp;</DivTableCell>
              <DivTableCell>
                <ItemHead>
                  <div>Customer Trade</div>
                  <div>EL-94631-001</div>
                </ItemHead>
              </DivTableCell>
              <DivTableCell>
                <ItemHead>
                  <div>Counterparty Trade Creator</div>
                  <div>Gunvor SA</div>
                </ItemHead>
              </DivTableCell>
              <DivTableCell>
                <ItemHead>
                  <div>Counterparty Trade Creator</div>
                  <div>Gunvor SA</div>
                </ItemHead>
              </DivTableCell>
            </DivTableRow>
            <DivTableRow>
              <DivTableCell>
                <Actions>
                  <input type="checkbox" />
                  <img width={16} height={16} src="assets/parcel.svg" alt="Opeen commitment type" />
                </Actions>
              </DivTableCell>
              <DivTableCell>
                <ItemBody>Counterparty Trade Creator</ItemBody>
              </DivTableCell>
              <DivTableCell>
                <ItemBody>Quantity UoM</ItemBody>
              </DivTableCell>
              <DivTableCell>&nbsp;</DivTableCell>
            </DivTableRow>
          </DivTableBody>
        </DivTable>
        {/* <table>
          <thead>
            <tr>
              <th></th>
              <th>
                <Item>
                  <div>Customer Trade</div>
                  <div>EL-94631-001</div>
                </Item>
              </th>
              <th>
                <Item>
                  <div>Counterparty Trade Creator</div>
                  <div>Gunvor SA</div>
                </Item>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Actions>
                  <input type="checkbox" />
                  <img width={16} height={16} src="assets/parcel.svg" alt="Opeen commitment type" />
                </Actions>
              </td>
              <td>
                <ItemBody>Counterparty Trade Creator</ItemBody>
              </td>
              <td>
                <ItemBody>Quantity UoM</ItemBody>
              </td>
            </tr>
          </tbody>
        </table> */}
      </ContentColumn>
    </StyledNominationPlanner>
  );
};

export default NominationPlanner;
