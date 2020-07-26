import React, { useCallback } from 'react';

import { OpenCommitment, useLogistics, Types } from '@vakt-web/logistics/data-access';
import { Table } from '@vakt-web/shared/ui';

export interface OpenCommitmentTableProps {
  data: OpenCommitment[]
}

export const OpenCommitmentTable = ({ data }: OpenCommitmentTableProps) => {
  const {dispatch} = useLogistics();

  const handleSelect = useCallback((openCommitment) => {
    dispatch({type: Types.ToggleSelection, payload: openCommitment});
  }, [dispatch]);

  return (
    <Table<OpenCommitment>
      onSelectRow={handleSelect}
      objects={data}
      properties={[
        { key: 'contractDetails.creator', title: 'Creator' },
        { key: 'contractDetails.customerTradeId', title: 'Customer Trade Id' },
        { key: 'contractDetails.deliveryTerm', title: 'Delivery Term' },
        { key: 'contractDetails.product.name', title: 'Product' }
      ]}
    />
  );
};

export default OpenCommitmentTable;
