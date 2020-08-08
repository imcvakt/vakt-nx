import React from 'react';
import { render } from '@testing-library/react';

import NotificationsFeatureSubscription from './notifications-feature-subscription';

describe(' NotificationsFeatureSubscription', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationsFeatureSubscription />);
    expect(baseElement).toBeTruthy();
  });
});
