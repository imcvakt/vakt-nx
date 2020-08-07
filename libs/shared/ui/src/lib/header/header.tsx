import React from 'react';

import { useAuth } from '@vakt-web/shared/util';
import Menu from '../menu/menu';

import { Persona, PersonaSize } from '@fluentui/react/lib/Persona';
import { Stack } from '@fluentui/react/lib/Stack';
import { Text } from '@fluentui/react/lib/Text';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const { signOut } = useAuth();

  return (
    <header>
      <Stack tokens={{childrenGap: 8}} horizontal horizontalAlign="space-between">
        <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
          <Menu />
          <img src="assets/logo.svg" width={140} height={55} alt="VAKT Logo" />
        </Stack>
        <Text>{process.env.NODE_ENV === 'development' && 'Development'}</Text>
        <Stack tokens={{childrenGap: 8}} horizontal horizontalAlign="space-between" verticalAlign="center">
          <img src="assets/reload.svg" width={24} height={24} alt="Resync data" />
          <img src="assets/notification.svg" width={24} height={24} alt="Resync data" />
          <Persona
            imageInitials="BG"
            text="Barges User"
            secondaryText="Shell"
            size={PersonaSize.size40}
            imageAlt="Annie Lindqvist, no presence detected"
            onClick={signOut}
          />
        </Stack>
      </Stack>
    </header>
  );
};

export default Header;
