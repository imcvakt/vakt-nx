import React, { ReactNode } from 'react';

import styled from 'styled-components';

export interface ToolbarProps {
  title: string;
  children?: ReactNode;
}

const StyledToolbar = styled.div`
  margin: 8px 0px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  background: #222428 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;

`;

const StyledToolbarTitle = styled.div`
  text-align: left;
  font-size: 17px;
  color: #FFFFFF;
  opacity: 1;

  padding-left: 8px;
`;

const StyledToolbarActions = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;

  height: 50px;
  background: #222428 0% 0% no-repeat padding-box;
  border-radius: 3px;
  opacity: 1;

  button {
    margin-right: 32px;
  }
`;

export const Toolbar = ({title, children}: ToolbarProps) => {
  return (
    <StyledToolbar>
      <StyledToolbarTitle>{title}</StyledToolbarTitle>
      <StyledToolbarActions>{children}</StyledToolbarActions>
    </StyledToolbar>
  );
};

export default Toolbar;
