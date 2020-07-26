import React from 'react';
import { render } from '@testing-library/react';

import TradesPanel from './trades-panel';

describe(' TradesPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TradesPanel />);
    expect(baseElement).toBeTruthy();
  });
});
