import React, { useMemo, useState } from 'react'; 

import { LogisticsFeatureMovement } from '@vakt-web/logistics/feature-movement';

import { CustomShimmer, Toolbar } from '@vakt-web/shared/ui';
import { OpenCommitment, useOpenCommitment } from '@vakt-web/logistics/data-access';
import { useFetch, URL } from '@vakt-web/logistics/data-access';
import { OpenCommitmentTable } from './open-commitment-table/open-commitment-table';

import { Separator } from '@fluentui/react/lib/Separator';
import { Stack } from '@fluentui/react/lib/Stack';
import { CommandBar, ICommandBarItemProps, ICommandBarStyles } from '@fluentui/react/lib/CommandBar';
import { IButtonProps } from '@fluentui/react/lib/Button';

/* eslint-disable-next-line */
export interface LogisticsFeatureOpenCommitmentProps {}

export const LogisticsFeatureOpenCommitment = (
  props: LogisticsFeatureOpenCommitmentProps
) => {
  const { data } = useFetch<OpenCommitment[]>(URL.openCommitments);
  const [state] = useOpenCommitment(); 
  const [showMovementPlanner, setShowMovementPlanner] = useState(false);  
  const items: ICommandBarItemProps[] = useMemo(() => ([
    { key: 'newMovement', text: 'New Movement', iconProps: { iconName: 'Add' }, onClick: () => setShowMovementPlanner(true), disabled: state.isEmpty, split: true }
  ]), [state.isEmpty]);

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
        {showMovementPlanner && <Separator /> }
      </Stack.Item>
      <Stack.Item> 
        {showMovementPlanner && <LogisticsFeatureMovement />}
      </Stack.Item> 
    </Stack>
  );
};

export default LogisticsFeatureOpenCommitment;
