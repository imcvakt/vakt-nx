import React from 'react';

import styled from 'styled-components';

export interface PlannerProps {
  title: string;
}

const StyledTitle = styled.div`
  margin-bottom: 8px;
  height: 22px;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 1;
`;

export const Planner = ({title}: PlannerProps) => {
  return (
    <StyledTitle>{title}</StyledTitle>
  );
};

export default Planner;
