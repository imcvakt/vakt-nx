import React from 'react';
import { render } from '@testing-library/react';

import MovementTable from './movement-table';

describe(' MovementTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovementTable />);
    expect(baseElement).toBeTruthy();
  });
});
