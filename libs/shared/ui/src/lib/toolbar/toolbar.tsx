import React, { ReactNode } from 'react';

import styled from 'styled-components';
import { Stack, IStackStyles } from '@fluentui/react/lib/Stack';

export interface ToolbarProps {
  title?: string;
  children?: ReactNode;
}

export const Toolbar = ({title, children}: ToolbarProps) => {
  const stackStyles: IStackStyles = {
    root: {
      margin: '8px 0px 8px 0px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '50px',
      background: '#222428 0% 0% no-repeat padding-box',
      borderRadius: '3px',
      opacity: '1',
    },
  };

  const styledToolbarTitle: IStackStyles  = {
    root: {
      textAlign: 'left',
      fontSize: '17px',
      color: '#FFFFFF',
      opacity: 1, 
      paddingLeft: '8px',
    }
  };

  const styledToolbarActions: IStackStyles  = {
    root: {
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'flex-end',
      alignItems: 'center', 
      height: '50px',
      background: '#222428 0% 0% no-repeat padding-box',
      borderRadius: '3px',
      opacity: 1, 
      marginRight: 8
    }
  }

  return (
    <Stack horizontal tokens={{childrenGap: 8}} styles={stackStyles}>
      <Stack.Item styles={styledToolbarTitle}>{title}</Stack.Item> 
      <Stack.Item styles={styledToolbarActions}>{children}</Stack.Item> 
    </Stack>
  );
};

export default Toolbar;
