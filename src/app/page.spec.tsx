import React from 'react';

import { render } from '@testing-library/react';

import Home from './page';

describe('Home', () => {
  it('Render Home', async () => {
    render(<Home />);
  });
});
