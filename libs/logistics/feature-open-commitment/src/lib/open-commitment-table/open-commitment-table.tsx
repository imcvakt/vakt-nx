import React, { useCallback, useMemo } from 'react';

import { OpenCommitment, useOpenCommitment } from '@vakt-web/logistics/data-access';
import { Table } from '@vakt-web/shared/ui';

export interface OpenCommitmentTableProps {
  data: OpenCommitment[]
}

export const OpenCommitmentTable = ({ data }: OpenCommitmentTableProps) => {
  const [state, dispatch] = useOpenCommitment();

  const selectedIds = useMemo(() => state.selected.map(openCommitment => openCommitment.id), [state.selected]);

  const handleSelect = useCallback((openCommitment, isSelected) => {
    const action = isSelected ? 'RemoveSelection' : 'AddSelection';
    dispatch({type: action, payload: openCommitment});
  }, [dispatch]);

  return (
    <Table<OpenCommitment>
      onSelectRow={handleSelect}
      objects={data}
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

export default OpenCommitmentTable;
