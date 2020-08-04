import React from 'react';

import styled from 'styled-components';

export interface HeaderProps {
  items: {item: string, value: string}[],
}

const Container = styled.div`
  grid-area: 1 / 2 / 2 / 13;
  border-bottom: 1px solid #424347;
  margin-bottom: 16px;
`;

const HeaderColumn = styled.div`
  display: flex;
`;

const HeaderItem = styled.div`
  display: flex;

  flex: 1;

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  height: 50px;

  > div:first-child {
    font: Medium 13px Helvetica Neue;
    color: #399BF8;
  }

  > div {
    font: Regular 13px/15px Helvetica Neue;
    color: #FFFFFF;
  }
`;

export const Header = ({ items }: HeaderProps) => {
  return (
    <Container>
      <HeaderColumn>
        {items.map((header, i) => (
          <HeaderItem key={i}>
            <div>{header.item}</div>
            <div>{header.value}</div>
          </HeaderItem>
        ))}
      </HeaderColumn>
    </Container>
  );
};

export default Header;
