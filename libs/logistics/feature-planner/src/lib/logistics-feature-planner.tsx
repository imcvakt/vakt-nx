import React from 'react';
import styled from 'styled-components';

import { Toolbar, Button } from '@vakt-web/shared/ui';

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
        <Button size="auto" color="transparent">
          <img width={16} height={16} src="assets/move.svg" alt="Move Existing Nomination" />
          Move Existing Nom
        </Button>
        <Button size="auto" color="transparent">
          <img width={16} height={16} src="assets/split-nomination.svg" alt="Move Existing Nomination" />
          Split into New Nom
        </Button>
        <Button size="auto" color="transparent">
          <img width={16} height={16} src="assets/send-nomination.svg" alt="Move Existing Nomination" />
          Save Draft
        </Button>
        <Button size="auto" color="transparent">
          <img width={16} height={16} src="assets/delete.svg" alt="Move Existing Nomination" />
          Delete Noms
        </Button>
      </Toolbar>

      {availablePanels[activePanel]}

    </>
  );
};

export default LogisticsFeaturePlanner;
