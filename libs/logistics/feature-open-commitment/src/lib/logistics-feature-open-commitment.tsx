import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Shimmer, ShimmerElementType } from '@fluentui/react/lib/Shimmer';
import { Fabric } from '@fluentui/react/lib/Fabric';
import { mergeStyles } from '@fluentui/react/lib/Styling';

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

  const wrapperClass = mergeStyles({
    padding: 2,
    selectors: {
      '& > .ms-Shimmer-container': {
        margin: '10px 0',
      },
    },
  });

  const shimmerWithElementFirstRow = [
    { type: ShimmerElementType.line },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line },
    { type: ShimmerElementType.gap, width: '2%' },
    { type: ShimmerElementType.line },
  ];

  if(!data) {
    return (
      <Fabric className={wrapperClass}>
        <Shimmer shimmerElements={shimmerWithElementFirstRow} />
        <Shimmer shimmerElements={shimmerWithElementFirstRow} />
        <Shimmer shimmerElements={shimmerWithElementFirstRow} />
        <Shimmer shimmerElements={shimmerWithElementFirstRow} />
        <Shimmer shimmerElements={shimmerWithElementFirstRow} />
        <Shimmer shimmerElements={shimmerWithElementFirstRow} />
      </Fabric>
    )
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
