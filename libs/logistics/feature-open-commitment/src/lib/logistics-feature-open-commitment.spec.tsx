import React from 'react';
import { render } from '@testing-library/react';

import LogisticsFeatureOpenCommitment from './logistics-feature-open-commitment';

describe(' LogisticsFeatureOpenCommitment', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogisticsFeatureOpenCommitment />);
    expect(baseElement).toBeTruthy();
  });
});
