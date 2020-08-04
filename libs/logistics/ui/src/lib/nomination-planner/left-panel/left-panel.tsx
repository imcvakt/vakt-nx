import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LeftPanelProps {
}

const Container = styled.div`
  grid-area: 1 / 1 / 4 / 2;
`;

const ActionColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 16px;
`;

export const LeftPanel = (props: LeftPanelProps) => {
  return (
    <Container>
      <ActionColumn>
        <input type="checkbox" />
      </ActionColumn>
    </Container>
  );
};

export default LeftPanel;
