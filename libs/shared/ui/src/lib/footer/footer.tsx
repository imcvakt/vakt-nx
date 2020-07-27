import React, { ReactNode } from 'react';

import styled from 'styled-components';

export interface FooterProps {
  children: ReactNode
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Footer = ({ children }: FooterProps) => {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  );
}

export default Footer;
