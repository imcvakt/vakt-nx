import React, { useEffect, useState } from 'react';
import { Stack, IStackTokens, IStackItemStyles } from '@fluentui/react/lib/Stack';
import { DefaultPalette } from '@fluentui/react/lib/Styling';
import { Text } from '@fluentui/react/lib/Text';
import { ShimmeredDetailsList } from '@fluentui/react/lib/ShimmeredDetailsList';
import { SelectionMode } from '@fluentui/react';

/* eslint-disable-next-line */
export interface NotificationsFeatureSettingsProps {}

export const NotificationsFeatureSettings = (
  props: NotificationsFeatureSettingsProps
) => {
  const stackTokens: IStackTokens = { childrenGap: 20 };
  const stackStyles: IStackItemStyles = {
    root: {
      boxShadow: `0px 0px 3px 3px ${DefaultPalette.neutralQuaternaryAlt}`
    },
  };
  const stackItemStyles: IStackItemStyles = {
    root: {
      background: DefaultPalette.neutralQuaternaryAlt,
      color: DefaultPalette.white,
    },
  };

  const items = [
    { key: 1, event: 'Send Nomination', enabled: true, modifiedBy: 'Shell'},
    { key: 1, event: 'Reject Nomination', enabled: false, modifiedBy: ''},
    { key: 1, event: 'Cancel Nomination', enabled: false, modifiedBy: ''},
    { key: 1, event: 'Receive Nomination', enabled: true, modifiedBy: 'Shell'},
    { key: 1, event: 'Reply Nomination', enabled: false, modifiedBy: 'Shell'}
  ];

  const columns = [
    { key: 'column1', name: 'Events', fieldName: 'event', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Is Enabled?', fieldName: 'enabled', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column3', name: 'Modified By', fieldName: 'modifiedBy', minWidth: 100, maxWidth: 200, isResizable: true },
  ];

  const [shimmer, setShimmer] = useState(true);
  useEffect(() => {
    setTimeout( () =>  setShimmer(false), 1000);
  }, [])


  return (
    <Stack styles={stackStyles} tokens={stackTokens}>
      <Stack.Item styles={stackItemStyles}>
        <Text>Subscriptions</Text>
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <ShimmeredDetailsList
          setKey="items"
          items={items}
          columns={columns}
          enableShimmer={shimmer}
          selectionMode={SelectionMode.none}
          ariaLabelForShimmer="Content is being fetched"
          ariaLabelForGrid="Permissions details"
        />
      </Stack.Item>
    </Stack>
  );
};

export default NotificationsFeatureSettings;
