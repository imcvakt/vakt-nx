import React from 'react';
import { render } from '@testing-library/react';

import InspectionsPanel from './inspections-panel';

describe(' InspectionsPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InspectionsPanel />);
    expect(baseElement).toBeTruthy();
  });
});
