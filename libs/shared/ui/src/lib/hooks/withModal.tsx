import React from 'react';

import { Modal } from '@fluentui/react/lib/Modal';
import { IIconProps } from '@fluentui/react/lib/Icon';
import { IconButton } from '@fluentui/react/lib/Button';
import { FontWeights, mergeStyleSets, getTheme } from '@fluentui/react/lib/Styling'; 

interface Props {
  toggleState?: () => void,
  isModalOpen: boolean,
};

export function withModal<P extends Props>(Component: React.ComponentType<P>) {
  const cancelIcon: IIconProps = { iconName: 'Cancel' };

  const theme = getTheme();
  const contentStyles = mergeStyleSets({
    container: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'stretch',
    },
    header: [ 
      theme.fonts.xLargePlus,
      {
        flex: '1 1 auto',
        borderTop: `4px solid ${theme.palette.themePrimary}`,
        color: theme.palette.neutralPrimary,
        display: 'flex',
        alignItems: 'center',
        fontWeight: FontWeights.semibold,
        padding: '12px 12px 14px 24px',
      },
    ],
    body: {
      flex: '4 4 auto',
      padding: '0 24px 24px 24px',
      overflowY: 'hidden',
      selectors: {
        p: { margin: '14px 0' },
        'p:first-child': { marginTop: 0 },
        'p:last-child': { marginBottom: 0 },
      },
    },
  });
  const iconButtonStyles = {
    root: {
      color: theme.palette.neutralPrimary,
      marginLeft: 'auto',
      marginTop: '4px',
      marginRight: '2px',
    },
    rootHovered: {
      color: theme.palette.neutralDark,
    },
  }; 

  return ({ isModalOpen, toggleState, ...delegated }: P & Props) => (
    <Modal  
      isOpen={isModalOpen} 
      closeButtonAriaLabel="close"
      onDismiss={toggleState}  
      containerClassName={contentStyles.container}>
        <div className={contentStyles.header}> 
          <span>Movement</span>
          <IconButton 
            styles={iconButtonStyles}
            iconProps={cancelIcon}
            ariaLabel="Close popup modal"
            onClick={toggleState}
          />
        </div>
        <div className={contentStyles.body}>
          <Component toggleState={toggleState} {...delegated as P} />
        </div>
    </Modal>
  );
}