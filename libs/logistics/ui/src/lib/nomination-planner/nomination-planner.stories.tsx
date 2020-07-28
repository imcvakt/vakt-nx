import React from 'react';
import {
  NominationPlanner,
  NominationPlannerProps,
} from './nomination-planner';

export default {
  component: NominationPlanner,
  title: 'NominationPlanner',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: NominationPlannerProps = {};

  return <NominationPlanner />;
};
