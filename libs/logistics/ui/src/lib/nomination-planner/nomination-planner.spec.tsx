import React from 'react';
import { render } from '@testing-library/react';

import NominationPlanner from './nomination-planner';

describe(' NominationPlanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NominationPlanner />);
    expect(baseElement).toBeTruthy();
  });
});
