import React from 'react';
import { render } from '@testing-library/react';

import LogisticsFeaturePlanner from './logistics-feature-planner';

describe(' LogisticsFeaturePlanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogisticsFeaturePlanner />);
    expect(baseElement).toBeTruthy();
  });
});
