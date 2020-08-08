import React, { useCallback } from 'react';
import { IconButton } from '@fluentui/react/lib/Button';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import { IIconProps } from '@fluentui/react/lib/Icon';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

/* eslint-disable-next-line */
export interface MenuProps {}

export const Menu = (props: MenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openPanel = useCallback(() => setIsOpen(true), []);
  const dismissPanel = useCallback(() => setIsOpen(false), []);
  const collapseMenu: IIconProps = { iconName: 'CollapseMenu' };

  const navStyles: Partial<INavStyles> = { root: { } };
  const navLinkGroups: INavLinkGroup[] = [
    {
      name: 'Logistics',
      expandAriaLabel: 'Expand Logistics section',
      collapseAriaLabel: 'Collapse Logistics section',
      links: [
        {
          key: 'Nominations',
          name: 'Nominations',
          url: '/logistics-home',
        },
        {
          key: 'Actual',
          name: 'Actual',
          url: '/logistics-actual',
        },
      ],
    },
    {
      name: 'User Preferences',
      expandAriaLabel: 'Expand Notifications section',
      collapseAriaLabel: 'Collapse Notifications section',
      links: [
        {
          key: 'Notifications',
          name: 'Notifications',
          url: '/notifications-subscription',
        },
      ],
    }
  ];

  return (
    <>
      <IconButton iconProps={collapseMenu} title="Open Menu" ariaLabel="Open Menu" onClick={openPanel} />
      <Panel
        headerText="Menu"
        type={PanelType.smallFixedNear}
        isOpen={isOpen}
        onDismiss={dismissPanel}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <Nav styles={navStyles} ariaLabel="VAKT Menu" groups={navLinkGroups} />
      </Panel>
    </>
  );
};

export default Menu;
