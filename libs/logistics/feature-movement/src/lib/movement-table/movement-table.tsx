import React from 'react';

import { useLogistics, OpenCommitment } from '@vakt-web/logistics/data-access';
import { Table } from '@vakt-web/shared/ui';

/* eslint-disable-next-line */
export interface MovementTableProps {}

export const MovementTable = (props: MovementTableProps) => {
  const {state} = useLogistics();

  return (
    <Table<OpenCommitment>
      objects={state.openCommitments}
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
