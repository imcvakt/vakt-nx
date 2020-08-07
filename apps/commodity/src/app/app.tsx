import React from 'react';

import { Header, Footer } from '@vakt-web/shared/ui';

import { Customizations, Fabric, Stack } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';
import { darkTheme } from './styles/global';

import { Routes } from './routes/routes';

initializeIcons();

export const App = () => {
  Customizations.applySettings({ theme: darkTheme });
  return (
    <Fabric applyThemeToBody>
      <Stack tokens={{childrenGap: 8}}>
        <Header />
        {/* TODO: full height with stack */}
        <div style={{height: '100vh'}}>
          <Stack tokens={{ padding: '0px 16px 0px 16px' }}>
            <Routes />
          </Stack>
        </div>
        <Footer>
          <p>VAKT Global Ltd</p>
        </Footer>
      </Stack>
    </Fabric>
  );
};

export default App;
