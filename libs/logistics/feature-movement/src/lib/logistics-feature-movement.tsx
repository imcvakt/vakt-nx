import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Toolbar, Button } from '@vakt-web/shared/ui';
import MovementTable from './movement-table/movement-table';
import { useOpenCommitment } from '@vakt-web/logistics/data-access';

/* eslint-disable-next-line */
export interface LogisticsFeatureMovementProps {}

export const LogisticsFeatureMovement = (
  props: LogisticsFeatureMovementProps
) => {
  const [state] = useOpenCommitment();
  const emptySelection = useMemo(() => !state.selected.length, [state.selected.length]);
  return (
    <>
      <Toolbar title="Movement">
        <Link to="logistics-nominations">
          <Button disabled={emptySelection}>
            Manage Nomination
          </Button>
        </Link>
      </Toolbar>

      {emptySelection && <div style={{ color: '#FFF'}}>You have to select an open commitment to proceed.</div>}
      {!emptySelection && <MovementTable />}
    </>
  );
};

export default LogisticsFeatureMovement;
