import React from 'react';
import styled from 'styled-components';

import { Toolbar } from '@vakt-web/shared/ui';

import { InspectionsPanel } from './inspections-panel/inspections-panel';
import { TradesPanel } from './trades-panel/trades-panel';

/* eslint-disable-next-line */
export interface LogisticsFeaturePlannerProps {}

const StyledTitle = styled.div`
  width: 241px;
  height: 24px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
  opacity: 1;
`;

interface TabProps {
  readonly isActive: boolean;
};

const Tab = styled.div<TabProps>`
  width: 129px;
  height: 41px;
  opacity: 1;

  color: #FFF;
  text-decoration: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: ${props => props.isActive && '#399BF8'};
`;

const Tabs = styled.div`
  display: flex;
  margin-top: 8px;

  > ${Tab}:first-child  {
    border-radius: 3px 0px 0px 0px;
  }

  > ${Tab}:last-child  {
    border-radius: 0px 3px 0px 0px;
  }
`;

export const LogisticsFeaturePlanner = (
  props: LogisticsFeaturePlannerProps
) => {
  const [activePanel, setActivePanel] = React.useState(0);
  const availablePanels = [<TradesPanel />, <InspectionsPanel />];

  return (
    <>
      <StyledTitle>Nomination Management</StyledTitle>

      <Tabs>
        <Tab isActive={activePanel === 0} onClick={() => setActivePanel(0)}>Trades</Tab>
        <Tab isActive={activePanel === 1} onClick={() => setActivePanel(1)}>Inspections</Tab>
      </Tabs>

      <Toolbar title="Toolbar">
        <button>Move Existing Nom</button>
        <button>Split into New Nom</button>
        <button>Save Draft</button>
        <button>Delete Noms</button>
      </Toolbar>

      {availablePanels[activePanel]}

    </>
  );
};

export default LogisticsFeaturePlanner;
