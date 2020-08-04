import React from 'react';

import styled from 'styled-components';
import Header from './header/header';
import SubHeader from './sub-header/sub-header';
import Items from './items/items';
import LeftPanel from './left-panel/left-panel';
import RightPanel from './right-panel/right-panel';

export interface NominationPlannerProps {
  headers: {item: string, value: string}[],
  subHeaders: string[],
  openCommitments: string[][],
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.2fr repeat(11, 1fr) 0.2fr;
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 0px;
  grid-row-gap: 8px;

  background: #212528;
  border-radius: 3px;
  width: 100%;

  padding: 8px;
`;

export const NominationPlanner = ({ headers, subHeaders, openCommitments }: NominationPlannerProps) => {
  return (
    <Grid>
      <LeftPanel />
      <Header items={headers} />
      <SubHeader items={subHeaders} />
      <Items items={openCommitments} />
      <RightPanel />
    </Grid>
  );
};

export default NominationPlanner;
