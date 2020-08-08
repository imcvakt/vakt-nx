import React from 'react';
import { render } from '@testing-library/react';

import NotificationsFeatureSubscriptions from './notifications-feature-subscriptions';

describe(' NotificationsFeatureSubscriptions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationsFeatureSubscriptions />);
    expect(baseElement).toBeTruthy();
  });
});
