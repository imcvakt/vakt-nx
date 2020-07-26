import React from 'react';
import {
  LogisticsFeaturePlanner,
  LogisticsFeaturePlannerProps,
} from './logistics-feature-planner';

export default {
  component: LogisticsFeaturePlanner,
  title: 'LogisticsFeaturePlanner',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: LogisticsFeaturePlannerProps = {};

  return <LogisticsFeaturePlanner />;
};
