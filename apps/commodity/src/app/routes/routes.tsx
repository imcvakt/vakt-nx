import React, { Suspense, lazy } from 'react';
import { PrivateRoute } from './private-route';

import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';

import { OpenCommitmentProvider } from '@vakt-web/logistics/data-access';
import { MovementProvider } from '@vakt-web/logistics/data-access';

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
      <OpenCommitmentProvider>
        <MovementProvider>
          <PrivateRoute path="/" exact component={LogisticsFeatureOpenCommitment} />
          <PrivateRoute path="/logistics-home" component={LogisticsFeatureOpenCommitment} />
          <PrivateRoute path="/logistics-manage-nomination" component={LogisticsFeaturePlanner} />
        </MovementProvider>
      </OpenCommitmentProvider>
      <PrivateRoute path="/notifications-subscription" exact component={NotificationsFeatureSubscription} />
    </Suspense>
  );
};
