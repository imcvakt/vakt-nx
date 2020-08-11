import React, { useMemo } from 'react';

import { LogisticsFeatureMovement } from '@vakt-web/logistics/feature-movement';

import { CustomShimmer } from '@vakt-web/shared/ui';
import { OpenCommitment, useOpenCommitment, useMovement } from '@vakt-web/logistics/data-access';
import { useFetch, URL } from '@vakt-web/shared/util';
import { OpenCommitmentTable } from './open-commitment-table/open-commitment-table';

import { Stack } from '@fluentui/react/lib/Stack';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';

/* eslint-disable-next-line */
export interface LogisticsFeatureOpenCommitmentProps {}

export const LogisticsFeatureOpenCommitment = (
  props: LogisticsFeatureOpenCommitmentProps
) => {

  const { data } = useFetch<OpenCommitment[]>(URL.openCommitments);
  const [openCommitmentState] = useOpenCommitment();
  const [movementState, dispatch] = useMovement();
  const items: ICommandBarItemProps[] = useMemo(() => ([
    { key: '1', text: 'New Movement', iconProps: { iconName: 'Add' }, onClick: () => dispatch({type: 'InitDraftMovement', payload: openCommitmentState.selected}), disabled: openCommitmentState.isEmpty }
  ]), [openCommitmentState, dispatch]);

  if(!data) {
    return (
      <CustomShimmer />
    )
  };

  return (
    <Stack tokens={{ childrenGap: 8 }}>
      <Stack.Item>
        <Stack horizontal>
          <Stack.Item styles={{ root: { width: '100%'} }}>
            <CommandBar
              items={items}
              ariaLabel="Use left and right arrow keys to navigate between commands"
            />
          </Stack.Item>
       </Stack>
      </Stack.Item>
      <Stack.Item>
        <OpenCommitmentTable data={data} />
      </Stack.Item>
      <Stack.Item>
        <Panel
          headerText="Movement Planner"
          isOpen={movementState.isModalOpen}
          type={PanelType.large}
          isBlocking={false}
          onDismiss={() => dispatch({ type: 'ResetDraftMovement' })}
          layerProps={{ styles: { root: { zIndex: 998 }}}}
          // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
          closeButtonAriaLabel="Close"
        >
          <LogisticsFeatureMovement />
        </Panel>
      </Stack.Item>
    </Stack>
  );
};

export default LogisticsFeatureOpenCommitment;
