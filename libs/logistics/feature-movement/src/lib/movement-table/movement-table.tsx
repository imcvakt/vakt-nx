import React, { useMemo } from 'react';

import { useLogistics, OpenCommitment } from '@vakt-web/logistics/data-access';
import { Table } from '@vakt-web/shared/ui';

/* eslint-disable-next-line */
export interface MovementTableProps {}

export const MovementTable = (props: MovementTableProps) => {
  const {state} = useLogistics();

  const selectedIds = useMemo(() => state.openCommitments.map(openCommitment => openCommitment.id), [state.openCommitments]);

  return (
    <Table<OpenCommitment>
      objects={state.openCommitments}
      selectedRows={selectedIds}
      properties={[
        { key: 'contractDetails.creator', title: 'Creator' },
        { key: 'contractDetails.customerTradeId', title: 'Customer Trade Id' },
        { key: 'contractDetails.deliveryTerm', title: 'Delivery Term' },
        { key: 'contractDetails.product.name', title: 'Product' }
      ]}
    />
  );
};

export default MovementTable;
