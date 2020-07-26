import React from 'react';
import { render } from '@testing-library/react';

import Planner from './planner';

describe(' Planner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Planner />);
    expect(baseElement).toBeTruthy();
  });
});
