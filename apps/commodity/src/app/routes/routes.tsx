import React, { Suspense, lazy } from 'react';
import { PrivateRoute } from './private-route';

import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';

import { LogisticsProvider } from '@vakt-web/logistics/data-access';

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

const NotificationsFeatureSubscription = lazy(
  () => import('@vakt-web/notifications/feature-subscription')
    .then(({ NotificationsFeatureSubscription }) =>
      ({ default: NotificationsFeatureSubscription }))
);

/* eslint-disable-next-line */
export interface RoutesProps {}

export const Routes = (props: RoutesProps) => {
  return (
    <Suspense fallback={<Spinner label="Navigating..." ariaLive="assertive" size={SpinnerSize.large} />}>
      <PrivateRoute path="/" exact component={() => <><p>Home</p><p>Do something cool here :)</p></>} />
      <LogisticsProvider>
        <PrivateRoute path="/logistics-home" component={LogisticsFeatureOpenCommitment} />
        <PrivateRoute path="/logistics-movements" component={LogisticsFeatureMovement} />
        <PrivateRoute path="/logistics-nominations" component={LogisticsFeaturePlanner} />
      </LogisticsProvider>
      <PrivateRoute path="/notifications-subscription" exact component={NotificationsFeatureSubscription} />
    </Suspense>
  );
};
