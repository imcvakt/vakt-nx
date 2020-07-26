import React from 'react';

import { Planner } from '../planner/planner';

/* eslint-disable-next-line */
export interface TradesPanelProps {}

export const TradesPanel = (props: TradesPanelProps) => {
  return (
    <>
      <Planner title="Trades" />
      <Planner title="Stocks" />
    </>
  );
};

export default TradesPanel;
