import React from 'react';

import styled from 'styled-components';

export interface SubHeaderProps {
  items: string[]
}

const Container = styled.div`
  grid-area: 2 / 2 / 3 / 13;
`;

const SubHeaderColumn = styled.div`
  display: flex;
`;

const SubHeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 30px;

  background-color: #1A1A1A;
  font: Medium 13px/16px Helvetica Neue;
  color: #6D9AC4;
  opacity: 1;
`;


export const SubHeader = ({ items }: SubHeaderProps) => {
  return (
    <Container>
      <SubHeaderColumn>
        {items.map((item, i) => (
          <SubHeaderItem key={i}>{item}</SubHeaderItem>
        ))}
      </SubHeaderColumn>
    </Container>
  );
};

export default SubHeader;
