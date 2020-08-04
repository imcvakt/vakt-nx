import React from 'react';

import { NominationPlanner } from '@vakt-web/logistics/ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TradesPanelProps {}

const StyledTitle = styled.div`
  text-align: left;
  font: Bold 18px/23px Helvetica Neue;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;

  margin-top: 8px;
  margin-bottom: 16px;
`;

export const TradesPanel = (props: TradesPanelProps) => {
  const headers = [
    {item: 'Customer Trade', value: 'EL-94631-001'},
    {item: 'Counterparty Trade Creator', value: 'Gunvor SA'},
    {item: 'Product', value: 'Diesel'},
    {item: 'Delivery Term', value: 'CIF'},
    {item: 'Location', value: 'Antwerp'},
    {item: 'Barge Name', value: '-'},
    {item: 'Loading Date', value: '-'},
    {item: 'Discharge Date', value: '-'},
    {item: 'Inspector', value: '-'},
    {item: 'Nomination Status', value: 'Pending Draft'},
    {item: 'Timestamp', value: '-'}
  ];

  const openCommitments = {
    headers: [
      '',
      'Counterparty Trade Creator',
      'Quantity UoM',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    items: [
      [ 'parcel', 'Gunvor SA', '4000 MMT', '', '', '', '', '', '', '', ''],
      [ 'parcel', 'Gunvor SA', '4000 MMT', '', '', '', '', '', '', '', ''],
      [ 'parcel', 'Gunvor SA', '4000 MMT', '', '', '', '', '', '', '', ''],
      [ 'parcel', 'Gunvor SA', '4000 MMT', '', '', '', '', '', '', '', ''],
    ]
  };
  return (
    <>
      <StyledTitle>
        Trades
      </StyledTitle>
      <NominationPlanner headers={headers} data={openCommitments} />
      <StyledTitle>
        Stocks
      </StyledTitle>
    </>
  );
};

export default TradesPanel;
