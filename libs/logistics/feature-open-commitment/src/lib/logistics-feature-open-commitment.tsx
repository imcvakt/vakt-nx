import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Toolbar, Button } from '@vakt-web/shared/ui';
import { OpenCommitment, useLogistics } from '@vakt-web/logistics/data-access';
import { useFetch, URL } from '@vakt-web/logistics/data-access';
import { OpenCommitmentTable } from './open-commitment-table/open-commitment-table';

/* eslint-disable-next-line */
export interface LogisticsFeatureOpenCommitmentProps {}

export const LogisticsFeatureOpenCommitment = (
  props: LogisticsFeatureOpenCommitmentProps
) => {
  const [state] = useLogistics();
  const emptySelection = useMemo(() => !state.openCommitments.length, [state.openCommitments.length]);
  const { data } = useFetch<OpenCommitment[]>(URL.openCommitments);

  if(!data) {
    return <div>Loading data...</div>
  }

  return (
    <>
      <Toolbar title="Open Commitments">
        <Link to="logistics-movements">
          <Button disabled={emptySelection}>
            New Movement
          </Button>
        </Link>
      </Toolbar>
      <OpenCommitmentTable data={data} />
    </>
  );
};

export default LogisticsFeatureOpenCommitment;
