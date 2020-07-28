import React from 'react';

import { NominationPlanner } from '@vakt-web/logistics/ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TradesPanelProps {}

const StyledTitle = styled.div`
  margin-bottom: 8px;
  height: 22px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 1;
`;

export const TradesPanel = (props: TradesPanelProps) => {
  return (
    <>
      <StyledTitle>
        Trades
      </StyledTitle>
      <NominationPlanner />
      <StyledTitle>
        Stocks
      </StyledTitle>
    </>
  );
};

export default TradesPanel;
