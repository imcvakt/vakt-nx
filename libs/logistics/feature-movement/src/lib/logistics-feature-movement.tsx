import React from 'react';
import { Link } from 'react-router-dom';

import { Toolbar } from '@vakt-web/shared/ui';
import MovementTable from './movement-table/movement-table';

/* eslint-disable-next-line */
export interface LogisticsFeatureMovementProps {}

export const LogisticsFeatureMovement = (
  props: LogisticsFeatureMovementProps
) => {
  return (
    <>
      <Toolbar title="Movement">
        <Link to="logistics-nominations">
          <button style={{ color: '#FFF', border: 'none', width: '129px', height: '41px', background: '#399BF8'}}>
            Nomination
          </button>
        </Link>
      </Toolbar>

      <MovementTable />
    </>
  );
};

export default LogisticsFeatureMovement;
