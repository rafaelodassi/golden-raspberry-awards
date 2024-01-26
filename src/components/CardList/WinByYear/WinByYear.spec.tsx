import React from 'react';

import { render } from '@testing-library/react';

import WinByYear from './WinByYear';

describe('WinByYear', () => {
  it('Render WinByYear', async () => {
    render(<WinByYear />);
  });
});
