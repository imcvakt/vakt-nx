import React, { useMemo } from 'react';
import { useHistory } from "react-router-dom";
import { withModal } from '@vakt-web/shared/ui';

import { Grid } from '@vakt-web/shared/ui';
import { useOpenCommitment, useMovement } from '@vakt-web/logistics/data-access';
import { Stack } from '@fluentui/react/lib/Stack';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogisticsFeatureMovementProps {}

export const LogisticsFeatureMovement = (
  props: LogisticsFeatureMovementProps
) => {
  const history = useHistory();
  const [openCommitmentState] = useOpenCommitment();
  const [movementState] = useMovement();

  const items: ICommandBarItemProps[] = useMemo(() => ([
    { key: '1', text: 'Manage Nomination', iconProps: { iconName: 'Add' }, onClick: () => history.push('/logistics-manage-nomination'), disabled: openCommitmentState.isEmpty }
  ]), [openCommitmentState, history]);

  // create ag-Grid Column Definitions
  const columnDefs = [
    { headerName: "ID", field: "id", editable: false, filter: true, sortable: true, type: "abColDefString" },
    { headerName: "Movement Transfer", field: "movementTransferId", editable: false, filter: true, sortable: true, type: "abColDefString"  },
    { headerName: "Nomination", field: "nominationId", editable: false, filter: true, sortable: true, type: "abColDefNumber" },
    { headerName: "Customer Trade Id", field: "contractDetails.customerTradeId", editable: false, filter: true, sortable: true, type: "abColDefNumber" },
    { headerName: "Creator", field: "contractDetails.creator", editable: false, filter: true, sortable: true, type: "abColDefNumber" },
    { headerName: "Product", field: "contractDetails.product.name", editable: false, filter: true, sortable: true, type: "abColDefNumber" },
    { headerName: "Delivery Term", field: "contractDetails.deliveryTerm", editable: false, filter: true, sortable: true, type: "abColDefNumber" },
    { headerName: "Quantity", field: "contractDetails.quantity", editable: false, filter: true, sortable: true, type: "abColDefNumber" },
    { headerName: "UoM", field: "contractDetails.uom", editable: false, filter: true, sortable: true, type: "abColDefNumber" }
  ];

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
        {openCommitmentState.isEmpty ?
          <div style={{ color: '#FFF'}}>You have to select an open commitment to proceed.</div> :
          <Grid columnDefs={columnDefs} rowData={movementState.draftMovement.items} />}
      </Stack.Item>
    </Stack>
  );
};
