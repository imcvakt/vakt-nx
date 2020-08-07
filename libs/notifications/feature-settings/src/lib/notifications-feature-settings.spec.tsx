import React from 'react';
import { render } from '@testing-library/react';

import NotificationsFeatureSettings from './notifications-feature-settings';

describe(' NotificationsFeatureSettings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NotificationsFeatureSettings />);
    expect(baseElement).toBeTruthy();
  });
});
