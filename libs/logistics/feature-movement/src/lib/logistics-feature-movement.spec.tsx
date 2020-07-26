import React from 'react';
import { render } from '@testing-library/react';

import LogisticsFeatureMovement from './logistics-feature-movement';

describe(' LogisticsFeatureMovement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogisticsFeatureMovement />);
    expect(baseElement).toBeTruthy();
  });
});
