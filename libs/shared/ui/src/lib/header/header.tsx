import React from 'react';
import { useAuth } from '@vakt-web/shared/util';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 8px;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  text-align: left;
  font: Medium 14px/17px Helvetica Neue;
  color: #FFFFFF;
  opacity: 1;
`;

export const Header = (props: HeaderProps) => {
  const { signOut } = useAuth();

  return (
    <header>
      <Content>
        <img src="assets/logo.svg" width={140} height={55} alt="VAKT Logo" />
        <Actions>
          <img src="assets/reload.svg" width={24} height={24} alt="Resync data" />
          <img src="assets/notification.svg" width={24} height={24} alt="Resync data" />
          <User>
            <Text onClick={signOut}>Anne Marie</Text>
            <img src="assets/user-avatar.png" width={50} height={50} alt="User Avatar" />
            <img src="assets/menu.svg" width={24} height={24} alt="Resync data" />
          </User>
        </Actions>
      </Content>
    </header>
  );
};

export default Header;
