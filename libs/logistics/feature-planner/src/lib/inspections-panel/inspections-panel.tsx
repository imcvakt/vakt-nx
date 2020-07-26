import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InspectionsPanelProps {}

const StyledInspectionsPanel = styled.div`
  color: white;
`;

export const InspectionsPanel = (props: InspectionsPanelProps) => {
  return (
    <StyledInspectionsPanel>
      <h1>WIP!</h1>
    </StyledInspectionsPanel>
  );
};

export default InspectionsPanel;
