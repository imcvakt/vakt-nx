import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RightPanelProps {
}

const Container = styled.div`
  grid-area: 1 / 13 / 4 / 14;
`;

export const RightPanel = (props: RightPanelProps) => {
  return (
    <Container>{'<'}</Container>
  );
};

export default RightPanel;
