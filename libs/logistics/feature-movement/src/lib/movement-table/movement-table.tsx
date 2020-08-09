import React, { useMemo } from 'react';

import { useOpenCommitment, OpenCommitment } from '@vakt-web/logistics/data-access';
import { Table } from '@vakt-web/shared/ui';

/* eslint-disable-next-line */
export interface MovementTableProps {}

export const MovementTable = (props: MovementTableProps) => {
  const [state] = useOpenCommitment(); 
  const selectedIds = useMemo(() => state.selected.map(openCommitment => openCommitment.id), [state.selected]);

  return (
    <Table<OpenCommitment>
      objects={state.selected}
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
