import React from 'react';
import { useHistory } from "react-router-dom";
import { withModal } from '@vakt-web/shared/ui';

import MovementTable from './movement-table/movement-table';
import { useOpenCommitment } from '@vakt-web/logistics/data-access';
import { Stack } from '@fluentui/react/lib/Stack';
import { PrimaryButton } from '@fluentui/react/lib/Button';

export interface LogisticsFeatureMovementProps {
  toggleState: () => void,
  isModalOpen: boolean,
}

export const LogisticsFeatureMovement = withModal((
  props: LogisticsFeatureMovementProps
) => {
  const history = useHistory();
  const [openCommitmentState] = useOpenCommitment();

  return (
    <Stack tokens={{ childrenGap: 8 }}>
      <Stack.Item>
        {openCommitmentState.isEmpty ? <div style={{ color: '#FFF'}}>You have to select an open commitment to proceed.</div> : <MovementTable />}
      </Stack.Item>
      <Stack.Item>
        <Stack horizontal styles={{ root: { display: 'flex', justifyContent: 'flex-end'} }}>
          <Stack.Item>
            <PrimaryButton onClick={() => {
              history.push('/logistics-manage-nomination')
            }}>
              Manage Nomination
            </PrimaryButton>
          </Stack.Item>
       </Stack>
      </Stack.Item>
    </Stack>
  );
});
