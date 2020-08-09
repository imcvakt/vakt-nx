import React, { useMemo } from 'react'; 

import { LogisticsFeatureMovement } from '@vakt-web/logistics/feature-movement';

import { CustomShimmer } from '@vakt-web/shared/ui';
import { OpenCommitment, useOpenCommitment, useMovement } from '@vakt-web/logistics/data-access';
import { useFetch, URL } from '@vakt-web/logistics/data-access';
import { OpenCommitmentTable } from './open-commitment-table/open-commitment-table';
 
import { Stack } from '@fluentui/react/lib/Stack';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';

/* eslint-disable-next-line */
export interface LogisticsFeatureOpenCommitmentProps {} 

export const LogisticsFeatureOpenCommitment = (
  props: LogisticsFeatureOpenCommitmentProps
) => {
  const { data } = useFetch<OpenCommitment[]>(URL.openCommitments);
  const [openCommitmentState] = useOpenCommitment();  
  const [movementState, dispatch] = useMovement();  
  const items: ICommandBarItemProps[] = useMemo(() => ([
    { key: 'newMovement', text: 'New Movement', iconProps: { iconName: 'Add' }, onClick: () => dispatch({type: 'ToggleModal'}), disabled: openCommitmentState.isEmpty }
  ]), [openCommitmentState.isEmpty]);
 
  if(!data) {
    return (
      <CustomShimmer />
    )
  };

  console.log(movementState)

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
        <LogisticsFeatureMovement isModalOpen={movementState.isModalOpen} toggleState={() => dispatch({type: 'ToggleModal'})} />
      </Stack.Item> 
    </Stack>
  );
};

export default LogisticsFeatureOpenCommitment;
