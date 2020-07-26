import React from 'react';
import { Link } from 'react-router-dom';

import { Toolbar, Button } from '@vakt-web/shared/ui';
import { OpenCommitment } from '@vakt-web/logistics/data-access';
import { useFetch } from '@vakt-web/logistics/data-access';
import { OpenCommitmentTable } from './open-commitment-table/open-commitment-table';

/* eslint-disable-next-line */
export interface LogisticsFeatureOpenCommitmentProps {}

export const LogisticsFeatureOpenCommitment = (
  props: LogisticsFeatureOpenCommitmentProps
) => {
  const { data } = useFetch<OpenCommitment[]>('open-commitments');

  if(!data) {
    return <div>Loading data...</div>
  }

  return (
    <>
      <Toolbar title="Open Commitments">
        <Link to="logistics-movements">
          <Button>
            New Movement
          </Button>
        </Link>
      </Toolbar>
      <OpenCommitmentTable data={data} />
    </>
  );
};

export default LogisticsFeatureOpenCommitment;
