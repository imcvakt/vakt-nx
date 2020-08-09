import React from 'react';

import { Shimmer, ShimmerElementType } from '@fluentui/react/lib/Shimmer';
import { Fabric } from '@fluentui/react/lib/Fabric';
import { mergeStyles } from '@fluentui/react/lib/Styling';

/* eslint-disable-next-line */
export interface ShimmerProps {}
export const CustomShimmer = (props: ShimmerProps) => {
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

  return (
    <Fabric className={wrapperClass}>
      <Shimmer shimmerElements={shimmerWithElementFirstRow} />
      <Shimmer shimmerElements={shimmerWithElementFirstRow} />
      <Shimmer shimmerElements={shimmerWithElementFirstRow} />
      <Shimmer shimmerElements={shimmerWithElementFirstRow} />
      <Shimmer shimmerElements={shimmerWithElementFirstRow} />
      <Shimmer shimmerElements={shimmerWithElementFirstRow} />
    </Fabric>
  );
};

export default CustomShimmer;
