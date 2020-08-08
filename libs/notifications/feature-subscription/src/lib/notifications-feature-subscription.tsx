import React from 'react';

import { useFetch, URL } from "@vakt-web/logistics/data-access";

import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { DetailsList, SelectionMode } from '@fluentui/react/lib/DetailsList';
import { IColumn, Checkbox, CommandBar, ICommandBarItemProps } from '@fluentui/react';

/* eslint-disable-next-line */
export interface NotificationsFeatureSubscriptionProps {}

export const NotificationsFeatureSubscription = (
  props: NotificationsFeatureSubscriptionProps
) => {
  const stackTokens: IStackTokens = {  };

  const { data } = useFetch<[]>(URL.subscriptions);

  const columns = [
    { key: 'column1', name: 'Events', fieldName: 'eventName', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'MOBILE', fieldName: 'isMobileActive', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column3', name: 'WEB', fieldName: 'isWebActive', minWidth: 100, maxWidth: 200, isResizable: true }
  ];

  const groups = [
    { key: 'crude', name: 'Crude', startIndex: 0, count: 2, level: 0 },
    { key: 'others', name: 'Others', startIndex: 2, count: 1, level: 0 },
  ]

  function _renderItemColumn(item: any, index: number, column: IColumn) {
    const fieldContent = item[column.fieldName
      // as keyof Subscription
    ] as string;

    switch (column.key) {
      case 'column3':
        return <Checkbox onChange={() => {
          console.log(1)
        }} />;
      case 'column2':
        return <Checkbox onChange={() => {
          console.log(2)
        }} />;

      default:
        return <span>{fieldContent}</span>;
    }
  };

  const _items: ICommandBarItemProps[] = [
    { key: 'newItem', text: 'New', iconProps: { iconName: 'Add' }, onClick: () => console.log('New 1') },
  ]

  if(!data){
    return <div>Oi</div>
  }

  return (
    <Stack tokens={stackTokens}>
      <Stack.Item>
        <CommandBar
          items={_items}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />
      </Stack.Item>
      <Stack.Item>
        <DetailsList
          setKey="items"
          items={data}
          columns={columns}
          groups={groups}
          onRenderItemColumn={_renderItemColumn}
          selectionMode={SelectionMode.none}
          ariaLabelForGrid="Permissions details"
        />
      </Stack.Item>
    </Stack>
  );
};

export default NotificationsFeatureSubscription;
