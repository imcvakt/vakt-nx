import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import {LogisticsProvider} from '@vakt-web/logistics/data-access';

const LogisticsFeatureOpenCommitment = lazy(
  () => import('@vakt-web/logistics/feature-open-commitment')
    .then(({ LogisticsFeatureOpenCommitment }) =>
      ({ default: LogisticsFeatureOpenCommitment }))
);
const LogisticsFeaturePlanner = lazy(
  () => import('@vakt-web/logistics/feature-planner')
    .then(({ LogisticsFeaturePlanner }) =>
      ({ default: LogisticsFeaturePlanner }))
);
const LogisticsFeatureMovement = lazy(
  () => import('@vakt-web/logistics/feature-movement')
    .then(({ LogisticsFeatureMovement }) =>
      ({ default: LogisticsFeatureMovement }))
);

/* eslint-disable-next-line */
export interface RoutesProps {}

export const Routes = (props: RoutesProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/" exact component={() => <><h1>Home</h1><p>Do something cool here :)</p></>} />
      <LogisticsProvider>
        <Route path="/logistics-home" component={LogisticsFeatureOpenCommitment} />
        <Route path="/logistics-movements" component={LogisticsFeatureMovement} />
        <Route path="/logistics-nominations" component={LogisticsFeaturePlanner} />
      </LogisticsProvider>
    </Suspense>
  );
};
