import React from 'react';
import { render } from '@testing-library/react';

import Shimmer from './shimmer';

describe(' Shimmer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shimmer />);
    expect(baseElement).toBeTruthy();
  });
});
